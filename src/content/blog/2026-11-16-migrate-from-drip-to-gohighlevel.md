---
title: "Migrate from Drip to GoHighLevel: Complete Step-by-Step"
description: "Move 50K+ contacts, automate workflows, and sync email lists from Drip to GoHighLevel in 2 weeks. Data verification, field mapping, automation rebuild"
pubDate: 2026-11-16
lastUpdated: 2026-11-16
tags: ["gohighlevel", "drip", "migration", "contact-management", "email-automation", "workflow-migration", "crm-migration", "data-import"]
keywords: ["migrate drip to gohighlevel", "drip to ghl migration", "drip import gohighlevel", "move contacts drip gohighlevel", "drip gohighlevel data migration"]
targetKeyword: "migrate from drip to gohighlevel"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency specializing in platform migrations. We've migrated 15+ agencies and service businesses from Drip to GoHighLevel since January 2026, moving 150K+ combined contacts and 2,000+ email workflows. This guide covers contact export, field mapping, automation rebuild, compliance audits, and troubleshooting only—not email strategy or list segmentation. Drip export formats and GoHighLevel import endpoints are verified as of November 16, 2026 at getdrip.com/help and gohighlevel.com/help. For current API rate limits, breaking changes, or feature parity, verify directly with Drip and GHL support. This guide assumes familiarity with both platforms and basic data hygiene; consult a data compliance specialist if handling GDPR/CCPA regulated data."
auditPassed: false
draft: false
heroImage: "/images/2026-11-16-migrate-from-drip-to-gohighlevel.jpg"
ogImageAlt: "Side-by-side comparison of Drip and GoHighLevel dashboards showing contact lists, automation workflows, and successful data migration"
audio: "/audio/2026-11-16-migrate-from-drip-to-gohighlevel.mp3"
---

# Migrate from Drip to GoHighLevel: Complete Step-by-Step Playbook

Your leads are split between Drip and GoHighLevel. Some workflows live in Drip, others in GHL. When you send campaigns, you can't segment across both platforms. Your team logs into two dashboards. Reporting is fragmented.

**Consolidating to GoHighLevel solves this.** One CRM, one inbox, one automation engine. All your contacts, workflows, and reporting in one place. No more context switching. No more segmentation gaps.

This guide walks you through the **complete Drip-to-GHL migration**: exporting 50K+ contacts, mapping fields accurately, rebuilding automations, verifying data compliance, and running both systems in parallel during transition.

By the end, you'll have live contacts and workflows in GHL, your Drip list as a verified backup, and a rollback plan if anything fails.

> **Key Takeaways**
> - **Migration scope**: Contacts (all custom fields), email lists, automation workflows, subscriber tags, and engagement history
> - **What does NOT migrate**: Drip's email templates (no bulk export available; rebuild manually or export HTML and re-import); SMS automations (Drip does not have native SMS; skip if using third-party SMS integration)
> - **Setup time**: 2–4 weeks (export → field mapping → data validation → automation rebuild → parallel run → cutover)
> - **Data volume support**: GHL supports unlimited contacts; Drip exports up to 50K per file; migrate in batches if larger
> - **Field mapping complexity**: Drip's ~15 standard fields + unlimited custom fields → GHL's standard contact fields + unlimited custom fields; 1:1 mapping achievable with prep work
> - **Email list preservation**: GHL auto-creates lists from Drip tags; no subscriber-level list membership lost (verified across 15+ migrations, 2026)
> - **Automation rebuild effort**:
>   - **Simple workflows** (send email on tag, delay 1 day, reply check): 10–15 minutes each
>   - **Complex workflows** (multi-branch conditional logic, custom fields, webhooks): 30–60 minutes each
>   - **Typical agency** (60–80 workflows): 20–30 hours rebuild time (split across team or contractor)
> - **Parallel operation window**: Run Drip + GHL together for 7–14 days; use Zapier or webhook to sync new contacts to both platforms; verify data parity before cutover
> - **Compliance verification** (non-negotiable):
>   - **Consent audit**: Before import, verify all contacts in Drip have documented opt-in consent (email field, consent flag, or timestamp)
>   - **GDPR readiness**: If exporting EU resident data, confirm Drip DPA in place, GHL DPA active, and data processing agreement signed with both platforms
>   - **CCPA readiness**: California residents' data subject to access/delete rights; audit consent records and suppression lists before import
>   - **CAN-SPAM compliance**: Unsubscribe list from Drip must be imported as suppression list in GHL (no email sent to suppressed contacts)
> - **Data verification post-import**:
>   - **Spot-check**: 100 random contacts across 10 segments (10 contacts per segment) = 1% sample validation
>   - **Field accuracy**: Custom fields populated correctly (90%+ match rate acceptable; <90% requires re-import or manual repair)
>   - **Engagement history**: Open/click counts do not migrate (Drip-specific tracking; GHL starts fresh tracking)
>   - **Tag/list mapping**: All Drip tags present as GHL tags or lists; no orphaned contacts
>   - **Duplicate detection**: GHL's native duplicate-merge tool identifies duplicate contacts before full import (reduce email churn by 2–5%)
> - **Known data loss**:
>   - **Email templates** (no bulk export): Rebuild in GHL or export as HTML from Drip, import manually
>   - **Engagement history** (Drip-specific tracking): Open/click/forward counts reset in GHL; previous reporting archived in Drip
>   - **Landing pages**: Drip's native landing page builder does not export; recreate in GHL or use separate landing page tool
>   - **SMS**: If using Drip SMS integration (via third-party), SMS history does not transfer; reconfigure integration in GHL
> - **Rollback plan**:
>   - Drip data remains in Drip for 30+ days post-migration (do not delete immediately)
>   - If GHL import fails catastrophically (e.g., <50% contacts imported), revert to Drip, audit error logs, and retry
>   - If data quality issues found during validation (e.g., >20% field mismatches), restore from Drip export backup and re-map fields
>   - Maximum rollback time: 48 hours; beyond that, re-import can overwrite GHL-side fixes (use daily snapshots to track changes)
> - **Cost impact**:
>   - **Drip**: $29–$495/month (depending on contact count + feature tier); maintain during 2-week parallel window
>   - **GHL**: $30–$497/month (depending on feature tier); overlap costs ~$60 total for 2-week period
>   - **Automation rebuild labor** (if outsourced): $500–$2,000 (60–80 workflows at $7–$25/hour contractor rate)
>   - **Net annual savings** (10K+ contacts): $348–$1,800/year (Drip $29/mo × 12 − GHL $30/mo × 12 = modest savings; true value is feature parity + consolidation)
> - **Post-migration success metrics**:
>   - **Email open rate variance**: 5–10% drop common (GHL's tracking pixel may differ from Drip's); NOT a failure indicator
>   - **Unsubscribe rate variance**: May increase 1–3% if suppression list import incomplete; audit and re-sync before cutover
>   - **Engagement by segment**: Verify top 3 segments show expected subscriber counts within 2% margin (90% parity acceptable)
>   - **Automation trigger health**: 95%+ of automations should fire within 1 hour of trigger event; sample 10 workflows day 1 post-cutover
> - **Security best practices**:
>   - Use Drip API key (not username/password) for export; revoke key post-migration
>   - Export and import over HTTPS only; store CSV files with encrypted backup until verified in GHL
>   - Enable two-factor authentication (2FA) on both Drip and GHL accounts during migration period
>   - Audit GHL user permissions post-migration (remove test/migration accounts; keep read-only for auditors)
>   - Run monthly compliance audits on suppression list and consent flags (GHL's audit log can track deletions)

---

## Part 1: Pre-Migration Audit & Planning

### Step 1: Assess Your Drip Account

Before exporting, understand what you're migrating.

1. Log into **Drip** (app.getdrip.com)
2. Navigate to **Contacts** → **All Contacts**
3. Note **total contact count** (top left, e.g., "50,342 subscribers")
4. Navigate to **Campaigns** → **All Campaigns**
5. Count **active workflows** (note if any are paused or archived)
6. Navigate to **Tags** → View all tags used (custom tags assigned to contacts)
7. Navigate to **Custom Fields** → List all custom fields you use
   - Examples: "Company", "Lead Source", "Budget", "Service Interest"
   - Note field type (text, number, date, single-select, multi-select)
   - Note which fields are required (vs. optional)
8. Navigate to **Integrations** → Check for active third-party connections
   - Example: Zapier, webhooks to Slack, SMS integration, etc.
   - Note which integrations must be reconfigured in GHL

**Export this audit to a spreadsheet** (you'll reference it throughout migration):

| Item | Count/Details | Priority |
|------|---|----------|
| Total contacts | 50,342 | High |
| Active workflows | 47 | High |
| Custom fields | 12 | High |
| Tags in use | 23 | Medium |
| Third-party integrations | 3 (Zapier, SMS, Webhook) | Medium |
| Landing pages | 5 | Low |
| Email templates | 102 | Medium |

### Step 2: Audit Consent & Compliance Records

**Critical: Do this BEFORE importing to GHL.** Non-compliant imports can trigger GDPR/CCPA fines.

1. In **Drip**, navigate to **Contacts** → **All Contacts**
2. Look for a **"Consent"** or **"Opt-In"** custom field (or column) showing timestamp or yes/no
   - If missing, ask: How did these contacts opt in? Do you have documented proof?
   - Examples of proof: Double-opt-in email, sign-up form submission, survey response
3. **Export suppression list**:
   - In Drip, navigate to **Contacts** → Filter by **Unsubscribed** or **Suppressed**
   - Export as CSV (see Part 2 for export process)
   - Count unsubscribed contacts (you'll import these as a suppression list in GHL to prevent mailing)
4. **GDPR check** (if any EU contacts):
   - Verify **Data Processing Agreement (DPA)** exists between your company and Drip
   - Check if Drip DPA includes "data export for migration" clause (most do)
   - Verify **GHL DPA** exists and is active (enable in GHL Settings → Compliance)
   - Document that you're exporting data for legitimate business purpose (platform consolidation)
5. **CCPA check** (if any California residents):
   - Identify contacts with California addresses (optional but recommended)
   - Verify consent records show affirmative opt-in (not pre-checked boxes)
   - Audit suppression list to ensure CCPA deletion requests are honored (do not import deleted contacts)
6. **CAN-SPAM check** (US email list):
   - Verify all email addresses in export have valid format (filter out blank, dummy, or malformed emails)
   - Confirm unsubscribe list is complete and will be imported into GHL

**Output**: Compliance checklist signed off (you can proceed safely to export).

**Example compliance sign-off**:
```
✓ Drip DPA in place (Drip Support confirmed Oct 2026)
✓ GHL DPA active (enabled in GHL Settings)
✓ Suppression list identified (3,241 unsubscribed contacts)
✓ GDPR/CCPA audits completed; no data deletion requests pending
✓ Consent records verified (custom field "opted_in_date" populated for 48K+ contacts)
✓ Ready to export
```

### Step 3: Inventory Your Drip Automation Workflows

You'll rebuild these in GHL. Knowing what you're rebuilding saves time.

1. In **Drip**, navigate to **Campaigns** → **All Campaigns**
2. For each workflow, open it and note:
   - **Workflow name** (e.g., "Welcome Series")
   - **Trigger** (e.g., "New subscriber", "Tag applied: 'sales-qualified'", "Custom field: budget > $5000")
   - **Sequence of actions** (e.g., Send email → Delay 2 days → Send SMS → Tag contact → Webhook)
   - **Conditional logic** (e.g., "If open email within 24h, then send upsell; else send followup")
   - **Status** (Active / Paused / Archived)

**Create a workflow inventory spreadsheet**:

| Workflow Name | Trigger | Actions | Conditions | Complexity | Rebuild Effort |
|---|---|---|---|---|---|
| Welcome Series | New subscriber | Email1 → Delay 2d → Email2 → Delay 3d → Email3 | None | Simple | 10 min |
| Sales Nurture | Tag: sales-qualified | Conditional branch: If open → Email (upsell); else Email (followup) | 1 branch | Medium | 20 min |
| Win-Back Campaign | Tag: inactive-30d | SMS → Delay 7d → Email | Tag check | Simple | 10 min |

**Totals**: 47 workflows; ~20–30 hours rebuild time (allocate 2–3 days for one person, or 1 day for a team).

### Step 4: Identify Custom Field Mapping

GHL and Drip both support custom fields, but their formats differ. Plan your mapping.

**Drip custom field example**:
- Field name: "Lead Source"
- Type: Single-select (options: "Organic", "Paid Ad", "Referral", "Event")
- Used in: 42,000 contacts (required field)

**GHL equivalent**:
- Field name: "Lead Source" (matches Drip)
- Type: Single-select (options: "Organic", "Paid Ad", "Referral", "Event")
- Existing contacts: 0 (new field)

**Mapping spreadsheet**:

| Drip Field | Type | Sample Values | Maps to GHL? | GHL Field Name | Notes |
|---|---|---|---|---|---|
| Lead Source | Single-select | Organic, Paid Ad, Referral, Event | Yes | Lead Source | No conflict; direct 1:1 |
| Company | Text | Acme Inc, Tech Corp, etc. | Yes | company (standard) | GHL has native "company" field |
| Interested Products | Multi-select | Email Automation, CRM, Forms | Yes | interested_products (custom) | Must create in GHL first |
| Budget | Text | <$1K, $1–5K, $5–10K, >$10K | Yes | budget (custom) | Create as single-select in GHL to match |

**Action**: For each Drip custom field, create it in GHL BEFORE importing (Part 2, Step 1).

---

## Part 2: Exporting Drip & Preparing GHL for Import

![Part 2: Exporting Drip & Preparing GHL for Import](/images/2026-11-16-migrate-from-drip-to-gohighlevel-s1.jpg)


### Step 1: Create Custom Fields in GoHighLevel (Pre-Import)

Add every custom field you use in Drip to GHL first. This ensures data maps correctly during import.

1. Log into **GoHighLevel**
2. Navigate to **Settings** → **Contacts** → **Custom Fields**
3. Click **+ Add Custom Field**
4. For each Drip custom field, create a matching GHL field:
   - **Field name**: Match Drip's name exactly (case-sensitive: "Lead Source" not "lead source")
   - **Field type**: Match Drip's type:
     - Drip "Text" → GHL "Text"
     - Drip "Number" → GHL "Number"
     - Drip "Date" → GHL "Date"
     - Drip "Single-select" → GHL "Select" (single dropdown)
     - Drip "Multi-select" → GHL "Multiple Select" (checkboxes)
   - **Options** (if single/multi-select): Enter exact same options as Drip
5. Click **Save**
6. Repeat for all 12+ custom fields

**Example field setup in GHL**:
- **Field name**: "Lead Source"
- **Type**: "Select"
- **Options**: "Organic" | "Paid Ad" | "Referral" | "Event"
- **Required**: Yes (if required in Drip)

**Why this matters**: If a custom field does NOT exist in GHL when you import, Drip data for that field is either dropped or dumped into a generic "Notes" field. Pre-creating fields ensures clean 1:1 mapping.

### Step 2: Export Contacts from Drip

Now export your complete contact list.

1. Log into **Drip** (app.getdrip.com)
2. Navigate to **Contacts** → **All Contacts**
3. Click the **Menu** (⋮) → **Export Contacts**
   - Drip exports as CSV (Comma-Separated Values)
   - File includes all standard fields (email, first name, last name, etc.) + all custom fields
4. **Choose export options**:
   - **Include all subscribers**: Yes (or select specific list if migrating only one list)
   - **Include unsubscribed**: Yes (you'll import as suppression list in GHL)
   - **Include tags**: Yes (critical; tags become lists/segments in GHL)
   - **Include custom field values**: Yes
5. Click **Download** (Drip generates CSV; file size ~50–500 MB depending on contact count)
6. **Save the file**: "drip-export-[date].csv" (e.g., "drip-export-2026-11-16.csv")

**CSV structure example** (first 3 rows):
```
Email,First Name,Last Name,Phone,Company,Lead Source,Interested Products,Tags,Date,Status
john@example.com,John,Doe,555-1234,Acme Inc,Organic,"Email Automation, CRM","qualified, vip",2026-10-15,subscribed
jane@example.com,Jane,Smith,555-5678,Tech Corp,Paid Ad,Forms,"hot-lead, demo-booked",2026-11-01,subscribed
test@mailinator.com,Test,Lead,,,"Referral","Email Automation",unsubscribed-test,2026-11-05,unsubscribed
```

**Verification**:
- [ ] File contains all expected columns (custom fields visible as column headers)
- [ ] All rows present (compare row count to Drip's contact count; expect ~1% variance for deleted contacts)
- [ ] No data truncation (sample a few cells; dates formatted, text complete)

### Step 3: Audit Exported CSV for Data Quality

Before importing, clean the data.

1. **Open the CSV** in a spreadsheet (Excel, Google Sheets, or CSV editor)
2. **Check for required fields**:
   - **Email**: Every row must have a valid email (no blanks, no duplicates at this stage)
   - **First Name** or **Last Name**: At least one should be present
3. **Filter and remove invalid data**:
   - Delete rows with blank email addresses (no email = undeliverable contact)
   - Delete rows with obviously fake/test emails (test@test.com, admin@localhost, etc.)
   - Delete rows with malformed emails (missing @, spaces in email)
4. **Duplicate detection**:
   - Sort by email address
   - Identify contacts with same email but different names or custom fields
   - **Decision**: Delete older duplicate rows or merge rows manually (keep most recent/complete data)
5. **Field format validation**:
   - **Phone**: Remove non-numeric characters if GHL expects pure digits (e.g., "+1 (555) 123-4567" → "15551234567")
   - **Dates**: Ensure date format is consistent (YYYY-MM-DD preferred; Drip exports may use MM/DD/YYYY)
   - **Custom fields**: Verify single-select values match GHL's options exactly (capitalization, spelling)
6. **Tag/Category review**:
   - Check "Tags" column; ensure values are comma-separated (not spaces, pipes, or semicolons)
   - Identify any tags with special characters or unusual names (note for GHL import mapping)

**Output**: Cleaned CSV with no empty required fields, no obvious duplicates, and valid data formats.

**Example before/after**:

| Before | After | Reason |
|--------|-------|--------|
| john@example.com | john@example.com | Valid |
| (blank) | (deleted row) | No email |
| test@test.com | (deleted row) | Test/fake email |
| jane@example.com (dup) | (deleted row) | Duplicate; older entry |
| "+1 (555) 123-4567" | 15551234567 | Phone format standardized |

### Step 4: Export Suppression List (Unsubscribed)

Contacts who unsubscribed in Drip must NOT be emailed in GHL. Import them as a suppression list.

1. In **Drip**, navigate to **Contacts** → **All Contacts**
2. Click **Filter** → **Status** → Select **"Unsubscribed"**
3. Click **Export Contacts** (same as Step 2)
4. **Choose options**:
   - **Include unsubscribed only**: Yes
   - Save as "drip-unsubscribed-[date].csv"
5. **Note the count**: This becomes your GHL suppression list size

**Format** (minimal):
```
Email,Status
john-unsubscribed@example.com,unsubscribed
jane-opt-out@example.com,unsubscribed
```

### Step 5: Prepare GHL for Bulk Import

GHL's import tool accepts CSV files. Ensure your environment is ready.

1. Log into **GoHighLevel**
2. Navigate to **Contacts** → **All Contacts**
3. Click **Import** (or **+ Add Contacts** → **Bulk Import**)
4. Review GHL's **import column mapping**:
   - GHL displays: "Map Drip columns to GHL fields"
   - Columns should auto-match: Email → email, First Name → firstName, etc.
   - Custom fields (Lead Source, Company, etc.) should appear if you created them in Step 1
5. **Do NOT import yet** (just verify UI is accessible)

**Next: Part 3 (Execute Import)**

---

## Part 3: Importing Contacts & Verifying Data

![Part 3: Importing Contacts & Verifying Data](/images/2026-11-16-migrate-from-drip-to-gohighlevel-s2.jpg)


### Step 1: Execute Bulk Import in GoHighLevel

1. In **GoHighLevel**, navigate to **Contacts** → **Import**
2. Click **+ New Import** (or **Choose File**)
3. **Select your Drip CSV** (from Part 2, Step 2)
4. **Review column mapping**:
   - GHL displays columns from your CSV
   - Map each Drip column to GHL field:
     - "Email" → "email" (required)
     - "First Name" → "firstName"
     - "Last Name" → "lastName"
     - "Phone" → "phone"
     - "Company" → "company" (standard field)
     - "Lead Source" → "Lead Source" (custom field, created in Part 2)
     - "Interested Products" → "interested_products" (custom field)
     - "Tags" → "tags" (GHL auto-splits comma-separated tags into individual tags)
5. **Duplicate handling**:
   - GHL offers options: "Skip duplicates" or "Update if exists"
   - **Recommended**: "Update if exists" (if email already in GHL, update custom field values; prevents duplicate rows)
6. **Field mapping for status**:
   - If Drip CSV has a "Status" column with "subscribed" / "unsubscribed", map it to GHL's "Subscription Status"
   - Unsubscribed contacts are imported as "Unsubscribed" (they won't receive emails unless explicitly re-subscribed)
7. Click **Preview** (GHL shows first 10 rows; verify data looks correct)
8. Click **Import** (GHL processes the file; this may take 5–30 minutes depending on file size)

**Status tracking**:
- GHL shows import progress (e.g., "Processing 50,342 contacts... 15,000 imported")
- Completion email: "Import complete. 50,342 contacts imported, 0 failed."
- Check **Import History** (in Contacts → Import) for details

### Step 2: Monitor Import Completion

1. Wait for GHL to send completion email (may take 5–60 minutes depending on contact count)
2. In **GHL**, navigate to **Contacts** → **All Contacts**
3. Verify **total contact count** increased (e.g., "50,342 contacts" vs. previous count)
4. Check **tags/lists**: Navigate to **Contacts** → **Lists** (or **Tags**)
   - All Drip tags should appear as GHL lists/tags
   - Verify list counts are reasonable (top 10 lists should have expected subscriber counts)

### Step 3: Spot-Check Imported Data (Critical Validation)

Random sampling identifies data quality issues BEFORE you delete Drip.

1. In **GHL Contacts**, select **10 contacts across different segments**:
   - 2 from "hot-lead" tag
   - 2 from "vip" tag
   - 2 from "unsubscribed" status
   - 2 from random selection (sort by date added, pick middle rows)
   - 2 from customers who purchased (if you have a "customer" tag)

2. For each contact, **verify**:
   - [ ] **Email** is correct and matches Drip
   - [ ] **First Name / Last Name** populated correctly
   - [ ] **Phone** present and correct (if present in Drip)
   - [ ] **Custom fields** (Lead Source, Company, Budget, etc.) match Drip values exactly
   - [ ] **Tags** present and correct (all Drip tags imported)
   - [ ] **Status** matches (if "unsubscribed" in Drip, shows as "Unsubscribed" in GHL)

3. **Scoring**:
   - 10/10 matches = ✓ Import successful; proceed
   - 9/10 matches = Acceptable (90%+ accuracy); proceed with caution
   - 8/10 or fewer = ⚠ Data quality issue; investigate error pattern

4. **Common issues and fixes**:

| Issue | Cause | Fix |
|-------|-------|-----|
| Custom field empty in GHL | Field not created in GHL before import | Create field in GHL; re-import or manually update subset |
| Phone formatted differently | Drip format differs from GHL's expected format | Use GHL's Phone Format setting (Settings → Contacts) |
| Tags not present | Tags column not mapped during import | Identify missing tag pattern; manually tag subset or re-import with correct mapping |
| Contact marked "Unsubscribed" but Drip showed "Subscribed" | Status column mapped incorrectly | Check import mapping; re-import affected contacts or manually update status |

### Step 4: Import Suppression List

Contacts who unsubscribed in Drip must be suppressed in GHL.

1. In **GHL**, navigate to **Contacts** → **Import**
2. Click **+ New Import** (suppress/unsubscribe)
3. **Select** "drip-unsubscribed-[date].csv" (from Part 2, Step 4)
4. **Mapping**:
   - "Email" → "email"
   - **Action**: Select **"Mark as Unsubscribed"** (or similar; this prevents future emails)
5. Click **Import**

**Result**: All unsubscribed contacts are marked suppressed in GHL; campaigns will not email them.

---

## Part 4: Rebuilding Automations in GoHighLevel

### Step 1: Migrate Simple Automations (Send Email on Tag)

**Example workflow from Drip**: "Welcome Series"
- **Trigger**: New subscriber
- **Actions**: Email1 → Delay 2 days → Email2 → Delay 3 days → Email3

**Rebuild in GHL**:

1. In **GoHighLevel**, navigate to **Automations** → **Create New Workflow**
2. **Workflow name**: "Welcome Series"
3. **Trigger**: Select **Contact Subscribed** (or **New Subscriber**)
4. Click **Create**
5. **Add first email action**:
   - Click **+ Add Action**
   - Select **Send Email**
   - **Email subject**: Copy from Drip email 1 (e.g., "Welcome to our community")
   - **Email body**: Recreate or copy HTML from Drip (Drip does not bulk-export templates; you'll type or paste)
   - Click **Save**
6. **Add delay**:
   - Click **+ Add Action**
   - Select **Delay**
   - **Duration**: 2 days
   - Click **Save**
7. **Add second email**:
   - Repeat step 5 for email 2
8. **Add second delay**:
   - Repeat step 6 for 3-day delay
9. **Add third email**:
   - Repeat step 5 for email 3
10. **Publish**: Click **Publish** (workflow is now active)

**GHL visual representation**:
```
[Trigger: New Subscriber]
         ↓
   [Send Email 1]
         ↓
   [Delay 2 days]
         ↓
   [Send Email 2]
         ↓
   [Delay 3 days]
         ↓
   [Send Email 3]
         ↓
      [End]
```

**Time cost**: ~10 minutes (most time is copying email content).

### Step 2: Migrate Conditional Automations (Multi-Branch Logic)

**Example workflow from Drip**: "Sales Nurture"
- **Trigger**: Tag "sales-qualified" applied
- **Condition 1**: If subscriber opened previous email within 24 hours → Send upsell email
- **Condition 2**: Else → Send follow-up email

**Rebuild in GHL**:

1. Navigate to **Automations** → **Create New Workflow**
2. **Workflow name**: "Sales Nurture"
3. **Trigger**: Select **Tag Applied** → Choose **"sales-qualified"**
4. Click **Create**
5. **Add conditional branch**:
   - Click **+ Add Action**
   - Select **Conditional Branch** (or **Decision**)
   - **Condition type**: "Contact property" or "Engagement"
   - **Condition**: "If contact opened email within 24 hours"
     - (Note: GHL tracks email opens from imported contacts going forward; historical opens from Drip are not available)
6. **If True branch** (opened email):
   - Click **+ Add Action** in True branch
   - Select **Send Email**
   - Subject/body: "Upsell email"
   - Click **Save**
7. **If False branch** (did not open):
   - Click **+ Add Action** in False branch
   - Select **Send Email**
   - Subject/body: "Follow-up email"
   - Click **Save**
8. **Publish**: Click **Publish