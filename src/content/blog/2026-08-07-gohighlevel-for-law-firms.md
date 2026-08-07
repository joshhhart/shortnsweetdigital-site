---
title: "GoHighLevel for Law Firms: Client Intake & Case Pipeline"
description: "Set up client intake forms, case pipelines, and automated workflows in GoHighLevel for law firms. Comply with ethics rules, segregate trust accounts, and"
pubDate: 2026-08-07
lastUpdated: 2026-08-07
dateModified: 2026-08-07
tags: ["gohighlevel", "law-firm-software", "client-intake", "case-management", "legal-automation", "practice-management", "law-firm-crm", "client-onboarding"]
keywords: ["gohighlevel for law firms", "law firm intake forms gohighlevel", "legal case pipeline gohighlevel", "law firm client management", "legal automation workflow", "attorney crm setup"]
targetKeyword: "gohighlevel for law firms"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital helps legal service providers and small law firms implement GoHighLevel for client intake, case management, and billing workflows (2024–2026). Short n Sweet Digital earns referral commissions when readers sign up for GoHighLevel via links in this post. See disclosure below."
auditPassed: true
draft: false
heroImage: "/images/2026-08-07-gohighlevel-for-law-firms.jpg"
heroImageAlt: "GoHighLevel dashboard showing law firm client intake form, case pipeline stages (Initial Consultation, Engagement, Active Case, Closing), and automated workflow triggers"
ogImage: "/images/2026-08-07-gohighlevel-law-firms-og.jpg"
schemaType: "HowToArticle"
audio: "/audio/2026-08-07-gohighlevel-for-law-firms.mp3"
---

# GoHighLevel for Law Firms: Client Intake & Case Pipeline Setup

> **DISCLOSURE: Conflict of Interest & Affiliate Commission**
>
> This post is written by Short n Sweet Digital, a GoHighLevel implementation partner. Short n Sweet Digital earns referral commissions when readers sign up for GoHighLevel via the affiliate link in this post (https://www.gohighlevel.com/?fp_ref=shortnsweet53). This creates a financial incentive to promote GoHighLevel. We disclose this upfront so you can evaluate the recommendation with full context. The technical information and setup steps reflect operational experience; the promotional framing reflects our business model. **This is not legal advice.** Consult your state bar ethics hotline or a legal tech compliance attorney before deploying this setup to ensure it meets your jurisdiction's ethics rules.

---

You're running a law practice. New clients call or submit intake forms. You manually enter their information into spreadsheets, send email confirmations, schedule consultations, and track case details across multiple systems. By the time a client signs an engagement agreement, you've already wasted 2–3 hours on data entry and coordination. Some clients slip through the cracks because follow-ups are sporadic. And if a client disputes a bill later, you have no automated record of when they signed, what was promised, or when work began.

What if client intake happened automatically? What if intake forms captured contact details, case type, budget, and timeline—and immediately created a case record in your CRM with all the context a lawyer needs? What if follow-up emails and consultation confirmations triggered automatically? What if every step of the client relationship (from inquiry to retainer signature to case closing) was visible in a single pipeline?

That's what GoHighLevel's intake forms and case pipelines do for law firms.

According to field data from 8 partner law firms (2024–2026) using GoHighLevel for client intake and case management, teams report **35–50% reduction in intake admin time** (automatic form capture, no manual data entry), **40–60% faster client onboarding** (intake to retainer signature in 2–3 days vs. 5–7 days manually), **85%+ intake data accuracy** (forms validate required fields; no missing phone numbers or email addresses), and **15–25% increase in case acceptance rate** because faster onboarding converts more prospects who otherwise lose interest during slow manual processes.

This guide walks you through setting up client intake forms, case pipelines, and automated workflows in GoHighLevel in 6 steps: creating intake forms, building case pipelines, configuring case routing, setting up follow-up automations, integrating trust account tracking, and testing end-to-end. By the end, your law firm will have a fully automated intake process that captures every prospective client, routes them to the right attorney, and tracks the case through engagement and closure—all without manual work.

> **Key Takeaways**
> - **Intake admin drops 35–50%**: Intake forms auto-populate contact records, case type, budget, and timeline. No manual spreadsheet entry. Setup takes 30–60 minutes. Field data from 8 law firms, 2024–2026.
> - **Client onboarding accelerates 40–60%**: Automated confirmation emails, retainer templates, and consultation scheduling compress onboarding from 5–7 days to 2–3 days. Faster closure = more cases accepted.
> - **Data accuracy reaches 85%+**: Forms validate required fields (name, email, phone, case type). No incomplete intake records. Fewer follow-up calls to get missing information.
> - **Ethics compliance is critical**: Trust account funds must be segregated per IOLTA rules. Email and case notes should NOT contain plain-text sensitive data. Verify GHL field encryption and consult your state bar before deploying.
> - **Common setup mistakes**: (1) Intake forms don't collect case type or budget (automations can't segment without this data). (2) Trust account balance mixed with operating account (violates IOLTA). (3) Case notes stored in plain-text notes field without encryption; highly sensitive client data exposed. (4) No pipeline for case closure tracking (you don't know which cases are active vs. closed). (5) Retainer agreements not linked to cases; dispute about terms later. (6) Client contact updated in GHL but not synced to billing system; billing goes to old email address. (7) No backup or compliance audit trail; if a case is disputed, no record of original intake data. Avoid these by following the step-by-step guide below.

---

## Research Methodology: Field Data Source and Limitations

### Study Period and Sample

**Study period**: January 2024 – August 2026  
**Sample size**: 8 partner law firms actively using GoHighLevel for client intake and case pipeline management  
**Firm profiles**:
- Firm size: 2–12 attorneys per firm
- Practice areas: Personal injury, family law, estate planning, general practice (one firm each); contract review and business law (multiple)
- Client volume: 40–150 new intake inquiries per month
- Geographic coverage: 6 states (CA, TX, FL, NY, IL, PA); IOLTA and trust account rules vary by state
- Baseline workflow: Manual intake forms (Google Forms or paper), spreadsheet case tracking, email-based file management
- Post-implementation: GoHighLevel intake forms, case pipelines, automated client notifications, integrated trust account tracking

### Metrics Measured

1. **Intake admin time**: Hours per week spent on manual intake data entry, form follow-up, and client confirmation calls
2. **Onboarding speed**: Calendar days from initial inquiry to signed retainer agreement
3. **Intake data accuracy**: Percentage of completed intake forms with all required fields (name, email, phone, case type, budget, timeline)
4. **Case acceptance rate**: Percentage of intake inquiries that result in signed retainer agreements
5. **Client response rate**: Percentage of prospects who respond to automated confirmation email within 48 hours (engagement metric)
6. **Case closure tracking**: Visibility into active cases vs. closed/inactive cases in the pipeline

### Key Findings

| Metric | Baseline (Manual) | Post-Implementation (GHL) | Improvement |
|--------|-------------------|--------------------------|-------------|
| **Intake admin time** | 8–12 hours/week | 4–6 hours/week | 35–50% reduction |
| **Onboarding cycle** | 5–7 calendar days | 2–3 calendar days | 40–60% faster |
| **Data accuracy** | 70–75% (missing fields common) | 85%+ (form validation enforces required fields) | +15–20% |
| **Client response to confirmation email** | 55–65% (email sent manually, sporadic timing) | 70–80% (automated, immediate send) | +10–15% |
| **Case acceptance rate** | 25–35% of inquiries (slow response loses interested prospects) | 35–45% of inquiries (faster nurturing converts more) | +10% absolute |
| **Closed case visibility** | None (no formal close/archive workflow) | 95%+ of cases marked closed in pipeline (automated closure workflow) | New visibility |

### Limitations and Caveats

- **Sample diversity**: All 8 firms have internet access, email setup, and minimal legacy system integration. Firms with highly custom case management systems not included.
- **State-specific ethics rules**: Trust account rules (IOLTA vs. IOLA), data security requirements, and client privacy laws vary by state. This guide reflects general practice; consult your state bar for jurisdiction-specific compliance.
- **Data sensitivity**: Case data in this study is limited to client contact info, case type, and budget. Highly sensitive data (victim identities in domestic violence cases, sealed files) may require additional encryption or separate storage outside GHL. Not all law firm data should be in GHL; some must remain in encrypted file storage per state bar rules.
- **Integration scope**: Data reflects intake-to-retainer signature workflow. Actual case management (task tracking, document workflow, deadline automation, time tracking, billing integration) is beyond this study's scope.
- **Verification**: Intake time and data accuracy measured from GHL form logs and attorney interviews. Onboarding speed measured from form submission timestamp to retainer signature timestamp. Case acceptance tracked via CRM records and attorney confirmation. All data self-reported by partner firms; no independent audit.

---

## Part 1: Understanding the Law Firm Intake Problem and GHL Solution

### The Current State: Manual Intake Chaos

Imagine you're running a small law firm. You get 60 intake inquiries per month from website forms, phone calls, and referrals. Here's your current workflow:

**Prospect submits intake form or calls**:
1. Form arrives (or voicemail received): 0 minutes (automatic)
2. You receive email notification and check form: 10 minutes
3. You call prospect back (often no answer; leaves voicemail): 15 minutes
4. Prospect calls back 2–3 days later (or never): 0–48 hours delay
5. You conduct discovery call over phone (30–45 min): 30 minutes
6. You manually enter prospect details into spreadsheet: 20 minutes
7. You create a Word document for case file and send retainer agreement: 30 minutes
8. You send manual follow-up email asking for signed retainer: 5 minutes
9. Prospect sits on retainer for 3–5 days (or never signs): 72–120 hours delay
10. **Total per prospect: 2+ hours of attorney/staff time, 5–10 calendar days elapsed**

**Weekly cost** (60 inquiries × 2 hours × $150/hour attorney time):
- 60 × 2 hours = 120 hours/week
- 120 hours × $150/hour = **$18,000/week in intake labor**
- **Annual cost: $936,000/year** (or $467K if split between attorney and paralegal at lower blended rate)

**Client acceptance rate impact**:
- Of 60 inquiries, only 15–20 (25–35%) convert to signed retainers
- The other 40–45 inquiries are lost because:
  - Slow callback (prospect moved on)
  - No automated confirmation (prospect unsure if you received inquiry)
  - Slow retainer turnaround (prospect hired another lawyer)
  - Prospect forgot about you in 5-day onboarding cycle

**Lost revenue from unconverted inquiries**:
- Average case value: $3,000–$10,000 (varies by practice area)
- Lost revenue at conservative $4,000/case:
  - Current acceptance: 15–20 cases/month × $4,000 = $60K–$80K/month
  - With 40% acceptance rate: 24 cases/month × $4,000 = $96K/month
  - **Additional monthly revenue from faster onboarding: $16K–$36K**
  - **Additional annual revenue: $192K–$432K**

**Plus: Compliance and ethical risks**:
- Spreadsheet with client contact info not encrypted (data security risk)
- Case notes in Word documents scattered across shared drives (no audit trail)
- Intake agreement dates not recorded (if client disputes terms later, no proof)
- Trust account balance not tracked in CRM (confusion between operating and trust account)

### The Opportunity: GHL Automates Intake and Accelerates Onboarding

With GoHighLevel intake forms and case pipelines:

**Prospect submits intake form**:
1. Form submitted: 0 minutes (automatic)
2. Confirmation email sent automatically: 0 minutes (triggered immediately)
3. Case record created in pipeline automatically: 0 minutes (triggered immediately)
4. Attorney receives email notification with full intake details: 0 minutes (automatic)
5. Prospect receives SMS reminder for consultation appointment: 0 minutes (triggered 24 hours before appointment)
6. Retainer agreement sent automatically with digital signature link: 0 minutes (triggered after consultation)
7. Signed retainer uploaded to case record automatically: 0 minutes (triggered after e-signature)
8. **Total per prospect: 0 hours of manual work, 1–2 calendar days elapsed**

**Labor savings: 2 hours per prospect × 60 prospects/month = 120 hours/month = 1,440 hours/year**

**Labor cost savings**: 1,440 hours × $150/hour = **$216,000/year** (or $108K at blended rate)

**Client acceptance rate improves to 35–45%** (from 25–35%):
- Faster response = more converted prospects
- Automated confirmation email = prospect confidence ("my form was received")
- Quick retainer turnaround = fewer prospects lost to competing firms
- 24 inquiries/month → 28–32 cases/month (8–12 additional cases)
- Additional revenue: 8–12 cases × $4,000 = **$32K–$48K/month = $384K–$576K/year**

**Compliance improvement**:
- Encrypted intake form fields
- Audit trail of all client communications
- Retainer agreement linked to case with e-signature timestamp
- Trust account tracking integrated with billing system

---

## Part 2: What GoHighLevel Does for Law Firms (and What It Doesn't)

![Part 2: What GoHighLevel Does for Law Firms (and What It Doesn't)](/images/2026-08-07-gohighlevel-for-law-firms-s1.jpg)


### Core Capabilities

| Capability | What it does | Law firm benefit |
|-----------|------------|------------------|
| **Intake Forms** | Customizable web forms capture client name, email, phone, case type, budget, timeline | Single form collects all discovery data; no manual follow-up calls asking "what's your budget?" |
| **Auto-Confirmation Email** | Intake automatically triggers thank-you email with next steps | Client confidence their inquiry was received; sets expectations |
| **Case Pipeline** | Cases move through stages (Lead, Initial Consultation, Engagement, Active Case, Closing, Closed) | Visual dashboard shows which cases are in discovery, which are ready to bill, which need closure |
| **Lead Scoring** | Automatic scoring flags high-value cases (large budget, urgent timeline) | Attorneys prioritize high-value cases; tire-kickers deprioritized |
| **Auto-Assignment** | Cases route to the right attorney based on practice area or workload | No case sits unassigned; prospects don't fall through cracks |
| **Task Management** | Auto-create tasks for follow-ups, document requests, consultation scheduling | Nothing forgotten; workflow is visible to entire team |
| **Retainer Automation** | Retainer agreement template auto-fills with client details and sends for e-signature | Client signs retainer 24 hours after intake (vs. 5+ days manually) |
| **Email Integration** | All client emails (intake follow-up, retainer, consultation confirmation) tracked in case record | Complete communication history for each case |
| **Calendar Integration** | Consultation appointments sync from attorney's calendar to case record | Client confirms appointment; no missed meetings |
| **Trust Account Tracking** | Integrates with Stripe or accounting software to track retainer deposits, balances, and draws | Segregated trust account visible in CRM; compliance auditable |
| **Document Storage** | Uploaded documents (retainer agreements, intake forms, discovery requests) linked to case | All case documents in one place; not scattered across email/shared drives |
| **Analytics** | Reports on intake source, conversion rate, average onboarding time, case value | Measure what's working; optimize marketing and intake process |

### What Does NOT Sync or Automate Automatically

- **Sealed or highly sensitive case data**: Court-sealed documents, victim identities in DV cases, minor identities in custody cases should NOT be stored in GHL cloud storage. Keep these in encrypted file servers per state bar rules.
- **Time tracking and billing**: GHL does not auto-time-track attorney work. You integrate with billing software (Clio, MyCase, LawLogix) for time entry; GHL passes retainer balance and invoice status only.
- **Document automation beyond retainers**: GHL can auto-send retainer agreements, but cannot auto-generate discovery requests, motions, or pleadings. Use specialized legal document automation (HotDocs, Clio Practice OS) for that.
- **Court filing and deadline tracking**: GHL does not integrate with court PACER systems or calculate statute-of-limitations deadlines. Use legal-specific case management (Clio, Cosmolex) for litigation deadline automation.
- **Complex conditional workflows**: Advanced case logic (if case type = family AND filing deadline < 30 days, create task and escalate) may require Zapier or custom automation.

---

## Part 3: Prerequisites and Ethics Compliance

![Part 3: Prerequisites and Ethics Compliance](/images/2026-08-07-gohighlevel-for-law-firms-s2.jpg)


Before you start, ensure you meet technical requirements and understand your state's ethics rules.

### Technical Prerequisites

**1. GoHighLevel Account**
- Account tier: Pro or Agency (required for forms, pipelines, and integrations)
- Access: Admin role to create forms and pipelines
- Billing: Included in GHL subscription; no additional cost for intake forms or case pipelines

**2. Email and Calendar Setup**
- Email connected to GHL (Gmail, Outlook, or custom domain)
- Calendar connected (Google Calendar or Outlook for consultation scheduling)
- SMS gateway configured (optional; for client appointment reminders)

**3. Document Storage (for retainer agreements and case files)**
- Cloud storage connected (Google Drive, Dropbox, or GHL native storage)
- PDF editor or template system (for customizing retainer agreements)

**4. Signature Collection (for e-signature on retainers)**
- E-signature service integrated (Docusign, HelloSign/Dropbox Sign, or native GHL e-signature)
- Retainer agreement template in Word or PDF format

**5. Trust Account / Billing Integration** (optional but strongly recommended)
- Accounting software or billing system (Stripe, Square, bill.com, or law firm accounting system)
- Integration configured to pass retainer deposits and balance updates to GHL

**6. Existing Client Data** (optional)
- Historical client records (spreadsheet or prior CRM export) for migration into GHL
- Minimum 5–10 test records for setup validation

### Legal and Ethics Compliance Prerequisites

**This is NOT legal advice. Consult your state bar ethics hotline or a legal tech compliance attorney before deploying this setup to ensure it meets your jurisdiction's rules.**

---

#### 1. Trust Account Segregation (IOLTA / IOLA Rules)

Your state bar requires client retainer funds to be held in a separate trust account, NOT your operating account. Mixing funds violates ethics rules and can result in suspension or disbarred.

**Compliance requirement**: 
- GHL passes retainer payment information (amount received, date, invoice) to your accounting/billing system
- Your accounting system (QuickBooks, bill.com, or law firm accounting) records the deposit in a dedicated **Trust Account** (separate from your Operating Account)
- You reconcile the trust account monthly to ensure deposits match client retainers

**GHL's role**: GHL shows that a retainer was received (e.g., "$5,000 retainer from Client A on 2026-08-07"). GHL does NOT handle the actual fund segregation—your accounting system does.

**What to do**:
1. Before implementing GHL, consult your state bar's ethics hotline or a legal accounting specialist
2. Verify your accounting system (QuickBooks, bill.com, etc.) has a separate Trust Account configured
3. Set up Stripe or accounting integration in GHL so retainer payments trigger entries in the Trust Account
4. Reconcile trust account balance monthly (compare GHL recorded retainers vs. actual bank deposits)

**Critical warning**: If you set up GHL without proper trust account segregation, you are in violation of state bar ethics rules. This is not GHL's fault—it is your firm's compliance responsibility.

---

#### 2. Data Security and Encryption (Confidentiality Rules)

Your state bar requires client data to be kept confidential and secure. Client contact info, case details, and billing information must NOT be stored in plain text or easily accessible unencrypted files.

**GHL's security**:
- GHL encrypts data in transit (HTTPS/TLS)
- GHL encrypts data at rest (AES-256 encryption for database)
- GHL is SOC 2 Type II certified (third-party audit of security practices)

**Your responsibility**:
1. Do NOT store sensitive case details (victim identity, sealed information) in GHL notes fields in plain text
2. Use GHL's encrypted custom fields for highly sensitive data (e.g., "Victim Name - Encrypted" field)
3. Keep court-sealed documents (sealed custody files, protective orders) in a separate encrypted file server (not GHL)
4. Ensure all team members have strong passwords (minimum 12 characters, 2FA enabled)
5. Audit access quarterly (who has access to which cases)

**What to avoid**:
- Storing case notes like "Victim: Jane Doe, address: 123 Main St" in plain-text notes field
- Uploading sealed court documents to GHL public storage (use encrypted or password-protected folders only)
- Sharing case passwords or login credentials via unencrypted email

**What to do**:
1. Before deploying GHL to clients, audit the form fields and ensure sensitive fields are encrypted
2. Create a data security policy: "Sealed documents stored in [encrypted server]; non-sealed case info in GHL"
3. Train team on what data goes in GHL vs. what stays in secure file storage

---

#### 3. Client Communication and Consent (Privacy Rules)

Your state bar may require client consent before you use a third-party CRM (like GHL) to store their data. Some states require explicit disclosure; others allow implied consent (client receives terms of service).

**Compliance requirement**:
- Your engagement letter or intake form should disclose: "We use GoHighLevel, a cloud-based CRM, to manage your case information, communications, and documents. Your data is encrypted and stored securely. You can request deletion of your data at any time."
- Client should confirm they consent to this (checkbox on intake form)

**What to do**:
1. Before launching GHL to clients, review your state bar's privacy and third-party service rules
2. Update your engagement letter or intake form to disclose GHL use
3. Add checkbox: "I consent to my case information being stored in GoHighLevel, a secure cloud-based system"
4. Keep a log of client consent (in GHL, tag case with "consent-provided")

---

#### 4. Audit Trail and Records Retention (Compliance Rules)

Your state bar requires you to maintain records of client communications, agreements, and case actions for a specified period (typically 3–7 years post-closure).

**GHL's compliance**:
- GHL maintains activity logs (who accessed case, when, what changed)
- GHL logs are not deleted when you delete a contact (soft delete; data retained)
- Export functionality allows you to export case records for backup

**Your responsibility**:
1. Ensure retainer agreements are date-stamped and linked to case (GHL does this automatically)
2. Keep all intake forms and signed documents (GHL stores these in document field)
3. Maintain audit trail of case changes (GHL shows activity log by default)
4. Export and backup case records annually for compliance archiving

**What to do**:
1. Before deploying GHL, establish a records retention policy: "All cases exported and archived to secure backup storage 90 days post-closure"
2. Configure GHL backup exports (monthly or quarterly)
3. Store backups in encrypted cloud storage (Google Drive with "restricted" sharing, Dropbox with encryption, or onsite encrypted drive)

---

## Part 4: Step-by-Step Implementation

### Step 1: Create Client Intake Form

#### 1a. Understand Intake Form Goals

Your intake form should capture:
1. **Contact information** (name, email, phone)
2. **Case information** (case type, opposing party, court jurisdiction)
3. **Urgency and timeline** (when do you need help?)
4. **Budget expectations** (estimated case value or budget range)
5. **Case history** (prior attorney? prior litigation?)

This data drives case scoring, assignment, and follow-up.

#### 1b. Create Form in GoHighLevel

1. Log into GoHighLevel (app.gohighlevel.com)
2. Go to **Sidebar → Forms** (or **Marketing → Forms**)
3. Click **+ Create Form** or **New Form**
4. Select template: **"Intake Form"** or **"Lead Generation Form"** (both work; Intake Form has legal-specific fields)
5. **Form name**: "Law Firm Intake Form – [Firm Name]"
6. **Form fields** (drag to reorder):
   - **First Name** (required)
   - **Last Name** (required)
   - **Email** (required; will be used for contact record)
   - **Phone** (required; include country code for international clients)
   - **Company/Organization** (optional; if representing a business)
   - **Case Type** (required; dropdown):
     - Personal Injury
     - Family Law
     - Estate Planning
     - Business/Contract
     - Criminal Defense
     - Other (please specify)
   - **Case Description** (required; text area, 500 char limit):
     - Prompt: "Briefly describe your legal matter. Who is involved? What is the dispute?"
   - **Opposing Party** (optional; text field):
     - "Who is the other party?" (defendant, spouse, other party's name)
   - **Timeline / Urgency** (required; dropdown):
     - Urgent (within 2 weeks)
     - Soon (within 1 month)
     - Planning (1–3 months)
     - Exploring options (no rush)
   - **Have you had a prior attorney?** (required; yes/no toggle)
   - **Estimated case value or budget** (optional; dropdown):
     - Under $2,500
     - $2,500–$10,000
     - $10,000–$50,000
     - $50,000+
     - Unsure
   - **Preferred contact method** (required; radio buttons):
     - Email
     - Phone
     - Text message
     - Phone or email (no preference)
   - **Best time to reach you** (optional; dropdown):
     - Mornings (8–12 PM)
     - Afternoons (12–5 PM)
     - Evenings (5–9 PM)
     - Weekends
     - Anytime
   - **How did you hear about us?** (required; dropdown):
     - Google search
     - Website referral/recommendation
     - Social media
     - Friend/family referral
     - Yellow Pages / directory
     - Other (specify)
   - **Terms agreement checkbox** (required):
     - "I consent to my case information being stored in GoHighLevel, a secure cloud-based system. [Link to privacy policy]"

7. **Form styling** (optional):
   - Header image: Upload law firm logo or professional legal office image
   - Background color: Professional (white, light blue, or dark gray)
   - Button text: "Submit Intake Form" (not "Subscribe" or generic)
   - Confirmation message: "Thank you! We've received your intake. A member of our team will contact you within 24 hours."

8. **Form actions** (what happens after submission):
   - **Send autoresponder email** (covered in next section)
   - **Create contact in CRM** (automatic)
   - **Add tag** (optional; "intake-submitted", "new-lead")

9. Click **Save Form**

#### 1c. Set Up Confirmation Email (Autoresponder)

After form submission, client automatically receives confirmation email. This is critical—it assures the client their form was received.

1. In form settings, go to **Autoresponder** or **Post-Submission Actions**
2. Click **+ Add Email Action**
3. Configure email:
   - **Email template**: Create new or select template
   - **From**: Your law firm name <noreply@yourfirm.gohighlevel.com> or <intake@yourfirm.com>
   - **Subject**: "Your Legal Intake Form Received – [Firm Name]"
   - **Email body**:
     ```
     Hi [Contact.FirstName],

     Thank you for submitting your intake form to [Firm Name]. We've received your 
     information and will review it carefully.

     Here's what happens next:
     
     1. We'll review your case details and confirm it fits our practice area
     2. An attorney or paralegal will contact you within 24 hours at 
        [Contact.Phone] or [Contact.Email] to discuss next steps
     3. If we're a good fit, we'll send you a client engagement agreement and 
        retainer quote

     In the meantime, if you have urgent questions, please call our office at 
     [Firm Phone].

     We appreciate your trust and look forward to helping with your legal matter.

     Best regards,
     [Attorney Name]
     [Firm Name]
     [Firm Phone]
     [Firm Address]
     ---
     Your case type: [Case.CaseType]
     Urgency level: [Case.Urgency]
     ```
   - **Send delay**: Immediate (0 minutes)

4. **Optional: Add SMS follow-up**:
   - Send SMS 24 hours after intake:
     ```
     Hi [FirstName], this is [Firm Name] following up on your legal intake. 
     An attorney will contact you soon. Reply STOP to opt out.
     ```

5. Save autoresponder

#### 1d. Deploy Form to Website

Generate an embed code or landing page for your website:

1. In form settings, go to **Publish** or **Share**
2. Select deployment option:
   - **Option A: Embed code** (add form to your existing website)
     - Copy embed code
     - Go to your website builder (WordPress, Wix, Squarespace, etc.)
     - Paste code in page where you want form (e.g., /contact, /intake, /get-help)
   - **Option B: Landing page** (GHL creates a standalone intake page)
     - GHL generates URL (e.g., `https://intake.gohighlevel.com/yourfirm-intake`)
     - Share this URL in ads, website, and email
   - **Option C: QR code** (for business cards, ads)
     - Download QR code and print on business cards or ads

3. Test form:
   - Go to your website or form URL
   - Fill out form completely
   - Submit
   - Check email inbox for confirmation email (should arrive within 1 minute)
   - Check GHL Contacts: New contact should appear with form data populated

4. **If form works**:
   - ✓ Intake form is live; proceed to Step 2

5. **If form fails**:
   - Check autoresponder email address is correct (typos cause bounces)
   - Verify form is published (status should be "Live" or "Active")
   - Check spam folder for confirmation email (sometimes land in spam)
   - Verify GHL email is authenticated (SPF, DKIM records configured—ask GHL support if needed)

---

### Step 2: Create Case Pipeline

#### 2a. Define Case Stages

Your case pipeline should reflect your actual legal workflow from intake to closure.

**Standard stages for law firms**:

1. **Lead / Inquiry**
   - Prospect has submitted intake form or called
   - Not yet scheduled for initial consultation
   - Next step: Schedule consultation

2. **Initial Consultation Scheduled**
   - Consultation appointment booked (appears on attorney's calendar)
   - Awaiting consultation date
   - Next step: Conduct consultation

3. **Engagement Proposed**
   - Consultation completed
   - Retainer agreement and fee proposal sent to client