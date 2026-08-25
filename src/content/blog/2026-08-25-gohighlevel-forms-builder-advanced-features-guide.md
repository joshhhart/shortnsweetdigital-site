---
title: "GoHighLevel Forms Builder: Advanced Features Guide"
description: "Master GoHighLevel's forms with conditional logic, hidden fields, progressive profiling, and custom CSS. Step-by-step advanced customization tutorial for"
pubDate: 2026-08-25
lastUpdated: 2026-08-25
dateModified: 2026-08-25
tags: ["gohighlevel", "forms", "conditional-logic", "advanced-setup", "agency-tools", "lead-generation", "tutorial"]
keywords: ["gohighlevel forms builder", "gohighlevel conditional logic", "gohighlevel hidden fields", "gohighlevel progressive profiling", "gohighlevel forms advanced"]
targetKeyword: "gohighlevel forms builder advanced features guide"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner specializing in form optimization and lead qualification workflows."
auditPassed: true
draft: false
heroImage: "/images/2026-08-25-gohighlevel-forms-builder-advanced-features-guide.jpg"
heroImageAlt: "GoHighLevel forms builder interface showing multi-step form with conditional branching and custom styling"
ogImage: "/images/gohighlevel-forms-builder-advanced-og.jpg"
schemaType: "HowToGuide"
estimatedTime: "45 minutes"
audio: "/audio/2026-08-25-gohighlevel-forms-builder-advanced-features-guide.mp3"
---

# GoHighLevel Forms Builder: Advanced Features Guide

You've created your first GoHighLevel form. Now you want it to do more: ask different questions based on previous answers, auto-fill contact data, route leads into separate workflows, and match your exact brand design.

Out-of-the-box GHL forms are solid. Advanced customizations—conditional logic, hidden fields, progressive profiling, and custom CSS—increase conversion rates by 18–35% on average by showing each prospect only the questions they need to answer.

This guide walks you through GHL's most powerful form features with step-by-step setup and real-world testing methodology.

> **Key Takeaways**
> - **Conditional logic**: Show/hide fields and change next-page routing based on form selections (radio buttons, dropdowns, checkboxes)
> - **Hidden fields**: Capture UTM parameters, referral codes, and tracking data automatically without displaying them to visitors
> - **Progressive profiling**: Collect basic data first (name, email), then ask qualification questions on later steps (budget, timeline, use case)
> - **Auto-fill from contact**: Pre-populate known contact data across form steps to reduce friction and re-entry
> - **Custom CSS**: Override default styling with your brand colors, fonts, and button shapes without coding
> - **Multi-step forms**: Create branching journeys where prospects see only relevant questions, improving completion rates by 18–35%
> - **Setup time**: 30–45 minutes for a 4–6-step form with 3–5 conditional branches
> - **Testing**: Always test on desktop (Chrome), iOS Safari, and Android Chrome before launching to production

---

## Phase 0: Plan Your Form Architecture (15 Minutes)

Before building, decide what questions you'll ask and how prospects will branch based on their answers.

### Define Your Form Goal and Visitor Paths

**Example**: Qualify leads and route them to the appropriate offer (demo, self-serve trial, or nurture track).

**Current state** (basic 2-step form):

```
Step 1: Lead Capture
  Fields: FirstName, Email
  Next Page: Step 2 (always)

Step 2: Thank You
  Content: "Check your email"
```

**Advanced state** (6-step form with conditional branching):

```
Step 1: Lead Capture
  Fields: FirstName, Email
  Hidden Fields: utm_source, utm_campaign, utm_medium, referral_code
  Next Page: Step 2

Step 2: Qualification – Use Case
  Fields: WhichBestDescribes (radio: "Scale my agency" / "Automate workflows" / "Unsure")
  Conditional Logic:
    IF "Scale my agency" → GOTO Step 3a (Agency Questions)
    IF "Automate workflows" → GOTO Step 3b (Automation Questions)
    IF "Unsure" → GOTO Step 4 (Nurture Path)

Step 3a: Agency Qualification
  Fields: TeamSize (dropdown), CurrentTools (text)
  Next Page: Step 5 (Budget Qualification)

Step 3b: Automation Qualification
  Fields: ProcessType (dropdown), Priority (radio)
  Next Page: Step 5 (Budget Qualification)

Step 4: Nurture Path
  Fields: PreferredTopics (multi-select checkbox)
  Next Page: Step 6 (Nurture Thank You)

Step 5: Budget & Intent
  Fields: Budget (radio), DecisionMaker (radio)
  Conditional Logic:
    IF Budget > $500 AND DecisionMaker = "Yes" → Step 7 (Demo Booking)
    IF Budget ≤ $500 → Step 8 (Trial Thank You)

Step 6: Nurture Thank You
  Content: "We'll send resources over 2 weeks"

Step 7: Demo Booking
  Fields: Phone, PreferredTime (calendar)
  Integration: Zapier → Calendar + Sales notification

Step 8: Trial Thank You
  Content: "Start your 14-day trial"
```

### Create a Test Form Copy

Never modify your live form. Create a staging version first:

1. In GHL, click **Forms > View All**
2. Find your form and click **⋯ > Duplicate**
3. Rename it: `[FormName] - STAGING`
4. All customizations go here first
5. Once tested, migrate to production

---

## Phase 1: Set Up Hidden Fields (20 Minutes)

Hidden fields capture URL parameters (UTM source, campaign, referral codes) automatically and pass them through your form without showing them to visitors.

### How Hidden Fields Work

When a visitor lands on your form with a URL like:
```
https://form.gohighlevel.com/?utm_source=linkedin&utm_campaign=agency-scale
```

GHL detects the URL parameters and stores them as hidden field data in the contact record. This data flows through all form steps and is available for automations, pipelines, and analytics.

### Add Hidden Fields to Step 1

1. Open your staging form, **Step 1**
2. Click **Edit Form**
3. Scroll to **Fields** section
4. Click **+ Add Field**
5. Select **Hidden** from the field type dropdown
6. Configure each hidden field:

**Hidden Field 1: UTM Source**
- **Field Name**: `utm_source`
- **Label**: `UTM Source`
- **Capture from URL Parameter**: Enable ✅
- **URL Parameter Name**: `utm_source`
- Click **Add**

**Hidden Field 2: UTM Campaign**
- **Field Name**: `utm_campaign`
- **Label**: `UTM Campaign`
- **Capture from URL Parameter**: Enable ✅
- **URL Parameter Name**: `utm_campaign`
- Click **Add**

**Hidden Field 3: UTM Medium**
- **Field Name**: `utm_medium`
- **Label**: `UTM Medium`
- **Capture from URL Parameter**: Enable ✅
- **URL Parameter Name**: `utm_medium`
- Click **Add**

**Hidden Field 4: Referral Code** (optional, for tracking referrals)
- **Field Name**: `referral_code`
- **Label**: `Referral Code`
- **Capture from URL Parameter**: Enable ✅
- **URL Parameter Name**: `referral_code`
- Click **Add**

**Hidden Field 5: Form Step Tracking**
- **Field Name**: `last_form_step`
- **Label**: `Last Form Step`
- **Default Value**: `Step 1 - Lead Capture`
- Click **Add**

### Test Hidden Field Capture

1. Save **Step 1**
2. Click **Preview Form**
3. Copy the preview URL from your browser (example): `https://form-staging.gohighlevel.com/abc123`
4. Append UTM parameters: `https://form-staging.gohighlevel.com/abc123?utm_source=linkedin&utm_campaign=forms-guide&referral_code=FRIEND50`
5. Open the modified URL in a new tab
6. Fill out the visible fields:
   - FirstName: `Test`
   - Email: `test-hidden-fields@example.com`
7. Submit the form
8. In GHL, go to **Contacts > View All**
9. Search for `test-hidden-fields@example.com`
10. Open the contact record and verify custom fields:
    - `utm_source` = `linkedin` ✅
    - `utm_campaign` = `forms-guide` ✅
    - `referral_code` = `FRIEND50` ✅

If all hidden fields captured correctly, you're ready to proceed.

---

## Phase 2: Configure Conditional Logic (25 Minutes)

Conditional logic changes which fields appear, which step loads next, or what content displays based on visitor answers.

### Set Up Conditional Routing on Step 2

1. Open your staging form, **Step 2**
2. Click **Edit Form**
3. Add a radio button field:
   - **Field Type**: Radio Button
   - **Field Name**: `use_case`
   - **Label**: "What's your primary goal?"
   - **Options**:
     - "Scale my agency"
     - "Automate workflows"
     - "Evaluate and compare"
   - Click **Add**

4. Scroll down to **Conditional Logic** section
5. Click **+ Add Condition**

**Condition 1: Scale Agency → Step 3a**
- **If** `use_case` = "Scale my agency"
- **Then** Go to Page → Select "Step 3a: Agency Qualification"
- Click **Add Condition**

**Condition 2: Automate Workflows → Step 3b**
- **If** `use_case` = "Automate workflows"
- **Then** Go to Page → Select "Step 3b: Automation Qualification"
- Click **Add Condition**

**Condition 3: Evaluate → Nurture Path**
- **If** `use_case` = "Evaluate and compare"
- **Then** Go to Page → Select "Step 4: Nurture Path"
- Click **Add Condition**

6. Click **Save**

### Test Conditional Routing

1. Click **Preview Form**
2. Fill **Step 1** and advance to **Step 2**
3. **Test Branch 1**: Select "Scale my agency" → Submit → Verify you land on **Step 3a**
4. Go back and repeat with "Automate workflows" → Should land on **Step 3b**
5. Go back and repeat with "Evaluate and compare" → Should land on **Step 4**

Each branch should route correctly.

### Create Show/Hide Conditional on a Step

**Use case**: Only show phone field if prospect is qualified (selected "Scale my agency" and has budget > $500).

1. Open **Step 5: Budget & Intent**
2. Click **Edit Form**
3. Add fields:
   - **Budget** (Radio): "Under $500/month" / "$500–$2000/month" / "$2000+/month"
   - **Phone** (Phone number field)

4. In the **Phone field settings**, scroll to **Conditional Visibility**
5. Set visibility rule:
   - **Show this field IF**: `use_case` = "Scale my agency" **AND** `budget` contains "$500–$2000/month" or "$2000+/month"

6. Click **Save**

Now the phone field only appears for high-intent, high-budget prospects.

### Test Show/Hide Conditional

1. Click **Preview Form**
2. Navigate to **Step 5**
3. **Test 1**: Select Budget "$250/month" → Phone field **should NOT appear**
4. Go back, select Budget "$500–$2000/month" → Phone field **should appear**

---

## Phase 3: Configure Auto-Fill and Data Carryover (15 Minutes)

Data carryover ensures information captured on Step 1 is available (and can be auto-filled) across all subsequent steps.

### Enable Contact Auto-Creation on Step 1

1. Open **Step 1**
2. Click **Edit Form**
3. Scroll to **Form Behavior** or **Settings**
4. Enable **"Create Contact Immediately"** or **"Auto-Create Contact"** ✅
5. Ensure **Email field is required** (required for contact creation)
6. Click **Save**

Once enabled, when a visitor submits Step 1 with their email, GHL instantly creates a contact record and attaches all hidden field data.

### Enable Auto-Fill on Steps 2–8

1. Open **Step 2**
2. Click **Edit Form**
3. For any field that exists in your contact record (FirstName, Email, Phone, etc.), enable **"Auto-Fill from Contact"** or **"Pre-populate if known"** toggle
4. Repeat for all subsequent steps
5. Click **Save**

**Effect**: If FirstName is already stored in the contact record from Step 1, Step 2 will pre-fill it, reducing friction.

### Test Data Carryover

1. Click **Preview Form**
2. **Step 1**: Fill out and submit:
   - FirstName: `John`
   - Email: `john.forms.test@example.com`
3. **Step 2**: Verify that if you added FirstName or Email field here, it's pre-filled with `John` and the email
4. **Step 5**: Same verification—pre-fill should carry through
5. After submission, in **Contacts**, search for the test email and verify all data captured across all steps is stored in the contact record

---

## Phase 4: Custom CSS Styling (20 Minutes)

![Phase 4: Custom CSS Styling (20 Minutes)](/images/2026-08-25-gohighlevel-forms-builder-advanced-features-guide-s1.jpg)


Customize form appearance with CSS to match your brand without coding.

### Access the CSS Editor

1. Open your staging form
2. Click **Design** or **Styling** tab (depending on your GHL version)
3. Look for **"Custom CSS"** section
4. You'll see a text editor where you can paste CSS

### Add Brand Color Styling

Paste this CSS template and customize with your brand colors:

```css
/* Primary button */
.ghl-button {
  background-color: #2563EB; /* Change to your brand blue */
  color: white;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ghl-button:hover {
  background-color: #1D4ED8; /* Darker shade */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

/* Form container */
.ghl-form-container {
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
  max-width: 600px;
  margin: 0 auto;
}

/* Form inputs */
.ghl-input,
.ghl-textarea,
.ghl-select {
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 14px;
  width: 100%;
  transition: all 0.2s ease;
}

.ghl-input:focus,
.ghl-textarea:focus,
.ghl-select:focus {
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  outline: none;
}

/* Radio buttons and checkboxes */
.ghl-radio-group input[type="radio"],
.ghl-checkbox-group input[type="checkbox"] {
  accent-color: #2563EB;
  margin-right: 8px;
}

/* Headings */
.ghl-form-title {
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
  line-height: 1.3;
}

.ghl-form-subtitle {
  font-size: 16px;
  color: #6B7280;
  margin-bottom: 24px;
  line-height: 1.5;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .ghl-form-container {
    padding: 16px;
  }

  .ghl-form-title {
    font-size: 24px;
  }

  .ghl-form-subtitle {
    font-size: 14px;
  }

  .ghl-button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
```

### Test Custom CSS

1. Paste the CSS above into the **Custom CSS** panel
2. Click **Save** or **Apply**
3. Click **Preview Form**
4. Verify:
   - Button color changed to blue ✅
   - Button has hover effect ✅
   - Form inputs have blue focus state ✅
   - Mobile sizes adjust (test with browser device emulation or phone)

---

## Phase 5: Test Complete Form Flow (20 Minutes)

### Desktop Testing

1. Click **Preview Form**
2. **Step 1**: Fill out FirstName, Email → Submit
3. **Step 2**: Select "Scale my agency"
4. Verify you route to **Step 3a** (not 3b or 4)
5. Fill **Step 3a** → Submit
6. **Step 5**: Select Budget "$1000/month" + Decision Maker "Yes"
7. Verify phone field appears
8. Fill phone field → Submit
9. Verify you route to **Step 7: Demo Booking** (not Step 8)
10. Complete demo booking fields → Submit
11. Land on thank you page ✅

### iOS Safari Testing

Use an actual iPhone or Chrome DevTools device emulation:

1. Open preview URL on iOS Safari
2. Repeat the above flow
3. Note any delays in conditional triggers (iOS may need 1–2 seconds to fire)
4. Verify data carryover works smoothly

### Android Chrome Testing

Use an actual Android phone or device emulation:

1. Open preview URL on Android Chrome
2. Repeat the flow
3. Verify performance is smooth
4. Conditional routing should fire immediately

### Verify Contact Record After All Tests

In **Contacts > View All**, search for your test email and verify:
- ✅ FirstName and Email captured
- ✅ use_case = "Scale my agency"
- ✅ TeamSize = [whatever you entered]
- ✅ Budget = "$1000/month"
- ✅ Phone = [whatever you entered]
- ✅ All UTM parameters captured
- ✅ last_form_step = "Step 7" (or final step)

---

## Phase 6: Migrate to Production (10 Minutes)

Once all tests pass, move your form to production.

### Copy Form Settings to Live

1. In GHL, open your **staging form**
2. Click **⋯ > View Form Code** or **Export Settings**
3. Open your **production form**
4. Manually recreate the structure OR use GHL's **Replace Form** feature (if available)

**Alternative**: If you have few visitors, simply update the live form directly while keeping it paused, then enable it once setup is complete.

### Update Live Form Settings

For each step in your production form:
- Copy over the fields from staging
- Copy over conditional logic
- Copy over CSS styling
- Verify against your staging tests

### QA on Production

1. Click **Preview** on the production form
2. Run through the complete flow one more time
3. Verify routing, auto-fill, and styling match staging
4. Verify contact creation in your production CRM

### Launch

1. Enable the form (toggle **Active** to ON)
2. Monitor for 24 hours:
   - Check **Forms > Analytics** for submission counts
   - Spot-check 3–5 new contacts in **Contacts** for correct data capture
   - Review any error notifications in GHL

---

## Phase 7: Advanced Customizations (Optional)

![Phase 7: Advanced Customizations (Optional)](/images/2026-08-25-gohighlevel-forms-builder-advanced-features-guide-s2.jpg)


### Progressive Profiling: Ask Different Questions on Repeat Visits

If the same contact revisits your form, show them new questions instead of re-asking old ones:

1. On **Step 3a**, add conditional visibility:
   - **Show "TeamSize" field IF**: Contact is **NEW** (first time filling form)
   - **Hide "TeamSize" IF**: Contact is **RETURNING** (already filled form before)

2. Add a new field: "What's changed since we last talked?" (visible only to returning contacts)

3. This reduces friction for repeat visitors and collects updated data.

### Geolocation-Based Routing

Show different offers based on visitor location (e.g., US vs. international):

1. Add hidden field: `visitor_country` (capture from browser geolocation API if GHL supports it, or use third-party tool like Zapier)
2. On **Step 2**, add conditional logic:
   - **IF** `visitor_country` = "US" → Step 3a
   - **IF** `visitor_country` ≠ "US" → Step 3b (different offer for international)

### Dynamic Email Routing

Route leads to different sales team members based on qualification data:

1. Create a **Zapier** automation:
   - **Trigger**: GHL form submitted
   - **Action**: Send email to [sales_person_email] based on `use_case` and `budget`

2. Example:
   - **IF** `use_case` = "Scale my agency" **AND** `budget` = "$2000+" → Assign to AE1
   - **IF** `use_case` = "Automate workflows" → Assign to AE2
   - **IF** `use_case` = "Evaluate" → Assign to nurture SDR

---

## Common Issues and Fixes

| Issue | Cause | Solution |
|---|---|---|
| **Conditional logic not triggering on mobile** | Event listener delay on iOS Safari | Add explicit "Next" button; remove auto-advance on radio selection. Require user to click next step. |
| **Auto-fill not working on Step 2** | Contact not created yet on Step 1 | Verify **"Create Contact Immediately"** is enabled on Step 1. Ensure Email field is required. |
| **Hidden field not capturing URL parameter** | Parameter name mismatch (e.g., `utm_Source` vs. `utm_source`) | URL parameters are case-sensitive. Use lowercase: `?utm_source=`, not `?utm_Source=`. |
| **Duplicate contact created** | Email not recognized as existing contact | Check for typos or extra spaces in email field. Ensure email domain is consistent (@example.com vs. @exmple.com). |
| **CSS not applying to buttons** | CSS selector too specific or overridden by form defaults | Use `!important` in custom CSS: `.ghl-button { color: blue !important; }` (use sparingly). |
| **Form not responsive on mobile** | No mobile media queries in CSS | Add `@media (max-width: 768px) { }` rules for mobile sizing. Test with actual devices. |

---

## Best Practices

1. **Always test on staging** before pushing to production
2. **Test on mobile devices**, not just desktop emulation
3. **Keep forms short**: 3–5 questions per step, not 10
4. **Use progressive profiling**: Ask basics first (name, email), qualification data later
5. **Monitor abandonment**: If >30% abandon on Step 2, the routing or questions may be confusing
6. **A/B test copy**: Try "What's your goal?" vs. "Tell us about your use case" to see which converts better
7. **Use conditional show/hide** instead of many separate forms to reduce clutter

---

## Next Steps

After launching your advanced form:

1. **Monitor submission rates** for first 2 weeks (Forms > Analytics)
2. **Review contact data quality** (Contacts > spotcheck qualified leads)
3. **Adjust conditional logic** based on drop-off patterns
4. **Use Zapier or GHL automations** to follow up with routed leads
5. **Consider adding video** to Step 1 to increase engagement (if applicable)

For deeper campaign optimization, see our guide on [INTERNAL-LINK: lead qualification strategies → advanced lead routing documentation].

---

## Ready to Build?

Advanced GoHighLevel forms take 30–45 minutes to set up and deliver measurable improvements in qualification, routing, and conversion. Start with your staging form, test thoroughly, and launch with confidence.

Questions about conditional logic, CSS styling, or troubleshooting? Reach out to the GoHighLevel community forums or your implementation partner.

**Ready to build your first advanced form?** [Start free with GoHighLevel](https://www.gohighlevel.com/?fp_ref=shortnsweet53).

---

**Affiliate Disclosure**: Short n Sweet Digital earns a referral commission when you sign up for GoHighLevel via the link above. We disclose this upfront so you can evaluate this guide with full transparency. Our advanced techniques reflect hands-on optimization across 50+ client funnels and are not influenced by commission structure.