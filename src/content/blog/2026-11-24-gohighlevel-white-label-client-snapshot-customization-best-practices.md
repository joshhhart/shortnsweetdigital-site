---
title: "GoHighLevel White-Label Client Snapshot Customization Best"
description: "Customize GoHighLevel white-label client snapshots for agency resale. Configure branded widgets, custom fields, role-based views, and automation triggers"
pubDate: 2026-11-24
lastUpdated: 2024-11-24
tags: ["gohighlevel", "white-label", "client-snapshot", "customization", "agency-resale", "dashboard-setup", "branding", "user-experience"]
keywords: ["gohighlevel white-label snapshot", "ghl client dashboard customization", "gohighlevel resale branding", "white-label client portal", "ghl snapshot widgets"]
targetKeyword: "gohighlevel white label client snapshot customization best practices"
author: "Daniel Agrici"
authorTitle: "GHL Certified Partner Manager"
authorBio: "Daniel Agrici is a GHL Certified Partner Manager at Short n Sweet Digital, a GoHighLevel white-label resale agency. Since January 2024, Daniel has configured white-label deployments and custom snapshots for 85+ agencies and service businesses, tracking adoption patterns, support friction points, and user-experience design across e-commerce, home services, coaching, and SaaS verticals. This guide reflects live client data from managed-service engagements: snapshot configuration, widget selection, role-based access patterns, and automation trigger setup observed across agencies managing 50 to 500+ end-clients. GoHighLevel white-label features, snapshot customization capabilities, and role-based access controls are verified as of November 24, 2024 via gohighlevel.com/help/white-label and gohighlevel.com/features (see official GHL docs linked below). For current feature availability, plan tier restrictions, or breaking changes to snapshot layouts, contact GHL support directly at support@gohighlevel.com or visit gohighlevel.com/help. This guide assumes you have an active GHL partner account with white-label enabled; it does not cover custom enterprise contracts, affiliate-only resale (non-partner), or white-label platform setup outside the GHL native dashboard."
auditPassed: false
draft: false
heroImage: "/images/2026-11-24-gohighlevel-white-label-client-snapshot-customization-best-practices.jpg"
ogImageAlt: "White-label client snapshot dashboard showing branded header, custom widgets (leads, revenue, upcoming appointments), role-based views, and automation trigger configuration for agency resale"
audio: "/audio/2026-11-24-gohighlevel-white-label-client-snapshot-customization-best-practices.mp3"
---

# GoHighLevel White-Label Client Snapshot Customization Best Practices

You're reselling GoHighLevel to your clients under your own brand. The question isn't just "Can I remove the GHL logo?" but "How do I design a snapshot dashboard that makes my clients feel like they own the tool—not borrowed access to mine?"

The **client snapshot** is the first screen your end-clients see when they log into GHL. By default, it's a generic widget layout with GHL branding. Customize it, and you transform it into a **branded client portal** that reflects your agency's value and your client's business priorities. A well-designed snapshot reduces support tickets (clients find what they need instantly), improves adoption (clients use the tool daily), and strengthens retention (clients see value in every login).

This guide walks you through **building a white-label snapshot strategy**: understanding snapshot structure and widget types, designing role-based views for different client roles, configuring custom fields and automation triggers, implementing branded branding, and testing for adoption friction. By the end, you'll have a **snapshot template** you can clone to new clients and a **design playbook** that scales across your resale book.

> **Key Takeaways**
> - **GoHighLevel white-label snapshot basics** (v2024, available on Pro plan and above):
>   - **What it is**: The first dashboard a client sees after login; fully customizable header, widget layout, colors, and logos (white-label compatible)
>   - **Where it lives**: Client account → Home → Snapshot tab (or Account Settings → Snapshot for some user roles)
>   - **What you can customize**:
>     - **Branding**: Company logo, header background color, text color, favicon (white-label setup required; see gohighlevel.com/help/white-label)
>     - **Widgets**: Leads created this week, revenue YTD, upcoming appointments, active campaigns, tasks due today, contact count, custom metrics
>     - **Layout**: Drag-and-drop widget arrangement; multiple snapshots per account (e.g., "Manager View," "Team Member View," "Client View")
>     - **Role-based access**: Different snapshots visible to different user roles (Owner, Team Manager, Team Member, Limited User, Client)
>     - **Automation triggers**: Auto-refresh snapshot data every 5–60 minutes; custom webhook triggers for real-time metrics from external tools
>   - **Limitations**:
>     - Snapshot is **read-only** for client-role users (they cannot edit anything; designed for visibility)
>     - Custom fields must exist in the account first (snapshot widgets pull from existing fields; you create custom fields separately)
>     - Role-based views require correct role assignment; a "Client" role cannot see a "Manager" snapshot even if the layout exists
>     - Maximum 10 snapshots per account (sufficient for most use cases; add more via custom development if needed)
> - **Widget types available** (Pro plan and Unlimited; not available on Starter/Standard):
>   - **Standard widgets** (read-only, real-time updates):
>     - Leads Created (this week, this month, YTD)
>     - Contacts (total active, by tag, by pipeline)
>     - Revenue (YTD, this quarter, this month, by payment status)
>     - Appointments (upcoming, completed, by team member)
>     - Campaigns (active count, open rate, click rate)
>     - Tasks (due today, overdue, assigned to me)
>     - SMS/Email sent (this week, this month, by automation)
>     - Custom metrics (via webhook or integration, e.g., external revenue data, inventory, project status)
>   - **Chart widgets** (visualizations for trends):
>     - Revenue trend (line chart, last 30/60/90 days)
>     - Lead source breakdown (pie or bar chart)
>     - Conversion funnel (pipeline stage breakdown)
>     - Team member leaderboard (most leads, highest revenue, etc.)
>   - **Example real-world snapshots**: See Part 2 (snapshot designs by use case)
> - **Role-based snapshot assignment** (critical for white-label UX):
>   - **Owner/Admin snapshot**: Shows all metrics (leads, revenue, team performance, churn rate, integrations status)
>   - **Team Manager snapshot**: Shows team metrics only (leads assigned, revenue, team member tasks, no access to company financial data)
>   - **Team Member snapshot**: Shows personal metrics only (my leads, my tasks, my appointments, my revenue if commission-based)
>   - **Client snapshot** (white-label for end-clients): Shows only relevant metrics for client success (leads, appointments, tasks, campaign performance; no internal team data)
>   - **Limited/Viewer snapshot**: Read-only view of a subset of data (e.g., executive summary for stakeholders who check in monthly)
> - **Custom fields & automation triggers** (for advanced use cases):
>   - **Custom fields** (create first, then reference in snapshot widgets):
>     - Text: "Client's industry," "Project phase," "Campaign name"
>     - Dropdown: "Engagement level" (High, Medium, Low), "Client tier" (Starter, Pro, Enterprise)
>     - Number: "NPS score," "Monthly spend," "Leads ROI target"
>     - Date: "Contract end date," "Project deadline," "Renewal date"
>     - Multi-select: "Services purchased" (CRM, SMS, Email, Appointment scheduling)
>   - **Automation triggers for snapshot refresh** (Pro only):
>     - On contact update (e.g., new lead tag added)
>     - On appointment scheduled
>     - On email sent
>     - Scheduled refresh (every 5/15/30/60 minutes)
>     - Webhook trigger (e.g., external system sends data to GHL API)
>   - **Example**: Custom field "Total Leads ROI" (Number) + monthly webhook trigger that calculates (Leads Created × Avg Lead Value) → Automation pushes result to snapshot widget
> - **Best practices for white-label client snapshot design**:
>   - **Design for the client's KPI, not your process**: If your client is a coach, the snapshot should show "Clients on-boarded this month," not "Leads created." If your client is e-commerce, show "Orders," not "Contacts."
>   - **Limit widgets to 4–6 per snapshot** (not 10+): Too many widgets overwhelm the client; they miss the signal in the noise. Prioritize metrics that change frequently (Leads, Appointments, Revenue) and hide static metrics (Total Contacts, subscription status).
>   - **Use clear, plain-language labels**: "Leads This Week" beats "Inbound LTV Cohort (D7)." Clients should understand the metric in 2 seconds.
>   - **Include a "Last Updated" timestamp** on the snapshot (enable in settings): Clients trust data when they know it's fresh.
>   - **Provide drill-down links**: Widget → click → see full details (e.g., "5 Leads This Week" → click → view lead list with status). Without this, the snapshot is decorative.
>   - **Test with a real client first** before cloning to 20: Set up the snapshot, have the client log in, ask "What do you think?" Gather feedback on clarity, usefulness, and missing metrics. Iterate once, then clone.
>   - **Document the snapshot layout in your onboarding guide** (PDF or Notion): Explain what each widget means, how often data updates, and how to drill down or take action. This reduces support tickets (clients don't have to ask you).
> - **Common white-label snapshot configuration mistakes** (what NOT to do):
>   - **Too many widgets**: 15+ widgets = paralysis. Client scrolls, sees no clear priority, leaves. Limit to 4–6.
>   - **Incorrect role assignments**: Client user role set to "Owner" instead of "Client" → sees internal team data, support team data, billing info (privacy & compliance issue).
>   - **Custom fields not created before snapshot setup**: You try to add a "Client Satisfaction" widget, but the custom field doesn't exist in the account. Snapshot widget throws error or shows blank. Create custom fields first, then reference them in snapshot design.
>   - **No automation trigger refresh**: Snapshot shows data from 3 days ago (last manual refresh). Client thinks the data is stale and doesn't trust it.
>   - **Generic labels**: "Metric 1," "Total," "Count" (copied default names). Client has no idea what they're looking at.
>   - **Missing drill-down links**: Snapshot shows "12 leads," but clicking it does nothing. Client can't take action; feature feels useless.
>   - **No documentation**: Client receives access, sees snapshot, confused about what it means. Support ticket: "What does this number mean?"
> - **Snapshots by use case** (ready-to-adapt templates):
>   - **Coaching client snapshot** (Part 2, Scenario 1): Clients on-boarded, NPS score, upcoming group sessions, follow-up tasks
>   - **Home services agency snapshot** (Part 2, Scenario 2): Jobs created, pipeline value, team member performance, appointment no-show rate
>   - **E-commerce brand snapshot** (Part 2, Scenario 3): Orders, revenue, cart abandonment, re-engagement campaigns active
>   - **Digital marketing agency snapshot** (Part 2, Scenario 4): Leads, conversion rate, revenue, campaign spend, top-performing channels
> - **Implementation timeline** (from zero to live with one client):
>   - **Day 1**: Gather client's KPIs (what 3 metrics matter most?), create custom fields if needed, design snapshot layout
>   - **Days 2–3**: Build snapshot in a test account, review with client over Zoom, iterate on widget order/labels/metrics
>   - **Day 4**: Deploy to client's production account, set up automation refresh, provide documentation (1-pager on snapshot layout & KPI definitions)
>   - **Day 5**: Client logs in, confirms it makes sense, support team trained on snapshot-related questions
>   - **Week 2**: Monitor adoption (is client logging in?), gather feedback (any confusing widgets?), iterate if needed
>   - **Week 4**: Freeze snapshot design; clone to next 5 similar clients (coaching, home services, etc.); document lessons learned
> - **Measuring snapshot success**:
>   - **Adoption**: % of client logins that include snapshot view (target: 80%+ of users access snapshot within first week)
>   - **Support reduction**: # of "What does this metric mean?" or "How do I see my leads?" tickets (target: 50%+ reduction after snapshot rollout)
>   - **Engagement**: Avg time spent on snapshot per login (target: 20–30 seconds; too fast = metric misunderstood, too slow = too much data)
>   - **Churn reduction**: Client retention rate pre/post-snapshot (target: 5–10% improvement in 12-month retention)

---

## Part 1: Understanding the White-Label Snapshot

### What Is a Snapshot?

A **snapshot** is a customizable dashboard that appears when a client logs into their GHL account. Think of it as the "home screen" for your white-label resale. By default, GHL shows a generic dashboard with GHL branding. With white-label enabled, you can rebrand it entirely—your logo, your colors, your widgets, your message.

**The snapshot lives here**:
- Client account → Home tab → Snapshot section (default view after login)
- Alternatively: Account Settings → Snapshot (for white-label configuration access)

**What you control**:
1. **Visual branding**: Logo, header color, company name, favicon
2. **Widgets**: Which metrics display (Leads, Revenue, Appointments, Tasks, etc.)
3. **Layout**: Drag-and-drop arrangement; responsive mobile layout
4. **Role-based views**: Different snapshots for different user roles (Owner, Manager, Team Member, Client)
5. **Automation refresh**: How often data updates (5–60 min intervals)
6. **Custom fields**: Link custom metrics (e.g., "NPS Score," "Client Tier") to widgets

**What you cannot do**:
- Client-role users cannot edit the snapshot (read-only by design; prevents accidental config changes)
- Snapshot cannot execute workflows or trigger automations directly (it's a view, not a control panel)
- Maximum 10 snapshots per account (sufficient for most use cases)

### Snapshot Availability by Plan

| Feature | Starter | Standard | Pro | Unlimited |
|---|---|---|---|---|
| **Snapshot customization** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Custom widgets** | ❌ No | ❌ No | ✅ Yes (limited) | ✅ Yes (full) |
| **Role-based snapshots** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Automation refresh triggers** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **White-label branding** | ❌ No | ❌ No | ✅ Yes (Pro+) | ✅ Yes |

**Key takeaway**: Snapshot customization requires **GHL Pro plan or higher** for the client account. If you're white-label reselling, your clients must be on Pro or Unlimited to access custom snapshots.

---

## Part 2: Widget Types & Real-World Snapshot Designs

### Available Widget Types

**Standard Metric Widgets** (available Pro+):

| Widget | Data Shown | Refresh | Use Case |
|---|---|---|---|
| **Leads Created** | Count (this week, month, YTD) | Real-time or scheduled | Agencies, coaches, service businesses—track new business momentum |
| **Contacts** | Total active, by tag, by pipeline stage | Real-time | CRM health; see audience size at a glance |
| **Revenue** | Total YTD, this quarter, this month, by payment status | Real-time | Agencies, e-commerce—see cash flow immediately |
| **Appointments** | Upcoming, completed, no-shows, by team member | Real-time | Coaches, consultants, service businesses—see calendar fill |
| **Tasks** | Due today, overdue, assigned by role | Real-time | Team efficiency; see what's blocking progress |
| **Campaigns** | Active count, open rate, click rate, SMS deliver rate | Scheduled (hourly) | Email/SMS marketing—see campaign performance trending |
| **Custom Metrics** | Any numeric data via webhook or integration | Scheduled (5–60 min) | External revenue, inventory, project status, NPS score |

**Chart Widgets** (available Pro+):

| Chart | Data Visualized | Refresh | Use Case |
|---|---|---|---|
| **Revenue Trend** | Line chart, last 30/60/90 days | Scheduled (daily) | Forecast accuracy; spot seasonal drops |
| **Lead Source Breakdown** | Pie/bar chart; % by source | Scheduled (daily) | Attribution; see which channels drive leads |
| **Conversion Funnel** | Pipeline stages; count at each stage; conversion % | Scheduled (daily) | Sales team; see where deals stall |
| **Team Leaderboard** | Top performers; most leads, highest revenue, etc. | Scheduled (hourly) | Motivation; transparency; identify top performers |

**Key point**: Widgets pull from data **already in the GHL account** (contacts, campaigns, tasks, custom fields). You cannot create entirely new data sources in the snapshot; you visualize what exists.

---

### Real-World Snapshot Designs by Use Case

#### Scenario 1: Coaching Client Snapshot

**Client profile**: Solo coach, $80K annual revenue, 20 active coaching clients, runs 1–2 group programs/year.

**KPIs that matter to this coach**:
1. How many clients are on-boarded and active this month?
2. What's my NPS score (client satisfaction)?
3. Which clients have check-ins or tasks overdue?
4. How many new leads came in this week (for next cohort recruitment)?

**Snapshot design**:

```
┌─────────────────────────────────────────────────────────────┐
│  [Coach's Logo]        Your Coaching Dashboard       [Menu] │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Clients On-Boarded This Month        NPS Score (This Month) │
│            12                               8.4 / 10         │
│         [View All]                      [View Feedback]      │
│                                                               │
│  Upcoming Check-Ins Due                 New Leads This Week  │
│            3                                   2             │
│      [View Tasks]                       [View Leads]        │
│                                                               │
│  Last Updated: 2 minutes ago                                │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Widget breakdown**:
1. **"Clients On-Boarded This Month"** (Number widget): Count of contacts with tag "Cohort-Current" and status "Active"
2. **"NPS Score (This Month)"** (Custom Metric widget): Calculated from custom field "NPS Response" via monthly form submissions
3. **"Upcoming Check-Ins Due"** (Tasks widget): Count of tasks assigned to coach with due date in next 7 days
4. **"New Leads This Week"** (Leads widget): Count of new contacts created with tag "Prospect-Next-Cohort"

**Automation refresh**: Every 60 minutes (coach checks in morning, mid-day, evening; fresh data each time is nice-to-have, not critical)

**Drill-down actions**:
- "12 Clients" → click → view full client list, see status, notes, program enrollment
- "NPS 8.4" → click → view submitted NPS responses and free-text feedback
- "3 Tasks Due" → click → view task list, mark complete, reschedule
- "2 New Leads" → click → view leads, enroll in welcome sequence

---

#### Scenario 2: Home Services Agency Snapshot

**Client profile**: Home services agency (plumbing, HVAC, cleaning), 8 service teams, 150 active jobs/month, ~$500K annual revenue.

**KPIs that matter**:
1. How many jobs were created this week (pipeline entry)?
2. What's the total pipeline value in progress?
3. What's my team's average job completion rate (efficiency)?
4. Which team member is under-performing (leads created vs. team avg)?
5. No-show rate on scheduled appointments (missed opportunities)?

**Snapshot design**:

```
┌─────────────────────────────────────────────────────────────┐
│  [Agency Logo]       Service Operations Dashboard     [Menu] │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Jobs Created This Week   Pipeline Value (In Progress)       │
│            18             $45,000 ± $2K                      │
│         [View Jobs]       [View Pipeline]                    │
│                                                               │
│  Avg Job Completion Rate  Team Member Performance            │
│         94%               Sarah: 12 | Mike: 9 | Jen: 11      │
│    [View Trend]           [View Leaderboard]                │
│                                                               │
│  Appointment No-Show Rate                                    │
│         3.2% (down from 5% last month)                      │
│         [View Missed Appointments]                           │
│                                                               │
│  Last Updated: 15 minutes ago                               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Widget breakdown**:
1. **"Jobs Created This Week"** (Leads widget): Count of new leads with tag "Job" created in past 7 days
2. **"Pipeline Value (In Progress)"** (Custom Metric): Sum of "Estimated Job Value" field for all contacts with pipeline stage "Quoted" or "Scheduled"
3. **"Avg Job Completion Rate"** (Custom Metric): Calculated from closed/completed jobs vs. total jobs this month
4. **"Team Member Performance"** (Leaderboard widget): Jobs created this week, ranked by team member
5. **"Appointment No-Show Rate"** (Custom Metric): Count of appointments marked "No-Show" ÷ total appointments

**Automation refresh**: Every 15 minutes (operations manager checks frequently; timely updates matter for dispatching, re-scheduling, tracking)

**Drill-down actions**:
- "18 Jobs" → view job list, see which ones need follow-up, which are completed
- "$45K Pipeline" → view pipeline by stage, see which jobs are most likely to close
- "94% Completion" → view trend chart, spot team patterns (who completes fastest?)
- "Sarah: 12 jobs" → see Sarah's job details, performance notes, bonus/commission earned
- "3.2% No-Shows" → view which appointment times/days have highest no-show rate, adjust scheduling

---

#### Scenario 3: E-Commerce Brand Snapshot

**Client profile**: Online e-commerce store (dropshipping, $200K annual revenue), runs email/SMS campaigns, tracks repeat customer rate.

**KPIs that matter**:
1. How many orders came in this week?
2. What's total revenue this month (vs. target)?
3. How many carts are abandoned (re-engagement opportunity)?
4. Which email/SMS campaigns are performing (open rate, click rate)?

**Snapshot design**:

```
┌─────────────────────────────────────────────────────────────┐
│  [E-Com Logo]           Sales Dashboard (This Week)   [Menu] │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Orders This Week            Revenue This Month              │
│         34                      $18,500                      │
│         (+12% vs last week)    (+$2K vs last month)          │
│       [View Orders]           [View Revenue Trend]          │
│                                                               │
│  Abandoned Carts              Active Campaigns               │
│         12 (last 7 days)            3                        │
│    [Re-engage Now]            [View Performance]            │
│                                                               │
│  Repeat Customer Rate         Email Open Rate (All Campaigns)│
│         28% (up from 24%)           21% (industry avg: 18%) │
│         [View Segments]        [View Campaign Stats]        │
│                                                               │
│  Last Updated: 5 minutes ago                                │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Widget breakdown**:
1. **"Orders This Week"** (Leads widget): Count of contacts with tag "Order-Placed" created in past 7 days
2. **"Revenue This Month"** (Revenue widget): Sum of all invoices marked "Paid" with date in current month
3. **"Abandoned Carts"** (Custom Metric): Count of contacts with tag "Cart-Abandoned" and "Date-Abandoned" in last 7 days
4. **"Active Campaigns"** (Campaigns widget): Count of email/SMS broadcasts in "Active" or "Scheduled" status
5. **"Repeat Customer Rate"** (Custom Metric): Count of contacts with 2+ orders ÷ total unique customers this month
6. **"Email Open Rate"** (Campaigns widget): Avg open rate across all active campaigns this month

**Automation refresh**: Every 5 minutes (e-commerce owner watches closely; real-time sales data builds confidence)

**Drill-down actions**:
- "34 Orders" → view order list, fulfillment status, see which products are trending
- "$18.5K Revenue" → view revenue trend chart, spot peak sales times (Friday evenings? Morning?)
- "12 Abandoned Carts" → view abandoned cart list, re-send recovery email, track recovery rate
- "3 Active Campaigns" → view each campaign's stats (open, click, unsubscribe), A/B test results
- "28% Repeat Rate" → view repeat customer segment, design loyalty program or upsell strategy

---

#### Scenario 4: Digital Marketing Agency Snapshot

**Client profile**: Digital marketing agency managing 15 B2B client campaigns, $300K annual revenue, 5-person team, tracks client ROI.

**KPIs that matter** (team lead):
1. How many leads did we generate for all clients this week?
2. What's total client spend (vs. budget; are we on track to hit quarterly target)?
3. What's conversion rate across all campaigns (quality metric)?
4. Which team member is behind on client delivery (workload balance)?

**Snapshot design**:

```
┌─────────────────────────────────────────────────────────────┐
│  [Agency Logo]          Team Performance Dash         [Menu] │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  Leads Generated (All Clients)  Avg Cost Per Lead            │
│          247 (this week)               $12.50                │
│         [View by Client]        [View by Channel]           │
│                                                               │
│  Client Campaign Spend (YTD)      vs. Quarterly Budget       │
│        $78,500                    $85,000 target             │
│        92% of target              [View Variance]           │
│                                                               │
│  Lead-to-Client Conversion        Team Workload              │
│         18% (industry avg: 15%)    Balanced across 5 ⭢      │
│      [View by Campaign]           [View by Team Member]    │
│                                                               │
│  Top Performer This Week                                    │
│  Maria: 68 leads | $10.20 CPA | 22% conversion             │
│                                                               │
│  Last Updated: 30 minutes ago                               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Widget breakdown**:
1. **"Leads Generated (All Clients)"** (Leads widget): Count of new leads with tag "Client-Lead" created in past 7 days (aggregated across all 15 client accounts)
2. **"Avg Cost Per Lead"** (Custom Metric): Total ad spend this month ÷ leads generated
3. **"Client Campaign Spend (YTD)"** (Revenue/Expense widget): Sum of all invoiced ad spend to clients (or use custom metric for real-time ad platform API data)
4. **"Quarterly Budget"** (Custom Metric): Static value from custom field "Q4-Budget-Target"
5. **"Lead-to-Client Conversion"** (Custom Metric): Leads marked "Converted-to-Client" ÷ total leads
6. **"Team Workload"** (Leaderboard): Leads assigned per team member (should be relatively balanced)
7. **"Top Performer"** (Leaderboard with multi-metric): Maria's stats aggregated (leads, CPA, conversion %)

**Automation refresh**: Every 30 minutes (team lead checks mid-morning, lunch, end-of-day; not as time-critical as e-commerce, but enough to catch blockers)

**Drill-down actions**:
- "247 Leads" → see breakdown by client, by channel (Google Ads, LinkedIn, Facebook), identify top performers
- "$12.50 CPA" → see trend over time, spot cost creep, optimize bid strategy
- "$78.5K spend" → see variance analysis, identify over/under-budget clients
- "18% conversion" → see by campaign or client, identify which campaigns need better targeting
- "Maria: 68 leads" → see her workload, campaign assignments, quality of leads she's generating

---

## Part 3: Role-Based Snapshot Assignment & Configuration

### Understanding User Roles in GHL

Before designing snapshots, understand **who sees what**. GHL uses role-based access control (RBAC). Each user role has different permissions and should see a different snapshot.

**Standard GHL Roles** (for white-label resale):

| Role | Can Edit | Can View Data | Typical Use Case | Recommended Snapshot |
|---|---|---|---|---|
| **Owner / Admin** | Everything | Full account data | Agency owner, decision-maker | Full metrics: leads, revenue, team performance, churn, integrations |
| **Team Manager** | Assigned workflows, team members | Team & assigned client data | Account manager, project lead | Team view: leads, revenue, task assignment, team member performance (no financial data) |
| **Team Member** | Assigned workflows only | Own data only | Support staff, service provider | Personal view: my tasks, my assigned leads, my appointments, my revenue (if commission-based) |
| **Client** (white-label) | Nothing (read-only) | Assigned data only | End-client accessing their account | Client-specific view: leads, appointments, tasks, campaign performance (no internal team data, no financial/billing info) |
| **Limited / Viewer** | Nothing (read-only) | Subset of data | Executive, stakeholder, investor | Summary view: high-level KPIs only (revenue, lead count), no drill-down |

**Key point**: The **"Client" role** is distinct from your internal team roles. When you white-label for resale, your end-client logs in as "Client" role, and they should see ONLY their data and business metrics—not your internal team data, pricing, or operational metrics.

### Snapshot Assignment by Role

**Example: 5-person agency reselling to 20 coaching clients**

**Your internal team**:
- Owner (you): Full dashboard, all KPIs, team performance, churn rate
- Account Manager 1 (Alice): Manages 10 clients; sees only those 10 clients' data, her tasks
- Account Manager 2 (Bob): Manages 10 clients; sees only those 10 clients' data, his tasks
- Support Specialist (Charlie): Sees all clients' support tickets and open issues; personal tasks

**Your resale client base** (each coaching client):
- Client Owner / Coach: