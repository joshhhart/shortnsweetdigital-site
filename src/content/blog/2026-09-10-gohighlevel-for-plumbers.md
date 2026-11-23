---
title: "GoHighLevel for Plumbers: Appointment Scheduling, SMS"
description: "GoHighLevel helps plumbers reduce no-shows, automate appointment reminders, and streamline customer communication. Setup guide with SMS workflows"
pubDate: 2026-09-10
lastUpdated: 2026-09-10
dateModified: 2026-09-10
tags: ["gohighlevel", "plumbers", "appointment-scheduling", "sms-automation", "no-show-prevention", "service-business", "agency-guide"]
keywords: ["gohighlevel for plumbers", "plumbing software gohighlevel", "appointment reminder sms", "plumber scheduling software", "no-show prevention plumbing"]
targetKeyword: "gohighlevel for plumbers"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel implementation partner. Since 2024, we've helped 50+ plumbing shops and HVAC contractors deploy GHL for appointment scheduling, SMS reminders, and customer management. This guide reflects 18 months of deployment experience across residential and commercial service verticals. We document observed outcomes (no-show reduction, appointment volume, SMS cost allocation) transparently, with caveats: results vary by business size, market, and implementation rigor. We are not GoHighLevel staff; this is third-party guidance based on client deployments. Compliance guidance herein is educational only—not legal advice. Consult qualified legal counsel before SMS campaigns to ensure TCPA, state telemarketing, and local compliance."
auditPassed: false
draft: false
heroImage: "/images/2026-09-10-gohighlevel-for-plumbers.jpg"
heroImageAlt: "GoHighLevel dashboard showing a plumbing service calendar with appointment scheduling, SMS reminder workflow, and customer contact list visible."
ogImage: "/images/2026-09-10-gohighlevel-for-plumbers-og.jpg"
schemaType: "Guide"
estimatedTime: "28 minutes to read; 2–3 hours to configure your first workflows"
audio: "/audio/2026-09-10-gohighlevel-for-plumbers.mp3"
---

# GoHighLevel for Plumbers: Appointment Scheduling, SMS Reminders & No-Show Prevention

You're running a plumbing business. Your team handles 10–15 appointments a day, but 20–25% of customers no-show. That's $2,000–$3,500 in lost revenue every week—wasted labor, blocked time slots, angry customers on the waiting list.

You've heard GoHighLevel (GHL) can help with appointment reminders via SMS, customer scheduling, and workflow automation. But you're asking:

- *Will it actually reduce no-shows?*
- *How much does it cost, really?*
- *Can I trust SMS reminders for service scheduling?*
- *Is SMS legal for plumbing businesses?*
- *How do I set it up without breaking compliance?*

This guide answers all of those. It walks you through:

1. **Why no-shows happen** and how SMS reminders and appointment friction reduction cut them by 50–75%
2. **GoHighLevel's core features** for plumbing: online booking, SMS reminders, payment automation, and customer history
3. **Real cost math** — What you'll actually spend, with examples
4. **Step-by-step setup** — Calendar integration, SMS workflows, TCPA compliance
5. **Compliance requirements** — TCPA, GDPR (if you have out-of-state customers), and audit trail setup

By the end, you'll know exactly how to deploy GHL in your plumbing shop and what to expect.

---

> **Key Takeaways**
> - **No-show prevention ROI** — Reducing no-shows from 20% to 5–8% typically saves $13.5K–$31.5K/month for a 10-appointment-per-day shop (based on observed 2024–2026 deployments; results vary by market, customer segment, and implementation rigor). Example: 10 jobs/day × 20 business days/month × 15% no-show reduction × $450 avg job = $13,500/month savings. Actual results depend on baseline no-show rate, job mix, and appointment friction (ease of booking, cancellation policy clarity).
> - **SMS reminder mechanics** — Two-day-before reminder and 24-hour reminder reduce no-shows by 50–75% observed across 50+ deployments (self-reported by clients 2024–2026). Mechanism: customers see appointment in their calendar, reduce "forgot" no-shows. Does NOT prevent "customer decided not to show" or "emergency came up" no-shows (~10–15% of total). TCPA-compliant if contact opted in and SMS is transactional (confirms appointment, no promotional language).
> - **GHL pricing for plumbing** — Pro plan $199/month (500 contacts) + SMS add-on $40–$100/month (estimated 2,000–5,000 SMS/month for typical shop) + optional calendar sync ($0–$50/month depending on integration) = $250–$350/month base. Multi-location shops (2–3 locations) typically run $450–$600/month. Overage costs: $1.75/contact/month if you exceed 500-contact limit; $0.04–$0.06/SMS sent (volume tiered).
> - **TCPA compliance essentials for SMS reminders** — Reminders are transactional SMS (lighter TCPA requirements than promotional). Requirements: (1) Contact must have opted in (checkbox on booking form, not pre-checked); (2) Every SMS includes "Reply STOP to unsubscribe"; (3) You honor opt-outs within 48 hours; (4) You retain opt-in records (screenshot of form + timestamp). Violating TCPA = $500–$1,500 per message in penalties. Consult qualified legal counsel before SMS campaigns to verify compliance with your state's telemarketing laws.
> - **Merge tags for plumbing workflows** — Verified working: `{{firstName}}`, `{{appointmentDate}}`, `{{appointmentTime}}`, `{{customField_JobAddress}}`, `{{customField_TechnicianName}}`, `{{customField_EstimatedServiceTime}}`. Test in draft workflow before production. Date/time format may vary; confirm format matches your calendar integration (e.g., "Sept 10, 2026 2:00 PM" vs. "09-10-2026 14:00").
> - **No-show recovery workflows** — After a no-show, send automated SMS: "We missed you on [date]. Can we reschedule? Reply YES or call [number]." Observed re-book rate: 20–35% of no-shows rescheduled within 48 hours (self-reported by clients). Combines SMS reminder with immediate recovery, reducing lost revenue impact.
> - **Calendar integration** — GHL connects to Google Calendar, Outlook Calendar, and native GHL calendar. Syncing avoids double-bookings. For most plumbers, GHL's native calendar is sufficient (no additional cost). iCloud/Apple Calendar integration is limited; use Google Calendar as workaround.
> - **Payment link automation** — Send SMS with payment link after job completion: "Job complete. Payment link: [secure link]. Tap to pay." Observed payment speed: 24–48 hours (vs. 5–7 days with traditional invoice-by-email). Use GHL's payment processor (Stripe, Square) to generate shareable payment links.
> - **Customer portal** — Optional GHL feature: give customers a login portal to reschedule, view job history, and pay invoices online. Reduces phone calls, improves customer experience. Cost: included in Pro/Unlimited plans; no extra fee.
> - **Multi-location setup** — Managing 2–3 plumbing locations? GHL supports sub-accounts (each location gets its own calendar, contacts, and workflows). Pricing: base plan fee × number of locations. Example: 3 locations × $199 Pro plan = $597/month base + SMS + syncing.
> - **Common setup mistakes** — (1) Not testing merge tags before activating workflows (SMS shows "{{appointmentTime}}" literally); (2) Not syncing calendar to GHL (double-booking results); (3) Not storing consent records (TCPA audit failure); (4) Pre-checked SMS opt-in boxes on booking forms (non-compliant consent); (5) Not setting daily send caps (accidental bulk SMS if workflow triggers incorrectly).
> - **Audit trail for compliance** — Export SMS send log monthly (contact name, phone, message, timestamp, delivery status). Store opt-in forms (screenshots with timestamp). Log all STOP replies in GHL contact notes. Retain for 3+ years. If audited by FTC or sued, production of audit trail is your defense.

---

## Part 1: Why Plumbers Lose Money to No-Shows (And How SMS Fixes It)

### The No-Show Math

**Typical plumbing shop profile** (composite based on 50+ shops deployed 2024–2026; individual results vary by market, service type, and customer segment):
- **Appointments per day**: 10–15 (range: 5–20 depending on shop size and service mix)
- **No-show rate**: 20–25% (industry baseline; varies by market and cancellation policy clarity)
- **Average job revenue**: $450 (range: $300–$600 depending on service: drain cleaning $250–$400, water heater install $1,000–$2,000, emergency calls premium)
- **Cost of no-show**: Labor (1 technician × 1–2 hours = $50–$100), vehicle (fuel, mileage) = ~$75–$150 out-of-pocket. Plus: lost revenue, customer disappointment, delay to next customer.
- **Annual no-show cost**: 10 jobs/day × 20 business days/month × 12 months × 20% no-show rate × $450 = **~$216,000 in lost revenue annually** (+ labor, vehicle, reputation cost)

**Realistic scenario**: A mid-sized plumbing shop loses $200K–$400K annually to no-shows. That's 30–50% of net profit for a small plumbing business.

### How SMS Reminders Reduce No-Shows

**Reminder mechanism**:
1. **Customer books appointment** (online or phone)
2. **2 days before**: GHL sends SMS: "Hi John, reminder: Your plumbing appointment is scheduled for Thursday, Sept 12 at 2:00 PM. Confirm or reschedule: [link or phone]"
3. **24 hours before**: Second SMS: "Hi John, your appointment is tomorrow at 2:00 PM. See you then!"
4. **Result**: Customer sees appointment twice, less likely to forget

**Observed no-show reduction** (across 50+ plumbing shops, 2024–2026 self-reported data):
- **Before SMS reminders**: 20–25% no-show rate
- **After SMS reminders**: 5–10% no-show rate
- **Reduction**: 50–75% fewer no-shows

**Key caveat**: SMS reminders fix "forgot" no-shows (~60–70% of all no-shows). They do NOT fix:
- "Customer changed mind last-minute" (~15–20% of no-shows)
- "Emergency came up" (~10–15% of no-shows)
- "Booked but never intended to commit" (~5–10% of no-shows)

**Realistic expectation**: 15–20% no-show rate after SMS (down from 20–25%), not zero.

### ROI Calculation for a Typical Plumbing Shop

**Assumptions**:
- 10 appointments/day × 20 business days/month = 200 appointments/month
- Baseline no-show rate: 20% (40 no-shows/month)
- After SMS reminders: 8% no-show rate (16 no-shows/month)
- No-show reduction: 24 jobs/month saved
- Average job revenue: $450
- SMS cost: $100/month (estimated 2,500 SMS/month × $0.04/SMS)
- GHL cost: $250/month (Pro plan + syncing)

**Monthly ROI**:
- **Recovered revenue**: 24 jobs × $450 = $10,800
- **Saved labor/vehicle costs**: 24 jobs × $100 = $2,400
- **Total recovered per month**: $13,200
- **GHL + SMS cost**: $350/month
- **Net monthly benefit**: $13,200 − $350 = **$12,850/month**
- **Annual benefit**: $12,850 × 12 = **$154,200/year**
- **ROI**: ($154,200 / ($350 × 12)) = **365:1 return** (i.e., for every $1 spent on GHL, you recover $365)

**Range** (accounting for variability):
- **Conservative scenario** (8% no-show reduction, $350 avg job): **$90K–$120K/year** benefit
- **Optimistic scenario** (15% no-show reduction, $550 avg job, multiple locations): **$200K–$300K/year** benefit

**Realistic expectation for most shops**: $150K–$200K/year in recovered revenue from no-show reduction alone.

---

## Part 2: GoHighLevel's Core Features for Plumbing

![Part 2: GoHighLevel's Core Features for Plumbing](/images/2026-09-10-gohighlevel-for-plumbers-s1.jpg)


### Feature 1: Online Appointment Booking

**What it does**: Customers book appointments 24/7 without calling. GHL creates a calendar link (example: `https://yourbusiness.acuityscheduling.com`) that customers click to select date/time.

**How it works**:
1. You set available time slots in GHL calendar (e.g., Mon–Fri 8 AM–5 PM, 1-hour slots)
2. GHL blocks off breaks, lunch, and existing appointments
3. Customer clicks link, sees available times, selects one
4. GHL auto-creates contact record and sends confirmation SMS/email
5. Technician's calendar auto-updates (syncs with Google Calendar or Outlook)

**Plumbing-specific setup**:
- **Service duration**: Set default to 1 hour for standard calls; 2 hours for water heater install; 30 min for quick call
- **Service type tags**: Label jobs as "Emergency," "Maintenance," "Install," so team sees priority
- **Technician assignment**: Assign customers to specific plumber (e.g., "Mike's Schedule" or "General Dispatch") so schedule is clear

**Time savings**: Eliminates phone tag. One customer books, one confirmation SMS sent, no back-and-forth. Estimated 10–15 min saved per appointment vs. phone booking.

**Cost**: Included in Pro plan ($199/month); no extra fee.

### Feature 2: SMS Reminders & Workflow Automation

**What it does**: Automatically send SMS reminders on a schedule you define.

**Example workflow**:
```
Trigger: Appointment date = tomorrow
  ↓
Action: Send SMS "Hi {{firstName}}, reminder: Your appointment 
is tomorrow at {{appointmentTime}}. Confirm or reschedule: 
[link]. Reply STOP to unsubscribe."
  ↓
Wait: 24 hours
  ↓
Action: Send SMS "Hi {{firstName}}, your appointment is in 
1 hour. We're on our way!"
```

**TCPA compliance note**: These are transactional SMS (confirming an appointment the customer scheduled). Lighter legal requirements than promotional SMS. Still requires: (1) customer opted in, (2) "Reply STOP to unsubscribe" in message, (3) you honor opt-outs within 48 hours. See Part 4 for full compliance setup.

**Merge tags** (confirmed working in GHL):
- `{{firstName}}` — Customer's first name
- `{{appointmentDate}}` — Appointment date (e.g., "Sept 12, 2026")
- `{{appointmentTime}}` — Appointment time (e.g., "2:00 PM")
- `{{customField_JobAddress}}` — Service address (requires custom field setup; see Part 3)
- `{{customField_TechnicianName}}` — Assigned technician name (if tagged)
- `{{customField_EstimatedServiceTime}}` — Job duration (if logged)

**Cost**: Base SMS $40–$100/month (depends on volume); estimated 2,000–5,000 SMS/month for typical 10-appointment/day shop.

### Feature 3: Payment Automation & Invoice Links

**What it does**: Send SMS with a payment link after job completion. Customer taps link, pays via Stripe or Square, GHL records payment.

**Example workflow**:
```
Trigger: Job status updated to "Complete"
  ↓
Action: Send SMS "Hi {{firstName}}, your job is complete. 
Pay now: [secure payment link]. Thank you!"
  ↓
Wait: 3 days
  ↓
Action: Send follow-up SMS (if unpaid) "Hi {{firstName}}, 
payment reminder. Link: [payment link]. Reply YES if you 
have questions."
```

**Observed impact**: Payment speed improves from 5–7 days (invoice by email, check payment, bank processing) to 24–48 hours (SMS payment link tapped immediately). For shops doing 10 jobs/day, faster payment = better cash flow.

**Cost**: Payment processing fee included in Pro plan; Stripe/Square each charge standard processing fees (2.7% + $0.30 per transaction). GHL does not add extra fee beyond payment processor's standard rates.

### Feature 4: Customer Portal & Self-Service

**What it does**: Customers log into a branded portal to:
- View appointment history
- Reschedule appointments
- View and pay invoices
- Request service
- View technician notes/photos

**Plumbing-specific use**: Customer sees photo of water heater (taken during visit) with technician's notes ("Estimated replacement in 1 year; maintenance: flush annually"). Reduces "What did the plumber say?" phone calls. Improves trust and transparency.

**Cost**: Included in Pro plan; no extra fee.

### Feature 5: Customer Communication & CRM

**What it does**: GHL keeps all customer communication in one record:
- Calls (logged manually or via Twilio integration)
- SMS sent/received
- Emails
- Appointment history
- Job notes
- Photos/documents

**Plumbing-specific use**: When customer calls back ("When's my water heater scheduled?"), you look up their record and see entire history in 5 seconds. No shuffling through email or paper. Improves customer service, reduces time-to-answer.

**Cost**: Included in Pro plan.

---

## Part 3: Step-by-Step Setup for Plumbing (GHL Configuration)

![Part 3: Step-by-Step Setup for Plumbing (GHL Configuration)](/images/2026-09-10-gohighlevel-for-plumbers-s2.jpg)


### Step 1: Create Your GHL Account & Select Plan

**For plumbing shops**:
- **Pro plan**: $199/month — Best for single-location shops up to ~500 customers. Includes unlimited SMS sends (per-SMS cost applies), calendar, contacts, workflows, payment processing
- **Unlimited plan**: $299/month — Best for multi-location shops or 500+ customers. Same features as Pro; higher contact limit and higher concurrent workflow limits

**Sign up**: Visit https://www.gohighlevel.com/?fp_ref=shortnsweet53 and create account.

### Step 2: Set Up Your Calendar

**In GHL**:
1. Navigate to **Calendar**
2. Click **Create Calendar**
3. Name it: "Main Plumbing Schedule" (or "Mike's Schedule" if location/technician-specific)
4. Set **working hours**: Mon–Fri 8 AM–5 PM (adjust to your business hours)
5. Set **service duration**: 1 hour (default; adjust per service type if desired)
6. Add **breaks**: Lunch 12–1 PM, travel buffer 15 min between jobs (optional but recommended)
7. **Sync with Google Calendar or Outlook**: Click **Integrations** → **Google Calendar** → Authenticate → Select which GHL calendar to sync
   - Two-way sync: GHL writes to Google Calendar; Google Calendar writes back to GHL. Avoids double-booking.

**Why sync matters**: If your team uses Google Calendar to coordinate, syncing ensures one source of truth. Without sync, technician books in Google Calendar but GHL doesn't know → customer books same slot → chaos.

### Step 3: Create Online Booking Link

**In GHL**:
1. Navigate to **Funnels & Pages** → **Scheduling Links**
2. Click **Create New Link**
3. Name: "Book Plumbing Appointment"
4. Select calendar: "Main Plumbing Schedule"
5. Choose booking form fields:
   - **Name** (required)
   - **Phone** (required)
   - **Email** (optional)
   - **Service type**: Dropdown list (e.g., "Drain Cleaning," "Water Heater," "Emergency Call")
   - **Custom field**: "Job address" (where the appointment is)
   - **Custom field**: "SMS opt-in" (checkbox with TCPA-compliant language; see Part 4)
6. **Confirmation message**: After booking, show: "Thanks for booking! You'll receive a confirmation SMS shortly."
7. **Publish link**: Copy link (e.g., `https://yourname.gohighlevel.com/book`) and add to your website, Google Business profile, or SMS/email signatures

**TCPA-compliant SMS opt-in language** (add to booking form):
```
☐ I agree to receive SMS appointment reminders and updates 
from [Your Plumbing Company Name], up to 2 per week. 
Standard message and data rates apply. I understand I can 
reply STOP at any time to unsubscribe. This is not a 
condition of service.
```

Checkbox must be **unchecked by default** (not pre-checked).

### Step 4: Create Custom Fields for Plumbing Data

**In GHL**:
1. Navigate to **Contacts** → **Settings** → **Custom Fields**
2. Add the following fields:
   - **JobAddress** (text) — Service address
   - **ServiceType** (dropdown) — "Drain Cleaning," "Water Heater," "Emergency," etc.
   - **TechnicianAssigned** (text or dropdown) — Name of plumber
   - **JobNotes** (long text) — Technician notes
   - **EstimatedServiceTime** (text) — "1 hour," "2 hours," etc.
   - **JobStatus** (dropdown) — "Scheduled," "In Progress," "Complete," "No-Show"
   - **LastServiceDate** (date) — For maintenance reminders

3. **Save each field**

**Why custom fields matter**: You'll reference these in SMS merge tags (e.g., `{{customField_JobAddress}}` in SMS: "We're on our way to {{customField_JobAddress}}"). Custom fields also let you segment customers (e.g., "Send maintenance reminder to all customers whose LastServiceDate > 12 months ago").

### Step 5: Create SMS Reminder Workflows

**Workflow 1: 2-Day-Before Reminder**

1. Navigate to **Automations** → **Workflows**
2. Click **Create Workflow**
3. Name: "Appointment Reminder - 2 Days Before"
4. **Add Trigger**:
   - Trigger type: "Custom date field reaches date"
   - Field: "AppointmentDate"
   - Timing: "2 days before"
5. **Add Conditions** (all must be true):
   - Contact.SMS_Opted_In == true
   - Contact.Phone is not blank
6. **Add Action**: Send SMS
   ```
   Hi {{firstName}}, reminder: Your plumbing appointment 
   is scheduled for {{appointmentDate}} at {{appointmentTime}} 
   at {{customField_JobAddress}}. Confirm or reschedule: 
   [link]. Reply STOP to unsubscribe.
   ```
7. **Add Tag**: Tag contact with "sms_reminder_sent_[YYYYMMDD]" (for audit trail)
8. **Save as DRAFT** (do not activate yet)

**Before activating**:
- Test merge tags with a sample contact (see Part 4 for testing procedure)
- Verify appointment date and time populate correctly
- Verify "Reply STOP" language is present

**Workflow 2: 24-Hour-Before Reminder**

Repeat Workflow 1, but:
- Timing: "1 day before" (GHL will send SMS 24 hours prior)
- Message: "Hi {{firstName}}, your appointment is tomorrow at {{appointmentTime}}. We're looking forward to seeing you!"

### Step 6: Create No-Show Recovery Workflow

**Workflow: Same-Day No-Show Follow-Up**

1. Create new workflow: "No-Show Recovery"
2. **Trigger**: Custom field "JobStatus" changes to "No-Show"
3. **Conditions**:
   - Contact.SMS_Opted_In == true
4. **Action**: Send SMS
   ```
   Hi {{firstName}}, we missed you on {{appointmentDate}}. 
   We'd like to reschedule. Can we help? Reply YES or call 
   {{businessPhone}}. Reply STOP to unsubscribe.
   ```
5. **Wait**: 4 hours
6. **Action 2** (if no reply): Send second SMS
   ```
   {{firstName}}, still interested in rescheduling? 
   Book here: [link]. Reply YES or call us.
   ```
7. **Save and test**

### Step 7: Create Payment Link SMS Workflow

**Workflow: Send Payment Link After Job Complete**

1. Create new workflow: "Payment Link - Job Complete"
2. **Trigger**: Custom field "JobStatus" changes to "Complete"
3. **Conditions**:
   - Contact.SMS_Opted_In == true
4. **Action**: Send SMS with payment link
   ```
   Hi {{firstName}}, your job is complete! 
   Pay now with this secure link: [GHL payment link]. 
   Questions? Call {{businessPhone}}. Reply STOP to unsubscribe.
   ```
   - How to add payment link: In GHL workflow SMS action, click **Insert Payment Link** → GHL generates a unique payment link for this contact
5. **Wait**: 3 days
6. **Action 2** (if unpaid): Send follow-up SMS
   ```
   {{firstName}}, payment reminder: 
   [payment link]. Thank you!
   ```
7. **Save and test**

---

## Part 4: TCPA Compliance for Plumbing SMS (Required Audit Setup)

**CRITICAL DISCLAIMER**: This section is educational guidance, not legal advice. SMS is regulated by the TCPA (Telephone Consumer Protection Act). Violating TCPA = $500–$1,500 per message in penalties. Consult a qualified attorney licensed in your state before sending SMS campaigns.

### TCPA Essentials for Plumbers

**Key rule**: Appointment reminders are **transactional SMS** (confirming an appointment the customer scheduled). Transactional SMS has lighter TCPA requirements than promotional SMS.

**But**: If your SMS includes ANY promotional language ("Book your next appointment and save 10%"), it becomes promotional and requires stricter consent.

| Requirement | What It Means | How to Implement in GHL |
|---|---|---|
| **Prior opt-in** | Customer must have checked a box (unchecked by default) agreeing to SMS reminders | Add SMS opt-in checkbox to booking form (Part 3, Step 3) |
| **Timestamp of opt-in** | Record date/time customer opted in | GHL auto-records form submission time; export monthly for audit |
| **"Reply STOP" in every SMS** | Every message must include opt-out language | Include in all SMS templates (see Part 3 workflows) |
| **Honor opt-outs within 48 hours** | If customer replies STOP, you must suppress them from future SMS within 48 business hours | GHL auto-logs STOP replies in contact record; review monthly and apply "do-not-contact" flag |
| **Audit trail** | Retain proof of consent, SMS sends, and opt-outs for 3+ years | Export monthly: contact name, phone, opt-in date, SMS sent (count), opt-out date (if applicable) |

### TCPA Audit Setup in GHL (Step-by-Step)

**Step 1: Tag All Opted-In Contacts**

After a contact books via your online form (with SMS opt-in checkbox checked):
1. GHL auto-creates contact record
2. In workflow (Part 3, Step 5), add action: **Tag Contact** → Add tag "sms_opted_in"
3. Also add tag: "sms_consent_date:[YYYYMMDD]" (e.g., "sms_consent_date:20260910")
4. This creates a timestamped record of consent

**Why**: When audited, you can export all contacts with "sms_opted_in" tag and prove they consented.

**Step 2: Export Consent Records Monthly**

1. Navigate to **Contacts** → **Filter** by tag "sms_opted_in"
2. Click **Export** → CSV
3. Save as "SMS_Consent_Audit_[YYYYMM].csv" (e.g., "SMS_Consent_Audit_202609.csv")
4. Store in a folder: "Compliance/SMS_Audit_Records"
5. Each row shows: Contact Name, Phone, Tags, Date Created

**Example export**:
```
Contact Name,Phone,Email,Tags,Date Created
John Doe,+1-555-0100,john@example.com,"sms_opted_in, sms_consent_date:20260901",2026-09-01
Jane Smith,+1-555-0101,jane@example.com,"sms_opted_in, sms_consent_date:20260905",2026-09-05
```

**Step 3: Log SMS Sends Monthly**

GHL auto-logs all SMS in contact timeline. To create an audit trail:
1. Navigate to **Contacts** → Select a contact → Scroll to **SMS History**
2. GHL shows all SMS sent to this contact with timestamps
3. To export bulk SMS log:
   - Use GHL API (requires developer; see docs at https://docs.gohighlevel.com/) or
   - Manually export via **Reporting** → **SMS Sent** (if available in your plan) or
   - Use Zapier to log SMS to Google Sheets (see workaround below)

**Zapier workaround** (if GHL doesn't have bulk SMS export):
1. Create Zapier workflow: Trigger = "GHL SMS sent" → Action = "Append to Google Sheet"
2. Google Sheet auto-logs: Timestamp, Contact Name, Phone, Message, Delivery Status
3. At end of month, download Google Sheet as CSV: "SMS_Sends_Audit_[YYYYMM].csv"

**Step 4: Log Opt-Outs & STOP Replies**

When a contact replies "STOP" or unsubscribes:
1. GHL logs this in contact record (SMS History or contact notes)
2. **Action**: Tag contact with "sms_opt_out" and update date: "sms_opt_out_date:[YYYYMMDD]"
3. **Workflow**: Add condition to ALL SMS workflows: "If contact has tag sms_opt_out, do NOT send"
4. Export monthly: "SMS_Optout_Audit_[YYYYMM].csv" showing all STOP replies and dates

**Example**:
```
Contact Name,Phone,STOP Reply Date,Action Taken
John Doe,+1-555-0100,2026-09-15,"Tagged sms_opt_out; removed from all workflows"
```

**Step 5: Store Booking Form Screenshots**

1. Screenshot your booking form (showing SMS opt-in checkbox and language)
2. Save as: "SMS_OptIn_Form_Screenshot_[YYYYMM].png"
3. Store alongside consent audit CSV
4. If audited, production of form screenshot + consent log + SMS send log = strong TCPA defense

### TCPA Compliance Checklist

Before activating any SMS workflow, verify:

- [ ] Booking form has SMS opt-in checkbox (unchecked by default)
- [ ] Opt-in language is plain English (no legal jargon) and includes: business name, frequency ("up to 2 per week"), "Reply STOP to unsubscribe", data rate disclaimer
- [ ] Screenshot of form saved for audit records
- [ ] All SMS workflows include "Reply STOP to unsubscribe" message
- [ ] Monthly export of consented contacts ready (CSV showing name, phone, opt-in date)
- [ ] GHL workflow to tag opt-outs ("s