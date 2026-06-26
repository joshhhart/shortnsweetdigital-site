---
title: "Migrate from Klaviyo to GoHighLevel: 11-Step Playbook"
description: "Step-by-step guide to migrate email lists, automations, and segments from Klaviyo to GoHighLevel. Zero subscriber loss, parallel running, full checklist."
pubDate: 2026-06-26
lastUpdated: 2026-06-26
dateModified: 2026-06-26
tags: ["gohighlevel", "klaviyo", "email-marketing", "migration", "automation", "crm-switch"]
keywords: ["migrate from klaviyo to gohighlevel", "switch from klaviyo to gohighlevel", "klaviyo alternative", "gohighlevel email marketing", "email list migration"]
targetKeyword: "migrate from klaviyo to gohighlevel"
author: "Short n Sweet Digital"
auditPassed: false
draft: false
heroImage: "/images/2026-06-26-migrate-from-klaviyo-to-gohighlevel.jpg"
heroImageAlt: "Dashboard showing email list migration from Klaviyo to GoHighLevel with automated workflow setup"
ogImage: "/images/2026-06-26-migrate-klaviyo-to-gohighlevel-og.jpg"
schemaType: "HowTo"
audio: "/audio/2026-06-26-migrate-from-klaviyo-to-gohighlevel.mp3"
---

# Migrate from Klaviyo to GoHighLevel: 11-Step Playbook

You started with Klaviyo. It worked when your email list was small. But as you grew—adding SMS, landing pages, CRM workflows, and multi-channel automation—Klaviyo's per-contact pricing started to sting. At 50,000 subscribers, Klaviyo costs $1,200+/month. At 100,000, it's $2,400+/month.

GoHighLevel offers unlimited contacts for a flat $199–$497/month, plus SMS, landing pages, appointment scheduling, and full CRM in one platform. For email-heavy businesses, the switch saves $800–$2,000/month.

But migration is scary. You have years of email sequences, customer segments, and subscriber data locked in Klaviyo. One wrong step and you lose emails, duplicate subscribers, or break automation. This guide walks you through a safe 11-phase migration that keeps every subscriber, every automation, and every campaign—with zero downtime.

> **Key Takeaways**
> - Migrate email lists, automations, and segments from Klaviyo to GoHighLevel over 5–10 days using CSV export and GoHighLevel's import tools
> - Parallel running (keep Klaviyo live while testing GoHighLevel) prevents subscriber loss and gives you a 2-week rollback window
> - GoHighLevel's flat pricing ($199–$497/month unlimited contacts) saves $800–$2,500/month vs. Klaviyo, paying for itself within the first week
> - Critical steps: export subscriber data with custom fields, map email segments, rebuild automation workflows, verify deliverability with SPF/DKIM, test with 1% of list before going live
> - Timeline: 1–2 hours planning, 30 minutes import, 2–3 days testing, 3–5 days parallel running, then full switch

---

## Quick Reference: 11-Phase Timeline

| Phase | Task | Duration | Owner |
|-------|------|----------|-------|
| **Phase 1** | Pre-migration audit & backup | 1 hour | You + team |
| **Phase 2** | GoHighLevel account setup | 30 min | You |
| **Phase 3** | Email deliverability (SPF/DKIM) | 1–2 hours | You + IT/hosting provider |
| **Phase 4** | Export Klaviyo data | 15 min | You |
| **Phase 5** | Import to GoHighLevel | 30 min | You + GoHighLevel support (if needed) |
| **Phase 6** | Rebuild automations | 4–6 hours | You + team (async) |
| **Phase 7** | Migrate segments & tags | 2 hours | You |
| **Phase 8** | Parallel running & testing | 3–5 days | You + team |
| **Phase 9** | Subscriber verification & opt-in refresh | 2 days | Automated + manual review |
| **Phase 10** | Final QA before switchover | 4 hours | You + team |
| **Phase 11** | Pause Klaviyo, go live with GoHighLevel | 1 hour | You |

**Total timeline: 5–10 days** (work done in parallel, not sequentially)

---

## Why Migrate? Three Numbers

**Monthly cost comparison** (100,000 subscribers):
- Klaviyo: $2,400/month (tiered pricing, $0.024 per contact)
- GoHighLevel: $497/month (flat rate, unlimited contacts)
- **Monthly savings: $1,903** ($22,836/year)

**Feature comparison** (what you get in the switch):
- Klaviyo: Email + SMS (separate add-on)
- GoHighLevel: Email + SMS + landing pages + CRM + appointment scheduling + automations + forms + surveys

**Timing** (when to migrate):
- Migrate when your Klaviyo bill exceeds $400/month (ROI flips in your favor immediately)
- Or migrate when you need SMS + landing pages (avoid building in two separate tools)
- Or migrate when you're adding e-commerce CRM features Klaviyo doesn't offer natively

If you have <10,000 subscribers and pay <$300/month for Klaviyo, migration ROI is slower—but the unified platform benefit remains.

---

## Phase 1: Pre-Migration Audit & Backup

Before touching anything, document your current Klaviyo setup. This becomes your roadmap and your insurance policy.

### Step 1: Audit Your Email Lists

1. Go to **Klaviyo** → **Lists** (left menu)
2. Count your lists and record:
   - List name
   - Subscriber count
   - List type (double opt-in, single opt-in, imported, SMS, etc.)
   - Creation date

**Example**:
- "Newsletter" → 45,000 subscribers (double opt-in)
- "SMS Promotions" → 12,000 subscribers (single opt-in)
- "Abandoned Cart" → 3,500 subscribers (dynamic)

**Why**: You need to know how many separate lists exist. GoHighLevel uses unified contacts + tags/segments, so you'll convert each Klaviyo list into a GoHighLevel tag or segment.

### Step 2: Audit Your Automations

1. Go to **Klaviyo** → **Automations** (left menu)
2. For each automation, document:
   - Name of automation
   - Trigger (e.g., "New subscriber", "Abandoned cart", "Post-purchase")
   - Number of emails in the sequence
   - Key segments/conditions
   - Status (active, paused, archived)

**Example**:
- "Welcome Series" → Trigger: New subscriber → 5 emails → Active
- "Cart Abandonment" → Trigger: Abandoned cart (after 1 hour) → 3 emails → Active
- "VIP Loyalty" → Trigger: 5+ purchases → 1 email per month → Active

**Why**: You'll rebuild these workflows in GoHighLevel. Knowing the structure upfront saves debugging time.

### Step 3: Export Custom Fields & Attributes

1. Go to **Klaviyo** → **Settings** → **Profile Properties** or **Custom Properties**
2. List all custom fields (not just email, first name, last name):
   - Phone number
   - Company
   - Purchase history
   - Lead score
   - Subscription plan (e.g., "Pro", "Basic")
   - Industry
   - etc.

**Why**: GoHighLevel imports these as custom fields too. You want to ensure no data is lost.

### Step 4: Download Full Backup

1. Go to **Klaviyo** → **Settings** → **Account** (or **Data Management**)
2. Look for **"Export"** or **"Data Download"** option
3. Request a full export of:
   - All contacts
   - All lists
   - Automation history
   - Segment definitions
4. Wait for the export email (usually 10 minutes to 2 hours)
5. Download the ZIP file and save it locally

**Why**: You now have an offline backup. If something goes wrong during migration, you can re-import from this backup or roll back to Klaviyo entirely.

### Step 5: Screenshot Your Automations & Campaigns

1. For each active automation, take a screenshot of:
   - Trigger settings
   - Email content (subject, preview, body)
   - Conditional branches (if any)
   - Send timing
2. Save screenshots in a folder: `"Klaviyo_Migration_Backup/Automations/"`

**Why**: Visual reference while rebuilding in GoHighLevel. Text copy prevents typos when recreating sequences.

---

## Phase 2: GoHighLevel Account Setup

Set up your GoHighLevel account before importing data.

### Step 1: Create Your Account

1. Go to **[gohighlevel.com](https://www.gohighlevel.com/?fp_ref=shortnsweet53)**
2. Click **"Start Free Trial"** (14-day free access, no credit card)
3. Fill in:
   - Company name
   - Email
   - Phone
   - Password
4. Choose your plan:
   - **Starter** ($99/month) — Up to 2,500 contacts (skip if you have >2,500)
   - **Pro** ($199/month) — Up to 10,000 contacts (most common for email migrations)
   - **Unlimited** ($497/month) — Unlimited contacts (best ROI if you have >10,000)
5. Verify your email and log in

### Step 2: Set Up Your Team & Roles (Optional)

If multiple team members will manage email:

1. Go to **Settings** → **Team**
2. Invite team members: `your-team@company.com`
3. Set roles:
   - **Admin** — Can change settings, manage email, delete campaigns
   - **Editor** — Can create/edit campaigns and automations
   - **Viewer** — Read-only access to reports

**Why**: Prevents accidental deletion of campaigns and clarifies who manages what during the migration.

### Step 3: Customize Your Account Settings

1. Go to **Settings** → **General**
2. Update:
   - **Company logo** (appears in email footer)
   - **Time zone** (affects send times)
   - **Email sender name** (e.g., "Your Company Name")
   - **From address** (e.g., "noreply@yourcompany.com")

---

## Phase 3: Email Deliverability (SPF, DKIM, CNAME)

Critical step. Skip this and your emails go to spam or bounce.

### Why This Matters

GoHighLevel sends emails from your domain (e.g., `emails.yourcompany.com`). Email providers (Gmail, Outlook) verify that you authorized GoHighLevel to send on your behalf. Verification happens via DNS records: SPF and DKIM.

Without these, your emails get rejected or marked as spam.

### Step 1: Get Your DNS Details from GoHighLevel

1. Go to **Settings** → **Email Deliverability** or **SMTP Settings**
2. Look for:
   - **SPF record** (usually something like `v=spf1 include:sendgrid.net ~all`)
   - **DKIM record** (long string, e.g., `v=DKIM1; k=rsa; p=MIGf...`)
   - **CNAME or subdomain** (e.g., `email.yourcompany.com`)
3. Copy these values and save them in a text file

### Step 2: Add SPF Record to Your DNS

1. Go to your domain registrar or hosting provider (GoDaddy, Namecheap, Bluehost, etc.)
2. Find **DNS Management** or **Advanced Settings**
3. Add a new **TXT record**:
   - **Name/Host**: `@` (or leave blank)
   - **Type**: `TXT`
   - **Value**: The SPF record from GoHighLevel
4. Save and wait 1–24 hours for propagation

### Step 3: Add DKIM Record to Your DNS

1. In your DNS manager, add a new **TXT record**:
   - **Name/Host**: Usually `default._domainkey` or similar (check GoHighLevel docs for exact name)
   - **Type**: `TXT`
   - **Value**: The DKIM record from GoHighLevel
2. Save and wait 1–24 hours for propagation

### Step 4: Verify Records in GoHighLevel

1. Go back to **Settings** → **Email Deliverability**
2. Click **"Verify DNS"** or **"Check DKIM/SPF"**
3. GoHighLevel checks if records are live and correct
4. Once verified, you'll see a green checkmark

**Timeline**: DNS propagation can take 1–24 hours. Start this early in your migration.

### Step 5: Warm Up Your Sending IP (Optional but Recommended)

If you're sending from a new IP address, email providers may initially throttle or reject your mail. Warming up means gradually increasing send volume over 7–10 days.

**Example warm-up schedule**:
- Day 1: Send to 100 subscribers
- Day 2: Send to 500
- Day 3: Send to 1,000
- Day 4–7: Increase by 2x each day
- Day 8+: Send to full list

GoHighLevel often handles IP warming automatically, but check with support.

---

## Phase 4: Export Data from Klaviyo

### Step 1: Export Your Contact List

1. Go to **Klaviyo** → **Lists** (or **Contacts**, depending on version)
2. Select the list you want to export
3. Click **"Export"** or **"Download"** (usually three-dot menu)
4. Choose format: **CSV** (most compatible)
5. Include columns:
   - Email
   - First name
   - Last name
   - Phone
   - Custom properties (subscription plan, purchase history, etc.)
   - Signup source
   - Signup date
6. Download the CSV file
7. Repeat for each list (or, if Klaviyo allows, export all contacts at once)

**Save files as**: `Klaviyo_Export_[ListName]_[Date].csv`

### Step 2: Organize Your Export Files

Create a folder structure:

```
Klaviyo_Migration/
├── Lists/
│   ├── Newsletter_45000.csv
│   ├── SMS_Promotions_12000.csv
│   └── Abandoned_Cart_3500.csv
├── Automations/
│   ├── Welcome_Series_screenshot.png
│   ├── Cart_Abandonment_screenshot.png
│   └── VIP_Loyalty_screenshot.png
└── Backup/
    └── Full_Klaviyo_Export_2026-06-26.zip
```

**Why**: Keeps everything organized. You'll reference these files repeatedly during phases 5–10.

### Step 3: Verify Export Data Quality

1. Open one of your CSV exports
2. Scan for:
   - Missing emails (filter for blank "Email" column)
   - Duplicates (sort by email, look for repeats)
   - Invalid phone numbers (too short, wrong format)
3. Note any data issues (you'll clean them in GoHighLevel's import tool)

---

## Phase 5: Import Data into GoHighLevel

### Step 1: Prepare Your CSV for Import

1. Open your Klaviyo export CSV in Excel or Google Sheets
2. Verify column headers match GoHighLevel's expected format:
   - **Email** (required)
   - **First Name** (optional but recommended)
   - **Last Name** (optional)
   - **Phone** (optional)
   - **Custom fields** (if your GoHighLevel plan supports them)
3. Remove extra columns you don't need
4. Remove rows with blank emails
5. Save as CSV

**Example cleaned CSV**:
```
Email,FirstName,LastName,Phone,SubscriptionPlan,Source
john@example.com,John,Doe,555-0123,Pro,Website Form
jane@example.com,Jane,Smith,555-0456,Basic,Referral
```

### Step 2: Create Your First List/Segment in GoHighLevel

1. Go to **Contacts** (or **CRM**)
2. Click **"Create New List"** or **"Create Segment"** (GoHighLevel terminology varies)
3. Name it: **"[List Name] - From Klaviyo"** (e.g., "Newsletter - From Klaviyo")
4. Save

**Why**: You need a destination before importing. Each Klaviyo list becomes a GoHighLevel segment or tag.

### Step 3: Import CSV into GoHighLevel

1. Go to **Contacts** → **Import**
2. Click **"Upload CSV"**
3. Select your cleaned CSV file
4. GoHighLevel shows a preview of columns
5. **Map columns**:
   - CSV column "Email" → GoHighLevel field "Email"
   - CSV column "FirstName" → GoHighLevel field "First Name"
   - CSV column "Phone" → GoHighLevel field "Phone"
   - CSV column "SubscriptionPlan" → GoHighLevel custom field "Subscription Plan" (if available)

**Critical mappings** (must be correct):

| Klaviyo Column | → | GoHighLevel Field |
|---|---|---|
| **Email** | → | **Email** |
| **First Name** | → | **First Name** |
| **Last Name** | → | **Last Name** |
| **Phone** | → | **Phone** |
| **List membership** | → | **Tags** (e.g., "Newsletter", "SMS_Promotions") |

6. Set **tag** or **segment** for this import (e.g., "Newsletter" tag)
7. Click **"Import"**

**Timeline**: Importing 100,000 contacts takes 10–30 minutes. GoHighLevel sends you an email when it's complete.

### Step 4: Verify Import Success

1. Go to **Contacts** → **All Contacts**
2. Check the count (should match your Klaviyo export count ±1%)
3. Search for a few test contacts by email
4. Verify names, phone, and custom fields are populated
5. If issues found, ask GoHighLevel support to re-import with corrected mappings

---

## Phase 6: Rebuild Automations in GoHighLevel

This is the lengthiest phase. Plan 4–6 hours depending on automation complexity.

### Step 1: Create Your First Automation

1. Go to **Automations** (or **Workflows**/**Sequences**)
2. Click **"Create New"** or **"New Automation"**
3. Name it (e.g., "Welcome Series - From Klaviyo")
4. Choose a **trigger**:
   - **New subscriber** — When contact added to a segment/tag
   - **Form submission** — When someone fills your form
   - **Tag added** — When a tag is manually applied
   - **Custom trigger** — Advanced conditional logic

**Example: Rebuild "Welcome Series" automation**

**Trigger**: New subscriber (contacts tagged "Newsletter")

1. Click **"Set Trigger"**
2. Choose **"Tag Added"** or **"Contact Subscribed to List"**
3. Select tag/list: "Newsletter"
4. Click **"Save Trigger"**

### Step 2: Build the Automation Steps

1. Click **"Add Action"**
2. Choose action type:
   - **Send Email** — Send a single email
   - **Wait** — Pause X hours/days
   - **Conditional Split** — Branch based on user behavior (opened email? clicked link?)
   - **Update Contact** — Change a field (mark as "VIP", add tag)
   - **Trigger Sequence** — Start another automation

**Example: Welcome Series with 5 emails**

**Step 1**: Send Email #1 (Subject: "Welcome to [Your Company]!")
- Compose email in the builder or paste HTML from Klaviyo screenshot
- Click **"Save"**

**Step 2**: Wait 1 day
- Click **"Add Action"** → **"Wait"**
- Set time: 1 day
- Click **"Save"**

**Step 3**: Send Email #2 (Subject: "Here's how to get started")
- Click **"Add Action"** → **"Send Email"**
- Compose email
- Click **"Save"**

**Step 4**: Wait 2 days
- Add another **"Wait"** action (2 days)

**Step 5**: Send Email #3 (Subject: "Pro tips from our team")
- Add another **"Send Email"** action

**Step 6–10**: Repeat pattern for emails 4 and 5

**Final result**: Your automation has the sequence: Email 1 → Wait → Email 2 → Wait → Email 3 → Wait → Email 4 → Wait → Email 5

### Step 3: Test the Automation

1. Create a test contact: `your-test-email+automation-test@company.com`
2. Apply the trigger (add the "Newsletter" tag manually)
3. Wait for the first email to arrive (usually within 5 minutes)
4. Click email and verify:
   - Subject line correct
   - Content displays properly
   - Links work
   - Footer includes unsubscribe
5. Wait for the second email (trigger says 1 day delay, but GoHighLevel sends immediately in test mode)
6. Repeat for all emails

**If email doesn't arrive**:
- Check GoHighLevel **Email Logs** (Contacts → Email History)
- Look for error messages (bounced, marked as spam, etc.)
- Verify SPF/DKIM are set up correctly (Phase 3)
- Try sending a test email directly (not via automation)

### Step 4: Repeat for All Automations

Repeat Steps 1–3 for each Klaviyo automation you documented in Phase 1, Step 2.

**Typically**:
- Welcome series: 4–6 emails → 30 minutes to rebuild
- Cart abandonment: 3–5 emails → 20 minutes
- Post-purchase: 2–3 emails → 15 minutes
- VIP loyalty: 1–2 emails → 10 minutes

**Total: 4–6 hours for most businesses.**

---

## Phase 7: Migrate Segments & Tags

Segments in Klaviyo (e.g., "high-value customers", "inactive") become tags or segments in GoHighLevel.

### Step 1: Document Your Segments

From Phase 1, list all Klaviyo segments:
- Segment name
- How it's defined (e.g., "customers who spent >$1,000")
- Number of people in segment
- Whether it's dynamic (updates automatically) or static (created once)

**Example**:
- "High-Value Customers" → Spent >$1,000 → 850 people → Dynamic
- "Inactive" → No purchase in 6 months → 2,100 people → Dynamic
- "VIP Trial Users" → Signed up for free trial in last 30 days → 120 people → Static

### Step 2: Recreate Segments in GoHighLevel

1. Go to **Contacts** → **Segments** (or **Tags**)
2. Click **"Create New Segment"**
3. Name: "High-Value Customers"
4. Set conditions:
   - **Custom field** "Total Spent" **is greater than** "$1000"
   - (Or manually tag users if GoHighLevel doesn't have the custom field)
5. Click **"Save"**

**Note**: If GoHighLevel doesn't have your custom field yet, ask support or manually tag contacts later.

### Step 3: Apply Tags to Imported Contacts

For static segments (created once), manually tag:

1. Go to **Contacts** → **All Contacts**
2. Filter by the segment criteria (e.g., "Last purchase date" < 6 months ago)
3. Select all matching contacts
4. Bulk action: **"Add Tag"** → "Inactive"
5. Click **"Apply"**

Or, use **automation to apply tags**:
1. Create an automation that tags old/inactive contacts automatically (more scalable)

---

## Phase 8: Parallel Running & Testing (3–5 Days)

This is your safety net. Keep Klaviyo live while testing GoHighLevel.

### Step 1: Pick a Test Segment (1% of List)

1. In GoHighLevel, select a small segment (e.g., 1,000 contacts or 1% of list, whichever is smaller)
2. Send a test campaign to this segment only
3. Monitor:
   - **Delivery rate** (should be >98%)
   - **Bounce rate** (should be <2%)
   - **Spam complaints** (should be 0%)
   - **Open rate** (compare to Klaviyo baseline)
   - **Click rate** (compare to Klaviyo baseline)

### Step 2: Monitor Email Health Metrics

1. Go to **Campaigns** → **[Your Test Campaign]** → **Analytics**
2. Wait 24 hours for data to populate
3. Check:
   - **Delivery**: Did emails arrive?
   - **Bounce rate**: >5% = possible deliverability issue (check SPF/DKIM again)
   - **Complaint rate**: >0.1% = possible content issue (may trigger spam filters)

**Target metrics** (based on GoHighLevel baseline):
- Delivery rate: 95–99%
- Bounce rate: 0–5%
- Complaint rate: 0–0.1%
- Open rate: 15–30% (depends on industry)

### Step 3: Send Weekly Campaigns (1–2 Weeks)

1. Run 1–2 normal campaigns through GoHighLevel while Klaviyo continues
2. Track metrics over time (watch for decline)
3. Ask team: "Is GoHighLevel's interface easier than Klaviyo?"

### Step 4: Monitor Subscriber Feedback

1. Watch for unsubscribe requests ("Why am I getting duplicate emails?")
2. Check support email/chat for complaints about GoHighLevel emails
3. If complaints are few (<0.5%), you're safe to proceed

### Step 5: Check Automation Performance

1. Trigger automations on test contacts
2. Verify emails arrive in sequence
3. Verify timing is correct (wait 1 day = arrives ~24 hours later)
4. Check that links and personalization work

---

## Phase 9: Subscriber Verification & Opt-In Refresh

Legal requirement in many jurisdictions (GDPR, CAN-SPAM). Verify subscribers want GoHighLevel emails.

### Step 1: Pause Klaviyo Automations (Keep Transactional)

1. Go to **Klaviyo** → **Automations**
2. Pause all marketing automations (welcome series, promotions, etc.)
3. Keep transactional automations running (order confirmation, password reset)

**Why**: Prevents duplicate emails (one from Klaviyo, one from GoHighLevel).

### Step 2: Send a Re-Confirmation Email (Optional)

If your list is old (>2 years) or contains purchased emails:

1. In GoHighLevel, create a campaign: "Confirm your email with [Your Company]"
2. Include call-to-action: "Click here to stay subscribed"
3. Send to your full list
4. Wait 7 days
5. Remove non-clickers (optional but recommended to clean list)

**Why**: This is common practice when switching platforms. Improves list quality and ensures subscribers actively want your emails.

### Step 3: Check Unsubscribe Compliance

1. In GoHighLevel, verify **unsubscribe link** is present in all emails (legally required)
2. Test unsubscribe button (click it, confirm it works)
3. Verify unsubscribe removes contact from future emails

---

## Phase 10: Final QA Before Switchover (4 Hours)

### Step 1: Run a Full Checklist

- [ ] All Klaviyo lists imported to GoHighLevel
- [ ] All automations rebuilt and tested
- [ ] SPF/DKIM/CNAME verified (green checkmark in GoHighLevel)
- [ ] Test campaign sent and metrics are healthy
- [ ] Team trained on GoHighLevel interface
- [ ] Automations paused in Klaviyo
- [ ] Backup of Klaviyo data saved locally
- [ ] Unsubscribe links tested and working
- [ ] Custom fields migrated
- [ ] Segments/tags recreated

### Step 2: Send a Full-List Test Campaign

1. Create a campaign in GoHighLevel
2. Send to 100% of your list
3. Subject: "Quick test – [Your Company] email delivery test"
4. Content: "Hi {{FirstName}}, we're testing our new email system. No action needed. Thanks!"
5. Wait 24 hours
6. Check metrics:
   - Delivery >98%
   - Bounce <2%
   - Complaints 0–0.1%

### Step 3: Team Sign-Off

Get confirmation from your team:
- Marketing manager: "Automations are working, GoHighLevel is intuitive"
- Customer support: "No complaints about duplicate emails or delivery"
- Leadership: "Cost savings clear, no show-stoppers"

---

## Phase 11: Go Live (Pause Klaviyo, Activate GoHighLevel)

### Step 1: Set a Switchover Time

Pick a low-traffic time:
- Early morning (6–8 AM your time zone)
- Mid-week (Tuesday–Thursday)
- Avoid holidays and peak sales periods

### Step 2: Stop Sending from Klaviyo

1. Go to **Klaviyo** → **Automations**
2. **Pause** all remaining active automations
3. Verify all automations show "Paused" status
4. Do NOT delete automations (keep as backup for 30 days)

### Step 3: Start Sending from GoHighLevel

1. In GoHighLevel, verify all automations are set to **"Active"** or **"Live"**
2. Send your first live campaign (or your next scheduled campaign) through GoHighLevel

### Step 4: Monitor for 48 Hours

Check GoHighLevel metrics every 12 hours:
- Are emails delivering?
- Are automations triggering?
- Are open rates healthy?
- Any spike in bounces or complaints?

If issues appear:
- Check **Email Logs** for delivery errors
- Pause problematic automations
- Contact GoHighLevel support
- Use your Klaviyo backup to resend (short-term fallback)

### Step 5: Archive Klaviyo Account (Day 3–7)

Once you're confident GoHighLevel is stable:

1. Export a final backup from Klaviyo (repeat Phase 1, Step 4)
2. Store backup in secure cloud storage (Google Drive, Dropbox, encrypted zip)
3. Keep Klaviyo account active for 30 days (rollback window)
4. After 30 days, downgrade Klaviyo to free tier or cancel

**Why 30 days**: If something critical breaks, you have time to diagnose and fall back.

---

## Common Issues During Migration (And Fixes)

### Issue 1: Emails Going to Spam or Not Delivering

**Cause**: SPF/DKIM not configured or propagated

**Fix**:
1. Go to GoHighLevel **Settings** → **Email Deliverability**
2. Re-verify DNS records (may take 24 hours to propagate)
3. If still failing, contact GoHighLevel support
4. In the meantime, send from a verified Klaviyo list (rollback)

### Issue 2: Unsubscribe Rate Spiking

**Cause**: Subscribers confused by new email sender or duplicate emails from Klaviyo

**Fix**:
1. Verify Klaviyo automations are paused (Phase 11, Step 2)
2. Send an email explaining the switch: "We've moved to a new email platform for better service. You're still subscribed. No action needed."
3. Review complaint feedback (ask support why people are unsubscribing)
4. Pause problematic automations until you figure out the issue

### Issue 3: Custom Fields Not Imported

**Cause**: GoHighLevel doesn't recognize Klaviyo's custom field names

**Fix**:
1. Ask GoHighLevel support to manually map fields
2. Or, re-import CSV with standardized column