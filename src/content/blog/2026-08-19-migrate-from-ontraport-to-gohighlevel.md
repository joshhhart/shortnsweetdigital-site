---
title: "Migrate from Ontraport to GoHighLevel: Step-by-Step"
description: "Move your contacts, automations, and workflows from Ontraport to GoHighLevel in 4 hours. Complete migration checklist for agencies."
pubDate: 2026-08-19
lastUpdated: 2026-08-19
dateModified: 2026-08-19
tags: ["gohighlevel", "ontraport", "migration", "data-migration", "crm-switch", "agency-tools", "automation", "tutorial"]
keywords: ["ontraport to gohighlevel migration", "how to migrate from ontraport to gohighlevel", "migrate ontraport data to gohighlevel", "ontraport vs gohighlevel", "switch from ontraport to gohighlevel"]
targetKeyword: "migrate from ontraport to gohighlevel"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner with 25+ completed Ontraport-to-GHL migrations (2024–2026). We've moved 5K–100K+ contact databases, rebuilt custom automations, and trained teams on GHL workflows. View our [migration case studies](https://shortnsweet.digital/migrations) or [connect on LinkedIn](https://linkedin.com/company/short-n-sweet-digital)."
auditPassed: false
draft: false
heroImage: "/images/2026-08-19-migrate-from-ontraport-to-gohighlevel.jpg"
heroImageAlt: "Side-by-side comparison of Ontraport and GoHighLevel dashboards with migration arrows showing data flow from Ontraport to GHL"
ogImage: "/images/2026-08-19-migrate-ontraport-gohighlevel-og.jpg"
schemaType: "HowToGuide"
estimatedTime: "4 hours"
audio: "/audio/2026-08-19-migrate-from-ontraport-to-gohighlevel.mp3"
---

# Migrate from Ontraport to GoHighLevel: Step-by-Step

> **AFFILIATE DISCLOSURE**
>
> Short n Sweet Digital is a GoHighLevel white-label implementation partner. We earn referral commissions when readers sign up for GoHighLevel via the affiliate link in this post (https://www.gohighlevel.com/?fp_ref=shortnsweet53). We disclose this upfront so you can evaluate this guide with full transparency. The migration steps and technical details reflect hands-on experience across 25+ agency deployments; they are not influenced by our commission structure. **Verify all steps with GoHighLevel and Ontraport's current documentation before migrating production data.**

---

You're running campaigns in Ontraport. Your contact list is growing, your automations are complex, but Ontraport's pricing keeps climbing and the interface feels slow. You've heard GoHighLevel is faster, cheaper, and purpose-built for agencies.

But the migration feels overwhelming: How do you export 50,000 contacts without losing data? How do you rebuild your email sequences? Which settings transfer automatically?

This guide walks you through a complete Ontraport-to-GHL migration in 4 hours, with a pre-migration checklist, step-by-step data export, automation rebuild, and post-migration validation.

> **Key Takeaways**
> - **Estimated time**: 4 hours (2 hours prep + data export, 1.5 hours automation rebuild, 0.5 hours testing and validation)
> - **What transfers**: Contacts (with custom fields), email lists, and basic campaign structure. Ontraport-specific features (scoring, custom fields with special logic) require manual mapping in GHL.
> - **What doesn't transfer**: Ontraport's legacy "Score" field (GHL uses Tags instead), custom object relationships, advanced conditional logic beyond GHL's native automation builder, and third-party integrations (you'll reconnect these in GHL).
> - **Data export method**: Ontraport CSV export → Google Sheets (for validation) → GHL bulk import. No direct integration exists; CSV is the standard bridge.
> - **Cost savings**: Ontraport's $99–$399/month → GHL Pro $199/month (50% cheaper on average). If you're on Ontraport's $399 Unlimited plan, GHL Unlimited is $495 (similar cost, but with white-label and more integrations included).
> - **Go-live decision**: Run parallel systems for 1–2 weeks (send new campaigns in GHL, keep Ontraport running for existing automations to finish). Then sunset Ontraport after validation.
> - **Rollback plan**: Keep Ontraport data backed up for 30 days post-migration. If something breaks, you have a 30-day window to recover and retry before canceling Ontraport.

---

## Phase 0: Pre-Migration Assessment (30 Minutes)

Before touching any data, audit what you're migrating and what will change.

### Step 1: Inventory Your Ontraport Setup

In Ontraport, open a spreadsheet and document:

| Item | Count | Notes |
|------|-------|-------|
| **Contacts** | [#] | Total contacts in all lists (Contacts > View All) |
| **Email lists** | [#] | Named lists (Campaigns > Segments) |
| **Email sequences** | [#] | Active and paused automations/email sequences |
| **Landing pages** | [#] | Ontraport-hosted or third-party |
| **SMS campaigns** | [#] | If using Ontraport SMS |
| **Custom fields** | [#] | Example: FirstName, Company, Industry, Score |
| **Tags** | [#] | Example: Customer, Lead, VIP, Trial |
| **Integrations** | [#] | Zapier, Stripe, PayPal, Calendly, etc. |
| **Forms** | [#] | Web forms embedded on your site |
| **Rule-based automations** | [#] | Complex conditional workflows |

**Example inventory** (small agency):
```
Contacts:          12,500
Email lists:       8 (Newsletter, Leads, Customers, VIP, Trial, Inactive, Webinar, Event)
Email sequences:   15 (Welcome series, nurture, re-engagement, upsell, post-purchase)
Landing pages:     3 (Lead magnet, webinar signup, sales page)
SMS campaigns:     2
Custom fields:     12 (FirstName, LastName, Company, Industry, Phone, Score, LeadSource)
Tags:              25
Integrations:      5 (Zapier, Stripe, Calendly, Google Sheets, Typeform)
Forms:             4 (Website sidebar, landing page, webinar signup, survey)
Rule-based automations: 8
```

### Step 2: Identify Must-Transfer Data

Not everything needs to move immediately. Prioritize:

**Critical (move first)**:
- ✅ Active contacts (12,500 in example above)
- ✅ Active email sequences (15)
- ✅ Email lists (8)
- ✅ Custom fields (12)
- ✅ High-value tags (VIP, Customer, Lead)

**Optional (move later or skip)**:
- ⚠️ Inactive contacts (pause 6+ months) – consider archiving in Ontraport instead
- ⚠️ Completed sequences (historical, no longer active) – export but don't import
- ⚠️ Ontraport-specific scores – convert to GHL Tags (VIP tier 1, tier 2, etc.)
- ⚠️ Legacy integrations (if Ontraport-specific) – disable, then reconnect in GHL

### Step 3: Review Ontraport Custom Fields

Custom fields are the backbone of CRM data. Identify which ones you need:

**In Ontraport**: Contacts > Fields > Manage Fields

Document each custom field:

| Field Name | Field Type | Required? | Mapping to GHL |
|---|---|---|---|
| Company | Text | Yes | Custom field (same name) |
| Industry | Dropdown | No | Custom field (dropdown) |
| LeadSource | Dropdown | Yes | Tag or custom field |
| Score | Number | Yes | GHL Tags (VIP, High, Medium, Low) |
| LastPurchaseDate | Date | No | Custom field (date) |

**Note**: Ontraport's "Score" field has no direct equivalent in GHL. You'll convert scores to Tags:
- Score 90–100 → Tag "VIP"
- Score 70–89 → Tag "High-Intent"
- Score 50–69 → Tag "Medium-Intent"
- Score <50 → Tag "Low-Intent"

### Step 4: List Email Sequences to Rebuild

In Ontraport, open each sequence and document:

| Sequence Name | # Emails | Trigger | Conditional Logic | Priority |
|---|---|---|---|---|
| Welcome Series | 5 | New contact | None | High (rebuild first) |
| Nurture 30-Day | 10 | After welcome | Click tracking, tag-based branching | High |
| Abandoned Cart | 3 | Ecommerce trigger | Purchase price > $X | Medium |
| Re-engagement | 4 | No open 60 days | Tag-based condition | Medium |

GHL's automation builder is different from Ontraport's. Most sequences rebuild 1:1, but advanced conditional logic may need simplification.

### Step 5: Verify Data Integrity in Ontraport

Before exporting, audit your Ontraport data for quality:

1. **Check for duplicates**: Contacts > Tools > Find Duplicates. Merge or flag duplicates before export.
2. **Verify custom field data**: Open 10–20 random contacts. Confirm custom fields are populated (not blank).
3. **Review email list membership**: Contacts > Segments. Verify counts match expected list sizes.
4. **Test a sequence**: Send a test email to yourself. Confirm deliverability.

---

## Phase 1: Data Export from Ontraport (1 Hour)

### Step 1: Export Contacts as CSV

1. In Ontraport, go to **Contacts > View All**
2. Apply filters if needed (e.g., exclude inactive contacts):
   - Click **Filters** > Add filter: **Status = Active** (if using status field)
   - Or: **LastActivity > 6 months ago = No** (to exclude truly inactive)
3. Click **Select All** (or select the checkbox to select all contacts in the view)
4. Click **Export** (usually a dropdown or menu option)
5. Select **CSV** as the export format
6. GHL will prepare a download; click **Download**
7. Save the file as `ontraport-contacts-export-2026-08-19.csv`

**CSV columns you'll see** (example):

```
FirstName, LastName, Email, Company, Phone, Industry, LeadSource, Score, CustomField1, Tags, DateCreated, LastActivity
John, Doe, john@example.com, Acme Corp, 555-123-4567, Tech, Webinar, 85, Value1, Customer;VIP, 2025-01-15, 2026-08-18
Jane, Smith, jane@example.com, Tech Inc, 555-234-5678, Tech, Organic, 72, Value2, Lead, 2025-03-20, 2026-08-15
```

### Step 2: Export Email Lists (Segments)

In Ontraport, each email list (segment) is a saved filter. Export separately:

1. Go to **Campaigns > Segments**
2. For each segment:
   - Click the segment name
   - Click **Export** > **CSV**
   - Save as `ontraport-segment-[SegmentName]-2026-08-19.csv`
3. Repeat for all 8 segments (in the example above)

**Why export segments separately?** GHL's list import requires segment/list names. Exporting separately helps you map Ontraport segments to GHL lists during import.

### Step 3: Export Email Sequences

Ontraport's "campaigns" (email sequences) don't export as CSV. Instead:

1. Go to **Campaigns > Emails**
2. For each active email sequence:
   - Click the sequence name
   - **For each email in the sequence**:
     - Click the email subject
     - Click **Edit**
     - Copy the email body (Ctrl+A, Ctrl+C)
     - Paste into a Google Doc or Notion page titled `[SequenceName] - Email Rebuild`
     - Include: Subject line, body copy, call-to-action URL, attachments, send delay/conditions
3. Save the Google Doc / Notion page with all sequence details

**Example document structure**:

```
# Welcome Series - Export

## Email 1: Welcome
Subject: Welcome to [Company]! 🎉
Send Delay: Immediate (on signup)
Body:
Hi [FirstName],

Thanks for joining us. This is your first email...

[CTA: Get Started → https://example.com/start]

---

## Email 2: [Name]

![Email 2: [Name]](/images/2026-08-19-migrate-from-ontraport-to-gohighlevel-s1.jpg)

Subject: ...
Send Delay: 1 day after email 1 open
Body:
...
```

**Why manual export?** Ontraport's email automation is tightly coupled to the UI. GHL's automation builder works differently, so you'll rebuild sequences step-by-step in GHL's visual editor (Phase 3).

### Step 4: Export Integrations and Zaps

Document your active integrations:

1. In Ontraport, go to **Settings > Integrations** (or **Zapier** if Zapier is your integration platform)
2. Screenshot or list:
   - Integration name (e.g., "Stripe → Ontraport")
   - Trigger (e.g., "Payment received in Stripe")
   - Action (e.g., "Add tag 'Customer' in Ontraport")
   - Status (active/paused)

3. If using Zapier:
   - Go to [Zapier.com](https://zapier.com)
   - Open each Zap connected to Ontraport
   - Screenshot the trigger and action steps
   - Note the Zap name and status
   - **Do NOT delete Zaps yet** – you'll update them in Phase 4

---

## Phase 2: Data Validation and Preparation (30 Minutes)

### Step 1: Import CSV into Google Sheets (Validation Check)

Before importing into GHL, validate your Ontraport export in Google Sheets:

1. Open [Google Sheets](https://sheets.google.com)
2. Click **New > Spreadsheet**
3. Click **File > Import > Upload**
4. Upload `ontraport-contacts-export-2026-08-19.csv`
5. Click **Import data**

### Step 2: Audit Data Quality

In Google Sheets, check for:

| Issue | How to Spot | Fix |
|-------|-------------|-----|
| **Empty email cells** | Filter column Email = blank | Delete rows with blank emails (they won't import into GHL) |
| **Duplicate emails** | Use Data > Data validation > Unique | Merge duplicates or flag for manual review |
| **Malformed phone numbers** | Phone column has mixed formats | Standardize to format: +1-555-123-4567 (optional – GHL handles formats) |
| **Blank custom fields** | Custom field column is empty for many rows | This is OK – GHL allows blank custom fields. But if every row is blank, the field wasn't exported correctly; re-export from Ontraport. |
| **Special characters in text fields** | Look for non-ASCII characters (é, ñ, etc.) | GHL handles UTF-8; should be fine. But save CSV as UTF-8 (not ASCII) to avoid corruption. |

### Step 3: Clean Up Data

Delete rows that won't import:

1. In Google Sheets, delete rows where **Email is blank** (GHL requires an email for each contact)
2. Optionally, delete **inactive contacts** (if you documented them as "optional" in Phase 0, Step 2)
3. In the **Score column**, replace numeric scores with GHL Tag equivalents:
   - Open Find & Replace (Ctrl+H)
   - Find: `^[89]\d$|^90[0-9]?$` (regex for scores 80–100)
   - Replace: `VIP`
   - Repeat for other score ranges (70–79 → "High-Intent", etc.)

### Step 4: Add Required Columns for GHL Import

GHL's bulk import expects certain columns. Add if missing:

1. Add a column: **Status** (value: "Active" for all rows, or "Paused" if desired)
2. Add a column: **List** (value: the list name the contact belongs to, e.g., "Newsletter", "Leads", "Customers")
3. Ensure **Email** column exists and is not blank
4. Ensure **Phone** (optional) is present if you have phone numbers

**Final Google Sheets structure** (example):

```
FirstName | LastName | Email | Company | Phone | Status | List | Tags | CustomField1
John      | Doe      | john@ | Acme    | 555-  | Active | Customers | VIP | Value1
Jane      | Smith    | jane@ | Tech    | 555-  | Active | Leads | High-Intent | Value2
```

### Step 5: Export Clean Data as CSV

1. In Google Sheets, click **File > Download > Comma-Separated Values (.csv)**
2. Save as `ontraport-contacts-clean-2026-08-19.csv`
3. This is the file you'll import into GHL in Phase 2, Step 6

---

## Phase 3: Setup GoHighLevel Account (30 Minutes)

### Step 1: Create or Log Into Your GHL Account

1. Go to [GoHighLevel](https://www.gohighlevel.com/?fp_ref=shortnsweet53)
2. If new: Sign up for **Pro** or **Unlimited** plan (Pro recommended for first migration; $199/month)
3. If existing: Log into your main agency account (not a white-label sub-account)

### Step 2: Navigate to Contacts and Create Lists

1. In GHL, click **Contacts > Lists**
2. For each list from your Ontraport export (Customers, Leads, Newsletter, etc.):
   - Click **+ New List**
   - Enter list name (match your Ontraport segment names for clarity)
   - Click **Create**
3. Repeat for all lists (you created these manually in Phase 1, Step 2)

**Example lists created**:
- Customers
- Leads
- Newsletter
- VIP
- Trial
- Webinar
- Event
- Re-engagement

### Step 3: Map Custom Fields

Before importing, tell GHL which custom fields to create:

1. In GHL, click **Settings > Custom Fields**
2. For each custom field from Ontraport (Company, Industry, LeadSource, etc.):
   - Click **+ Add Custom Field**
   - Enter field name (match Ontraport name exactly)
   - Select field type:
     - Text → "Text"
     - Dropdown/Select → "Select" (add options matching Ontraport values)
     - Date → "Date"
     - Number → "Number"
   - Click **Save**
3. Repeat for all custom fields

**Example custom fields created**:
- Company (Text)
- Industry (Select: Tech, Finance, Healthcare, Retail, Other)
- LeadSource (Select: Organic, Webinar, Paid Ad, Partner, Event, Direct)
- LastPurchaseDate (Date)

### Step 4: Verify Email Provider Configuration

GHL needs to know which email provider to use for campaigns. Verify:

1. Click **Settings > Email**
2. Check if you have a connected email provider (Gmail, custom SMTP, GHL's native email)
3. If none: Connect your email address (Gmail recommended for new accounts)
   - Click **+ Add Email**
   - Select **Gmail**
   - Follow OAuth flow to connect
   - Verify it shows as "Connected"

### Step 5: Create or Verify User Roles and Permissions

If you have a team helping with migration:

1. Click **Settings > Team**
2. For each team member:
   - Click **+ Add User**
   - Enter email
   - Set role: **Admin** (if managing settings), **Agency** (if managing clients only), or **Custom**
   - Click **Add**

---

## Phase 4: Import Contacts into GHL (45 Minutes)

![Phase 4: Import Contacts into GHL (45 Minutes)](/images/2026-08-19-migrate-from-ontraport-to-gohighlevel-s2.jpg)


### Step 1: Start Bulk Import

1. In GHL, click **Contacts > Import**
2. You'll see an import wizard with options:
   - Upload CSV file
   - Map columns
   - Select destination list

### Step 2: Upload Your CSV File

1. Click **Choose File** or **Drag & Drop**
2. Select `ontraport-contacts-clean-2026-08-19.csv` (from Phase 2, Step 5)
3. Click **Upload** or **Next**

GHL will preview the first 10 rows. You should see:
- FirstName, LastName, Email, Company, Phone, Status, List, Tags, CustomField1 columns
- Sample contact data rows

### Step 3: Map Columns

GHL will ask you to map CSV columns to GHL fields:

| CSV Column | GHL Field | Match |
|---|---|---|
| FirstName | First Name | ✅ Auto-matched |
| LastName | Last Name | ✅ Auto-matched |
| Email | Email | ✅ Auto-matched |
| Company | Custom Field: Company | ✅ Match to custom field (or skip) |
| Phone | Phone | ✅ Auto-matched |
| Status | Status | ✅ Match to "Active" / "Paused" |
| List | List / Segment | ✅ Select list to import to |
| Tags | Tags | ✅ Auto-matched |
| CustomField1 | Custom Field: CustomField1 | ✅ Match (or skip) |

**GHL will auto-match most columns**. Review the mapping and adjust if needed:
- Drag columns to reorder
- Click column header to change the GHL field it maps to
- Uncheck columns you don't want to import

### Step 4: Select Import Settings

1. **Choose destination list**: Select the primary list (e.g., "All Customers"). Or select "Map from CSV" if your CSV has a "List" column that specifies per-contact list assignment.
2. **Duplicate handling**: Choose **Skip duplicates** (if email exists in GHL, don't re-import) or **Update existing** (overwrite if email exists)
3. **Consent**: If you have a GDPR/consent column, map it. Otherwise, GHL will mark all imported contacts as opted-in by default.

### Step 5: Review and Confirm

1. Review the import summary:
   - Total rows: [12,500]
   - Contacts to be created: [12,500]
   - Lists: [Customers, Leads, Newsletter, …]
2. Click **Import** or **Start Import**

GHL will process the import in the background. You'll see a progress bar. For 12,500 contacts, import typically takes 5–15 minutes.

### Step 6: Verify Import Completion

1. Once import finishes, click **View Results**
2. GHL shows:
   - ✅ [12,500] contacts imported successfully
   - ⚠️ [50] contacts skipped (duplicates or invalid emails)
   - ❌ [0] contacts failed

3. Navigate to **Contacts > View All** to spot-check:
   - Open 5–10 random contacts
   - Verify: First/last name, email, company, custom fields, tags all populated
   - Confirm contacts appear in the correct lists (click a list name to see members)

If all looks good, your contact data is in GHL. If import failed or is significantly lower than expected, troubleshoot:
- Re-check CSV formatting (no extra spaces, proper encoding)
- Verify email column has no blank cells
- Check column mapping (did you map "List" correctly?)

---

## Phase 5: Rebuild Email Sequences (1.5 Hours)

Now rebuild your Ontraport sequences in GHL's automation builder.

### Step 1: Understand GHL's Automation vs. Ontraport's

| Feature | Ontraport | GHL | Rebuild Approach |
|---------|-----------|-----|---|
| **Email sequences** | "Campaigns" (date-based or trigger-based) | "Automations" (trigger-based workflows) | Rebuild in GHL automation builder (visual editor) |
| **Conditions** | IF/THEN branching (advanced) | IF/THEN branching (simplified but effective) | Most sequences rebuild 1:1; complex logic may simplify |
| **Time delays** | Wait X days or specific date/time | Wait X hours/days/weeks | Rebuild wait steps in GHL |
| **Tags/scoring** | Score-based branching | Tag-based branching | Convert Ontraport scores to GHL tags in conditions |
| **Email templates** | Saved email designs | Email builder (drag-drop) | Rebuild emails in GHL's email designer; copy body from Google Doc |

### Step 2: Start with Your First Sequence (Welcome Series)

Open your "Welcome Series" Google Doc (from Phase 1, Step 3).

1. In GHL, click **Automations > New Automation**
2. Name the automation: "Welcome Series"
3. Set the trigger:
   - Click **+ Add Trigger**
   - Select **Contact** > **New Contact** (for new signups)
   - Or select **Contact > Tagged** if your Ontraport sequence was tag-based
   - Click **Add**

### Step 3: Add First Email

1. In the automation canvas, click **+ Add Action**
2. Select **Send Email**
3. Click **Create Email** (if you don't have a template):
   - **Subject**: Copy from your Google Doc (e.g., "Welcome to [Company]! 🎉")
   - **Body**: Copy from your Google Doc
   - **CTA button**: Add if present in original
   - Click **Save Email**
4. Back in automation, the email is now added to the workflow

### Step 4: Add Time Delay for Second Email

1. Below the first email, click **+ Add Action**
2. Select **Wait** (or **Delay**)
3. Set the delay:
   - **Value**: 1 (from your Google Doc: "1 day after email 1 open")
   - **Unit**: Days
   - **Condition** (optional): If original was "1 day after email 1 opens", set condition to "Email opened"
4. Click **Add**

### Step 5: Add Second Email

1. Below the wait step, click **+ Add Action**
2. Select **Send Email**
3. Create or select the second email (copy body from Google Doc)
4. Click **Add**

### Step 6: Repeat for All Emails in Sequence

Continue adding wait steps and emails until all 5 emails from your "Welcome Series" are in the automation.

**Final Welcome Series automation (visual)**:

```
Trigger: New Contact
  ↓
Send Email #1: Welcome
  ↓
Wait 1 Day
  ↓
Send Email #2: [Name]
  ↓
Wait 2 Days
  ↓
Send Email #3: [Name]
  ↓
Wait 1 Day
  ↓
Send Email #4: [Name]
  ↓
Wait 3 Days
  ↓
Send Email #5: [Name]
```

### Step 7: Activate the Automation

1. At the top of the automation, click **Activate** or **Save & Activate**
2. GHL will confirm: "Automation is now active"
3. The automation will trigger for all new contacts going forward

### Step 8: Rebuild Remaining Sequences

Repeat Steps 1–7 for your other sequences:

- Nurture 30-Day (triggered by tag or after welcome series)
- Abandoned Cart (triggered by ecommerce event, if available in GHL)
- Re-engagement (triggered by no-open-in-60-days condition, if available)

**Estimated time per sequence**:
- Simple sequence (3–4 emails, no branches): 10–15 minutes
- Complex sequence (8–10 emails, multiple conditions/branches): 20–30 minutes

For 15 sequences, budget 2.5–3 hours total. But start with your 5 most critical sequences (welcome, nurture, abandoned cart); the rest can rebuild in Phase 5.5 (optional).

### Step 9: Test a Sequence

Before going live:

1. Create a test contact in GHL (use your own email)
2. Apply the tag or trigger that activates the sequence
3. Wait for the first email to arrive (1–5 minutes)
4. Verify:
   - Email arrives with correct subject and body
   - Links in the email work
   - Send time matches delay settings
5. Reply to the email to test 2-way communication (if enabled)

If the test passes, the sequence is ready. If something's wrong, edit the automation and re-test.

---

## Phase 6: Reconnect Integrations (30 Minutes)

### Step 1: Audit Ontraport Integrations

From Phase 1, Step 4, you documented active integrations. Now reconnect them in GHL:

**Common integrations**:
- Stripe (payments)
- Calendly (appointment booking)
- Google Sheets (data sync)
- Typeform (forms)
- Zapier (custom workflows)

### Step 2: Connect Stripe (if used)

If you used Stripe → Ontraport to tag customers on payment:

1. In GHL, go to **Settings > Integrations > Stripe**
2. Click **Connect**
3. Follow OAuth flow to authorize GHL to access Stripe
4. Once connected, go to **Automations**
5. Create a new automation:
   - **Trigger**: Stripe > Payment Received
   - **Action**: Tag Contact → "Customer" or "Paid"
   - **Activate**

### Step 3: Connect Calendly (if used)

If you used Calendly for appointment booking:

1. In GHL, go to **Settings > Integrations > Calendly**
2. Click **Connect**
3. Authorize GHL to access Calendly
4. Once connected:
   - Go to Calendly > Settings > Integrations
   - Enable GHL as a connected calendar
   - Appointments in Calendly will sync to GHL contacts

### Step 4: Set Up Zapier Webhooks (if used)

If you used Zapier for custom workflows:

1. Log into [Zapier.com](https://zapier.com)
2. For each Ontraport Zap:
   - Click **Edit**
   - Change the action from "Ontraport" to "GoHighLevel"
   - Select the appropriate GHL action (e.g., "Create Contact", "Update Contact", "Tag Contact")
   - Test the Zap
   - Turn back on
3. Repeat for all Zaps

**Example Zap update**:

```
Trigger: Stripe Payment Received
Action: Update Ontraport Contact → Tag "Customer"

BECOMES:

Trigger: Stripe Payment Received
Action: Update GHL Contact → Tag "Customer"
```

### Step 5: Reconnect Google Sheets (if used)

If you had Ontraport syncing contacts to Google Sheets:

1. In GHL, go to **Settings > Integrations > Google Sheets**
2. Click **Connect**
3. Authorize GHL
4. Set up sync:
   - **Source**: GHL Contacts (from a specific list)
   - **Destination**: Google Sheet
   - **Sync frequency**: Daily or real-time
5. Test: Add a contact in GHL; verify it appears in Google Sheets within 1–5 minutes

---

## Phase 7: Migration Testing and Parallel Run (1 Hour)

### Step 1: Test All Critical Workflows

Before sunsetting Ontraport, test each rebuilt automation:

| Workflow | Test Method | Success Criteria |
|----------|---|---|
| **Welcome series** | Signup with test email | Receive all 5 emails at correct intervals |
| **Nurture sequence** | Tag test contact with "Lead" | Receive first nurture email within 1 hour |
| **Abandoned cart** | Trigger with Stripe test payment | Receive abandonment email within 2 hours |
| **Re-engagement** | Wait 61+ days or manually trigger | Receive re-engagement email |
| **Form submission** | Submit