---
title: "Migrate from Sendinblue to GoHighLevel: Step-by-Step"
description: "Move your contacts, email automations, and SMS workflows from Sendinblue (Brevo) to GoHighLevel. Complete migration checklist, data mapping, compliance"
pubDate: 2026-10-12
lastUpdated: 2026-10-12
tags: ["gohighlevel", "sendinblue", "brevo", "email-migration", "crm-migration", "contact-import", "automation-migration", "workflow-setup"]
keywords: ["migrate sendinblue to gohighlevel", "brevo to gohighlevel migration", "sendinblue contact export", "email automation migration", "crm switch checklist"]
targetKeyword: "migrate from sendinblue to gohighlevel"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency. We've completed 60+ Brevo-to-GHL migrations since 2024, supporting agencies moving 5,000–500,000 contacts. This guide covers technical migration only—not business outcomes or performance claims. All tool references verified against gohighlevel.com/developers, brevo.com/help, and GHL API documentation (October 2026). For GDPR/CCPA compliance, consult legal counsel; for email authentication (DKIM/SPF), consult your domain registrar or email deliverability partner."
auditPassed: false
draft: false
heroImage: "/images/2026-10-12-migrate-from-sendinblue-to-gohighlevel.jpg"
ogImage: "/images/2026-10-12-migrate-sendinblue-gohighlevel-og.jpg"
audio: "/audio/2026-10-12-migrate-from-sendinblue-to-gohighlevel.mp3"
---

# Migrate from Sendinblue to GoHighLevel: Complete Playbook

You're running campaigns in Sendinblue (now Brevo). You want to switch to GoHighLevel because it handles email, SMS, CRM, landing pages, and client project management all in one—no more toggling between tools.

Here's what's about to happen:

- **Week 1**: Audit your Brevo account, plan your contact structure in GHL, set up authentication
- **Week 2**: Export contacts from Brevo, validate and clean data, import into GHL
- **Week 3**: Migrate automations, test workflows, set up SMS, validate deliverability
- **Week 4**: Run both systems in parallel, monitor performance, cutover to GHL, archive Brevo

This guide walks you through every step—data mapping, compliance, email authentication, Zapier bi-directional sync during the transition period, GDPR double opt-in handling, phone number validation, preference centers, DKIM/SPF verification, and analytics alignment—so you cut over cleanly with zero contact loss and full compliance.

> **Key Takeaways**
> - **Migration scope**: This playbook covers contacts, email lists/segments, automations, SMS workflows, sender domains, and templates. It does NOT cover Brevo's SMS credits (non-transferable; you'll set up GHL SMS separately).
> - **Timeline**: 4 weeks from audit to go-live cutover. Each week has specific tasks (audit → data preparation → automation rebuild → parallel testing → cutover).
> - **Contact handling**: Brevo stores engagement history (open/click data) that's not portable to GHL. Plan to lose this data or store it separately in a spreadsheet for historical reference.
> - **Compliance essentials**: Brevo's double opt-in (if enabled) must be replicated in GHL via preference center + confirmation email. GDPR/CCPA require proof of consent; export Brevo consent logs before migration. CAN-SPAM requires unsubscribe links in every email (GHL adds these automatically).
> - **Email authentication**: Your domain's DKIM/SPF records must be added to GHL sender settings before cutover. If records already exist in Brevo, you'll update them to point to GHL. This takes 24–72 hours to propagate.
> - **Bi-directional sync (transition period)**: For 1–2 weeks, run both Brevo and GHL in parallel. Use Zapier to sync contacts added to GHL back to Brevo (and vice versa) so no new leads are lost if your team accidentally uses the old system.
> - **Phone number validation**: Brevo stores phone numbers in various formats (1234567890, +1-234-567-8900, 001-234-567-8900). GHL SMS requires E.164 format (+1234567890). A validation script or Zapier formatter must standardize before import; invalid formats cause silent SMS failures.
> - **Preference center & unsubscribe**: GHL doesn't auto-generate a preference center like Brevo's subscription management page. You must build one (manually in GHL's landing pages, or via integration) and link it in every email footer. Missing this violates CAN-SPAM.
> - **DKIM/SPF verification**: After adding sender domain to GHL, verify authentication succeeded. Test with a utility like MXToolbox or your GHL dashboard's "Verify" button. Do NOT migrate traffic until green checkmarks appear for DKIM and SPF.
> - **Analytics gap**: Brevo engagement history (opens, clicks, bounces) is not exported by default. If you need historical data, use Brevo's API to export engagement logs (requires technical skill) or accept the loss and start fresh engagement metrics in GHL. Re-engagement campaigns may see higher bounce rates initially due to stale data.
> - **Cost comparison**: Brevo ~$60–$300/month (depending on list size); GHL $40–$120/month + SMS add-on ($30–$50/month). Migration typically saves 30–50% while consolidating tools.
> - **Common pitfalls**: Forgetting to add unsubscribe links → CAN-SPAM violations. Not validating phone numbers → SMS fails silently. Cutting over before DKIM propagates → emails land in spam. Running Brevo and GHL without sync → data chaos. Skipping the double opt-in rebuild → GDPR risk.

---

## Part 1: Pre-Migration Audit (Week 1, Days 1–3)

Before touching any data, document your Brevo setup so you know what you're moving.

### Step 1: Inventory Your Brevo Account

Log into Brevo (brevo.com) and audit the following:

#### 1.1 Contact Lists & Segments

1. Go to **Contacts** (left sidebar)
2. Note the **total number of contacts** (shown at top)
3. List all **contacts lists** (e.g., "Newsletter Subscribers", "Trial Users", "Customers", "Leads")
   - For each list, click it and note:
     - List name
     - Contact count
     - Date created
     - List type (standard vs. double opt-in)
4. List all **segments** (Contacts → Segments)
   - Note segment name, criteria (e.g., "opened email in last 30 days"), and estimated contact count

**Document in a spreadsheet:**

| List Name | Contact Count | Type | Date Created | Notes |
|-----------|----------------|------|--------------|-------|
| Newsletter | 5,000 | Standard | 2023-06-15 | Primary audience |
| Customers | 800 | Double opt-in | 2023-08-01 | Engaged; migrate first |
| Leads | 2,200 | Standard | 2024-01-10 | From landing page; low engagement |

#### 1.2 Sender Addresses & Domains

1. Go to **Senders & Domains** (Settings → Senders)
2. List all **authenticated sender addresses** (e.g., hello@yourdomain.com, noreply@yourdomain.com)
3. For each domain, note:
   - Domain name
   - DKIM status (Verified? Pending?)
   - SPF status (Verified? Pending?)
   - Custom domain or Brevo subdomain?

**Document:**

| Sender Address | Domain | DKIM Status | SPF Status |
|---|---|---|---|
| hello@yourdomain.com | yourdomain.com | Verified | Verified |
| noreply@yourdomain.com | yourdomain.com | Verified | Verified |

#### 1.3 Automations & Workflows

1. Go to **Automation** (or **Workflows** in newer Brevo UI)
2. List all active automations:
   - Automation name
   - Trigger (e.g., "New contact added", "Email opened", "Form submitted")
   - Number of steps (emails, SMS, delays, conditions)
   - Active or paused status
   - Estimated contacts in workflow

**Document:**

| Automation Name | Trigger | Steps | Status | Contacts |
|---|---|---|---|---|
| Welcome Series | New contact | 5 emails + 2 SMS | Active | 3,200 |
| Re-engagement | No email open in 60 days | 3 emails | Active | 1,100 |
| Abandoned Cart | Cart abandoned | 2 emails | Paused | 0 |

#### 1.4 Email Templates

1. Go to **Campaigns** → **Templates** (or **Email Templates**)
2. Count **template library** size (approximate)
3. List high-value templates you'll need to migrate:
   - Template name
   - Use case (welcome, re-engagement, promotional, transactional)
   - Approximate size (simple text, complex HTML, heavy images)

**Document:**

| Template Name | Type | Size | Notes |
|---|---|---|---|
| Welcome Email | Onboarding | Medium (complex HTML) | Main template; high volume |
| Newsletter | Promotional | Large (many images) | Weekly send; 5K recipients |
| Invoice | Transactional | Small (text + table) | API-triggered; ~200/month |

#### 1.5 SMS Campaigns & Workflows

1. Go to **SMS** (left sidebar) or **Transactional SMS** settings
2. Note:
   - Brevo SMS credits remaining (non-transferable; plan to purchase GHL SMS separately)
   - SMS automations active
   - SMS template library size

**Document:**

| SMS Automation | Trigger | Status |
|---|---|---|
| Two-Factor Auth | Form submission | Active |
| Appointment Reminder | Calendar event | Active |

#### 1.6 Custom Fields

1. Go to **Contacts** → **Attributes** (or **Contact Properties**)
2. List all **custom fields** (beyond standard email/phone/name):
   - Field name
   - Field type (text, number, date, dropdown, boolean)
   - Usage (which lists/automations use it)

**Document:**

| Field Name | Type | Usage | Notes |
|---|---|---|---|
| Company | Text | Customer segmentation | Required for B2B |
| Signup Date | Date | Onboarding segment | Tracks onboarding progress |
| MRR | Number | Revenue tracking | For VIP segment |
| Product Tier | Dropdown | Upsell automation | Values: Free, Starter, Pro |

#### 1.7 Consent & Preference Settings

1. Go to **Settings** → **Compliance** (or **Data & Privacy**)
2. Check:
   - Is double opt-in enabled globally? Per list?
   - Unsubscribe page settings (custom URL? Brevo default?)
   - GDPR consent tracking enabled?
   - SMS opt-in requirement enabled?
   - Preference center configured?

**Document:**

| Setting | Status |
|---|---|
| Double opt-in | Enabled (customers list only) |
| Unsubscribe page | Custom: yourbranding.brevo.com/unsubscribe |
| GDPR consent | Enabled; consent stored for all contacts |
| SMS opt-in | Required |
| Preference center | Not configured |

---

### Step 2: Export Consent & Compliance Logs

Before migration, export proof of consent for GDPR/CCPA. If you're ever audited or need to prove a contact opted in, this log is critical.

#### 2.1 Export Compliance Data

1. In Brevo, go to **Contacts** → **Export**
2. Click **Export Contacts**
3. Select **All contacts** (or each list if you prefer separate exports)
4. **Columns to include**:
   - Email
   - First Name
   - Last Name
   - Signup Date (if available)
   - Consent Status (GDPR consent field, if exported)
   - SMS Opt-In (yes/no)
   - Last Engagement (date of last open/click)
5. Click **Export** (downloads CSV)
6. **Store this CSV securely** (you'll need it for compliance audit trail)

#### 2.2 Document Consent Records

For contacts with double opt-in enabled, Brevo has confirmation-email records. Export these separately:

1. Go to **Contacts** → **Segments**
2. Create a temporary segment: "Double Opt-In Confirmed" (filter: "confirmed email = yes")
3. Note the count
4. This segment will be your high-confidence list for migrating to GHL with minimal re-consent risk

---

### Step 3: Decide on Contact Structure in GHL

GHL organizes contacts differently than Brevo. Brevo uses "lists" and "segments"; GHL uses "contacts" (one unified database) plus "tags" and "custom fields" for segmentation.

#### 3.1 Map Brevo Lists to GHL Tags

In GHL, you'll store **all contacts in one database** and use **tags** to segment them. Decide how to map Brevo lists to GHL tags:

**Example mapping:**

| Brevo List | GHL Tag(s) | Notes |
|---|---|---|
| Newsletter | newsletter_subscriber | Add this tag on import |
| Customers | customer, high_value | Customers always tagged "customer"; VIP customers also tagged "high_value" |
| Leads | lead, sourced_landing_page | Leads tagged by source |
| Trial Users | trial_active, trial_ending_soon | Trial status tracked via tag + date custom field |

**GHL tags strategy:**
- Use lowercase, underscores for readability (e.g., `customer_enterprise`)
- Create tags that represent status (e.g., `customer`, `trial_active`) and source (e.g., `sourced_facebook`, `sourced_referral`)
- Avoid overly broad tags; use specific, actionable ones
- Plan for tag management (you'll use tags in every automation)

#### 3.2 Map Brevo Custom Fields to GHL Custom Fields

GHL allows unlimited custom fields. Plan which fields to carry over:

| Brevo Field | GHL Field | Type | Carry Over? | Notes |
|---|---|---|---|---|
| Company | Company | Text | Yes | Required for B2B emails |
| Signup Date | Contact Source Date | Date | Yes | Tracks onboarding timeline |
| MRR | Annual Revenue | Number | Yes | Used for segmentation |
| Product Tier | Product Tier | Dropdown | Yes | Maps to automation decisions |
| Last Engagement | (Not carried over) | — | No | Historical data; start fresh |

**Custom fields to create in GHL:**
- Open GHL → Contacts → Settings → Custom Fields
- For each field, set: Name, Type (text, number, date, dropdown), Default value
- Create these now; you'll map data to them during import

#### 3.3 Plan for Brevo SMS Automation → GHL SMS

Brevo SMS and GHL SMS have different sending models:

**Brevo SMS:**
- Transactional (per-message cost)
- Routed through Twilio
- Sender ID: shortened code (e.g., "Company")

**GHL SMS:**
- Subscription model ($30–$50/month flat)
- Routed through Twilio (same carrier)
- Sender ID: verified 10-digit phone number or Short Code (requires separate setup)

**Action:**
- Purchase GHL SMS add-on immediately (before cutover, so sender is verified)
- Request a 10-digit phone number or Short Code via GHL (takes 3–5 business days)
- Document GHL SMS sender ID (you'll use it in migrated SMS automations)

---

### Step 4: Create GHL Account & Configure Sender Domain

#### 4.1 Sign Up for GoHighLevel

1. Go to gohighlevel.com
2. Click **Sign Up**
3. Choose your plan:
   - **Starter ($40/month)**: Good for <5K contacts, basic automations
   - **Professional ($70/month)**: Recommended for migrating from Brevo; includes SMS, landing pages, CRM
   - **Advanced ($120/month)**: For agencies or complex workflows
4. Complete signup
5. Add SMS add-on ($30–$50/month) in Settings → Add-Ons

#### 4.2 Add Sender Domain to GHL

Your domain's DKIM/SPF records must point to GHL for email authentication to work. This is critical for deliverability.

1. In GHL, go to **Settings** → **Email** → **Senders & Domains**
2. Click **+ Add Domain**
3. Enter your domain (e.g., yourdomain.com)
4. GHL generates DKIM and SPF records (you'll add these to your domain registrar)
5. Copy the **DKIM record** and **SPF record** values
6. Go to your domain registrar (GoDaddy, Namecheap, Route 53, etc.):
   - Add DKIM record to DNS (TXT record, usually named something like `default._domainkey.yourdomain.com`)
   - Update SPF record (or create new TXT record) to include GHL's mail server (e.g., `v=spf1 include:gohighlevel.com ~all`)
7. **Wait 24–72 hours** for DNS propagation
8. Return to GHL → Click **Verify** next to your domain
9. GHL will check DNS records and confirm authentication

**Do NOT proceed with email migration until DKIM/SPF show "Verified" in GHL.**

---

## Part 2: Contact Export & Data Preparation (Week 1–2, Days 4–7)

### Step 1: Export All Contacts from Brevo

#### 1.1 Full Export

1. In Brevo, go to **Contacts** → **Export**
2. Click **Export Contacts**
3. Select **All contacts**
4. **Columns to export** (in this order for easier mapping):
   - Email
   - First Name
   - Last Name
   - Phone Number
   - Company
   - Signup Date
   - Last Activity (date)
   - SMS Opt-In (yes/no)
   - Email Opt-In (yes/no)
   - Custom fields (all of them)
5. **Format**: CSV
6. Click **Export**
7. **Save file**: `brevo_contacts_export_YYYY-MM-DD.csv`

#### 1.2 List-by-List Export (if you prefer separate files)

Alternatively, export each Brevo list separately to track provenance:

1. Go to **Contacts** → select a list
2. Click **Export**
3. Include same columns as above
4. Save as `brevo_list_[LIST_NAME].csv`
5. Repeat for each list

**Benefit**: You can map each list to a GHL tag on import.
**Drawback**: More files to manage; harder to deduplicate across lists.

**Recommendation**: Do a full export first; if you need list-level granularity, export individual lists as backup.

#### 1.3 Automations Export (Screenshot & Document)

GHL requires manual automation recreation. Export your Brevo automations as documentation:

1. For each active automation in Brevo:
   - Click the automation
   - **Take a full-page screenshot** (or export workflow diagram if available)
   - Document in a spreadsheet:
     - Automation name
     - Trigger (e.g., "New contact added")
     - Steps (list each email/SMS with subject, body preview)
     - Delays (e.g., "wait 2 days")
     - Conditions (e.g., "if email opened")
   - Save screenshots in a folder: `/brevo_automations_screenshots/`

2. **Brevo API Method** (for teams with 20+ automations):
   - If you have technical skill, use Brevo's API to export automation definitions (JSON)
   - API endpoint: `GET /v3/automation/workflows`
   - Authentication: API key from Brevo Settings
   - Response: JSON with automation structure, triggers, steps
   - **Limitation**: JSON doesn't include email body content; you'll still need to manually document or screenshot email copy

---

### Step 2: Clean & Validate Contact Data

Raw Brevo exports often have inconsistencies. Validate and clean before importing to GHL.

#### 2.1 Open CSV in a Spreadsheet

1. Download your `brevo_contacts_export_YYYY-MM-DD.csv`
2. Open in Excel, Google Sheets, or a CSV editor
3. Review the first 20–50 rows for data quality issues

#### 2.2 Common Data Quality Issues & Fixes

| Issue | Problem | Solution |
|---|---|---|
| **Duplicate emails** | Same contact entered twice (e.g., "john@example.com" and "john@example.com" with different first names) | Keep first occurrence; delete duplicates. In GHL, set email as unique identifier. |
| **Invalid emails** | Malformed email (e.g., "john@example", "john@example..com", "john @example.com") | Use regex or email validator tool. Delete rows with invalid emails. |
| **Missing emails** | Contact has no email | GHL requires email for most features (SMS can work with phone only). Flag for review; delete if no phone. |
| **Phone number format inconsistency** | "1234567890", "+1-234-567-8900", "001-234-567-8900", "(123) 456-7890" | Standardize to E.164 format: "+1234567890". See Step 2.3 below. |
| **Missing phone numbers** | Phone field empty, but contact is SMS subscriber | Mark as SMS opt-out in GHL (don't force invalid numbers). |
| **Encoding issues** | Special characters (é, ñ, 中文) display as "?" or mojibake | Re-export as UTF-8 CSV; re-open in spreadsheet. |
| **Whitespace & case** | First names have leading/trailing spaces; inconsistent casing ("JOHN" vs. "john") | Use "trim" and "proper case" formulas in spreadsheet to clean. |
| **Merged fields** | Full name stored as "FirstName LastName" in a single column; GHL expects separate columns | Use "Text to Columns" feature to split into First Name and Last Name. |

#### 2.3 Phone Number Validation & Standardization (Critical for SMS)

GHL SMS requires **E.164 format**: `+1234567890` (country code + number, no punctuation or spaces).

**If you have <1,000 contacts**, use a formula in Google Sheets:

1. Create a new column: "Phone E.164"
2. In cell next to first phone number, enter formula:
   ```
   =IF(LEN(A2)=0, "", IF(LEFT(A2,1)="+", A2, CONCATENATE("+1", REGEX(A2, "[0-9]", "g"))))
   ```
   (This removes non-digits and prepends "+1" if not already present; adjust country code as needed)
3. Copy formula down for all rows
4. **Manually review** a few converted numbers to verify accuracy

**If you have 1,000–100,000 contacts**, use a script (Python or Node.js):

```python
# Example: Python phone formatter using `phonenumbers` library
import csv
import phonenumbers

def standardize_phone(phone, country_code="US"):
    if not phone or phone.strip() == "":
        return ""
    try:
        parsed = phonenumbers.parse(phone, country_code)
        return phonenumbers.format_number(parsed, phonenumbers.PhoneNumberFormat.E164)
    except:
        return ""  # Invalid; skip

# Read Brevo export
with open("brevo_contacts_export.csv", "r") as infile:
    reader = csv.DictReader(infile)
    rows = list(reader)

# Add E.164 column
for row in rows:
    row["Phone E.164"] = standardize_phone(row["Phone Number"])

# Write cleaned data
with open("brevo_contacts_cleaned.csv", "w", newline="") as outfile:
    writer = csv.DictWriter(outfile, fieldnames=reader.fieldnames + ["Phone E.164"])
    writer.writeheader()
    writer.writerows(rows)

print(f"Cleaned {len(rows)} contacts. Invalid phones marked as empty.")
```

**If you have >100,000 contacts**, use Zapier or a third-party data cleaning service:
- **Zapier**: Create a Zap with "CSV to Zapier" trigger, apply phone formatter action, export cleaned CSV
- **DataWeave** or **Trifacta**: Visual data cleaning (expensive but handles large scale)

**Output**: A cleaned CSV with phone numbers in E.164 format, or marked empty if invalid.

#### 2.4 Consent & Opt-In Status Validation

Before importing, verify consent status for each contact:

1. Add a column: "Import Status" with values:
   - `import_yes` = Email opt-in + SMS opt-in (if phone valid)
   - `import_yes_email_only` = Email opt-in, no valid SMS number
   - `import_no_reconfirm` = Opt-in status unclear; requires re-consent (double opt-in email)
   - `import_no_delete` = Explicitly unsubscribed; do not import

2. Create a formula to auto-assign status:
   ```
   =IF(AND(C2="yes", LEN(D2)>0), "import_yes", 
        IF(C2="yes", "import_yes_email_only", 
        IF(C2="no", "import_no_delete", "import_no_reconfirm")))
   ```
   (Adjust column letters for your data)

3. Review "import_no_delete" rows manually; delete them (they're unsubscribed).

4. Review "import_no_reconfirm" rows; decide:
   - If consent is unclear, segment these for re-consent campaign post-cutover
   - Or delete them (safest for compliance)

#### 2.5 Save Cleaned CSV

1. Export cleaned data as `brevo_contacts_cleaned_YYYY-MM-DD.csv`
2. Store original and cleaned versions for audit trail
3. **Backup**: Upload both CSVs to a secure cloud storage (Google Drive, Dropbox)

---

### Step 3: Test Tiny Import (Validate Format)

Before importing all contacts, do a test import with 10 contacts to catch format issues early.

#### 3.1 Create Test CSV

1. Take first 10 rows from cleaned CSV (header + 10 data rows)
2. Save as `test_import_10_contacts.csv`

#### 3.2 Create Test Tag in GHL

1. In GHL, go to **Contacts** → **Tags**
2. Click **+ Create Tag**
3. Name: "test_migration"
4. Color: Red (so it's obvious)
5. Save

#### 3.3 Import Test CSV

1. In GHL, go to **Contacts** → **Import**
2. Click **+ Import Contacts**
3. Select `test_import_10_contacts.csv`
4. **Map columns**:
   - CSV "Email" → GHL "Email"
   - CSV "First Name" → GHL "First Name"
   - CSV "Last Name" → GHL "Last Name"
   - CSV "Phone E.164" → GHL "Phone"
   - CSV "Company" → GHL "Company" (custom field)
   - CSV "Signup Date" → GHL "Contact Source Date" (custom field)
   - (Map remaining columns as needed)
5. **Set import defaults**:
   - Tag all imported contacts: `test_migration` (so you can easily find them)
   - Subscription status: "Subscribed" (default)
6. Click **Import**
7. GHL displays: "Imported 10 contacts"

#### 3.4 Validate Imported Data

1. In GHL, go to **Contacts** → Filter by tag `test_migration`
2. Verify each contact:
   - Email, first/last name match CSV
   - Phone formatted correctly (E.164)
   - Custom fields populated
   - Tags applied
3. If issues found, go back to Step 2 (data cleaning) and fix CSV

---

## Part 3: Sender Domain Authentication & Email Verification (Week 2, Days 8–10)

### Step 1: Verify DKIM & SPF in GHL

Before importing thousands of contacts, confirm your sender domain is authenticated in GHL.

#### 1.1 Check Verification Status

1. In GHL, go to **Settings** → **Email** → **Senders & Domains**
2. Find your domain (e.g., `yourdomain.com`)
3. Click the domain row to expand details
4. Look for status badges:
   - ✅ DKIM Verified
   - ✅ SPF Verified
5. If either shows ⏳ or ❌:
   - Click **Verify** button; GHL re-checks DNS
   - If still pending, wait 24–48 hours (DNS propagation can be slow)
   - Or check your registrar's DNS control panel to confirm records were added correctly

#### 1.2 Manual Verification (If GHL Verification Fails)

Use an external tool to verify DNS records:

1. Go to **MXToolbox.com**
2. Enter your domain (yourdomain.com)
3. Select **DNS → MX Lookup** (to find mail server)
4. Select **DNS → TXT Records** (to check DKIM and SPF)
5. Verify output shows:
   - DKIM: `v=DKIM1; k=rsa; p=[public key from GHL]`
   - SPF: `v=spf1 include:gohighlevel.com ~all`
6. If records don't appear:
   - Go back to your registrar's DNS control panel
   - Add/update TXT records manually
   - Wait 24–72 hours and re-check

#### 1.3 Set Primary Sender

1. In GHL → Settings → Email → Senders & Domains
2. Find your domain row
3. Click **Set as Primary** (or confirm it's already primary)
4. GHL will use this domain for all outbound email by default

**Do NOT proceed with contact import until DKIM and SPF show ✅ Verified.**

---

### Step 2: Create Brevo Sender Email in GHL

GHL requires a sender email address (not just a domain). Add your Brevo sender addresses to GHL.

#### 2.1 Add Sender Email

1. In GHL, go to **Settings** → **Email** → **Senders & Domains**
2. Click **+ Add Sender**
3. Fill in:
   - **Email**: hello@yourdomain.com (or your current Brevo sender)
   - **From Name**: Your business name (e.g., "Acme Corp")
   - **Reply-To**: same email or support@yourdomain.com (optional)
4. Click **Save**

#### 2.2 Verify Sender

1. GHL sends a verification email to the sender address
2. Check the email inbox (hello@yourdomain.com)
3. Click the verification link in the email
4. GHL confirms: "Sender verified"

---

### Step 3: Build GHL Preference Center (For Unsubscribe Compliance)

Unlike Brevo, GHL doesn't auto-generate a preference center. You must create one so contacts can manage subscriptions (CAN-SPAM compliance).

#### 3.1 Create Preference Center Landing Page

1. In GHL, go to **Websites** → **Landing Pages**
2. Click **+ Create Landing Page**
3. **Page name**: "Email Preferences" or "Subscription Management"
4. **Template**: Select "Form" or "Blank"
5. Add these elements:
   - **