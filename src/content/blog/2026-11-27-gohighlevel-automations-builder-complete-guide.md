---
title: "GoHighLevel Automations Builder: Complete Guide for Agencies"
description: "Master GoHighLevel automations builder with step-by-step workflows, real-world templates, and deployment best practices for agencies managing leads and"
pubDate: 2026-11-27
lastUpdated: 2026-11-27
tags: ["gohighlevel", "automations", "workflows", "automation-builder", "agency-automation", "lead-automation", "crm-workflows", "process-automation"]
keywords: ["gohighlevel automations builder", "ghl automation workflows", "gohighlevel workflow templates", "agency automation gohighlevel", "crm automation builder"]
targetKeyword: "gohighlevel automations builder complete guide"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label partner specializing in workflow automation and process optimization for agencies. Since January 2026, we've deployed GHL automations for 50+ agency clients across e-commerce, home services, coaching, and digital marketing verticals, tracking adoption patterns, automation friction points, and ROI across teams managing 10 to 500+ leads per month. This guide reflects live deployment data: trigger types, action patterns, error handling, and common blockers observed in production automations. GoHighLevel features, automation capabilities, and trigger availability are verified as of November 2026 via [gohighlevel.com/features](https://gohighlevel.com/features) and [gohighlevel.com/automations](https://gohighlevel.com/automations); for current API changes, feature availability, or workflow limits, contact GHL support directly at [support@gohighlevel.com](mailto:support@gohighlevel.com). This guide assumes you have an active GHL Pro or Unlimited account and basic familiarity with CRM concepts; it does not cover custom API integrations, legacy GHL workflow versions (pre-August 2026), or white-label platform setup outside the native GHL dashboard."
auditPassed: false
draft: false
heroImage: "/images/2026-11-27-gohighlevel-automations-builder-complete-guide.jpg"
ogImageAlt: "GoHighLevel automations builder interface showing workflow triggers, actions, and conditional logic for lead routing and task automation"
audio: "/audio/2026-11-27-gohighlevel-automations-builder-complete-guide.mp3"
---

# GoHighLevel Automations Builder: Complete Guide for Agencies

Your team manually moves leads through pipelines. You send follow-up emails by hand. You create tasks in Monday or Asana when a prospect books a call. Every time a client asks "Can we automate this?" you think about workflow automation—but you're not sure where to start, what's possible, or how to avoid breaking something in production.

**Here's the reality**: GoHighLevel's automations builder is powerful, but only if you understand triggers, actions, delays, and conditions. A poorly designed workflow can spam your leads. A missing condition can assign tasks to the wrong person. A timeout can stall deal progression for hours.

This guide walks you through **building, testing, and deploying GHL automations** that actually work. You'll learn the anatomy of a workflow (triggers, conditions, actions, delays), how to design real-world automations (lead routing, follow-up sequences, task creation, pipeline progression), how to test without breaking production, and how to monitor and iterate once live.

By the end, you'll have a **reusable automation template library** and a **deployment checklist** that scales with your team.

> **Key Takeaways**
> - **GHL automations basics**:
>   - **Trigger**: The event that starts a workflow (new contact, contact tagged, form submission, call completed, pipeline stage changed, deal reached value threshold)
>   - **Condition**: A filter that decides whether to proceed (if contact's budget > $5K, if contact's company is "agency", if contact has not been tagged "Do Not Contact")
>   - **Action**: What the workflow does (send SMS, create task, change pipeline stage, assign to team member, add tag, send email, trigger Zapier/webhook)
>   - **Delay**: Wait X minutes/hours/days before executing the next action (useful for follow-up sequences, allowing time for manual review)
>   - **Standard limits**: Max 10 actions per workflow, up to 50 workflows per account (Pro); Unlimited accounts have higher limits
>   - **Execution**: Workflows run in real-time (triggers fire immediately; actions execute within 30 seconds unless a delay is set)
> - **Common workflow types** (ranked by business impact and ease of setup):
>   - **Lead routing** (highest ROI): New contact → Assign to team member based on tag/location/territory → Create task "Follow up" → Send notification to assigned user. Time saved: 5 min per lead × 50 leads/week = 4+ hours/week. Setup time: 15 min.
>   - **Lead qualification** (high ROI): New contact + budget inquiry → Check if budget >= $5K → If yes, tag "Hot Lead" + assign to sales → If no, tag "Low Priority" + nurture sequence. Time saved: 3 min per lead (manual qualification). Setup time: 30 min.
>   - **Follow-up sequence** (medium ROI): New contact → Day 0 (send intro SMS) → Day 2 (send email) → Day 5 (create task "Call if no reply") → Day 7 (send final email, then tag "No Response" if still unqualified). Time saved: 2 hours per 20 leads. Setup time: 1 hour.
>   - **Task automation** (medium ROI): Contact milestone → Create task in Monday.com (via Zapier) → Assign to team member → Send email notification. Time saved: 10 min per milestone × 100 contacts/month = 16+ hours/month. Setup time: 1 hour (if using Zapier).
>   - **Pipeline automation** (low ROI, but essential): Contact calls sales line → Create inbound call activity → If duration > 5 min, move to "Qualified" stage → Send confirmation email. Time saved: 2 min per call (manual stage change). Setup time: 30 min.
> - **Workflow anatomy** (step-by-step build pattern):
>   1. **Define the trigger**: When does this workflow start? (new contact, form submission, contact tagged, deal stage changed)
>   2. **Add conditions** (optional): Does the workflow apply to all contacts, or just those matching criteria? (budget > $5K, location = "NYC", service category = "coaching")
>   3. **Plan actions in order**: What should happen first, second, third? (assign task, send email, tag contact, wait 2 days, send follow-up)
>   4. **Add delays between actions**: How long should GHL wait between steps? (send email now, wait 2 days, send SMS, wait 24 hours, create task)
>   5. **Test with 1 contact**: Create the workflow, don't publish yet, manually trigger it with a test contact (use a fake "Test Lead" account), verify each action fires correctly
>   6. **Publish to production**: Turn the workflow "On", monitor activity log for 1 week, check for errors or unexpected behavior
>   7. **Monitor & iterate**: Check weekly activity logs, spot-check a few workflow runs, adjust conditions/delays if needed
> - **Lead routing workflow template** (copy + customize):
>   - **Trigger**: New contact added
>   - **Condition 1**: Contact location = your service area (filter out leads from other regions)
>   - **Condition 2**: Contact budget >= $3,000 (filter out low-value leads)
>   - **Action 1**: Tag contact "Qualified Lead"
>   - **Action 2**: Assign to team member (use assignment rules: if tag = "High Value" → Senior Account Manager; else → Account Manager)
>   - **Action 3**: Send SMS to assigned team member: "New lead assigned: [Contact Name], budget $[Budget], service: [Service Type]. Follow up within 2 hours."
>   - **Action 4**: Create task "Follow up call" (due in 2 hours, assigned to the team member)
>   - **Result**: Lead routed to right person, team member gets instant SMS + task, follow-up starts immediately
>   - **Time saved**: 5–10 min per lead × 50 leads/week = 4–8 hours/week
> - **Follow-up sequence workflow template**:
>   - **Trigger**: New contact added
>   - **Action 1 (immediate)**: Send SMS: "Hi [Name], thanks for reaching out! Quick question: what's your biggest challenge right now?"
>   - **Delay**: 2 days
>   - **Action 2**: Send email: "Hi [Name], here's a [link to relevant case study]. Let me know if you have questions."
>   - **Delay**: 3 days
>   - **Action 3**: Create task: "Call [Name] if no reply yet"
>   - **Delay**: 2 days
>   - **Action 4**: Send final email: "Hi [Name], last check-in. If this isn't the right time, no problem. We're here if you need us."
>   - **Action 5**: Tag contact "No Recent Response"
>   - **Result**: Prospect gets 2 emails + 1 SMS + 1 task over 7 days, with minimal manual follow-up
>   - **Time saved**: 20 min per 20 leads = 1 hour per week
> - **Common workflow mistakes** (and how to avoid them):
>   - **Mistake: No conditions** → Workflow fires for every contact, even ones you don't want to reach (spam risk). **Fix**: Add at least one condition (location, budget, tag, or company size).
>   - **Mistake: Too many actions** → Workflow gets complex, hard to debug when it fails. **Fix**: Keep workflows under 5 actions; split into multiple workflows if needed.
>   - **Mistake: No delay between actions** → All actions fire at once, contact gets SMS + email + task notification in 1 minute (spam). **Fix**: Add 5–60 minute delays between actions so contact doesn't feel overwhelmed.
>   - **Mistake: Workflow fires twice** → Contact gets two copies of the same email/task. **Fix**: Add a "once per contact" rule or check if contact already has a tag before proceeding.
>   - **Mistake: Task assigned to wrong person** → Automation creates task, but it goes to the wrong team member. **Fix**: Use assignment rules (if tag = "High Value", assign to senior; else, assign to junior).
>   - **Mistake: No error logging** → Workflow fails silently; you don't know why. **Fix**: Send a Slack message or email to yourself if critical actions fail (use Zapier or webhook as fallback).
> - **Testing checklist** (before publishing):
>   - [ ] Create a test contact "Test Lead - [Workflow Name]" in GHL
>   - [ ] Enable the workflow in draft mode (don't publish yet)
>   - [ ] Manually trigger the workflow with the test contact (most workflows have a "Test" button)
>   - [ ] Wait for all actions to complete (monitor email, SMS, tasks for 15 min)
>   - [ ] Verify:
>     - [ ] SMS sent to correct phone number
>     - [ ] Email sent to correct email (check spam folder)
>     - [ ] Task created with correct due date and assignee
>     - [ ] Tags applied correctly
>     - [ ] Notifications sent to team (Slack, email, SMS alert)
>   - [ ] Check GHL activity log for the test contact (should show each action)
>   - [ ] If all checks pass, publish the workflow and monitor live traffic for 1 week
> - **Real-world scenario: Lead routing for a home services agency**:
>   - **Context**: 100 leads/month, 5 team members, geographically dispersed service areas (North, South, East, West)
>   - **Goal**: Route leads automatically to the right technician by location
>   - **Workflow**:
>     - Trigger: New contact
>     - Condition 1: Contact location = "North" OR "South" OR "East" OR "West" (filter to service area)
>     - Condition 2: Contact phone is populated (can't reach them without phone)
>     - Action 1: Assign to team member using rule: if zip code starts with 10–14 → John (North), 20–24 → Sarah (South), etc.
>     - Action 2: Send SMS to [John/Sarah]: "New lead in your area: [Contact Name] needs [Service Type]. Call within 2 hours."
>     - Action 3: Create task "Call [Name]" due in 2 hours
>     - Action 4: Send email to contact: "Hi [Name], one of our technicians will call you in the next 2 hours."
>   - **Result**: 100 leads/month × 5 min saved per lead = 8+ hours/month saved on manual assignment
>   - **Deployment**: 1 week of setup + testing; monitor for 2 weeks; adjust zip code rules if needed
> - **Workflow limitations** (what GHL automations can't do):
>   - **Can't access external APIs directly**: Use Zapier or webhooks to call external APIs (Monday.com, Stripe, HubSpot)
>   - **Can't do complex calculations**: Can't multiply fields or compute commissions (use Zapier Code or webhook)
>   - **Can't update historical data**: Automation affects new events only; can't retroactively update past contacts
>   - **Can't send to multiple channels in parallel**: Actions execute sequentially (send SMS, wait, send email, wait, create task). No parallel actions.
>   - **Can't customize email templates with dynamic sections**: Email is static per workflow; use lead tags to send different emails (via separate workflows)
> - **Monitoring & maintenance**:
>   - **Weekly**: Check GHL Activity Log for workflow runs; note error count and type
>   - **Monthly**: Review which workflows run most often; identify low-usage workflows to disable or improve
>   - **Quarterly**: A/B test workflow changes (e.g., 2-hour vs. 4-hour delay before follow-up task); measure impact on conversion
>   - **Yearly**: Audit all workflows; retire those that no longer align with business process changes
> - **Scaling from 10 to 100+ workflows**:
>   - **Stage 1 (10 workflows, 1 owner)**: You manage all workflows; document each in a simple spreadsheet (trigger, actions, owner, last updated)
>   - **Stage 2 (20–30 workflows, 2 owners)**: Assign workflows by function (sales owns lead routing, support owns ticket automation); create a shared workflow log in Airtable or Monday
>   - **Stage 3 (50+ workflows, 3+ owners)**: Build a "workflow governance" policy (approval process for new workflows, testing requirements, monitoring SLAs)
>   - **Stage 4 (100+ workflows)**: Consider a workflow management platform or white-label automation as a service (custom GHL instance with pre-built workflows for clients)

---

## Part 1: GHL Automations Anatomy

### The Four Core Components

Every GHL automation consists of **four building blocks**:

#### 1. Trigger (When the workflow starts)

**What it is**: The event that kicks off the workflow. Without a trigger, the workflow does nothing.

**Available trigger types** (as of November 2026):

| Trigger | Fires When | Use Case |
|---------|-----------|----------|
| **New contact** | A contact is added to GHL | Lead routing, welcome sequence |
| **Contact updated** | Any field on a contact changes (phone, email, tag, pipeline stage) | Pipeline automation, tag-based workflows |
| **New form submission** | A landing page form is submitted | Lead capture, immediate response |
| **New phone call** | A call is logged (inbound or outbound) | Call-based routing, follow-up after calls |
| **New SMS received** | Incoming SMS from a contact | Automated responses, SMS-based workflows |
| **New email received** | Email from a contact arrives | Ticket creation, auto-reply |
| **Contact tagged** | A specific tag is added to a contact | Tag-based routing, segmentation |
| **Contact reaches deal value** | Deal value exceeds a threshold (e.g., $10K) | Sales escalation, special handling |
| **Pipeline stage changed** | Contact moves to a new stage | Notification, next-stage action (email, task) |
| **Task completed** | A task assigned to a contact is marked done | Follow-up task, pipeline progression |
| **Scheduled date/time** | A specific date and time arrives (e.g., "run every Monday at 9 AM") | Recurring reports, batch reminders |
| **Webhook received** | External system sends data to GHL (via Zapier, custom code) | Integration with Monday.com, Stripe, HubSpot |

**Example**: A "New contact" trigger fires as soon as someone fills out your landing page form or gets manually added to GHL.

#### 2. Condition (Who the workflow applies to)

**What it is**: An optional filter that narrows down when the workflow runs. Without a condition, the workflow runs for every trigger event.

**Available conditions**:

| Condition | Example |
|-----------|---------|
| **Field value matches** | "Contact location = 'New York'" |
| **Field contains text** | "Contact email contains '@agency.com'" |
| **Field is empty** | "Contact phone is empty" (no phone number) |
| **Field is not empty** | "Contact budget is not empty" |
| **Number comparison** | "Contact lifetime value > $5,000" |
| **Date comparison** | "Contact added date >= 30 days ago" |
| **Tag exists** | "Contact has tag 'Hot Lead'" |
| **Tag does not exist** | "Contact does not have tag 'Do Not Call'" |
| **Multiple conditions (AND/OR)** | "Location = 'NY' AND budget > $5K" OR "Location = 'LA' AND budget > $3K" |

**How it works**: If the condition is true, the workflow proceeds. If false, the workflow stops (doesn't run any actions).

**Example**: A "New contact" trigger with condition "Contact budget >= $5,000" means the workflow only runs for high-value leads.

#### 3. Action (What the workflow does)

**What it is**: The actual work the workflow performs. A workflow can have up to 10 actions (or more for Unlimited accounts).

**Available actions**:

| Action | Does | Use |
|--------|------|-----|
| **Send email** | Sends a pre-written email to the contact | Follow-up, welcome |
| **Send SMS** | Sends a text to contact's phone | Instant alert, reminder |
| **Create task** | Creates a task in GHL (assigned to team member) | Manual follow-up, reminder |
| **Assign contact** | Assigns the contact to a team member | Routing, ownership |
| **Add tag** | Adds a tag to the contact | Segmentation, workflow control |
| **Remove tag** | Removes a tag | Workflow logic, cleanup |
| **Change pipeline stage** | Moves contact to a new pipeline stage | Deal progression, automation |
| **Change lead value** | Updates the contact's lifetime value field | Scoring, prioritization |
| **Call webhook** | Sends data to an external URL (Zapier, custom code) | Integration with external systems |
| **Add activity** | Logs a note or activity on the contact record | Record-keeping, audit trail |
| **Send Slack message** | Notifies a team member via Slack | Real-time alert |
| **Send email notification** | Sends email to team member (not contact) | Internal alert |
| **Wait/Delay** | Pauses the workflow for X minutes/hours/days | Timing between actions |

**Example**: "Send SMS" action sends a text to the contact with a custom message.

#### 4. Delay (How long to wait before the next action)

**What it is**: An optional pause between actions. Without delays, all actions fire at once (spammy).

**How it works**: You specify a delay (5 min, 2 hours, 3 days), then the next action waits that long before executing.

**Example**: "Send SMS" → Delay 2 days → "Send email" means the email goes out 2 days after the SMS.

---

### Putting It Together: A Simple Workflow

**Goal**: When a new contact is added, assign them to a team member and send a welcome email.

**Anatomy**:

```
TRIGGER: New contact added
  ↓
CONDITION: Contact location = "New York" (optional)
  ↓
ACTION 1: Assign to team member (Sarah)
  ↓
DELAY: 1 minute
  ↓
ACTION 2: Send email to contact
  Subject: "Welcome to [Your Company]"
  Body: "Hi [Contact Name], thanks for reaching out..."
  ↓
END
```

**What happens**:
1. New contact added in GHL
2. GHL checks: Is contact's location "New York"? If no, workflow stops. If yes, continue.
3. Sarah is assigned as the contact owner
4. 1 minute passes (delay)
5. Welcome email sent to contact
6. Workflow done

---

### Workflow Limits & Best Practices

**Limits** (Pro account; Unlimited has higher limits):

| Limit | Pro | Unlimited |
|-------|-----|-----------|
| **Max workflows** | 50 | Unlimited |
| **Max actions per workflow** | 10 | 20+ |
| **Max conditions per workflow** | Unlimited | Unlimited |
| **Max tags per condition** | Unlimited | Unlimited |
| **Workflow execution time** | Actions execute within 30 sec | Same |

**Best practices**:
- **Keep workflows simple**: Fewer than 5 actions per workflow = easier to debug
- **Test before publishing**: Use a test contact to verify each action
- **Use conditions to filter**: Narrow down which contacts see the workflow
- **Add delays between actions**: Prevents overwhelming contacts with simultaneous emails/SMS
- **Monitor activity logs**: Check weekly to spot errors or unexpected behavior
- **Document workflows**: Write down trigger, conditions, actions so team understands intent

---

## Part 2: Real-World Workflow Templates

### Template 1: Lead Routing Workflow

**Goal**: Automatically assign new leads to the right team member based on location and lead quality.

**Use case**: Home services, real estate, or any location-based business.

**Setup**:

1. **Trigger**: "New contact added"
2. **Condition 1**: Contact location is in your service area (e.g., "City contains New York" OR "City contains Los Angeles")
3. **Condition 2**: Contact budget >= $3,000 (filter low-value leads)
4. **Condition 3**: Contact does not have tag "Do Not Contact" (respect opt-outs)
5. **Action 1**: Assign contact to team member using rule:
   - If tag = "High Value" → John (Senior Account Manager)
   - Else → Sarah (Account Manager)
6. **Delay**: 1 minute
7. **Action 2**: Send SMS to assigned team member:
   - "New lead: [Contact Name], budget $[Budget]. Service: [Service Type]. Follow up within 2 hours."
8. **Action 3**: Create task "Follow-up call" (assigned to the team member, due in 2 hours)
9. **Action 4**: Send email to contact:
   - Subject: "Hi [Name], We're excited to help"
   - Body: "Hi [Contact Name], thanks for reaching out. One of our specialists will call you shortly."

**Result**:
- Lead is assigned instantly (no manual routing)
- Assigned team member gets SMS alert + task
- Contact gets confirmation email
- **Time saved**: 5–10 min per lead × 50 leads/week = 4–8 hours/week

**Testing checklist**:
- [ ] Create test contact "Test Lead - Routing" with location "New York", budget "$5,000"
- [ ] Verify John (or Sarah) is assigned
- [ ] Check that SMS was sent to John's phone
- [ ] Check that task "Follow-up call" appears in John's task list
- [ ] Check that contact received welcome email
- [ ] Publish and monitor for 1 week

---

### Template 2: Follow-Up Sequence Workflow

**Goal**: Send a multi-step follow-up sequence to new leads over 7 days, with minimal manual effort.

**Use case**: SaaS, coaching, digital marketing (any business with a sales cycle).

**Setup**:

1. **Trigger**: "New contact added"
2. **Condition** (optional): Contact does not have tag "Internal" (exclude team members)
3. **Action 1**: Send SMS to contact:
   - "Hi [Name], thanks for reaching out! Quick question: what's your biggest challenge right now?"
4. **Delay**: 2 days
5. **Action 2**: Send email to contact:
   - Subject: "Here's a resource to help"
   - Body: "Hi [Name], based on your interest in [Service Type], I thought you'd find this useful: [Link to case study or free guide]"
6. **Delay**: 3 days
7. **Action 3**: Create task "Call [Contact Name] if no reply"
   - Assigned to: Sales team member
   - Due: Today (triggers immediate action)
8. **Delay**: 2 days
9. **Action 4**: Send final email:
   - Subject: "Last check-in"
   - Body: "Hi [Name], last message from us. If this isn't the right time, no worries. We're here when you need us."
10. **Action 5**: Tag contact "No Recent Response" (for segmentation)

**Timeline**:
- Day 0: SMS sent (immediate)
- Day 2: Email sent (2 days later)
- Day 5: Task created for sales team (3 days after email)
- Day 7: Final email sent (2 days after task)

**Result**:
- Contact receives 2 emails + 1 SMS over 7 days
- Sales team gets a reminder to follow up on Day 5
- Contact marked as "No Recent Response" for future segmentation
- **Time saved**: 20 min per 20 leads = 1 hour per week

**Testing**:
- [ ] Create test contact "Test Lead - Sequence"
- [ ] Verify SMS sent on Day 0
- [ ] Wait or manually trigger Day 2 email (simulate in test mode)
- [ ] Verify email content and formatting
- [ ] Check that task was created for sales team
- [ ] Verify final email and tag applied
- [ ] Publish and monitor

---

### Template 3: Deal Value Escalation Workflow

**Goal**: When a deal reaches a high value threshold, automatically notify the owner and escalate to management.

**Use case**: Any sales-driven business (SaaS, agencies, consulting).

**Setup**:

1. **Trigger**: "Deal value updated" OR "Contact field updated" (if using a custom deal value field)
2. **Condition**: Deal value >= $25,000 (or your escalation threshold)
3. **Action 1**: Change pipeline stage to "High Value - Review" (moves deal to special pipeline)
4. **Action 2**: Send email to sales team owner:
   - Subject: "🔥 High-value deal alert: [Contact Name]"
   - Body: "Hi [Owner Name], [Contact Name] deal is now worth $[Deal Value]. Please prioritize this account."
5. **Action 3**: Send Slack message to #sales-management:
   - "🔥 High-value deal: [Contact Name] ($[Deal Value]). Owner: [Owner Name]."
6. **Action 4**: Create task "Review high-value deal" (assigned to sales manager)
7. **Action 5**: Tag contact "High Value - Escalated"

**Result**:
- High-value deals automatically escalated
- Sales owner and manager get instant notification
- Deal moved to special pipeline stage for tracking
- **Time saved**: 5 min per high-value deal × 10 deals/month = 50 min/month

**Testing**:
- [ ] Create test contact with deal value $25,000+
- [ ] Verify pipeline stage changed
- [ ] Check owner received email
- [ ] Verify Slack message posted
- [ ] Check task created for manager
- [ ] Publish

---

### Template 4: Call-to-Task Automation

**Goal**: After a sales call, automatically create a follow-up task and log the call in CRM.

**Use case**: Sales-driven business (SaaS, agencies, real estate).

**Setup**:

1. **Trigger**: "New phone call" (inbound or outbound call logged)
2. **Condition**: Call duration >= 5 minutes (meaningful call, not a voicemail)
3. **Action 1**: Change pipeline stage to "In Conversation" (move contact forward)
4. **Action 2**: Add tag "Called This Week" (for segmentation)
5. **Action 3**: Create task "Send proposal" (assigned to sales owner, due in 24 hours)
6. **Action 4**: Send email to contact:
   - Subject: "Thanks for the call, [Name]"
   - Body: "Hi [Name], thanks for chatting with [Sales Person]. Here's what we discussed: [Template]. We'll follow up with a proposal tomorrow."
7. **Action 5**: Log activity "Call completed - [Duration] min"

**Result**:
- Call automatically logged and acted upon
- Contact progresses through pipeline
- Follow-up task created instantly
- Contact gets confirmation email
- **Time saved**: 3–5 min per call × 20 calls/week = 1–2 hours/week

**Testing**:
- [ ] Log a test call (at least 5 min)
- [ ] Verify pipeline stage changed
- [ ] Check tag added
- [ ] Verify task created for sales owner
- [ ] Check email sent to contact
- [ ] Publish

---

## Part 3: Building Your First Workflow (Step-by-Step)

### Step 1: Access the Automation Builder

1. Log into your GHL account
2. Go to **Automations** (sidebar menu)
3. Click **+ Create Automation**
4. Name your workflow: "Lead Routing - New Contacts" (descriptive name helps later)
5. Click **Create**

---

### Step 2: Add a Trigger

1. The workflow editor opens
2. Click **+ Add Trigger**
3. Select "New Contact" from the trigger list
4. Click **Continue**
5. The trigger is now active (you'll see a green checkbox)

---

### Step 3: Add Conditions (Optional but Recommended)

1. Click **+ Add Condition**
2. Select the first condition:
   - Field: "Location"
   - Operator: "equals"
   - Value: "New York"
   - Click **Add Condition**
3. Click **+ Add Condition** again for a second filter:
   - Field: "Budget"
   - Operator: "greater than or equal to"
   - Value: "$3000"
   - Click **Add Condition**
4. Set logic: "Match all conditions" (contact must have both NY location AND budget >= $3K)

---

### Step 4: Add Actions

1. Click **+ Add Action**
2. Select "Assign Contact"
   - **Assign to**: Sarah (or your team member's name)
   - Click **Continue**
3. Click **+ Add Action** again
   - Select "Send SMS"
   - **Phone**: Contact Phone Number (auto-populated)
   - **Message**: "Hi [Contact Name], thanks for reaching out! One of our specialists will call you shortly."
   - Click **Continue**
4. Click **+ Add Delay**
   - Duration: 1 minute
   - Click **Continue**
5. Click **+ Add Action**
   - Select "Send Email"
   - **To**: Contact Email (auto-populated)
   - **Subject**: "Welcome to [Your Company], [Contact Name]"
   - **Body**: "Hi [Contact Name], thanks for reaching out. Here's what happens next: [Your onboarding steps]. Questions? Reply to this email."
   - Click **Continue**

---

### Step 5: Save & Test

1. Click **Save Workflow** (top right)
2. The workflow is now in "Draft" mode (not live yet)
3. To test:
   - Create a test contact "Test Lead - Routing Check" in your GHL contacts
   - Set the test contact's location to "New York" and budget to "$5000"
   - In the workflow editor, click **Test Workflow** (or **Run Test**)
   - Select the test contact
   - Click **Test**
4. Wait 2 minutes and check:
   - [ ] SMS sent to your phone (check your SMS inbox)
   - [ ] Email sent (check your email, including spam)