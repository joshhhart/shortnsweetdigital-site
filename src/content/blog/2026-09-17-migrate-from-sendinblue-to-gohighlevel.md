---
title: "Migrate From Sendinblue to GoHighLevel: Step-by-Step"
description: "Move email contacts, automations, and SMS workflows from Sendinblue to GoHighLevel. Preserve subscriber data, rebuild workflows, and switch in 4–6 hours."
pubDate: 2026-09-17
lastUpdated: 2026-09-17
dateModified: 2026-09-17
tags: ["gohighlevel", "sendinblue", "email-migration", "crm-migration", "brevo"]
keywords: ["migrate sendinblue to gohighlevel", "brevo to gohighlevel migration"]
targetKeyword: "migrate from sendinblue to gohighlevel"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner. Since 2024, we have migrated 15+ agencies and service businesses from Sendinblue (now Brevo) to GoHighLevel, preserving email lists, automating SMS workflows, and consolidating CRM systems. This guide reflects hands-on migration experience and lessons learned from production deployments. We maintain commercial partnerships with GoHighLevel; Sendinblue/Brevo relationship is evaluation-only. We are not Sendinblue or Brevo staff. Migration complexity varies by list size, automation depth, and data quality; test with sandbox accounts before production cutover. This is third-party technical guidance, not official documentation from either platform."
auditPassed: false
draft: false
heroImage: "/images/2026-09-17-migrate-from-sendinblue-to-gohighlevel.jpg"
heroImageAlt: "Split-screen showing Sendinblue email dashboard on left, GoHighLevel CRM with email automation on right, migration arrow connecting them."
ogImage: "/images/2026-09-17-sendinblue-gohighlevel-og.jpg"
schemaType: "HowToGuide"
estimatedTime: "14 minutes to read; 4–6 hours hands-on setup"
audio: "/audio/2026-09-17-migrate-from-sendinblue-to-gohighlevel.mp3"
---

# Migrate From Sendinblue to GoHighLevel: Step-by-Step

You've been using Sendinblue (now rebranded as Brevo) for email marketing. Your subscriber list is clean, your workflows are running, and your SMS reminders are reliable.

But you've added more services to your agency. You need:

- **SMS that talks to your CRM** — When a contact replies to an SMS, it lands in the same record as their email history
- **Appointment scheduling integrated with email** — When a contact books, auto-send welcome email + create task
- **Payment links tied to customer history** — Invoice tied to contact, no manual copy/paste
- **One login instead of three** — Email + SMS + CRM all in one dashboard

You're asking:

- *Can I move my Sendinblue email list to GoHighLevel without losing subscribers?*
- *Do I rebuild every automation, or can I import workflows?*
- *What happens to my Sendinblue scheduled emails during the switch?*
- *How long does this take, and what could go wrong?*
- *Can I run both systems in parallel to test before switching?*

This guide walks you through the complete migration: exporting data, preparing GoHighLevel, rebuilding workflows, testing, and switching live.

By the end, you'll have your email list, SMS contacts, and core automations running in GoHighLevel with zero subscriber loss.

---

> **Key Takeaways**
> - **No direct integration exists** — Sendinblue and GoHighLevel do not sync automatically. You'll export contacts as CSV from Sendinblue, import into GoHighLevel, and manually recreate automations. Estimated time: 4–6 hours for a typical setup (1,000–5,000 contacts, 3–5 automations).
> - **Email list preservation** — Sendinblue exports include email, name, custom attributes, and subscription status. Import all to GoHighLevel in bulk (< 2 hours). No contacts lost if export is complete and import mapping is correct. Verify row counts before/after: Sendinblue row count should match GHL contact count post-import.
> - **SMS contacts merge during import** — If you have SMS subscribers in Sendinblue (tracked via phone number attribute), they'll merge with email contacts in GoHighLevel based on email or phone match. Result: one unified contact record with both email + SMS opt-in status. Reduces contact count and improves deliverability (no duplicate records).
> - **Automations don't port** — Sendinblue workflows cannot be exported to GoHighLevel. You'll rebuild them in GoHighLevel's workflow builder (takes 20–30 minutes per automation). Start with highest-ROI automations (welcome series, re-engagement, purchase follow-up) to validate before rebuilding all.
> - **Sendinblue contacts-per-month vs. GHL contacts-per-month** — Sendinblue charges for email subscribers; GHL charges for total contacts (CRM + email + SMS). A 5,000-contact list costs $120/month in Sendinblue (paid per 1,000). In GHL Pro ($199/month), you get 500 free, then $1.75/contact/month overage = $7,625/month for 5,000 contacts. Solution: Use GHL Unlimited plan ($299/month) for unlimited contacts. Cost analysis: Sendinblue $120 + separate CRM $50 = $170 vs. GHL Unlimited $299. GHL becomes cheaper when you stop paying for separate tools.
> - **Scheduled emails during migration** — Any Sendinblue emails scheduled to send during your migration window (transition period) will either send from Sendinblue or bounce if you pause the account. Recommendation: Plan migration for low-send periods (weekends, off-season). Pause all Sendinblue automations 48 hours before cutover. Move any high-value scheduled sends to GHL before cutover.
> - **Unsubscribe list handling** — Sendinblue exports suppress unsubscribes separately (Brevo has a "global unsubscribe" list). Import unsubscribes into GHL's suppression list to honor prior opt-outs. GHL provides a "Suppressed Contacts" upload feature (import via CSV). Check: unsubscribe count in Sendinblue vs. import to GHL to ensure compliance.
> - **Custom attributes and merge tags** — Sendinblue custom attributes (e.g., "company," "purchase_history," "industry") will export in the CSV. Map each to a GHL custom field during import. Sendinblue merge tags (e.g., `[FNAME]`, `[COMPANY]`) are different from GHL merge tags (`{{firstName}}`, `{{customField_Company}}`). When rebuilding workflows, use GHL syntax.
> - **Deliverability during migration** — Sendinblue's sender reputation is separate from GoHighLevel's. If you've been warming up a sending domain in Sendinblue and move to GHL, you'll start GHL's warm-up on that domain from scratch (risk: lower inbox placement for first 2–4 weeks). Mitigation: Use a new domain in GHL, or warm up the same domain in GHL 2 weeks before cutover. Monitor email-to-spam rates closely post-migration.
> - **List size cost calculation** — If your Sendinblue list is > 2,000 contacts and you use GHL Pro ($199/month, 500 free, $1.75 overage), it's more expensive than staying in Brevo. GHL Unlimited ($299/month, unlimited contacts) breaks even at ~700 contacts ($199 × 1.5 = ~$297). For lists 700–5,000: GHL Unlimited is cost-neutral to cheaper than Brevo, especially when bundled with CRM, SMS, and automation. For lists < 700: Brevo remains cheaper (email-only).
> - **Payment processing link** — GHL supports Stripe, Square, and custom payment links natively. Sendinblue does not. If you embed Sendinblue payment buttons in emails, recreate as GHL payment links or Stripe checkout links in the rebuilt email templates.
> - **Compliance audit** — Before cutover, verify: (1) GDPR double-opt-in stored (most agencies don't; accept single-opt-in in GHL if prior list was single-opt). (2) CAN-SPAM headers correct in GHL templates (From address, reply-to, unsubscribe link). (3) Unsubscribe list imported (honor Sendinblue suppressions). GHL includes unsubscribe link automation; test one email end-to-end before batch migration.
> - **Rollback plan** — Keep Sendinblue account active for 2 weeks post-GHL launch as insurance. If GHL import has issues or testing reveals problems, you can resume sending from Brevo without losing data. Cost: minimal (Sendinblue free tier covers 300 contacts; your list size costs the normal fee). After 2 weeks of successful GHL operation, downgrade Brevo to free tier or cancel.

---

## Part 1: Pre-Migration Checklist

### What You Need

- **Sendinblue/Brevo account** with admin access
- **GoHighLevel account** (created; paid plan selected)
- **Email client** (Gmail, Outlook) to test migrated emails
- **Spreadsheet** (Google Sheets or Excel) to log custom fields and automation mappings
- **1–2 hours** to review data quality in Sendinblue before export

### Step 1a: Audit Your Sendinblue Data

**1. Count total contacts**

1. Open Sendinblue (https://app-smtp.brevo.com)
2. Navigate to **Contacts** → **All contacts**
3. Note total count (e.g., 4,532 contacts)
4. Filter by **Status: Subscribed** → Note this count separately (some contacts may be unsubscribed already)

**Why?** You'll compare this count to GHL import count post-migration to verify data integrity.

**2. List custom attributes**

1. Go to **Contacts** → **Attributes**
2. Screenshot or document all custom attributes:
   - Standard: first name, last name, email
   - Custom: company, industry, purchase_date, phone, tags, etc.

**3. Identify unsubscribed/bounced contacts**

1. Go to **Contacts** → Filter by **Status: Unsubscribed** or **Status: Bounced**
2. Note the count (e.g., 412 unsubscribed)
3. Download this list (export as CSV) — you'll import these as suppressions in GHL to honor opt-outs

**4. Document active automations**

1. Go to **Automation** → **Active Workflows** (or **Campaigns** depending on Brevo UI version)
2. For each automation, note:
   - Name (e.g., "Welcome Series")
   - Trigger (e.g., "New contact added")
   - Steps (e.g., Email 1 at 0 min, Email 2 at day 1, Email 3 at day 3)
   - Conditions (e.g., "if replied, skip follow-up")
   - **Screenshot each workflow** for reference during rebuild in GHL

**5. Export email templates**

1. Go to **Templates** → **Templates Library**
2. For high-value templates (welcome email, invoice reminder, etc.), download HTML
3. Store in a folder on your computer (you'll import into GHL)

### Step 1b: Prepare GoHighLevel

**1. Create sandbox folder**

1. In GHL, go to **Contacts** → Create new folder/workspace
2. Name: "Migration Test" or "Sendinblue Import Test"
3. You'll import a sample CSV here first to test mapping before production import

**2. Create custom fields in GHL**

Map each Sendinblue attribute to a GHL custom field:

| Sendinblue Attribute | GHL Custom Field | Type |
|---|---|---|
| company | Company | Text |
| phone | Phone | Phone |
| industry | Industry | Select (dropdown) |
| purchase_date | Last Purchase | Date |
| customer_value | CLV (Customer Lifetime Value) | Number |

**Steps**:
1. Go to **Contacts** → **Custom Fields**
2. Click **Add Custom Field**
3. Name: match the Sendinblue attribute name
4. Type: choose matching type (Text, Phone, Date, Select, Number)
5. Save
6. Repeat for all attributes

**3. Enable SMS channel**

1. Go to **Settings** → **SMS**
2. Activate SMS (cost: $40–$100/month depending on volume)
3. Note your SMS number (provided by GHL)
4. **This is crucial if you have phone numbers in Sendinblue and want SMS opt-in carried over**

---

## Part 2: Export From Sendinblue

### Step 2a: Export Email Contacts

**1. Navigate to export tool**

1. Go to **Contacts** → **All contacts**
2. Click **⋮ (menu)** → **Export contacts**
3. Or use **Export** button (UI may vary by Brevo version)

**2. Select fields to export**

When the export dialog opens, select:
- ✅ First Name
- ✅ Last Name
- ✅ Email
- ✅ Phone (if available)
- ✅ All custom attributes (company, industry, tags, etc.)
- ✅ Subscription Status
- ✅ Created Date

**3. Filter (optional)**

To exclude unsubscribed contacts:
- Filter: **Status = Subscribed** (optional; you can clean later in GHL)
- Or export all and mark unsubscribed as "suppressed" during import

**4. Download CSV**

- Click **Export**
- Save as `sendinblue_contacts_export.csv`
- Verify file size (should be > 100 KB for 1,000+ contacts; if < 50 KB, something went wrong)

**5. Audit the CSV**

1. Open `sendinblue_contacts_export.csv` in Google Sheets or Excel
2. Spot-check:
   - Row count matches Sendinblue contact count
   - Email addresses are valid (scan for typos, blank cells)
   - Phone numbers are present (if you have them)
   - Custom fields populated (if any)
   - No sensitive data accidentally included (passwords, credit cards, etc.)

**Example CSV structure**:
```
First Name, Last Name, Email, Phone, Company, Industry, Subscription Status, Created Date
John, Doe, john@example.com, +15551234567, Acme Corp, Tech, Subscribed, 2024-01-15
Jane, Smith, jane@example.com, , Smith & Co, Services, Subscribed, 2024-02-20
```

### Step 2b: Export Unsubscribed Contacts (For Suppression List)

**1. Filter unsubscribed**

1. Go to **Contacts** → Filter by **Status = Unsubscribed** (or **Bounced**)
2. Select all → Click **Export**
3. Save as `sendinblue_suppressions.csv`

**2. Prepare suppression list for GHL**

Keep only: **Email** column
- Delete all other columns (name, company, etc.)
- Save as `ghl_suppressions.csv`
- You'll import this into GHL's suppression list during import

**Why?** GHL's suppression list (do-not-contact list) honors Sendinblue's prior opt-outs, protecting compliance.

### Step 2c: Export Unsubscribe Reason (Optional)

If your Sendinblue instance tracks unsubscribe reasons:

1. Go to **Contacts** → **Unsubscribed** folder
2. Review unsubscribe reasons (if column visible)
3. Add a custom GHL field for this (helps you understand why contacts left)
4. Document top reasons (e.g., "Too frequent," "Not relevant") for campaign review

---

## Part 3: Import Into GoHighLevel

### Step 3a: Prepare CSV for GHL Import

**1. Rename CSV columns to match GHL field names**

GHL expects specific column headers. Map your Sendinblue CSV columns:

| Sendinblue Column | GHL Column | Notes |
|---|---|---|
| First Name | firstName | Required |
| Last Name | lastName | Required |
| Email | email | Required; must be unique |
| Phone | phone | Optional; must include country code (e.g., +1) |
| Company | customField_Company | Map to GHL custom field created in Step 1b |
| Subscription Status | — | Skip; assume all imported contacts are opted-in (handle suppressions separately) |
| Created Date | — | Skip (GHL auto-timestamps import date) |

**Example GHL CSV**:
```
firstName, lastName, email, phone, customField_Company, customField_Industry
John, Doe, john@example.com, +15551234567, Acme Corp, Tech
Jane, Smith, jane@example.com, +15552345678, Smith & Co, Services
```

**2. Clean email column**

- Remove spaces, special characters
- Validate format: must contain @ and domain
- Remove blank rows
- Check for duplicates (Excel: Data → Remove Duplicates → Email column)

**3. Clean phone column**

- Ensure all phones include country code (+1 for US, +44 for UK, etc.)
- Remove hyphens, spaces, parentheses (GHL standardizes on +[country][number])
- Example: `(555) 123-4567` → `+15551234567`

**4. Validate data**

1. Open CSV in Google Sheets
2. Column → Data validation → Set range to emails
3. Check for errors (Google Sheets flags invalid emails)
4. Remove rows with blank emails
5. Final row count should match Sendinblue (or be slightly less if you removed unsubscribed)

### Step 3b: Import Into GHL (Test Run)

**1. Navigate to import in GHL**

1. Go to **Contacts** → Click **Import Contacts**
2. Or: **Contacts** → **⋮ (menu)** → **Bulk Import**

**2. Upload CSV**

1. Click **Choose File** → Select your cleaned CSV
2. GHL previews first 5 rows
3. Verify column mappings are correct (GHL auto-detects some)
4. Manually assign any columns GHL didn't auto-detect:
   - firstName → First Name
   - lastName → Last Name
   - email → Email
   - phone → Phone
   - customField_Company → Company (custom field created earlier)

**3. Choose import settings**

- **Update existing contacts?** → Select "No" for first test run (avoids overwriting if any duplicates exist)
- **Mark as subscribed?** → Select "Yes" (assume all imported are opted-in for email)
- **Destination folder** → Select "Migration Test" (sandbox folder created in Step 1b)

**4. Review summary**

GHL shows:
- Total records: e.g., 4,532
- Fields to import: firstName, lastName, email, phone, Company
- Any skipped rows (e.g., missing email address)

**5. Click Import**

- Progress bar appears
- Import typically takes 2–5 minutes for 5,000 contacts
- GHL sends confirmation email when complete

**6. Verify test import**

1. Go to **Contacts** → Check "Migration Test" folder
2. Count contacts (should match CSV row count)
3. Open 5 random contacts → Verify all fields present and correct
4. Check for duplicates (sort by email, look for identical entries)

**Troubleshooting**:
- If count doesn't match: Check GHL import log for skipped rows (usually blank emails or invalid formats)
- If fields missing: Return to CSV, verify column names exactly match GHL field names (case-sensitive)
- If duplicates appeared: GHL may have merged similar emails; verify manually

### Step 3c: Import Suppression List

**1. Navigate to suppression list**

1. Go to **Contacts** → **Suppressed Contacts** (or **Do Not Contact**)
2. Click **Import Suppressed List** (or **Upload**)

**2. Upload suppression CSV**

1. Select `ghl_suppressions.csv` (email addresses only)
2. GHL imports suppressions
3. Verify count matches Sendinblue unsubscribe count

**Why?** GHL will not send emails or SMS to suppressed contacts, honoring their prior opt-out from Sendinblue.

### Step 3d: Full Production Import

Once test import is verified:

**1. Create new folder for live contacts**

1. Go to **Contacts** → Create folder "Sendinblue Migration Live"
2. This separates test contacts from production

**2. Re-upload CSV to production folder**

1. Repeat Step 3b, but select "Sendinblue Migration Live" folder
2. This time, set **Update existing contacts?** → "Yes" (in case any duplicates with test folder)

**3. Verify production import**

1. Check final contact count
2. Spot-check 10 random contacts for data accuracy
3. Confirm no data loss from test to production

**Result**: All 4,000–5,000 contacts now in GoHighLevel with email, phone, and custom fields intact.

---

## Part 4: Rebuild Automations in GoHighLevel

![Part 4: Rebuild Automations in GoHighLevel](/images/2026-09-17-migrate-from-sendinblue-to-gohighlevel-s1.jpg)


### Step 4a: High-ROI Automations First

**Priority order** (highest payoff first):

1. **Welcome series** (new contact joins → 3-email sequence over 7 days) — Builds relationship, highest engagement
2. **Re-engagement** (no email open in 60 days → win-back email) — Recovers inactive contacts
3. **Purchase follow-up** (customer buys → thank you + upsell email) — Drives revenue
4. **Abandoned cart** (product added but not purchased → 3-email reminder) — Recovers lost sales
5. **Support/FAQ automation** (reply to specific email → auto-send FAQ response) — Reduces support load

Start with #1–2; if ROI is clear, rebuild #3–5.

### Step 4b: Build Welcome Series in GHL

**Trigger**: New contact added (or tagged "new_subscriber")

**Workflow structure**:
```
Step 1: Contact added to folder
  ↓
Step 2: Send Email 1 "Welcome to our newsletter" (immediate)
  ↓
Wait 1 day
  ↓
Step 3: Send Email 2 "Here's what we help with" (day 1)
  ↓
Wait 2 days
  ↓
Step 4: Send Email 3 "Last chance: free offer" (day 3)
```

**GHL steps**:

1. Go to **Automations** → **Workflows** → **Create New**
2. Name: "Welcome Series - Sendinblue Migration"
3. **Add Trigger**: Select "Contact Added to Folder" or "Contact Created"
4. Choose folder: "Sendinblue Migration Live"
5. **Add Action**: Send Email
   - Email template: "Welcome to our newsletter" (import from Sendinblue template if available)
   - Or create new: Subject "Welcome! Here's What You'll Learn", body "Hi {{firstName}}, thanks for joining..."
   - Save and continue
6. **Add Delay**: Wait 1 day (24 hours)
7. **Add Action**: Send Email
   - Subject: "Here's how we help [your industry]"
   - Body: Include brief bio, 2–3 success stories, CTA
8. **Add Delay**: Wait 2 days (48 hours)
9. **Add Action**: Send Email
   - Subject: "Limited-time offer just for you"
   - Body: Offer discount, free trial, or free consultation; CTA to book/purchase
10. **Test**: Create a test contact in GHL → Trigger workflow manually → Verify emails arrive in personal inbox
11. **Save and Publish**

**Expected performance**:
- Email 1 open rate: 40–60% (novelty effect)
- Email 2 open rate: 20–35%
- Email 3 open rate: 15–25%
- Click-through rate: 5–15% per email
- Conversion rate (from free offer): 1–5%

**ROI check**: If welcome series generates $50/customer × 2% conversion × 1,000 new contacts/month = $1,000/month incremental revenue. At $299/month GHL cost + $60 SMS, this automation pays for itself.

### Step 4c: Build Re-Engagement Automation

**Trigger**: No email open in 60 days

**Workflow**:
```
Step 1: Contact has not opened email in 60 days
  ↓
Step 2: Send re-engagement email "We miss you"
  ↓
Wait 7 days
  ↓
Step 3: If still no open, send final offer "Last chance discount"
  ↓
Step 4: If no response, tag "Re-engaged" or "Unsubscribe" (manual review)
```

**GHL steps**:

1. Create new workflow: "Re-Engagement Campaign"
2. **Add Condition**: "Last Email Open Date" is more than 60 days ago
3. **Add Action**: Send Email
   - Subject: "We miss you! Here's what you've missed"
   - Body: Highlight new content, success stories, or offers
   - CTA: "See what's new"
4. **Add Delay**: 7 days
5. **Add Condition**: If no open in last 7 days (branch logic)
   - **True branch**: Send Email "Final offer: 50% off this week"
   - **False branch**: Tag "Re-engaged" and pause
6. **Save and publish**

**Running this workflow**: Set to run weekly or monthly (GHL can run on schedule; Sendinblue required manual triggering). Over time, re-engagement campaigns typically recover 5–15% of inactive contacts.

### Step 4d: Import Email Templates

For remaining automations, import Sendinblue HTML templates:

**1. Export Sendinblue template HTML**

1. Go to **Templates** → Click template
2. Click **⋯** → **Edit HTML** or **Download**
3. Copy HTML code (Ctrl+A, Ctrl+C)

**2. Import to GHL**

1. Go to **Email Templates** → **Create Template**
2. Paste HTML into editor (or use drag-and-drop builder)
3. Update merge tags:
   - Sendinblue: `[FNAME]` → GHL: `{{firstName}}`
   - Sendinblue: `[COMPANY]` → GHL: `{{customField_Company}}`
4. Test send to yourself
5. Save as "Imported from Sendinblue - [Name]"

---

## Part 5: Testing & Validation

### Step 5a: Full Workflow Test

**Before going live, run end-to-end test**:

**1. Create test contact**

1. In GHL, create contact:
   - Name: "Test User"
   - Email: your personal email (e.g., test@yourdomain.com)
   - Phone: your cell phone
   - Tags: "test_contact"

**2. Manually trigger workflow**

1. Open workflow: "Welcome Series"
2. Click **Test** or **Send Test**
3. Verify:
   - Email 1 arrives in inbox within 2 minutes
   - Email 2 arrives 24 hours later
   - Email 3 arrives 72 hours later
   - All content renders correctly
   - Links work (click every link in email)
   - Unsubscribe link works
   - Reply-to address is correct

**3. Test SMS (if applicable)**

1. If you have SMS automations, add SMS action to workflow
2. Send test SMS to your cell phone
3. Verify delivery and content

**4. Test suppression list**

1. Add your email to suppression list
2. Try to send test email
3. GHL should block send and show "Contact suppressed"

### Step 5b: Parallel Running (Optional, Recommended)

Run both Sendinblue and GoHighLevel for 2 weeks before fully switching:

**Week 1–2: Both systems live**
- Send new campaigns from GHL (welcome series, re-engagement)
- Keep Sendinblue automations active as backup
- Monitor open rates, click rates, bounces from both platforms
- Watch for duplicate emails (subscriber gets same email from both systems)

**Monitoring checklist**:
- GHL email open rate within 5% of Sendinblue historical average (if not, check deliverability)
- GHL bounce rate < 2% (if > 2%, list quality may have degraded in import)
- SMS delivery rate > 95% (industry standard)
- Unsubscribe rate normal (< 0.5% per campaign)

**Week 3+: Full cutover to GHL**
- Pause all Sendinblue automations
- Set Sendinblue to "paused" (do not delete yet)
- Monitor GHL for 1 week for any issues
- After 1 week stable, delete Sendinblue workflows (backup HTML locally first)
- Keep Sendinblue account active at free tier for 30 days as rollback insurance

---

## Part 6: Post-Migration Checklist

### Step 6a: Verify Deliverability

**1. Authenticate sending domain in GHL**

1. Go to **Email Settings** → **Sending Domain**
2. Add your domain (e.g., campaigns@yourdomain.com)
3. GHL provides SPF, DKIM, DMARC records
4. Add records to your domain's DNS:
   - GHL SPF record
   - GHL DKIM record
5. Verify DNS propagation (GHL shows green checkmark when live)

**Why?** Unauthenticated domain = higher spam risk, lower inbox placement.

**2. Warm up sending reputation**

1. Day 1–3: Send to 100 engaged contacts (high open rate)
2. Day 4–7: Send to 500 engaged contacts
3. Week 2: Send to full list

**Why?** New sending domain has zero reputation. ISPs (Gmail, Outlook, Yahoo) gradually increase trust as they see engagement signals (opens, clicks, no complaints).

**3. Monitor bounce rate**

1. Go to **Email Reports** → Check bounce rate
2. Should be < 2% for imported list (old Sendinblue data may have expired addresses)
3. If > 2%:
   - Run email validation on list (third-party tool: ZeroBounce, NeverBounce)
   - Remove invalid addresses
   - Re-import cleaned list

### Step 6b: Compliance Audit

**1. GDPR / CCPA**

- ✅ Verify double-opt-in captured (if required in your region)
- ✅ Confirm consent records exist for high-risk contacts
- ✅ Suppression list imported (honor prior opt-outs)

**2. CAN-SPAM (US law)**

- ✅ From name and email address visible and accurate
- ✅ Reply-to email works
- ✅ Subject line not deceptive
- ✅ Unsubscribe link present in all emails
- ✅ Test unsubscribe (click link → verify suppressed)
- ✅ Physical mailing address not required for email (only postal mail)

**3. Text a sample contact**

- Send test SMS from GHL
- Verify SMS includes business name, opt-out instruction (e.g., "Reply STOP to unsubscribe")

### Step 6c: Document Changes for Team

**Create a handoff doc** for team members:

```markdown
# Migration: Sendinblue → GoHighLevel

## Key Changes

![Key Changes](/images/2026-09-17-migrate-from-sendinblue-to-gohighlevel-s2.jpg)

- Email + CRM now unified in GoHighLevel
- No more logging into 2 dashboards
- New merge tag syntax: {{firstName}} instead of [FNAME]
- SMS sending cost now bundled (no separate Twilio bill)

## Workflow Locations
- Welcome series: Automations → Workflows → "Welcome Series"
- Re-engagement: Automations → Workflows → "Re-Engagement Campaign"

## Contact Management
- All 4,500 contacts imported from Sendinblue
- Search by email, phone, or custom field
- Custom fields: Company, Industry, CLV (update as needed)

## Troubleshooting
- Email not sending? Check contact suppression status
- SMS not delivering? Verify phone number format (+1...)
- Merge tag showing as {{firstName}} in email? Ensure template uses GHL