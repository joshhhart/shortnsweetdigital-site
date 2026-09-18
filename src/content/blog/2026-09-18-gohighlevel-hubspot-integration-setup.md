---
title: "GoHighLevel HubSpot Integration: Complete Setup Guide"
description: "Connect GoHighLevel and HubSpot to sync contacts, appointments, and workflows. Step-by-step setup for agencies using Zapier or Make, with cost analysis"
pubDate: 2026-09-18
lastUpdated: 2026-09-18
dateModified: 2026-09-18
tags: ["gohighlevel", "hubspot", "crm-integration", "workflow-automation", "agency-tools", "zapier", "make"]
keywords: ["gohighlevel hubspot integration", "ghl hubspot sync", "connect gohighlevel hubspot", "hubspot ghl integration setup", "crm automation"]
targetKeyword: "gohighlevel hubspot integration setup"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner. Since 2024, we've configured 30+ GHL-HubSpot integrations for agencies and service businesses using Zapier and Make. This guide reflects hands-on setup experience, including common failure modes and cost-optimization strategies. We maintain partnerships with GoHighLevel; HubSpot relationship is integration-evaluation only. We are not GoHighLevel or HubSpot staff. Integration complexity varies by contact volume, workflow depth, and data schema alignment; test in sandbox accounts before production deployment. Sync latency, cost per operation, and bidirectional support depend on which middleware (Zapier vs. Make) you select."
auditPassed: false
draft: false
heroImage: "/images/2026-09-18-gohighlevel-hubspot-integration-setup.jpg"
heroImageAlt: "Split-screen showing GoHighLevel contact dashboard on left, HubSpot CRM with pipeline view on right, integration arrows connecting contact, deal, and task records."
ogImage: "/images/2026-09-18-gohighlevel-hubspot-integration-og.jpg"
schemaType: "HowToGuide"
estimatedTime: "18 minutes to read; 2–3 hours hands-on setup and testing"
audio: "/audio/2026-09-18-gohighlevel-hubspot-integration-setup.mp3"
---

# GoHighLevel HubSpot Integration: Complete Setup Guide

You're running an agency with both GoHighLevel (for scheduling, automations, and SMS) and HubSpot (for deal tracking, email sequences, and reporting). But your data lives in two places:

- **GHL**: Client contacts, appointments, SMS history, custom workflows
- **HubSpot**: Deals, contact records, email sequences, pipeline visibility

When a new client books in GHL, someone manually copies their info into HubSpot. When a deal advances in HubSpot, you manually update notes in GHL. When an appointment completes in GHL, the deal doesn't auto-update in HubSpot. That's manual work, duplicated entry, and out-of-sync records.

You're asking:

- *Can I sync new contacts from GHL to HubSpot automatically?*
- *Can I log GHL appointments as HubSpot tasks or deal updates?*
- *How do I trigger workflows across both systems?*
- *What's the cost, and which integration tool should I use?*
- *How do I keep both systems in sync without manual intervention?*

This guide answers all of these. It walks you through:

1. **Why integrate GHL + HubSpot** — Unified client view, single source of truth, automated workflows
2. **Integration architecture** — GHL → Zapier/Make → HubSpot (no direct native integration exists)
3. **Cost analysis** — Zapier vs. Make pricing, real operation counts, break-even point
4. **Three core workflows**:
   - Sync new GHL contacts to HubSpot contacts database
   - Log GHL appointments as HubSpot tasks with deal linking
   - Trigger workflows based on HubSpot deal stage changes
5. **Step-by-step setup** for both Zapier (simpler UI, higher cost at scale) and Make (complex logic, lower cost per operation)
6. **Ongoing maintenance** — Monitoring, audit trails, handling sync failures

By the end, you'll have GHL and HubSpot synced with minimal manual oversight. Expect 5–15 minute sync latency, zero duplicate contacts (with proper deduplication logic), and complete audit trails.

---

> **Key Takeaways**
> - **No native GHL-HubSpot integration exists.** GoHighLevel and HubSpot do not directly connect. You'll use Zapier ($19–$99/month depending on workflow volume) or Make ($10–$30/month depending on operations). Both support GHL and HubSpot APIs, enabling one-way and bidirectional sync of contacts, deals, tasks, and custom fields.
> - **Sync latency**: Zapier checks for new records every 5–15 minutes (configurable; faster checks cost more). Make can run more frequently with the same operation budget. Expect contacts to appear in HubSpot 5–15 minutes after creation in GHL under default settings. Real-time sync (< 1 minute) is not available through either platform; plan accordingly for time-sensitive workflows.
> - **Typical operation costs**: A 5-person agency syncing 50 new contacts/month + 100 appointments/month + 2 bidirectional deal-update workflows costs **~150–250 operations/month on Make** (~$10–$20/month) or **~200 tasks/month on Zapier** (~$20–$40/month, depending on Zapier plan). Costs scale linearly with volume; 200 contacts/month or more tips the balance to Make.
> - **Recommended setup for most agencies**: Start with Zapier (simpler UI, easier to learn). Build one contact-sync workflow as proof of concept (15–20 minutes). Once confident, either stick with Zapier (if volume stays low) or migrate to Make (if you need bidirectional syncing or hit cost thresholds). Both platforms offer test/sandbox modes; use them before production.
> - **Zapier workflow example**: Trigger (GHL new contact) → Map fields (firstName, lastName, email, phone, custom fields) → Create HubSpot contact. Time: 15–20 minutes. Cost: ~1 task per contact (50 contacts/month = 50 tasks; Zapier Free tier = 100 tasks, so free until you hit ~100 contacts/month).
> - **Make workflow example**: Trigger (GHL new appointment) → Lookup matching HubSpot contact (by email) → Create HubSpot task with deal link. Time: 30–45 minutes (requires learning Make's lookup/router logic). Cost: ~3–5 operations per appointment (100 appointments/month = 300–500 operations; Make Free tier = 1,000/month, so stays within free tier for most agencies).
> - **Bidirectional sync architecture**: GHL → HubSpot via webhook or polling trigger. HubSpot → GHL via Make webhook (Zapier Free/Pro cannot reliably receive HubSpot webhooks for two-way logic). Example: HubSpot deal stage changes to "Closed Won" → Make receives webhook → Update GHL custom field + trigger SMS. This requires Make or Zapier paid "Premium" plan ($99+/month). For most agencies, start unidirectional (GHL → HubSpot) and add bidirectional only if deal-stage-triggered actions are critical.
> - **Data mapping challenges**: GHL custom field names and HubSpot property names don't auto-match. You must manually map each field (e.g., GHL field "service_type" → HubSpot property "services_offered"). This takes 10–15 minutes per workflow and is a common source of missing data. Keep a shared spreadsheet documenting all mappings (name, type, HubSpot property ID).
> - **Deduplication strategy**: Without explicit deduplication logic, the same contact can be synced twice if Zapier/Make trigger fires twice (rare but possible). Mitigation: Add a lookup step ("Find existing HubSpot contact by email") before creating a new contact. If match found, update existing record instead of creating new. Costs one additional operation but prevents duplicates. Recommended for all contact-sync workflows.
> - **Sync failure recovery**: If a sync fails (e.g., authentication expires, HubSpot API rate limit), Zapier logs the failure and retries automatically. Make does not retry; you must manually re-run. Set calendar reminders to check Zapier/Make execution logs weekly. If a contact is partially synced (created in GHL but not HubSpot), it doesn't auto-retry; you may need to manually trigger the workflow or re-add the contact to GHL.
> - **Compliance & audit trails**: Both Zapier and Make log all workflow runs (timestamp, data sent, response from HubSpot, errors). Export logs monthly for GDPR/CCPA audits. GHL and HubSpot also maintain event logs. Ensure you have explicit consent to sync contact data between platforms and retain deletion records.
> - **Cost-benefit cutoff**: If your agency uses fewer than 5 active workflows (contact sync only, no appointments or deal updates), Zapier is simpler. If you need 5+ workflows with complex logic, Make is cost-effective and more powerful. If you hit Zapier's task limits (e.g., 500+ contacts/month), switching to Make saves ~$40–$60/month while adding conditional logic and bidirectional support.

---

## Part 1: Why Integrate GHL + HubSpot?

### The Problem: Disconnected Systems

**Typical agency workflow today**:

1. **New client inquiry** → Lead completes booking form in GHL → Admin manually creates contact in HubSpot (5 min, error-prone)
2. **Appointment scheduled** → GHL calendar updated → Admin manually logs into HubSpot, creates task "Call [Client]" (3 min, often forgotten)
3. **Client moves through sales pipeline** → Deal advances in HubSpot from "Negotiation" to "Closed Won" → Admin must manually update GHL notes or custom field (2 min, delay of hours or days)
4. **Service delivery** → GHL appointment marked complete → HubSpot task remains "Pending" (out of sync, team confusion)
5. **Invoice sent** → GHL payment link created → HubSpot deal note shows no invoice (information scattered)

**Labor cost**: A 5-person agency with 40 new clients/month × 4 manual touches per client × 3.5 minutes per touch = **23 hours/month of data entry** = **~$1,150/month in fully loaded labor cost**.

### The Solution: Automated Integration

**Integrated workflow**:

1. **New contact in GHL** → Zapier/Make automatically creates matching HubSpot contact (2 min auto-sync)
2. **Appointment scheduled in GHL** → Zapier/Make automatically creates HubSpot task linked to deal (1 min auto-sync)
3. **HubSpot deal stage changes** → Make webhook triggers GHL workflow (e.g., send SMS "Your deal is approved") (1 min auto-sync)
4. **Service delivery** → GHL appointment marked complete → Zapier/Make updates HubSpot task status + linked deal (1 min auto-sync)

**Outcome**:
- **One unified contact record** — GHL + HubSpot always in sync
- **Automatic task logging** — Zero manual "create task" work
- **Audit trail** — Every sync logged with timestamp and data
- **Faster action** — Team sees real-time status across both platforms

**Time saved**: Same 40 new clients/month, but now sync is automatic = **23 hours/month saved** = **~$1,150/month labor savings**.

### When Integration Matters Most

Integration is highest-ROI for agencies that:

- **Run complex sales processes** (multiple deal stages, conditional workflows, task dependencies)
- **Manage 20+ clients/month** (volume makes manual sync untenable)
- **Use both platforms for different functions** (GHL for scheduling/SMS, HubSpot for pipeline reporting)
- **Have high appointment-to-deal conversion** (each appointment needs HubSpot task tracking)

**Integration is lower-priority for agencies that**:
- Use GHL only (no HubSpot) or vice versa
- Manually manage < 5 clients/month (labor savings negligible)
- Rarely need real-time sync (can batch-process weekly)

---

## Part 2: Integration Architecture & Middleware Options

![Part 2: Integration Architecture & Middleware Options](/images/2026-09-18-gohighlevel-hubspot-integration-setup-s1.jpg)


### The Technical Reality: No Native GHL-HubSpot Integration

GHL and HubSpot do not directly connect via first-party integration. Instead, you'll use **automation middleware** — a third-party service that listens for events in GHL, transforms the data, and sends it to HubSpot (and vice versa).

| Middleware | Ease of Use | Cost | Best For | Learning Curve | Bidirectional |
|---|---|---|---|---|---|
| **Zapier** | High (visual, template library) | $19–$99/month (task-based) | Beginners, 1–5 workflows, one-way sync | 2–4 hours | No (without Premium $99+) |
| **Make** | Medium (visual, complex logic) | $10–$30/month (operation-based) | Intermediate, 5+ workflows, complex logic | 4–8 hours | Yes (native webhook support) |
| **Zapier + Make** | High/Medium | $30–$50/month combined | Advanced, mixed workflows | Medium | Yes (hybrid approach) |
| **Custom API (n8n)** | Low (requires coding) | $0–$50/month (self-hosted) | Technical teams, full control | High (API knowledge required) | Yes |

**Recommendation**: Start with **Zapier** if this is your first integration (lower barrier to entry). If you need bidirectional sync or hit cost limits, graduate to **Make** (more powerful, cheaper at scale).

### How Zapier/Make Workflows Operate

```
GHL Event (e.g., new contact created)
  ↓ (Zapier/Make detects via polling or webhook)
  ↓
Check for Duplicates (lookup existing contact in HubSpot by email)
  ↓
Transform Data (map GHL schema to HubSpot schema)
  ↓
Create or Update HubSpot Record (contact, task, or deal)
  ↓
Log Result & Audit Trail (timestamp, data, success/error in Zapier/Make)
```

**Key concepts**:
- **Trigger** — Event in GHL that starts the workflow (e.g., "New contact created")
- **Lookup** — Query HubSpot to check if contact already exists (prevents duplicates)
- **Condition** — Filter which records to sync (e.g., "Only if GHL contact is tagged 'qualified_lead'")
- **Action** — What happens in HubSpot (e.g., "Create contact" or "Update deal stage")
- **Mapping** — Assign GHL fields to HubSpot properties (e.g., GHL "firstName" → HubSpot "firstname")

---

## Part 3: Cost Analysis & Middleware Comparison

![Part 3: Cost Analysis & Middleware Comparison](/images/2026-09-18-gohighlevel-hubspot-integration-setup-s2.jpg)


### Operation & Task Counting

**Zapier**: Charges by **tasks** (one task = one time your data moves through a workflow). Every trigger + action = 1 task.

Example: Contact sync workflow (trigger "new contact" + action "create HubSpot contact") = **1 task per contact**.
- 50 new contacts/month = 50 tasks
- Zapier Free: 100 tasks/month (50 contacts fit within free tier)
- Zapier Paid (Pro): 500 tasks/month for $19/month

**Make**: Charges by **operations** (one operation = one step in a workflow: trigger, lookup, transform, action, etc.).

Example: Contact sync with deduplication (trigger + lookup "existing contact?" + create/update contact) = **3 operations per contact**.
- 50 new contacts/month = 150 operations
- Make Free: 1,000 operations/month (150 operations fit within free tier)
- Make Paid (Pro): 10,000 operations/month for $10/month

### Real-World Cost Scenario

**Agency profile**: 5 employees, 50 new clients/month, 100 appointments/month, 2 deal-update workflows.

**Workflow 1: Contact Sync (GHL → HubSpot)**
- Trigger: New GHL contact
- Lookup: Check if HubSpot contact exists
- Action: Create or update HubSpot contact
- Volume: 50 contacts/month
- **Zapier cost**: 50 tasks × $0.10/task (approx, tier-dependent) = ~$5/month
- **Make cost**: (1 trigger + 1 lookup + 1 action) × 50 = 150 operations/month = ~$0.50/month (in free tier)

**Workflow 2: Appointment Logging (GHL → HubSpot Task)**
- Trigger: New GHL appointment
- Lookup: Find matching HubSpot contact + deal
- Action: Create HubSpot task
- Volume: 100 appointments/month
- **Zapier cost**: 100 tasks × $0.10 = ~$10/month
- **Make cost**: (1 + 2 lookups + 1 action) × 100 = 400 operations/month = ~$1–$2/month (in free tier)

**Workflow 3: Deal Stage Change (HubSpot → GHL, bidirectional)**
- Trigger: HubSpot deal stage changes to "Closed Won"
- Lookup: Find matching GHL contact
- Action 1: Update GHL custom field
- Action 2: Trigger GHL SMS workflow
- Volume: 10 deals/month (estimated)
- **Zapier cost**: Requires Premium plan ($99/month minimum) due to webhook limitations; roughly ~5 tasks per deal = 50 tasks = included in Premium
- **Make cost**: (1 webhook + 1 lookup + 2 actions) × 10 = 40 operations/month = included in free tier

**Total monthly cost**:
- **Zapier**: Free tier (50–150 tasks) = $0 until you hit 100 contacts/month, then Paid Pro = $19/month. For bidirectional (Workflow 3), upgrade to Premium = $99/month.
- **Make**: Free tier (1,000 operations) covers all three workflows for 50 contacts + 100 appointments + 10 deals = ~600 operations/month = **$0/month (stays in free tier)**.

**Cost crossover point**: At ~200 contacts/month or 5+ active workflows, **Make becomes cheaper than Zapier** and offers bidirectional capabilities Zapier only supports at the Premium tier.

---

## Part 4: Core Integration Workflows

### Workflow 1: Sync New GHL Contacts to HubSpot

**Goal**: Every time a contact is created in GHL, automatically create or update a matching contact in HubSpot.

**Architecture**:
```
GHL new contact
  ↓
Lookup: Does HubSpot contact with same email exist?
  ↓ (No) → Create new HubSpot contact
  ↓ (Yes) → Update existing HubSpot contact (avoid duplicate)
  ↓
Map GHL fields to HubSpot properties
  ↓
Complete, log in Zapier/Make execution history
```

#### Preparation: Identify GHL Custom Fields & HubSpot Property Mapping

Before building the workflow, identify which fields you'll sync. Create a mapping spreadsheet:

| GHL Field | GHL Field Type | HubSpot Property | HubSpot Property Type | Notes |
|---|---|---|---|---|
| First Name | Text | firstname | Text | Required |
| Last Name | Text | lastname | Text | Required |
| Email | Email | email | Email | Required; used for deduplication |
| Phone Number | Phone | phone | Phone | Include country code |
| Company | Text | company | Text | If GHL has it; optional |
| Industry | Text | industry | Text | If GHL has it; optional |
| Service Type | Select (dropdown) | services_offered | Multi-select | Map each GHL option to HubSpot option |
| Custom Field: Budget | Number | custom_budget | Number | Agency-specific; must pre-exist in HubSpot |
| Tags (GHL) | Multi-select | hs_lead_status | Select | Map GHL tag → HubSpot lead status |

**Why?** Automation middleware cannot guess which fields align. Manual mapping prevents sync errors (e.g., text sent to number field, triggering failure).

**Finding HubSpot Property IDs**:
1. In HubSpot, go **Settings** → **Data Management** → **Properties**
2. Search each property → Note the internal name (e.g., "services_offered", not "Services Offered")
3. Copy internal names into Zapier/Make workflow

#### Zapier Setup: Contact Sync Workflow

**Step 1: Create New Zap**

1. Log into Zapier (https://zapier.com)
2. Click **Create** → **New Zap**
3. Name: "Sync GHL New Contacts to HubSpot (Deduped)"

**Step 2: Add Trigger**

1. **Search trigger app**: Type "GoHighLevel"
2. **Select trigger**: "New Contact"
3. **Connect account**: Click **Connect** → Log into GHL → Authorize API access (Zapier requests scopes for contacts)
4. **Test trigger**: Click **Test Trigger** → Zapier pulls a sample contact from your GHL account
5. **Verify**: Should show real contact with firstName, lastName, email, phone, and custom fields
6. Click **Continue** once verified

**Step 3: Add Lookup Step (Deduplication)**

This step prevents duplicate contacts in HubSpot.

1. Click **+** → **Add Step**
2. **Type**: "Action"
3. **App**: Search "HubSpot"
4. **Action**: "Search Contacts"
5. **Account**: Select your connected HubSpot account
6. **Search by**: Email address
7. **Value**: `{{email}}` (Zapier merge tag for GHL email from Step 2)
8. **Only return**: 1 result (most recent)
9. Click **Test Step** → Zapier queries HubSpot for existing contact with same email
10. **Result**: Either "Found" (existing contact) or "Not Found" (new contact)

**Step 4: Add Conditional Logic (Branch Based on Lookup Result)**

1. Click **+** → **Add Step**
2. **Type**: "Control Flow"
3. **Choose**: "Conditional"
4. **If**: "Search Contacts" (from Step 3) `did not find any` records
   - **Then**: Proceed to "Create Contact" step (below)
   - **Else**: Proceed to "Update Contact" step (skip to Step 6)

**Step 5a: Action — Create New HubSpot Contact (If New)**

1. In the **Then** branch, click **+** → **Add Step**
2. **App**: "HubSpot"
3. **Action**: "Create Contact"
4. **Account**: Your HubSpot account
5. **Email**: `{{email}}` (from trigger)
6. **First Name**: `{{firstName}}`
7. **Last Name**: `{{lastName}}`
8. **Phone**: `{{phone}}`
9. **Company**: `{{company}}` (if GHL field exists; else leave blank)
10. **Additional fields** (scroll down, map custom fields per your spreadsheet from Part 4 prep):
    - Industry: `{{customField_industry}}`
    - Services Offered: `{{customField_service_type}}` (requires careful mapping of select options)
    - Budget: `{{customField_budget}}`
11. **Lifecycle Stage**: Hardcode "subscriber" or map to GHL tag
12. Click **Test Step** → Zapier creates a test contact in HubSpot
13. Verify in HubSpot: New contact appears with all fields correct
14. Click **Continue**

**Step 5b: Action — Update Existing HubSpot Contact (If Duplicate Found)**

1. In the **Else** branch, click **+** → **Add Step**
2. **App**: "HubSpot"
3. **Action**: "Update Contact"
4. **Account**: Your HubSpot account
5. **Contact ID**: `{{id}}` (returned by Step 3 lookup)
6. **First Name**: `{{firstName}}`
7. **Last Name**: `{{lastName}}`
8. **Phone**: `{{phone}}`
9. **Additional fields**: Same as Step 5a (map custom fields)
10. Click **Test Step** → Zapier updates the test contact with new info
11. Click **Continue**

**Step 6: Review & Publish**

1. Zapier shows a summary:
   - Trigger: GHL new contact
   - Lookup: HubSpot search by email
   - Condition: If not found, create; else update
   - Actions: Create/update HubSpot contact
2. Click **Publish** → Zap is live, checks GHL every 15 minutes (default)

**Expected behavior**:
- Contact created in GHL at 2:00 PM
- Zapier detects at 2:15 PM (up to 15 min delay, configurable)
- Lookup checks HubSpot for duplicate
- If new: HubSpot contact created by 2:17 PM
- If duplicate: HubSpot contact updated by 2:17 PM
- Both records linked via email

**Troubleshooting**:
- **"Email field is missing"** → Verify GHL contact has email before sync. Zapier will skip contacts without emails.
- **"Field type mismatch (text sent to number)"** → Check HubSpot property type. GHL "Budget" (text) cannot sync to HubSpot "Budget" (number) without conversion. Use Zapier Formatter: Text → Number conversion before the Create/Update action.
- **Duplicates still created** → Verify lookup step is working (test it separately). If lookup fails silently, reauthorize HubSpot account.

---

### Workflow 2: Log GHL Appointments as HubSpot Tasks with Deal Linking

**Goal**: When an appointment is created in GHL, automatically create a HubSpot task linked to the contact's active deal.

**Architecture**:
```
GHL appointment created
  ↓
Lookup: Find matching HubSpot contact (by email)
  ↓
Lookup: Find matching deal for that contact (highest priority or "negotiation" stage)
  ↓
Create HubSpot task with appointment details, link to deal
  ↓
Update GHL appointment with HubSpot task ID (optional, for record linking)
```

**Note**: This workflow is more complex and requires either Make (simpler due to native lookup/filter) or Zapier with Formatter + conditional logic. Instructions below use **Make** due to its superior lookup capabilities; Zapier equivalent is provided at the end.

#### Make Setup: Appointment Logging (GHL → HubSpot Task)

**Step 1: Create New Scenario**

1. Log into Make (https://make.com)
2. Click **Create a new scenario**
3. Name: "Log GHL Appointments as HubSpot Tasks"

**Step 2: Add Trigger**

1. **Search app**: "GoHighLevel"
2. **Trigger**: "New Appointment"
3. **Connect account**: Log into GHL → Authorize
4. **Appointment type** (optional): Leave blank to trigger on all appointments, or filter by type
5. Click **Save** → Make displays sample appointment data (appointment_date, appointment_time, contact_id, contact_name, notes, etc.)

**Step 3: Add Lookup 1 — Find HubSpot Contact**

1. Click **+** → Add module
2. **App**: "HubSpot"
3. **Action**: "Search Contacts"
4. **Connect account**: Log into HubSpot → Authorize
5. **Search by**: Email address
6. **Value**: `{{appointment.contact_email}}` (or if GHL doesn't provide email, use contact_phone; Make will resolve the merge tag)
7. **Properties**: Select "firstname", "lastname", "email", "phone", and any custom fields
8. Click **OK** → Make saves this lookup step

**Step 4: Add Lookup 2 — Find Associated Deal**

1. Click **+** → Add module
2. **App**: "HubSpot"
3. **Action**: "Search Deals"
4. **Connect account**: HubSpot (already connected)
5. **Filter**: 
   - Contacts: `{{step3.id}}` (the contact found in Step 3)
   - Deal stage: NOT "Closed Lost", NOT "Closed Won" (only active deals)
   - Sort by: "hs_deal_stage_probability" (descending, to get hottest deal first)
6. **Limit**: 1 (return only the highest-priority deal)
7. Click **OK**

**Step 5: Add Condition — Deal Found?**

1. Click **+** → Add router (conditional branching)
2. **Route 1**: If deal found (Step 4 returned a result)
3. **Route 2**: If no deal found (create task without deal link)

**Step 5a: Create Task Linked to Deal (Route 1)**

1. In Route 1, click **+** → Add module
2. **App**: "HubSpot"
3. **Action**: "Create Task"
4. **Connect account**: HubSpot
5. **Task subject**: `Appointment: {{appointment.contact_name}} - {{appointment.appointment_date}}`
6. **Task body**: `Time: {{appointment.appointment_time}}\n\nNotes: {{appointment.notes}}`
7. **Associated contact**: `{{step3.id}}` (contact from Step 3)
8. **Associated deal** (optional but important): `{{step4.id}}` (deal from Step 4)
9. **Task type**: Hardcode "call" or map to GHL appointment type
10. **Due date**: `{{appointment.appointment_date}}`
11. **Task status**: Hardcode "NOT_STARTED"
12. Click **OK** → Task is created with appointment details linked to deal

**Step 5b: Create Task Without Deal Link (Route 2)**

1. In Route 2, click **+** → Add module
2. **App**: "HubSpot"
3. **Action**: "Create Task"
4. **Configure same as Step 5a, but omit "Associated deal"**
5. **Note**: Task will still link to contact, but not to any specific deal
6. Click **OK**

**Step 6: Add Final Action — Update GHL Appointment (Optional)**

To close the loop and record which HubSpot task was created:

1. Click **+** → Add module
2. **App**: "GoHighLevel"
3. **Action**: "Update Appointment" (if available) or "Add Note to Appointment"
4. **Appointment ID**: `{{appointment.id}}`
5. **Note or custom field**: `HubSpot Task ID: {{step5a.id}}` (records the link)
6. Click **OK** → Appointment now shows HubSpot task ID for reference

**Step 7: Test End-to-End**

1. In Make, click **Run once** (top right)
2. In GHL, create a test appointment for an existing contact
3. In Make, check the execution log → Verify each step completed:
   - Step 2: Appointment trigger fired ✓
   - Step 3: HubSpot contact found ✓
   - Step 4: Deal found (or not) ✓
   - Step 5: Task created in HubSpot ✓
4. In HubSpot, open the contact → Verify task appears with appointment details
5. If deal was linked, verify task shows in deal's activity timeline
6. Click **Activate** → Scenario is live

**Expected behavior**:
- Appointment created in GHL at 2:00 PM
- Make detects within 1–2 minutes (Make can check more frequently than Zapier)
- Make looks up HubSpot contact by email (instant)
- Make finds associated deal (instant)
- HubSpot task created and linked by 2:05 PM
- GHL appointment updated with HubSpot task ID reference

---

### Workflow 3: Trigger GHL Workflows Based on HubSpot Deal Stage Changes (Bidirectional)

**Goal**: When a deal advances in HubSpot (e.g., "Negotiation" → "Closed Won"), automatically trigger a GHL workflow (send SMS, create task, etc.).

**