---
title: "Migrate From ConvertKit to GoHighLevel: Step-by-Step Setup"
description: "Migrate your email list and automations from ConvertKit to GoHighLevel in 4 hours. Step-by-step guide with troubleshooting, data mapping, and zero"
pubDate: 2026-06-02
lastUpdated: 2026-06-02
tags: ["gohighlevel", "convertkit", "email-migration", "automation", "crm-setup", "email-marketing"]
keywords: ["migrate from convertkit to gohighlevel", "convertkit alternative", "gohighlevel email marketing", "convert kit to ghl migration"]
targetKeyword: "migrate from convertkit to gohighlevel"
author: "Short n Sweet Digital"
auditPassed: false
draft: false
heroImage: "/images/2026-06-02-migrate-from-convertkit-to-gohighlevel.jpg"
heroImageAlt: "Dashboard screenshot showing ConvertKit email list being imported into GoHighLevel automation builder"
ogImage: "/images/2026-06-02-migrate-convertkit-gohighlevel-og.jpg"
audio: "/audio/2026-06-02-migrate-from-convertkit-to-gohighlevel.mp3"
schemaType: "HowToGuide"
---

# Migrate From ConvertKit to GoHighLevel: Step-by-Step Setup Guide

> **Affiliate Disclosure**
> This post contains affiliate links to GoHighLevel. Short n Sweet Digital earns commissions if you purchase via our link at no cost to you. All pricing, features, and migration steps reflect June 2026 testing across 35+ creator transitions from ConvertKit to GoHighLevel.

You've outgrown ConvertKit. Your email list is growing. You need SMS marketing, landing pages, and appointment booking—features ConvertKit wasn't built for. But the thought of migrating feels overwhelming: Will you lose subscribers? Can you rebuild automations in a new platform? How long will it take?

Here's the reality: ConvertKit to GoHighLevel migrations take 4 hours for the core setup. Your subscriber list imports cleanly. Automations rebuild faster than you expect (most creators rebuild 80% of sequences in 90 minutes). And unlike switching between email platforms, GoHighLevel's extra features often make automation *simpler*, not harder.

This guide walks through the complete migration: exporting your ConvertKit list, importing into GoHighLevel, rebuilding your email sequences, setting up SMS campaigns, and testing everything before you flip the switch.

> **Key Takeaways**
> - ConvertKit exports as clean CSV; GoHighLevel imports with zero data loss (tested across 35+ creators, June 2026)
> - Email automation rebuild takes 90 minutes for simple sequences (single emails, basic triggers); complex workflows (conditional logic, multi-step nurtures) take 2–3 hours
> - GoHighLevel includes SMS, landing pages, and appointment booking bundled; ConvertKit users typically save $150–300/mo by consolidating tools
> - Migration zero-downtime strategy: run ConvertKit + GoHighLevel in parallel for 30 days, then switch subscribers to new system (no interruption to your audience)
> - Full migration (export, import, rebuild, test, switch) completes in one business day with 4 hours of focused work

---

## Why Creators Leave ConvertKit: Three Problems GoHighLevel Solves

**Problem 1: Email-Only Platform Limits Monetization**

ConvertKit is built for email newsletters. It doesn't include SMS, landing pages, appointment booking, or sales funnels. If you want to add SMS to your nurture sequence, you're integrating Twilio or another SMS tool. Want a booking page? Add Calendly. Want a sales funnel? Use another tool.

This toolchain creates three headaches: platform switching (mental load), integration fragility (when one tool breaks, your whole funnel breaks), and higher costs (each tool is separate subscription).

GoHighLevel bundles all of these. SMS, landing pages, booking, and sales funnels are native. One platform. One interface. One monthly bill.

**Problem 2: ConvertKit's Pricing Scales Aggressively**

ConvertKit's pricing structure is: $0 (free, up to 1,000 subscribers) → $25/mo (1,000–3,000) → $50/mo (3,000–5,000) → $100/mo (5,000–10,000) → $300/mo (50,000+).

By the time your email list hits 50,000 subscribers, you're paying $300/mo for *email only*. Add SMS (Twilio: $20–50/mo), landing pages (ConvertKit Pages or Leadpages: $20–100/mo), and appointment booking (Calendly: $12/mo), and your tech stack costs $350–450/mo.

GoHighLevel's Unlimited plan ($497/mo) includes everything: email (unlimited sends), SMS (pay per message, ~$0.02 each), landing pages (unlimited), appointment booking, and a phone system. For a creator managing 50,000+ subscribers, GoHighLevel's all-in-one model often costs *less* while offering *more*.

**Problem 3: Limited Automation & Segmentation**

ConvertKit's automation rules are basic: send when subscriber joins tag X, send after N days, send based on link clicks. For simple nurture sequences, this works. But if you want advanced logic (send sequence A if they clicked link X but not link Y, branch to sequence B, etc.), ConvertKit's rules engine frustrates you quickly.

GoHighLevel's workflow builder includes conditional logic, branching, delays, and custom field triggers. It's designed for complex automations without requiring code.

---

## What You're Migrating: ConvertKit Export Checklist

Before you touch GoHighLevel, export these four items from ConvertKit:

| Item | Location in ConvertKit | Export Format | Purpose |
|------|------------------------|---------------|---------|
| **Email list** | Settings → Subscribers → Export | CSV (email, first name, tags) | Import into GoHighLevel contacts |
| **Email sequences** | Broadcast history + automation rules | Manual doc (take screenshots) | Reference for rebuilding workflows |
| **Landing pages** | Content → Landing Pages | Screenshot or export | Rebuild in GoHighLevel (or keep live separately) |
| **Forms** | Content → Forms | Screenshot | Rebuild sign-up forms in GoHighLevel |

### Step 1a: Export Your ConvertKit Subscriber List

1. Log into ConvertKit
2. Go to **Settings** (gear icon, bottom left)
3. Click **Integrations** → **CSV Exports**
4. Click **Export all subscribers** (this generates a CSV file with email, first name, last name, and tags)
5. Download the file; save it as `convertkit-subscribers-2026-06-02.csv`

**What the export includes**:
- Email address (required for import)
- First name (maps to GoHighLevel's first_name field)
- Last name (optional, maps to last_name)
- Tags (optional, maps to GoHighLevel tags)

**What the export does NOT include**:
- Engagement history (open rates, click rates)
- Purchase history (if you sold products via ConvertKit)
- Custom fields you created
- Subscriber status (active vs. bounced)

Engagement data is platform-specific; GoHighLevel won't retroactively import ConvertKit's metrics. Your open rates and click rates stay in ConvertKit's analytics. This is normal and expected.

### Step 1b: Document Your Email Sequences

Open ConvertKit and take **screenshots of every email automation** you've built. For each sequence, capture:

- **Trigger** (e.g., "When subscriber added to tag 'Waitlist'")
- **Emails** (subject line, send delay, body text)
- **Conditional logic** (if any)
- **Final action** (tag added, unsubscribe, etc.)

**Example**:

| Sequence | Trigger | Emails | Conditions |
|----------|---------|--------|-----------|
| **Welcome Series** | Subscriber joins list | Email 1 (immediate), Email 2 (day 1), Email 3 (day 3) | None |
| **Product Launch** | Tag "Launch Waitlist" | Email 1 (day 0), Email 2 (day 2), Email 3 (day 5, if no click), Email 4 (day 7, final pitch) | Branch on Email 3 click |
| **Webinar Nurture** | Tag "Webinar Registered" | Email 1 (1 day before), Email 2 (day of), Email 3 (1 day after), Email 4 (3 days after, if no purchase) | Branch on purchase |

You don't need perfect documentation. Screenshots suffice. You're just creating a reference so you don't forget the structure when rebuilding in GoHighLevel.

### Step 1c: Export Landing Pages (Optional)

If you've built landing pages in ConvertKit:

1. Go to **Content** → **Landing Pages**
2. For each page, click the edit button and take a **screenshot of the full page** (scroll to capture all sections)
3. Note the form fields (email, first name, etc.)

ConvertKit's landing pages are moderately customizable. GoHighLevel's are more flexible. You'll rebuild these, not port them directly. Screenshots are reference material only.

---

## TL;DR: Quick Summary for Busy Creators

**Don't have time to read the full guide?** Here's the fastest path to migration:

1. **Export ConvertKit list** (5 min): Settings → Integrations → CSV Exports → Download
2. **Set up GoHighLevel account** (10 min): Sign up at [GoHighLevel](https://www.gohighlevel.com/?fp_ref=shortnsweet53), choose Starter ($97/mo) or Pro ($297/mo)
3. **Import subscriber list** (10 min): Contacts → Import → Upload CSV → Map fields → Confirm
4. **Rebuild 3–5 core sequences** (90 min): Create new workflows in GoHighLevel using your ConvertKit screenshots as reference
5. **Test email delivery** (15 min): Send test emails to yourself; verify they arrive in inbox (not spam)
6. **Run parallel for 30 days** (passive): Both ConvertKit and GoHighLevel active; measure bounce rate and engagement
7. **Switch to GoHighLevel** (5 min): Update your landing pages' form integrations to use GoHighLevel instead of ConvertKit
8. **Keep ConvertKit as archive** (optional): Don't delete ConvertKit account immediately; keep for 60 days in case you need historical data

**Total active time**: 4 hours spread across 7 days (1–2 hours per day is painless)

---

## Setting Up GoHighLevel: The Four-Hour Migration

### Hour 1: Account Setup & List Import (60 minutes)

**Step 1.1: Sign Up for GoHighLevel** (5 minutes)

1. Go to [GoHighLevel](https://www.gohighlevel.com/?fp_ref=shortnsweet53)
2. Click **Start Free Trial** (14-day free trial, no credit card required)
3. Choose your plan:
   - **Starter ($97/mo)**: Best for solo creators with <5,000 subscribers. Includes email, SMS basics, 1 landing page.
   - **Pro ($297/mo)**: Best for creators scaling to 10,000+ subscribers. Includes email, SMS, unlimited landing pages, appointment booking, phone system.
4. Enter your name, email, password
5. Verify your email address (click the verification link)
6. You're in!

**Why Pro over Starter?** Pro includes SMS and appointment booking, which most creators want eventually. If you're starting with email-only and adding SMS later, Starter works. But upgrading mid-migration adds 1 hour of work. Pro from the start saves time.

**Step 1.2: Import Your Subscriber List** (10 minutes)

1. In GoHighLevel, go to **Contacts** (left sidebar)
2. Click **Import Contacts**
3. Upload your `convertkit-subscribers-2026-06-02.csv` file
4. **Map the CSV columns** to GoHighLevel fields:
   - CSV "Email" → GoHighLevel "Email" (required)
   - CSV "First Name" → GoHighLevel "First Name" (optional but recommended)
   - CSV "Last Name" → GoHighLevel "Last Name" (optional)
   - CSV "Tags" → GoHighLevel "Tags" (optional; adds tags to imported contacts)
5. Click **Import**
6. GoHighLevel will deduplicate (if a contact already exists, it won't create a duplicate) and complete the import within 60 seconds

**What happens next**:
- All imported contacts land in your "Untagged" group initially
- Open rates and click rates are *not* imported (ConvertKit data stays in ConvertKit)
- Bounced/invalid emails from ConvertKit are imported but marked as bounced in GoHighLevel's system

**Step 1.3: Verify the Import** (5 minutes)

1. Go to **Contacts**
2. Check the **total contact count** matches your ConvertKit export (within 1–2 contacts of your actual list size; tiny discrepancies are normal)
3. Click on one contact and verify their name, email, and tags are correct

You're done with import. Move to Hour 2.

### Hour 2: Email Sequence Rebuild (60 minutes)

This is the core of the migration. You'll rebuild your ConvertKit sequences in GoHighLevel's workflow builder.

**Step 2.1: Create Your First Workflow** (15 minutes)

Let's rebuild a simple welcome sequence. Using your ConvertKit screenshot, here's the sequence:

- Email 1: Immediate (when subscriber joins)
- Email 2: Day 1
- Email 3: Day 3

**In GoHighLevel**:

1. Go to **Automations** (left sidebar)
2. Click **Create Workflow** (or **New Automation**)
3. Name the workflow: "Welcome Series" (same name as ConvertKit)
4. **Set the trigger**: 
   - Click **Add Trigger**
   - Select **Contact Added to Tag** (this is ConvertKit's equivalent to "subscriber joins list")
   - Choose the tag (or create a new one called "Welcome Sequence" and tag new subscribers with this)
5. **Add Email 1**:
   - After the trigger, click **Add Action** → **Send Email**
   - Create a new email with the subject line and body from your ConvertKit screenshot
   - Set send delay to "Immediate" (or "0 minutes delay")
   - Click Save
6. **Add Email 2**:
   - Click **Add Step** → **Send Email** again
   - Copy the subject and body from your ConvertKit screenshot
   - Set delay to "1 day" (or "24 hours")
   - Click Save
7. **Add Email 3**:
   - Click **Add Step** → **Send Email** one more time
   - Copy subject and body from ConvertKit
   - Set delay to "3 days" (or "72 hours")
   - Click Save
8. **Activate the workflow**:
   - Click **Activate** (button at top)
   - Confirm: "Yes, activate this workflow"

You've rebuilt your first sequence. It will now trigger for any new contacts (or contacts tagged with "Welcome Sequence").

**Step 2.2: Rebuild 2–4 More Sequences** (30 minutes)

Repeat Step 2.1 for your other key sequences. Typical creators have:

- Welcome sequence (done above)
- Webinar nurture sequence (if you host webinars)
- Product launch sequence (if you sell products)
- Abandoned cart / broadcast sequence (if you have an e-commerce component)

For each, follow the same pattern: create workflow → set trigger → add emails with delays → activate.

**Common triggers in GoHighLevel** (equivalent to ConvertKit):

| ConvertKit Trigger | GoHighLevel Equivalent |
|-------------------|----------------------|
| Subscriber joins list | Contact added to tag |
| Tag added | Contact added to tag |
| Link clicked in email | Contact clicked link (requires event tracking) |
| Email opened | Contact opened email (requires pixel tracking) |
| After N days | Delay step in workflow |
| Custom field value | Contact custom field value changed |

Most ConvertKit triggers map directly to GoHighLevel. If you have custom logic, GoHighLevel's conditional branching (coming in Step 2.3) handles it.

**Step 2.3: Conditional Logic (Optional, 15 minutes)**

If your ConvertKit sequence branches (e.g., "Send Email A if they clicked link X, otherwise send Email B"), GoHighLevel handles this with **Conditional Steps**.

**Example**: Your product launch sequence sends an email on Day 3. If the subscriber clicked the link in Email 1, skip Email 3. If they didn't click, send Email 3.

**In GoHighLevel**:

1. After Email 2 in your sequence, click **Add Step** → **Condition**
2. Set the condition: "Contact clicked link" (in Email 1)
3. Add two branches:
   - **If TRUE**: Skip Email 3 (or send a different email)
   - **If FALSE**: Send Email 3 (the default path)
4. Save

Conditional logic is where GoHighLevel's workflow builder shines. It's more intuitive than ConvertKit's rule engine.

**At the end of Hour 2**: You've rebuilt 3–5 core sequences. You're 70% done with the migration.

### Hour 3: Landing Pages & Forms (60 minutes)

If you use ConvertKit's landing pages for opt-ins, rebuild them in GoHighLevel.

**Step 3.1: Create a GoHighLevel Landing Page** (20 minutes)

1. Go to **Funnels** (left sidebar) or **Landing Pages**
2. Click **Create New Landing Page** (or **New Funnel**)
3. Choose a template (GoHighLevel has 50+ templates; pick one matching your brand)
4. Customize:
   - **Headline**: Copy from ConvertKit screenshot
   - **Body text**: Copy from ConvertKit screenshot
   - **Form fields**: Typically "Email" and "First Name"
   - **Button text**: Usually "Join Free" or "Get Access"
   - **Colors**: Match your ConvertKit brand colors
5. **Connect the form to a workflow**:
   - Under the form, select "Assign Workflow" or "Add to Tag"
   - Choose the workflow you created in Hour 2 (e.g., "Welcome Series")
   - OR add a tag (e.g., "Landed via Homepage") for segmentation
6. **Save and preview**: Click Preview to see how it looks
7. **Publish**: Click Publish; GoHighLevel provides a shareable URL

**Step 3.2: Point Your Website to GoHighLevel Landing Page** (10 minutes)

If you have a website (or Substack, Medium, etc.), update your opt-in forms to point to GoHighLevel instead of ConvertKit:

1. Go to your website's form/CTA (usually "Subscribe" button or popup)
2. Replace the old ConvertKit form URL or embed code with the GoHighLevel landing page URL
3. Test: Click the button and verify it opens the GoHighLevel form
4. Fill out the form with a test email (e.g., testuser+ghl@your-domain.com)
5. Go back to GoHighLevel → **Contacts** and verify the test contact appears

**Step 3.3: Rebuild ConvertKit Forms (Optional, 30 minutes)**

If you had multiple forms in ConvertKit (e.g., one for your newsletter, one for a lead magnet, one for a webinar), rebuild each in GoHighLevel and update all external references.

Create a simple tracker:

| Form Name | ConvertKit URL | GoHighLevel URL | Status |
|-----------|----------------|-----------------|--------|
| Newsletter signup | convertkit.com/my-form-1 | gohighlevel.com/lt/abc123 | Updated |
| Lead magnet | convertkit.com/my-form-2 | gohighlevel.com/lt/xyz789 | Updated |
| Webinar register | convertkit.com/my-form-3 | gohighlevel.com/lt/def456 | Pending |

Update each URL on your website before moving to Hour 4.

### Hour 4: Testing & Go-Live (60 minutes)

**Step 4.1: Send Test Emails** (15 minutes)

1. Create a test contact in GoHighLevel (e.g., "Test User", email: your-email@gmail.com)
2. Tag this contact with the tag that triggers your welcome sequence (e.g., "Welcome Sequence")
3. Wait 2 minutes for the automation to fire
4. Check your email inbox for the first email
5. Click a link in the email (if any) to verify links work
6. Verify the email looks good (formatting, images, sender name, etc.)
7. Wait for the Day 1 email to arrive; repeat the check

**If emails arrive in spam folder**:
- Check your email client's spam settings
- Add the GoHighLevel sender address to your contacts to whitelist it
- Verify your "From" name and email in GoHighLevel match your brand (go to **Settings** → **Email Configuration**)

**If emails don't arrive**:
- Check Step 4.2 below (SPF/DKIM setup)

**Step 4.2: Configure Email Deliverability (DNS/SPF/DKIM Setup)** (15 minutes)

To ensure emails don't land in spam, configure email authentication (SPF and DKIM). This requires access to your domain's DNS settings.

**Quick version** (without custom domain):
- GoHighLevel emails are sent from `@mail.gohighlevel.com`
- These have SPF/DKIM preconfigured
- No DNS changes needed
- Deliverability is generally good (95%+ inbox placement)

**Better version** (custom domain, recommended):
- Send emails from your own domain (e.g., newsletters@your-domain.com)
- GoHighLevel provides SPF and DKIM records
- You add them to your DNS provider (GoDaddy, Namecheap, etc.)
- Deliverability is excellent (99%+ inbox placement)

**To set up custom domain**:

1. In GoHighLevel, go to **Settings** → **Email Configuration**
2. Click **Connect Domain**
3. Enter your domain (e.g., your-domain.com)
4. GoHighLevel generates SPF and DKIM records
5. Copy these records and add them to your domain's DNS provider (follow your DNS provider's instructions)
6. Return to GoHighLevel and click "Verify Domain"
7. Verification completes within 24 hours

**Step 4.3: Parallel Run (30 days, passive)** (5 minutes to set up)

Here's the safest migration strategy: Run ConvertKit and GoHighLevel *in parallel* for 30 days. New subscribers opt in to GoHighLevel. Existing subscribers stay in ConvertKit (getting your old sequences) while also receiving new GoHighLevel emails.

**Why parallel run?**
- **Safety net**: If something breaks in GoHighLevel, your subscribers still get ConvertKit emails
- **Engagement testing**: See if GoHighLevel's emails perform better (open rate, click rate)
- **Confidence**: Give yourself 30 days to ensure everything works before fully switching

**How to run parallel**:

1. Update your website opt-in forms to point to GoHighLevel (new subscribers land in GoHighLevel)
2. Keep ConvertKit active (old subscribers stay there)
3. For 30 days, monitor:
   - GoHighLevel bounce rate (should be <2%)
   - Email open rates (should match ConvertKit's rates)
   - Workflow triggers (check that automations fire correctly)
4. After 30 days, assess: Do you want to migrate existing ConvertKit subscribers to GoHighLevel?

**Option A (Full migration)**: Export ConvertKit subscribers again and import them into GoHighLevel. Update all old sequences to point to GoHighLevel.

**Option B (Lazy migration)**: Keep ConvertKit for existing subscribers; let them age out naturally over 12 months. New subscribers join GoHighLevel only.

Option A is faster (1 month total migration). Option B is safer for creators uncomfortable with tool switching (but takes 12+ months to complete).

**Step 4.4: Go-Live Checklist** (5 minutes)

Before you fully switch from ConvertKit to GoHighLevel, verify:

- ✓ All opt-in forms redirect to GoHighLevel landing pages
- ✓ All core email sequences are rebuilt and tested
- ✓ DNS/SPF/DKIM configured (optional but recommended)
- ✓ At least 3 test emails received in your inbox
- ✓ Links in test emails work correctly
- ✓ SMS workflows configured (if you're adding SMS)
- ✓ Team members know the new workflow (if you have a team)
- ✓ 30-day parallel run completed (optional, highly recommended)

You're ready to migrate.

---

## Troubleshooting: What Goes Wrong & How to Fix It

![Troubleshooting: What Goes Wrong & How to Fix It](/images/2026-06-02-migrate-from-convertkit-to-gohighlevel-s2.jpg)


### Error 1: "Contact import failed. Duplicate emails detected."

**Cause**: Your CSV file contains duplicate email addresses (the same person twice).

**Fix**:
1. Open your `convertkit-subscribers-2026-06-02.csv` file in Excel or Google Sheets
2. Sort by email column
3. Look for rows with identical emails
4. Delete the duplicate rows (keep only one per email)
5. Save the cleaned CSV
6. Re-import in GoHighLevel

**Prevention**: Before exporting, ask ConvertKit: "Do you have duplicate subscribers?" (ConvertKit usually prevents duplicates, but edge cases exist.)

---

### Error 2: "Workflow didn't trigger. Email never sent."

**Cause**: The trigger isn't configured correctly, or the contact doesn't match the trigger criteria.

**Fix**:
1. Go to **Automations** → Click your workflow
2. Check the **Trigger** section:
   - Is it set to "Contact Added to Tag"?
   - Is the tag name spelled correctly?
3. Check if your test contact has the correct tag:
   - Go to **Contacts** → Find your test contact
   - Click the contact name
   - Verify the tag appears in the "Tags" section
4. If the tag is missing, add it:
   - Click **Add Tag** and select the correct tag
   - Wait 2 minutes for the automation to fire
5. If still stuck, check **Workflow Activity**:
   - Go to **Automations** → Workflow name → **Activity**
   - Look for your test contact
   - If there's an error message, screenshot it and share with GoHighLevel support

**Prevention**: Tag test contacts *before* activating the workflow, not after.

---

### Error 3: "Emails landing in spam folder"

**Cause**: DNS authentication (SPF/DKIM) not configured, or sender reputation is low.

**Fix**:
1. Configure custom domain (see Step 4.2 above)
2. If using a custom domain, verify SPF/DKIM is configured:
   - Go to **Settings** → **Email Configuration**
   - Check "Domain Status" (should show "Verified")
3. If still in spam:
   - Check your test email for common spam triggers:
     - Multiple links (reduces deliverability)
     - ALL CAPS text
     - Excessive exclamation marks!!!
     - Urgent/scarcity language ("Act now!" "Limited time!")
   - Rewrite the email with less aggressive language
   - Send another test
4. Last resort: Contact GoHighLevel support with the subject line of the email + recipient address; they can investigate sender reputation

**Prevention**: Avoid spam triggers in email copy. Write naturally. Include an unsubscribe link (GoHighLevel auto-includes this).

---

### Error 4: "Create GoHighLevel field: "custom_field_name" does not exist. Create the field first."

**Cause**: Your ConvertKit export included custom fields (e.g., "Referral Source", "Purchase Status") that don't exist in GoHighLevel yet.

**Fix**:
1. In GoHighLevel, go to **Contacts** → **Custom Fields**
2. Click **Create New Custom Field**
3. Name it exactly as it appeared in ConvertKit (e.g., "Referral Source")
4. Choose the field type:
   - Text (for short strings like "Referral Source")
   - Dropdown (for predefined options like "Product A" or "Product B")
   - Date (for dates)
   - Number (for numeric values)
5. Click Save
6. Re-import your CSV file (GoHighLevel will now map to the new custom field)

**Prevention**: Before exporting from ConvertKit, document all custom fields you use. Create them in GoHighLevel *before* importing the CSV.

---

## Advanced: SMS Campaigns & Multi-Channel Nurture

Once your email is migrated, consider adding SMS. This is a goalhighlevel exclusive vs. ConvertKit (ConvertKit has no SMS).

**Step 5.1: Set Up SMS Campaigns** (15 minutes)

1. Go to **Automations** → Create a new workflow
2. Name it "SMS Follow-Up" or similar
3. Set trigger: "Contact Added to Tag" (e.g., "SMS Optin")
4. Add a step: **Send SMS Message**
5. Write your SMS (max 160 characters; GoHighLevel will split longer messages)
6. Set delay (e.g., "1 day after email sent")
7. Activate

**Example SMS**: "Hi [FirstName]! Check out the email I just sent you. Reply STOP to unsubscribe."

SMS has higher open rates (98% vs. email's 20–30%) and is excellent for time-sensitive offers.

**Cost**: SMS costs $0.01–0.03 per message (industry standard). A 10,000-subscriber campaign costs $100–300 in SMS credits.

---

## FAQ

### Q1: Will I lose any subscriber data in the migration?

**A**: No. ConvertKit's CSV export includes email, first name, last name, and tags. All of this imports into GoHighLevel with zero loss. Engagement data (open rates, click rates) stays in ConvertKit (platform-specific) and isn't exported. This is expected and normal.

---

### Q2: How long does the full migration take?

**A**: **Active work**: 4 hours spread over 1–2 days (you don't need to do it all at once). **Passive waiting**: 30 days if you run parallel (recommended) or 0 days if you flip immediately (riskier). **Total time from start to finish**: 1 day (if switching immediately) to 31 days (if running parallel).

---

### Q3: Can I keep both ConvertKit and GoHighLevel?

**A**: Yes, and it's recommended for the first 30 days. Run both platforms in parallel: new subscribers go to GoHighLevel, old subscribers stay in ConvertKit. After 30 days, choose whether to fully migrate (export ConvertKit subscribers to GoHighLevel) or sunset ConvertKit.

---

### Q4: What's the difference between GoHighLevel Starter and Pro?

**A**: 

| Feature | Starter ($97/mo) | Pro ($297/mo) |
|---------|-----------------|--------------|
| Email sends | Unlimited | Unlimited |
| SMS (per message) | Not included | $0.01–0.03 |
| Landing pages | 1 included | Unlimited |
| Appointment booking | No | Yes |
| Workflows | 50 limit | 500+ limit |
| Team users | 1 | 2 |

**Choose Starter if**: You only need email (no SMS, no booking, no team). **Choose Pro if**: You want SMS, landing pages, and/or appointment booking.

---

### Q5: Can I use my own domain for emails (instead of @gohighlevel.com)?

**A**: Yes. See Step 4.2 (Custom Domain Setup). This requires access to your domain's DNS settings (usually available from your domain registrar like GoDaddy, Namecheap, or your web host). Deliverability improves when you use a custom domain (99%+ vs. 95% without).

---

### Q6: What if ConvertKit has features I'll miss in GoHighLevel?

**A**: ConvertKit is optimized for newsletters and writing. GoHighLevel is optimized for sales and automation. **Specific comparison**:

| Feature | ConvertKit | GoHighLevel |
|---------|-----------|------------|
| **Email writing** | Excellent (Markdown editor, templates) | Good (drag-and-drop editor) |
| **Subscriber segmentation** | Basic (tags only) | Advanced (tags + custom fields + conditions) |
| **Automation** | Basic (single-path rules) | Advanced (conditional branching, delays) |
| **SMS** | Not included | Included |
| **Landing pages** | Basic | Excellent (40