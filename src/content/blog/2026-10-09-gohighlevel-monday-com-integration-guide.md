---
title: "GoHighLevel Monday.com Integration Guide: Automations & Task"
description: "Connect GoHighLevel and Monday.com: sync contacts, auto-create tasks, send SMS when deadlines approach, log GHL automations as Monday comments"
pubDate: 2026-10-09
lastUpdated: 2026-10-09
tags: ["gohighlevel", "monday-com", "crm-integration", "workflow-automation", "task-management", "sms-automation", "zapier-setup"]
keywords: ["gohighlevel monday.com integration", "monday.com ghl setup", "zapier gohighlevel monday", "crm task automation", "deadline sms alerts"]
targetKeyword: "gohighlevel monday.com integration guide"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency. We've deployed GHL + Monday.com integrations for 30+ agencies since 2023. This guide covers technical setup only—not project outcomes or client results. All tool references (GoHighLevel, Monday.com, Zapier) verified against current documentation from gohighlevel.com/developers, monday.com/developers/v2, and zapier.com/apps (retrieved October 2026). For security and compliance questions, consult your platform administrators; for SMS compliance (TCPA), consult legal counsel."
auditPassed: false
draft: false
heroImage: "/images/2026-10-09-gohighlevel-monday-com-integration-guide.jpg"
ogImage: "/images/2026-10-09-gohighlevel-monday-com-integration-og.jpg"
audio: "/audio/2026-10-09-gohighlevel-monday-com-integration-guide.mp3"
---

# GoHighLevel Monday.com Integration: Automations & Task Setup

You're running an agency. Right now, your tools are disconnected:

- **GHL contacts** live in your CRM, but project deadlines and task progress live in Monday.com
- **When a client needs onboarding**, you manually create a task in Monday and manually check GHL for contact details
- **When a deadline approaches**, you check Monday first, then manually send a reminder SMS via GHL
- **When a GHL automation fires** (e.g., "client clicked link"), Monday has no idea—no way to log it or update project status

This guide walks you through connecting GoHighLevel and Monday.com using Zapier as middleware. You'll set up four core workflows: sync GHL contacts to Monday items, auto-create tasks for new clients, send SMS reminders when deadlines approach, and log GHL automations as Monday comments.

> **Key Takeaways**
> - **Integration method**: Use Zapier ($20–$50/month depending on task volume) to bridge GHL automations and Monday.com webhooks. No native GHL-Monday connector exists; Zapier is the standard middleware for this stack.
> - **Setup timeline**: 2–3 hours total (account creation, API keys, testing 4 core workflows). Each workflow takes 20–40 minutes to build, test, and optimize.
> - **Cost breakdown**: GHL ($40–$120/month) + Monday.com ($80–$200/month depending on users/seats) + Zapier ($20–$100/month) + GHL SMS add-on ($30–$50/month) = ~$170–$470/month baseline. Cost per workflow: ~$5–$15/month in Zapier task fees.
> - **What you'll get**: GHL contacts synced to Monday items, auto-created tasks for new GHL contacts, SMS sent when Monday tasks are due tomorrow, GHL automation triggers logged as Monday comments, bidirectional updates (contact tag in GHL → Monday status change).
> - **Compliance essentials**: SMS requires customer opt-in. Zapier webhooks are HTTPS-signed (Zapier validates automatically). Maintain SMS logs in GHL for 12+ months per TCPA requirements. See 'Compliance Checklist' section.
> - **Common issues**: Email mismatch between GHL and Monday (integration uses email as primary key), missing Monday custom fields for GHL data, Zapier task limits hit mid-month, SMS not sending (GHL SMS add-on not active), Monday API rate limits (max 20 requests/sec).
> - **When to integrate**: If you manage 20+ active clients across both platforms and want automated task creation and deadline alerts. If <10 clients, manual workflows may be simpler and cheaper.
> - **Monday status labels**: Verify your exact Monday board status labels before building filters (e.g., 'Done', 'Completed', 'Closed' vary by board template). Default labels shown in guide; adapt to your board's naming.

---

## Part 1: Architecture & Integration Overview

### How GHL, Monday.com, and Zapier Connect

Neither GoHighLevel nor Monday.com has a native integration. Instead, you use Zapier as middleware:

```
1. New contact added to GHL
   ↓
2. GHL webhook fires → Zapier receives event
   ↓
3. Zapier maps GHL fields (name, email, phone) to Monday columns
   ↓
4. Zapier creates Monday item (project task/contact)
   ↓
5. Client info now visible in Monday board + GHL contact linked

---

Separate flow:

1. Monday task due date approaches (tomorrow)
   ↓
2. Zapier scheduled trigger (daily 9:00 AM) checks Monday for due-tomorrow items
   ↓
3. Zapier queries GHL to find matching contact by email
   ↓
4. Zapier sends SMS via GHL SMS API
   ↓
5. Customer receives SMS reminder

---

Separate flow:

1. GHL automation triggers (e.g., client opened email, clicked link)
   ↓
2. GHL webhook fires → Zapier receives event
   ↓
3. Zapier finds corresponding Monday item by email
   ↓
4. Zapier adds comment to Monday item with automation details
   ↓
5. Team sees automation log in Monday task comments
```

**Integration latency**: 
- GHL → Monday (new contact): 10–30 seconds (Zapier webhook delay + Monday API delay)
- Monday → SMS (due-tomorrow check): 5–10 minutes after scheduled trigger time
- GHL automation → Monday comment: 15–45 seconds after automation fires

### Integration Stack

| Component | Purpose | Cost |
|---|---|---|
| **GoHighLevel** | CRM + SMS/email automations | $40–$120/month (wholesale) |
| **Monday.com** | Project/task management | $80–$200/month (2–5 seats) |
| **Zapier** | Webhook middleware + field mapper | $20–$100/month (depending on task volume) |
| **GHL SMS Add-On** | SMS sending via Twilio | $30–$50/month |
| **Total (baseline)** | Complete automation stack | ~$170–$470/month |

### Why Zapier vs. Pabbly vs. Make?

| Criteria | Zapier | Pabbly Connect | Make |
|---|---|---|---|
| **GHL support** | ✅ Native | ✅ Native | ✅ Native |
| **Monday.com support** | ✅ Native | ✅ Native | ✅ Native |
| **Cost for 4 workflows** | $30/month (100 tasks/month) | $19/month | $10–$20/month |
| **Webhook support** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Scheduled triggers** | ✅ Yes (via Schedule Zapier) | ✅ Yes | ✅ Yes |
| **Email matching** | ✅ Built-in | ✅ Built-in | ✅ Built-in |
| **Setup time (first workflow)** | 20–25 min | 15–20 min | 25–30 min |
| **Documentation quality** | ✅ Excellent | ✅ Good | ⚠️ Moderate |
| **Community size** | ✅ Large (troubleshooting easier) | ⚠️ Medium | ⚠️ Medium |

**Recommendation**: Start with **Zapier** (best documentation, largest user base for GHL-Monday integrations, native Monday OAuth).

---

## Part 2: Pre-Integration Checklist

Verify these prerequisites before building workflows:

### GoHighLevel Requirements

- [ ] **Active GHL account** (standard or white-label)
- [ ] **API key generated** (Settings → Integrations → API Keys → Create New)
- [ ] **API key permissions**: Contacts (read/write), Automations (read), SMS (read/write), Email (read)
- [ ] **SMS add-on purchased** ($30–$50/month; required for SMS sending)
- [ ] **SMS sender configured** (Settings → SMS → Verify Long Code or Short Code assigned)
- [ ] **Test contact created** in GHL with valid email and phone (E.164 format: `+15551234567`)

### Monday.com Requirements

- [ ] **Active Monday.com account** (paid plan; free tier has limited integrations)
- [ ] **API token generated** (Profile → Integrations → Developer → Create Personal API Token)
- [ ] **Project board created** (e.g., "Clients", "Onboarding", or "Projects")
- [ ] **Custom columns created** (see 'Monday Board Setup' section below):
  - Email (text)
  - Phone (text)
  - GHL Contact ID (text)
  - Status (status dropdown: "New", "In Progress", "Completed", "On Hold")
  - Due Date (date picker)
  - SMS Status (text: "Pending", "Sent", "Opt-Out")
- [ ] **Test item created** in Monday with due date set to tomorrow
- [ ] **Board permissions confirmed** (API token account has Edit rights on all boards)

### Zapier Requirements

- [ ] **Zapier account created** (zapier.com)
- [ ] **Paid plan** (Starter $20/month minimum for webhooks + 100 monthly tasks)
- [ ] **GHL connection authorized** in Zapier (OAuth via gohighlevel.com)
- [ ] **Monday.com connection authorized** in Zapier (OAuth via monday.com)
- [ ] **Payment method added** (Zapier charges monthly; free tier limited to 100 tasks/month)

### Test Environment

- [ ] **GHL test contact**: Name: "Test User", Email: "test@yourdomain.com", Phone: "+15551234567"
- [ ] **Monday test item**: Email: "test@yourdomain.com", Due Date: Tomorrow's date
- [ ] **Zapier test access**: Can create/edit Zaps; can run test steps

---

## Part 3: Monday.com Board Setup

Before building Zapier workflows, configure your Monday.com board with required columns.

### Step 1: Create Project Board

1. Log into **Monday.com**
2. Click **+ Add Board** (top left)
3. **Board name**: "GHL Clients" (or your naming convention)
4. **Template**: Select "Blank" or "Task Management"
5. Click **Create Board**

### Step 2: Add Custom Columns for GHL Data

Your Monday board needs these columns to store synced GHL data:

1. **Board layout** should include:
   - **Name** (default item name column; will store contact name)
   - **Email** (text column; will store GHL email)
   - **Phone** (text column; will store GHL phone)
   - **GHL Contact ID** (text column; will store GHL's unique contact ID for linking)
   - **Status** (status dropdown column; will track onboarding progress)
   - **Due Date** (date column; will store deadline)
   - **SMS Status** (text column; tracks "Pending", "Sent", "Opt-Out")
   - **Last Action** (text column; stores GHL automation name and timestamp)

### Step 3: Add Custom Columns (If Not Present)

For each missing column:

1. Click the **+ icon** (next to existing columns, at right edge of board)
2. Select **Add a new column**
3. **Column type**:
   - **Email, Phone, GHL Contact ID, Last Action** → Text
   - **SMS Status** → Text (or Dropdown: values "Pending", "Sent", "Opt-Out")
   - **Status** → Status (dropdown; values: "New", "In Progress", "Onboarded", "On Hold", "Done")
4. **Column name**: Enter exactly (matching case, for Zapier mapping)
5. Click **Save**

Repeat for each column.

### Step 4: Create a View for Due-Tomorrow Items

For Workflow 3 (SMS reminders on due-tomorrow items), create a filtered view:

1. **Board name** (top left) → Click board name → **Add View**
2. **View type**: Table
3. **View name**: "Due Tomorrow"
4. Click **Add Filter**:
   - **Column**: Due Date
   - **Condition**: equals "Tomorrow"
5. Click **Create View**

This view will auto-populate tomorrow's due items; Zapier can query this view for SMS sending.

---

## Part 4: Generate API Credentials & Authorize Connections

![Part 4: Generate API Credentials & Authorize Connections](/images/2026-10-09-gohighlevel-monday-com-integration-guide-s1.jpg)


### Step 1: Generate GoHighLevel API Key

1. Log into **GHL dashboard** (app.gohighlevel.com)
2. Go to **Settings** (bottom left) → **Integrations** → **API Keys**
3. Click **Create New** (or **+ New API Key**)
4. **Name**: "Zapier Integration"
5. **Scope** — Select:
   - ✅ Contacts (read/write)
   - ✅ Automations (read)
   - ✅ SMS (read/write)
   - ✅ Email (read/write)
6. Click **Create**
7. **Copy API key** (appears once; store securely in password manager)
8. Verify **SMS add-on is active**: Settings → SMS → Confirm status shows "Active"

**Time**: 5 minutes

### Step 2: Generate Monday.com API Token

1. Log into **Monday.com**
2. Click **Profile** (bottom left avatar) → **Integrations**
3. Go to **Developer** tab
4. Click **Create API Token**
5. **Token name**: "Zapier Integration"
6. **Permissions**: Select "Account Admin" (or minimum: boards read/write, items read/write)
7. Click **Create**
8. **Copy token** (appears once; store securely)

**Time**: 3 minutes

### Step 3: Connect GoHighLevel to Zapier

1. Log into **Zapier** (zapier.com)
2. Go to **Connections** (left sidebar)
3. Click **+ Connect Your Apps**
4. Search for **GoHighLevel**
5. Click **GoHighLevel**
6. Click **Sign In**
7. **Zapier authorization popup** — Follow GHL OAuth flow:
   - Authenticate with your GHL email/password
   - Click **Allow** to grant Zapier access to Contacts, SMS, Automations
8. Zapier confirms: "GoHighLevel connected successfully"

**Time**: 5 minutes

### Step 4: Connect Monday.com to Zapier

1. In **Zapier Connections**, click **+ Connect Your Apps**
2. Search for **Monday**
3. Click **Monday.com**
4. Click **Sign In**
5. **Monday.com authorization popup** — Follow OAuth flow:
   - Enter your Monday email and password
   - Click **Authorize** to grant Zapier access to your workspace and boards
6. Zapier confirms: "Monday.com connected successfully"

**Alternative** (if OAuth fails): Use API token method:
   - In Zapier, click **Monday.com** → **Use API Token**
   - Paste your Monday API token from Step 2
   - Click **Save**

**Time**: 5 minutes

**Total setup time (Part 4): ~18 minutes**

---

## Part 5: Core Workflow 1 — Sync New GHL Contacts to Monday Items

**Goal**: When a new contact is added to GHL → automatically create a Monday item with contact details (name, email, phone) and link the GHL Contact ID.

### Step 1: Create New Zap

1. In **Zapier**, click **Create** (top left)
2. **Name**: "New GHL Contact → Create Monday Item"
3. Click **Create Zap**

### Step 2: Add Trigger — New Contact in GHL

1. **Search for app**: GoHighLevel
2. **Select event**: **New Contact**
3. Click **Continue**
4. **Choose account**: Select your GHL account (via OAuth connection from Part 4)
5. Click **Test trigger** (Zapier fetches recent GHL contacts)
   - Success: "Found X contacts"
   - Failure: Check API key permissions (must include Contacts read/write)

### Step 3: Add Action 1 — Create Monday Item

1. Click **+ Add Action Step**
2. **Search for app**: Monday
3. **Select event**: **Create Item**
4. Click **Continue**
5. **Choose account**: Select your Monday account (via OAuth from Part 4)
6. **Board**: Select your "GHL Clients" board (created in Part 3)
7. **Group**: Select the group/section (or leave default)
8. **Item Name**: Map to `First Name + " " + Last Name` (Zapier format: `Full Name` field from GHL)
   - In Zapier field, click the + icon → **GHL Trigger → Full Name**
9. Click **Continue**

### Step 4: Add Action 2 — Map GHL Fields to Monday Columns

This step fills in the Email, Phone, GHL Contact ID columns you created in Part 3.

1. **Stay in the Create Item action** — Scroll down to see column mappings
2. **Email column** (if you named it "Email"):
   - Click the Email field → Select **GHL Trigger → Email**
3. **Phone column** (if you named it "Phone"):
   - Click the Phone field → Select **GHL Trigger → Phone**
4. **GHL Contact ID column** (if you named it "GHL Contact ID"):
   - Click the GHL Contact ID field → Select **GHL Trigger → ID**
5. **Status column** (optional):
   - Set to "New" (static value; user will update as onboarding progresses)
6. Click **Continue**

### Step 5: Test Workflow

1. Click **Test & Review**
2. **Zapier test mode** — Zapier simulates a new GHL contact and attempts to create a Monday item
   - Success: "Item created: [Monday item URL]"
   - Failure: Check column names match exactly (Zapier is case-sensitive)
3. **Verify in Monday**:
   - Go to your GHL Clients board
   - New test item should appear with contact details in columns

### Step 6: Activate Zap

1. Toggle workflow **ON** (switch at top right)
2. Zap is now live — all new GHL contacts will auto-create Monday items

**Expected result**: Within 10–30 seconds of adding a contact in GHL, a new Monday item appears with name, email, phone, and GHL Contact ID pre-filled.

**Time to build and test**: ~20 minutes

---

## Part 6: Core Workflow 2 — Auto-Create Onboarding Tasks for New Clients

![Part 6: Core Workflow 2 — Auto-Create Onboarding Tasks for New Clients](/images/2026-10-09-gohighlevel-monday-com-integration-guide-s2.jpg)


**Goal**: When a new GHL contact is tagged "client_onboarding" → create a Monday item in a separate "Onboarding" board with a 7-day due date and automatically assign tasks (welcome call, contract signing, payment setup).

### Step 1: Create New Zap

1. In **Zapier**, click **Create**
2. **Name**: "GHL Onboarding Tag → Monday Onboarding Tasks"
3. Click **Create Zap**

### Step 2: Add Trigger — Contact Tagged in GHL

1. **Search for app**: GoHighLevel
2. **Select event**: **Contact Tagged** (or **Tag Added to Contact**)
3. Click **Continue**
4. **Choose account**: Select your GHL account
5. **Tag name**: Enter "client_onboarding" (exact match required)
6. Click **Test trigger**

### Step 3: Add Action — Create Onboarding Task Item

1. Click **+ Add Action Step**
2. **Search for app**: Monday
3. **Select event**: **Create Item**
4. Click **Continue**
5. **Choose account**: Select your Monday account
6. **Board**: Select your "Onboarding" board (create this board first if not present; same setup as Part 3)
7. **Item Name**: Map to `Full Name + " - Onboarding"` (e.g., "John Doe - Onboarding")
   - In field: Click + → GHL Trigger → Full Name, then add " - Onboarding" text
8. **Due Date**: Set to 7 days from today
   - Click field → Select "+" → **Zapier date formula** → `{{ addDays(now, 7) }}`
9. **Email column**: Map to GHL email
10. **Status column**: Set to "In Progress"
11. Click **Continue**

### Step 4: Add Sub-Tasks (Optional but Recommended)

If your Monday board supports sub-items, add three onboarding sub-tasks automatically:

1. **In Monday board settings**, enable "Sub-Items" (if not already enabled)
2. **Back in Zapier**, after creating the main item, click **+ Add Action**
3. **Search for app**: Monday
4. **Select event**: **Create Sub-Item**
5. Click **Continue**
6. **Parent Item**: Map to output from Step 3 (the onboarding task you just created)
7. **Sub-Item Name**: "Schedule welcome call"
8. **Due Date**: 2 days from today (`{{ addDays(now, 2) }}`)
9. Click **Continue**

Repeat for two more sub-items:
   - "Send contract for signature" (due 3 days from today)
   - "Collect payment & set up account" (due 5 days from today)

### Step 5: Test Workflow

1. Click **Test & Review**
2. **Tag a test contact** in GHL with "client_onboarding"
3. **Wait 10–30 seconds**, then refresh Monday
4. **Verify**: New onboarding task appears in Onboarding board with 7-day due date and three sub-tasks

### Step 6: Activate Zap

1. Toggle **ON**

**Expected result**: Every client tagged with "client_onboarding" in GHL auto-creates a Monday onboarding task with three sub-tasks spread over 7 days.

**Time to build and test**: ~25 minutes

---

## Part 7: Core Workflow 3 — SMS Reminders for Due-Tomorrow Tasks

**Goal**: Each morning at 9:00 AM, query Monday for items due tomorrow → look up corresponding GHL contact by email → send SMS reminder.

**Why this approach**: Unlike a static "schedule daily check" trigger, this workflow uses Monday's "Item Updated" trigger on the Due Date column combined with a 24-hour filter. This captures real-time due-date changes and ensures accuracy even if due dates shift mid-day.

### Step 1: Create New Zap

1. In **Zapier**, click **Create**
2. **Name**: "Monday Due Tomorrow → GHL SMS Reminder"
3. Click **Create Zap**

### Step 2: Add Trigger — Item Due Tomorrow (Real-Time Approach)

**Option A: Real-Time Accuracy (Recommended)**

1. **Search for app**: Monday
2. **Select event**: **When Item Updated**
3. Click **Continue**
4. **Choose account**: Select your Monday account
5. **Board**: Select your "GHL Clients" board
6. **Column**: Select "Due Date"
7. **Trigger type**: "Whenever column changes"
8. Click **Continue**
9. **Add Filter** (to catch only due-tomorrow changes):
   - Click **+ Add Filter**
   - **Column**: Due Date
   - **Condition**: Is within "24 hours" of now
   - Logic: If due date is tomorrow (within next 24 hours) → continue; else stop
10. Click **Test trigger** (Zapier simulates an item update)

This approach triggers whenever a due date changes to within 24 hours from now. More accurate than a daily schedule because it catches real-time changes.

**Option B: Scheduled Daily Check (Simpler, Less Accurate)**

If you prefer a simpler flow but accept a 10–15 minute window of variability:

1. **Search for app**: Schedule (Zapier built-in)
2. **Select event**: **Every Day**
3. Click **Continue**
4. **Time**: Set to "9:00 AM" (your timezone)
5. Click **Test trigger** (Zapier simulates a 9:00 AM trigger)
6. **Continue to next step** — Add Monday query

**Recommendation**: Use Option A (real-time) for accuracy. Option B is simpler if you only send one batch of reminders per day.

### Step 3: Add Filter — Only Process Items With Email & GHL Contact Link

1. Click **+ Add Filter**
2. **Condition**:
   - **If** Email column **is not empty**
   - **And** GHL Contact ID column **is not empty**
   - **Then** Continue
   - **Else** Stop (skip items without GHL link)
3. Click **Save Filter**

This prevents SMS from sending to incomplete records.

### Step 4: Add Action 1 — Query GHL for Matching Contact

1. Click **+ Add Action Step**
2. **Search for app**: GoHighLevel
3. **Select event**: **Find Contact**
4. Click **Continue**
5. **Choose account**: Select your GHL account
6. **Search by**: Email
7. **Email**: Map to Monday Email column (`{{ Email }}` in Zapier)
8. Click **Continue**

This looks up the GHL contact by email to retrieve the phone number and other details.

### Step 5: Add Action 2 — Send SMS Reminder

1. Click **+ Add Action Step**
2. **Search for app**: GoHighLevel
3. **Select event**: **Send SMS**
4. Click **Continue**
5. **Choose account**: Select your GHL account
6. **Contact**: Map to output from Step 4 (GHL Contact ID)
7. **Message Template**:
   ```
   Hi {{First Name}}, reminder: You have a task due tomorrow.
   Details: {{Monday Item Name}}
   Deadline: {{Due Date}}
   View in Monday: {{Monday Item URL}}
   Reply STOP to unsubscribe.
   ```
8. **Map dynamic fields**:
   - `{{First Name}}` → GHL Contact output from Step 4
   - `{{Monday Item Name}}` → Monday trigger from Step 2
   - `{{Due Date}}` → Monday trigger Due Date column
   - `{{Monday Item URL}}` → Monday trigger Item URL
9. Click **Continue**

### Step 6: Add Action 3 — Update Monday Item "SMS Status" Column

Track that SMS was sent:

1. Click **+ Add Action Step**
2. **Search for app**: Monday
3. **Select event**: **Update Item**
4. Click **Continue**
5. **Choose account**: Select your Monday account
6. **Item ID**: Map to Monday trigger from Step 2
7. **SMS Status column**: Set to "Sent"
8. Click **Continue**

### Step 7: Test Workflow

1. Click **Test & Review**
2. **Manual test**:
   - In Monday, update a test item's Due Date to tomorrow (or 24 hours from now)
   - Ensure Email and GHL Contact ID columns are filled
   - Zapier will detect the change and simulate the workflow
   - Check: SMS should be logged in GHL SMS history; Monday "SMS Status" should show "Sent"
3. **If SMS doesn't send**:
   - Verify GHL SMS add-on is **active**
   - Check phone number is E.164 format (`+15551234567`)
   - Verify GHL Contact ID exists in GHL system (not a stale ID)
   - Check Zapier logs for error messages

### Step 8: Activate Zap

1. Toggle **ON**

**Expected result**: When a Monday task's due date shifts to within 24 hours, SMS reminder automatically sends to the linked GHL contact with task details and deadline.

**Performance note**: If you have 50+ tasks due tomorrow, SMS may take 5–10 minutes to send all (Zapier processes in batches). For faster sending, consider a shorter batch window or multiple reminders per day.

**Time to build and test**: ~30 minutes

---

## Part 8: Core Workflow 4 — Log GHL Automations to Monday Comments

**Goal**: When a GHL automation triggers (e.g., email opened, link clicked, form submitted, SMS reply received) → find the corresponding Monday item by email → add a comment documenting the automation event and timestamp.

**Why this matters**: You'll have a complete audit trail in Monday: when the contact was added, what tasks are due, and what GHL automations have fired. All in one place.

### Step 1: Create New Zap

1. In **Zapier**, click **Create**
2. **Name**: "GHL Automation Triggered → Monday Comment"
3. Click **Create Zap**

### Step 2: Add Trigger — GHL Automation Execution

1. **Search for app**: GoHighLevel
2. **Select event**: **Automation Executed** (or **When Automation Runs**)
3. Click **Continue**
4. **Choose account**: Select your GHL account
5. **Automation**: Select "Any Automation" (or filter to specific automations if you only want to log certain ones)
   - **Note**: If GHL doesn't show a filter, leave as "Any" and Zapier will log every automation trigger. You can filter in the next step.
6. Click **Test trigger** (Zapier fetches recent automation executions)

### Step 3: Add Filter — Only Log Specific Automation Types (Optional)

If you want to log only certain automations (not all):

1. Click **+ Add Filter**
2. **Condition**:
   - **If** Automation Name **contains** "email opened" OR **contains** "link clicked" OR **contains** "form submitted"
   - **Then** Continue
   - **Else** Stop
3. Click **Save Filter**

This reduces noise by logging only the most important automations. Adjust automation names to match your GHL workspace.

### Step 4: Add Action 1 — Query Monday for Matching Item by Email

1. Click **+ Add Action Step**
2. **Search for app**: Monday
3. **Select event**: **Find Item by Column Value** (or **Search Items**)
4. Click **Continue**
5. **Choose account**: Select your Monday account
6. **Board**: Select your "GHL Clients" board
7. **Column**: Email
8. **Search value**: Map to GHL trigger Contact Email
   - Click + → **GHL Trigger → Contact Email**
9. Click **Continue**

This finds the Monday item that matches the GHL contact's email.

### Step 5: Add Action 2 — Add Comment to Monday Item

1. Click **+ Add Action Step**
2. **Search for app**: Monday
3. **Select event**: **Create Item Comment**
4. Click **Continue**
5. **Choose account**: Select your Monday account
6. **Item ID**: Map to output from Step 4 (Item ID from search)
7. **Comment text**:
   ```
   🤖 GHL Automation: {{Automation Name}}
   Event: {{Automation Event}}
   Timestamp: {{Timestamp}}
   Contact: {{Contact Name}} ({{Contact Email}})
   Details: {{Additional Data}}
   ```
8. **Map dynamic fields**:
   - `{{Automation Name}}` → GHL Trigger from Step 2
   - `{{Automation Event}}` → GHL event type (e.g., "Email Opened", "Link Clicked")
   - `{{Timestamp}}` → GHL