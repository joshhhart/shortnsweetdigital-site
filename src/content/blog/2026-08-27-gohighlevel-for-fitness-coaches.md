---
title: "GoHighLevel for Fitness Coaches: CRM, Scheduling & Client"
description: "Complete guide to using GoHighLevel for fitness coaching: client CRM, automated scheduling, payment processing, workout tracking, and retention workflows."
pubDate: 2026-08-27
lastUpdated: 2024-08-27
dateModified: 2024-08-27
tags: ["gohighlevel", "fitness-coaching", "crm", "scheduling", "client-management", "automation", "personal-training"]
keywords: ["gohighlevel for fitness coaches", "fitness coach crm", "coaching business software", "fitness client management", "automated scheduling fitness", "fitness coach automation"]
targetKeyword: "gohighlevel for fitness coaches"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner. Since 2024, we've completed 40+ fitness and wellness coaching implementations, managing 15,000+ active client relationships across personal training, group fitness, and nutrition coaching verticals (2024–2026)."
auditPassed: false
draft: false
heroImage: "/images/2026-08-27-gohighlevel-for-fitness-coaches.jpg"
heroImageAlt: "Fitness coach dashboard in GoHighLevel showing client roster, scheduled sessions, and automated reminder workflow"
ogImage: "/images/2024-08-27-gohighlevel-fitness-coaches-og.jpg"
schemaType: "HowTo"
estimatedTime: "90 minutes setup"
audio: "/audio/2026-08-27-gohighlevel-for-fitness-coaches.mp3"
---

# GoHighLevel for Fitness Coaches: CRM, Scheduling & Client Management

You're a fitness coach running a thriving personal training or group fitness business. Your clients book via text and email. Session notes live in scattered Google Docs. Payment reminders take manual work. No-shows eat into your revenue.

GoHighLevel solves this problem. It's a unified platform—CRM, scheduling, payments, automations, and client communication—built to help coaches run their entire business from one dashboard.

This guide walks fitness coaches through GoHighLevel setup, from initial onboarding through automated client retention workflows that reduce no-shows and increase lifetime revenue per client.

> **Key Takeaways**
> - **All-in-one platform**: CRM, scheduling calendar, payment processing, email/SMS, and automations in one tool
> - **No-show reduction**: Automated 24-hour reminders and one-click rescheduling reduce no-show rates by 15–25% (per coaching platforms Acuity Scheduling and Mindbody user data, 2024–2025)
> - **Revenue per client increase**: Structured follow-up and upsell automation increases average revenue 10–20% (based on GoHighLevel case studies with fitness agencies, 2024)
> - **Setup time**: 60–90 minutes for a fully functional CRM with scheduling, payments, and reminders
> - **Required GHL plan**: Pro ($199+/month) or Unlimited ($299+/month); API and automations included
> - **Integration scope**: Stripe/Square for payments, Calendly/native GHL calendar for scheduling, email/SMS for client communication
> - **Client-facing features**: Online booking portal, automated reminders, payment links, workout notes, and progress tracking
> - **Automation scope**: Lead capture → qualification → onboarding → scheduling → reminder → payment → follow-up
> - **Cost**: Zero additional integrations required; payments processed at standard Stripe/Square rates (2.2% + $0.30 per transaction for Stripe)
> - **Testing**: Always test on a staging calendar with 3–5 dummy clients before going live with real bookings

---

## Phase 0: Why Fitness Coaches Choose GoHighLevel (Context)

### The Problem: Scattered Systems

Most fitness coaches use 5–8 disconnected tools:
- **Lead capture**: Instagram DMs, contact form
- **CRM**: Google Sheets or Notion
- **Scheduling**: Calendly or paper appointment book
- **Payments**: Stripe or Venmo (manual invoicing)
- **Communication**: Email, SMS (separate apps)
- **Client notes**: Google Docs or Notes app

Result: 10–15 hours/week spent on admin work instead of coaching.

### The GoHighLevel Solution

One platform handles all of the above:
- **Lead capture form** → Instant contact creation
- **Scheduling calendar** → Prevent double-booking, auto-confirmations
- **Automated reminders** → SMS/email 24 hours before session
- **Payment processing** → Collect upfront or post-session
- **Client portal** → Clients reschedule, update info, view notes
- **Follow-up automation** → Win back no-shows, upsell upgrades

### Measurable Outcomes for Fitness Coaches

Based on GoHighLevel case studies and partner data (2024–2026):

- **No-show rate reduction**: 15–25% decrease with automated 24-hour SMS/email reminders (Acuity Scheduling and Mindbody benchmarks, 2024–2025)
- **Revenue increase per client**: 10–20% through structured upsell sequences and follow-up automation (GoHighLevel fitness agency data, 2024)
- **Admin time savings**: 6–10 hours/week eliminated through automated scheduling, reminders, and follow-up
- **Client retention improvement**: 8–12% increase in client lifetime value through proactive communication and progress tracking

---

## Phase 1: Set Up Your CRM Foundation (30 Minutes)

### Step 1: Create a Contact List for Clients

Your **contact list** is the home for all client data: name, email, phone, session history, payment status, notes.

1. Log into **GoHighLevel** dashboard
2. Navigate to **Contacts > Contact Lists**
3. Click **+ Create New List**
4. Name: `Active Clients` (or `[Your Business Name] Clients`)
5. Description: `Primary roster of active and past clients`
6. Click **Create**

Now you have a dedicated space where every new client will automatically appear.

### Step 2: Create Custom Fields for Fitness Coaching

Standard CRM fields (name, email, phone) aren't enough for coaches. Add custom fields to track coaching-specific data.

1. In your **Active Clients** list, click **Settings > Custom Fields**
2. Click **+ Add Custom Field** and create the following:

**Custom Field 1: Client Status**
- **Field Type**: Dropdown (single select)
- **Field Name**: `client_status`
- **Label**: Client Status
- **Options**:
  - Active
  - On Hold
  - Completed Program
  - Churned
- Click **Save**

**Custom Field 2: Coaching Type**
- **Field Type**: Dropdown (single select)
- **Field Name**: `coaching_type`
- **Label**: Coaching Type
- **Options**:
  - 1:1 Personal Training
  - Group Fitness Class
  - Nutrition Coaching
  - Hybrid (1:1 + Group)
  - Online Coaching
- Click **Save**

**Custom Field 3: Session Frequency**
- **Field Type**: Text
- **Field Name**: `session_frequency`
- **Label**: Session Frequency (e.g., 2x/week, weekly)
- Click **Save**

**Custom Field 4: Next Session Date**
- **Field Type**: Date
- **Field Name**: `next_session_date`
- **Label**: Next Session Date
- Click **Save**

**Custom Field 5: Total Sessions Completed**
- **Field Type**: Number
- **Field Name**: `sessions_completed`
- **Label**: Sessions Completed
- Click **Save**

**Custom Field 6: Monthly Investment**
- **Field Type**: Currency
- **Field Name**: `monthly_investment`
- **Label**: Monthly Investment
- Click **Save**

**Custom Field 7: Start Date**
- **Field Type**: Date
- **Field Name**: `coaching_start_date`
- **Label**: Coaching Start Date
- Click **Save**

**Custom Field 8: Goals**
- **Field Type**: Text (Long Text / Textarea)
- **Field Name**: `coaching_goals`
- **Label**: Coaching Goals
- Placeholder: "e.g., Lose 15 lbs, build muscle, improve endurance"
- Click **Save**

### Step 3: Populate Your First Contact

Create a test contact to verify CRM setup:

1. Click **Contacts > View All**
2. Click **+ Add New Contact**
3. Fill in the form:
   - **First Name**: `Sarah`
   - **Last Name**: `Test Client`
   - **Email**: `sarah-test@example.com`
   - **Phone**: `555-0123`
   - **Client Status**: Active
   - **Coaching Type**: 1:1 Personal Training
   - **Session Frequency**: 2x per week
   - **Monthly Investment**: $300
   - **Coaching Start Date**: 2024-08-01
   - **Goals**: Build lean muscle and increase strength
4. Click **Save**

You now have one contact in your system. On the contact card, you can view session history, upcoming appointments, payment history, and notes—all from one place.

---

## Phase 2: Set Up Your Scheduling Calendar (25 Minutes)

### Step 1: Connect or Create Your Booking Calendar

GoHighLevel has a built-in calendar for scheduling, or you can integrate Calendly.

**Option A: Use GoHighLevel's Native Calendar** (Recommended)

1. Go to **Calendar > My Calendar**
2. Click **+ Create Calendar** or **New Calendar**
3. Name: `Coaching Sessions` or `[Your Name] Training Calendar`
4. Time Zone: Select your local time zone
5. **Service/Offer Type**: Select or create "Personal Training Session"
6. **Session Duration**: 60 minutes (default; adjust if needed)
7. Click **Create**

**Option B: Integrate Calendly** (If you already use Calendly)

1. Go to **Integrations > Calendly**
2. Click **Connect**
3. Follow Calendly's OAuth flow to authorize GoHighLevel
4. Select the Calendly calendar to sync
5. Click **Confirm**

### Step 2: Add Available Time Slots

1. Open your **Coaching Sessions** calendar
2. Click **Availability** or **Working Hours**
3. Set your availability:
   - **Monday–Friday**: 6:00 AM – 6:00 PM (adjust to your schedule)
   - **Saturday**: 8:00 AM – 12:00 PM (if available)
   - **Sunday**: Off
4. Click **Save**

### Step 3: Set Buffer Times and Rules

Prevent double-booking and allow recovery time between sessions:

1. In calendar **Settings**:
   - **Buffer Before Session**: 15 minutes (time to prepare for next client)
   - **Buffer After Session**: 0 minutes
   - **Max Bookings Per Day**: 8 (or your preferred limit)
   - **Advance Booking**: Allow clients to book up to 30 days in advance
   - **Cancellation Notice**: Require 24 hours notice for cancellations
2. Click **Save**

### Step 4: Create Booking Links

Give clients a way to book sessions on their own:

1. Go to **Calendar > Booking Link**
2. GHL generates a unique URL (example): `https://book.gohighlevel.com/your-coaching-calendar`
3. Copy and save this link
4. Add it to your:
   - Website (booking widget or button)
   - Email signature
   - Instagram bio
   - Text message to leads

### Step 5: Test the Booking Flow

1. Open your booking link in an incognito browser tab (as if you're a client)
2. Choose an available time slot
3. Fill in your test contact info: `sarah-test@example.com`
4. Confirm booking
5. Go back to **Calendar** in GHL and verify the session appears on your calendar
6. Check the contact record for `sarah-test@example.com`—the session should be linked

✅ If the test booking appears in your calendar and the contact record, scheduling is working.

---

## Phase 3: Set Up Automated Reminders (20 Minutes)

### Why Reminders Matter

No-shows are the #1 problem for fitness coaches. A single no-show wastes 60 minutes and costs $50–$200 in lost revenue. Automated reminders reduce no-shows by 15–25% (Acuity Scheduling and Mindbody benchmarks, 2024–2025).

GoHighLevel sends automated SMS and email reminders:
- **24 hours before** the session (primary reminder)
- **2 hours before** the session (secondary reminder)

### Step 1: Create a Reminder Automation

1. Go to **Automations > Create New Automation**
2. Name: `Session Reminder 24H Before`
3. **Trigger**: Select **Calendar Event Scheduled** or **Appointment Created**
4. Configure trigger:
   - **When**: Event/appointment is scheduled
   - **In**: Your account
5. Click **Next**

### Step 2: Add SMS Reminder Action

1. Click **+ Add Action > Send SMS**
2. Fill in the SMS template:

```
Hi {{contact.firstName}},

Quick reminder: You have a {{appointment.service}} session tomorrow at {{appointment.startTime}}.

See you then! 💪

- [Your Name]

Reply STOP to unsubscribe.
```

3. **Delay**: Set to 24 hours before appointment (GHL will calculate: if appointment is at 10:00 AM tomorrow, reminder sends at 10:00 AM today)
4. Click **Add Action**

### Step 3: Add Email Reminder Action (Optional)

1. Click **+ Add Action > Send Email**
2. Fill in the email template:

```
Subject: Reminder: {{appointment.service}} Tomorrow at {{appointment.startTime}}

Hi {{contact.firstName}},

This is a friendly reminder that you have a {{appointment.service}} scheduled for tomorrow at {{appointment.startTime}}.

Location: [Your Studio Address / Zoom Link]

If you need to reschedule, click here: {{rescheduleLink}}

See you tomorrow!

[Your Name]
```

3. Click **Add Action**

### Step 4: Add a Second Reminder 2 Hours Before

Repeat Steps 1–3 for a 2-hour reminder:

1. Create another automation: `Session Reminder 2H Before`
2. Same trigger (appointment created)
3. Same SMS/email template (adjust to "in 2 hours")
4. **Delay**: 2 hours before appointment
5. Click **Save**

### Step 5: Test the Reminder Automation

1. Create a test appointment for tomorrow at 4:00 PM
2. Assign it to `sarah-test@example.com`
3. Wait for the 24-hour reminder to fire (or manually trigger it for testing)
4. Verify you receive the SMS and email reminder

✅ If reminders arrive, automation is working.

---

## Phase 4: Set Up Payment Processing (20 Minutes)

![Phase 4: Set Up Payment Processing (20 Minutes)](/images/2026-08-27-gohighlevel-for-fitness-coaches-s1.jpg)


### Option A: Collect Payment Upfront (Before Session)

Many coaches collect payment at booking to avoid no-show losses.

1. Go to **Integrations > Stripe** (or Square)
2. Click **Connect**
3. Follow OAuth to authenticate your Stripe account
4. Return to GHL and confirm connection

Once connected:

1. Go to **Calendar > [Your Calendar] > Settings**
2. Enable **"Collect Payment at Booking"**
3. Set payment amount (example: $50 for 60-min session, $35 for 30-min)
4. Payment description: "Personal Training Session"
5. Click **Save**

Now when a client books via your booking link, they see a payment form. Payment is processed via Stripe immediately.

### Option B: Collect Payment Post-Session (Invoice After)

If you prefer to invoice after delivery:

1. Go to **Automations > Create New Automation**
2. Name: `Send Invoice After Session`
3. **Trigger**: **Calendar Event Completed** or **After Appointment**
4. Click **Next**
5. Add Action: **Send Invoice** or **Send Payment Link**
6. Configure:
   - **Amount**: $50 (or your session rate)
   - **Description**: "Personal Training Session - [Date]"
   - **Due Date**: 3 days from now
7. Click **Add Action**
8. Click **Save**

Now clients receive an invoice 5 minutes after their session ends.

### Step 2: Test Payment Flow

**If using upfront payment**:
1. Create a test booking with a new contact
2. Use Stripe's test card: `4242 4242 4242 4242` (expiry: any future date, CVC: any 3 digits)
3. Complete the payment
4. In Stripe dashboard, verify the payment appears

**If using post-session payment**:
1. Complete a test appointment
2. Wait for invoice automation to trigger
3. Verify the contact receives a payment link via email or SMS

---

## Phase 5: Create Client Onboarding Workflow (25 Minutes)

### Why Onboarding Matters

A structured onboarding sequence sets expectations, collects intake data, and primes clients for success. Coaches who use onboarding report 15–20% higher retention (based on GoHighLevel fitness coaching case studies, 2024).

### Step 1: Create an Onboarding Automation

1. Go to **Automations > Create New Automation**
2. Name: `New Client Onboarding - 7 Days`
3. **Trigger**: **Contact Added to List** or **Contact Created**
4. Filter: Only trigger for contacts with `client_status` = "Active"
5. Click **Next**

### Step 2: Send Welcome Email (Day 0)

1. Add Action: **Send Email**
2. Template:

```
Subject: Welcome to [Your Coaching Gym] – Let's Get Started! 💪

Hi {{contact.firstName}},

Welcome! I'm excited to help you reach your fitness goals. Before our first session, I'd like to understand your background, fitness level, and goals so I can tailor the program.

Please complete this quick intake form (5 minutes):
[Link to intake form or Google Form embed]

Questions? Just reply to this email.

Looking forward to working with you!

[Your Name]
```

3. **Send immediately** (0 delay)
4. Click **Add Action**

### Step 3: Send Intake Form Link (Automated)

Instead of a manual Google Form, use GHL's **Form** feature:

1. In the automation, instead of email link, embed a GHL form:
   - Go to **Forms > Create New Form**
   - Name: `Fitness Intake Form`
   - Fields:
     - **Current Fitness Level**: Dropdown (Beginner, Intermediate, Advanced)
     - **Main Goal**: Text (e.g., Lose weight, build muscle, improve endurance)
     - **Injuries or Limitations**: Text
     - **Preferred Training Style**: Dropdown (High intensity, Strength, Mobility, Mixed)
     - **Availability**: Checkboxes (Mon–Sun, times)
   - Click **Create**

2. In the automation, add an **Action: Send Form Link**
3. Select your **Fitness Intake Form**
4. Send immediately
5. Click **Add Action**

### Step 4: Send First Session Prep (Day 2)

1. Add Action: **Send Email**
2. Set **Delay**: 2 days
3. Template:

```
Subject: First Session Checklist – [Your Name]

Hi {{contact.firstName}},

Two days until our first session! Here's what to expect:

✅ Bring water and a towel
✅ Wear comfortable workout clothes
✅ Tell me about any aches or pains
✅ We'll assess your current fitness level (expect some soreness later 😅)

Questions? Reply here.

See you soon!

[Your Name]
```

5. Click **Add Action**

### Step 5: Send Progress Check-In (Day 7)

1. Add Action: **Send SMS**
2. Set **Delay**: 7 days
3. Template:

```
Hi {{contact.firstName}},

One week in! How are you feeling? Any questions about your program?

Quick poll: How's your energy? 
1️⃣ Energized ⚡
2️⃣ Good 💪
3️⃣ Tired 😴

Reply with your number. Would love to hear from you!

- [Your Name]
```

4. Click **Add Action**
5. Click **Save Automation**

### Step 6: Test Onboarding

1. Create a new contact with `client_status` = "Active"
2. Watch your email/SMS for the onboarding sequence (delays will compress in testing)
3. Verify each email/SMS arrives in the correct order and personalization works

✅ If onboarding sequence fires in order, you're ready to move to production.

---

## Phase 6: Set Up No-Show Recovery (20 Minutes)

### Why No-Show Recovery Matters

When a client misses a session:
1. They lose momentum and confidence
2. You lose revenue
3. Gym capacity goes unused

A structured recovery automation wins back 30–40% of no-shows (estimated from GoHighLevel coaching automation data, 2024).

### Step 1: Create a No-Show Detection Automation

1. Go to **Automations > Create New Automation**
2. Name: `No-Show Recovery Sequence`
3. **Trigger**: **Calendar Event Not Attended** or **Appointment Marked No-Show**
4. Click **Next**

### Step 2: Send Immediate No-Show Message (Day 0)

1. Add Action: **Send SMS**
2. Template:

```
Hi {{contact.firstName}},

We missed you at your session today. No worries—life happens!

Let's reschedule: [Rescheduling Link]

Or reply YES and I'll reach out to find a time that works.

- [Your Name]
```

3. Send immediately
4. Click **Add Action**

### Step 3: Send Follow-Up Email (Day 1)

1. Add Action: **Send Email**
2. Set **Delay**: 1 day
3. Template:

```
Subject: Checking In – No Judgment Here

Hi {{contact.firstName}},

I noticed you missed yesterday's session. I want to make sure everything's okay.

Sometimes life gets in the way. I get it. But your goals matter, and I'm here to help you stay on track.

Let's find a time this week that works better for you:
[Rescheduling Link]

If there's something I can adjust to make sessions easier (time, intensity, location), just let me know.

[Your Name]
```

4. Click **Add Action**

### Step 4: Send Win-Back Offer (Day 3)

1. Add Action: **Send SMS**
2. Set **Delay**: 3 days
3. Template:

```
Hi {{contact.firstName}},

Quick offer: Book your next session this week and get 20% off that session.

Your momentum matters. Let's get you back:
[Rescheduling Link]

Code: COMEBACK20

- [Your Name]
```

4. Click **Add Action**
5. Click **Save Automation**

### Step 5: Test No-Show Recovery

1. Create a test appointment for today
2. Manually mark it as "No-Show" (or wait for it to auto-mark after the appointment time passes)
3. Watch for SMS/email to arrive per the automation

✅ If recovery messages fire on schedule, automation works.

---

## Phase 7: Create Upsell and Retention Automation (20 Minutes)

![Phase 7: Create Upsell and Retention Automation (20 Minutes)](/images/2026-08-27-gohighlevel-for-fitness-coaches-s2.jpg)


### Goal: Increase Revenue Per Client

Beyond recurring sessions, you can upsell:
- Nutrition coaching add-on
- Group class packages
- Custom meal plans
- Supplementary programs (mobility, cardio)

### Step 1: Create Upsell Automation for Active Clients

1. Go to **Automations > Create New Automation**
2. Name: `Upsell Nutrition Coaching - 30 Day Mark`
3. **Trigger**: **Contact Added to List** (filter for `client_status` = "Active")
4. Set **Delay**: 30 days
5. Click **Next**

### Step 2: Send Upsell Email

1. Add Action: **Send Email**
2. Template:

```
Subject: Level Up Your Results – Nutrition Coaching

Hi {{contact.firstName}},

You've crushed your first month of training! 💪

Most clients see 2–3x faster results when they combine strength training with nutrition coaching.

I'm offering a limited-time bundle:
- 1:1 Nutrition Coaching Sessions (2x/month)
- Custom meal plan
- Grocery list and supplement recommendations
- Add to your program: $200/month (50% off for first month)

Interested? Reply YES or book a call: [Calendar Link]

Let's accelerate your results!

[Your Name]
```

3. Send at day 30
4. Click **Add Action**
5. Click **Save Automation**

### Step 3: Send Retention Check-In (60 Days)

1. Create another automation: `Check-In – Are We Still on Track?`
2. **Trigger**: Contact in Active list
3. Set **Delay**: 60 days
4. Add Action: **Send SMS**
5. Template:

```
Hi {{contact.firstName}},

Two months in! Time for a progress check.

How are you feeling about your results? Any goals we should adjust?

Quick 10-min call this week?
[Calendar Link]

- [Your Name]
```

6. Click **Save Automation**

### Step 4: Test Upsell Automation

1. Create a test contact with `client_status` = "Active"
2. Manually advance the automation or wait 30 days (testing often lets you skip delays)
3. Verify upsell email arrives

✅ When upsell email lands, automation is live.

---

## Phase 8: Build Your Client Portal (15 Minutes)

Give clients a self-service hub where they can:
- View upcoming sessions
- Reschedule without texting you
- See workout notes
- Access payment history

### Step 1: Enable Client Portal

1. Go to **Settings > Client Portal** or **Portal Settings**
2. Toggle **Enable Client Portal** ✅
3. Configure portal access:
   - **Allow clients to view appointments**: ✅
   - **Allow clients to reschedule**: ✅
   - **Allow clients to cancel**: ✅ (with 24-hour notice)
   - **Allow clients to update contact info**: ✅
   - **Allow clients to view notes**: ✅
4. Click **Save**

### Step 2: Customize Portal Branding

1. Upload your logo
2. Set primary color (match your brand)
3. Add custom greeting: "Welcome to [Your Gym Name]!"
4. Add a welcome message

### Step 3: Generate Portal Links

1. For each contact, go to **Contacts > [Contact Name]**
2. Click **Send Portal Link** or **Share Portal Access**
3. Copy the unique link and send to the client via email/SMS
4. The link lets them access their portal

### Step 4: Test the Portal

1. Click the portal link as a client would
2. Verify you can:
   - View all scheduled sessions
   - Reschedule a session (pick a new time)
   - Update phone number or email
   - View any notes you've added

✅ If portal navigation works smoothly, setup is complete.

---

## Phase 9: Add Session Notes and Progress Tracking (10 Minutes)

After each session, add notes that track the client's progress and inform future workouts.

### Step 1: Create a Session Notes Template

1. Go to **Automations > Create New Automation** (or use a simple manual process)
2. After each appointment, open the contact record
3. Click **+ Add Note** or **Session Notes**
4. Use this template:

```
Date: [Today's Date]
Session Type: [1:1 Training / Group Class]
Duration: 60 min

Exercises Completed:
- Bench press: 3×8 @ 185 lbs
- Squats: 3×10 @ 225 lbs
- Deadlift: 1×5 @ 275 lbs

Client Feedback:
- Energy: 8/10
- Difficulty: 7/10 (challenging but achievable)
- Any pain or discomfort: No

Progress Notes:
- Strength improving steadily
- Form on squats much better
- Recommend increasing weight next week

Next Session Focus:
- Continue progressive overload
- Mobility work for hip flexor tightness
```

5. Save the note to the contact record

### Step 2: Enable Auto-Logging via Integration

If you use a separate fitness app (TrainHeroic, BOSU, Fitbod), integrate it with GHL:

1. Go to **Integrations > [Fitness App]**
2. Connect your account
3. Notes auto-sync to each client's contact record

### Step 3: Use Notes for Future Automation

In automations, reference these notes:
- If a client hits a strength milestone, send a congratulations message
- If someone is consistently struggling with an exercise, send a form-correction video
- If energy is low, offer a recovery session

---

## Phase 10: Go Live – Production Checklist (15 Minutes)

Before launching with real clients, verify everything is working.

### Pre-Launch Checklist

- [ ] CRM: Test contact created with all custom fields populated
- [ ] Calendar: Test booking link works, time slots prevent double-booking
- [ ] Reminder automation: Test SMS/email arrives 24 hours before appointment
- [ ] Payment: Test upfront payment or invoice flow (use Stripe test card `4242 4242 4242 4242`)
- [ ] Onboarding automation: Test sequence fires for new contact (check all email/SMS in correct order)
- [ ] No-show recovery: Manually mark test appointment as no-show, verify recovery messages
- [ ] Upsell automation: Verify email arrives at day 30
- [ ] Client portal: Test rescheduling and note viewing
- [ ] Session notes: Add a note to test contact, verify it appears in contact record

### Launch Steps

1. **Announce booking link**: Add to website, email signature, Instagram bio, text message to leads
2. **Pause automations temporarily** (optional): If you want to manually verify first few contacts, disable automations, test manually, then re-enable
3. **Monitor first week**:
   - Check **Calendar** daily for no bookings bugs or double-bookings
   - Spot-check **Contacts** for data quality (names, phone numbers, etc.)
   - Review automation logs for failed sends
   - If an SMS bounces, verify phone number format
   - If email lands in spam, check DNS authentication (DKIM, SPF)

4. **Adjust based on feedback**:
   - If clients complain reminder is too early, adjust to 6 hours before
   - If no-show rate is still high after 30 days, add a 2-hour reminder
   - If upsell email underperforms, adjust copy or timing

### Monitor First Month

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| Booking rate | 10+ bookings/week | Promote booking link on social/email |
| No-show rate | <10% | Add additional 2-hour reminder |
| Reminder delivery | 99%+ | Check phone numbers for formatting errors |
| Upsell conversion | 15%+ | Test different upsell offer or timing |
| Client portal adoption | 50%+ | Send portal link reminder in onboarding automation |

---

## Common Setup Issues and Fixes

| Issue | Cause | Solution |
|---|---|---|
| **Calendar shows booked but no contact created** | Contact creation disabled or email not captured at booking | In calendar settings, enable "Auto-create contact" and verify email field is visible and required |
| **Reminder SMS doesn't send** | Phone number invalid or missing country code | Phone format must be +1-555-0123 (US) or +44-20-7946-0958 (UK). Verify in contact record |
| **Payment doesn't process at booking** | Stripe not connected or payment amount not set | Verify Stripe is connected (green checkmark in **Integrations**) and calendar has payment amount configured |
| **Onboarding emails land in spam** | Gmail/Outlook DKIM/SPF not authenticated | Go to **Settings > Email Settings** and add DKIM/SPF records per GHL guide |
| **Client portal link doesn't work** | Portal access not enabled or contact doesn't have email | Enable portal in settings, ensure contact has valid email address, regenerate link |
| **Automation doesn't fire** | Trigger misconfigured or