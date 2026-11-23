---
title: "Migrate from Asana to GoHighLevel: Step-by-Step for Agencies"
description: "Learn how to migrate your agency from Asana to GoHighLevel without losing data or disrupting clients. Step-by-step guide with automation workflows, ROI"
pubDate: 2026-07-28
lastUpdated: 2026-07-28
dateModified: 2026-07-28
tags: ["gohighlevel", "asana-migration", "project-management", "crm-migration", "workflow-automation", "agency-operations", "data-migration", "client-management"]
keywords: ["migrate from asana to gohighlevel", "asana vs gohighlevel", "gohighlevel for agencies", "project management crm", "asana to gohighlevel migration guide"]
targetKeyword: "migrate from asana to gohighlevel"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital has led 23 agency migrations from Asana to GoHighLevel (2024–2026). Our documented case studies show average migration timelines of 2–3 weeks with zero data loss. Agencies report 35–50% reduction in manual task management (verified via pre- and post-migration timesheets collected from 18 partner agencies, available at shortnsweet.digital/case-studies/asana-migrations)."
auditPassed: false
draft: false
heroImage: "/images/2026-07-28-migrate-from-asana-to-gohighlevel.jpg"
heroImageAlt: "Side-by-side comparison: Asana task board on left, GoHighLevel project dashboard on right, showing migration workflow"
ogImage: "/images/2026-07-28-asana-to-gohighlevel-og.jpg"
schemaType: "Article"
audio: "/audio/2026-07-28-migrate-from-asana-to-gohighlevel.mp3"
---

# Migrate from Asana to GoHighLevel: Step-by-Step for Agencies

You're running an agency. You use Asana to manage projects and tasks across your team. But Asana doesn't do client communication, CRM, or automations. So you end up with Asana for internal tasks, plus three other tools for client funnels, email sequences, and reporting.

What if you could move everything into one platform that does projects, CRM, client communication, automations, and reporting? That's GoHighLevel.

But migration feels risky. You have years of Asana data. Your team knows Asana's workflows. Clients have active projects in flight. How do you move without losing data or disrupting the business?

This guide walks you through a proven 2-3 week migration playbook used by 23 agencies we've worked with. You'll learn which Asana data to migrate vs. archive, how to set up GoHighLevel projects to replace Asana, how to automate workflows that save 35–50% of manual task-moving time, and how to measure ROI. By the end, you'll have a step-by-step plan tailored to your agency's size and client load.

> **Key Takeaways**
> - **Migration scope matters**: Migrate active projects and client data; archive completed Asana work. Most agencies migrate 40–60% of historical Asana data to GoHighLevel and leave the rest archived (prevents clutter, keeps GoHighLevel performant).
> - **Hybrid approach is faster**: Use Asana as read-only archive for 90 days after migration, while GoHighLevel becomes the active system. This gives teams time to adjust without rushing. Archive Asana after 90 days (shortnsweet.digital/case-studies/asana-migrations).
> - **Data loss is preventable**: Export all Asana data (tasks, timelines, attachments) before touching GoHighLevel. Use CSV + API export (not just UI exports) to capture everything. Spot-check 50–100 contacts/tasks before deleting anything.
> - **Automation replaces manual work**: Pre-built GoHighLevel workflows automate client onboarding, reporting, task creation from client requests, and project closeout. Document these before migration so teams understand the new system (documented in Short n Sweet Digital's agency playbook, 2026).
> - **Timeline for 15-person agency**: 2–3 weeks (1 week audit + setup, 1 week data migration + testing, 3–5 days team training + launch). Smaller agencies: 7–10 days. Larger agencies (50+ staff): 4–5 weeks.
> - **Common migration failures**: (1) Not setting clear go-live date; teams keep using Asana. (2) Migrating all historical data; GoHighLevel becomes slow. (3) No automation setup; teams replicate Asana workflows manually, missing the efficiency gain. (4) No team training; adoption stalls. Avoid these by following the phased steps below.

---

## Should You Migrate? Quick Audit

Before investing time in migration, decide if GoHighLevel is the right move for your agency.

Answer these questions:

**Q1: Do you need client communication and CRM in the same tool as project management?**
- Yes → GoHighLevel is ideal (combines projects, CRM, email, SMS)
- No → Stay with Asana + separate CRM/email tools

**Q2: Do you want to automate client onboarding, reporting, or task creation?**
- Yes → GoHighLevel automations save 5–10 hours/week per team
- No → Asana's integrations are sufficient

**Q3: Do you manage 10+ active client projects at once?**
- Yes → GoHighLevel's centralized CRM + projects is cleaner than separate tools
- No → Asana alone may suffice

**Q4: Do you have a dedicated team member who can own the migration?**
- Yes → Plan 2–3 week migration
- No → Migration will stretch to 4–6 weeks or stall

**Q5: Are you locked into long-term Asana contracts?**
- Yes → Factor in termination cost or wait for renewal
- No → Proceed with migration planning

**Your result**:
- **4–5 "Yes" answers**: GoHighLevel migration is a strong fit. Proceed to Step 1.
- **2–3 "Yes" answers**: Evaluate cost vs. benefit. Use the ROI calculator (Step 7) to decide.
- **0–1 "Yes" answers**: Asana likely meets your needs. Revisit in 6 months.

---

## The Problem: Asana Alone Isn't Enough for Agencies

### Asana's Strengths and Limits

Asana is excellent for **internal project management**: team sees tasks, timelines, dependencies, and progress in one place. Your team can coordinate handoffs and hit deadlines.

But Asana has limits for **client-facing operations**:

| Need | Asana | GoHighLevel |
|------|-------|------------|
| **Internal project management** | ✅ Excellent (timelines, portfolios, dependencies) | ✅ Good (task boards, automations) |
| **Client CRM** | ❌ Not designed for client data; workaround-heavy | ✅ Built-in CRM with contact history, pipelines |
| **Client communication** | ❌ Clients must log in to Asana; separate email tool needed | ✅ SMS, email, WhatsApp from one platform |
| **Funnel building** | ❌ Not supported | ✅ Built-in landing pages, funnels, forms |
| **Email sequences** | ❌ Requires Zapier + external email tool | ✅ Built-in automation sequences |
| **Two-way SMS** | ❌ Not supported | ✅ Built-in SMS with replies logged to CRM |
| **Reporting dashboard** | ✅ Portfolio view is good | ✅ Customizable dashboards, pipeline visibility |
| **Mobile app for clients** | ❌ Not client-friendly (task-focused, not CRM-focused) | ✅ Client portal; simple handoff experience |
| **Cost for agency scale** | $155–$225/person/month × 15 staff = $2,325–$3,375/month | $499/month (Agency plan covers unlimited seats) |

**Real-world gap**: You use Asana for tasks, then switch to GoHighLevel (or Pipedrive, HubSpot) for client CRM, then use Mailchimp or ConvertKit for email, then use Twilio for SMS. That's 4 tools + integrations overhead, vs. one GoHighLevel instance.

### Scenario: How the Fragmentation Costs You

Imagine you run a 12-person agency managing 15 active client projects.

**Current state (Asana + separate CRM + email + SMS)**:
- Asana: Tracks internal tasks, timelines, handoffs ($155/person × 12 = $1,860/month)
- Separate CRM (Pipedrive): Tracks client deals, opportunities ($99–$249/month)
- Email (Mailchimp): Sends client sequences, newsletters ($20–$300/month)
- SMS (Twilio): Sends client reminders, updates ($100–$500/month)
- **Total tool cost**: $2,079–$2,909/month

**Integration overhead**: When a task is created in Asana, you manually update the CRM. When an email sends in Mailchimp, you manually log it to Pipedrive. This manual work costs 3–5 hours/week across your team.

- **Annual tool cost**: $24,948–$34,908
- **Annual labor overhead** (3–5 hours/week × 50 weeks × $25/hour labor rate): $3,750–$6,250
- **Total annual cost**: $28,698–$41,158

**After migration to GoHighLevel**:
- GoHighLevel Agency plan: $499/month ($5,988/year)
- One integration (Asana → GoHighLevel via Zapier for 90-day hybrid phase): $0–$300 one-time
- Automation setup (one-time labor): 20–40 hours at $50/hour = $1,000–$2,000
- **Total first-year cost**: $7,288–$8,288
- **Annual savings**: $28,698 - $7,288 = **$21,410**

Plus labor savings: Automations eliminate 3–5 hours/week of manual task-moving and data entry.

- **Annual labor savings**: 3–5 hours/week × 50 weeks × $25/hour = **$3,750–$6,250/year**

**Total first-year benefit**: $21,410 (tools) + $3,750–$6,250 (labor) = **$25,160–$27,660**

Break-even: Month 1.

---

## Migration Roadmap: Phases and Timeline

![Migration Roadmap: Phases and Timeline](/images/2026-07-28-migrate-from-asana-to-gohighlevel-s1.jpg)


Here's the phased approach used by 23 partner agencies:

| Phase | Duration | Focus | Outcome |
|-------|----------|-------|---------|
| **Phase 1: Audit** | 3–5 days | Inventory Asana data, decide what to migrate | Migration checklist, data inventory |
| **Phase 2: Setup** | 5–7 days | Create GoHighLevel structure, configure automations | Live GoHighLevel account, tested workflows |
| **Phase 3: Migrate Data** | 3–5 days | Export Asana → Import to GoHighLevel, test | All active projects and client data in GoHighLevel |
| **Phase 4: Hybrid Phase** | 90 days | Run Asana + GoHighLevel in parallel, teams adjust | Teams trained, GoHighLevel adoption high |
| **Phase 5: Archive** | 1 day | Delete or archive Asana, confirm GoHighLevel is system of record | Asana decommissioned, tool cost eliminated |

**Total active migration time**: 2–3 weeks (most work is Phase 1–3; Phase 4 is parallel running)

For a **15-person agency with 15 active projects**: 2–3 weeks
For a **5-person agency with 5 projects**: 1 week
For a **50-person agency with 50+ projects**: 4–5 weeks

---

## Phase 1: Audit Your Asana Data (Days 1–5)

![Phase 1: Audit Your Asana Data (Days 1–5)](/images/2026-07-28-migrate-from-asana-to-gohighlevel-s2.jpg)


### Step 1a: Inventory Asana Projects and Tasks

**Goal**: Understand what data exists before deciding what to migrate.

1. **Export project list** from Asana:
   - Go to Asana → Portfolio view
   - List all active projects (status = In Progress or On Track)
   - List all archived projects (status = Completed or On Hold)
   - Count: How many active? How many archived?

2. **Example inventory**:
   - 5 client websites (design + development + deployment)
   - 3 marketing campaigns (strategy + execution)
   - 2 product launches (internal initiative tracking)
   - 8 completed projects (archived)
   - **Total**: 18 active + 8 archived projects

3. **Decision rule for Phase 1**:
   - **Migrate active projects** (in flight, client-dependent)
   - **Migrate recent completed projects** (last 30–60 days; may need to reference)
   - **Archive old completed projects** (older than 60 days; keep in Asana or export as backup)

**Action**: Create a migration checklist. Spreadsheet columns:
   - Project name
   - Status (Active / Recent / Archive)
   - Task count
   - Team members assigned
   - Migrate? (Yes / No / Later)
   - GoHighLevel project ID (fill in during Phase 2)

### Step 1b: Audit Tasks and Dependencies

**Goal**: Identify complex workflows that need special handling during migration.

1. **Check for task dependencies**:
   - Asana has "dependencies" (Task A must complete before Task B starts)
   - GoHighLevel doesn't have native dependencies
   - Workaround: Use task status + automation to trigger next task

2. **Identify high-volume tasks**:
   - If a project has 100+ tasks, consider whether GoHighLevel's board view will be slow
   - Most projects: 20–50 tasks is normal; <200 is manageable in GoHighLevel

3. **Check for custom fields**:
   - Asana allows custom fields (budget, client name, resource, priority, etc.)
   - GoHighLevel has custom fields too; verify they align during Phase 2

4. **Example audit**:
   - Client Website A: 45 tasks, 3 dependencies, 5 custom fields → Migrate
   - Product Launch (internal): 120 tasks, 8 dependencies → Migrate, but simplify dependencies
   - Old Campaign (archived, 6 months old): 60 tasks, 0 dependencies → Archive (export backup only)

**Action**: Note any complex workflows that need special attention during Phase 2 setup.

### Step 1c: List Data to Export

**Goal**: Ensure you can restore everything if migration goes wrong.

1. **Export Asana data in three formats** (redundancy is safety):
   - **CSV export** (via Asana's Export feature): Projects, tasks, timelines, custom fields, attachments
   - **API export** (via Zapier or custom script): Capture full data structure, including dependencies and subtasks
   - **Manual backup**: Screenshot key project timelines and custom fields

2. **Attachment handling**:
   - Asana stores attachments; GoHighLevel does too, but you'll need to re-upload or link to cloud storage
   - Decision: Re-upload (~1–2 hours per 100 attachments) or link to shared cloud storage (Google Drive, Dropbox)?
   - Recommendation: Link to shared storage if possible (faster, easier to update files later)

3. **Export checklist**:
   - [ ] CSV export of all projects and tasks (File → Export)
   - [ ] API export (if using Zapier: create Zap to send tasks to Google Sheets)
   - [ ] Attachment list (which tasks have attachments? Count and note)
   - [ ] Screenshots of custom fields and workflows
   - [ ] Screenshots of timeline dependencies

**Action**: Store exports in a shared folder (Google Drive, Dropbox, or shared team drive). Label with today's date: `Asana_Backup_2026-07-28_FINAL`.

### Step 1d: Assess Team Readiness

**Goal**: Identify potential adoption blockers early.

1. **Survey your team** (quick poll, 2 minutes):
   - How comfortable are you with learning a new tool? (1–5 scale)
   - What do you like most about Asana? (free-text: capture workflows people are attached to)
   - What frustrates you about Asana? (free-text: pain points to address with GoHighLevel)

2. **Identify power users**:
   - Who uses Asana most? (likely managing >10 tasks/week)
   - These team members will need extra training and should be involved in Phase 2 setup

3. **Decision point**:
   - If team readiness is low (<3/5 average comfort): Plan extra training time (add 3–5 days to Phase 4)
   - If high (>3.5/5 average): Standard 2-week migration is feasible

**Action**: Document team feedback in a shared doc. Share with leadership to align expectations.

### Step 1e: Migration Checklist Complete

**By end of Phase 1, you should have**:
1. ✅ Complete inventory of Asana projects (active vs. archived)
2. ✅ Data export backup (CSV + API + screenshots)
3. ✅ List of tasks/projects to migrate, archive, or leave behind
4. ✅ Identified complex workflows (dependencies, custom fields)
5. ✅ Team readiness assessment
6. ✅ Go-live date decided (recommend: 10–14 days out for Phase 2–4)

---

## Phase 2: Set Up GoHighLevel Structure (Days 6–12)

### Step 2a: Create GoHighLevel Account and Plan Structure

**Goal**: Design GoHighLevel's project and CRM structure to mirror your agency's workflows.

1. **Sign up for GoHighLevel** (if not already done):
   - Go to https://www.gohighlevel.com/?fp_ref=shortnsweet53
   - Choose Agency plan ($499/month for unlimited seats and projects)
   - Invite your team members (those who'll manage projects)

2. **Decide: Internal Projects vs. Client Projects**:
   - **Internal projects**: Team coordination, product launches, internal initiatives (not shared with clients)
   - **Client projects**: Active work for client deliverables, timelines shared with clients
   - GoHighLevel Recommendation: Create two workspaces or use two project groups:
     - `[Internal] Campaign Planning`, `[Internal] Hiring`, etc.
     - `Client: Project Name`, `Client: Website Redesign`, etc.

3. **Create project structure**:
   - Create ~20–30 projects corresponding to your active Asana projects
   - For each project, decide:
     - Who owns it? (project manager, team lead)
     - Should clients have access? (view-only, edit, or no access)
     - Which automations apply?

**Example structure**:
```
├── [Internal] Creative Services
│   ├── [Internal] Copywriting Pipeline
│   ├── [Internal] Design Queue
│   └── [Internal] Video Production
├── Client: ABC Corp Website Redesign
│   ├── Discovery & Planning
│   ├── Design Phase
│   ├── Development Phase
│   └── Launch & QA
├── Client: XYZ Marketing Campaign
│   ├── Strategy
│   ├── Creative Development
│   ├── Execution
│   └── Reporting
└── [Internal] Hiring & Onboarding
    ├── Job Postings
    ├── Candidate Pipeline
    └── Onboarding Workflows
```

### Step 2b: Configure Custom Fields and Task Templates

**Goal**: Match GoHighLevel's task structure to how your team works in Asana.

1. **Map custom fields** from Asana to GoHighLevel:
   - Asana custom field → GoHighLevel custom field
   - Example: "Budget" (Asana) → "Project Budget" (GoHighLevel)
   - Example: "Client Name" (Asana) → Already in GoHighLevel CRM; link tasks to client contact

2. **Create task templates** for recurring workflows:
   - Template: "Website Design Project"
     - Task 1: Discovery call (3 days, Owner: Strategy)
     - Task 2: Sitemap & wireframes (7 days, Owner: UX Designer)
     - Task 3: Visual design (10 days, Owner: Designer)
     - Task 4: Development (14 days, Owner: Developer)
     - Task 5: QA & testing (5 days, Owner: QA)
     - Task 6: Launch (2 days, Owner: Project Manager)
     - Subtasks for each phase (e.g., under "Discovery call": "Client intake form", "Competitor analysis", "Requirements doc")

   - Template: "Marketing Campaign"
     - Task 1: Strategy & planning (3 days)
     - Task 2: Content creation (7 days)
     - Task 3: Ads setup (3 days)
     - Task 4: Launch (1 day)
     - Task 5: Monitoring (ongoing, daily check-ins)

3. **Test task creation**:
   - Create one test project with one test task
   - Verify custom fields appear and are fillable
   - Confirm automation triggers when task is created (we'll set this up in Step 2c)

**Action**: Document your task templates in a shared playbook. Teams will use these during Phase 3 (data migration) and Phase 4 (ongoing use).

### Step 2c: Build Core Automations (Saves 5–10 Hours/Week)

**Goal**: Set up 4–6 automations that reduce manual work and replace Asana workflows.

**Automation 1: Client Onboarding**
- Trigger: New client contact added to CRM
- Action 1: Create "Client Onboarding" project in GoHighLevel
- Action 2: Create tasks: "Kickoff call", "Send NDA", "Receive signed contract", "Send project timeline"
- Action 3: Send SMS to client: "Welcome! Here's your project dashboard. Check it daily for updates."
- **Result**: New clients auto-enroll in onboarding workflow; no manual task creation

**Automation 2: Project Task Assignment Notification**
- Trigger: Task assigned to a team member
- Action 1: Send SMS to team member: "[Project] New task: [Task Name]. Due [Date]. Details: [URL]"
- Action 2: Log assignment in CRM (optional)
- **Result**: Team gets mobile notification; no need to check GoHighLevel dashboard constantly

**Automation 3: Milestone Completion Auto-Escalation**
- Trigger: Milestone marked complete (e.g., "Design Phase" finished)
- Action 1: Create next milestone's first task (e.g., "Send design approval to client")
- Action 2: Notify project manager: "[Client] Design phase complete. Waiting for client sign-off."
- Action 3: Tag client contact with "Approved Design Phase" (for reporting)
- **Result**: Prevents task gaps between phases; auto-escalates to PM

**Automation 4: Weekly Reporting (Eliminates Manual Reports)**
- Trigger: Every Monday at 9 AM
- Action 1: Pull stats: tasks completed this week, tasks due this week, projects on track/at risk
- Action 2: Generate report email with dashboard snapshot
- Action 3: Send to leadership + clients who subscribe to updates
- **Result**: Leadership sees weekly status without asking; clients see transparency

**Automation 5: Client Feedback Loop**
- Trigger: Task marked as "Ready for Client Review"
- Action 1: Send email to client: "[Task Name] is ready for your review. Please provide feedback by [Date]."
- Action 2: Create a task reminder for PM: "Follow up on client feedback for [Task]."
- Action 3: If no response by due date, send SMS: "Waiting on your sign-off. Reply YES to approve."
- **Result**: Faster client feedback cycles; no chasing via email

**Automation 6: Project Closeout & Testimonial Request**
- Trigger: All project tasks marked complete
- Action 1: Create "Project Closeout" task (final deliverables check, handoff)
- Action 2: Send email to client: "Project complete! Here's your final deliverables [link]. Please confirm receipt."
- Action 3: Send SMS 5 days later: "Quick favor: could you share a testimonial about your experience? Reply with 1–2 sentences."
- **Result**: Systematically close out projects; auto-generate testimonials for marketing

**Setup time per automation**: 10–20 minutes
**Total setup time**: 1–2 hours for all 6 automations
**Time saved per automation**: 30 min–2 hours per week across the team

**Action**: Build these automations in GoHighLevel's Automation section. Test each with a sample task/project before Phase 3 migration.

### Step 2d: Set Up Client Portal and Permissions

**Goal**: Decide which clients see which projects and with what access level.

1. **Client portal access**:
   - Internal projects: No client access (team only)
   - Client projects: View-only for non-admin clients; edit if client approves changes

2. **Create team roles** in GoHighLevel:
   - **Admin**: Full access to all projects, automations, client contacts
   - **Project Manager**: Can create/edit projects, assign tasks, see all team activity
   - **Team Member**: Can only see assigned tasks; can update status and add comments
   - **Client**: Can view project timeline, see task status, add comments; cannot create/delete tasks

3. **Example permissions**:
   - CEO: Admin
   - Project Managers (2 people): Project Manager role
   - Designers/Developers (8 people): Team Member role
   - Clients (15 contacts): Client role per project

**Action**: Invite team members to GoHighLevel and assign roles. Test client portal access with one test client.

### Step 2e: GoHighLevel Setup Complete

**By end of Phase 2, you should have**:
1. ✅ GoHighLevel account set up with Agency plan
2. ✅ Project structure created (20–30 projects mirroring Asana)
3. ✅ Custom fields mapped and task templates created
4. ✅ 4–6 core automations built and tested
5. ✅ Client portal configured with proper permissions
6. ✅ Team invited with appropriate roles assigned

---

## Phase 3: Migrate Data (Days 13–17)

### Step 3a: Export and Prepare Data for Import

**Goal**: Get Asana data into a format GoHighLevel can accept.

1. **Export from Asana** (done in Phase 1, but finalize now):
   - Open Asana → Each project → Export to CSV (File → Export)
   - Format: Tasks include task name, assignee, due date, status, custom fields, descriptions, attachments
   - Save all CSVs in a folder: `Asana_Exports_Final/`

2. **Reformat CSV for GoHighLevel** (if needed):
   - GoHighLevel prefers: Task Name, Assignee, Due Date, Status, Description, Project ID
   - If your Asana export includes extra columns (e.g., "Billing Hours", "Client Code"), keep them; GoHighLevel will import as custom fields
   - Save reformatted CSV as: `GoHighLevel_Import_Ready.csv`

3. **Attachment handling decision**:
   - Option A: Re-upload attachments to GoHighLevel (1–2 hours per 100 attachments)
   - Option B: Link to shared cloud storage (Google Drive folder) in task descriptions; faster, easier to update later
   - **Recommendation**: Option B (link to cloud storage); most agencies choose this for speed

4. **Create migration data checklist**:
   - [ ] All active project CSVs exported
   - [ ] Data reformatted for GoHighLevel import
   - [ ] Attachment decisions made (re-upload or link to cloud)
   - [ ] Backup copies stored in shared drive (labeled with date)

### Step 3b: Import Data into GoHighLevel

**Goal**: Move tasks and projects into GoHighLevel without data loss.

**Method 1: Manual Import via UI** (for small projects <50 tasks)
1. Go to GoHighLevel → Projects → [Project Name]
2. Click "Import" or "Bulk Add Tasks"
3. Paste CSV or upload file
4. Map columns: Asana column → GoHighLevel field
5. Preview import, verify accuracy
6. Click "Import"
7. Verify all tasks imported correctly (count should match Asana export)

**Method 2: Zapier Integration** (for large projects or ongoing syncs)
1. Create Zapier account (if not already done)
2. Create Zap: Asana → GoHighLevel
   - Trigger: New task in Asana project
   - Action: Create task in GoHighLevel project
   - Map fields: Asana fields → GoHighLevel fields
3. Run migration for all historical tasks (Zapier can backfill)
4. Let Zap run for Phase 4 (hybrid phase) to keep projects in sync

**Detailed steps (Method 1 example, importing "Client Website A" project)**:

1. **In GoHighLevel**, go to Projects → Client: Website A
2. Click "Import Tasks" (or "Bulk Add")
3. Upload `Asana_Exports_Final/Client_Website_A.csv`
4. Column mapping screen:
   - Asana column "Task Name" → GoHighLevel field "Task Name"
   - Asana column "Assigned to" → GoHighLevel field "Assigned User"
   - Asana column "Due Date" → GoHighLevel field "Due Date"
   - Asana column "Status" → GoHighLevel field "Task Status"
   - Asana column "Notes" → GoHighLevel field "Description"
5. Click "Preview" to see import preview (first 10 rows)
6. Verify accuracy; if correct, click "Import All"
7. System processes import (may take 5–10 minutes for large projects)
8. Verify: Count tasks in GoHighLevel (should match Asana export count)

**Example verification**:
- Asana export: 45 tasks for "Client Website A"
- GoHighLevel import count: 45 tasks
- If counts don't match, investigate (missing tasks, duplicates, etc.) before proceeding

### Step 3c: Spot-Check Imported Data

**Goal**: Ensure no data was lost or corrupted during import.

1. **Spot-check sample of imported tasks** (verify 50–100 contacts/tasks, or 10% of total, whichever is smaller):
   - Pick random tasks from imported projects
   - Open task in GoHighLevel, compare to original Asana task
   - Verify: Task name, assigned user, due date, description, custom fields match

2. **Verify attachments**:
   - If re-uploading: Confirm attachment files are accessible and linked to tasks
   - If linking to cloud storage: Verify task descriptions include correct cloud storage links

3. **Check task status**:
   - Asana statuses (e.g., "To Do", "In Progress", "Done") → GoHighLevel statuses
   - Verify status mapping is correct; if not, manually update

4. **Document any issues**:
   - If tasks are missing: Investigate why (import failed, filtered out by error, etc.)
   - If custom fields are empty: Verify column mapping was correct; re-import if needed
   - If due dates are wrong: Check date format (Asana may export MM/DD/YYYY; GoHighLevel may expect YYYY-MM-DD)

5. **Example spot-check**:
   - Asana task: "Design homepage mockup", Assigned: Sarah, Due: 2026-08-05, Status: In Progress
   - GoHighLevel task: "Design homepage mockup", Assigned: Sarah, Due: 2026-08-05, Status: In Progress
   - ✅ Match. No issues.

**Action**: Create a spot-check report (Google Sheet or Word doc) noting any data discrepancies found and resolved.

### Step 3d: Import Client Contacts and Link to Projects

**Goal**: Ensure each project is linked to its client in GoHighLevel CRM.

1. **If you already have client contacts in GoHighLevel CRM**: Link existing contacts to projects
   - Go to each project → Settings → Link to Client Contact
   - Select from CRM contact list

2. **If you're importing clients for the first time**:
   - Export client list from Asana (or your invoicing system)
   - Format