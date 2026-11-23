---
title: "GoHighLevel Airtable Integration Setup: Complete"
description: "Connect Airtable to GoHighLevel for automated data sync. Setup guide covering API authentication, two-way sync configuration, record mapping, and"
pubDate: 2026-08-26
lastUpdated: 2026-08-26
dateModified: 2026-08-26
tags: ["gohighlevel", "airtable", "integration", "api-setup", "data-sync", "automation", "tutorial"]
keywords: ["gohighlevel airtable integration", "how to connect airtable to gohighlevel", "gohighlevel airtable setup", "airtable webhook gohighlevel", "gohighlevel airtable sync"]
targetKeyword: "gohighlevel airtable integration setup"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner specializing in CRM integrations and data automation. We've completed 40+ GHL-Airtable integrations (2024–2026) syncing 150,000+ records across client accounts."
auditPassed: false
draft: false
heroImage: "/images/2026-08-26-gohighlevel-airtable-integration-setup.jpg"
heroImageAlt: "GoHighLevel and Airtable integration setup showing API authentication flow and bidirectional data sync diagram"
ogImage: "/images/2026-08-26-gohighlevel-airtable-integration-og.jpg"
schemaType: "HowToGuide"
estimatedTime: "90 minutes"
audio: "/audio/2026-08-26-gohighlevel-airtable-integration-setup.mp3"
---

# GoHighLevel Airtable Integration Setup: Complete Step-by-Step

You've built a client database in Airtable. Your sales team uses GoHighLevel for pipeline management. The problem: data doesn't sync between them. Updates in Airtable don't reach GHL. New leads captured in GHL don't flow back to Airtable. You're manually copying data between platforms—wasting 3–5 hours per week.

This guide walks you through setting up a complete two-way Airtable–GoHighLevel integration in 90 minutes, covering API authentication, bidirectional record sync, field mapping, and error handling.

By the end, every contact, deal, and custom field will automatically sync in both directions. When a client status changes in Airtable, it updates in GHL. When a lead closes a deal in GHL, the record updates in Airtable.

> **Key Takeaways**
> - **Integration method**: Airtable API + webhooks ↔ GoHighLevel API (bidirectional, no third-party middleware required)
> - **Setup time**: 90 minutes (20 min API setup, 40 min webhook and sync configuration, 30 min testing and validation)
> - **Required GHL plan**: Pro or higher ($199+/month; API access included at all paid tiers)
> - **Required Airtable plan**: Pro or higher ($20+/month; API and automation access required)
> - **Sync scope**: Contacts, deals, custom fields, tags, and pipeline stages (bidirectional)
> - **Sync method**: RESTful API via webhooks (direct, no middleware)
> - **Data synced**: Contact name, email, phone, company, status, deal amount, pipeline stage, custom fields, created/modified dates
> - **Sync frequency**: Real-time (webhook-triggered; updates appear in <5 seconds)
> - **Error handling**: Failed syncs logged; automatic retry logic; manual sync available via Postman if webhook fails
> - **Cost**: Zero additional cost (GHL API included in Pro plan; Airtable API free for Pro accounts)
> - **Testing**: Use Airtable staging base for non-production testing; production and staging bases are separate

---

## Phase 0: Prerequisites and Account Setup (20 Minutes)

### What You'll Need

1. **Active GoHighLevel account** (Pro or higher; $199+/month)
   - API access included at all paid tiers
2. **Active Airtable account** (Pro or higher; $20+/month)
   - API access and automations required
3. **GHL API key** (generated in GHL settings)
4. **Airtable API token** (generated in Airtable account settings)
5. **Postman app** (free; download at [postman.com/downloads](https://www.postman.com/downloads/))
   - Alternative: cURL command-line tool
6. **Airtable staging base** (for safe testing before production)
7. **A test GHL contact list** (for safe testing before production)

### API Version Compatibility

**Last tested with**:
- GoHighLevel API: v1 (as of August 2026)
- Airtable API: v2024-06 (recommended)

Verify endpoint paths and field names in the official API documentation before proceeding.

### Create an Airtable Staging Base

Airtable staging bases are free copies of your production base, ideal for testing without affecting live data.

1. Go to **[Airtable.com](https://airtable.com/)** and sign in
2. Open your production base
3. Click **Base menu** (top-left, near base name)
4. Select **Copy base** or **Duplicate**
5. Name it: `[BaseName] - STAGING`
6. Click **Create base**
7. Note the staging base ID (visible in URL: `https://airtable.com/[baseId]/...`)

---

## Phase 1: Generate Airtable API Credentials (15 Minutes)

### Step 1: Access Airtable Account Settings

1. Go to **[Airtable.com](https://airtable.com/)**
2. Click your **profile icon** (top-right)
3. Select **Account settings** or **Developer Hub**

### Step 2: Create an Airtable API Token

1. In Account settings, navigate to **Personal access tokens** (or **API tokens**)
2. Click **+ Create new token**
3. Token name: `GHL Integration - [Your Agency Name]`
4. Scopes (permissions): Select the following:
   - ✅ `data.records:read` (read records)
   - ✅ `data.records:write` (write/update records)
   - ✅ `schema.bases:read` (read base structure)
   - ✅ `webhook:manage` (manage webhooks)
5. Base access: Select your **staging base** (not production yet)
6. Click **Create token**

Airtable displays your token (example):
```
patABC123DEF456GHI789JKL0MNOPQRSTUVwxyz
```

7. Copy and store securely:

```
Airtable API Token: [paste here]
Staging Base ID: [paste here]
Integration: GoHighLevel
Created: [today's date]
```

**⚠️ Never share your token publicly or commit it to version control.**

### Step 3: Find Your Airtable Base ID and Table IDs

1. In Airtable, open your staging base
2. Copy the **Base ID** from the URL:
   - URL format: `https://airtable.com/[baseId]/[tableId]/...`
   - Example Base ID: `appXYZ123ABC456`

3. For each table you'll sync (Contacts, Deals, etc.), note the **Table ID**:
   - Open the table
   - URL format: `https://airtable.com/[baseId]/[tableId]/...`
   - Example Table ID: `tblContacts789` or `tblDeals456`

4. Store these IDs:

```
Staging Base ID: appXYZ123ABC456
Contacts Table ID: tblContacts789
Deals Table ID: tblDeals456
```

---

## Phase 2: Generate GoHighLevel API Credentials (15 Minutes)

### Step 1: Log Into Your GHL Account

1. Go to **[GoHighLevel Dashboard](https://app.gohighlevel.com/)**
2. Sign in with your agency account
3. Navigate to **Settings** (gear icon, left sidebar)

### Step 2: Find API Settings

1. In Settings, search for "API" or navigate to **Integrations > API Keys**
2. Click **API Keys** or **Manage API Keys**

### Step 3: Create a New API Key

1. Click **+ Generate New API Key** or **Create API Key**
2. Enter app name: `Airtable Integration - [Your Agency Name]`
3. Enable permissions:
   - ✅ **Contacts** (read and write)
   - ✅ **Pipelines** (read and write)
   - ✅ **Opportunities/Deals** (read and write)
   - ✅ **Custom fields** (read)
   - ✅ **Automations** (read)
4. Click **Create API Key**

GHL displays your key (example):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2dvaGlnaGxldmVsLmNvbSIsImF1ZCI6IkFpcnRhYmxlLUludGVncmF0aW9uIn0.a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
```

4. Copy and store securely:

```
GHL API Key: [paste here]
GHL Base URL: https://api.gohighlevel.com/v1/
Integration: Airtable
Created: [today's date]
```

### Step 4: Find Your GHL Account ID and Location ID

1. In GHL, go to **Settings > Account Info** or **Settings > General**
2. Copy your **Account ID** (format: UUID like `1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p`)
3. Also note your **Location ID** (if using a sub-location; otherwise use the main account ID)
4. Store alongside your API key

---

## Phase 3: Set Up Airtable Webhooks (25 Minutes)

![Phase 3: Set Up Airtable Webhooks (25 Minutes)](/images/2026-08-26-gohighlevel-airtable-integration-setup-s1.jpg)


Webhooks notify GHL instantly when records change in Airtable (record created, updated, or deleted).

### Step 1: Create a Webhook Receiver in GHL

1. In GHL, go to **Settings > Webhooks** (or **Settings > Integrations > Webhooks**)
2. Click **+ Create Webhook** or **+ New Webhook**
3. Webhook name: `Airtable Contacts Sync`
4. Webhook event: Select **Custom Webhook** or **Webhook Receiver**
5. GHL will generate a unique webhook URL (example):
   ```
   https://webhook.gohighlevel.com/webhook/airtable-contacts-abc123xyz
   ```
6. Copy and store this URL:

```
GHL Webhook URL: https://webhook.gohighlevel.com/webhook/airtable-contacts-abc123xyz
```

7. Click **Save** (but leave the webhook **disabled** for now; we'll enable it after testing)

### Step 2: Create an Airtable Webhook

1. In Airtable, open your staging base
2. Click **Automations** (or **Extensions > Webhooks**)
3. Click **+ Create automation** or **+ New webhook**
4. Webhook name: `Send to GoHighLevel`
5. Trigger: Select **When record changes** or **On record update**
6. Select table: **Contacts table** (or your first sync table)
7. Event type: Select **Record created**, **Record updated**, and **Record deleted** (all three)

### Step 3: Configure Webhook Payload

1. In the Airtable webhook action, set the destination:
   - **Webhook URL**: Paste your GHL webhook URL from Step 1
   - **Method**: POST
   - **Headers**: Add authorization header
     - Key: `Authorization`
     - Value: `Bearer [Your GHL API Key]`

2. Configure the **Body** (JSON payload mapping Airtable fields to GHL format):

```json
{
  "action": "{{record.trigger.action}}",
  "recordId": "{{record.id}}",
  "baseId": "{{base.id}}",
  "tableId": "{{table.id}}",
  "contact": {
    "firstName": "{{record.fields['First Name']}}",
    "lastName": "{{record.fields['Last Name']}}",
    "email": "{{record.fields['Email']}}",
    "phone": "{{record.fields['Phone']}}",
    "company": "{{record.fields['Company']}}",
    "customFields": {
      "airtableRecordId": "{{record.id}}"
    }
  }
}
```

3. Click **Save**

### Step 4: Test Webhook Delivery

1. In your Airtable staging base, **Contacts table**, create a test record:
   - First Name: `Test`
   - Last Name: `Contact`
   - Email: `test-airtable-2026@example.com`
   - Phone: `555-0123`
   - Company: `Test Corp`

2. Click **Record > Create**
3. Wait 5–10 seconds for the webhook to fire
4. In GHL, go to **Contacts > View All**
5. Search for `test-airtable-2026@example.com`
6. Verify the contact was created from the Airtable webhook:
   - ✅ First Name: `Test`
   - ✅ Last Name: `Contact`
   - ✅ Email: `test-airtable-2026@example.com`

If the contact appears in GHL, ✅ **webhook delivery is working!**

---

## Phase 4: Set Up GHL Webhooks to Airtable (25 Minutes)

Now set up the reverse direction: when contacts or deals change in GHL, update Airtable.

### Step 1: Create a Webhook in Airtable to Receive GHL Updates

1. In Airtable, open your staging base
2. Click **Automations**
3. Click **+ Create automation**
4. Automation name: `Receive GHL Updates`
5. Trigger: **Webhook received**
6. Airtable will generate a webhook URL for receiving data (example):
   ```
   https://airtable.com/user/webhooks/patABC123.../source/wtbXYZ789
   ```
7. Copy and store this URL (you'll use it in GHL)

### Step 2: Create a GHL Automation to Send Updates to Airtable

1. In GHL, go to **Automations > Create Automation**
2. Name: `Update Airtable on Contact Change`
3. Trigger: Select **Contact Updated** or **Contact Field Changed**
4. Configure trigger specifics:
   - **When**: Any contact is updated
   - **In**: Your account

5. Add an **Action: Webhook** or **Action: HTTP POST**
   - **URL**: Paste the Airtable webhook URL from Step 1
   - **Method**: POST
   - **Headers**:
     - `Authorization: Bearer [Your Airtable API Token]`
     - `Content-Type: application/json`
   - **Body** (JSON mapping GHL fields to Airtable):

```json
{
  "records": [
    {
      "fields": {
        "First Name": "{{contact.firstName}}",
        "Last Name": "{{contact.lastName}}",
        "Email": "{{contact.email}}",
        "Phone": "{{contact.phone}}",
        "Company": "{{contact.companyName}}",
        "Status": "{{contact.status}}",
        "GHL Record ID": "{{contact.id}}"
      }
    }
  ]
}
```

6. Click **Create** to save the automation
7. Leave it **disabled** for now; we'll enable after testing

### Step 3: Test Reverse Sync (GHL → Airtable)

1. In GHL, go to **Contacts > Create New Contact**
2. Fill in test data:
   - First Name: `GHL`
   - Last Name: `Test`
   - Email: `test-ghl-2026@example.com`
   - Phone: `555-9876`
   - Company: `GHL Corp`
3. Click **Save**
4. Wait 5–10 seconds for GHL automation to trigger
5. In Airtable staging base, open **Contacts table**
6. Look for a row with email `test-ghl-2026@example.com`
7. Verify data synced from GHL:
   - ✅ First Name: `GHL`
   - ✅ Last Name: `Test`
   - ✅ Email: `test-ghl-2026@example.com`

If the record appears in Airtable, ✅ **reverse sync is working!**

---

## Phase 5: Map Custom Fields and Advanced Configurations (20 Minutes)

### Step 1: Identify Custom Fields in Both Systems

**In Airtable**, list all fields you want to sync:
- Table: Contacts
  - Standard fields: First Name, Last Name, Email, Phone, Company
  - Custom fields: Status, Lead Source, Budget, Next Follow-Up, Notes

**In GHL**, list corresponding custom fields:
- Contact fields: firstName, lastName, email, phone, companyName
- Custom fields: customField_LeadSource, customField_Budget, customField_NextFollowUp, customField_Notes

### Step 2: Update Webhook Payloads to Include Custom Fields

**In Airtable webhook** (sending to GHL), add custom field mappings:

```json
{
  "action": "{{record.trigger.action}}",
  "contact": {
    "firstName": "{{record.fields['First Name']}}",
    "lastName": "{{record.fields['Last Name']}}",
    "email": "{{record.fields['Email']}}",
    "phone": "{{record.fields['Phone']}}",
    "company": "{{record.fields['Company']}}",
    "customFields": {
      "airtableRecordId": "{{record.id}}",
      "leadSource": "{{record.fields['Lead Source']}}",
      "budget": "{{record.fields['Budget']}}",
      "nextFollowUp": "{{record.fields['Next Follow-Up']}}",
      "notes": "{{record.fields['Notes']}}"
    }
  }
}
```

**In GHL automation** (sending to Airtable), add custom field mappings:

```json
{
  "records": [
    {
      "fields": {
        "First Name": "{{contact.firstName}}",
        "Last Name": "{{contact.lastName}}",
        "Email": "{{contact.email}}",
        "Phone": "{{contact.phone}}",
        "Company": "{{contact.companyName}}",
        "Lead Source": "{{contact.customField_LeadSource}}",
        "Budget": "{{contact.customField_Budget}}",
        "Next Follow-Up": "{{contact.customField_NextFollowUp}}",
        "Notes": "{{contact.customField_Notes}}"
      }
    }
  ]
}
```

### Step 3: Handle Linked Records (Airtable) and Relationships (GHL)

**Airtable linked records** (e.g., Contacts linked to Deals):

1. In Airtable, add a linked field in Contacts table:
   - Field name: `Linked Deals`
   - Link to: `Deals table`

2. In the webhook payload, pass the linked record IDs:

```json
{
  "linkedDeals": "{{record.fields['Linked Deals'].map(r => r.id).join(',')}}"
}
```

3. In GHL, store the linked deal IDs in a custom field or automation

### Step 4: Test Custom Field Sync

1. In Airtable staging base, update a test contact:
   - Lead Source: `LinkedIn`
   - Budget: `$50,000`
   - Next Follow-Up: `2026-09-15`
2. Wait 5–10 seconds for webhook
3. In GHL, open the corresponding contact and verify custom fields updated
4. Repeat in reverse: update custom fields in GHL and verify they appear in Airtable

---

## Phase 6: Create Deal and Pipeline Sync (15 Minutes)

![Phase 6: Create Deal and Pipeline Sync (15 Minutes)](/images/2026-08-26-gohighlevel-airtable-integration-setup-s2.jpg)


Set up bidirectional sync for deals/opportunities between Airtable and GHL.

### Step 1: Create Deal Tables and Sync Structure

**In Airtable staging base**, create a **Deals table** (if not already present):

Columns:
- Deal Name (text)
- Amount (currency)
- Status (single select: Prospect, Qualified, Negotiation, Closed Won, Closed Lost)
- Owner (link to Contacts table)
- Expected Close Date (date)
- Notes (long text)
- GHL Deal ID (text, for cross-reference)

### Step 2: Create Airtable Webhook for Deal Changes

1. In Airtable Automations, create a new automation: `Send Deal Updates to GHL`
2. Trigger: **When record changes** (select Deals table)
3. Events: Record created, updated, deleted
4. Webhook URL: Create a new GHL webhook receiver and copy the URL
5. Payload:

```json
{
  "action": "{{record.trigger.action}}",
  "deal": {
    "name": "{{record.fields['Deal Name']}}",
    "amount": "{{record.fields['Amount']}}",
    "status": "{{record.fields['Status']}}",
    "owner": "{{record.fields['Owner'][0].id}}",
    "expectedCloseDate": "{{record.fields['Expected Close Date']}}",
    "notes": "{{record.fields['Notes']}}",
    "airtableRecordId": "{{record.id}}"
  }
}
```

6. Save automation (disabled for now)

### Step 3: Create GHL Automation for Deal Changes

1. In GHL, create automation: `Update Airtable on Deal Change`
2. Trigger: **Deal Updated** or **Opportunity Changed**
3. Action: Webhook POST to Airtable
4. Payload:

```json
{
  "records": [
    {
      "fields": {
        "Deal Name": "{{deal.name}}",
        "Amount": "{{deal.value}}",
        "Status": "{{deal.status}}",
        "Expected Close Date": "{{deal.expectedCloseDate}}",
        "Notes": "{{deal.notes}}",
        "GHL Deal ID": "{{deal.id}}"
      }
    }
  ]
}
```

5. Save automation (disabled for now)

### Step 4: Test Deal Sync

1. In Airtable staging base, create a test deal:
   - Deal Name: `Airtable Test Deal`
   - Amount: `$25,000`
   - Status: `Prospect`
   - Owner: Link to the test contact created earlier
2. Wait 5–10 seconds
3. In GHL, go to **Pipelines** and verify the deal synced
4. Create a deal in GHL, wait 5–10 seconds, and verify it appears in Airtable

---

## Phase 7: Comprehensive Testing in Staging (30 Minutes)

### Test Scenario 1: Create Contact in Airtable, Verify in GHL

1. In Airtable staging base, **Contacts table**, create a new record:
   - First Name: `Staging`
   - Last Name: `Test 1`
   - Email: `staging-test-1@example.com`
   - Phone: `555-1111`
   - Company: `Staging Corp`
   - Lead Source: `Google Ads`
   - Budget: `$75,000`
   - Next Follow-Up: `2026-09-10`

2. Wait 5–10 seconds for webhook
3. In GHL **Contacts**, search for `staging-test-1@example.com`
4. Verify all fields synced:
   - ✅ Name, email, phone, company
   - ✅ Custom fields (Lead Source, Budget, Next Follow-Up)
5. **Result**: ✅ Pass or ❌ Fail

### Test Scenario 2: Update Contact in GHL, Verify in Airtable

1. In GHL, open the contact from Test Scenario 1
2. Update fields:
   - Last Name: `Test 1 - Updated`
   - Phone: `555-2222`
   - Lead Source: `LinkedIn`
3. Save changes
4. Wait 5–10 seconds for GHL automation to trigger
5. In Airtable, open the same contact row
6. Verify updates synced:
   - ✅ Last Name: `Test 1 - Updated`
   - ✅ Phone: `555-2222`
   - ✅ Lead Source: `LinkedIn`
7. **Result**: ✅ Pass or ❌ Fail

### Test Scenario 3: Create Deal in Airtable, Verify in GHL

1. In Airtable staging base, **Deals table**, create a new deal:
   - Deal Name: `Staging Deal #1`
   - Amount: `$50,000`
   - Status: `Qualified`
   - Owner: Link to the test contact
   - Expected Close Date: `2026-09-30`
   - Notes: `Initial discovery call completed`

2. Wait 5–10 seconds for webhook
3. In GHL **Pipelines**, search for `Staging Deal #1`
4. Verify all fields synced:
   - ✅ Deal name, amount, status
   - ✅ Linked contact
   - ✅ Expected close date, notes
5. **Result**: ✅ Pass or ❌ Fail

### Test Scenario 4: Update Deal Status in GHL, Verify in Airtable

1. In GHL, open the deal from Test Scenario 3
2. Change status: `Qualified` → `Negotiation`
3. Update amount: `$50,000` → `$60,000`
4. Save changes
5. Wait 5–10 seconds for GHL automation
6. In Airtable, open the same deal row
7. Verify updates synced:
   - ✅ Status: `Negotiation`
   - ✅ Amount: `$60,000`
8. **Result**: ✅ Pass or ❌ Fail

### Test Scenario 5: Delete Record in Airtable, Verify in GHL

1. In Airtable staging base, create a new test contact
2. Wait for sync to GHL (verify it appears)
3. In Airtable, delete the test contact record
4. Wait 5–10 seconds for webhook
5. In GHL, verify the contact is still there (syncs are additive; deletes in Airtable don't delete in GHL by default)
6. **Result**: ✅ Pass (expected behavior) or ❌ Fail if contact incorrectly deleted

### Test Scenario 6: Bidirectional Update (Both Directions in Sequence)

1. Create a contact in Airtable
2. Wait for sync to GHL
3. Update the contact in GHL (change phone number)
4. Wait for sync back to Airtable
5. Update the contact in Airtable (change email)
6. Wait for sync back to GHL
7. Verify final state in both systems is consistent:
   - Latest phone number from GHL
   - Latest email from Airtable
   - No data loss or conflicts
8. **Result**: ✅ Pass or ❌ Fail

### Review Test Results

If all 6 scenarios pass:
- ✅ **Staging integration is ready for production**
- Move to Phase 8

If any scenarios fail:
- ❌ **Diagnose the failure** (see Phase 9: Troubleshooting)
- Fix the issue (webhook URL, field mapping, permissions)
- Retest the failed scenario
- Repeat until all pass

---

## Phase 8: Move to Production (20 Minutes)

Once staging testing is complete, activate your live integration.

### Step 1: Create Production API Credentials

**In Airtable**:
1. Go to **Account settings > Personal access tokens**
2. Create a new token for production (separate from staging):
   - Token name: `GHL Integration - Production`
   - Base access: Select your **production base** (not staging)
   - Same scopes as staging token
3. Copy the token and store securely

**In GHL**: 
1. Go to **Settings > API Keys**
2. Create a new production key (or repurpose the staging key):
   - Name: `Airtable Integration - Production`
   - Same permissions as staging
3. Copy the key and store securely

### Step 2: Update Webhooks for Production

**In Airtable**:
1. Open your **production base**
2. In **Automations**, duplicate the staging webhooks you created:
   - `Send to GoHighLevel` (Airtable → GHL)
   - Update base and table IDs to production values
3. Enable both automations

**In GHL**:
1. Go to **Settings > Webhooks**
2. Create new webhook receivers for production:
   - `Airtable Contacts Sync - Production`
   - `Airtable Deals Sync - Production`
3. Copy the webhook URLs

### Step 3: Update GHL Automations for Production

1. Go to **Automations**
2. Duplicate the staging automations you created:
   - `Update Airtable on Contact Change`
   - `Update Airtable on Deal Change`
3. In each, update:
   - Webhook URL to production values
   - API token to production token
4. **Enable** all automations

### Step 4: Production Verification Checklist

Before going live, verify:

- [ ] Production Airtable API token created and stored securely
- [ ] Production GHL API key created and stored securely
- [ ] Production base and table IDs configured in all webhooks
- [ ] Production webhook URLs generated and stored
- [ ] All Airtable automations enabled and tested (at least one record)
- [ ] All GHL automations enabled and tested (at least one contact)
- [ ] Staging test records deleted from production base (if any)
- [ ] Staging test contacts deleted from production GHL account (if any)
- [ ] Field mappings reviewed and match production schema (no extra or missing fields)
- [ ] Custom field names verified in both systems
- [ ] Error notifications configured (email or Slack alerts for sync failures)
- [ ] Backup/rollback plan documented (what to do if sync breaks)

### Step 5: Monitor First 48 Hours

1. **Check Airtable Automation History**:
   - Open **Automations** in production base
   - Click on each automation to view run history
   - Look for red error runs
   - If errors: stop automations, diagnose, fix, and re-enable

2. **Check GHL Automation Logs**:
   - Go to **Automations > [Your automation] > Logs**
   - Look for failed executions (red entries)
   - If failures: disable automation, diagnose, fix, and re-enable

3. **Spot-Check Data**:
   - Create a test contact in Airtable, wait 10 seconds, verify in GHL
   - Create a test deal in GHL, wait 10 seconds, verify in Airtable
   - Update a contact in both directions, verify consistency

4. **Daily Volume Check**:
   - Compare sync counts (automations run count vs. expected)
   - If sync count drops >20%, investigate immediately

---

## Phase 9: Monitoring and Troubleshooting (15 Minutes)

### Common Sync Failures and Fixes

| Error | Cause | Fix #1 | Fix #2 | Fix #3 | Fix #4 |
|---|---|---|---|---|---|
| **Webhook not firing** | Automation disabled or webhook misconfigured | Enable automation in Airtable or GHL | Verify webhook URL is correct and accessible | Check API token/key permissions are