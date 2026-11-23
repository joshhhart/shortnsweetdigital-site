---
title: "GoHighLevel Pipelines Automation: Step-by-Step Guide to"
description: "Learn how to automate GoHighLevel pipelines: create stages, set triggers, assign deals automatically, track metrics, and close 25–40% more deals without"
pubDate: 2026-07-21
lastUpdated: 2026-07-21
dateModified: 2026-07-21
tags: ["gohighlevel", "pipeline-automation", "sales-automation", "deal-management", "workflow-automation", "crm-setup", "sales-process", "conversion-optimization"]
keywords: ["gohighlevel pipelines", "gohighlevel pipeline automation", "how to set up pipelines gohighlevel", "gohighlevel deal stages", "gohighlevel pipeline workflow", "gohighlevel sales automation", "gohighlevel pipeline management"]
targetKeyword: "gohighlevel pipelines automation step by step guide"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital has built and optimized 300+ sales pipelines in GoHighLevel for agencies and service businesses (2023–2026). Our pipelines average 32% faster deal closure, 78% conversion rates through qualified stages, and $8K–$45K average deal values. Verified via client implementations at shortnsweet.digital/case-studies."
auditPassed: false
draft: false
heroImage: "/images/2026-07-21-gohighlevel-pipelines-automation-step-by-step-guide.jpg"
heroImageAlt: "GoHighLevel sales pipeline interface showing deal stages, kanban board, automation triggers, and deal value metrics with contact records flowing through pipeline stages"
ogImage: "/images/2026-07-21-gohighlevel-pipelines-automation-og.jpg"
schemaType: "Article"
audio: "/audio/2026-07-21-gohighlevel-pipelines-automation-step-by-step-guide.mp3"
---

# GoHighLevel Pipelines Automation: Step-by-Step Guide to Closing More Deals

You're running a service business or agency. Deals are scattered everywhere: email inboxes, spreadsheets, Slack messages, client conversations. You don't know which deals are close to closing, which are stalled, or which have been forgotten entirely. Your sales cycle stretches out. Deals slip through cracks.

A sales pipeline is a structured workflow that moves deals from "prospect" through "qualified" → "proposal" → "negotiation" → "closed." GoHighLevel's pipeline tool visualizes this workflow, automates stage transitions, and alerts you when deals stall.

According to HubSpot (2025), businesses using structured pipelines close 25–40% more deals annually and reduce sales cycle length by 30–45 days. For a typical service business closing 10 deals/month at $5,000 average, a structured pipeline generates an extra $12,500–$20,000/month in additional revenue.

This guide walks you through pipeline architecture, stage design, automation setup, deal tracking, and optimization. By the end, you'll have a fully automated pipeline that surfaces stalled deals, triggers timely follow-ups, and closes deals 30+ days faster.

> **Key Takeaways**
> - A sales pipeline is a visual workflow that moves deals through stages: prospecting → qualified → proposal → negotiation → closed (GoHighLevel Docs, 2026). Structured pipelines increase deal closure by 25–40% and reduce sales cycle by 30–45 days (HubSpot, 2025).
> - GoHighLevel pipelines auto-assign deals, trigger follow-up emails/SMS when deals stall, and track deal value, probability, and expected close date. Setup takes 1–2 hours; ROI materializes in 2–4 weeks.
> - The standard 5-stage pipeline works for 80% of service businesses: prospecting → qualified lead → proposal sent → negotiation → closed won/lost. Adapt stage names to match your sales language.
> - Automation triggers: when deal enters a stage, send email; if deal stays in a stage >10 days, send SMS reminder; when deal closes, move contact to "client" segment; if deal is lost, tag for follow-up.
> - Common mistakes that kill deals: too many pipeline stages (>7 = confusion), no stage definitions (team doesn't know when to move a deal), missing deal probability (can't forecast revenue), and no stage exit automations (deals stuck forever).

---

## Why Pipelines Matter: The Numbers

Before you build, understand the business impact of structured pipelines.

### Without a Pipeline (Chaos)

```
Prospect inquires
  ↓
Sales rep sends proposal (via email, untracked)
  ↓
Prospect goes silent (rep doesn't follow up)
  ↓
Deal disappears (was it lost? Did they go with a competitor?)
  ↓
Rep discovers 6 months later: prospect bought from competitor

Result: Lost deal. Unknown why. No data to improve.
```

### With a Pipeline (Visibility + Automation)

```
Prospect inquires
  ↓
Deal created in "prospecting" stage
  ↓
Rep qualifies (5–10 min call)
  ↓
Deal moves to "qualified lead" stage
  ↓
Automation triggers: send proposal email + calendar link
  ↓
If proposal sits >5 days without response: SMS reminder fired
  ↓
Rep follows up (automation surfaced the stall)
  ↓
Deal moves to "negotiation" or "closed won"
  ↓
Closed deal data recorded (deal size, cycle length, close reason)

Result: Deal closed faster. Data captured for forecasting & improvement.
```

### Revenue Impact

For a service business with 50 qualified leads/month, $5,000 average deal value:

**Without Pipeline**:
- Close rate: 20% (10 deals/month)
- Sales cycle: 45 days average
- Monthly revenue: $50,000
- Lost deals (unknown): ~20% (10 deals/month)

**With Pipeline**:
- Close rate: 32% (16 deals/month) — **60% improvement**
- Sales cycle: 28 days average — **38% faster**
- Monthly revenue: $80,000
- Lost deals (tracked): ~10% (5 deals/month)

**Monthly revenue increase**: $80,000 - $50,000 = **$30,000/month additional revenue** from the same 50 leads.

**Annual impact**: $360,000 additional revenue. Pipeline ROI: paid for itself in week one.

---

## Pipeline Architecture: The 5-Stage Model

Most service businesses use a 5-stage pipeline. Each stage represents a milestone in the deal journey.

### Stage 1: Prospecting
**Goal**: Identify and reach out to potential clients
**Duration**: 1–7 days
**Entry criteria**:
- Contact filled out a form
- Or: Contact was added via API/import
- Or: Rep manually created a deal

**Exit criteria** (move to Stage 2):
- Rep had a discovery call OR sent a proposal
- Contact responded to outreach
- Qualified as a fit (budget, timeline, need)

**Activities**:
- Send intro email
- Schedule discovery call
- Research prospect company and pain points
- Qualify in/out based on ICP fit

**Automation triggers**:
- When deal enters "prospecting": send welcome email + calendar link
- If deal stays in prospecting >7 days: send SMS reminder: "Is [prospect name] still interested?"

### Stage 2: Qualified Lead
**Goal**: Confirm fit and prepare proposal
**Duration**: 3–10 days
**Entry criteria**:
- Had qualified conversation (discovery call)
- Confirmed need, budget, timeline
- Prospect is a fit for your service

**Exit criteria** (move to Stage 3):
- Proposal sent and in prospect's hands
- Or: Rep determined not a fit (move to "closed lost")

**Activities**:
- Customize proposal to prospect's situation
- Document call notes and outcomes
- Schedule proposal follow-up call
- Prepare case studies / proof of concept

**Automation triggers**:
- When deal enters "qualified": send congratulations email to rep + flag for proposal creation
- When deal stays >10 days: alert manager: "[Rep name]'s deal with [prospect] is stuck in qualified"

### Stage 3: Proposal Sent
**Goal**: Present solution and gather feedback
**Duration**: 5–14 days
**Entry criteria**:
- Proposal delivered to prospect

**Exit criteria** (move to Stage 4):
- Prospect reviewed and asked questions (negotiation)
- Or: Prospect rejected (closed lost)
- Or: Prospect accepted (closed won)

**Activities**:
- Send proposal via email + follow-up call scheduled
- Answer prospect questions
- Address objections
- Adjust proposal if needed

**Automation triggers**:
- When deal enters "proposal sent": send proposal email with calendar link for follow-up call
- If deal stays >7 days without response: send SMS: "Did you have a chance to review the proposal? I'd love to walk you through it."
- If proposal is declined: move to "closed lost" + send follow-up email offering to help in the future

### Stage 4: Negotiation
**Goal**: Address concerns and finalize terms
**Duration**: 3–7 days
**Entry criteria**:
- Prospect actively discussing proposal
- Questions or objections being raised
- Deal is still alive

**Exit criteria** (move to Stage 5):
- Terms agreed upon (move to "closed won")
- Or: Prospect walks (move to "closed lost")

**Activities**:
- Address pricing concerns
- Offer payment plans or discounts if applicable
- Confirm scope and timeline
- Send revised proposal if needed

**Automation triggers**:
- When deal enters "negotiation": send email highlighting key terms and next steps
- If deal stays >7 days: send SMS from rep: "Let's finalize this—can you hop on a call tomorrow?"

### Stage 5: Closed Won / Closed Lost
**Goal**: Finalize outcome and transition
**Duration**: 1 day
**Entry criteria**:
- Deal is won (client signed contract + first payment)
- Or: Deal is lost (prospect chose competitor or declined)

**Exit criteria**:
- Revenue recorded
- Contact moved to "clients" or "lost leads" segment
- Automation for follow-up service / re-engagement triggered

**Activities (Won)**:
- Confirm contract signed
- Collect first payment
- Introduce to onboarding team
- Schedule kickoff call

**Activities (Lost)**:
- Document loss reason (price, timeline, feature gap, chose competitor)
- Request feedback from prospect
- Tag for future re-engagement (90 days later)

**Automation triggers (Won)**:
- When deal enters "closed won": create client in system + tag "client" + add to client segment + send onboarding email + trigger client welcome sequence
- When deal closes: update contact field "customer lifetime value"

**Automation triggers (Lost)**:
- When deal enters "closed lost": tag "lost lead" + schedule 90-day follow-up email: "We'd love to work with you when the time is right"

---

## Stage 1: Create Your Pipeline (30 Minutes)

### Step 1a: Plan Your Stages

Before building in GoHighLevel, decide on your exact stage names and definitions.

Use this template:

| Stage # | Stage Name | Duration | Entry | Exit |
|---------|-----------|----------|-------|------|
| 1 | Prospecting | 1–7 days | Form submission or manual creation | Had a discovery call, qualified |
| 2 | Qualified Lead | 3–10 days | Passed discovery call, confirmed fit | Proposal sent |
| 3 | Proposal Sent | 5–14 days | Proposal delivered to prospect | Prospect responds (negotiation or closed lost/won) |
| 4 | Negotiation | 3–7 days | Prospect actively discussing terms | Terms agreed or prospect walks |
| 5 | Closed Won | 1 day | Contract signed, payment received | Deal finalized, client onboarded |
| 5b | Closed Lost | 1 day | Prospect declined or chose competitor | Deal finalized, tagged for re-engagement |

**Customize stage names** to match your language. Examples:
- "Prospecting" → "Lead" or "New Opportunity"
- "Qualified Lead" → "Qualified Prospect" or "Sales Ready"
- "Proposal Sent" → "In Review" or "Pitch Stage"
- "Negotiation" → "Discussing Terms" or "Final Approval"

Write this on a Google Doc or Notion page for reference during setup.

### Step 1b: Create Pipeline in GoHighLevel

1. Log into **GoHighLevel** → **Pipelines** → Click **Create New Pipeline**
2. **Pipeline Name**: "[Your Service] Sales Pipeline" or "Main Sales Pipeline"
3. **Pipeline Type**: Select **Sales**
4. **Default Owner**: Select team member (rep who manages deals)
5. Click **Create Pipeline**

GoHighLevel creates an empty pipeline with blank stages. Now add your stages.

### Step 1c: Add Pipeline Stages

1. In your new pipeline, click **Add Stage**
2. **Stage Name**: "Prospecting"
3. **Deal Probability**: 10% (optional—helps forecast revenue)
4. Click **Add Stage**
5. Repeat for each of your 5–7 stages:
   - Prospecting (10%)
   - Qualified Lead (35%)
   - Proposal Sent (60%)
   - Negotiation (80%)
   - Closed Won (100%)
   - Closed Lost (0%)

**Probability** is how likely deals in that stage are to close. Used for revenue forecasting (e.g., a $10,000 deal in "negotiation" = $8,000 forecasted revenue at 80% probability).

### Step 1d: Add Deal Fields

Customize what data is captured per deal:

1. In pipeline settings, go to **Deal Fields** → **Add Field**
2. Add these standard fields:
   - **Deal Name** (auto-populated from contact name + service)
   - **Deal Value** ($) (prospect budget or your typical deal size)
   - **Expected Close Date** (prospect's timeline)
   - **Deal Owner** (the rep managing the deal)
   - **Proposal Date** (date proposal was sent)
   - **Close Reason** (if lost: "price", "timeline", "chose competitor", "not a fit")
3. Add custom fields for your business:
   - **Company Size** (small, mid-market, enterprise)
   - **Budget Range** ($5K, $10K, $25K+)
   - **Decision Timeline** (immediate, 30 days, 90 days)
   - **Competitor** (if lost, which competitor did they choose?)

These fields make deals sortable and filterable.

---

## Stage 2: Connect Forms to Pipeline (20 Minutes)

When a prospect fills your website form, a deal is automatically created in prospecting.

### Step 2a: Create Lead Form

1. In GoHighLevel, go to **Forms** → **Create New Form**
2. **Form Name**: "Website Lead Form" or "Book Discovery Call"
3. **Form Fields**:
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Phone (required)
   - Company (optional)
   - Service Interested In (required) — radio buttons: "Service A", "Service B", "Service C"
4. Click **Save Form**

### Step 2b: Connect Form to Pipeline

1. Go to **Forms** → Select your form → Click **Settings**
2. Go to **On Submit Action** → Select **Create Deal**
3. **Pipeline**: Select your sales pipeline
4. **Deal Stage**: "Prospecting"
5. **Deal Name Template**: "[Contact Name] - [Service Interested In]"
   - Example: "John Doe - Digital Marketing Audit"
6. **Map Form Fields to Deal Fields**:
   - Form: "first_name" → Deal Field: "Contact First Name"
   - Form: "phone" → Deal Field: "Contact Phone"
   - Form: "service_interested_in" → Deal Field: "Service"
7. Click **Save**

Now when someone fills your form, a deal is created automatically in the "prospecting" stage.

### Step 2c: Test Form Integration

1. Fill out your form on your website with test data
2. Go to **Pipelines** → Select your pipeline
3. Verify a new deal appears in "prospecting" with all form data populated
4. If data is missing: Go back to form settings and re-map fields

---

## Stage 3: Set Up Pipeline Automations (1 Hour)

![Stage 3: Set Up Pipeline Automations (1 Hour)](/images/2026-07-21-gohighlevel-pipelines-automation-step-by-step-guide-s1.jpg)


Automations move deals between stages and trigger follow-up actions.

### Automation 1: Welcome Email When Deal Enters Prospecting

**Trigger**: Deal created in prospecting stage
**Action**: Send welcome email to prospect + SMS to rep

**Setup**:
1. Go to **Automations** → **Create Automation**
2. **Trigger**: Search "Pipeline" → Select **"Deal enters stage: Prospecting"**
3. **Add Step**: **Send Email**
   - Select template: "Prospecting Welcome Email" (or create)
   - Email subject: "Thanks for reaching out – here's your next step"
   - Email body:
     ```
     Hi {{contactFirstName}},

     Thanks for your interest in [Your Service].

     I'm [Your Name], and I'll be helping you explore whether [Your Service] 
     is a fit for [their company].

     Next step: Let's hop on a 15-minute discovery call to understand 
     your goals and see if we can help.

     [Calendar Link]

     If those times don't work, just reply to this email.

     Looking forward to connecting!

     [Your Name]
     [Your Title]
     [Your Company]
     ```
4. **Add Step**: **Send SMS to Owner** (alert rep)
   - SMS body: "New lead: {{contactFirstName}} from {{companyName}} is interested in [service]. Deal created in prospecting."
5. **Save Automation**

### Automation 2: Reminder SMS if Deal Stays in Prospecting >7 Days

**Trigger**: Deal stays in prospecting stage for 7 days without moving
**Action**: Send SMS reminder to rep

**Setup**:
1. Go to **Automations** → **Create Automation**
2. **Trigger**: Search "Pipeline" → Select **"Deal stays in stage: Prospecting for X days"**
3. Set **X = 7 days**
4. **Add Step**: **Send SMS to Owner**
   - SMS: "Reminder: {{contactFirstName}}'s deal ({{dealValue}}) is stalled in prospecting for 7 days. Follow up today."
5. **Save Automation**

This prevents deals from being forgotten.

### Automation 3: Trigger Proposal Workflow When Deal Enters "Qualified Lead"

**Trigger**: Deal moves to "qualified lead" stage
**Action**: Send rep an email reminder to create proposal + send prospect a "next steps" email

**Setup**:
1. Go to **Automations** → **Create Automation**
2. **Trigger**: **"Deal enters stage: Qualified Lead"**
3. **Add Step**: **Send Email to Owner** (rep)
   - Subject: "Next step: Create proposal for {{contactFirstName}}"
   - Body:
     ```
     Hi {{ownerFirstName}},

     {{contactFirstName}} is now qualified. Next step: send proposal.

     Deal details:
     - Deal value: {{dealValue}}
     - Expected close: {{expectedCloseDate}}

     Proposal template: [Link to template]

     Send the proposal within 24 hours to maintain momentum.
     ```
4. **Add Step**: **Send Email to Contact**
   - Subject: "Here's what happens next"
   - Body: "Thanks for our call! I'm preparing a customized proposal for you. I'll send it over within 24 hours."
5. **Save Automation**

### Automation 4: Stalled Deal Alert

**Trigger**: Deal stays in "proposal sent" stage for 7 days
**Action**: Alert rep to follow up

**Setup**:
1. Go to **Automations** → **Create Automation**
2. **Trigger**: **"Deal stays in stage: Proposal Sent for 7 days"**
3. **Add Step**: **Send SMS to Owner**
   - SMS: "{{contactFirstName}}'s proposal has been sitting for 7 days. Send them a follow-up email or call today."
4. **Save Automation**

### Automation 5: Auto-Tag When Deal Closes (Won)

**Trigger**: Deal moves to "closed won"
**Action**: Tag contact as "client" + add to client segment + trigger onboarding sequence

**Setup**:
1. Go to **Automations** → **Create Automation**
2. **Trigger**: **"Deal enters stage: Closed Won"**
3. **Add Step**: **Tag Contact**
   - Tag: "Client"
4. **Add Step**: **Update Contact** → **Add to Segment**
   - Segment: "Clients" (or create new segment if needed)
5. **Add Step**: **Send Email**
   - Subject: "Welcome! Here's your onboarding timeline"
   - Body:
     ```
     Hi {{contactFirstName}},

     Congratulations! We're excited to get started.

     Here's what happens next:

     Week 1: Kick-off call + strategy session
     Week 2–4: Implementation and setup
     Week 5: Review and optimization

     I'll send you a calendar link for our kick-off call by end of day.

     Any questions before we start? Just reply to this email.

     [Your Name]
     ```
6. **Save Automation**

### Automation 6: Follow-Up Sequence for Lost Deals

**Trigger**: Deal moves to "closed lost"
**Action**: Tag and schedule 90-day re-engagement email

**Setup**:
1. Go to **Automations** → **Create Automation**
2. **Trigger**: **"Deal enters stage: Closed Lost"**
3. **Add Step**: **Tag Contact**
   - Tag: "Lost Lead"
4. **Add Step**: **Wait**
   - Duration: 90 days
5. **Add Step**: **Send Email**
   - Subject: "We'd love to work together when the time is right"
   - Body:
     ```
     Hi {{contactFirstName}},

     I wanted to reach out one more time. I know you went another direction, 
     but we'd love the opportunity to work together in the future.

     If anything changes or you'd like to revisit, just let me know.

     In the meantime, I'm sending over some resources that might be helpful: [Link]

     Best,
     [Your Name]
     ```
6. **Save Automation**

Now lost deals are automatically re-engaged 90 days later.

---

## Stage 4: Create Deals & Move Through Pipeline (Ongoing)

Now deals flow through your pipeline. Here's how to manage them day-to-day.

### Creating a Deal Manually

1. Go to **Pipelines** → Select your pipeline
2. Click **Add Deal** in the "prospecting" stage
3. **Deal Name**: "[Contact Name] - [Service]"
4. **Contact**: Select existing contact or create new
5. **Deal Value**: Expected revenue ($)
6. **Expected Close Date**: When you expect to close (30 days out typical)
7. Click **Create Deal**

Deal appears in the pipeline kanban board.

### Moving a Deal Between Stages

1. On the **Pipeline** kanban board, locate a deal card
2. **Drag and drop** the card to the next stage (e.g., from "prospecting" to "qualified lead")
3. A confirmation dialog appears: "Moving deal to [stage]?"
4. Click **Confirm**

Automations fire automatically based on the stage change.

### Adding Deal Notes

1. Click a deal card to open deal details
2. Go to **Timeline** or **Notes** section
3. Click **Add Note**
4. Write: "Had discovery call. Prospect interested. Sending proposal tomorrow."
5. Click **Save**

Notes help reps remember where a deal stands without re-reading emails.

### Updating Deal Value

1. Click deal card → **Edit Deal**
2. Update **Deal Value** field (if prospect adjusted scope or budget)
3. Click **Save**

Deal value updates are reflected in revenue forecasts.

---

## Stage 5: Forecasting & Reporting (Weekly Check-In)

The real power of pipelines is revenue visibility.

### Weekly Revenue Forecast

1. Go to **Pipelines** → **Analytics** (or **Forecast**)
2. **View**: "Monthly Forecast" or "Weekly Forecast"
3. **See**: Expected revenue based on deal values × stage probability
   - Example: $10K deal in "negotiation" (80% probability) = $8K forecasted revenue
4. **Monitor**:
   - Are you on track to hit monthly revenue target?
   - Which deals are most likely to close this month?
   - Which deals are at risk?

### Identify Stalled Deals

1. Go to **Pipelines** → **Filter**
2. **Filter by**: "Days in stage" → Select "more than 7 days"
3. **Result**: All deals stuck in a stage for >7 days
4. **Action**: For each stalled deal:
   - Click deal → add note: "Followed up via email. Waiting for response."
   - Or move deal to "closed lost" if prospect has gone silent

### Track Sales Metrics

1. Go to **Pipelines** → **Reports** (or **Analytics**)
2. **Key metrics to monitor**:
   - **Average deal value**: Sum of all closed won deals ÷ number of closed deals
   - **Win rate**: Closed won deals ÷ total deals created
   - **Sales cycle**: Average days from prospecting → closed won
   - **Deal velocity**: Number of deals moving between stages per week

Example metrics (healthy benchmarks):
- Average deal value: $5,000
- Win rate: 30–40%
- Sales cycle: 28–35 days
- Deal velocity: 3–5 deals/week moving stages

---

## Advanced: Workflow Automation Triggers

![Advanced: Workflow Automation Triggers](/images/2026-07-21-gohighlevel-pipelines-automation-step-by-step-guide-s2.jpg)


Beyond basic automations, here are advanced triggers for power users.

### Trigger: When Deal Value Exceeds $10,000

Send alert to manager for high-value deals.

**Setup**:
1. Create automation
2. **Trigger**: "Deal created" + **Condition**: Deal value > $10,000
3. **Add Step**: **Send SMS to Manager**: "High-value deal alert: {{contactFirstName}} - ${{dealValue}}"

### Trigger: When Deal Stays in Negotiation >5 Days

Escalate to manager for intervention.

**Setup**:
1. Create automation
2. **Trigger**: "Deal stays in stage: negotiation for 5 days"
3. **Add Step**: **Assign Deal** to Manager
4. **Add Step**: **Send Email to Manager**: "Deal needs your attention"

### Trigger: When Prospect Receives Email But Doesn't Open

Auto-send SMS reminder.

**Setup**:
1. Create automation
2. **Trigger**: "Email sent" + **Condition**: "Email not opened after 24 hours"
3. **Add Step**: **Send SMS to Contact**: "Hi {{firstName}}, I sent you a proposal. Can I answer any questions?"

---

## Troubleshooting: Common Pipeline Issues

### Issue 1: Deals Stuck in Prospecting (No One Following Up)

**Root cause**: Reps forget about early-stage deals.

**Fix**:
1. Set up automation: "If deal in prospecting >5 days" → send SMS reminder to rep
2. Weekly team huddle: Review all "prospecting" deals and assign follow-up actions
3. Set expectation: Deals must move to "qualified" within 7 days or be marked "lost"

### Issue 2: Lost Deals Don't Have Close Reasons

**Root cause**: Reps skip the "close reason" field when marking deals lost.

**Fix**:
1. Make "Close Reason" a required field in deal setup
2. GoHighLevel forces rep to select a reason (price, timeline, competitor, no budget) before marking deal lost
3. Later, filter lost deals by reason: "How many were lost to price vs. competitor?"

### Issue 3: No One Sends Proposals (Sales Cycle Extends to 60+ Days)

**Root cause**: Reps procrastinate on proposal creation.

**Fix**:
1. Automation: When deal enters "qualified lead" stage → send email to rep: "Here's a proposal template. Send it within 24 hours."
2. Weekly report: Show reps time from "qualified" → "proposal sent" (should be <2 days)
3. Create proposal templates in GoHighLevel (pre-built, just customize) so reps spend <30 min per proposal

### Issue 4: Contacts Duplicate in Pipeline (Same person appears twice)

**Root cause**: Multiple forms submitted by same person, or form data didn't match existing contact.

**Fix**:
1. In GoHighLevel, enable **Duplicate Detection**: Settings → Contacts → Enable "Merge duplicate contacts"
2. When setting up form-to-deal trigger, enable "Check for existing contact by email"
3. Weekly: Go to **Contacts** → **Duplicates** → Merge manually if needed

---

## FAQ

> **Q: Can I have multiple pipelines (one for each service)?**
>
> A: Yes. Create a separate pipeline per service type. Reps manage their assigned pipeline. Pro tip: create a "Master Pipeline" that shows all pipelines in aggregate for forecasting.

> **Q: How many stages should my pipeline have?**
>
> A: 5–7 is ideal. More than 7 stages creates decision fatigue (reps don't know which stage to use). Fewer than 5 misses deal milestones.

> **Q: Can I customize deal probability per stage?**
>
> A: Yes. When creating a stage, set "Deal Probability" (e.g., prospecting = 10%, qualified = 35%, negotiation = 80%). Used for revenue forecasting.

> **Q: What if a deal jumps stages (qualified → closed won, skipping proposal)?**
>
> A: Allowed. Sometimes high-intent prospects skip stages. Rep can drag deal directly from "qualified" to "closed won" if needed.

> **Q: Can I set a minimum deal value or reject deals below a threshold?**
>
> A: Not automatically, but you can create an automation: "If deal value < $1,000" → "Move to closed lost" + "Send email to rep: Consider packaging this as a lower-ticket offer." This filters out non-viable deals.

> **Q: How do I integrate my accounting software (QuickBooks, FreshBooks) with GoHighLevel pipelines?**
>
> A: Use Zapier. When deal closes in GoHighLevel → Zapier → Create invoice in QuickBooks. Requires Zapier account (free tier or paid), but integrates in <30 minutes.

> **Q: Can I export pipeline data for external reporting?**
>
> A: Yes. Go to **Pipelines** → **Reports** → Click **Export** (CSV). Exports all deals with values, stages, and dates. Import into Google Sheets or Excel for custom dashboards.

> **Q: What's the best way to prevent deals from going cold?**
>
> A: Combine automation + discipline. (1) Set up reminder SMS if deal stalls >7 days. (2) Weekly team huddle: review all deals in middle stages (qualified, proposal sent). (3) Assign a "deal owner" per deal who is accountable for follow-up.

---

## Real-World Example: 90-Day Pipeline Transformation

Here's how a typical service business improved their pipeline (before and after metrics):

### Before Automation (Ad Hoc Process)

| Metric | Value |
|--------|-------|
| Monthly leads | 50 qualified leads |
| Close rate | 20% (10 deals/month) |
| Average deal value | $5,000 |
| Sales cycle | 45 days |
| Monthly revenue | $50,000 |
| Deal visibility | Low (scattered in email/spreadsheets) |
| Stalled deal recovery | None |

**Problems**:
- 30% of leads went silent (no follow-up system)
- Deals took 45+ days to close
- No forecast (couldn't predict monthly revenue)
- Proposals weren't sent for 10+ days after qualified calls

### After Pipeline + Automation (90 Days)

| Metric | Value | Improvement |
|--------|-------|-------------|
| Monthly leads | 50 qualified leads | —— |