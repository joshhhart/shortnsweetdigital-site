// GET /api/calendar/slots?date=2026-05-28
// Returns available 30-min slots for the configured calendar on the given date.
// PIT and calendar config live in Cloudflare env vars — never touch the browser.

interface Env {
  GHL_PIT: string;
  GHL_LOCATION_ID: string;
  GHL_CALENDAR_ID: string;
}

const GHL_VERSION = '2021-04-15';

export const onRequest: PagesFunction<Env> = async (ctx) => {
  if (ctx.request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const url = new URL(ctx.request.url);
  const date = url.searchParams.get('date'); // YYYY-MM-DD
  const timezone = url.searchParams.get('timezone') || 'America/New_York';
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return json({ error: 'invalid date' }, 400);
  }

  const { GHL_PIT, GHL_CALENDAR_ID } = ctx.env;
  if (!GHL_PIT || !GHL_CALENDAR_ID) {
    return json({ error: 'server not configured' }, 500);
  }

  // GHL expects ms-epoch range for the day.
  const startDate = Date.parse(`${date}T00:00:00Z`);
  const endDate = startDate + 24 * 60 * 60 * 1000;

  const ghlUrl = new URL(`https://services.leadconnectorhq.com/calendars/${GHL_CALENDAR_ID}/free-slots`);
  ghlUrl.searchParams.set('startDate', String(startDate));
  ghlUrl.searchParams.set('endDate', String(endDate));
  ghlUrl.searchParams.set('timezone', timezone);

  const res = await fetch(ghlUrl.toString(), {
    headers: {
      Authorization: `Bearer ${GHL_PIT}`,
      Version: GHL_VERSION,
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const body = await res.text();
    console.error('GHL free-slots error', res.status, body);
    return json({ error: 'upstream error', status: res.status }, 502);
  }

  const data: any = await res.json();
  // GHL response shape: { [YYYY-MM-DD]: { slots: ["2026-05-28T09:00:00-04:00", ...] }, traceId }
  const dayBucket = data?.[date];
  const slots: string[] = Array.isArray(dayBucket?.slots) ? dayBucket.slots : [];
  return json({ date, timezone, slots });
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
