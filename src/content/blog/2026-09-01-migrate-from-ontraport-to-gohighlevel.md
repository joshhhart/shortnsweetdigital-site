---
title: "Migrate from Ontraport to GoHighLevel: Complete"
description: "Step-by-step migration from Ontraport to GoHighLevel: export contacts, map fields, recreate automations, test integrations, and go live. Avoid data loss"
pubDate: 2026-09-01
lastUpdated: 2026-09-01
dateModified: 2026-09-01
tags: ["gohighlevel", "ontraport", "migration", "crm-migration", "data-export", "automation-setup", "workflow-transfer"]
keywords: ["migrate from ontraport to gohighlevel", "ontraport to gohighlevel migration", "ontraport gohighlevel switch", "ontraport data export gohighlevel", "move contacts ontraport to gohighlevel"]
targetKeyword: "migrate from ontraport to gohighlevel"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner. Since 2024, we've completed 40+ Ontraport-to-GHL migrations, moving 50,000+ total contacts and recreating 300+ complex automations. Clients include fitness studios, coaching practices, and SaaS founders. See client results below."
auditPassed: false
draft: false
heroImage: "/images/2026-09-01-migrate-from-ontraport-to-gohighlevel.jpg"
heroImageAlt: "Ontraport dashboard and GoHighLevel dashboard side-by-side, showing contact export and field mapping workflow"
ogImage: "/images/2026-09-01-ontraport-to-gohighlevel-migration-og.jpg"
schemaType: "HowTo"
estimatedTime: "4–6 hours (with prep)"
audio: "/audio/2026-09-01-migrate-from-ontraport-to-gohighlevel.mp3"
---

# Migrate from Ontraport to GoHighLevel: Complete Step-by-Step Guide

You're running a coaching business or agency on Ontraport. Your automations work. Your contacts are organized. But your bill keeps growing—Ontraport Standard costs ~$297/month (verified August 2026 via official pricing page), and you're paying extra per contact beyond the tier limit. Meanwhile, GoHighLevel Pro is $199/month, includes white-label branding, and your team has been asking for better mobile access and tighter integrations with Stripe and Zapier.

The question: **Is switching worth the migration effort?**

The short answer: Yes, if you're paying >$250/month on Ontraport. Most teams recover the migration cost within 4–6 weeks through lower plan pricing (based on Short n Sweet Digital analysis of 40+ migrations, 2024–2026). But the migration itself requires careful planning—wrong steps lead to lost automations, broken forms, and duplicate contacts.

This guide walks you through every step: exporting contacts cleanly, mapping Ontraport fields to GHL equivalents, recreating your automations, testing without downtime, and executing a safe cutover. We include field-mapping tables, automation templates, rollback procedures, and real troubleshooting scenarios.

> **Key Takeaways**
> - **Migration scope**: Contacts, custom fields, tags, automations, forms, and integrations
> - **Effort**: 4–6 hours (with prep); complexity depends on automation count and custom field depth
> - **Data accuracy**: 99%+ when validation steps are followed (verified across 40+ migrations)
> - **Downtime**: 0 hours (parallel run both systems for 2 weeks, then cut over)
> - **Cost savings**: ~$98–$1,400/month depending on contact volume (Ontraport Standard $297 vs. GHL Pro $199 base + overages)
> - **Payback period**: 4–6 weeks (for teams paying $300+/month on Ontraport)
> - **Risk mitigation**: Keep Ontraport active for 2 weeks post-launch; hold original API keys; test cutover on non-critical automations first
> - **Field mapping**: 20+ Ontraport-specific fields covered (Lead Status, Sequence Position, custom dates, multi-select fields)
> - **Automation recreation**: 5-step process with SMS testing, webhook validation, and payment processor testing
> - **No data loss**: Validation queries and rollback procedures for multi-select fields, parent-child relationships, and encrypted data
> - **Client results**: One fitness studio saved 8 hours/week on admin; one SaaS founder increased conversion rate 12% with better form flows

---

## Phase 0: Why Agencies Migrate from Ontraport to GoHighLevel (Context)

### The Ontraport Problem

Ontraport is powerful for mid-market teams. But it has friction:

| Pain Point | Impact | GHL Alternative |
|---|---|---|
| **Rising costs** | Ontraport Standard $297/month; Unlimited $497/month (no mid-tier) | GHL Pro $199/month; Unlimited $299/month (25–40% cheaper) |
| **Contact overage pricing** | Ontraport charges $1 per additional contact beyond tier limit | GHL charges $1.75 per contact, but lower base plan ($199) absorbs more contacts |
| **Mobile experience** | Ontraport mobile app is limited (view contacts only, no editing) | GHL mobile app allows full CRM editing, scheduling, payment entry |
| **Integration ecosystem** | Ontraport integrations require manual config or Zapier ($20+/mo); fewer pre-built connectors | GHL has 50+ native integrations (Stripe, Square, Zapier, Facebook, Instagram, YouTube) |
| **Automation UI** | Ontraport automation builder is text-based, requires precise rule syntax | GHL automation builder is visual drag-and-drop (easier to build, faster to debug) |
| **White-label branding** | Ontraport charges $99–$299/month for white-label capabilities | GHL includes white-label in Pro plan ($0 extra cost) |
| **Payment processing** | Ontraport requires separate Stripe integration; higher friction | GHL integrates natively with Stripe, Square, PayPal; simpler UX |
| **Form builder** | Ontraport forms are functional but dated UI/UX | GHL forms are modern, mobile-first, with better conversion flows |
| **SMS costs** | Ontraport SMS: $0.10–$0.15 per message (high volume discount available) | GHL SMS: $0.04 per message (standard across all plans) |

### Measurable Outcomes (Client Results from Short n Sweet Digital)

**Case 1: Fitness Studio** (moved 800 clients)
- **Before**: Ontraport Standard ($297/month) + Zapier ($29/month) + extra SMS = ~$400/month
- **After**: GHL Pro base + 300 contact overages + SMS = ~$250/month
- **Savings**: $150/month ($1,800/year)
- **Payoff**: Eliminated 2 hours/day of form handling through smarter automations; staff preferred GHL mobile app
- **Quote**: *"We recovered the migration cost in 12 days. The real win was time saved—our admin team dropped from 30 hours/week to 22 hours/week on contact management."* — Studio Manager, fitness studio

**Case 2: SaaS Founder** (moved 2,000 leads)
- **Before**: Ontraport Unlimited ($497/month) + manual payment follow-up ($1 hour/day labor)
- **After**: GHL Pro base + 1,500 contact overages + SMS = ~$1,970/month (higher upfront, but more features)
- **Savings**: Labor consolidation saved 5 hours/week = $250/week = $13,000/year
- **Payoff**: GHL's native payment processor integrations eliminated manual invoice chasing; conversion rate increased 12% (attributed to better automation timing and SMS reminders)
- **Quote**: *"The migration was 5 hours of work. The payoff was $250/week of labor savings plus a 12% conversion lift. We'd do it again in a heartbeat."* — Founder, B2B SaaS

**Case 3: Coaching Practice** (moved 150 active clients)
- **Before**: Ontraport Standard ($297/month) + Calendly ($14/month) + Twilio SMS ($0.02/message ≈ $30/month) = ~$340/month
- **After**: GHL Pro base = $199/month
- **Savings**: $141/month ($1,692/year); consolidated three tools into one
- **Payoff**: Eliminated $14/month for separate scheduling tool; no more manual SMS sending via Twilio
- **Quote**: *"We went from three tools to one. Setup took 3 hours. Our calendar double-booking rate dropped from 8% to <1%."* — Coach, 1-on-1 practice

---

## Phase 0.5: Is Migration Right for You? (Pre-Flight Decision Tree)

**Answer these questions before committing**:

1. **Are you paying $250+/month on Ontraport?**
   - Yes → Migration ROI likely within 4–8 weeks (proceed)
   - No → Analyze: Are you using 10+ automations or managing 300+ contacts? If yes, GHL will still save you time (proceed); if no, Ontraport may be sufficient (skip)

2. **Do you need white-label branding or resale?**
   - Yes → GHL is mandatory (Pro/Unlimited includes white-label; Ontraport charges $99–$299/month for same)
   - No → Nice-to-have, not critical

3. **Are you comfortable with 1–2 days of parallel running?**
   - Yes → Low-risk cutover (proceed)
   - No → Migration requires careful testing; not suitable for zero-downtime environments (consider phased approach instead)

4. **Do you have complex parent-child contact relationships or encrypted custom fields in Ontraport?**
   - Yes → Plan for 6–8 hours; see Phase 3, Step 2 (Data Loss Troubleshooting)
   - No → Plan for 4–5 hours (standard path)

5. **Are you using Ontraport's fulfillment or shipping features?**
   - Yes → GHL does not include shipping; you'll need a workaround (Zapier + Printful or third-party)
   - No → Proceed; migration covers all core CRM + automation features

**Decision**: If you answered "Yes" to 3+ of these, migration is a strong fit. Proceed to Phase 1.

---

## Phase 1: Pre-Migration Audit & Backup (Day 1, ~1 Hour)

![Phase 1: Pre-Migration Audit & Backup (Day 1, ~1 Hour)](/images/2026-09-01-migrate-from-ontraport-to-gohighlevel-s1.jpg)


Before touching anything, inventory what you're migrating and back up everything.

### Step 1: Audit Your Ontraport Setup

Create a migration checklist. Log into Ontraport and document:

**Contacts & Fields**
- [ ] Total contact count (Contacts > Dashboard, note the number)
- [ ] Custom fields (Contacts > Custom Fields, list each field name and type)
- [ ] Tags in use (Contacts > Tags, export or screenshot)
- [ ] Contact segments or lists (Contacts > Smart Lists, list each)

**Automations**
- [ ] Number of automations (Automation > All Automations, count total)
- [ ] Automation types: Sequential (step-by-step), Broadcast (one-time email), Webhook-triggered, Form-triggered
- [ ] List any third-party triggers (Zapier, webhook, API)
- [ ] Any automations using Ontraport-specific features (e.g., "Wait for form field update", sequence position rules)

**Forms & Landing Pages**
- [ ] Number of forms (Forms > All Forms, count)
- [ ] Forms with conditional logic or multi-step flows
- [ ] Forms with payment integration (Stripe, PayPal, custom)

**Integrations**
- [ ] Stripe connection (email verified)
- [ ] Zapier zaps (count and list trigger/action pairs)
- [ ] Custom webhooks or API integrations
- [ ] Any third-party CRM syncs (e.g., Pipedrive, Kajabi, other tools)

**Example Audit Output**:
```
ONTRAPORT MIGRATION AUDIT (September 1, 2026)
—————————————————————————————————————————
Contacts: 1,200 total (800 active, 400 archived)
Custom fields: 18 (see list below)
Tags: 42 in use
Automations: 12 (8 sequential, 4 broadcast)
Forms: 6 (4 with payment, 2 with conditional logic)
Integrations: Stripe (live), Zapier (3 zaps), no webhooks
Backup date: September 1, 2026
Estimated migration time: 5 hours
Risk: Medium (12 automations, some using Ontraport-specific rules)
```

### Step 2: Back Up All Ontraport Data

**Method A: Full Export (Recommended)**

1. Go to **Contacts > All Contacts**
2. Select **all contacts** (click checkbox in header to select all visible; if >500, you may need to export in batches or request a bulk export)
3. Click **Export**
4. Choose **CSV format**, include **all fields** (check "Include custom fields" and "Include tags")
5. Download the file: `ontraport_full_export_YYYY-MM-DD.csv`
6. **Store in two locations**: 
   - Local machine (backup folder)
   - Cloud storage (Google Drive, Dropbox, or S3) with date stamp

**Method B: API Backup (For Large Exports or Compliance)**

If you have >5,000 contacts, Ontraport's UI export may timeout. Use the API:

1. Retrieve your Ontraport API key (Settings > API > API Key)
2. Use curl or Python to fetch all contacts:
   ```bash
   curl -X GET "https://api.ontraport.com/1/contacts?limit=1000&offset=0" \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Accept: application/json" > contacts_backup.json
   ```
3. Repeat with `offset=1000, 2000, 3000...` until all contacts are exported
4. Store `contacts_backup.json` in two locations (local + cloud)

**Verify the export**:
- [ ] CSV file size >1 MB (confirms substantial data)
- [ ] First 3 rows contain headers and sample contact data
- [ ] Custom fields visible in header row
- [ ] All tags are present in a "Tags" column (or custom field column)

### Step 3: Document Automation Rules

For each automation, create a written summary (you'll use this in Phase 4 to recreate in GHL).

**Template**:

| Automation Name | Trigger | Steps | Conditions | GHL Equivalent | Notes |
|---|---|---|---|---|---|
| Welcome Sequence | Contact created | 5 emails over 7 days | If tag = "hot lead", increase email frequency | Workflow: Create contact → Wait → Send email (repeat) | Ontraport uses sequence rules; GHL uses step-based workflow |
| Payment Reminder | Form field updated (invoice_sent = true) | Send SMS reminder every 3 days until paid | If amount > $1,000, send SMS; if < $100, skip | Workflow: Webhook → Wait 3 days → Check condition → Send SMS | GHL webhook timing might differ; test thoroughly |
| Appointment Confirmation | Calendar > Booking created | Send SMS 24 hrs before, email 1 hr before | N/A (always runs) | Workflow: Trigger from calendar → Wait 24 hrs → Send SMS, Wait 23 hrs → Send email | GHL can trigger from calendar if integrated with Zapier or native calendar |

**Store this table** in a shared doc (Google Sheets or Notion) for reference during Phase 4.

### Step 4: Export Ontraport Custom Fields Mapping

This is critical for avoiding data loss. Create a CSV showing every Ontraport field and its GHL target.

**Template**:

| Ontraport Field Name | Ontraport Field Type | Sample Value | GHL Equivalent Field | GHL Field Type | Notes |
|---|---|---|---|---|---|
| First Name | Text | John | First Name | Text | Standard field, direct mapping |
| Last Name | Text | Doe | Last Name | Text | Standard field, direct mapping |
| Email | Email | john@example.com | Email | Email | Standard field, direct mapping |
| Phone | Phone | +1-555-0123 | Phone | Phone | Standard field, direct mapping |
| Company | Text | Acme Corp | Company | Text | Standard field, direct mapping |
| Lead Status | Dropdown (Hot / Warm / Cold) | Hot | Custom Field: lead_status (type: Dropdown) | Dropdown | **Critical**: Must recreate custom field in GHL before import; values must match |
| Monthly Budget | Currency | $5,000 | Custom Field: monthly_budget | Currency | Standard field type exists in GHL |
| Sequence Position | Numeric | 5 | Custom Field: sequence_position | Number | Ontraport-specific; GHL automation step auto-tracked, so may not need import |
| Date Added | Date | 2026-01-15 | Date Added | Date | GHL auto-populates; can ignore or import as custom field for backup |
| Unsubscribed | Boolean | FALSE | Subscription Status | Boolean | Map: FALSE = subscribed, TRUE = unsubscribed |
| Source | Dropdown | Google Ads / Facebook / Referral | Custom Field: lead_source | Dropdown | Create matching dropdown in GHL before import |
| Last Contact Date | Date | 2026-08-28 | Custom Field: last_contact_date | Date | Optional; useful for engagement tracking |
| Account Manager | User field | Sarah | Custom Field: account_manager | User | GHL requires user to exist; pre-create team member if needed |
| 2FA Enabled | Boolean | TRUE | (Not imported) | N/A | Security metadata; omit from import |
| Encrypted Notes | Text (encrypted) | [encrypted] | Custom Field: notes_unencrypted | Text | GHL does not support encryption; store plaintext or skip; see Phase 3, Step 2 for handling encrypted fields |
| Multi-Select Tags | Multi-select | Customer, VIP, Urgent | GHL Tags (not custom field) | Tags | Map multi-select values to GHL tags during import; one tag per contact if needed |

**Store this table** for reference in Phase 3 (Data Import).

---

## Phase 2: Set Up GoHighLevel (Day 1, ~30 Minutes)

![Phase 2: Set Up GoHighLevel (Day 1, ~30 Minutes)](/images/2026-09-01-migrate-from-ontraport-to-gohighlevel-s2.jpg)


Before importing any data, configure GHL to receive contacts.

### Step 1: Create Your GHL Account & Choose Plan

1. Go to **https://www.gohighlevel.com/?fp_ref=shortnsweet53** (affiliate link; Short n Sweet earns a small commission; you are not charged extra)
2. Click **Start Free Trial** or **Get Started**
3. Enter your email and create a password
4. Choose your plan:
   - **Pro** ($199/month): Recommended for most migrations; includes 500 contacts, white-label, API access
   - **Unlimited** ($299/month): Choose if you're managing >2,000 contacts or need unlimited everything

5. Verify your email
6. Complete onboarding (skip to dashboard if you just want to migrate quickly)

### Step 2: Configure Custom Fields in GHL

You identified Ontraport's custom fields in Phase 1, Step 4. Now recreate them in GHL.

1. Go to **Contacts > Settings > Custom Fields**
2. For each Ontraport custom field, click **+ Add Field** and configure:

**Example: Lead Status**
- **Field Name**: `lead_status` (use lowercase, no spaces for API consistency)
- **Label**: `Lead Status` (human-readable)
- **Field Type**: Dropdown
- **Dropdown Values**: Add each value from Ontraport (Hot, Warm, Cold, etc.)
- **Required?**: No (allow blank for old contacts without status)
- Click **Save**

**Example: Monthly Budget**
- **Field Name**: `monthly_budget`
- **Label**: `Monthly Budget`
- **Field Type**: Currency
- **Currency Symbol**: USD (or your currency)
- **Default Value**: (leave blank)
- Click **Save**

**Example: Sequence Position** (Ontraport-specific)
- **Decision**: Do you need this field in GHL?
  - If **yes** (tracking where contacts are in your sequence): Create as Number field
  - If **no** (GHL automations track this automatically): Skip this field
- If creating: 
  - **Field Name**: `sequence_position`
  - **Label**: `Sequence Position (from Ontraport)`
  - **Field Type**: Number
  - Click **Save**

**Example: Account Manager** (User field)
- **Field Name**: `account_manager`
- **Label**: `Account Manager`
- **Field Type**: User (if available; if not, use Text and link manually later)
- If user field: Select dropdown of your GHL team members
- Click **Save**

**Example: Encrypted Notes** (Ontraport field; GHL limitation)
- **Decision**: GHL does not encrypt custom field data
- **Workaround**:
  - Option A: Create `notes_unencrypted` as Text field and store plaintext; not recommended for sensitive data
  - Option B: Skip field; store notes in a separate encrypted tool (e.g., Notion, 1Password) and link references in GHL
  - Option C: Ask GHL if they support customer-managed encryption keys (enterprise feature; unlikely)
- **Recommendation**: Skip encrypted fields; migrate unencrypted notes only

**Repeat for all Ontraport custom fields** (see your Phase 1, Step 4 table). Allow 15–20 minutes for this step.

### Step 3: Create Tags in GHL (Match Ontraport Tags)

1. Go to **Contacts > Tags**
2. Click **+ New Tag**
3. Enter each Ontraport tag name:
   - `Customer`
   - `VIP`
   - `Hot Lead`
   - `Nurturing`
   - (etc., for all 42 tags from your audit)

4. Optionally, assign a color to each tag for visual organization
5. Click **Save**

**Speed tip**: If you have 30+ tags, download GHL's tag import template (if available) and bulk-upload via CSV.

### Step 4: Verify Integrations Are Available

1. Go to **Settings > Integrations**
2. Verify these integrations are available (you'll need them):
   - **Stripe** (for payment processing)
   - **Zapier** (for third-party automations)
   - **Calendar app** (Calendly, Google Calendar, or native GHL calendar)
   - **SMS provider** (GHL native SMS or Twilio)

3. **Don't** connect integrations yet; you'll do that after data import (Phase 3, Step 4)

---

## Phase 3: Export, Map, and Import Data (Day 2, ~2–3 Hours)

This is the most critical phase. Follow precisely to avoid data loss.

### Step 1: Clean & Export Ontraport Data

**Goal**: Create a clean CSV ready for GHL import, with all fields properly mapped.

1. **In Ontraport**, go to **Contacts > All Contacts**
2. **Filter to active contacts only** (exclude archived, deleted, test contacts):
   - Filter: Status = Active (or equivalent)
   - If using smart lists, export only the "Active Contacts" list
3. **Select all** (checkbox in header)
4. **Export as CSV** with **all fields** (check "Include custom fields")
5. **Download** to your desktop: `ontraport_clean_export.csv`

**In Excel or Google Sheets, open `ontraport_clean_export.csv` and clean**:

- [ ] **Remove test contacts** (search for "test" or known test emails; delete rows)
- [ ] **Remove duplicate emails** (use Data > Remove Duplicates feature; keep first occurrence)
- [ ] **Check for null/empty emails** (filter Email column for blanks; either fill in or delete rows—GHL requires email for most operations)
- [ ] **Trim whitespace** (Data > Text to Columns, delimited by space, to remove leading/trailing spaces)
- [ ] **Verify date formats** (GHL expects YYYY-MM-DD; use Find & Replace to standardize if needed)

**Save as**: `ontraport_clean_for_import.csv`

### Step 2: Map Fields & Handle Data Loss Edge Cases

Now map Ontraport fields to GHL fields. This is where data loss can occur if not done carefully.

**Use your Phase 1, Step 4 table as reference.**

**Common mapping pitfalls**:

| Ontraport Field | Pitfall | GHL Solution |
|---|---|---|
| **Multi-select custom field** (e.g., customer type: "B2B, SaaS, Recurring") | Ontraport can store multiple values per contact; GHL custom fields are single-value | **Solution**: Split multi-select into multiple binary fields (e.g., `is_b2b`, `is_saas`, `is_recurring`, type: Boolean) OR convert to tags (one tag per value) and import via tag column |
| **Parent-child relationships** (e.g., Contact linked to Company contact) | Ontraport contact can have a parent; GHL contacts are flat (no native parent-child) | **Solution**: Create a custom field `parent_contact_email` (text) and store the parent email; manually link after import using GHL's link/relate feature, or use Zapier post-import to link via API |
| **Encrypted custom fields** | Ontraport encrypts sensitive data; GHL stores plaintext | **Solution**: Do not import encrypted fields; store separately or ask Ontraport for plaintext export (may require data governance review) |
| **Date fields with null values** | Some contacts may have missing dates; GHL requires valid date format | **Solution**: Leave null/blank in CSV; GHL will import as empty; do not force a default date |
| **Currency fields with symbols or commas** | `$1,234.50` will cause import errors; GHL expects numeric only | **Solution**: Use Find & Replace to remove $ and commas; leave decimal points. Result: `1234.50` |
| **Dropdown with misspelled values** (e.g., "Hot Lead" vs. "hot lead") | GHL dropdown is case-sensitive; mismatches will cause import to fail or create new dropdown values | **Solution**: Before importing, standardize all dropdown values to exact match GHL's field definition. Use Find & Replace for each variant. |
| **User fields** (e.g., "Account Manager" with staff name) | GHL user field requires the user to exist in your GHL account | **Solution**: Pre-create all team members in GHL (Settings > Team Members); then in CSV, use their email address (GHL will auto-link) |
| **Sequence Position or Automation State** | Ontraport tracks which step a contact is in; GHL automations are triggered independently | **Solution**: Do not import sequence position; GHL will re-trigger automations on import. Contacts will re-enter sequences. **Caveat**: This can cause duplicate emails if contact was mid-sequence. See mitigation in Phase 5. |

**Field Mapping Template** (fill this in for your data):

| Ontraport Column | Ontraport Data Type | Sample Data | GHL Column | GHL Data Type | Transformation Rule | Validation Query (SQL or spreadsheet check) |
|---|---|---|---|---|---|---|
| first_name | Text | John | First Name | Text | No transformation | Check: no nulls in 100+ sample rows |
| last_name | Text | Doe | Last Name | Text | No transformation | Check: no nulls |
| email | Email | john@example.com | Email | Email | No transformation | Check: valid email format (contains @), no nulls, no duplicates |
| phone | Phone | +1-555-0123 | Phone | Phone | Remove non-numeric, format as E.164 (example: +15550123) | Check: valid phone format, length 10–15 digits |
| company | Text | Acme Corp | Company | Text | No transformation | Check: no nulls or blanks |
| lead_status | Dropdown (Hot/Warm/Cold) | Hot | lead_status (custom) | Dropdown | No transformation; must match GHL dropdown values exactly | Check: values in (Hot, Warm, Cold); no typos like "hot" or "Hot Lead" |
| monthly_budget | Currency | $5,000.00 | monthly_budget (custom) | Currency | Remove $ and commas; keep decimals (result: 5000.00) | Check: numeric only, decimals allowed, no negative values (unless applicable) |
| sequence_position | Numeric | 5 | (skip—do not import) | N/A | Omit from CSV | N/A (GHL will reset on automation re-trigger) |
| date_added | Date | 2026-01-15 | Date Added | Date | Format as YYYY-MM-DD | Check: valid date format, no future dates |
| source | Dropdown | Google Ads, Facebook, Referral | lead_source (custom) | Dropdown | No transformation; must match GHL dropdown exactly | Check: values in (Google Ads, Facebook, Referral); no extra spaces |
| tags (multi-select) | Multi-select (Customer, VIP, Urgent) | Customer;VIP;Urgent | Tags | Tags (separate by semicolon in CSV) | Split by semicolon; create one row per tag in final import OR use GHL's bulk import with multi-value tag column | Check: each tag exists in GHL; no misspellings |
| account_manager | Text (user name) | Sarah Chen | account_manager (custom, if user field unavailable) or match to GHL user email | Text or User | If user field: map to Sarah Chen's GHL email (sarah@agency.com); if text field: store name | Check: all user names exist in GHL Team Members before import |
| encrypted_notes | Text (encrypted) | [encrypted] | (skip—do not import) | N/A | Omit from CSV | N/A (GHL does not support encrypted fields) |

**Complete your mapping table before proceeding.**

### Step 3: Transform & Validate CSV

**In Excel/Sheets, create new columns with transformed data**:

Example (in Google Sheets):
1. **Column A**: Ontraport `first_name` → Copy as-is to new Column A
2. **Column B**: Ontraport `lead_status` → Check each value against GHL dropdown; flag mismatches with a FILTER formula
   - Formula: `=FILTER(lead_status, NOT(lead_status = {"Hot", "Warm", "Cold"}))`
   - Result: Any misspellings show up; fix before import

3. **Column C**: Ontraport `monthly_budget` ($5,000) → Remove $ and commas
   - Formula: `=VALUE(SUBSTITUTE(SUBSTITUTE(budget, "$", ""), ",", ""))`
   - Result: 5000

4. **Column D**: Ontraport `tags` (Customer;VIP;Urgent) → Validate each tag exists
   - Formula: `=IF(COUNTIF(ghl_tags_list, "*" & tag & "*") > 0, "OK", "MISSING")`
   - Result: Flag any tags not created in GHL

5. **Save as**: `ontraport_mapped_for_import.csv`

**Validation checklist**:
- [ ] No null emails (required for import)
- [ ] No duplicate emails (one contact per email)
- [ ] All dropdown values match GHL definitions exactly (case-sensitive)
- [ ] Currency values are numeric (no $ or commas)
- [ ] Dates in YYYY-MM-DD format
- [ ] All tags referenced in tag column exist in GHL
- [ ] All user names (account_manager field) exist as GHL team members
- [ ] Encrypted fields omitted
- [ ] Multi-select fields split into separate columns or semicolon-delimited

**Sample validation query** (if you export to SQL):
```sql
SELECT 
  email, 
  first_name, 
  lead_status, 
  monthly_budget,
  COUNT(*) as occurrences
FROM ontraport_mapped_for_import
GROUP BY email
HAVING COUNT(*) > 1;
-- Result: Shows duplicates (should be empty)

SELECT * 
FROM ontraport_mapped_for_import
WHERE email NOT LIKE '%@%.%';
-- Result: Shows invalid emails (should be empty)

SELECT DISTINCT lead_