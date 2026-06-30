---
title: "GoHighLevel API Integration Guide: Connect Slack, Sheets"
description: "Step-by-step API integration tutorial: native Slack/Sheets/Stripe connectors, Zapier workflows, webhook automation, and custom code. Save 8+ hrs/week with"
pubDate: 2026-06-30
lastUpdated: 2026-06-30
dateModified: 2026-06-30
tags: ["gohighlevel", "api-integration", "automation", "zapier", "webhooks", "crm-workflow", "slack", "google-sheets"]
keywords: ["gohighlevel api", "gohighlevel api integration guide", "gohighlevel slack integration", "gohighlevel zapier", "gohighlevel webhook", "gohighlevel google sheets", "gohighlevel stripe integration"]
targetKeyword: "gohighlevel api integration guide"
author: "Short n Sweet Digital"
auditPassed: false
draft: false
heroImage: "/images/2026-06-30-gohighlevel-api-integration-guide.jpg"
heroImageAlt: "GoHighLevel API dashboard showing connected integrations: Slack logo, Google Sheets logo, Stripe logo, Zapier logo, and webhook configuration panel"
ogImage: "/images/2026-06-30-gohighlevel-api-integration-og.jpg"
schemaType: "Article"
audio: "/audio/2026-06-30-gohighlevel-api-integration-guide.mp3"
---

# GoHighLevel API Integration Guide: Connect Slack, Sheets, Stripe & Zapier

You're managing leads in GoHighLevel. Your team uses Slack for communication. Your accountant uses Google Sheets for tracking invoices. Your payment processor is Stripe. Without integration, data bounces between four separate tools—manually, redundantly, slowly.

What if a new lead in GoHighLevel automatically posted to Slack? What if payment data from Stripe auto-updated your Google Sheet? What if every workflow ran hands-free?

GoHighLevel's API (released and expanded significantly in 2025–2026) makes this possible. You can connect to 100+ apps via native integrations, Zapier, webhooks, or direct API calls. Most setups take 10–30 minutes. You'll save 8–12 hours per week on data entry and manual handoffs.

This guide walks you through every integration method, from the simplest (one-click native connectors) to the most powerful (custom webhooks and API calls). By the end, you'll have your entire tech stack talking to GoHighLevel automatically.

> **Key Takeaways**
> - GoHighLevel integrates with 100+ apps via native connectors (Slack, Google Sheets, Stripe, Calendly), Zapier (2,000+ apps), webhooks, and REST API; 87% of integrations complete in <20 minutes (based on 2026 user data from GoHighLevel community)
> - Native integrations (Slack, Sheets, Stripe) require 3–5 clicks to authorize and 2–10 minutes to map fields; no code required; recommended starting point for non-technical teams
> - Zapier workflows connect GoHighLevel to apps without native connectors (e.g., HubSpot, Mailchimp, Typeform); each workflow costs $0.99–$2.99/month; setup time 15–30 minutes
> - Webhooks enable real-time bidirectional data sync (push lead data OUT of GoHighLevel, receive data IN from external systems); requires basic URL knowledge; latency <1 second
> - Custom REST API calls (Pro/Unlimited plans only) allow full automation: create contacts, update fields, trigger automations, retrieve reports; rate limit 300 requests/minute; max batch size 100 records
> - Real-world ROI: A 5-person agency saves 12 hours/week automating lead routing (Slack), invoice tracking (Sheets), and payment capture (Stripe), worth $1,200/month in labor recaptured

---

## Quick Integration Comparison: Which Method to Use

| Integration Type | Best For | Setup Time | Cost | Complexity |
|---|---|---|---|---|
| **Native Connectors** | Slack, Sheets, Stripe, Calendly, Twilio | 5–15 min | Free | ⭐ Easy |
| **Zapier** | Mailchimp, HubSpot, Typeform, 2,000+ others | 15–30 min | $0.99–$2.99/task/mo | ⭐⭐ Medium |
| **Webhooks (IFTTT style)** | Real-time data sync, custom triggers | 20–40 min | Free | ⭐⭐⭐ Advanced |
| **REST API (Code)** | Custom automations, batch operations, reports | 1–4 hours | Free (rate-limited) | ⭐⭐⭐⭐ Expert |

**Quick decision**: 
- Not a developer? Start with Native + Zapier.
- Need real-time sync? Use Webhooks.
- Building a custom app? Use REST API.

---

## Part 1: Native Integrations (Slack, Google Sheets, Stripe, Calendly)

Native integrations are the easiest. No Zapier, no webhooks, no code. Just authorize and map fields.

### Integration 1: Slack (New Leads → Slack Notifications)

**What it does**: When a new lead enters GoHighLevel, post a message to Slack automatically.

**Example**: "🔔 New lead: John Doe (john@example.com) from Website Form. Assignment: Sarah."

**Setup time**: 10 minutes

#### Step 1: Connect GoHighLevel to Slack

1. In GoHighLevel, go to **Settings** → **Integrations** (or search "Slack")
2. Click **"Connect Slack"** or **"Authorize Slack"**
3. A Slack authorization window opens
4. Click **"Allow"** (grants GoHighLevel permission to post to your workspace)
5. Select the **Slack workspace** (if you have multiple)
6. Click **"Authorize"**
7. GoHighLevel redirects back and shows "Slack connected ✓"

#### Step 2: Create a Slack Notification Automation

1. Go to **Automations** (or **Workflows**)
2. Click **"Create New Automation"**
3. Set **Trigger**: **"New Contact"** or **"Form Submission"**
4. Click **"Add Action"**
5. Choose action type: **"Send Slack Message"** (or **"Post to Slack"**)
6. Select **Slack channel**: #leads, #new-prospects, etc.
7. Compose message:
   ```
   🔔 New Lead Alert
   Name: {{FirstName}} {{LastName}}
   Email: {{Email}}
   Phone: {{Phone}}
   Source: {{Source}}
   Assigned to: {{OwnerName}}
   ```
   (Fields like {{FirstName}} auto-populate from the contact)
8. Click **"Save"**

#### Step 3: Test the Integration

1. Create a test contact in GoHighLevel
2. Watch for message to appear in Slack within 30 seconds
3. Verify all fields populated correctly

**Real-world result**: Your Slack #leads channel becomes a live feed of incoming business. No manual posting. No missed leads. Your team sees new opportunities in real-time.

---

### Integration 2: Google Sheets (Lead Pipeline → Sheets)

**What it does**: New contacts automatically add a row to a Google Sheet. Syncs bidirectionally (updates in GoHighLevel → updates in Sheets).

**Example**: Sheet with columns: Name, Email, Phone, Company, Lead Score, Status, Date Added.

**Setup time**: 12 minutes

#### Step 1: Create a Google Sheet

1. Go to **Google Drive** → **"New"** → **"Google Sheet"**
2. Name it: "GoHighLevel Lead Sync"
3. Create columns:
   - A: First Name
   - B: Last Name
   - C: Email
   - D: Phone
   - E: Company
   - F: Lead Score
   - G: Status
   - H: Date Added

#### Step 2: Connect GoHighLevel to Google Sheets

1. In GoHighLevel, go to **Settings** → **Integrations** → **"Google Sheets"**
2. Click **"Connect Google Sheets"**
3. Sign in with your Google account
4. Grant permission (allows GoHighLevel to read/write to your Sheets)
5. GoHighLevel shows "Google Sheets connected ✓"

#### Step 3: Create the Automation (New Contact → Sheet Row)

1. In GoHighLevel, go to **Automations** → **"Create New"**
2. Set **Trigger**: **"New Contact"** or **"Contact Subscribed to List"**
3. Click **"Add Action"** → **"Add Row to Google Sheets"**
4. Select your sheet: "GoHighLevel Lead Sync"
5. Map columns:
   - Sheet column "First Name" ← GoHighLevel field "First Name"
   - Sheet column "Last Name" ← GoHighLevel field "Last Name"
   - Sheet column "Email" ← GoHighLevel field "Email"
   - Sheet column "Phone" ← GoHighLevel field "Phone"
   - Sheet column "Company" ← GoHighLevel field "Company"
   - Sheet column "Lead Score" ← GoHighLevel field "Lead Score"
   - Sheet column "Status" ← GoHighLevel field "Status"
   - Sheet column "Date Added" ← Current timestamp
6. Click **"Save"**

#### Step 4: Test

1. Create a test contact in GoHighLevel
2. Wait 30 seconds
3. Refresh your Google Sheet
4. Verify new row appears with correct data

**Real-world result**: Your sales team can view the full lead pipeline in Google Sheets (familiar interface). No manual data entry. Finance can use the same Sheet for lead-to-revenue tracking.

---

### Integration 3: Stripe (Payment Capture → GoHighLevel)

**What it does**: When a customer pays via Stripe, GoHighLevel automatically creates/updates their contact record with payment details.

**Example**: Stripe payment of $500 → GoHighLevel contact updated with: "Amount Paid: $500", "Payment Date: 2026-06-30", "Status: Paid".

**Setup time**: 8 minutes

#### Step 1: Connect GoHighLevel to Stripe

1. In GoHighLevel, go to **Settings** → **Integrations** → **"Stripe"**
2. Click **"Connect Stripe Account"**
3. You're redirected to Stripe's authorization page
4. Log in with your Stripe account
5. Click **"Allow access"**
6. Stripe shows "Connected to GoHighLevel"
7. You're redirected back to GoHighLevel: "Stripe connected ✓"

#### Step 2: Set Up Payment Automation

1. In GoHighLevel, go to **Automations** → **"Create New"**
2. Set **Trigger**: **"Payment Received"** (via Stripe)
3. Configure:
   - **Minimum payment amount**: $0 (trigger all payments) or set threshold (e.g., $100+)
4. Click **"Add Action"** → **"Update Contact"**
5. Map fields:
   - Set custom field "Amount Paid" to {{StripePaymentAmount}}
   - Set "Payment Status" to "Paid"
   - Set "Last Payment Date" to {{StripePaymentDate}}
   - (Optional) Add tag "Paid Customer"
6. Click **"Save"**

#### Step 3: Test

1. Go to your Stripe dashboard
2. Create a test payment (or process a real one)
3. Wait 30 seconds
4. In GoHighLevel, find the corresponding contact
5. Verify custom fields updated with payment info

**Real-world result**: Your payment status is always current in GoHighLevel. You can automate follow-ups ("Thanks for your payment! Here's access to..."). No manual lookup of Stripe transactions.

---

### Integration 4: Calendly (Appointment Booking → GoHighLevel)

**What it does**: When someone books an appointment on your Calendly calendar, GoHighLevel automatically creates a contact and adds them to an "Appointment Booked" segment.

**Setup time**: 10 minutes

#### Step 1: Connect GoHighLevel to Calendly

1. In GoHighLevel, go to **Settings** → **Integrations** → **"Calendly"**
2. Click **"Connect Calendly"**
3. You're redirected to Calendly's authorization page
4. Log in with your Calendly account
5. Click **"Authorize"**
6. You're redirected back to GoHighLevel: "Calendly connected ✓"

#### Step 2: Create Automation (Booking → Contact + Tag)

1. Go to **Automations** → **"Create New"**
2. Set **Trigger**: **"Calendly Event Booked"**
3. Select which Calendly calendar to monitor (e.g., "Sales Consultation")
4. Click **"Add Action"** → **"Create Contact"** (if contact doesn't exist)
5. Map fields:
   - First Name ← Calendly {{FirstName}}
   - Email ← Calendly {{Email}}
   - Phone ← Calendly {{Phone}}
6. Click **"Add Action"** → **"Add Tag"**: "Appointment Booked"
7. (Optional) **"Send Email"**: "Thanks for booking! Here are the details: {{AppointmentTime}}, {{AppointmentLink}}"
8. Click **"Save"**

#### Step 3: Test

1. Open your Calendly booking page
2. Book a test appointment
3. Wait 60 seconds
4. In GoHighLevel, search for the test contact
5. Verify contact created and tagged "Appointment Booked"

**Real-world result**: Every booking is instantly in your CRM. You can automate reminders, send pre-call questions, or route to the right sales rep.

---

## Part 2: Zapier Integrations (Mailchimp, HubSpot, Typeform, 2,000+ Apps)

Native integrations cover ~10 apps. For everything else, use Zapier.

Zapier is a middleware platform. It watches for events in one app ("New subscriber in Mailchimp") and triggers actions in another ("Create contact in GoHighLevel").

### How Zapier Works (30-Second Primer)

1. **Trigger app**: Mailchimp (event: new subscriber)
2. **Action app**: GoHighLevel (action: create contact)
3. **Zap**: The automation connecting them
4. **Cost**: $0.99–$2.99/month per Zap (depending on plan)

GoHighLevel is available in Zapier as both a trigger and action app (as of June 2026).

### Workflow 1: Mailchimp → GoHighLevel (New Subscribers)

**What it does**: Every new Mailchimp subscriber automatically becomes a GoHighLevel contact.

**Setup time**: 20 minutes

#### Step 1: Create a Zapier Account (Free)

1. Go to **zapier.com**
2. Click **"Sign Up Free"**
3. Create account with email
4. Verify email

#### Step 2: Create a New Zap

1. Click **"Create"** (top left)
2. Name your Zap: "Mailchimp New Subscriber → GoHighLevel Contact"

#### Step 3: Set Up Trigger (Mailchimp)

1. Choose trigger app: **"Mailchimp"**
2. Choose trigger event: **"New Subscriber"**
3. Click **"Continue"**
4. Authorize Zapier to access Mailchimp (click "Allow")
5. Select Mailchimp account
6. Select audience (mailing list): e.g., "Newsletter"
7. Click **"Continue"**

#### Step 4: Set Up Action (GoHighLevel)

1. Choose action app: **"GoHighLevel"**
2. Choose action event: **"Create Contact"**
3. Click **"Continue"**
4. Authorize Zapier to access GoHighLevel:
   - You need a GoHighLevel **API key** (see Part 3 for how to get one)
   - Paste your API key
   - Click **"Yes, Continue"**
5. Map fields:
   - **First Name** ← Mailchimp {{FirstName}}
   - **Email** ← Mailchimp {{Email}}
   - **Phone** ← Mailchimp {{Phone}}
   - **Tags** ← "Mailchimp Subscriber" (static tag)
6. Click **"Continue"**

#### Step 5: Test the Zap

1. Click **"Test Trigger"**
2. Zapier fetches a sample Mailchimp subscriber
3. Click **"Test Action"**
4. Zapier creates a test contact in GoHighLevel
5. Verify in GoHighLevel: Contact should exist with correct fields

#### Step 6: Activate the Zap

1. Click **"Turn on Zap"**
2. Status shows "Zap is on"

**Real-world result**: Every Mailchimp subscriber is instantly in GoHighLevel. You can now run GoHighLevel automations on them (send welcome email, assign to sales rep, etc.).

---

### Workflow 2: Typeform Responses → GoHighLevel (Lead Capture)

**What it does**: When someone submits your Typeform, they're automatically added to GoHighLevel and tagged by form response.

**Example**: Typeform question "What's your budget?" → GoHighLevel contact tagged "Budget: $10k-$25k".

**Setup time**: 15 minutes

#### Step 1: Create the Zap

1. In Zapier, click **"Create"**
2. Name: "Typeform Submission → GoHighLevel Lead"

#### Step 2: Trigger (Typeform New Response)

1. Choose trigger app: **"Typeform"**
2. Choose event: **"New Response"**
3. Authorize Typeform (allow Zapier access)
4. Select form: e.g., "Lead Qualification Form"
5. Click **"Continue"**

#### Step 3: Action (GoHighLevel Create Contact)

1. Choose action app: **"GoHighLevel"**
2. Choose event: **"Create Contact"**
3. Map fields:
   - **First Name** ← Typeform {{FirstName}}
   - **Email** ← Typeform {{Email}}
   - **Phone** ← Typeform {{PhoneNumber}}
   - **Company** ← Typeform {{CompanyName}}
   - **Message** ← Typeform {{AdditionalNotes}}
   - **Tags** ← **Conditional**: If "Budget" answer = "$10k-$25k", tag "Budget: $10k-$25k" (Zapier allows conditional logic)
4. Click **"Continue"**

#### Step 4: Test & Activate

1. Test with sample Typeform submission
2. Verify contact created in GoHighLevel
3. Turn on Zap

**Real-world result**: Lead capture form is automated. No copy-pasting responses. Budget and qualification data flows into GoHighLevel automatically.

---

### Workflow 3: Google Forms Responses → GoHighLevel

**What it does**: Free alternative to Typeform. Google Forms submissions auto-populate GoHighLevel contacts.

**Setup time**: 12 minutes

#### Step 1: Create the Zap

1. Name: "Google Forms → GoHighLevel"

#### Step 2: Trigger (Google Forms New Response)

1. Choose app: **"Google Forms"**
2. Choose event: **"New Form Response"**
3. Authorize Google Forms
4. Select form (list auto-populates)
5. Click **"Continue"**

#### Step 3: Action (GoHighLevel Create Contact)

1. Choose app: **"GoHighLevel"**
2. Choose event: **"Create Contact"**
3. Map fields exactly as in Workflow 2
4. Click **"Continue"**

#### Step 4: Test & Activate

1. Submit a test response to your Google Form
2. Verify contact appears in GoHighLevel within 60 seconds
3. Turn on Zap

**Real-world result**: Free lead capture + auto-CRM. No form fees beyond GoHighLevel.

---

### Workflow 4: HubSpot Contacts → GoHighLevel (Sync Both Directions)

**What it does**: Bidirectional sync. Update a contact in HubSpot → GoHighLevel updates. Update in GoHighLevel → HubSpot updates.

**Setup time**: 25 minutes (two Zaps, one for each direction)

#### Step 1: Create Zap A (HubSpot → GoHighLevel)

1. Name: "HubSpot Contact → GoHighLevel (One Direction)"
2. **Trigger**: HubSpot **"New or Updated Contact"**
3. **Action**: GoHighLevel **"Create or Update Contact"**
4. Map fields:
   - Email ← HubSpot {{Email}} (key field for matching)
   - First Name ← HubSpot {{FirstName}}
   - Last Name ← HubSpot {{LastName}}
   - Phone ← HubSpot {{Phone}}
   - Company ← HubSpot {{Company}}
5. Test & activate

#### Step 2: Create Zap B (GoHighLevel → HubSpot)

1. Name: "GoHighLevel Contact → HubSpot (Return Direction)"
2. **Trigger**: GoHighLevel **"Updated Contact"** or **"New Contact"**
3. **Action**: HubSpot **"Create or Update Contact"**
4. Map fields in reverse
5. Test & activate

**Real-world result**: Your team can work in either platform. Data stays synchronized. No manual sync needed.

**Note**: Advanced users prefer webhooks (Part 3) for real-time bidirectional sync.

---

### Workflow 5: Airtable Records → GoHighLevel (Dynamic CRM Backup)

**What it does**: Every GoHighLevel contact syncs to Airtable. Use Airtable for advanced reporting, custom views, and team collaboration.

**Setup time**: 18 minutes

#### Step 1: Create Airtable Base

1. Go to **airtable.com**
2. Click **"Create base"**
3. Name: "GoHighLevel Contact Sync"
4. Create table: "Contacts" with columns:
   - First Name
   - Last Name
   - Email
   - Phone
   - Company
   - Lead Score
   - Status
   - Date Added

#### Step 2: Create the Zap

1. Name: "GoHighLevel Contact → Airtable"
2. **Trigger**: GoHighLevel **"New Contact"**
3. **Action**: Airtable **"Create Record"**
4. Map fields to Airtable columns
5. Test & activate

**Real-world result**: Live backup of all GoHighLevel contacts in Airtable. Use Airtable's powerful filtering, grouping, and custom views for analysis that GoHighLevel doesn't offer natively.

---

### Workflow 6: SMS Replies → GoHighLevel (Inbound Text Response)

**What it does**: When a contact replies to your GoHighLevel SMS, log the reply in Slack or email it to the team.

**Setup time**: 12 minutes

#### Step 1: Create the Zap

1. Name: "GoHighLevel SMS Reply → Slack Notification"

#### Step 2: Trigger (GoHighLevel Inbound SMS)

1. Choose trigger: GoHighLevel **"Incoming SMS"** (or "Reply Received")
2. Click **"Continue"**

#### Step 3: Action (Slack Post)

1. Choose action: Slack **"Send Message to Channel"**
2. Channel: #customer-replies (or #support)
3. Message template:
   ```
   📱 SMS Reply from {{ContactName}}
   Message: {{SMSContent}}
   Time: {{ReplyTime}}
   
   Quick reply: [link to contact in GoHighLevel]
   ```
4. Test & activate

**Real-world result**: Your team never misses an inbound text reply. All conversations logged and visible.

---

### Workflow 7: GoHighLevel Task Creation → Slack Reminder

**What it does**: When a task is created in GoHighLevel (e.g., "Follow up with John Doe"), post a reminder to Slack.

**Setup time**: 10 minutes

#### Step 1: Create the Zap

1. Name: "GoHighLevel Task → Slack Alert"

#### Step 2: Trigger (GoHighLevel New Task)

1. Choose trigger: GoHighLevel **"New Task"** or **"Task Created"**
2. Filter by assignee (optional): e.g., "Assigned to Sarah"
3. Click **"Continue"**

#### Step 3: Action (Slack Post)

1. Choose action: Slack **"Send Message"**
2. Channel: #tasks or direct message to {{AssignedUser}}
3. Message:
   ```
   ✅ New Task for {{AssignedUser}}
   Task: {{TaskTitle}}
   Due: {{DueDate}}
   Contact: {{ContactName}} ({{Email}})
   ```
4. Test & activate

**Real-world result**: Task management moves to Slack (where your team lives). No context switching to GoHighLevel just to check tasks.

---

## Part 3: Webhooks (Real-Time Bidirectional Sync)

![Part 3: Webhooks (Real-Time Bidirectional Sync)](/images/2026-06-30-gohighlevel-api-integration-guide-s2.jpg)


Webhooks are faster and more flexible than Zapier. Instead of Zapier checking for changes every 15–30 minutes (polling), webhooks push data instantly (real-time, <1 second latency).

**When to use webhooks**:
- You need real-time sync (payment confirmation → instant notification)
- You're sending data TO GoHighLevel from an external system (webhook receiver)
- You're receiving data FROM GoHighLevel to post elsewhere (webhook sender)

### How Webhooks Work

GoHighLevel watches for events (new contact, contact updated, task created) and sends an HTTP POST request to your specified URL. Your server processes that data and triggers downstream actions.

**Example flow**:
1. New contact added in GoHighLevel
2. GoHighLevel sends webhook: `POST https://your-app.com/webhooks/new-lead`
3. Your server receives the data: `{ "name": "John Doe", "email": "john@example.com", ... }`
4. Your server processes: Create Slack message, add to Sheets, etc.
5. Response back to GoHighLevel (< 2 seconds)

### Webhook Setup: Receiving Data FROM GoHighLevel

#### Step 1: Get a Webhook Receiver URL

You need a server to receive webhooks. Options:

**Option A: Zapier Webhook** (Easiest, Free)
1. In Zapier, click **"Create"**
2. Choose **"Zapier Webhooks by Zapier"** as trigger
3. Choose event: **"Catch raw hook"**
4. Zapier generates a unique URL: `https://hooks.zapier.com/hooks/catch/ABC123xyz/`
5. Copy this URL
6. Use this URL in GoHighLevel (next step)

**Option B: Custom Webhook Server** (Advanced)
- Deploy a Node.js, Python, or PHP script that listens on a URL
- See Part 4 (REST API) for code examples

#### Step 2: Configure Webhook in GoHighLevel

1. Go to **Settings** → **Webhooks** or **Integrations** → **"Webhooks"**
2. Click **"Create Webhook"** or **"Add Webhook"**
3. Fill in:
   - **Event**: Select event type (e.g., "New Contact", "Contact Updated", "Task Created")
   - **URL**: Paste your Zapier or custom server URL
   - **Method**: POST (standard)
   - **Headers**: Optional (add API keys if your server requires authentication)
4. Click **"Save"**
5. GoHighLevel now sends data to this URL whenever the event occurs

#### Step 3: Test the Webhook

1. In GoHighLevel, create a test contact
2. GoHighLevel sends a webhook POST to your URL
3. If using Zapier, check **"Webhooks by Zapier"** → Catch the webhook (you'll see the raw data)
4. Verify data received

### Webhook Payload Example (What GoHighLevel Sends)

```json
{
  "type": "new_contact",
  "data": {
    "id": "contact_12345",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "company": "Acme Corp",
    "tags": ["lead", "web_form"],
    "leadScore": 75,
    "createdAt": "2026-06-30T14:22:15Z",
    "source": "Website Form"
  },
  "timestamp": "2026-06-30T14:22:15Z"
}
```

### Real-World Webhook Scenarios

**Scenario 1: New Lead → Instant Slack Post + Email Assignment**

1. Contact created in GoHighLevel
2. Webhook fires to Zapier catch URL
3. Zapier receives payload
4. Zapier action 1: Post to Slack #new-leads with contact details
5. Zapier action 2: Send email to sales manager: "New lead: John Doe"
6. Latency: <500ms total

**Scenario 2: Payment Received → Update Stripe + Invoice Sheets**

1. Payment marked in GoHighLevel
2. Webhook fires to your custom server
3. Server receives payment data
4. Server action 1: Query Stripe for invoice details
5. Server action 2: Append row to Google Sheets with invoice + payment
6. Latency: <2 seconds total

---

## Part 4: REST API (Custom Code for Pro/Unlimited Plans)

The REST API is the most powerful integration method. You have direct access to GoHighLevel's database via HTTP requests.

**Requirements**:
- GoHighLevel Pro or Unlimited plan (Starter doesn't include API access)
- Basic understanding of API requests (HTTP, JSON)
- A server or serverless function to execute code

### Getting Your API Key

1. Go to GoHighLevel **Settings** → **API** or **Developer** → **"API Keys"**
2. Click **"Generate New Key"** or **"Create API Key"**
3. Name it: "My Integration" or "Mobile App"
4. Select permissions (scopes):
   - Contacts (read, write)
   - Campaigns (read, write)
   - Automations (read, trigger)
   - Reports (read)
5. Click **"Generate"**
6. Copy the key (you won't see it again after closing)
7. Save securely: `GOHIGHLEVEL_API_KEY=xxxxxxxxxxxx`

### API Rate Limits & Latency (June 2026)

| Metric | Value | Notes |
|--------|-------|-------|
| **Rate limit** | 300 requests/minute | Per API key; across all endpoints |
| **Burst limit** | 30 requests/second | Hard cap; exceeding causes 429 (too many requests) |
| **Response latency** | 50–200ms | Average; depends on server load |
| **Batch size** | Max 100 records | For bulk operations (create, update contacts) |
| **Token expiration** | 24 hours (session), 90 days (refresh token) | Need to refresh periodically |

**Best practice**: Implement exponential backoff for retries. If you hit rate limit, wait 1 second, then 2 seconds, then 4 seconds before retrying.

### API Endpoints (June 2026 Reference)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/contacts` | GET, POST | List, create contacts |
| `/contacts/{id}` | GET, PATCH | Retrieve, update specific contact |
| `/contacts/bulk` | POST | Batch create/update (up to 100 records) |
| `/automations/trigger` | POST | Trigger an automation for a contact |
| `/campaigns` | GET | List campaigns |
| `/campaigns/{id}/send` | POST | Send campaign to list |
| `/tasks` | GET, POST | List, create tasks |
| `/reports/contacts` | GET | Get contact engagement reports |
| `/reports/campaigns` | GET | Get campaign analytics |

**Full API docs**: https://developers.gohighlevel.com/docs (as of June 2026; check for updates)

### Code Example 1: Create a Contact (Node.js)

```javascript
const