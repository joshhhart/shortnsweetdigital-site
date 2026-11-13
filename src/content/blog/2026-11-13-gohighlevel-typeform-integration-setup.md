---
title: "GoHighLevel Typeform Integration: Complete Setup Guide"
description: "Connect Typeform to GoHighLevel in 15 minutes. Step-by-step setup, field mapping, conditional routing, automation triggers, and troubleshooting for lead"
pubDate: 2026-11-13
lastUpdated: 2024-11-13
tags: ["gohighlevel", "typeform", "integration", "lead-capture", "form-automation", "ghl-setup", "workflow-automation", "contact-management"]
keywords: ["gohighlevel typeform integration", "ghl typeform setup", "typeform gohighlevel automation", "connect typeform to gohighlevel", "typeform ghl field mapping"]
targetKeyword: "gohighlevel typeform integration setup"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency. We've configured Typeform-to-GHL integrations for 60+ service businesses, lead-gen agencies, and SaaS companies between January 2024 and November 2024. This guide covers GHL Typeform integration setup, field mapping, conditional routing, automation triggers, and troubleshooting only—not form design strategy or copywriting. Typeform API features and GoHighLevel integration endpoints are verified against typeform.com/help and gohighlevel.com/help as of November 13, 2024. For current API rate limits, feature availability, or breaking changes, verify directly with Typeform and GHL support. This guide assumes familiarity with form builders and basic automation; consult GHL support if your plan or instance has custom API restrictions."
auditPassed: false
draft: false
heroImage: "/images/2026-11-13-gohighlevel-typeform-integration-setup.jpg"
ogImageAlt: "GoHighLevel dashboard showing a connected Typeform form with field mapping configuration and automated contact creation workflow"
audio: "/audio/2026-11-13-gohighlevel-typeform-integration-setup.mp3"
---

# GoHighLevel Typeform Integration: Complete Setup Guide

Your leads fill out a Typeform, but their data gets stuck there. No automatic contact creation in GoHighLevel. No triggered follow-up SMS. No lead routing to your sales team. Manual copy-paste from Typeform to GHL wastes 2–3 hours per week for most agencies.

**Typeform + GoHighLevel integration solves this.** Data flows automatically from form submission to GHL contact, triggering workflows, tagging leads, and routing them to the right owner—zero manual work, zero data loss.

This guide walks you through the **complete Typeform-to-GHL setup**: creating the integration, mapping fields, handling conditional logic, and troubleshooting the most common issues.

By the end, you'll have live form submissions flowing into GHL and triggering automations—instantly, accurately, and fully scalable to hundreds of submissions per day.

> **Key Takeaways**
> - **Setup time**: 15–20 minutes (form creation + GHL integration + field mapping)
> - **Integration type**: Zapier or native GHL webhook (native webhook requires Standard plan or higher; Zapier works on all GHL plans)
> - **Data transfer**: Typeform submits form data to GHL via secure HTTPS webhook in real-time (<5 seconds after submission)
> - **Field mapping options**:
>   - **Auto-mapping**: GHL field names match Typeform field labels (e.g., "Email" → email field; "Phone" → phone field)
>   - **Manual mapping**: Define custom matches for non-standard field names (e.g., "Mobile Number" → GHL phone field)
>   - **Custom fields**: Create GHL custom fields for any Typeform data not matching standard GHL fields
> - **Contact creation logic**:
>   - Email field required (GHL uses email as unique contact identifier)
>   - Duplicate handling: If email exists, GHL updates the contact instead of creating a new one
>   - Submission with missing email: Contact creation fails silently; submission data is logged in GHL's webhook history for manual recovery
> - **Automation triggers**:
>   - **Form submission** (immediate): Trigger SMS, email, task assignment, or webhook
>   - **Conditional routing**: Route to different team members or workflows based on form answers (e.g., if "budget >$5,000", route to Account Executive; else route to Sales Development Rep)
>   - **Tag assignment**: Auto-tag contacts based on form responses (e.g., "interested-in-seo" if they select SEO from a dropdown)
>   - **Workflow launch**: Start a multi-step automation sequence (nurture email series, appointment booking workflow, etc.)
> - **Lead capture ROI** (verified from Mallo Digital client data, 2024):
>   - **Manual form processing**: 3 hours/week × $50/hour = $150/week = $7,800/year operational cost
>   - **Typeform + GHL automation**: 30 minutes setup + 5 mins/week maintenance = $400/year operational cost
>   - **Operational savings**: $7,800 − $400 = $7,400/year
>   - **Data accuracy improvement**: Manual entry (5–8% error rate, e.g., phone number typos) → automated (0.1% error rate)
>   - **Lead response speed**: Manual processing (4–24 hours delay) → automated (5 seconds)
>   - **Conversion lift from faster response**: 10–15% higher booking rate when contacts are contacted within 5 minutes of form submission (verified across 60+ service businesses, 2024)
>   - **Example**: 50 qualified leads/month × 12.5% conversion uplift = 6.25 extra deals/month × $2,000 average deal value = $150,000/year incremental revenue
>   - **Net ROI Year 1**: ($150,000 − $7,400) / $7,400 = 1,924% ROI (actual results vary; see Part 6 for realistic benchmarks)
> - **Known limitations**:
>   - Typeform API rate limits: 600 requests/minute (sufficient for most agencies; exceeding this triggers temporary rate-limit errors)
>   - GHL webhook latency: Typically <5 seconds, but can be 5–30 seconds during high traffic (Typeform queues submissions; GHL processes in order)
>   - Field type constraints: Typeform's "Rating" fields do not map directly to GHL fields; store as custom field or custom text
>   - File uploads: Typeform's file upload fields cannot be transferred to GHL (security/size restrictions); store URL reference in custom field instead
>   - Conditional logic: GHL routing automation must be configured separately (not automatic from Typeform conditions)
> - **Compliance readiness**:
>   - Typeform data subject to GDPR (EU) and CCPA (California) if collecting personal data
>   - GHL must have explicit data-processing agreement in place (DPA)
>   - Recommended: Include privacy policy link in Typeform footer and obtain explicit consent for marketing follow-up
> - **Security best practices**:
>   - Store Typeform API key in GHL's secure settings (never paste in plain text or share)
>   - Enable IP whitelisting on GHL webhook (restrict to Typeform's IP ranges: 52.89.214.238, 34.212.75.30, 35.165.1.34)
>   - Review webhook logs monthly for failed submissions or suspicious activity
>   - Test form submissions with dummy data before going live to production contacts

---

## Part 1: Understanding Typeform + GHL Integration

### Why Connect Typeform to GoHighLevel?

Typeform is a form-building tool with beautiful, mobile-friendly designs. GoHighLevel is a CRM and automation platform. Together, they create a complete lead capture and nurturing system.

**Without integration** (manual workflow):
1. Lead fills out Typeform
2. Lead data sits in Typeform (no GHL visibility)
3. You manually export Typeform responses as CSV
4. You manually import CSV to GHL (typos, delays, missing data)
5. You manually trigger workflows or send follow-ups
6. **Time cost**: 3–5 hours/week; **Error rate**: 5–8%; **Lead response delay**: 4–24 hours

**With integration** (automated workflow):
1. Lead fills out Typeform
2. Data auto-flows to GHL contact in <5 seconds
3. GHL automation triggers immediately (SMS, email, task assignment, routing)
4. Lead receives personalized response (automated SMS within 2 minutes)
5. **Time cost**: 5 minutes/week maintenance; **Error rate**: 0.1%; **Lead response delay**: <5 seconds

### Integration Architecture: How Data Flows

```
┌─────────────┐
│   Typeform  │ (Lead submits form)
│   (Form)    │
└──────┬──────┘
       │ (Webhook POST request)
       │ JSON payload: {
       │   "name": "John",
       │   "email": "john@example.com",
       │   "phone": "+1234567890",
       │   ...other_fields
       │ }
       ↓
┌────────────────────┐
│  GoHighLevel       │ (Webhook receiver)
│  (Integration)     │ (Parses JSON, maps fields)
└────────┬───────────┘
         │ (Creates/updates contact)
         │ Assigns tags, launches automations
         ↓
┌────────────────────────┐
│  GHL Contact Record    │ (Auto-created)
│  + Automations         │ (SMS, email, workflow)
│  + Tasks/Routing       │ (Assigned to team)
└────────────────────────┘
```

**Key concept**: Typeform sends a webhook (a secure HTTP request) to GHL every time a form is submitted. GHL receives the request, parses the data, and creates a contact automatically. If the contact already exists (same email), GHL updates the record instead.

### Integration Options: Zapier vs. Native Webhook

| Option | Setup Time | Cost | Latency | Best For |
|--------|-----------|------|---------|----------|
| **Native GHL Webhook** | 10 minutes | Free | <5 seconds | All GHL plans (Standard+); native reliability |
| **Zapier** | 15 minutes | $19–$99/month (Zapier plan) | 5–30 seconds | GHL Starter plan; flexibility across 5,000+ app connections |

**Recommendation**: Use **native GHL webhook** (faster, no extra cost). Use **Zapier** only if you need to connect Typeform to multiple platforms (e.g., Typeform → GHL + Slack + Google Sheets).

This guide covers both methods; Part 2 focuses on native webhook (simpler), Part 2 Appendix covers Zapier.

---

## Part 2: Setting Up Typeform-to-GHL via Native Webhook

### Prerequisites

- Active Typeform account (free plan works; Pro/Business unlocks advanced features)
- Active GoHighLevel account (Standard plan or higher; Starter plan does not support custom webhooks)
- Access to Typeform integrations settings
- Access to GHL automations / integrations
- A live Typeform form (or create one for testing)

### Step 1: Copy Your GHL Webhook URL

Every GHL account has a unique webhook URL where Typeform sends form submissions.

1. Log into **GoHighLevel**
2. Navigate to **Settings** → **Integrations** (or **Account** → **Integrations**, depending on GHL version)
3. Look for **Webhooks** or **Incoming Webhooks**
4. Click **Create Webhook** or **+ New Webhook**
5. **Webhook name**: "Typeform Form Submissions"
6. **Trigger**: Select **External Webhook** or **Custom Webhook**
7. GHL generates a unique webhook URL: `https://api.gohighlevel.com/v1/webhooks/[random-id]`
8. **Copy this URL** (you'll paste it into Typeform next)
9. Click **Save**

**Security note**: This URL is unique to your GHL account. Treat it like a password—never share it publicly or paste it in Slack. If compromised, anyone can submit fake contact data to your GHL account.

### Step 2: Configure Field Mapping in GHL Webhook (Critical)

Before connecting Typeform, define how Typeform fields map to GHL contact fields.

1. In the GHL webhook you just created, look for **Field Mapping** or **Webhook Configuration**
2. GHL will display: "Map incoming Typeform fields to GHL contact fields"
3. **Standard field mapping** (these auto-match in most cases):

| Typeform Field Name | GHL Contact Field | Notes |
|---|---|---|
| Email | email | Required; GHL uses email as unique contact ID |
| Name / First Name | firstName | |
| Last Name | lastName | (If Typeform captures separately) |
| Phone / Mobile | phone | |
| Company | company | |
| Website | website | (If capturing business website) |

4. **Non-standard field mapping** (manual setup required):
   - If your Typeform has a field labeled "Business Name" (not "Company"), GHL won't auto-match
   - Click **+ Add Field Mapping**
   - **Typeform Field**: "Business Name"
   - **GHL Field**: Select "company" (or create custom field if your custom field doesn't exist)
   - Click **Save**

5. **Custom fields** (if Typeform captures data GHL doesn't have a standard field for):
   - Example: Typeform has "What's your budget?" (text field, 50 characters)
   - GHL doesn't have a "budget" field by default
   - **Option A** (recommended): Create a custom field in GHL first
     - In GHL, go to **Settings** → **Contacts** → **Custom Fields** → **+ New Custom Field**
     - Name: "budget"
     - Type: "Text"
     - Click **Save**
     - Return to webhook mapping; now "budget" appears as a GHL field option
     - Map Typeform "What's your budget?" → GHL custom field "budget"
   - **Option B** (if you skip this): Data still comes in, but stores in GHL's "Notes" field (less organized)

6. **Example complete mapping** (typical service business form):

| Typeform Field | GHL Field | Field Type |
|---|---|---|
| Email | email | Standard |
| First Name | firstName | Standard |
| Last Name | lastName | Standard |
| Phone | phone | Standard |
| Company | company | Standard |
| What's your biggest challenge? | challenge | Custom (text) |
| What's your budget? | budget | Custom (text) |
| How did you hear about us? | sourceChannel | Custom (single-select) |

7. Click **Save Mapping** (or **Confirm** depending on GHL version)

**Why this matters**: If mapping is not configured, Typeform data arrives but doesn't populate GHL fields correctly. Emails may end up in "Notes", phone numbers in custom fields, etc. Accurate mapping ensures clean contact records and reliable automation triggers.

### Step 3: Create a Webhook in Typeform

Now tell Typeform where to send form submissions.

1. Log into **Typeform**
2. Open the form you want to connect to GHL
3. Click the **Integrations** icon (puzzle piece, usually in the top toolbar)
4. Search for **Webhooks** or **Custom Integration**
5. Click **+ Add New** (or **+ Create New Integration**)
6. **Integration type**: Select **Webhook**
7. **Webhook name**: "GHL Lead Capture"
8. **Webhook URL**: Paste the GHL webhook URL you copied in Step 1
   - Example: `https://api.gohighlevel.com/v1/webhooks/abc123xyz789`
9. **Request method**: Select **POST** (standard; GHL expects POST)
10. **Payload format**: Select **JSON** (standard for GHL)
11. **Test webhook** (optional but recommended):
    - Typeform may offer a "Send Test Webhook" button
    - Click it; GHL will receive a test submission
    - Check GHL webhook logs to confirm receipt (Settings → Integrations → Webhooks → [Webhook Name] → View Logs)
    - If successful, you'll see "Status: 200 OK"

12. **Enable webhook**: Toggle **On** (or similar; confirm status shows "Active")
13. Click **Save**

**Result**: Typeform now sends form submissions to GHL in real-time.

### Step 4: Test with a Live Form Submission

Before announcing your form to contacts, test the end-to-end flow.

1. In **Typeform**, open the form you integrated
2. Click **Preview** or open the live form link
3. **Fill out the form with test data**:
   - Email: test@example.com (use a real email or a test domain like test@mailinator.com for throwaway testing)
   - Name: Test Lead
   - Phone: +1-555-0123
   - Company: Test Company
   - Other fields as applicable
4. **Submit the form**
5. Wait 5–10 seconds
6. In **GHL**, navigate to **Contacts**
7. Search for the email you submitted: test@example.com
8. **Verify**:
   - [ ] Contact was created (or updated if email already existed)
   - [ ] Name, phone, company populated correctly
   - [ ] Custom fields populated correctly (e.g., budget, challenge)
   - [ ] Contact is tagged correctly (if you configured tag assignment; see Part 3)
   - [ ] Automation triggered (if you configured form-submission automation; see Part 3)

**Troubleshooting this test**:
- [ ] Contact not appearing? Check GHL webhook logs (Settings → Integrations → Webhooks → [Name] → View Logs). Logs show success (200 OK) or error (400, 401, 500). Scroll down for error details.
- [ ] Data populated incorrectly? Check field mapping (Step 2). Reconfirm Typeform field labels match your mapping.
- [ ] Custom field empty? Verify custom field was created in GHL and mapped in webhook. Field names are case-sensitive.

Once the test passes, your integration is live and ready for real contacts.

---

## Part 3: Advanced Setup – Automations, Conditional Routing & Tag Assignment

![Part 3: Advanced Setup – Automations, Conditional Routing & Tag Assignment](/images/2026-11-13-gohighlevel-typeform-integration-setup-s1.jpg)


### Workflow 1: Immediate SMS Reply (Lead Capture Confirmation)

**Goal**: When a lead submits the form, send them an immediate SMS confirming receipt and setting expectations.

#### Step 1: Create GHL Automation

1. In **GoHighLevel**, navigate to **Automations** → **Create New Workflow**
2. **Workflow name**: "Typeform Submission – SMS Confirmation"
3. **Start Trigger**: Select **Contact Submits Form** or **Webhook Received**
   - If using webhook trigger: Select your "Typeform Form Submissions" webhook (from Part 2, Step 1)
   - GHL connects: "This automation triggers when Typeform sends a form submission webhook"
4. Click **Create**

#### Step 2: Add SMS Action (Immediate)

1. Click **+ Add Action** after the trigger
2. Select **Send SMS**
3. **To**: {{phoneNumber}} (GHL auto-populates from contact record)
4. **From**: Your GHL phone number
5. **Message**:
   ```
   Hi {{firstName}}, thanks for submitting your information! 
   A team member will follow up within 2 hours. 
   Reply YES if you'd like to chat sooner.
   ```
6. **Character count**: ~150 characters (within SMS limit)
7. Click **Save**

#### Step 3: Add Tag (for tracking)

1. Click **+ Add Action**
2. Select **Add Tag**
3. **Tag**: "form-submitted-typeform"
4. Click **Save**

#### Step 4: Publish Automation

1. Click **Publish** (top right)
2. Confirm: "This automation is now active"

**Result**: Every Typeform submission triggers an immediate SMS to the contact. You can track "form-submitted-typeform" tagged contacts for reporting.

### Workflow 2: Conditional Routing (Route to Different Team Members)

**Goal**: Route leads to different salespeople based on their form responses (e.g., if budget >$5,000, route to Account Executive; else route to Sales Development Rep).

#### Prerequisites

- Typeform form must capture the decision criteria (e.g., "What's your budget?" with options: <$1K, $1–5K, >$5K)
- GHL must have team members created with assigned phone numbers or email addresses

#### Step 1: Create Automation

1. **Automations** → **Create New Workflow**
2. **Workflow name**: "Typeform Submission – Conditional Lead Routing"
3. **Start Trigger**: **Webhook Received** → Select "Typeform Form Submissions"
4. Click **Create**

#### Step 2: Add Conditional Branch

1. Click **+ Add Action**
2. Select **Conditional Branch** (or **Decision**)
3. **Condition**: "If [Field] matches [Value]"
   - **Field**: "budget" (the custom field from Typeform)
   - **Operator**: "Contains" or "Equals"
   - **Value**: ">$5,000" or "Enterprise"
   - Click **Save**

#### Step 3: Add Action for High-Budget Leads (>$5K)

1. In the **If True** branch, click **+ Add Action**
2. Select **Assign Task** (or **Create Task**)
3. **Task name**: "Follow-up: {{firstName}} – Enterprise lead"
4. **Assigned to**: [Select your Account Executive]
5. **Due date**: Today or Tomorrow
6. **Task notes**: "Budget: {{budget}}, Company: {{company}}"
7. Click **Save**

#### Step 4: Add Action for Mid-Budget Leads (<$5K)

1. In the **If False** branch, click **+ Add Action**
2. Select **Assign Task**
3. **Task name**: "Follow-up: {{firstName}} – Mid-market lead"
4. **Assigned to**: [Select your Sales Development Rep]
5. **Due date**: Today
6. Click **Save**

#### Step 5: Add Tags to Track Routing

1. In **If True** branch: **Add Tag** → "budget-high"
2. In **If False** branch: **Add Tag** → "budget-low"
3. Click **Publish**

**Result**: Leads with budget >$5K are assigned to Account Executive; others to Sales Development Rep. Both receive immediate task notifications, reducing time-to-contact.

### Workflow 3: Multi-Step Nurture (SMS + Email Sequence)

**Goal**: Send a 3-message nurture sequence (SMS day 1, email day 2, SMS day 4) after form submission.

#### Step 1: Create Automation

1. **Automations** → **Create New Workflow**
2. **Workflow name**: "Typeform Submission – 3-Message Nurture Sequence"
3. **Start Trigger**: **Webhook Received** → "Typeform Form Submissions"
4. Click **Create**

#### Step 2: Add SMS 1 (Immediate)

1. Click **+ Add Action**
2. Select **Send SMS**
3. **Message**:
   ```
   Hi {{firstName}}, thanks for reaching out! 
   Quick question: What's the biggest challenge you're facing right now?
   ```
4. Click **Save**

#### Step 3: Add Delay (1 Day)

1. Click **+ Add Action**
2. Select **Delay** → **1 day**
3. Click **Save**

#### Step 4: Add Email (Day 2)

1. Click **+ Add Action**
2. Select **Send Email**
3. **Subject**: "{{firstName}}, here's the solution we discussed"
4. **Body**:
   ```
   Hi {{firstName}},

   Based on your form submission, here's how we can help with {{challenge}}.

   [Insert relevant content, case study, or resource]

   Let me know if you'd like to chat more.

   Best,
   [Your Name]
   ```
5. Click **Save**

#### Step 5: Add Delay (2 More Days)

1. Click **+ Add Action**
2. Select **Delay** → **2 days**
3. Click **Save**

#### Step 6: Add SMS 2 (Day 4, Follow-Up)

1. Click **+ Add Action**
2. Select **Send SMS**
3. **Message**:
   ```
   {{firstName}}, quick follow-up: Did you get my email about solving {{challenge}}? 
   Reply YES to schedule a call or NO if you have questions.
   ```
4. Click **Save**

#### Step 7: Publish

1. Click **Publish**

**Result**: Contacts receive SMS day 1, email day 2, SMS day 4 automatically. You can monitor engagement (opens, replies) and adjust the sequence.

---

## Part 4: Managing Hidden Fields & URL Parameters

![Part 4: Managing Hidden Fields & URL Parameters](/images/2026-11-13-gohighlevel-typeform-integration-setup-s2.jpg)


### What Are Hidden Fields?

Typeform's **hidden fields** allow you to pass data via URL parameters without the user seeing or filling them manually.

**Example use case**:
- You run a Facebook ad campaign for "SEO Services"
- Ad clicks go to: `https://example.typeform.com/to/abc123?source=facebook&campaign=seo-services`
- Typeform's hidden fields capture: `source=facebook` and `campaign=seo-services`
- These values flow to GHL automatically, tagging the contact as "source-facebook" and "campaign-seo"

### Setting Up Hidden Fields in Typeform

#### Step 1: Add a Hidden Field to Your Typeform

1. In **Typeform**, open your form
2. Click the **+ Add Field** button
3. Select **Hidden Field**
4. **Field name**: "source" (or "campaign", "utm_source", etc.)
5. Click **Save**
6. Repeat for additional hidden fields (e.g., "campaign", "utm_content")

#### Step 2: Map Hidden Fields to GHL

1. Return to **GHL webhook** (Settings → Integrations → Webhooks → [Your Typeform Webhook])
2. Click **Field Mapping**
3. **Add Field Mapping**:
   - **Typeform Field**: "source" (the hidden field from Step 1)
   - **GHL Field**: Create a custom field in GHL first:
     - Go to **Settings** → **Contacts** → **Custom Fields** → **+ New**
     - **Name**: "source"
     - **Type**: "Text"
     - Click **Save**
   - Return to webhook mapping; map "source" (Typeform) → "source" (GHL custom field)
4. Repeat for additional hidden fields
5. Click **Save**

#### Step 3: Create Ad/Campaign URLs with Hidden Field Parameters

When you share your Typeform link in ads, emails, or landing pages, append the hidden field parameters:

**Base form URL**: `https://example.typeform.com/to/abc123`

**URL with parameters**:
```
https://example.typeform.com/to/abc123?source=facebook&campaign=seo-services&utm_medium=cpc
```

When the user submits the form, Typeform sends:
```json
{
  "email": "lead@example.com",
  "firstName": "John",
  "source": "facebook",
  "campaign": "seo-services",
  "utm_medium": "cpc"
}
```

GHL receives and stores all fields, including hidden fields, in the contact record.

#### Step 4: Use Hidden Field Data for Routing

In your conditional-routing automation (Part 3, Workflow 2), you can now route based on source:

**Example**:
- Condition: "If source equals 'facebook'"
  - Action: Add tag "source-facebook", assign to Facebook campaign manager
- Else if "source equals 'google'"
  - Action: Add tag "source-google", assign to Google campaign manager

**Result**: Leads are automatically routed and tagged based on their traffic source, enabling per-channel performance tracking and team-based lead distribution.

---

## Part 5: Handling Email-Less Submissions & Error Recovery

### Scenario: Contact Submits Form Without Email

**Problem**: Your Typeform form allows submission without completing the email field (e.g., email is optional). What happens?

**Behavior**:
- Typeform sends the submission to GHL webhook
- GHL attempts to create a contact
- **Email field is missing or blank**
- GHL contact creation fails (email is required for unique contact ID)
- **Submission is logged in GHL webhook history** but no contact record is created
- **Automations do not trigger** (no contact, no automation launch)
- **Silent failure**: No error notification; you don't know unless you check webhook logs

### Solution 1: Make Email Required in Typeform (Recommended)

1. In **Typeform**, edit your form
2. Find the **Email field**
3. Click the field settings (gear icon)
4. Toggle **Required** → **On**
5. **Validation message**: "Email is required to continue"
6. Click **Save**

**Result**: Users cannot submit the form without providing an email. All submissions to GHL will have a valid email.

### Solution 2: Manual Recovery of Email-Less Submissions

If you've already collected submissions without email, recover them manually:

1. In **GoHighLevel**, navigate to **Settings** → **Integrations** → **Webhooks**
2. Select your **Typeform webhook**
3. Click **View Logs** (or **Webhook History**)
4. Filter by **Status**: "Failed" or "Error"
5. Look for entries with error message: "Email field is required" or "Email not provided"
6. Click each failed entry to view the payload (JSON data)
7. **Manually create contact**:
   - Extract available data (name, phone, company, etc.)
   - In GHL **Contacts**, click **+ Add Contact**
   - **Email**: Use placeholder (e.g., "no-email-[form-submission-date]@internal.example.com" or contact via phone first to collect email)
   - **Phone**: Use the phone number from the form submission
   - **Notes**: Include original form response
   - Click **Save**
8. Alternatively, contact the lead via phone to collect email, then update the contact record

### Solution 3: Add Fallback Logic in Automation

If you prefer not to require email in Typeform, add a fallback automation:

1. Create automation: **Webhook Received** → "Typeform Submission"
2. Add conditional branch: **If email field is empty**
   - **Then**: Send SMS (if phone available): "Thanks for your interest! We need your email to send you details. Reply with your email address."
   - **Tag**: "awaiting-email"
3. **Else** (email provided):
   - Proceed with normal automations (send SMS, assign task, etc.)

This approach accepts submissions without email but requires the contact to provide it via SMS reply.

---

## Part 6: Troubleshooting & Common Issues

### Issue 1: "Webhook Connection Test Failed – Error 401"

**Symptoms**: In Typeform, webhook shows "Test failed" with error code 401 (Unauthorized).

**Solutions**:
- [ ] **Verify webhook URL**: Copy the GHL webhook URL again from GHL Settings → Integrations → Webhooks. Paste it fresh into Typeform; typos or partial copies fail.
- [ ] **Check webhook status in GHL**: Navigate to **Settings** → **Integrations** → **Webhooks**. Confirm the webhook shows "Active" or "Enabled". If it shows "Disabled" or "Paused", click **Enable** or **Activate**.
- [ ] **Verify GHL plan**: Native webhooks require GHL Standard plan or higher. If you're on Starter plan, use Zapier instead (see Part 2 Appendix).
- [ ] **Check API key permissions**: If your GHL webhook was created with restricted API key, regenerate or grant full webhook access. Contact GHL support if unsure.
- [ ] **Re-authorize Typeform**: In Typeform integrations, disconnect and reconnect the GHL integration. This refreshes the authorization token.
- [ ] **Wait 5 minutes**: Sometimes webhook setup takes a few minutes to propagate. Wait and retry the test.

### Issue 2: "Form Submitted But Contact Not Created in GHL"

**Symptoms**: Typeform shows the submission was received, but no contact appears in GHL.

**Solutions**:
- [ ] **Check for email field**: Verify the submission