---
title: "GoHighLevel Xano Integration: API Setup and Data Sync Guide"
description: "Connect GoHighLevel to Xano with bidirectional data sync. Complete API authentication, webhook configuration, and troubleshooting guide for agencies."
pubDate: 2026-08-20
lastUpdated: 2026-08-20
dateModified: 2026-08-20
tags: ["gohighlevel", "xano", "integration", "api", "data-sync", "webhooks", "agency-tools", "tutorial"]
keywords: ["gohighlevel xano integration", "how to integrate gohighlevel with xano", "gohighlevel xano api setup", "xano gohighlevel webhook", "gohighlevel xano data sync"]
targetKeyword: "gohighlevel xano integration setup"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner with 20+ completed GHL-Xano integrations (2024–2026). We've synced contact databases, automated lead qualification workflows, and built custom CRM pipelines using Xano's API layer. Learn more at shortnsweet.digital/team."
auditPassed: false
draft: false
heroImage: "/images/2026-08-20-gohighlevel-xano-integration-setup.jpg"
heroImageAlt: "GoHighLevel and Xano integration setup with API authentication flow diagram"
ogImage: "/images/2026-08-20-gohighlevel-xano-integration-og.jpg"
schemaType: "HowToGuide"
estimatedTime: "2 hours"
audio: "/audio/2026-08-20-gohighlevel-xano-integration-setup.mp3"
---

# GoHighLevel Xano Integration: API Setup and Data Sync Guide

> **AFFILIATE DISCLOSURE**
>
> Short n Sweet Digital is a GoHighLevel white-label implementation partner. We earn referral commissions when readers sign up for GoHighLevel via the affiliate link in this post (https://www.gohighlevel.com/?fp_ref=shortnsweet53). We disclose this upfront so you can evaluate this guide with full transparency. The integration steps and technical details reflect hands-on setup experience across 20+ GHL-Xano deployments (2024–2026); they are not influenced by our commission structure. **Verify all steps with GoHighLevel and Xano's current API documentation before deploying to production.**

---

You're managing leads in Xano—a powerful no-code platform for custom CRM logic, lead scoring, and workflow automation. But your sales team lives in GoHighLevel, where they run email campaigns, manage pipelines, and close deals.

The two platforms don't talk to each other by default. Leads created in Xano don't appear in GHL. Email responses in GHL don't update Xano's lead database.

This guide walks you through setting up a complete bidirectional integration between GoHighLevel and Xano in 2 hours, covering API authentication, webhook configuration, contact sync, and error handling.

> **Key Takeaways**
> - **Integration method**: Xano API → GoHighLevel API + webhooks (no third-party middleware required; direct API-to-API connection)
> - **Bidirectional sync**: Leads created in Xano sync to GHL contacts; email opens/clicks in GHL update Xano lead scores
> - **Setup time**: 2 hours (30 min API key generation, 1 hour Xano workflow setup, 30 min testing and troubleshooting)
> - **Required GHL plan**: Pro or higher ($199+/month; API access included at all paid tiers)
> - **Required Xano plan**: Professional or higher ($60+/month; API required for custom workflows)
> - **Sync method**: RESTful API calls via Xano's HTTP Request action (no native GHL-Xano integration exists; HTTP API is the standard bridge)
> - **Data synced**: Contact name, email, phone, custom fields, tags, lead status; email engagement data (opens, clicks, replies)
> - **Error handling**: Failed syncs logged in Xano's workflow logs; retry logic built into Xano HTTP Request action; manual sync available via Postman if needed
> - **Cost**: Zero additional cost (GHL API included in Pro plan; Xano API included in Professional plan)
> - **Testing**: Use Postman to test API calls before wiring into Xano; GHL's sandbox mode available for non-production testing

---

## Phase 0: Prerequisites and API Access Setup (30 Minutes)

### What You'll Need

1. **Active GoHighLevel account** (Pro or higher; $199+/month)
   - API access included at all paid tiers
2. **Active Xano account** (Professional or higher; $60+/month)
   - API required for custom workflows
3. **GHL API key** (generated in GHL settings)
4. **Xano API credentials** (if required; most integrations use webhook URLs instead)
5. **Postman app** (free, for testing API calls; download at [postman.com](https://www.postman.com/downloads/))
   - Alternative: cURL command-line tool (installed on most Mac/Linux systems; available for Windows via WSL)
6. **A test Xano database** with sample contacts (for safe testing before production)
7. **A test GHL account or test contact list** (for safe testing before production)

### GHL and Xano API Version Compatibility

**Last tested with**:
- GoHighLevel API: v1 (as of August 2026)
- Xano API: v1 and v2 (both supported; v2 recommended for new integrations)

If you're using a different GHL or Xano version, verify endpoint paths and field names in the official API docs before proceeding.

---

## Phase 1: Generate GoHighLevel API Credentials (15 Minutes)

### Step 1: Log Into Your GHL Account

1. Go to **[GoHighLevel Dashboard](https://app.gohighlevel.com)** (https://app.gohighlevel.com)
2. Sign in with your agency account (main account, not a white-label client)
3. Navigate to **Settings** (gear icon in the left sidebar)

### Step 2: Find API Settings

1. In Settings, look for **API** or **Integrations > API** (path varies by GHL version)
   - Typical path: Settings > API & Integrations > API Keys
   - If not found: Search within Settings using Ctrl+F for "API"
2. Click **API Keys** or **Manage API Keys**

### Step 3: Create a New API Key

1. Click **+ Generate New API Key** or **Create API Key**
2. You'll see a form with fields:
   - **Name** (label for this key): e.g., "Xano Integration Key"
   - **Permissions** (scopes): Select which resources the key can access
3. For the name, enter: `Xano Integration - [Your Agency Name]`
4. For permissions, enable:
   - ✅ **Contacts** (read and write): Create, update, and read contacts
   - ✅ **Tags** (read and write): Apply tags to contacts
   - ✅ **Pipelines** (read and write): Update deal/pipeline status
   - ✅ **Email** (read): Track email opens, clicks, replies
   - ⚠️ **Other scopes** (optional): Enable only what your integration needs
5. Click **Create API Key** or **Generate**

GHL will display a long alphanumeric string, e.g.:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2dvaGlnaGxldmVsLmNvbSIsImF1ZCI6IlhBTk8tSW50ZWdyYXRpb24iLCJpYXQiOjE2OTQxNDUwMDB9.a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v
```

**⚠️ Important**: Copy this key immediately and store it in a secure location (password manager, encrypted note, or environment variable). GHL will not display it again. If you lose it, you'll need to regenerate a new key.

### Step 4: Document Your GHL API Key

Create a secure note with:
```
GHL API Key: [paste the full key here]
GHL Base URL: https://api.gohighlevel.com/
GHL Account ID: [found in Settings > Account Info]
Integration: Xano
Created: [today's date]
```

You'll need the Account ID in Phase 2, Step 4.

### Step 5: Find Your GHL Account ID

1. In GHL, go to **Settings > Account Info** (or **Settings > General**)
2. Look for **Account ID** or **Agency ID** field
3. Copy and save it (format: usually a UUID like `1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p`)

You'll use this Account ID in Xano API calls.

---

## Phase 2: Set Up Xano Workflows for GHL Sync (1 Hour)

Now that you have GHL API credentials, configure Xano to send contact data to GHL whenever a lead is created or updated.

### Step 1: Log Into Xano

1. Go to **[Xano.com](https://xano.com)** and sign in
2. Open the app you want to integrate with GHL
3. Navigate to the **Database** tab (left sidebar)
4. Identify your **contacts table** (or leads table)

**Example Xano table structure**:
```
Table: contacts
Fields:
- id (auto-increment)
- first_name (text)
- last_name (text)
- email (email)
- phone (text)
- lead_score (number)
- status (select: new, qualified, contacted, deal, lost)
- created_at (timestamp)
- updated_at (timestamp)
```

### Step 2: Create a New Xano Workflow

1. In Xano, go to **Workflows** (left sidebar)
2. Click **+ New Workflow**
3. Name the workflow: `Sync New Contact to GHL`
4. Set the trigger:
   - **Trigger type**: Database Record
   - **Table**: contacts
   - **Event**: Record Created (or Record Updated, depending on your use case)
   - Click **Create**

### Step 3: Add HTTP Request Action

1. In the workflow canvas, click **+ Add Action**
2. Select **HTTP Request** (typically under "External Services" or "HTTP")
3. Configure the HTTP request:

**HTTP Request Configuration**:

| Field | Value |
|-------|-------|
| **Method** | POST |
| **URL** | `https://api.gohighlevel.com/v1/contacts/` |
| **Headers** | Authorization: Bearer [Your GHL API Key] |
| | Content-Type: application/json |
| **Body** | (see Step 4 below) |

### Step 4: Map Xano Fields to GHL Contact Fields

In the HTTP Request body, map your Xano table fields to GHL's contact schema:

```json
{
  "firstName": "{{contacts.first_name}}",
  "lastName": "{{contacts.last_name}}",
  "email": "{{contacts.email}}",
  "phone": "{{contacts.phone}}",
  "tags": ["Lead", "Xano-Source"],
  "customField": {
    "leadScore": "{{contacts.lead_score}}",
    "status": "{{contacts.status}}"
  }
}
```

**Field mapping explained**:
- `firstName`, `lastName`, `email`, `phone`: Standard GHL contact fields
- `tags`: Array of tags to apply (e.g., "Lead," "Xano-Source")
- `customField`: Object containing custom fields (adjust field names to match your GHL custom field setup from Phase 1)
- `{{contacts.field_name}}`: Xano variable syntax (replace with your actual Xano field names)

**Example with real values**:
```json
{
  "firstName": "{{contacts.first_name}}",
  "lastName": "{{contacts.last_name}}",
  "email": "{{contacts.email}}",
  "phone": "{{contacts.phone}}",
  "tags": ["Lead", "Xano"],
  "customField": {
    "leadScore": "{{contacts.lead_score}}",
    "leadStatus": "{{contacts.status}}"
  }
}
```

### Step 5: Add Authorization Header

1. In the HTTP Request headers section, click **+ Add Header**
2. **Name**: `Authorization`
3. **Value**: `Bearer [paste your GHL API key from Phase 1, Step 4]`
4. Repeat for Content-Type:
   - **Name**: `Content-Type`
   - **Value**: `application/json`

### Step 6: Configure Error Handling

1. After the HTTP Request action, click **+ Add Action**
2. Select **Conditional** (or **If/Then**)
3. Set condition: **If HTTP Response Status ≠ 200 or 201**
   - **Then**: Send error notification or log to database
   - **Action**: Send Slack message or log to error_logs table: `"Sync failed for contact {{contacts.email}}: {{http_response.error}}"`
4. This helps you debug sync failures without interrupting the workflow

### Step 7: Save and Test the Workflow

1. Click **Save Workflow**
2. Xano will save the workflow (you should see a confirmation message)
3. Leave the workflow **Active** (toggle on) so it triggers for new contacts

---

## Phase 3: Test the Integration with Postman (30 Minutes)

Before relying on the full automated workflow, test a single API call using Postman to verify your GHL API key and endpoint work correctly.

### Step 1: Download and Install Postman

1. Go to **[postman.com/downloads](https://www.postman.com/downloads/)**
2. Download Postman for your OS (Mac, Windows, or Linux)
3. Install and launch the app

### Step 2: Create a New Request

1. In Postman, click **+ New** (top-left)
2. Select **HTTP Request**
3. You'll see a blank request form

### Step 3: Configure the Request

1. **Method**: Select **POST** from the dropdown
2. **URL**: Paste `https://api.gohighlevel.com/v1/contacts/`
3. Click the **Headers** tab
4. Add two headers:
   - **Key**: `Authorization` | **Value**: `Bearer [Your GHL API Key from Phase 1]`
   - **Key**: `Content-Type` | **Value**: `application/json`
5. Click the **Body** tab
6. Select **raw** (radio button)
7. Select **JSON** from the format dropdown
8. Paste the following test payload:

```json
{
  "firstName": "Test",
  "lastName": "Contact",
  "email": "test-xano-ghl-2026@example.com",
  "phone": "+1-555-123-4567",
  "tags": ["TestLead", "Xano"]
}
```

### Step 4: Send the Request

1. Click **Send** (blue button, right side)
2. Postman will send the request to GHL's API

### Step 5: Review the Response

You should see a response in the **Response** panel (bottom of Postman):

**Success response** (Status 200 or 201):
```json
{
  "data": {
    "id": "5f8d9c7e3b2a1f9e5d6c7b8a",
    "firstName": "Test",
    "lastName": "Contact",
    "email": "test-xano-ghl-2026@example.com",
    "phone": "+1-555-123-4567",
    "tags": ["TestLead", "Xano"],
    "created": true
  },
  "success": true
}
```

**Error response** (Status 400, 401, or 500):
```json
{
  "error": "Unauthorized",
  "message": "Invalid API key",
  "status": 401
}
```

| Response Status | Meaning | Fix |
|---|---|---|
| **200 or 201** | ✅ Success; contact created in GHL | Move to Step 6 |
| **400 (Bad Request)** | ❌ Malformed payload (wrong field names or format) | Check JSON syntax in body; verify field names match GHL schema |
| **401 (Unauthorized)** | ❌ Invalid or expired API key | Regenerate GHL API key in Phase 1; verify you copied the full key |
| **403 (Forbidden)** | ❌ API key doesn't have permission for this action | Re-check API key permissions in GHL (ensure "Contacts" scope enabled) |
| **500 (Internal Server Error)** | ❌ GHL server error | Wait 5 minutes and retry; if persists, contact GHL support |

### Step 6: Verify Contact Created in GHL

1. Log into your GHL account
2. Go to **Contacts > View All**
3. Search for "test-xano-ghl-2026@example.com" (the test email from Step 3)
4. If the contact appears with the correct name, phone, and tags—the API works! ✅

---

## Phase 4: Set Up Bidirectional Sync (30 Minutes)

![Phase 4: Set Up Bidirectional Sync (30 Minutes)](/images/2026-08-20-gohighlevel-xano-integration-setup-s1.jpg)


Now that contacts sync FROM Xano TO GHL, set up the reverse: email engagement from GHL (opens, clicks, replies) syncs back to Xano to update lead scores.

### Step 1: Create a GHL Automation to Trigger on Email Open

1. In GHL, go to **Automations > New Automation**
2. Name it: `Update Xano Lead Score on Email Open`
3. Set the trigger:
   - **Trigger type**: Email > Email Opened
   - **Select email/campaign**: Choose the campaign you want to track (or leave as "all campaigns")
   - Click **Create**

### Step 2: Add HTTP Request Action (via Zapier or Native Integration)

**Option A: Using Zapier** (Recommended for non-API users):
1. In GHL automation, add action: **Zapier > Send to Zapier**
2. Connect your Zapier account and select a Zap that sends data to Xano
3. Map GHL contact fields to Xano fields

**Option B: Using Native GHL Webhook** (Advanced):
1. GHL can trigger a webhook on email open; configure in GHL automation
2. Set webhook URL to a Xano endpoint that updates lead score
3. Map GHL's webhook payload to Xano's API schema

**For this guide, we'll use Option A (Zapier), as it's simpler and requires no custom coding**:

### Step 3: Create Zapier Integration (If Using Option A)

1. Go to **[Zapier.com](https://zapier.com)** and sign in
2. Click **+ Create > Create a Zap**
3. **Trigger**: Select **GoHighLevel > Email Opened**
4. **Action**: Select **Xano > Update Record**
5. Map fields:
   - **Trigger**: GHL contact email, contact ID
   - **Action**: Find Xano contact by email, update `lead_score` field by +10 (for each open)
6. Test the Zap
7. Turn the Zap on
8. Back in GHL automation, select this Zap as the action

### Step 4: Add Conditional Logic for Lead Scoring

Optionally, add conditions to score leads based on engagement level:

- **Email opened**: +5 points
- **Link clicked**: +10 points
- **Replied to email**: +25 points
- **Visited landing page**: +15 points

Configure these in Xano by creating workflows for each event type, mapping to Zapier or direct HTTP calls.

---

## Phase 5: Test End-to-End Sync (15 Minutes)

### Test Scenario 1: Create Contact in Xano, Verify in GHL

1. In Xano, manually add a new contact to your contacts table:
   ```
   First Name: Test2
   Last Name: Sync
   Email: test2-xano-sync@example.com
   Phone: +1-555-234-5678
   Lead Score: 15
   Status: new
   ```
2. Save the record
3. Wait 2–5 seconds for the Xano workflow to trigger
4. Log into GHL and search for "test2-xano-sync@example.com" in Contacts
5. ✅ If the contact appears with correct data, sync is working!

### Test Scenario 2: Send Email in GHL, Verify Lead Score Updates in Xano

1. In GHL, select the test contact from Scenario 1
2. Send a test email campaign with a link
3. Open the email and click a link
4. Wait 5–10 seconds for the Zapier workflow to trigger
5. In Xano, view the contact record
6. Check if `lead_score` increased from 15 to 25 (or your configured amount)
7. ✅ If lead score updated, reverse sync is working!

### Test Scenario 3: Verify Custom Field Sync

1. In Xano, update a contact's `status` field from "new" to "qualified"
2. Wait for the workflow to trigger (2–5 seconds)
3. In GHL, refresh the contact record
4. Verify the custom field `leadStatus` updated to "qualified"
5. ✅ If the custom field synced, field mapping is working!

---

## Phase 6: Error Handling and Troubleshooting (15 Minutes)

### Common Sync Failures and Fixes

| Error | Cause | Fix |
|---|---|---|
| **Xano workflow doesn't trigger** | Workflow set to inactive; trigger condition not met | (1) Check workflow status (toggle on). (2) Verify trigger event matches your action (e.g., "Record Created" for new contacts). (3) Check workflow logs in Xano. |
| **HTTP 401 Unauthorized from GHL** | API key invalid, expired, or missing "Authorization" header | (1) Regenerate GHL API key in Settings > API Keys. (2) Copy the entire key (no spaces). (3) Verify header format: `Bearer [key]` (not `Bearer: [key]`). |
| **HTTP 400 Bad Request** | Field names in JSON don't match GHL schema | (1) Check GHL contact field names (Settings > Custom Fields). (2) Update Xano HTTP request body to match exact names. (3) Ensure JSON is valid (no trailing commas). |
| **Contact syncs to GHL but lead score doesn't update** | Zapier workflow inactive or trigger not firing | (1) Log into Zapier and verify Zap is on. (2) Check Zap history for errors. (3) Test Zap manually from Zapier dashboard. |
| **Duplicate contacts in GHL** | Sync triggered multiple times; no duplicate check | (1) In Xano, add conditional: "Only sync if contact not already in GHL". (2) Use GHL's "Check if email exists" before creating. (3) Configure GHL import to skip duplicates. |

### Manual Sync Fallback (If Automation Fails)

If the automated workflow fails for a few contacts, use Postman to manually re-sync:

1. Open Postman (from Phase 3)
2. For each contact that failed, create a new POST request
3. Use the contact's data from Xano as the body
4. Send the request
5. Verify response status 200/201

---

## Phase 7: Production Deployment Checklist (10 Minutes)

Before going live with real client data, run through this checklist:

- [ ] **API key security**: API key stored securely (password manager, not in public code or Slack)
- [ ] **Xano workflows activated**: All workflows (create, update, email open) set to "Active"
- [ ] **Error logging enabled**: Xano logs all sync errors; team notified of failures
- [ ] **Test data cleaned up**: Delete all test contacts from both Xano and GHL
- [ ] **Custom fields mapped**: All Xano fields you want synced are mapped to GHL custom fields
- [ ] **Permissions verified**: GHL API key has Contacts, Tags, Pipeline, and Email scopes
- [ ] **Zapier workflows on**: All Zapier Zaps set to "On" and tested
- [ ] **Email templates ready**: GHL email campaigns configured and tested
- [ ] **Documentation shared**: Team has guide on how sync works and what to do if it breaks
- [ ] **Backup plan**: Manual sync process (via Postman) documented in case automation fails
- [ ] **Monitoring set up**: Xano workflow logs monitored daily for failed syncs (first 2 weeks); then weekly
- [ ] **Client notified**: If this is for a client, they know integration is live and how it impacts their workflow

---

## Phase 8: Monitoring and Maintenance (Ongoing)

![Phase 8: Monitoring and Maintenance (Ongoing)](/images/2026-08-20-gohighlevel-xano-integration-setup-s2.jpg)


### Daily Monitoring (First 2 Weeks)

1. **Check Xano workflow logs**:
   - In Xano, go to Workflows > [Your workflow name] > Logs
   - Look for red error entries
   - If errors appear, fix the cause immediately (e.g., API key issue, field name mismatch)

2. **Check Zapier task history**:
   - In Zapier, go to Zaps > [Your Zap] > Task History
   - Count successful vs. failed tasks
   - If >5% failures, investigate and fix

3. **Spot-check GHL contacts**:
   - In GHL Contacts, randomly open 5 contacts created from Xano
   - Verify all fields synced correctly
   - Check that lead scores match Xano

### Weekly Monitoring (After First 2 Weeks)

1. Run the same checks above once per week
2. Tally total syncs for the week (expected count based on Xano growth)
3. If sync count drops >20% from baseline, investigate
4. Review any errors from the previous week; implement fixes

### Monthly Maintenance

1. **Update API key if needed**: GHL recommends rotating API keys every 90 days
2. **Check GHL/Xano API docs for breaking changes**: Set a calendar reminder to review official API docs quarterly
3. **Test sync with a new contact**: Create a test contact in Xano and verify it syncs end-to-end
4. **Review lead score accuracy**: Sample 10 contacts in GHL and verify lead scores match their engagement level

### Sync Failure Recovery

If a batch of contacts fails to sync (e.g., due to temporary API outage):

1. Identify the failed contact IDs from Xano workflow logs
2. Use Postman to manually re-sync each contact (see Phase 6)
3. Verify in GHL that contacts now appear
4. Update Xano flag to mark contacts as "synced to GHL"

---

## Phase 9: Advanced Customization (Optional)

### Custom Lead Scoring Rules

In Xano, create advanced logic to calculate lead scores based on email engagement:

```
Rule: Email Opened → +5 points
Rule: Email Link Clicked → +10 points
Rule: Email Replied → +25 points
Rule: Visited Landing Page → +15 points
Rule: Form Submitted → +50 points
Rule: Scheduled Call → +100 points
```

Map these events via Zapier or direct Xano API calls to update the lead score in real-time.

### Conditional Sync Based on Lead Score

Only sync high-value leads (score > 50) to GHL:

1. In Xano workflow, add conditional:
   - **If**: `lead_score > 50`
   - **Then**: Send HTTP request to GHL
   - **Else**: Skip sync (or send to a low-priority list)

### Two-Way Update (GHL to Xano)

If you update a contact's status in GHL (e.g., from "Lead" to "Deal"), sync that change back to Xano:

1. Create GHL automation: "On Contact Status Change"
2. Add action: Send to Zapier
3. In Zapier, update Xano contact record with new status

---

## CTA: Ready to Streamline Your Lead Flow?

Managing leads across two platforms wastes time and loses data. The GHL-Xano integration connects your entire tech stack, syncing contacts, automating lead scoring, and updating pipelines in real-time.

**Not using GoHighLevel yet?** Start your GHL journey with a free account or Pro plan and unlock bidirectional data sync with Xano and 100+ other platforms. **[Sign up for GoHighLevel today →](https://www.gohighlevel.com/?fp_ref=shortnsweet53)**

---

## Frequently Asked Questions

**Q: Does GHL have a native Xano integration?**

A: No. GHL does not have a built-in Xano connector in its integration marketplace. The HTTP API method (documented in this guide) is the standard approach used by agencies integrating Xano with GHL.

**Q: Can I sync in real-time, or is there a delay?**

A: Sync is near-real-time: 2–5 seconds for Xano workflows, 5–10 seconds for Zapier. For truly instantaneous sync (<1 second), you'd need to use Xano's direct API call within its workflow (not through Zapier), but both methods are functionally identical for most use cases.

**Q: What if my GHL API key gets compromised?**

A: Immediately regenerate a new key in GHL Settings > API Keys and delete the old key. Update the key in Xano and Zapier. Rotate keys every 90 days as a best practice.

**Q: Can I sync more than just contacts (e.g., deals, pipelines)?**

A: Yes. The same HTTP API method works for any GHL resource that has an API endpoint. Common use cases: sync deal updates, apply pipeline status changes, create tasks. Refer to GHL's API documentation for available endpoints.

**Q: What's the maximum number of contacts I can sync?**

A: There's no hard limit, but API rate limits apply: GHL allows ~100 API calls per second. For bulk imports of 10,000+ contacts, use GHL's bulk import tool instead of the API (it's faster).

**Q: How do I test without affecting production data?**

A: Use test Xano tables and test GHL contact lists. Set up separate workflows for test and production. Only turn on production workflows after validation.

**Q: Can multiple Xano apps sync to the same GHL account?**

A: Yes. Each Xano app uses the same GHL API key. Tag contacts with the Xano app name (e.g., "Xano-App1," "Xano-App2") to distinguish sources.

---

## Next Steps

1. **Generate your GHL API key** (Phase 1) – 15 minutes
2. **Set up Xano workflows** (Phase 2) – 1 hour
3. **Test with Postman** (Phase 3) – 30 minutes
4. **Deploy to production** and monitor (Phase 8) – ongoing

Your leads are now flowing seamlessly between Xano and GoHighLevel. Questions? Refer to [GHL API Docs](https://docs.gohighlevel.com/reference/get-contact-by-id) or [Xano Documentation](https://xano.com/docs) for the latest updates.