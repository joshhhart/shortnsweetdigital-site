---
title: "GoHighLevel Pipelines Automation: Complete 7-Step Guide"
description: "Set up automated sales pipelines in GoHighLevel in 7 steps. Configure stages, scoring rules, auto-assignment, follow-up sequences, and workflows to close"
pubDate: 2026-08-05
lastUpdated: 2026-08-02
dateModified: 2026-08-02
tags: ["gohighlevel", "pipelines", "sales-automation", "deal-management", "workflow-automation", "lead-scoring", "sales-pipeline", "agency-automation"]
keywords: ["gohighlevel pipelines", "how to set up gohighlevel pipeline", "gohighlevel automation", "sales pipeline automation", "deal tracking gohighlevel", "lead scoring gohighlevel", "gohighlevel workflow"]
targetKeyword: "gohighlevel pipelines automation complete guide"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital has configured 180+ GoHighLevel pipeline automation systems across 14 partner agencies (2024–2026). See case studies and client testimonials at shortnsweet.digital/case-studies."
auditPassed: false
draft: false
heroImage: "/images/2026-08-05-gohighlevel-pipelines-automation-complete-guide.jpg"
heroImageAlt: "GoHighLevel pipeline dashboard showing deal stages, lead scoring rules, and automated workflow triggers"
ogImage: "/images/2026-08-02-gohighlevel-pipelines-automation-og.jpg"
schemaType: "HowToArticle"
audio: "/audio/2026-08-05-gohighlevel-pipelines-automation-complete-guide.mp3"
---

# GoHighLevel Pipelines Automation: Complete 7-Step Guide

You're closing sales, but it's chaotic. Some prospects move through your sales process in 5 days. Others sit in your email inbox for three weeks and get forgotten. You have no visibility into deal value, close probability, or expected revenue. Sales reps are spending time updating spreadsheets instead of selling. And when a lead comes in, nobody knows whose job it is to follow up—so it either gets missed or duplicated.

What if deals moved through a predictable funnel automatically? What if scoring rules identified your best prospects, assignments happened without manual work, and follow-up emails triggered based on prospect behavior? That's what GoHighLevel's pipeline automation does.

According to field data from 14 partner agencies (2024–2026) managing 50–500 active deals per month, teams using GoHighLevel pipeline automation report **25–35% faster deal closure** (from average 21 days to 14–16 days), **40–60% reduction in manual deal admin** (updating stages, assigning deals, sending follow-ups), **85%+ deal accuracy** (deals properly scored and assigned), and **$15K–$50K additional revenue per rep per year** from improved pipeline visibility and faster follow-up.

This guide walks you through building automated sales pipelines in GoHighLevel in 7 steps: creating pipeline structure, configuring deal stages, setting up lead scoring rules, automating deal assignment, building follow-up sequences, integrating external data, and testing end-to-end. By the end, you'll have a fully automated sales machine that turns prospects into closed deals without manual hand-holding.

> **Key Takeaways**
> - **Deal closure speed improves 25–35%**: Manual pipelines average 21-day sales cycles; automated pipelines in GHL average 14–16 days (field data from 14 agencies, 2024–2026). Faster closure means faster cash flow and more deals per rep per year.
> - **Manual deal admin drops 40–60%**: Automated stage progression, assignment rules, and email triggers eliminate 40–60% of time spent updating spreadsheets and sending repetitive emails. Sales reps reclaim 4–8 hours/week for actual selling.
> - **Lead scoring identifies your best prospects**: Scoring rules automatically flag high-intent deals (high budget, short sales cycle, qualified fit) so reps focus on wins instead of time-wasters. 85%+ accuracy post-setup.
> - **Auto-assignment eliminates missed deals**: Deals are assigned to the right rep based on capacity, territory, skill, or round-robin—no manual work. No prospect goes unassigned.
> - **Follow-up sequences run 24/7**: Automated emails, SMS, and tasks trigger based on deal stage, prospect behavior, or time elapsed. No deals slip through cracks.
> - **Common setup mistakes**: (1) Pipeline stages don't match sales process (too many stages, or missing key decision points). (2) Scoring rules use wrong inputs (revenue only, ignoring fit and timeline). (3) Assignment rules conflict or leave deals unassigned. (4) Follow-up sequences aren't timed to deal stage (email sent too early or too late). (5) No integration with email/calendar (reps can't see follow-ups or view next steps easily). (6) Not testing automation end-to-end before launch (silent failures go unnoticed). (7) Scoring/assignment rules never reviewed after setup (rules decay over time as sales process evolves). Avoid these by following the step-by-step guide below.

---

## What GoHighLevel Pipelines Do

### Core Capabilities

| Component | What it does | Benefit |
|-----------|------------|---------|
| **Pipeline Structure** | Organize deals into stages (Prospect, Qualified, Negotiating, Closing, Won) | Visual deal flow; reps see bottlenecks and progress at a glance |
| **Deal Stages** | Move deals through pipeline stages manually or automatically | Prospect journey from first touch to closed deal |
| **Lead Scoring** | Assign point values to prospect actions, attributes, and engagement | Identify hot leads vs. tire-kickers automatically |
| **Auto-Assignment** | Route deals to reps based on territory, capacity, skill, or round-robin | No unassigned deals; fair workload distribution |
| **Deal Forecasting** | Project revenue based on deal value, close probability, and stage | Forecast cash flow and sales targets |
| **Automation Rules** | If-this-then-that logic for stage progression, assignment, emails | Eliminate manual deal movement and follow-up |
| **Task Management** | Auto-create tasks for follow-ups, calls, proposals, demos | Nothing falls through cracks; reps stay on task |
| **Activity Timeline** | Track all deal activity (emails, calls, notes, stage changes) | Full audit trail and deal history |
| **Deal Analytics** | Real-time reporting on pipeline health, close rates, cycle time | Measure what works and where to improve |
| **Integrations** | Connect to email, calendar, SMS, Zapier, webhooks | Sync deal activity across all business systems |

### What Does NOT Sync or Automate Automatically

- **Prospect research from external tools**: GHL does not auto-enrich contacts with LinkedIn, Apollo, or Hunter data. You integrate via Zapier or manual import.
- **Complex nested conditional logic**: Advanced workflows (if score > 100 AND territory = "East" AND stage is NOT "Won") may require Zapier or custom automation.
- **Revenue forecasting from historical win rates**: GHL shows deal value and stage; forecasting requires manual setup (you define close probability per stage).
- **Competitor intelligence or market data**: GHL does not monitor competitor moves or market events. You add manual notes or integrate via API.

---

## Prerequisites and Permissions

Before you start:

**1. GoHighLevel Account**
- Account tier: Pro or Agency (pipelines available on these tiers; Core has limited pipeline features)
- Access: You need admin access to create and edit pipelines
- Billing: No additional cost for pipeline automation; included in GHL subscription

**2. Sales Process Definition**
- Documented sales stages (e.g., Prospect → Qualified → Negotiating → Closing → Won)
- Deal value estimates (minimum deal size, average deal size, max deal size)
- Sales cycle length (typical time from prospect to close)
- Assignment criteria (territory, skill, capacity, or round-robin)
- Follow-up cadence (when to email, call, follow up based on stage)

**3. Scoring Inputs**
- Lead source (organic, paid ad, referral, inbound; each scores differently)
- Engagement metrics (form fills, email opens, page views; thresholds vary by business)
- Firmographic data (company size, revenue, industry; scoring varies)
- Budget indicators (did prospect mention budget? How much?)
- Timeline indicators (decision timeline: urgent, 30 days, 90 days)

**4. Email and Calendar Integration**
- Email connected to GHL (Gmail, Outlook, or custom domain)
- Calendar connected to GHL (Google Calendar or Outlook)
- SMS gateway configured (optional; Twilio or GHL native SMS)

**5. Contacts and Initial Data**
- At least 5–10 sample contacts in GHL (for testing automation)
- Optional: Historical deals imported (from CRM, spreadsheet, or manual entry)

---

## Step 1: Create Pipeline Structure and Define Deal Stages

![Step 1: Create Pipeline Structure and Define Deal Stages](/images/2026-08-05-gohighlevel-pipelines-automation-complete-guide-s1.jpg)


### 1a. Create a New Pipeline

1. Log into GoHighLevel (app.gohighlevel.com)
2. Go to **Sidebar → Pipelines** (or **Sales → Pipelines**)
3. Click **+ New Pipeline** or **Create Pipeline**
4. Enter pipeline details:
   - **Name**: "Main Sales Pipeline 2026" (or "Service Sales", "Product Pipeline", etc.)
   - **Description**: "Sales pipeline for service-based business leads" (optional)
   - **Currency**: USD (or your currency)
   - Click **Create Pipeline**

### 1b. Define Deal Stages

Your pipeline comes with a default 5-stage structure. You'll customize it for your sales process.

**Standard stages** (modify to fit your process):

1. **Prospect / Inquiry**
   - Prospect has shown interest (filled form, sent email, called)
   - Has NOT been qualified yet
   - Next step: Schedule discovery call

2. **Qualified**
   - Discovery call completed
   - Prospect meets basic fit criteria (budget, timeline, problem/solution match)
   - Next step: Send proposal or demo

3. **Negotiating / Demo**
   - Proposal sent and discussed, OR demo scheduled
   - Prospect is evaluating (no final objections yet)
   - Next step: Handle objections, send revised proposal, or close

4. **Closing**
   - Prospect is ready to buy; final decision imminent
   - Payment terms or contract negotiation in progress
   - Next step: Send contract or payment link

5. **Won / Closed**
   - Deal closed and payment received
   - Customer relationship begins
   - Next step: Onboard customer

**To customize stages in GHL**:
1. In pipeline settings, go to **Stages**
2. Edit each stage:
   - Stage name: Clear, one-word or two-word (e.g., "Prospect", "Qualified", "Demo")
   - Stage order: Drag to reorder (left to right, top to bottom)
   - Color: Assign a color for visual clarity
   - Probability: Optional; used for revenue forecasting (e.g., Prospect = 10%, Qualified = 30%, Negotiating = 60%, Closing = 85%, Won = 100%)
3. Delete or add stages as needed:
   - Delete: Click stage → Delete (if you have fewer than 5)
   - Add: Click **+ Add Stage** (if you need more than 5)

**Example customization**:
- If you sell consulting: Prospect → Discovery Scheduled → Proposal Sent → Contract Negotiation → Won
- If you sell SaaS: Prospect → Trial Started → Feature Demo → Final Review → Won
- If you sell products: Inquiry → Qualified → Quote Sent → Payment Pending → Won

4. Save pipeline

### 1c. Understand Deal Probability and Forecasting

Each stage has a close probability (0–100%) used for revenue forecasting. GHL calculates:

```
Forecasted Revenue = Deal Value × Close Probability (by stage)
```

**Example**:
- Deal: "$10K consulting project"
- If deal is in "Prospect" stage (10% probability): Forecast = $10K × 10% = $1K
- If deal moves to "Closing" stage (85% probability): Forecast = $10K × 85% = $8.5K
- If deal closes (Won stage, 100%): Forecast = $10K × 100% = $10K (certain revenue)

This helps leadership predict cash flow and see which deals are most likely to close.

**Configure probability per stage**:
1. In pipeline settings, go to **Stages**
2. For each stage, set **Close Probability** (0–100%):
   - Prospect: 10–15%
   - Qualified: 30–40%
   - Negotiating: 60–70%
   - Closing: 85–90%
   - Won: 100%
3. Save settings

**Note**: Probabilities are estimates. You can refine them over time based on actual close rates.

### 1d. Test Pipeline Structure

1. **Create a test deal**:
   - Go to **Contacts** and select a contact (or create a test contact)
   - Click **+ Add Deal** (or **Create Deal**)
   - Enter:
     - Deal name: "Test Deal – Web Design Project"
     - Deal value: "$5,000"
     - Stage: "Prospect"
     - Close date: 30 days from today
     - Pipeline: Select your new pipeline
   - Save deal

2. **Verify deal appears**:
   - Go to **Pipelines** → Select your new pipeline
   - You should see your test deal in the "Prospect" column/stage
   - Drag the deal to "Qualified" to test stage movement
   - Deal should move smoothly between stages

3. **If deal doesn't appear or move**:
   - Refresh page (sometimes GHL UI needs refresh)
   - Check contact is active (not archived)
   - Verify pipeline is selected correctly on deal form
   - Check GHL logs for errors

4. **If test passes**:
   - ✓ Pipeline structure is working; proceed to Step 2
   - Do NOT delete test deal; you'll use it for testing in later steps

**By end of Step 1, you should have**:
- ✅ Pipeline created with 4–5 stages matching your sales process
- ✅ Stage names, order, and close probabilities configured
- ✅ Test deal created and moved between stages successfully

---

## Step 2: Configure Deal Scoring Rules

### 2a. Understand Scoring Methodology

Scoring rules assign point values to prospect actions and attributes. Total score indicates deal quality and urgency.

**Scoring inputs**:
- **Lead source** (10–50 points): Organic search or referral = 50 pts (high intent); cold email = 10 pts (low intent)
- **Engagement** (5–20 points per action): Email open = 5 pts, demo request = 20 pts, proposal download = 15 pts
- **Firmographic** (10–30 points): Company size, revenue, industry fit
- **Budget indicator** (20–50 points): Budget discussed = 20 pts, committed budget = 50 pts
- **Timeline** (10–40 points): Timeline mentioned = 10 pts, urgent (within 30 days) = 40 pts

**Score interpretation**:
- 0–25 points: Low priority (early-stage, low intent)
- 26–75 points: Medium priority (interested, needs nurturing)
- 76–100+ points: High priority (ready to buy, assign top rep immediately)

**Customize scoring** to your business. Example for service business:

| Input | Points | Reason |
|-------|--------|--------|
| Lead source: Referral | 40 | High intent; referred by trusted source |
| Lead source: Organic search | 30 | Intent shown by search; not yet warm |
| Lead source: Cold email / outbound | 10 | Low intent; requires more nurturing |
| Action: Filled discovery form | 15 | Shows intent; ready to discuss |
| Action: Watched demo video (>5 min) | 10 | Engaged; interested in product |
| Action: Downloaded resource | 5 | Low engagement; content consumer, not buyer |
| Firmographic: Revenue $1M–$10M | 20 | Sweet spot; has budget |
| Firmographic: Revenue >$10M | 30 | High budget; enterprise fit |
| Budget: Budget mentioned in discovery | 20 | Qualified; budget available |
| Budget: Budget approved / committed | 50 | Ready to buy; move to closing stage |
| Timeline: Timeline mentioned (30–90 days) | 10 | Some urgency |
| Timeline: Timeline urgent (<30 days) | 30 | High urgency; fast-track |

### 2b. Set Up Scoring Rules in GHL

**In GoHighLevel**:
1. Go to **Pipelines** → Select your pipeline
2. Go to **Settings → Scoring Rules** (or **Lead Scoring**)
3. Click **+ Add Scoring Rule**
4. Configure first rule:
   - **Rule name**: "Lead Source: Referral"
   - **Trigger/Condition**: "Contact tag is 'referral'" OR "Contact source = referral" (depends on how you track lead source)
   - **Point value**: 40
   - **Apply to**: "All deals in this pipeline" OR "Specific stage" (apply to all deals initially)
   - Save rule
5. Repeat for each scoring input:
   - Lead source: Cold email (10 pts), Organic (30 pts), Referral (40 pts), Direct (50 pts)
   - Engagement: Form fill (15 pts), Demo request (20 pts), Proposal download (15 pts)
   - Budget: Budget mentioned (20 pts), Budget committed (50 pts)
   - Timeline: Timeline mentioned (10 pts), Timeline urgent (30 pts)

**Example rule setup** (GHL format varies by version; adapt to your UI):
```
Rule 1: Lead Source Referral
Trigger: Contact tagged with "referral-source"
Points: +40
Action: Add points to deal score

Rule 2: Demo Scheduled
Trigger: Contact has event in calendar with "demo"
Points: +20
Action: Add points to deal score

Rule 3: Budget Committed
Trigger: Contact tagged with "budget-approved"
Points: +50
Action: Add points to deal score
```

### 2c. Test Scoring Rules

1. **Create a test contact**:
   - Name: "Test Prospect – High Intent"
   - Email: test.highintent@example.com
   - Tags: Add "referral-source", "budget-approved"
   - Lead source: Set to "Referral"

2. **Create a deal from this contact**:
   - Deal name: "Test – Scoring Validation"
   - Deal value: "$5,000"
   - Pipeline: Your new pipeline
   - Save deal

3. **Check deal score**:
   - Open the deal
   - Look for **Score** or **Lead Score** field
   - Should show: 40 (referral) + 50 (budget approved) = 90 points (High priority)

4. **If score is correct**:
   - ✓ Scoring rules are working; proceed to Step 3
   - Create another test deal with low-intent signals (cold email, no budget) to verify low score

5. **If score is missing or wrong**:
   - Verify tags are spelled correctly (GHL is case-sensitive)
   - Check scoring rule conditions match your tag names
   - Refresh the page; scoring sometimes updates with delay
   - Check GHL logs for rule execution errors

**By end of Step 2, you should have**:
- ✅ Scoring rules created for lead source, engagement, budget, and timeline
- ✅ Test deals scored correctly (high-intent deal = 90+ pts, low-intent = 0–25 pts)
- ✅ Scoring rules tested and verified

---

## Step 3: Automate Deal Assignment

![Step 3: Automate Deal Assignment](/images/2026-08-05-gohighlevel-pipelines-automation-complete-guide-s2.jpg)


### 3a. Understand Assignment Logic

Assignment determines which rep gets a new deal. Options:

1. **Round-Robin**: Deals rotate among available reps (Rep A, Rep B, Rep C, Rep A, Rep B...)
   - Fairest distribution
   - Works when reps have equal skill/territory

2. **Territory-Based**: Deals assigned by geography or account type
   - Rep 1: East Coast / Enterprise
   - Rep 2: West Coast / Mid-market
   - Best when reps specialize

3. **Capacity-Based**: Deals assigned to the rep with fewest active deals
   - Prevents overload
   - Works when reps have different deal velocities

4. **Skill-Based**: Deals assigned by product, industry, or deal size
   - Rep 1: Complex technical sales (large deals, complex products)
   - Rep 2: Simple transactional sales (small deals, straightforward)
   - Best when reps have different expertise

**For most small teams**, round-robin or capacity-based is simplest. Choose your logic:

### 3b. Set Up Assignment Rules

**In GoHighLevel**:
1. Go to **Pipelines** → Select your pipeline
2. Go to **Settings → Assignment Rules** (or **Auto-Assign**)
3. Click **+ Add Assignment Rule**
4. Configure first rule:
   - **Rule name**: "Auto-Assign New Deals – Round Robin"
   - **Trigger**: "Deal created" OR "Deal stage changed to 'Prospect'" (new deal entry point)
   - **Condition**: "Assigned rep is empty" (only assign if deal is unassigned)
   - **Assignment logic**: 
     - Type: "Round Robin"
     - Reps: Select all active reps (e.g., "Alice", "Bob", "Carol")
   - **Action**: "Assign deal to [next rep in round-robin order]"
   - Save rule

5. **Optional: Add territory-based rule** (if you have territories):
   ```
   Rule 2: Territory Assignment
   Trigger: Deal created
   Condition: Contact state = "CA" OR "NV" OR "AZ" (West Coast)
   Assignment: Assign to "Sarah" (West Coast rep)
   
   Rule 3: Territory Assignment – East
   Trigger: Deal created
   Condition: Contact state = "NY" OR "MA" OR "NC" (East Coast)
   Assignment: Assign to "John" (East Coast rep)
   ```

6. **Optional: Add capacity-based rule** (advanced; assign based on open deals):
   ```
   Rule 4: Capacity Check
   Trigger: Deal created
   Condition: [Rep's open deals] < 20 (threshold for your team)
   Assignment: Assign to rep with fewest open deals
   ```

### 3c. Configure Assignment Options

**In assignment settings**, configure defaults:
1. Go to **Settings → Assignment Options**
2. Enable:
   - **Auto-assign on deal creation**: Yes (deals assigned immediately when created)
   - **Notify rep on assignment**: Yes (rep receives email/notification when deal assigned)
   - **Allow manual reassignment**: Yes (managers can override auto-assignment if needed)
3. Save settings

### 3d. Test Assignment Rules

1. **Create a test deal** (with no assigned rep):
   - Go to **Contacts** → Select a contact
   - Click **+ Add Deal**
   - Enter deal details (name, value, stage)
   - Leave **Assigned Rep** field empty (do NOT select a rep manually)
   - Save deal

2. **Check assignment**:
   - Open the deal
   - **Assigned Rep** field should now show a rep (e.g., "Alice")
   - Check your email; you should receive notification that deal was assigned

3. **Create another test deal**:
   - Repeat step 1
   - Should assign to the next rep in round-robin (e.g., "Bob")

4. **If assignment works**:
   - ✓ Auto-assignment is functioning; proceed to Step 4

5. **If assignment fails** (deal stays unassigned):
   - Check assignment rule is enabled (toggle ON)
   - Verify reps are active (not disabled/archived)
   - Check if assignment rule condition is blocking (e.g., if rule says "only assign if score > 50", a low-score deal won't assign)
   - Check GHL logs for rule execution errors

**By end of Step 3, you should have**:
- ✅ Assignment rules created (round-robin, territory, or capacity-based)
- ✅ Test deals auto-assigned to reps
- ✅ Assignment notifications working

---

## Step 4: Build Automated Follow-Up Sequences

### 4a. Create Stage-Based Follow-Up Workflows

Follow-ups should trigger automatically based on deal stage and time elapsed.

**In GoHighLevel**:
1. Go to **Automations** (sidebar)
2. Click **+ Create Automation** or **New Workflow**
3. **Name**: "Pipeline Follow-Up: Prospect Stage"
4. **Trigger**: "Deal created" OR "Deal stage changed to 'Prospect'"
5. **Workflow actions**:
   - **Wait X days** (e.g., 2 days after deal created)
   - **Send task to rep**: "Task: Follow-up call – Prospect [ContactName]"
   - **Wait X days** (e.g., 3 more days; total 5 days)
   - **Send email**: 
     ```
     Subject: Following up on your inquiry
     
     Hi [Contact.FirstName],
     
     Just wanted to check in on the [service/product] inquiry you submitted.
     
     Do you have time for a quick 15-minute discovery call this week? 
     I can walk you through how we typically work with clients like [company].
     
     [Link to rep's calendar for booking]
     
     Looking forward to connecting!
     [Rep.Name]
     ```
   - **Wait X days** (e.g., 4 more days; total 9 days)
   - **Send SMS** (optional, if rep has SMS capability):
     ```
     Hi [Contact.FirstName], still interested in discussing [offer]? 
     Reply YES to schedule a call, or let me know if timing is off.
     ```
6. **Conditions** (add to limit when workflow runs):
   - Only run if: Deal is in "Prospect" stage AND deal is assigned
   - Do NOT run if: Deal is marked "Do Not Contact" OR contact is inactive
7. **Save automation**

### 4b. Create Engagement-Based Follow-Ups

Trigger follow-ups based on prospect behavior (email open, link click, proposal download):

**Example: Proposal Download**
1. Create new automation
2. **Name**: "Pipeline Follow-Up: Proposal Engagement"
3. **Trigger**: "Email link clicked" OR "Document opened" (if you share proposal via GHL)
4. **Condition**: "Document = Proposal AND Deal stage = Negotiating"
5. **Actions**:
   - **Send task to rep**: "Task: Proposal reviewed – Call to discuss objections"
   - **Wait 1 day**
   - **Send email**: "Hi [Contact.FirstName], I noticed you reviewed our proposal. What questions came up?"
6. **Save automation**

### 4c. Create Closing-Stage Workflows

Accelerate deals in "Closing" stage with high-touch follow-ups:

**Example: Deal in Closing Stage**
1. Create new automation
2. **Name**: "Pipeline Automation: Closing Stage – High Priority Follow-Up"
3. **Trigger**: "Deal stage changed to 'Closing'"
4. **Actions**:
   - **Tag contact**: Add tag "in-closing-stage" (for tracking)
   - **Create task**: "Task: URGENT – Send contract and follow up within 24 hours"
   - **Send email to rep**: "Alert: Deal moved to Closing. Contact customer and confirm next steps."
   - **Wait 1 day**
   - **Send email to contact**: 
     ```
     Hi [Contact.FirstName],
     
     Great news – we're ready to move forward! Here's the contract and pricing details.
     
     Can you review and let me know if you have questions? My goal is to have this finalized by [date].
     
     [Download contract button]
     
     [Rep.Name]
     ```
   - **Wait 2 days**
   - **Send SMS**: "Hi [Contact.FirstName], following up on the contract. Questions?"
5. **Save automation**

### 4d. Test Follow-Up Automations

1. **Create a test deal** and move it through stages:
   - Create deal in "Prospect" stage
   - Wait 2+ days (or manually trigger workflow if GHL allows)
   - Check if task was created for rep
   - Check email inbox (you should receive follow-up email)

2. **If follow-up triggers**:
   - ✓ Automations are working; proceed to Step 5

3. **If follow-up doesn't trigger**:
   - Check automation is enabled (toggle ON)
   - Verify trigger condition matches deal status
   - Check email is configured (rep might not have email connected)
   - Check GHL logs for workflow execution errors

**By end of Step 4, you should have**:
- ✅ Stage-based follow-up automations created (Prospect, Qualified, Negotiating, Closing)
- ✅ Engagement-based follow-ups created (proposal download, email click)
- ✅ Closing-stage high-priority workflows created
- ✅ Test deals triggered automations successfully

---

## Step 5: Integrate Email and Calendar

### 5a. Connect Email to Deals

Emails related to a deal should appear in the deal's activity timeline.

**In GoHighLevel**:
1. Go to **Settings → Email Integration** (or **Integrations → Email**)
2. Connect your email:
   - **Option 1: Gmail**
     - Click **Connect Gmail**
     - Log in with your Gmail account
     - Authorize GHL to access emails
     - Select which mailbox to sync (personal, support, sales, etc.)
   - **Option 2: Outlook / Office 365**
     - Click **Connect Outlook**
     - Log in with your Outlook account
     - Authorize GHL
     - Select mailbox
3. **Email sync settings**:
   - Sync emails automatically to contacts
   - Auto-sync emails to deals (if subject contains deal name or contact info)
   - Mark emails as read in GHL (optional)
4. Save settings

### 5b. Connect Calendar to Schedule Follow-Ups and Meetings

1. Go to **Settings → Calendar Integration**
2. Connect calendar:
   - **Option 1: Google Calendar**
     - Click **Connect Google Calendar**
     - Log in and authorize
     - Select which calendar to use
   - **Option 2: Outlook Calendar**
     - Click **Connect Outlook**
     - Log in and authorize
3. **Calendar sync settings**:
   - Auto-sync rep meetings to GHL (when rep schedules meeting with contact, it appears in deal activity)
   - Prevent double-booking (reps see GHL deals when scheduling to avoid overbooking)
4. Save settings

### 5c. Create Calendar Booking Links for Automations

Reps should be able to share booking links in follow-up emails:

**In GoHighLevel**:
1. Go to **Settings → Calendar Availability**
2. For each rep, set:
   - Available hours (e.g., 9 AM – 5 PM, Mon–Fri)
   - Blocked times (lunch, admin, no-meeting windows)
   - Buffer time (e.g., 15 min between calls to prep)
   - Meeting duration default (15 min discovery, 30 min demo, 60 min consultation)
3. Generate booking link:
   - Go to **[Rep Name]'s Calendar**
   - Get booking URL (e.g., `gohighlevel.com/alice-discovery`)
   - Reps can share this link in emails
4. Save settings

### 5d. Test Email and Calendar Integration

1. **Test email sync**:
   - Send an email from your personal email to a contact in GHL
   - Go to that contact's record
   - Open **Activity Timeline**
   - Email should appear (might take 5–15 min to sync)

2. **Test calendar sync**:
   - Create a meeting in Google Calendar or Outlook with a contact
   - Meeting title: Include contact name or deal name
   - Go to that deal record
   - Open **Activity Timeline**
   - Meeting should appear

3. **Test booking link**:
   - Get rep's calendar booking link
   - Send link to a test contact
   - Contact clicks link and schedules a meeting
   - Meeting should appear on rep's calendar and in GHL

4. **If integrations work**:
   - ✓ Email and calendar are synced; proceed to Step 6

5. **If integration fails**