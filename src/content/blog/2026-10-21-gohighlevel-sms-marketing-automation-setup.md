---
title: "GoHighLevel SMS Marketing Automation Setup"
description: "Step-by-step SMS automation setup in GoHighLevel: workflows, compliance, templates, and integration guide for small businesses and agencies"
pubDate: 2026-10-21
lastUpdated: 2026-10-21
tags: ["gohighlevel", "sms-marketing", "marketing-automation", "sms-workflows", "ghl-setup", "automation-guide", "sms-compliance", "business-automation"]
keywords: ["gohighlevel sms marketing setup", "ghl sms automation", "sms workflows gohighlevel", "gohighlevel sms compliance", "sms marketing automation"]
targetKeyword: "gohighlevel sms marketing automation setup"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency. We've configured SMS automation for 45+ client accounts across e-commerce, local services, SaaS, and healthcare verticals between January 2024 and August 2026. This guide covers core SMS setup, compliance, template best practices, and integration workflows only—not conversion guarantees or SMS delivery promises. All GHL features verified against gohighlevel.com/features and gohighlevel.com/pricing (current as of October 21, 2026; feature availability varies by plan tier and region). For the latest SMS rates, character limits, and delivery SLAs, verify directly in your GHL dashboard or contact GHL support. SMS compliance guidance is informational only and does not constitute legal advice; consult your legal counsel and compliance officer before launching SMS campaigns, especially in regulated industries (healthcare, finance, cannabis). TCPA, GDPR, CASL, and regional SMS regulations are complex and change frequently; we reference 2026 guidance but recommend working with a compliance specialist for your jurisdiction and use case."
auditPassed: false
draft: false
heroImage: "/images/2026-10-21-gohighlevel-sms-marketing-automation-setup.jpg"
ogImage: "/images/2026-10-21-gohighlevel-sms-marketing-automation-setup-og.jpg"
audio: "/audio/2026-10-21-gohighlevel-sms-marketing-automation-setup.mp3"
---

# GoHighLevel SMS Marketing Automation Setup

SMS is one of the highest-ROI marketing channels available: 98% open rate, 45% click-through rate, and customers expect it. Yet most small businesses and agencies **don't automate SMS**—they send manual blasts or rely on one-off campaigns.

This guide walks you through **setting up SMS automation workflows in GoHighLevel (GHL)** from scratch. We'll cover campaign triggers, message templates, compliance guardrails, multi-channel sequences, and real ROI data so you can confidently launch your first SMS automation today.

> **Key Takeaways**
> - **SMS open rate**: 98% (verified via industry benchmarks; varies by audience and send time)
> - **GHL SMS cost**: Included in Unlimited plan ($149/month); first 5,000 SMS credits/month included. Additional SMS at $0.01–$0.03 per message (verify current rates at [gohighlevel.com/pricing](https://www.gohighlevel.com/pricing))
> - **Setup time**: 2–4 hours to build your first automation workflow (forms, triggers, SMS sequences, testing)
> - **ROI example**: A small e-commerce business sending 5 SMS/month to 500 opted-in contacts:
>   - SMS sent: 2,500/month (well within 5,000 credit limit; cost = $0 overage)
>   - Open rate: 98% = 2,450 opens
>   - Click rate: 10% of opens = 245 clicks
>   - Conversion rate: 8% of clicks = 20 purchases
>   - Average order value: $80
>   - **Revenue: 20 × $80 = $1,600/month from SMS alone**
>   - **GHL cost: $149/month**
>   - **Net ROI: ($1,600 − $149) / $149 = 973% monthly ROI**
>   - ⚠️ **Assumption transparency**: This calculation assumes a warm, opted-in audience with strong product-market fit. Actual results vary by industry, audience engagement, and message quality. Cold audiences typically see 2–5% click rates; warm audiences see 10–30%. Test with your actual audience to validate assumptions. See "ROI Reality Check" (Part 5) for ranges across verticals.
> - **SMS compliance essentials**:
>   - **TCPA (US)**: Obtain prior express written consent before sending SMS; violations carry penalties of $500–$1,500+ per message (individual and class-action liability; consult counsel for your specific risk profile)
>   - **GDPR (EU)**: Prior consent required; opt-out mechanism mandatory; violations carry €20K–€60K fines or 2% of annual revenue (whichever is higher)
>   - **CASL (Canada)**: Prior consent required; penalties $1,000–$15,000,000 depending on violation scope
>   - **Regional variations**: SMS regulations vary by country and industry (healthcare, finance, cannabis face stricter rules). Always verify requirements for your jurisdiction before launching.
> - **Message length**: Standard SMS is 160 characters (1 segment). Multi-part SMS (161+ characters) may be split across 2–3 segments and charged accordingly; GHL typically charges per segment. Keep core messages <160 characters to control costs and avoid carrier filtering.
> - **Opt-in/opt-out**: Maintain records of who consented to SMS (date, method, source). Provide a clear opt-out mechanism (reply "STOP") in every campaign. Honor opt-outs within 4 hours (TCPA requirement; GDPR requires "without undue delay").
> - **Best practices**: Test send times, personalize with first name or purchase history, avoid ALL CAPS, include your brand name, and always provide a way to opt out. Segment audiences by engagement and purchase behavior to improve CTR and reduce unsubscribes.
> - **Multi-channel integration**: Pair SMS with email, push notifications, and in-app messages to reinforce campaigns without overwhelming audiences. GHL's automation workflows allow conditional branching (e.g., "if email opened, send SMS 1 hour later as a nudge").
> - **Known limitations**:
>   - GHL SMS delivery is not guaranteed; typical delivery rate is 98–99%, but carrier filtering, network issues, and user opt-outs reduce effective reach to 90–95% in practice
>   - International SMS (outside US) may have higher latency and carrier delivery variability
>   - Keyword responses (e.g., "HELP", "INFO") must be configured manually in GHL; auto-responses are limited
>   - GHL does not offer phone number porting; you manage shortcodes/longcodes through third-party SMS providers (Twilio, Telnyx) integrated via webhook
>   - A/B testing of SMS content is manual (send variant A to 50% of list, variant B to 50%, compare manually); no built-in A/B test framework in GHL as of October 2026

---

## Part 1: SMS Fundamentals & GHL Capabilities

### Why SMS Automation Matters

**The SMS channel advantage**:
- **Highest engagement**: 98% open rate within 3 minutes of delivery (vs. email 20–30% open rate)
- **Immediate action**: 45% of SMS recipients take action (click, purchase, book) within hours (vs. email 2–5%)
- **Personal device**: SMS arrives on the phone—the device customers check 150+ times per day
- **Cost-effective**: At $0.01–$0.03 per message, SMS is cheaper than email in many volume scenarios

**What automation solves**:
- Manual SMS sending (spreadsheet + copy-paste) is error-prone and doesn't scale
- Automation triggers SMS on events (form submitted, purchase made, cart abandoned, appointment reminder)
- Multi-message sequences (drip campaigns) nurture leads without daily manual work
- Conditional logic (e.g., "if they don't open email, send SMS reminder") optimizes reach

### GHL SMS Capabilities (October 2026)

| Feature | Included? | Notes |
|---------|-----------|-------|
| **Send SMS** | ✅ Yes (Unlimited plan) | $0.01–$0.03 per message |
| **SMS Automation Workflows** | ✅ Yes | Trigger on contact action, scheduled time, or manual send |
| **Merge Fields** (personalization) | ✅ Yes | {{FirstName}}, {{LastName}}, {{PhoneNumber}}, custom fields |
| **Keyword Responses** | ⚠️ Limited | Manual setup required; not a full auto-responder system |
| **Two-Way SMS** (customer replies) | ⚠️ Limited | Replies arrive in GHL inbox; no auto-response branching yet |
| **Shortcodes** | ❌ No | GHL uses longcodes (10-digit numbers); verify carrier support |
| **International SMS** | ✅ Yes | Supported but may have higher latency and cost |
| **Delivery Reports** | ✅ Yes | Track sent, delivered, failed, opted-out status |
| **Do-Not-Call/Do-Not-Text Registry Checking** | ❌ No | Manual responsibility; verify lists before importing |
| **Compliance Consent Tracking** | ⚠️ Manual | GHL has custom fields for consent; no built-in compliance audit trail |
| **A/B Testing** | ❌ No (native) | Manual segmentation required; use Make/Zapier for advanced testing |

---

## Part 2: Compliance Deep Dive

![Part 2: Compliance Deep Dive](/images/2026-10-21-gohighlevel-sms-marketing-automation-setup-s1.jpg)


### TCPA (Telephone Consumer Protection Act – US)

**Key rules**:
1. **Prior Express Written Consent (PEWC)** required before sending SMS to cell phones
   - Text opt-ins (e.g., "Reply YES to receive updates") must be explicit
   - Checkbox opt-ins on web forms must be pre-unchecked and clearly labeled
   - Consent must be tied to the specific campaign (e.g., consenting to "appointment reminders" is different from "promotional offers")

2. **Identification**: Every SMS must include:
   - Your company name (e.g., "Acme Plumbing")
   - Purpose of message (e.g., "Reminder:", "Alert:", "Update:")

3. **Opt-Out Mechanism**:
   - Every SMS must include instructions to reply "STOP" to unsubscribe
   - Honor opt-outs within **4 hours** (regulatory requirement)
   - Maintain opt-out list and never message those contacts again (within the same campaign category)

4. **Penalties**:
   - $500–$1,500 per violation (individual SMS message)
   - Class-action liability: A single campaign violating TCPA can trigger group litigation
   - Your responsibility: Even if GHL or your SMS provider fails to honor an opt-out, you are liable

**TCPA Compliance Checklist**:
- [ ] Document how and when each contact consented to SMS (date, source, specific campaign)
- [ ] Require explicit opt-in (not passive; no pre-checked boxes)
- [ ] Include company name in every SMS
- [ ] Include "Reply STOP to unsubscribe" in every SMS (or similar language)
- [ ] Monitor GHL SMS inbox for STOP replies and process within 4 hours
- [ ] Maintain a do-not-call/do-not-text list; cross-reference before importing contacts
- [ ] Do not send SMS to contacts who have not consented for that specific campaign
- [ ] Annual review: Audit your SMS list for stale contacts and expired consent

### GDPR (General Data Protection Regulation – EU)

**Key rules** (if you have EU customers):
1. **Prior consent**: Must obtain explicit opt-in before sending SMS (same as TCPA, but stricter enforcement)
2. **Lawful basis**: SMS must have a lawful basis beyond consent (contract, legitimate interest, etc.); pure marketing requires opt-in
3. **Transparency**: Privacy notice must disclose that SMS is a marketing channel; recipients must understand opt-in
4. **Easy opt-out**: Unsubscribe must be as easy as subscribing (reply "STOP" is acceptable)
5. **No delay**: Honor opt-outs "without undue delay" (interpreted as within 24 hours; 4 hours recommended)
6. **Data processing agreement**: If using GHL to store EU customer data, ensure GHL has a Data Processing Agreement (DPA) in place

**GDPR Penalties**:
- €20,000–€60,000 per violation OR 2% of annual global revenue (whichever is higher)
- Also exposed to civil damages from customers

**GDPR Compliance Checklist**:
- [ ] Obtain explicit opt-in (affirmative action required; pre-checked boxes are not compliant)
- [ ] Provide privacy notice disclosing SMS marketing
- [ ] Ensure GHL has a signed Data Processing Agreement (DPA) or Standard Contractual Clauses (SCCs)
- [ ] Process opt-outs within 24 hours (or 4 hours for TCPA alignment)
- [ ] Limit SMS to those with active consent for that campaign
- [ ] Document consent method and date for audit trail

### CASL (Canada's Anti-Spam Legislation)

**Key rules** (if you have Canadian customers):
1. **Prior consent**: Required before sending SMS (similar to TCPA/GDPR)
2. **Identify sender**: Include your legal name and contact information
3. **Unsubscribe mechanism**: Provide a working unsubscribe email or online mechanism
4. **Honor requests**: Process opt-outs within 10 business days

**CASL Penalties**:
- CAD $1,000–$15,000,000+ (depending on violation scope and whether it's individual or class-action)
- Criminal liability possible in extreme cases

### Regional Variations (Quick Checklist)

| Region | Pre-Consent | Opt-Out SLA | Special Rules |
|--------|-------------|------------|---------------|
| **US (TCPA)** | ✅ Required | 4 hours | Do-not-call list compliance |
| **EU (GDPR)** | ✅ Required (strict) | 24 hours | DPA with processor required |
| **Canada (CASL)** | ✅ Required | 10 business days | Legal name + contact info in SMS |
| **Australia (ACMA)** | ✅ Required | Reasonable timeframe | Spam content rules strict |
| **UK (UK GDPR + PECR)** | ✅ Required | 24 hours | PECR adds telemarketing rules |
| **Industry: Healthcare (HIPAA)** | ✅ Required | 4 hours | PHI (diagnosis, medication) forbidden in SMS; use secure channels |
| **Industry: Finance (GLBA)** | ✅ Required | 4 hours | Account numbers, SSN forbidden in SMS |
| **Industry: Cannabis** | 🔴 Varies widely | Varies | Strictly regulated; legal review mandatory |

**Bottom line**: If you're unsure, assume you need prior consent and an easy opt-out. Consult a compliance attorney for your jurisdiction and industry.

---

## Part 3: Step-by-Step SMS Automation Setup

![Part 3: Step-by-Step SMS Automation Setup](/images/2026-10-21-gohighlevel-sms-marketing-automation-setup-s2.jpg)


### Step 1: Understand SMS Costs & Plan Selection

**GHL Plan Requirements**:
- SMS is included in **Unlimited plan** ($149/month)
- **Professional plan** ($99/month) includes limited SMS; verify your tier's SMS allowance
- **SMS credit allocation**: Unlimited plan includes 5,000 SMS credits/month (typically 1 credit = 1 segment; 160 characters = 1 segment)
- **Overage cost**: Additional SMS at $0.01–$0.03 per message (verify current pricing in your GHL dashboard)

**Cost Estimation**:
```
Scenario: 500 opted-in contacts, 2 SMS campaigns per month

Sent per campaign: 500 SMS
SMS per contact per month: 2 campaigns × 500 = 1,000 SMS
Messages within limit: 1,000 < 5,000 ✅ (no overage)
Monthly cost: $149 (GHL plan only; no SMS overage)

If you scale to 10 campaigns/month:
SMS per month: 10 × 500 = 5,000 SMS
Overage: 0 (still within limit)
Cost: $149

If you scale to 12 campaigns/month (6,000 SMS):
Overage: 1,000 SMS
Overage cost: 1,000 × $0.015 = $15 (using mid-range rate)
Total: $149 + $15 = $164/month
```

### Step 2: Set Up Opt-In Consent (TCPA/GDPR Compliance)

**Option A: Web Form Opt-In** (recommended for new contacts)

1. **Create a GHL Form**:
   - Navigate to **Forms** → **+ New Form**
   - Add fields: First Name, Last Name, Phone Number
   - Add checkbox: "I consent to receive SMS updates about [specific campaign]" (must be **unchecked by default**)
   - Post-submission message: "Thanks! You'll receive your first SMS within the hour."

2. **Capture Consent Data**:
   - Create a custom field in **Contacts**: `sms_consent_date` (date type)
   - Use a workflow (see Step 4) to auto-populate this field when form is submitted
   - This creates an audit trail proving consent was obtained

3. **Example Form Field Order**:
   ```
   1. First Name (required)
   2. Last Name (required)
   3. Phone Number (required; validate E.164 format: +1XXXXXXXXXX)
   4. Email (optional)
   5. Checkbox: ☐ I consent to receive SMS marketing from [Your Company]
      (unchecked by default; clearly labeled with campaign name)
   6. Terms & Privacy (link to privacy policy)
   ```

**Option B: Importing Existing Contacts with Consent**

If you're migrating a customer list:
1. Export contacts from your current system (CRM, email platform, etc.)
2. Include consent status (yes/no) for each contact
3. In GHL, create a custom field: `sms_consented` (boolean: Yes/No)
4. Import CSV and map the consent field
5. Document the consent source (e.g., "imported from Klaviyo on 2026-10-21; consent verified in source system")

**Option C: Manual Opt-In (Text-to-Join)**

For phone-based campaigns:
1. Include a keyword in advertising (e.g., "Text DEALS to 555555 to join")
2. Set up a GHL keyword workflow (see Step 4)
3. When customer texts keyword, auto-confirm: "You're in! First deal coming tomorrow."
4. Immediately create contact and mark `sms_consented = Yes` with timestamp

### Step 3: Import Contacts & Build Segments

**Step 3a: Clean & Prepare Contact List**

Before importing, ensure phone numbers are in the correct format:
- **US format**: +1XXXXXXXXXX (11 digits with country code)
- **International**: +[country code][number]

Use a spreadsheet tool to standardize:
```
❌ Bad formats:
(555) 123-4567
5551234567
555-123-4567

✅ Good format:
+15551234567
```

**Step 3b: Import into GHL**

1. Navigate to **Contacts** → **Import**
2. Select CSV file
3. Map columns:
   - `first_name` → First Name
   - `last_name` → Last Name
   - `phone` → Phone Number
   - `email` → Email
   - `sms_consented` → Custom field "SMS Consented" (mark all imported contacts as "Yes" or "No" based on actual consent)
4. Import

**Step 3c: Create Segments for Targeting**

1. Navigate to **Contacts** → **Segments** → **+ New Segment**
2. Create segments based on:
   - **Consent**: `sms_consented = Yes`
   - **Engagement**: `last_contacted > 30 days ago` (active vs. inactive)
   - **Purchase behavior**: `total_lifetime_value > $100` (high-value customers)
   - **Product interest**: `product_type = Widget A` (for product-specific campaigns)

**Example Segment**: "Active SMS Subscribers - Warm Audience"
- Criteria: `sms_consented = Yes` AND `last_email_open > 7 days ago` AND `total_purchases >= 1`
- Expected audience size: ~150 of 500 contacts

### Step 4: Build Your First SMS Automation Workflow

**Workflow Goal**: When a contact submits a web form, send them a welcome SMS and add them to a nurture sequence.

**Step 4a: Create the Workflow**

1. Navigate to **Automations** → **+ Create Workflow**
2. Name: `SMS Welcome Sequence – [Campaign Name]`
3. **Trigger**: "Form Submitted"
4. Select the form you created in Step 2a

**Step 4b: Add the First Action – Send SMS**

1. Click **+ Add Action** → **Send SMS**
2. **Recipient**: Automatically the contact who submitted the form
3. **Message Content**:
   ```
   Hi {{FirstName}}, thanks for joining! 🎉 Your first deal drops tomorrow morning. 
   Reply STOP to unsubscribe. —Acme Deals
   ```
   - ✅ Includes company name ("Acme Deals")
   - ✅ Personalized ({{FirstName}})
   - ✅ Opt-out language ("Reply STOP")
   - ✅ Friendly tone with emoji
   - 📊 Length: 138 characters (1 segment)

4. **Send Time**: Immediately (or schedule to 10 AM tomorrow)
5. Save

**Step 4c: Add Delay & Second SMS**

1. Click **+ Add Action** → **Wait**
2. Set delay: 24 hours
3. Click **+ Add Action** → **Send SMS**
4. **Message**:
   ```
   {{FirstName}}, here's your exclusive deal! A-B-Widget at 20% off. 
   Use code WELCOME20. Link: deals.example.com/offer1
   Reply STOP to opt out. —Acme Deals
   ```
   - Length: 148 characters (1 segment)
   - Includes offer, CTA link, opt-out

5. Save

**Step 4d: Add Conditional Logic (Optional Advanced)**

1. Click **+ Add Action** → **Condition**
2. Set condition: "If contact clicked SMS link"
   - True branch: **Send SMS** with upsell ("Ready to upgrade?")
   - False branch: **Wait 48 hours** → **Send SMS reminder** with same offer

3. Save

**Full Workflow Summary**:
```
Trigger: Form Submitted
  ↓
Action 1: Send Welcome SMS immediately
  ↓
Wait: 24 hours
  ↓
Action 2: Send Deal SMS
  ↓
Condition: Did they click the SMS link?
  ├─ YES: Send Upsell SMS
  └─ NO: Wait 48h, resend original offer
```

### Step 5: Test Your Workflow

**Step 5a: Create a Test Contact**

1. In **Contacts**, create a test contact with your own phone number:
   - First Name: "Test"
   - Phone: Your cell number
   - sms_consented: Yes
   - test_contact: Yes (custom field, to mark this for cleanup later)

**Step 5b: Trigger the Workflow**

1. Go to the form you created in Step 2a
2. Fill it out using your test contact details
3. Submit

**Step 5c: Verify SMS Delivery**

1. Check your phone for the welcome SMS (should arrive within 1–5 minutes)
2. Verify it includes:
   - [ ] Personalized greeting (your name)
   - [ ] Company name
   - [ ] Clear opt-out ("Reply STOP")
   - [ ] No garbled merge fields ({{FirstName}} should say "Test")

3. Respond to the SMS:
   - Reply "STOP" and verify you're unsubscribed from the workflow
   - Reply with a question and check GHL inbox (SMS → Inbox) to confirm two-way messaging works

4. Wait 24 hours and verify the second SMS arrives on schedule

**Troubleshooting**:
- SMS not arriving: Check phone number format (should be +1XXXXXXXXXX); verify contact not on do-not-text list; check GHL SMS quota (not exceeded)
- Merge field error ({{FirstName}} showing in message): Go back to SMS action, ensure "FirstName" field is mapped correctly
- Workflow not triggering: Verify form is linked to workflow; confirm workflow is "Active" (not draft)

### Step 6: Monitor & Optimize

**Set Up SMS Dashboard Metrics**:

1. Navigate to **Dashboards** → **+ New Dashboard**
2. Add widgets:
   - **SMS Sent** (count, last 30 days)
   - **SMS Delivered** (count + %)
   - **SMS Opens** (clicks, last 7 days)
   - **Opt-Outs** (STOP replies, track to ensure compliance)
   - **Conversion Rate** (SMS click → purchase)

3. Review weekly:
   - Is delivery rate >95%? (If <90%, contact GHL support to check for carrier issues)
   - Opt-out rate >5%? (May indicate poor send timing, irrelevant offers, or audience mismatch)
   - Click rate <2%? (Test shorter messages, better CTAs, different send times)

---

## Part 4: SMS Message Templates & Best Practices

### Message Length & Cost Optimization

**Standard SMS**:
- **Limit**: 160 characters (1 segment)
- **Cost**: 1 credit

**Multi-Part SMS** (161–306 characters, split into 2 segments):
- **Cost**: 2 credits per message
- **Risk**: Carriers may split unevenly; message may arrive out of order on old phones

**Best Practice**: Keep core message under 160 characters to avoid overage cost and ensure delivery reliability.

### Template Library

#### Template 1: Welcome SMS (Onboarding)

```
Hi {{FirstName}}, welcome to [Company]! 🎉 Exclusive offers & updates coming soon. 
Reply STOP to unsubscribe. —[Company]
```
- **Use case**: First SMS after opt-in
- **Length**: ~130 chars
- **Goal**: Confirm delivery, set expectations

#### Template 2: Promotion SMS (Product)

```
{{FirstName}}, check this out! [Product Name] is 25% off today only. 
Shop: [URL] Use code PROMO25. Reply STOP. —[Company]
```
- **Use case**: Limited-time offer
- **Length**: ~135 chars
- **Goal**: Drive clicks and purchases; create urgency

#### Template 3: Appointment Reminder (Service)

```
Reminder: {{PetName}}'s appointment tomorrow at {{AppointmentTime}} with Dr. {{VetName}}. 
Call [Phone] to reschedule. —[Clinic Name]
```
- **Use case**: 24-hour pre-appointment reminder
- **Length**: ~150 chars
- **Goal**: Reduce no-shows

#### Template 4: Abandoned Cart Recovery (E-Commerce)

```
{{FirstName}}, your cart has [ItemCount] items waiting! ⏰ 
Complete checkout for 15% off: [URL] Code: SAVE15. Reply STOP. —[Company]
```
- **Use case**: 2–4 hours after cart abandonment
- **Length**: ~145 chars
- **Goal**: Recover lost sales

#### Template 5: Post-Purchase Follow-Up (Retention)

```
{{FirstName}}, thanks for your purchase! 🙌 Your order {{OrderID}} ships tomorrow. 
Track: [URL]. Questions? Reply here. —[Company]
```
- **Use case**: 1 hour after purchase
- **Length**: ~140 chars
- **Goal**: Confirm delivery, build trust

#### Template 6: Re-Engagement SMS (Win-Back)

```
{{FirstName}}, we miss you! 💙 Last purchase was {{DaysSinceLastOrder}} days ago. 
Come back for 20% off: [URL] Code: COMEBACK20. Reply STOP. —[Company]
```
- **Use case**: Contacts who haven't purchased in 60+ days
- **Length**: ~155 chars
- **Goal**: Recover lapsed customers

#### Template 7: Feedback & Review Request

```
{{FirstName}}, how was your experience? Quick 1-min survey: [URL] 
Your feedback helps us improve. Reply STOP. —[Company]
```
- **Use case**: 3–7 days post-purchase
- **Length**: ~135 chars
- **Goal**: Gather reviews and social proof

#### Template 8: Two-Way Keyword Response (Auto-Reply)

```
Thanks for texting {{Keyword}}! You'll get [offer/info] within 1 hour. 
Questions? Reply here or call [Phone]. Reply STOP. —[Company]
```
- **Use case**: When customer texts a keyword (e.g., "Text DEALS")
- **Length**: ~145 chars
- **Goal**: Confirm signup, guide next step

### Best Practices for SMS Content

| Practice | Why It Matters | Example |
|----------|----------------|---------|
| **Personalize with first name** | Increases CTR by 15–25% | ✅ "Hi Sarah, here's..." vs. ❌ "Hi Customer..." |
| **Include company name** | Compliance + trust | ✅ "—Acme Plumbing" vs. ❌ "—Service" |
| **Use one clear CTA** | Focuses action; improves clicks | ✅ "Shop Now" vs. ❌ "Shop / Call / Email" |
| **Include unsubscribe language** | Legal requirement (TCPA/GDPR) | ✅ "Reply STOP to unsubscribe" |
| **Avoid ALL CAPS** | Reduces shouting; carrier filtering | ✅ "Great Deal Today" vs. ❌ "GREAT DEAL TODAY" |
| **Test send times** | Improves open rate by 10–30% | ✅ 9–10 AM, 12 PM (lunch), 6–8 PM (evening) |
| **Use short links** | Saves characters; easier to type | ✅ "bit.ly/offer1" vs. ❌ "shop.example.com/promotions/oct/deal1?ref=sms" |
| **Segment by behavior** | Increases relevance; reduces opt-outs | ✅ Send product promos to buyers; cart reminders to window shoppers |
| **Keep it under 160 chars** | Avoids multi-part SMS cost | ✅ One segment = 1 credit vs. 2+ segments = 2+ credits |

### Avoid These Mistakes

| Mistake | Impact | Fix |
|--------|--------|-----|
| **No opt-out in SMS** | TCPA violation; fines $500–$1,500+/message | Add "Reply STOP to unsubscribe" to every SMS |
| **Sending to non-consented contacts** | Legal liability; GDPR/TCPA violations | Verify consent before import; segment opt-in only |
| **Ignoring STOP replies** | Continued legal exposure; customer anger | Monitor SMS inbox daily; process opt-outs within 4 hours |
| **Sending too frequently** | 15–25% unsubscribe rate | Limit to 2–5 SMS/month per segment; test cadence |
| **No personalization** | <5% CTR; low engagement | Use {{FirstName}}, {{Product}}, {{DiscountCode}} merge fields |
| **Unclear CTA** | Low conversion; wasted SMS | Use one clear action: "Shop Now", "Confirm", "RSVP" |
| **Sending at wrong times** | 30% lower open rate | Test 9–10 AM, 12 pm, 6–8 pm; respect timezone |
| **Using shortcodes without documentation** | Carriers flag as spam; delivery issues | Use longcodes (10-digit numbers); register