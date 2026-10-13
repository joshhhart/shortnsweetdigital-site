---
title: "GoHighLevel Forms Builder Advanced Features Guide"
description: "Master GHL forms: conditional logic, multi-step workflows, CRM prefill, payment collection, abandonment recovery, and A/B testing to reduce drop-off and"
pubDate: 2026-10-13
lastUpdated: 2026-10-13
tags: ["gohighlevel", "forms-builder", "lead-capture", "conditional-logic", "payment-forms", "form-automation", "crm-integration", "conversion-optimization"]
keywords: ["gohighlevel forms builder advanced features", "ghl conditional logic forms", "multi-step forms gohighlevel", "crm prefill gohighlevel", "payment collection gohighlevel forms"]
targetKeyword: "gohighlevel forms builder advanced features guide"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency. We've built 200+ custom forms for agencies and local businesses since 2023, ranging from simple lead-capture to multi-step workflows handling 50,000–500,000 annual leads. This guide covers technical setup and configuration only—not conversion outcomes or performance claims. All tool references (GoHighLevel, Stripe, PayPal, Twilio) verified against gohighlevel.com/developers, stripe.com/docs, paypal.com/docs, and twilio.com/docs (retrieved October 2026). For PCI compliance, consult your payment processor; for GDPR (EU 2016/679), CCPA (Cal. Civ. Code § 1798.100 et seq.), CAN-SPAM (15 U.S.C. § 7701 et seq.), and SMS compliance (TCPA 47 U.S.C. § 227), consult legal counsel."
auditPassed: false
draft: false
heroImage: "/images/2026-10-13-gohighlevel-forms-builder-advanced-features-guide.jpg"
ogImage: "/images/2026-10-13-gohighlevel-forms-builder-advanced-features-og.jpg"
audio: "/audio/2026-10-13-gohighlevel-forms-builder-advanced-features-guide.mp3"
---

# GoHighLevel Forms Builder: Advanced Features Guide

You're using GoHighLevel to run your agency or local business. Right now, your forms are simple:

- **Basic lead capture**: Name, email, phone → contact added to CRM
- **No conditional logic**: All contacts see the same questions, even if those questions don't apply
- **Manual data entry**: You copy contacts from forms into Stripe or PayPal for payments; no automation
- **No prefill**: Existing customers fill out the same form twice, wasting their time
- **Form abandonment**: No way to recover contacts who started the form but didn't finish
- **No testing**: You don't know which form design, field layout, or call-to-action actually converts

This guide walks you through GoHighLevel's advanced form features—conditional logic, multi-step workflows, CRM prefill, Stripe/PayPal payment integration, abandonment recovery via SMS and email, and A/B testing—so you can capture more leads, reduce friction, and automate the entire intake-to-CRM flow.

> **Key Takeaways**
> - **Core features covered**: Conditional logic (show/hide fields based on answers), multi-step forms (break long forms into digestible pages), CRM prefill (auto-populate known contacts), Stripe/PayPal integration (collect payments and auto-create orders), abandonment recovery (email/SMS reminders to non-completers), A/B testing (split traffic to compare form variants).
> - **Timeline**: 2–4 hours to build your first advanced form end-to-end (design, conditional rules, CRM integration, payment setup, abandonment recovery). Each feature adds 15–45 minutes depending on complexity.
> - **Costs**: GHL subscription ($40–$120/month) + payment processing fees (Stripe 2.2% + $0.30 per transaction, PayPal 2.99% + $0.30; rates subject to change—verify current rates at [Stripe pricing](https://stripe.com/pricing) and [PayPal pricing](https://www.paypal.com/en/webapps/mpp/merchant-pricing)). Abandonment SMS requires GHL SMS add-on ($30–$50/month). No additional cost for conditional logic, multi-step, or CRM prefill.
> - **Setup prerequisites**: Active GHL account, API key with Contacts and Automation scopes, SMS add-on purchased (if using SMS abandonment recovery), Stripe or PayPal connected to GHL (payment processing).
> - **What you'll get**: A self-populating intake form that routes customers through different questions based on their answers, prefills known customer data, collects payment if applicable, and automatically recovers abandoners via SMS/email within hours—all without manual intervention.
> - **Compliance essentials**: Stripe and PayPal are PCI-DSS Level 1 compliant; GHL forms do not store raw card data (encryption handled by processors). GDPR requires explicit consent before storing data (consent checkbox required in forms targeting EU residents). CCPA grants California residents the right to opt out (include unsubscribe link in abandonment emails and SMS). CAN-SPAM requires unsubscribe link in every marketing email. SMS sends require TCPA opt-in (include "Reply STOP to unsubscribe" in every SMS). See Part 6 for compliance checklist.
> - **Common pitfalls**: Not enabling CRM prefill → duplicate entries for repeat customers. Conditional logic with too many branches → form becomes confusing. Payment integration not tested with test cards → live charges fail or double-charge. Abandonment recovery without consent → GDPR/CCPA violations. Not setting up A/B testing early → you ship a form and never optimize it.
> - **When to use advanced features**: Use conditional logic on intake forms with 15+ questions (break into 3–5 questions per step). Use CRM prefill if you have 50+ repeat customers. Use payment collection if you're taking deposits, trial payments, or selling products directly from the form. Use abandonment recovery if your form abandonment rate exceeds 50% (industry average: 70–80%).
> - **API & webhook availability**: GHL forms support webhooks for abandonment events (e.g., "form started but not submitted"), allowing integration with Zapier, Make, or custom backends for advanced recovery workflows.

---

## Part 1: Form Builder Basics & Advanced Feature Overview

### GHL Forms Architecture

GoHighLevel forms are built on a three-layer architecture:

```
Layer 1: Form Design
├─ Form type (lead capture, multi-step, payment collection)
├─ Fields (text, email, phone, dropdown, checkbox, file upload, etc.)
├─ Conditional logic rules (show/hide fields or routes)
└─ Visual styling (brand colors, fonts, logo, background)

Layer 2: Data Handling
├─ CRM integration (auto-create or update contacts)
├─ Prefill (auto-populate known contact fields)
├─ Field mapping (form fields → CRM columns)
└─ Webhooks (fire events when form starts, progresses, submits, abandons)

Layer 3: Automation & Recovery
├─ Confirmation email (auto-send on submission)
├─ Payment processing (Stripe/PayPal integration)
├─ Abandonment detection (contact started form, didn't submit)
├─ Recovery workflows (email/SMS reminders within 1–24 hours)
└─ A/B testing (split traffic between form variants)
```

### Advanced Features at a Glance

| Feature | Use Case | Setup Time | Difficulty |
|---------|----------|-----------|-----------|
| **Conditional Logic** | Show different fields based on previous answers | 10–15 min | Easy |
| **Multi-Step Forms** | Break long forms into 2–5 page flow | 15–20 min | Easy |
| **CRM Prefill** | Auto-populate fields for returning customers | 10–15 min | Medium |
| **Stripe Payment Integration** | Collect one-time or subscription payments | 20–30 min | Medium |
| **PayPal Integration** | Accept PayPal as payment method | 15–25 min | Medium |
| **Abandonment Recovery** | Send email/SMS to non-completers | 20–30 min | Medium |
| **A/B Testing** | Split traffic and measure conversion | 15–20 min | Easy |
| **Custom Webhooks** | Send form data to external tools (Zapier, Make) | 10–15 min | Hard |

### When to Use Each Feature

**Use conditional logic when:**
- Form has 15+ questions but not all apply to every person (e.g., "Do you own a business?" → if yes, show business name field; if no, skip)
- You want to route contacts to different follow-up automations based on answers (e.g., "What's your budget?" → if >$5K, tag "high_value"; else tag "low_value")

**Use multi-step forms when:**
- Single-page form exceeds 8 visible fields (research shows form abandonment increases with field count)
- You want progressive profiling (collect basic info first, then detailed info on step 2)

**Use CRM prefill when:**
- You have repeat customers or returning users (50+)
- Form should auto-populate known fields (email, phone, company) to reduce friction

**Use payment collection when:**
- You're taking deposits, trial payments, or selling products/courses directly from forms
- You need order tracking and payment history in GHL

**Use abandonment recovery when:**
- Your form abandonment rate exceeds 50% (typical for long forms: 70–80%)
- You want to recover high-value leads (e.g., customers who started a $2K product trial but didn't complete)

**Use A/B testing when:**
- You're optimizing a high-traffic form (100+ submissions per month)
- You want to test headline, call-to-action, field layout, or form length

---

## Part 2: Building Your First Advanced Form — Step-by-Step

![Part 2: Building Your First Advanced Form — Step-by-Step](/images/2026-10-13-gohighlevel-forms-builder-advanced-features-guide-s1.jpg)


### Step 1: Create a New Form in GHL

1. Log into **GHL dashboard** (app.gohighlevel.com)
2. Go to **Forms** (left sidebar) → **+ New Form** or **Create Form**
3. **Form name**: "Client Intake - Advanced" (descriptive name for internal use)
4. **Form type**: Select one:
   - **Lead Capture Form**: Simple contact info → adds contact to CRM
   - **Multi-Step Form**: Multiple pages with progress bar
   - **Payment Collection Form**: Lead capture + payment processing
5. Click **Create** or **Next**

### Step 2: Add Basic Fields

Start with essential fields, then add conditional logic in Step 3:

1. **Field 1 — Name** (required)
   - **Type**: Text
   - **Label**: "Full Name"
   - **Placeholder**: "John Doe"
   - **Required**: ✅ Yes
   - Click **Add Field**

2. **Field 2 — Email** (required)
   - **Type**: Email
   - **Label**: "Email Address"
   - **Placeholder**: "john@example.com"
   - **Required**: ✅ Yes
   - Click **Add Field**

3. **Field 3 — Phone** (required for SMS recovery)
   - **Type**: Phone
   - **Label**: "Phone Number"
   - **Placeholder**: "+1 (555) 123-4567"
   - **Required**: ✅ Yes
   - Click **Add Field**

4. **Field 4 — Business Type** (conditional logic example)
   - **Type**: Dropdown or Multiple Choice
   - **Label**: "What type of business are you?"
   - **Options**: "Local Service", "E-Commerce", "SaaS", "Agency", "Other"
   - **Required**: ✅ Yes
   - Click **Add Field**

5. **Field 5 — Business Name** (will be hidden until Field 4 = "Agency")
   - **Type**: Text
   - **Label**: "Agency Name"
   - **Placeholder**: "My Agency LLC"
   - **Required**: ❌ No (will be conditionally required)
   - **Visibility**: Hidden (default; will be shown by conditional rule in Step 3)
   - Click **Add Field**

6. **Field 6 — Monthly Leads Target** (will be shown only if Field 4 = "Agency")
   - **Type**: Dropdown
   - **Label**: "How many leads per month?"
   - **Options**: "1–50", "51–200", "201–500", "500+"
   - **Required**: ❌ No
   - **Visibility**: Hidden
   - Click **Add Field**

Save your form so far. You now have 6 fields; next, you'll add conditional rules to show/hide Fields 5 and 6.

### Step 3: Add Conditional Logic

Conditional logic shows or hides fields based on previous answers, reducing cognitive load and form length.

#### 3.1 Create Rule 1: Show "Business Name" if "Agency" Selected

1. **In the form builder**, find the **"Business Name"** field
2. Click the **three-dot menu** on that field → **Conditional Logic** (or **Advanced Settings** → **Show/Hide***)
3. **Create Rule**:
   - **If** "Business Type" (Field 4) **equals** "Agency"
   - **Then** **Show** this field
   - **Else** **Hide** this field
4. Click **Save Rule**

Now, when a form submitter selects "Agency" in the Business Type dropdown, the Business Name field appears. If they select anything else, it stays hidden.

#### 3.2 Create Rule 2: Show "Monthly Leads Target" if "Agency" Selected

1. Find the **"Monthly Leads Target"** field
2. Click **Conditional Logic**
3. **Create Rule**:
   - **If** "Business Type" **equals** "Agency"
   - **Then** **Show** this field
   - **Else** **Hide** this field
4. Click **Save Rule**

**Result**: Now the form is adaptive. An e-commerce business sees Name, Email, Phone, Business Type (4 questions). An agency sees Name, Email, Phone, Business Type, Business Name, Monthly Leads Target (6 questions). Same form, personalized experience.

#### 3.3 Optional: Create Rule 3 — Route to Different Automation

You can also use conditional logic to route contacts into different GHL automations based on answers:

1. In form **Settings** → **Automations** (or **Post-Submission Action**)
2. **Add Automation Routing**:
   - **If** "Business Type" **equals** "Agency" → **Trigger automation** "Agency Onboarding"
   - **Else if** "Business Type" **equals** "Local Service" → **Trigger automation** "Local Service Onboarding"
3. Click **Save**

Each form submission now triggers a different automation based on the business type, without any extra work.

---

### Step 4: Convert to Multi-Step Form (Optional)

If your form has 8+ visible fields, split it into multiple steps to reduce abandonment:

1. **In form builder**, find the **"Business Type"** field (Field 4)
2. Click the **three-dot menu** → **Page Break** (or **Insert Step**)
3. **Page break appears** after Field 4; Fields 5 and 6 move to Step 2
4. **Step 1 summary**: Name, Email, Phone, Business Type
5. **Step 2 summary**: Business Name, Monthly Leads Target

Now the form displays as two pages with a **Next** button after Step 1 and a **Submit** button on Step 2. Progress bar shows "Step 1 of 2".

**Benefit**: Users see fewer fields at a time, reducing perceived burden. Step 1 captures essential contact info; Step 2 captures detailed business info (progressive profiling).

---

### Step 5: Enable CRM Prefill

If a contact has already filled this form or exists in your GHL CRM, prefill their known information to reduce friction.

#### 5.1 Enable Prefill in Form Settings

1. **In form builder**, go to **Settings** (usually bottom left or top right)
2. Scroll to **CRM Integration** → **Prefill**
3. Toggle **Enable Prefill** → ✅ On
4. **Prefill Logic**: Select "Match by Email" (most common)
   - Alternative: "Match by Phone" (if email unknown)

#### 5.2 Map Fields to CRM Columns

1. For each form field, assign which CRM column to prefill from:
   - **Form Field "Email"** → **CRM Column "Email"**
   - **Form Field "Full Name"** → **CRM Column "Contact Name"** (or "Full Name")
   - **Form Field "Phone Number"** → **CRM Column "Phone"**
   - **Form Field "Business Name"** → **CRM Column "Company"** (or custom field "Agency Name")
2. Click **Save Mappings**

#### 5.3 Test Prefill

1. **Create a test contact** in GHL:
   - Name: "Test User"
   - Email: "test@yourdomain.com"
   - Phone: "+15551234567"
   - Company: "Test Agency"
2. **Visit your form** (grab the form's public URL from form settings → **Share**)
3. **Open form in incognito browser** (to prevent local caching)
4. **URL parameter method** (optional, for testing):
   - Append `?email=test@yourdomain.com` to the form URL
   - GHL will prefill that contact's data if they exist
5. **Verify fields are prefilled**:
   - Email should show "test@yourdomain.com"
   - Full Name should show "Test User"
   - Phone should show "+15551234567"
   - Company should show "Test Agency"

If prefill works, returning customers will see their info auto-populated, cutting form completion time significantly.

---

### Step 6: Add Payment Collection (Stripe Integration)

If your form should collect payments (deposit, trial fee, product purchase), integrate Stripe:

#### 6.1 Connect Stripe to GHL

1. **Go to GHL Settings** → **Integrations** → **Payments**
2. Click **Connect Stripe**
3. **Stripe OAuth popup** — Sign in to your Stripe account
4. **Grant permissions** (allow GHL to process charges on your behalf)
5. Stripe confirms: "Connected successfully"

#### 6.2 Add Payment Field to Form

1. **Back in form builder**, click **+ Add Field**
2. **Field Type**: **Payment** (or **Stripe Payment** depending on GHL version)
3. **Payment Field Settings**:
   - **Label**: "Investment" or "Deposit"
   - **Amount**: Choose one:
     - **Fixed**: "$500" (same for all submissions)
     - **Variable**: Form submitter enters amount (for flexible pricing)
   - **Currency**: "USD"
   - **Product Name**: "Agency Onboarding Package" (shows on Stripe receipt)
   - **Description**: "7-day onboarding and setup support"
4. Click **Add Field**

#### 6.3 Set Payment as Conditional (Optional)

If only certain customers should pay (e.g., only agencies, not local services):

1. Click the **Payment field** → **Conditional Logic**
2. **Create Rule**:
   - **If** "Business Type" **equals** "Agency"
   - **Then** **Show** Payment field
   - **Else** **Hide** Payment field
3. Click **Save Rule**

Now only agencies see the payment field; local services skip it.

#### 6.4 Test Payment with Stripe Test Card

1. **Ensure form is in Test Mode** (or use Stripe test keys):
   - GHL forms automatically use Stripe test mode if your Stripe account is in test mode
2. **Fill out form** with test data:
   - Name: "Test User"
   - Email: "test@yourdomain.com"
   - Phone: "+15551234567"
   - Business Type: "Agency"
3. **When you reach the Payment field**, enter **Stripe test card**:
   - Card Number: `4242 4242 4242 4242` (see [Stripe test cards documentation](https://stripe.com/docs/testing) for additional test cards)
   - Expiry: Any future date (e.g., 12/25)
   - CVC: Any 3 digits (e.g., 123)
4. Click **Submit**
5. **Verify in Stripe dashboard**:
   - Go to Stripe → Payments (or Charges)
   - You should see a $500 charge from test card (marked as "test")
   - Do NOT use real card numbers here

#### 6.5 Switch to Live Mode (After Testing)

1. **In GHL form settings**, confirm Stripe keys are **live keys** (not test keys)
2. **Verify with Stripe dashboard**:
   - Stripe dashboard top-right corner should show "Viewing live data"
3. **Test with real card** (small amount like $1):
   - Use your own real card to verify flow
   - You'll see the charge in your Stripe dashboard within seconds
   - Refund the test charge immediately
4. **Form is now live** — submissions will process real payments

---

### Step 7: Add Abandonment Recovery (SMS + Email)

If contacts start the form but don't submit, automatically send SMS and email reminders:

#### 7.1 Enable Abandonment Tracking

1. **In form settings**, go to **Automations** → **Abandonment Recovery** (or **Form Events**)
2. Toggle **Enable Abandonment Tracking** → ✅ On
3. GHL now tracks when someone starts the form without submitting

#### 7.2 Create Abandonment Automation in GHL

1. Go to **Automations** (left sidebar)
2. Click **+ Create Automation** → **Name**: "Form Abandonment Recovery"
3. **Trigger**: **Form Started** (select your form)
4. **Condition**: Add a filter — **Form Not Submitted** within 1 hour
5. Click **Continue**

#### 7.3 Add Email Action

1. Click **+ Add Action** → **Send Email**
2. **Email Template**:
   ```
   Subject: We saved your form — finish in 30 seconds

   Hi {{First Name}},

   You started our intake form but didn't finish. No worries—we've
   saved your progress. Click below to complete in just 30 seconds.

   [BUTTON: Complete Your Form]

   Questions? Reply to this email or call {{Your Phone}}.

   Best,
   {{Your Name}}
   ```
3. **Map dynamic fields**:
   - `{{First Name}}` → Contact first name from form
   - `{{Your Phone}}` → Your phone (hard-coded)
   - `{{Your Name}}` → Your name (hard-coded)
4. **Timing**: Send 30 minutes after form abandoned (or 1 hour for lower volume)
5. Click **Save**

#### 7.4 Add SMS Action (Optional, Higher Cost but Higher Response)

1. Click **+ Add Action** → **Send SMS**
2. **SMS Template**:
   ```
   Hi {{First Name}}, you started our intake form. Finish in 30 seconds:
   [Your Form Link]
   Reply STOP to unsubscribe.
   ```
3. **Timing**: Send 1 hour after email (so you send email first, SMS as backup)
4. Click **Save**

#### 7.5 Add Tag for Tracking

1. Click **+ Add Action** → **Add Tag**
2. **Tag**: "form_abandoned" (for segmentation and reporting)
3. Click **Save**

**Result**: When someone starts your form but doesn't submit, they automatically receive an email in 30 minutes and an SMS in 1 hour, both with a link to resume. You can now segment "form_abandoned" contacts for follow-up campaigns.

---

### Step 8: Set Up A/B Testing (Multivariate)

Test different form designs to find what converts best:

#### 8.1 Enable A/B Testing

1. **In form builder**, go to **Settings** → **A/B Testing** (or **Experiments**)
2. Toggle **Enable A/B Testing** → ✅ On
3. **Test Variable**: Choose what to test:
   - **Form Headline**: "Get 50% Off" vs. "Join 500+ Happy Customers"
   - **CTA Button Text**: "Get Started" vs. "Book a Demo"
   - **Form Layout**: Multi-step (Step 1: contact info, Step 2: details) vs. single-page
   - **Field Count**: 4 fields vs. 6 fields
4. Click **Create Variant**

#### 8.2 Create Variant A (Control)

This is your current form. No changes needed.

#### 8.3 Create Variant B (Test)

1. Click **+ Create Variant**
2. **Variant Name**: "Shorter Form (4 fields)"
3. **Changes from control**:
   - Remove "Monthly Leads Target" field (keep only Name, Email, Phone, Business Type)
   - Change CTA button text from "Submit" to "Book Free Consultation"
   - Change headline from "Agency Intake" to "Let's Discuss Your Goals"
4. Click **Save Variant**

#### 8.4 Set Traffic Split

1. **In A/B Testing settings**, allocate traffic:
   - **Variant A (Control)**: 50%
   - **Variant B (Test)**: 50%
2. **Minimum sample size**: 100 submissions per variant (to reach statistical significance)
3. **Duration**: Run test for 2–4 weeks (depending on traffic)
4. Click **Start Test**

#### 8.5 Monitor Results

1. **After 2 weeks**, check results in **form analytics**:
   - **Conversion rate (Variant A)**: X%
   - **Conversion rate (Variant B)**: Y%
   - **Winner**: Whichever variant has higher conversion rate
2. **If Variant B wins**:
   - Delete Variant A
   - Make Variant B the new control
   - Run another test (different variable)
3. **If Variant A wins** (or no significant difference):
   - Keep Variant A
   - Test a different variable next time

**Typical A/B test result**: Reducing form fields from 6 to 4 increases submission rate by 15–25% (depends on audience and traffic source).

---

## Part 3: Advanced Tactics & Optimization

![Part 3: Advanced Tactics & Optimization](/images/2026-10-13-gohighlevel-forms-builder-advanced-features-guide-s2.jpg)


### Tactic 1: Progressive Profiling (Collect More Data Over Time)

Instead of asking all 10 questions on first visit, ask 3 now, then ask 3 more on second visit (if they return), then 4 more on third visit.

#### How It Works

1. **Visit 1** (first form submission):
   - Name, Email, Phone (essential contact info)
   - Save to CRM; tag "profiled_v1"

2. **Visit 2** (customer returns, form appears again):
   - Form prefills Name, Email, Phone (from CRM)
   - Shows only new fields: Company, Industry, Budget (not asked before)
   - Conditional rule: **If** tag = "profiled_v1" **Then** hide Name, Email, Phone; show Company, Industry, Budget
   - On submit, add tag "profiled_v2"

3. **Visit 3** (third return):
   - Prefills Name, Email, Phone, Company, Industry, Budget
   - Shows only: Pain Points, Timeline, Decision Makers
   - Conditional rule: **If** tag = "profiled_v2" **Then** hide first 6 fields; show Pain Points, Timeline, Decision Makers
   - On submit, add tag "profiled_v3"

**Benefit**: Returning customers see progressively fewer generic questions because you already know their basics. New customers always start with essential info. Same form, personalized experience based on history.

#### Setup in GHL

1. Create the multi-question form (Name, Email, Phone, Company, Industry, Budget, Pain Points, Timeline, Decision Makers)
2. Group fields into "Visit X" sections using page breaks
3. For each section after the first:
   - Add conditional rule: **If** contact has tag "profiled_vX" **Then** show this section; else hide
4. Add post-submission tag automation: **If** form submitted **Then** add tag "profiled_v[next number]"

---

### Tactic 2: Conditional CRM Field Updates

When a contact updates their information via form, selectively update their CRM record based on what they submitted (don't overwrite fields with blank values):

#### How It Works

1. **Form submitted** → Name, Email, Phone filled
2. **CRM update rule**:
   - **If** form field "Name" is not empty → update CRM "Contact Name"
   - **If** form field "Email" is not empty → update CRM "Email"
   - **If** form field "Phone" is not empty → update CRM "Phone"
   - **If** form field "Company" is empty → **do not** overwrite CRM "Company" (leave existing value)

This prevents accidental overwrites when a form field is optional and the submitter leaves it blank.

#### Setup in GHL

1. **Form settings** → **CRM Integration** → **Update Existing Contact**
2. **Field mapping**:
   - For each form field, set:
     - **Match field**: Email (to find existing contact)
     - **Update if not empty**: ✅ Enabled
3. Save mappings

---

### Tactic 3: Dynamic Pricing Based on Form Answers

Charge different prices based on selections (e.g., "Basic Plan: $99, Pro Plan: $299, Enterprise: Custom"):

#### How It Works

1. **Form field**: Dropdown — "Which plan?"
   - Option 1: "Basic" (price: $99)
   - Option 2: "Pro" (price: $299)
   - Option 3: "Enterprise" (price: quote via email)

2. **Payment field** (Stripe):
   - **Type**: Variable (submitter enters or system calculates)
   - **Logic**:
     - **If** plan = "Basic" → charge $99
     - **If** plan = "Pro" → charge $299
     - **If** plan = "Enterprise" → skip Stripe; send email trigger to sales team

#### Setup in GHL

1. Add **Plan Selection** dropdown field (Field 4)
2. Add **Payment** field with conditional logic:
   - **If** plan = "Enterprise" → hide payment field; trigger "Enterprise Sales Inquiry" automation
   - **Else** → show payment field
3. **Stripe payment amount**:
   - Set to "variable based on field value"
   - **Formula**: `If(plan == "Basic", 99, If(plan == "Pro", 299, 0))`
   - (Check GHL formula syntax; above is conceptual)

---

### Tactic 4: SMS-Based Form Completion (Alternative to Web Form)

For mobile-first audiences (e.g., local service customers), collect information via SMS Keyword Trigger:

**Example flow**:
1. Customer texts "INFO" to your business SMS number
2. GHL automation replies with a text-based form: "Reply with (1) Your Name, (2) Email, (3) Phone"
3. Customer replies: "John Doe, john@example.com, 555-123-4567"
4. GHL parses response → creates contact → sends confirmation SMS
5. Contact added to CRM same as web form submission

This avoids web form friction for customers on mobile with spotty signal.

**Setup**: Requires GHL SMS keyword automation + advanced parsing (outside scope of this guide; see `/blog notebooklm` for Twilio Flex parsing or contact GHL support).

---

## Part 4: Troubleshooting & Common Errors

### Error 1: Conditional Logic Not Working

**Symptom**: Field appears even though condition says it should be hidden.

**Causes & Fixes**:
1. **Case sensitivity**: Dropdown option is "Agency" but rule checks for "agency" (lowercase)
   - **Fix**: Use exact case match in conditional rule
2. **Stale field cache**: You changed the dropdown options, but form still checks old values
   - **Fix**: Clear browser cache (Ctrl+Shift+Delete) and reload form
3. **Wrong field referenced**: Condition checks "Business Type v1" but form field is "Business Type"
   - **Fix**: Verify field name matches exactly in condition
4. **Multiple conflicting rules**: Two rules hiding and showing the same field
   - **Fix**: Delete one rule or set priority/order

---

### Error