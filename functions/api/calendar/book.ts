// POST /api/calendar/book
// Body: { firstName, lastName, email, phone, startTime, quiz: {...} }
// Upserts the contact, then creates the appointment.

interface Env {
  GHL_PIT: string;
  GHL_LOCATION_ID: string;
  GHL_CALENDAR_ID: string;
}

interface Body {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  startTime: string; // ISO with offset, exactly as returned by /slots
  timezone?: string;
  quiz?: Record<string, string>;
}

const GHL_VERSION = '2021-04-15';

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  const { GHL_PIT, GHL_LOCATION_ID, GHL_CALENDAR_ID } = ctx.env;
  if (!GHL_PIT || !GHL_LOCATION_ID || !GHL_CALENDAR_ID) {
    return json({ error: 'server not configured' }, 500);
  }

  let body: Body;
  try {
    body = await ctx.request.json();
  } catch {
    return json({ error: 'invalid json' }, 400);
  }

  if (!body.email || !body.firstName || !body.startTime) {
    return json({ error: 'missing required fields' }, 400);
  }

  // Step 1: upsert contact (idempotent on email within the location).
  const tags = ['strategy-call', 'qualified-lead'];
  if (body.quiz?.revenue) tags.push(`revenue:${body.quiz.revenue}`);
  if (body.quiz?.industry) tags.push(`industry:${body.quiz.industry}`);

  const customFields = body.quiz
    ? Object.entries(body.quiz).map(([key, value]) => ({ key, field_value: value }))
    : [];

  const contactRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GHL_PIT}`,
      Version: GHL_VERSION,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      firstName: body.firstName,
      lastName: body.lastName || '',
      email: body.email,
      phone: body.phone || undefined,
      tags,
      customFields,
      source: 'website-quiz',
    }),
  });

  if (!contactRes.ok) {
    const txt = await contactRes.text();
    console.error('upsert contact failed', contactRes.status, txt);
    return json({ error: 'contact create failed' }, 502);
  }
  const contactJson: any = await contactRes.json();
  const contactId = contactJson?.contact?.id || contactJson?.id;
  if (!contactId) return json({ error: 'no contact id returned' }, 502);

  // Step 2: create appointment. End = start + 30 min (matches the standard
  // strategy-call slot length). GHL accepts ISO 8601 with timezone offset.
  const start = new Date(body.startTime);
  if (Number.isNaN(start.getTime())) return json({ error: 'invalid startTime' }, 400);
  const end = new Date(start.getTime() + 30 * 60 * 1000);

  const apptRes = await fetch('https://services.leadconnectorhq.com/calendars/events/appointments', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GHL_PIT}`,
      Version: GHL_VERSION,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      calendarId: GHL_CALENDAR_ID,
      locationId: GHL_LOCATION_ID,
      contactId,
      startTime: body.startTime,
      endTime: end.toISOString(),
      title: `Strategy call — ${body.firstName} ${body.lastName || ''}`.trim(),
      appointmentStatus: 'confirmed',
      ignoreDateRange: false,
      toNotify: true,
    }),
  });

  if (!apptRes.ok) {
    const txt = await apptRes.text();
    console.error('appointment failed', apptRes.status, txt);
    return json({ error: 'booking failed', detail: txt.slice(0, 300) }, 502);
  }

  const appt: any = await apptRes.json();
  return json({ ok: true, appointmentId: appt?.id, startTime: body.startTime });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
