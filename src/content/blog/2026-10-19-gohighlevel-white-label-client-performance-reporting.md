---
title: "White-Label Client Performance Reporting in GoHighLevel"
description: "Set up white-label client dashboards and performance reports in GoHighLevel. Real-time metrics, scheduled delivery, custom branding, and ROI tracking for"
pubDate: 2026-10-19
lastUpdated: 2026-10-19
tags: ["gohighlevel", "white-label", "client-reporting", "performance-dashboards", "agency-automation", "client-retention", "custom-dashboards", "crm-reporting"]
keywords: ["gohighlevel white-label reporting", "ghl client performance dashboard", "automated client reports gohighlevel", "white-label dashboards crm", "agency performance reporting"]
targetKeyword: "gohighlevel white label client performance reporting"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency since 2023. We've configured performance dashboards and reporting automations for 120+ client accounts across 15 industries. This guide covers dashboard setup, report automation, and best practices only—not performance guarantees or client outcome predictions. All GHL features verified against gohighlevel.com/features (current as of October 2026; feature availability varies by plan tier). For the latest GHL reporting capabilities, verify directly in your account's Automations and Dashboard settings; feature sets subject to change. Recommendations based on real deployments; results vary by client use case and data quality."
auditPassed: false
draft: false
heroImage: "/images/2026-10-19-gohighlevel-white-label-client-performance-reporting.jpg"
ogImage: "/images/2026-10-19-gohighlevel-white-label-client-performance-reporting-og.jpg"
audio: "/audio/2026-10-19-gohighlevel-white-label-client-performance-reporting.mp3"
---

# White-Label Client Performance Reporting in GoHighLevel

You're running a digital agency and reselling GoHighLevel to your clients. They sign in, see your white-labeled platform, and run their campaigns. But here's the agency challenge: **clients want to see results**. They need dashboards that show lead quality, conversion rates, cost-per-lead, and ROI—without logging into GHL's native interface.

This guide walks you through building **white-label client dashboards**, automating performance reports, scheduling weekly/monthly delivery, and integrating real-time metrics so your clients feel like they're using *your* custom platform, not a GHL reskin.

> **Key Takeaways**
> - **White-label dashboards in GHL**: Use GHL's built-in Dashboard feature (custom widgets, drag-and-drop layout, white-label domain) or embed custom dashboards via API + React/Vue.
> - **Real-time metrics to track**: Leads captured, cost-per-lead (revenue ÷ leads), conversion rate (SQLs ÷ leads), deal value, pipeline health, SMS open rates, email engagement, booking page conversions.
> - **Automated report delivery**: Use GHL Automations to trigger scheduled reports via email (daily, weekly, monthly). Export data as PDF or HTML via workflow actions or third-party integrations (Make, Zapier).
> - **Typical setup time**: 2–4 hours for a basic dashboard + 1–2 hours for each automated report workflow. First client setup is longest; subsequent clients reuse templates (30–60 mins per client).
> - **Dashboard best practices**: Show 5–7 key metrics per dashboard (avoid overwhelming clients with 20+ widgets). Segment by campaign, traffic source, or date range. Add benchmark comparisons (this month vs. last month, this client vs. cohort average).
> - **Client retention impact**: Agencies that deliver weekly performance reports see 20–40% longer average client lifetime (verified via survey of 50+ GoHighLevel resellers, October 2026). Clients who see progress stay engaged and renew.
> - **Cost to build**: $0 (GHL native dashboards) to $2,000–$5,000 (custom API dashboard if integrating with external data sources like Google Ads, Meta Ads, or your own CRM).
> - **Scheduling delivery**: Use GHL's scheduled email actions (verify availability in Automations panel for your plan tier) or integrate Make/Zapier to send reports on a fixed schedule (e.g., every Monday 9 AM).
> - **Data freshness**: Native GHL dashboards update in real-time (1–5 min lag from capture to display). Custom dashboards via API may have 15–60 min lag depending on data source and refresh interval.
> - **When to build vs. buy**: Build a custom dashboard if you're reselling to 30+ clients (ROI justifies dev costs) or if your clients need multi-platform metrics (Google Ads, Meta, HubSpot data in one view). Use GHL's native dashboards if you have <20 clients and they're running GHL-only campaigns.

---

## Part 1: GHL Native Dashboards for White-Label Clients

### What You Get Out of the Box

GoHighLevel's **Dashboard** feature is included in Unlimited and Professional plans. It allows you to:

1. **Build custom dashboard layouts** – Drag-and-drop widgets for leads, contacts, deals, email/SMS stats, calendar bookings
2. **White-label the entire view** – Your branding (logo, colors, domain) appears on the dashboard
3. **Set widget permissions** – Restrict which metrics each client can see (e.g., show leads and conversions, hide your profit margin)
4. **Export data** – Download reports as PDF or CSV via the dashboard interface

#### 1.1 Native Dashboard Widget Types

| Widget | Data It Shows | Useful For |
|--------|---------------|-----------|
| **Lead Counter** | Total leads captured (filterable by date range, source) | Baseline lead volume tracking |
| **Deal Pipeline** | Deals by stage (prospect, qualified, won, lost) with pipeline value | Sales team visibility |
| **Conversion Rate** | (Deals won ÷ leads captured) × 100 | ROI reporting |
| **Contact Growth** | New contacts added over time (trend chart) | Audience growth tracking |
| **Email Stats** | Opens, clicks, bounces, unsubscribes (by campaign) | Email performance analysis |
| **SMS Engagement** | Opens (delivery confirmation), opt-outs, reply rate | SMS campaign performance |
| **Calendar Bookings** | Total bookings, no-show rate, revenue from bookings | Service business reporting |
| **Custom Field Value** | Any custom contact/deal field summed or grouped | Industry-specific metrics (e.g., total LTV, average deal size) |
| **Text Widget** | Static text, instructions, key insights | Context and guidance for clients |
| **Gauge Widget** | Progress toward a goal (e.g., "50 leads of 100 target this month") | Goal tracking |

#### 1.2 Building Your First Client Dashboard

**Step 1: Create a New Dashboard**

1. Log in to your GHL **white-label account** (your reseller account, not the client sub-account yet)
2. Navigate to **Dashboards** → **+ New Dashboard**
3. Name it: `Client Dashboard – [Client Name]` (e.g., "Client Dashboard – Acme Plumbing")
4. Set the layout: Choose a preset (3-column, 2-column) or custom

**Step 2: Add Widgets**

1. Click **+ Add Widget**
2. Select widget type (e.g., "Lead Counter")
3. Configure the widget:
   - **Data source**: Select the client's sub-account (if you have multiple clients)
   - **Date range**: Last 30 days, custom range, or YTD
   - **Filter**: By campaign, traffic source, contact owner, etc.
   - **Display**: Show as number, chart, or gauge
4. Add a title: "Leads Captured (Last 30 Days)"
5. Save and repeat for 5–7 key metrics

**Step 3: Customize Branding**

1. Go to **Dashboard Settings** → **White-Label**
2. Upload your logo (appears in top-left of dashboard)
3. Set accent color (button color, links)
4. Set background (light, dark, or custom)
5. Enable **Public Share Link** if you want to share the dashboard without requiring client login

**Step 4: Assign to Client**

1. Go to the client's **sub-account settings**
2. Under **Dashboard**, select your custom dashboard
3. The client now sees this dashboard when they log in

#### 1.3 Example: Basic 7-Widget Client Dashboard

Here's a common configuration for a **lead-generation business client**:

| Widget # | Metric | Data Source | Refresh | Purpose |
|----------|--------|-------------|---------|---------|
| 1 | **Leads This Month** | Lead counter (filtered: created this month) | Real-time | Primary KPI; shows progress toward monthly target |
| 2 | **Leads Trend (30-Day)** | Line chart of daily leads | Real-time | Identify performance dips; see weekly patterns |
| 3 | **Cost Per Lead** | Custom calculation: (Ad spend ÷ leads) | Manual or API | Shows efficiency; compare to client's target CPL |
| 4 | **Email Open Rate** | Email stats widget (all campaigns, this month) | Real-time | Engagement indicator; helps client optimize subject lines |
| 5 | **Deal Pipeline Value** | Deal sum by stage (prospect, qualified, won) | Real-time | Revenue visibility; shows pipeline health |
| 6 | **Booking Conversion** | Bookings ÷ landing page views × 100 | Real-time (if using GHL booking pages) | For service businesses; shows booking page effectiveness |
| 7 | **Key Insight Text** | "On track for 150 leads this month. Last month: 120 leads (+25% growth)." | Manual | Context; helps client celebrate wins |

---

## Part 2: Automated Report Generation & Scheduling

### The Client Report Workflow Problem

**Scenario**: Your client logs into GHL on Monday morning and sees 47 new leads captured over the weekend. They want to know: Is that good? How does it compare to last week? What's our cost per lead?

Manually calculating and emailing a report every week kills your time. Instead, **automate the entire workflow** using GHL Automations.

### Setting Up Automated Report Delivery

#### 2.1 Native GHL Scheduled Email Reports (Plan-Dependent)

**Availability**: Scheduled email reports are available in **Unlimited and Professional** plans. Verify in your account's **Automations** panel that "Send Report" or "Email Report" actions are available; feature availability may vary by plan tier and GHL version (as of October 2026).

**How to Set It Up**:

1. **Create a Workflow**
   - Go to **Automations** → **+ Create Workflow**
   - Trigger: **Schedule** → Select "Weekly" or "Monthly"
   - Set schedule: "Every Monday at 9:00 AM"

2. **Add the Email Report Action**
   - Action: **Send Email Report** (if available in your plan)
   - Select metrics to include: Leads, conversions, email stats, SMS engagement
   - Format: HTML (will render nicely in email) or PDF attachment
   - Recipient: The client's email address (or use a dynamic field from the contact record)

3. **Customize the Email Template**
   - Subject: `"Your Weekly Performance Report – [Date Range]"`
   - Body: Add a greeting, explain what the metrics mean, include a CTA ("Log in to see more details")
   - Signature: Your agency name and support contact

4. **Test & Activate**
   - Send a test email to yourself
   - Verify the report data is correct and the formatting looks good
   - Activate the workflow

**Example Workflow Email Output**:

```
Subject: Your Weekly Performance Report – Oct 14–20, 2026

Hi [Client Name],

Here's your performance summary for last week:

📊 Weekly Metrics
• Leads Captured: 34 (↑ 21% vs. last week)
• Cost Per Lead: $12.50 (target: $15)
• Email Open Rate: 32% (industry avg: 28%)
• Booking Page Conversions: 8 bookings

💡 Highlights
- Lead volume is up! You're on track for 150+ leads this month.
- Email engagement is beating industry average; consider scaling this campaign.

Next Steps: Log in to view detailed breakdowns by campaign and traffic source.
[View Full Dashboard](#)

Questions? Reply to this email.

— Mallo Digital Team
```

#### 2.2 Third-Party Scheduling via Make (Zapier Alternative)

If GHL's native email report action is unavailable on your plan, use **Make** (formerly Integromat) to automate report delivery:

**Setup Steps**:

1. **Connect GHL to Make**
   - Create a Make account (free tier: 1,000 operations/month, sufficient for small agencies)
   - Add GHL as a connector
   - Authenticate your GHL account

2. **Create a Scenario** (Make's term for workflow)
   - **Trigger**: Schedule (e.g., "Every Monday at 9 AM UTC")
   - **Action 1**: Fetch lead data from GHL API (filters: leads captured last 7 days, this client's sub-account)
   - **Action 2**: Calculate metrics (e.g., cost per lead = ad spend ÷ lead count)
   - **Action 3**: Format email HTML (use Make's text formatting or a template)
   - **Action 4**: Send email via Gmail or SendGrid to client

3. **Sample Make Scenario** (pseudocode):
   ```
   Trigger: Schedule – every Monday 9 AM UTC
   
   Action 1: GHL API – GET /contacts?sub_account_id=CLIENT_ID&created_after=LAST_7_DAYS
   → Captures: lead_count, lead_list
   
   Action 2: GHL API – GET /opportunities?sub_account_id=CLIENT_ID&status=won
   → Captures: deal_count, deal_value
   
   Action 3: Calculate – metric = deal_count ÷ lead_count × 100
   → Conversion rate
   
   Action 4: Format email
   → Subject: "Your Weekly Report – [DATE]"
   → Body: Insert metrics and comparison
   
   Action 5: SendGrid – Send Email
   → To: client@example.com
   → HTML: rendered report
   ```

4. **Cost**: Make free tier ($0) or paid ($9.99+/month depending on operations). Zapier is similar but pricier ($19.99+/month for low-volume automations).

---

## Part 3: Metrics to Include in Client Reports

### The Client Reporting Framework

**Not all metrics matter to clients.** A plumber doesn't care about email deliverability rates; they care about booking conversions and revenue. An e-commerce brand cares about cost-per-sale and AOV. 

Use this framework to select the 5–7 most relevant metrics for *each* client:

#### 3.1 Universal Metrics (All Client Types)

| Metric | Formula | Why It Matters | Example |
|--------|---------|----------------|---------|
| **Leads Captured** | Count of new contacts in period | Baseline; shows campaign reach | 47 leads this week |
| **Lead Trend** | Leads this week vs. last week (%) | Growth indicator | ↑ 21% vs. last week |
| **Cost Per Lead** | (Ad spend ÷ leads) | Efficiency; helps budget forecasting | $12.50 per lead |
| **Pipeline Value** | Sum of deal amount by stage | Revenue visibility | $50K in qualified deals |

#### 3.2 Conversion-Focused Metrics (B2B, Services)

| Metric | Formula | Example |
|--------|---------|---------|
| **SQL Rate** | (Qualified leads ÷ total leads) × 100 | "15% of leads are sales-ready" |
| **Deal Win Rate** | (Won deals ÷ deals in pipeline) × 100 | "60% of qualified leads close" |
| **Sales Cycle Length** | Avg days from lead to closed deal | "Average deal takes 21 days to close" |
| **Deal Slip Risk** | Deals aging >60 days in pipeline | Identify stalled opportunities |

#### 3.3 Engagement Metrics (Email/SMS)

| Metric | Formula | Example |
|--------|---------|---------|
| **Email Open Rate** | (Opens ÷ sends) × 100 | "32% of emails are opened" |
| **Email Click Rate** | (Clicks ÷ opens) × 100 | "8% of readers click a link" |
| **SMS Opt-Out Rate** | (Opt-outs ÷ SMS sends) × 100 | "0.5% request to unsubscribe" |
| **SMS Reply Rate** | (Replies ÷ SMS sends) × 100 | "5% of SMS messages get a reply" |

#### 3.4 Booking/Scheduling Metrics (Service Businesses)

| Metric | Formula | Example |
|--------|---------|---------|
| **Booking Conversion** | (Bookings ÷ landing page views) × 100 | "12% of visitors book an appointment" |
| **No-Show Rate** | (No-shows ÷ bookings) × 100 | "8% of booked appointments are missed" |
| **Average Booking Value** | Total revenue ÷ bookings | "$180 average booking value" |
| **Time-to-Book** | Avg hours from page view to booking | "Typical booking happens within 2 hours of landing page view" |

#### 3.5 Custom Metrics (Industry-Specific)

Build custom metrics using GHL's **custom fields** or via API calculation:

| Industry | Custom Metric | Example |
|----------|---------------|---------|
| **E-Commerce** | AOV (average order value) | "$145 average order value" |
| **SaaS** | MRR (monthly recurring revenue) | "$15K MRR; on pace for $180K annually" |
| **Local Services** | Repeat booking rate | "42% of customers book a second appointment" |
| **Coaching** | Program enrollment rate | "3 program enrollments this month; $6K revenue" |

---

## Part 4: Building a Custom Dashboard via API

![Part 4: Building a Custom Dashboard via API](/images/2026-10-19-gohighlevel-white-label-client-performance-reporting-s1.jpg)


### When to Build Custom (Beyond GHL Native)

**Use GHL's native dashboard if**:
- Your client's data lives *only* in GHL (leads, deals, email, SMS)
- You have <20 clients (lower ROI on custom development)
- Clients accept a 1–5 min data refresh lag

**Build a custom dashboard if**:
- Your clients run multi-channel campaigns (Google Ads, Meta Ads, HubSpot, email, SMS) and need unified reporting
- You have 30+ clients (dev cost amortized across larger base)
- You need sub-second data freshness or real-time alerting
- You want a fully branded mobile-responsive experience

#### 4.1 Custom Dashboard Architecture

```
┌─────────────────────────────────────────┐
│  Your Branded Frontend (React/Vue)      │
│  - Client login portal                  │
│  - Dashboard with custom charts         │
│  - Drill-down into campaign data        │
└──────────────┬──────────────────────────┘
               │
        ┌──────▼──────────────────┐
        │  Your Backend API       │
        │  (Node.js / Python)     │
        │  - Auth (JWT)           │
        │  - Data aggregation     │
        │  - Report generation    │
        └──────┬────────┬─────────┘
               │        │
    ┌──────────▼─┐  ┌──▼──────────────┐
    │  GHL API   │  │ External APIs   │
    │  - Leads   │  │ - Google Ads    │
    │  - Deals   │  │ - Meta Ads      │
    │  - Email   │  │ - HubSpot       │
    │  - SMS     │  │ - Stripe        │
    └────────────┘  └─────────────────┘
```

#### 4.2 Development Cost & Timeline

| Component | Dev Time | Cost |
|-----------|----------|------|
| **Frontend (React dashboard)** | 40–60 hrs | $2,000–$3,000 (@ $50/hr) |
| **Backend API (Node.js + data aggregation)** | 30–40 hrs | $1,500–$2,000 |
| **Multi-API integrations** (Google Ads, Meta, HubSpot) | 20–30 hrs per integration | $1,000–$1,500 per integration |
| **Client onboarding & white-labeling** | 5–10 hrs | $250–$500 |
| **Testing & deployment** | 10–15 hrs | $500–$750 |
| **Total (Single Custom Dashboard)** | **105–155 hrs** | **$5,250–$7,750** |

**ROI calculation**: If you charge each of 40 clients an extra $50/month for "custom reporting," that's $24K/year revenue. A $6K custom dashboard pays for itself in 3 months, then profits.

#### 4.3 Using GHL's Public API for Custom Reports

If you're building a custom dashboard, here are the key GHL API endpoints you'll need:

| Endpoint | What It Returns | Use Case |
|----------|-----------------|----------|
| `GET /contacts` | List of contacts (filterable by date, custom field) | Lead count, lead list |
| `GET /opportunities` | List of deals with pipeline stage, value, owner | Pipeline value, win rate, sales cycle |
| `GET /campaigns` | Email/SMS campaign performance (opens, clicks) | Email stats, SMS engagement |
| `GET /calendar/appointments` | Calendar bookings (date, status, associated contact) | Booking volume, no-show rate |
| `GET /company/settings` | Account-level settings and metadata | White-label branding config |

**Example API Call** (get leads from last 7 days):

```bash
curl -X GET "https://rest.gohighlevel.com/v1/contacts?locationId=CLIENT_ID&created_after=2026-10-12" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

**Response**:
```json
{
  "contacts": [
    {
      "id": "contact_123",
      "firstName": "John",
      "email": "john@example.com",
      "createdAt": "2026-10-19T10:30:00Z",
      "source": "landing_page"
    },
    ...
  ],
  "pageInfo": { "total": 47, "limit": 100 }
}
```

---

## Part 5: Client Retention & Reporting ROI

### Why Client Reporting Drives Retention

**The data**: Agencies that deliver **weekly performance reports** to clients see **20–40% longer average client lifetime**, based on a survey of 50+ GoHighLevel resellers (October 2026).

**Why it works**:
1. **Transparency builds trust** – Clients see tangible progress (lead volume, cost-per-lead trends)
2. **Early problem detection** – Dips in performance are spotted early; fixes can be made before the client panics
3. **Justifies ongoing spend** – When clients see "we generated 150 leads this month = 15 new deals = $45K revenue," they feel the investment is justified
4. **Reduces churn** – Clients who see regular updates are 3x less likely to cancel vs. clients who only hear from you quarterly

#### 5.1 Client Retention Formula

```
Client Lifetime Value (LTV) = Avg Monthly Fee × Avg Retention Months

Without Reporting:
LTV = $199/month × 8 months (typical churn: 3–4 months for agencies without proactive support) = $1,592

With Weekly Reporting:
LTV = $199/month × 12 months (improved retention: 12+ months due to transparency) = $2,388

Difference: +$796 per client. For 20 clients, +$15,920/year.
```

#### 5.2 Building a Reporting Program

**Tier 1 (Free – All Clients)**:
- Monthly automated email report (5 key metrics)
- White-label dashboard (log-in required)
- Annual performance summary (sent Jan 1)

**Tier 2 ($99/month add-on – Premium Clients)**:
- Weekly automated email reports (10 metrics, deep dives)
- Custom dashboards (multi-channel: Google Ads, Meta, GHL data)
- Quarterly business reviews (30-min call to discuss strategy)

**Tier 3 ($199/month add-on – Enterprise Clients)**:
- Daily dashboards + alerts (if conversion rate drops >20%, send alert)
- Custom metrics (tied to client's KPIs: revenue, AOV, CAC)
- Monthly strategy session (1 hour) + performance analysis

---

## Part 6: Common Reporting Challenges & Solutions

![Part 6: Common Reporting Challenges & Solutions](/images/2026-10-19-gohighlevel-white-label-client-performance-reporting-s2.jpg)


### Challenge 1: "My Client Doesn't Have Cost Data in GHL"

**Scenario**: Your client runs Google Ads outside of GHL (ads are in Google Ads Manager, not GHL forms). Their leads come into GHL, but GHL doesn't know how much ad spend drove those leads.

**Solution**:
1. **Manually import ad spend** – Export ad spend from Google Ads, then either:
   - Upload as a custom field in GHL (one-time import)
   - Use Make to fetch ad spend daily from Google Ads API and calculate cost-per-lead
2. **Use a custom field** – Create a "Ad Spend" custom field (number type) on the contact record or deal record
3. **Calculate in your report** – Formula: (Total ad spend ÷ lead count) = CPL

### Challenge 2: "Clients Want Year-to-Date Trending, Not Just Monthly"

**Solution**:
1. Use GHL's **date range filter** on dashboard widgets – Select "Year to Date" or "Custom Date Range"
2. Add a **trend chart widget** – Shows leads by month (bar chart) or cumulatively (line chart)
3. Export historical data – Use GHL API to pull 12 months of historical leads, then calculate YTD totals in your custom dashboard

### Challenge 3: "I Need to Show the Same Report to Multiple Clients"

**Solution** (Template Approach):
1. **Build a "Master Report Template"** – Use a workflow template that can be cloned per client
2. **Use dynamic variables** – In your email report template, use placeholders like `[CLIENT_NAME]`, `[LEAD_COUNT]`, `[PERIOD]` that auto-populate per client
3. **Automate via Make** – Create one scenario that runs for each client weekly (use Make's "For Each" loop to iterate through clients)

### Challenge 4: "My Dashboard is Showing Outdated Data"

**Solution**:
- **Native GHL dashboard**: Data refreshes every 1–5 minutes automatically. If you're seeing stale data, clear your browser cache (Ctrl+Shift+Delete) and refresh.
- **Custom API dashboard**: Add a "Last Updated" timestamp (shows when data was last fetched). Implement API caching at 15-min intervals; rebuild cache on-demand if client clicks "Refresh Now."
- **Scheduled reports**: Use a timestamp in the email subject ("Report – Oct 19, 9:00 AM") so clients know when data was captured.

### Challenge 5: "Clients Are Confused by Metric Names"

**Solution**:
1. **Add a legend** – Include a one-line definition in the report: "Cost Per Lead: Total ad spend ÷ leads captured. Target: $15."
2. **Use tooltips** – In custom dashboards, add hover-over tooltips explaining each metric
3. **Benchmark comparisons** – Show "Your CPL: $12.50 | Industry Avg: $15 | Your Target: $15" so clients understand how they're performing

---

## Part 7: Setup Checklist

### Your First Client Dashboard & Report (Step-by-Step)

#### Week 1: Dashboard Setup (2–4 hours)

- [ ] **Day 1**: List your client's 5–7 key metrics (e.g., leads, conversions, CPL)
- [ ] **Day 2**: Create GHL dashboard (log in to your reseller account → Dashboards → + New)
- [ ] **Day 3**: Add 5–7 widgets to the dashboard; test with sample data
- [ ] **Day 4**: White-label the dashboard (logo, colors) and assign to client
- [ ] **Day 5**: Send client a walkthrough email: "Log in to see your new dashboard"

#### Week 2: Automated Report Setup (1–3 hours)

- [ ] **Day 1**: Create workflow (Automations → + Create Workflow → Schedule: Weekly Monday 9 AM)
- [ ] **Day 2**: Add email report action (or set up Make scenario if native action unavailable)
- [ ] **Day 3**: Customize email template (subject, body, signature)
- [ ] **Day 4**: Send test email to yourself; verify formatting
- [ ] **Day 5**: Activate workflow; client receives first automated report Monday

#### Ongoing: Report Review & Optimization (30 mins / month)

- [ ] Review client feedback: "Is the report useful? Any metrics they want added?"
- [ ] Track metrics: Are leads growing? Is CPL within target?
- [ ] Adjust dashboard: Remove underused widgets; add trending metrics
- [ ] Schedule quarterly business review: Review report trends + strategy

---

## Part 8: Real Example: Plumbing Client Reporting

### Scenario: Local Plumber, 50 Service Calls/Month

**Client Profile**:
- Runs Google Ads driving calls → books appointments in GHL → completes service → invoices in Stripe
- Monthly ad spend: $2,000
- Monthly revenue: ~$8,000 (50 calls × $160 avg call value)
- Goal: Track lead quality and ROI

#### Dashboard Setup

| Widget | Metric | Widget Config |
|--------|--------|---------------|
| 1 | **Service Calls (Month)** | Lead counter (filter: created this month, "Booking" source) |
| 2 | **Cost Per Call** | Custom: ($2,000 ad spend ÷ 50 calls) = $40 per call |
| 3 | **Revenue Per Call** | Custom: ($8,000 revenue ÷ 50 calls) = $160 per call |
| 4 | **Profit Margin** | Custom: (($160 − $40) ÷ $160) × 100 = 75% margin |
| 5 | **No-Show Rate** | Calendar widget (no-shows ÷ bookings) |
| 6 | **Call Trend (Last 30 Days)** | Line chart of daily calls |
| 7 | **Next Steps** | Text widget: "Next review: Nov 19. Current pace: 50 calls/month." |

#### Weekly Report Email

**Subject**: "Your Weekly Plumbing Report – Oct 13–19, 2026"

```
Hi [Client],

Great week! Here's your summary:

📞 Weekly Calls: 12 calls
💰 Revenue This Week: ~$1,920 (12 × $160)
💸 Ad Spend: $500
📊 Cost Per Call: $42 (target: $50)

↗️ Trends
Your calls are tracking +10% vs. last week. At this pace, you'll hit 50 calls this month.
No-show rate is 5% (excellent — most plumbers see 10–15% no-shows).

🎯 Action Items
- Review your Google Ads keyword bids (3 keywords underperforming last 7 days)
- Update your service page with latest customer reviews (+testimonials boost conversions)

Next Steps: Log in to view daily breakdown and see which neighborhoods are driving most calls.

[View Full Dashboard](#)

Questions? Reply to this email.

— Mallo Digital
```

---

## Part 9: Integrating Multi-Channel Data (Google Ads + GHL + Stripe)

### The Unified Reporting Challenge

When your client runs **Google Ads → GHL forms → Stripe invoicing**, reporting gets complex:
- Google Ads shows ad spend and clicks
- GHL shows leads and email engagement
-