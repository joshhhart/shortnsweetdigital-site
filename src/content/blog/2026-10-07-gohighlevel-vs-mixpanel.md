---
title: "GoHighLevel vs Mixpanel: CRM for Agencies or Analytics for"
description: "Compare GoHighLevel and Mixpanel: GHL for agency automation, client management, SMS, and landing pages vs. Mixpanel for product analytics, behavioral"
pubDate: 2026-10-07
lastUpdated: 2026-10-07
tags: ["gohighlevel", "mixpanel", "crm-vs-analytics", "agency-automation", "product-analytics", "comparison-guide", "software-selection"]
keywords: ["gohighlevel vs mixpanel", "gohighlevel comparison", "mixpanel crm alternative", "agency crm software", "product analytics tools"]
targetKeyword: "gohighlevel vs mixpanel"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency. We've deployed GHL for 40+ agencies and service businesses since 2023. This comparison is structural only: GHL is a client-management and marketing automation platform; Mixpanel is a product analytics engine. They serve different use cases and rarely compete directly. Tool documentation sourced from gohighlevel.com and mixpanel.com (verified September 2026). Neither tool is optimized for the other's primary use case, so selection depends entirely on your business model and reporting needs—not on feature parity."
auditPassed: true
draft: false
heroImage: "/images/2026-10-07-gohighlevel-vs-mixpanel.jpg"
ogImage: "/images/2026-10-07-gohighlevel-vs-mixpanel-og.jpg"
audio: "/audio/2026-10-07-gohighlevel-vs-mixpanel.mp3"
---

# GoHighLevel vs Mixpanel: CRM for Agencies or Analytics for Teams?

Here's the straightforward answer: **GoHighLevel and Mixpanel don't really compete.**

They solve completely different problems:

- **GoHighLevel** is a client-relationship and marketing automation platform. It manages contacts, sends SMS/email campaigns, automates workflows, hosts landing pages, and manages client projects. It's built for agencies, coaches, and service businesses that sell to other businesses or consumers.

- **Mixpanel** is a product analytics platform. It tracks user behavior inside your software product, measures feature adoption, cohort retention, funnel drop-off, and builds behavioral cohorts. It's built for SaaS product teams that need to understand how their own users interact with their app.

If you're comparing them, one of two things is probably true:

1. **You run an agency or service business** and you're looking for a CRM (you need GHL, not Mixpanel).
2. **You build a SaaS product** and you're looking for analytics (you need Mixpanel, not GHL—though GHL could track *client* interactions separately).

This guide clarifies what each platform actually does, who it's for, when they might work together, and how to choose.

---

> **Key Takeaways**
> - **GoHighLevel** is a CRM + marketing automation platform for agencies, coaches, and service providers. Core features: contact management, SMS/email campaigns, landing pages, client project management, automations, and white-label reselling. Monthly cost: $40–$120 + SMS add-on ($30–$50). Best for: Multi-client management and outbound marketing.
> - **Mixpanel** is a product analytics platform for SaaS and mobile app teams. Core features: user event tracking, funnel analysis, retention cohorts, A/B testing reporting, and behavioral segmentation. Monthly cost: $999–$5,000+ (starts higher than GHL). Best for: Understanding how users engage with your product.
> - **Direct comparison is misleading** because they serve different audiences (GHL: service businesses managing clients; Mixpanel: product companies analyzing users). Neither platform tries to do what the other does well.
> - **When you might use both**: If you run a SaaS company (using Mixpanel for product analytics) and you also have an agency arm (using GHL to manage those agency clients), both platforms have distinct roles. Rare, but viable.
> - **GHL strengths**: Built-in SMS/email/landing pages, white-label capabilities, flat-rate pricing, ease of use, client project management. No event-tracking overhead.
> - **Mixpanel strengths**: Deep behavioral analytics, cohort retention tracking, funnel analysis, A/B testing infrastructure, SQL-like querying, real-time dashboards. Built for technical product teams.
> - **If you need a CRM**: Choose GHL. It does everything Mixpanel doesn't (and Mixpanel isn't designed to).
> - **If you need product analytics**: Choose Mixpanel. GHL cannot replace it for understanding user behavior inside your app.
> - **Integration risk**: GHL and Mixpanel can integrate via Zapier (GHL contacts → Mixpanel events), but this is uncommon and adds complexity. Most companies choose one based on their primary need.
> - **Pricing is incomparable**: GHL is $40–$170/month for most service businesses. Mixpanel starts at $999/month (annual commitment; lower for non-profits and students). GHL is cheaper; Mixpanel is more feature-rich for analytics. Cost alone shouldn't decide; match the tool to your actual use case.
> - **Common mistake**: Thinking Mixpanel is a "better CRM" than GHL because it has more advanced analytics. It's not a CRM at all—it's analytics-only. The reverse is also true: GHL has no cohort retention tracking, funnel abandonment analysis, or A/B testing reporting (though it can send variations via email automations).

---

## Part 1: What Each Platform Actually Does

### GoHighLevel: Client Management + Marketing Automation

**Primary use case**: You have clients (or customers you manage projects for). You need to organize their data, communicate with them via email/SMS, sell them services via landing pages, and automate follow-ups.

**Core features**:
- **Contact & CRM**: Store client data (email, phone, name, custom fields, tags, notes). No limits on customization.
- **Email campaigns**: Build and send email to segments or single clients. Track opens, clicks, unsubscribes.
- **SMS marketing**: Send promotional or transactional SMS. Integrates with Twilio. Track send status and replies.
- **Landing pages**: Create sales pages, opt-in forms, booking pages, thank-you pages without leaving GHL. Host directly on GHL or your domain.
- **Workflows & automations**: Build if/then rules triggered by actions (contact created, email opened, link clicked, form submitted, etc.). Chain actions like "send SMS → wait 2 days → send email → add tag."
- **Client projects**: Manage deliverables, invoicing, and internal notes for each client engagement.
- **White-label**: Resell GHL to your own clients under your brand. Your clients log in, see *your* branding, not GoHighLevel's.
- **Integrations**: Zapier, Stripe, PayPal, Slack, custom webhooks. Limited compared to enterprise CRMs (HubSpot, Salesforce), but sufficient for most agencies.

**Typical workflow**:
```
Client signs up → auto-welcome SMS + email
  ↓
Client opens email → trigger follow-up SMS at time X
  ↓
Client clicks link in SMS → tag "interested", send proposal email
  ↓
Client replies yes → invoice, send access link to client portal, onboarding sequence
```

**Pricing**: $40–$120/month per tier (Starter, Professional, Advanced) + SMS add-on ($30–$50). For resellers, wholesale rates $70–$140/month depending on volume.

**Best for**: 
- Agencies (selling services to clients)
- Coaches/consultants (managing client engagement)
- E-commerce (SMS/email marketing + abandonment recovery)
- Membership/subscription businesses (onboarding, retention automation)

---

### Mixpanel: Product Analytics

**Primary use case**: You built a software product (SaaS, mobile app, or web app). You need to understand how users interact with it—which features they use, where they drop off, how long they stick around, and how different user cohorts behave.

**Core features**:
- **Event tracking**: Every interaction a user takes (page view, button click, form submission, purchase, feature use) is logged as an event with properties (user ID, timestamp, device, location, custom properties).
- **Funnels**: Map a user's journey through sequential steps (Sign up → Verify Email → Create Profile → Make Purchase). See drop-off at each step.
- **Retention & Cohorts**: Segment users by signup date, behavior, or properties, and measure how many return after 1 day, 7 days, 30 days. Example: "Users who used Feature X in week 1 had 45% 30-day retention; users who didn't had 22% retention."
- **User profiles**: See a single user's complete event history, properties, and cohort membership. Useful for support tickets ("Why did this user churn?").
- **A/B testing**: Set up experiments, assign variants to users, measure impact on retention, conversion, or custom metrics.
- **Dashboards & reports**: Build custom dashboards showing funnels, retention curves, cohort tables, custom metrics. Share with team or stakeholders.
- **Integrations**: Segment, mParticle, Amplitude (competitor data), CRM webhooks (send high-value cohorts to email tools), Slack, data warehouse connectors.

**Typical workflow**:
```
User signs up for SaaS product → Mixpanel logs "user_signed_up" event
  ↓
User clicks "Create Dashboard" button → logs "feature_dashboard_create_clicked"
  ↓
User completes dashboard creation → logs "feature_dashboard_created"
  ↓
Analytics team builds funnel: Sign Up → Create Dashboard → Save Dashboard
  ↓
Team sees 30% of sign-ups create a dashboard; 60% of those complete it
  ↓
Team uses Mixpanel to identify which cohorts are dropping off (e.g., users from referral source X) and investigates product quality
```

**Pricing**: $999–$5,000+/month depending on event volume (billable by monthly tracked users and events). No cheap tier; minimum commitment.

**Best for**:
- SaaS companies (understanding product engagement)
- Mobile app teams (cohort retention, feature adoption)
- Content platforms (measuring engagement, scroll depth, watch time)
- Marketplace companies (tracking buyer/seller behavior, transaction funnels)

---

## Part 2: Why These Platforms Don't Compete

### Different Users

| Aspect | GHL | Mixpanel |
|--------|-----|----------|
| **User type** | Service provider managing clients | Product team analyzing end users |
| **Primary relationship** | Outbound: "Here's a campaign/offer for my clients" | Inbound: "Why did my users do (or not do) X?" |
| **Data source** | Client database (CRM input) | Product events (SDK integration) |
| **Decision maker** | Agency owner, marketing manager | Product manager, data analyst, engineer |

**Example**: A client signs up for GHL (they're a coach) to manage their coaching clients' contact info, send them SMS reminders, and automate onboarding. Completely different from a SaaS company using Mixpanel to measure if users are activating the "Pro" feature.

### Different Problems Solved

| Problem | GHL Solution | Mixpanel Solution |
|---------|--------------|-------------------|
| How do I organize my clients? | Contact database + tags | Not applicable |
| What should I say to my audience? | Email/SMS templates + automations | Not applicable |
| How do I collect leads? | Landing pages + forms | Not applicable |
| Which users are at risk of churning? | Tags based on manual review or Zapier rules | Cohort analysis: "Users who haven't used Feature X in 30 days" |
| What's blocking users from my core feature? | No funnel analysis | Funnel: "Sign up → Complete onboarding → Use feature" (see drop-off step) |
| Which campaign drove the most engaged users? | Click tracking + tag segmentation | Cohort: "Users from campaign Y" + retention curve |

### Different Implementations

**GHL**: You fill in client contact info manually or import from a CSV, send them campaigns, and tag them based on their actions. It's human-centric: *you* decide what to communicate and when.

**Mixpanel**: You instrument your product with event tracking (using their SDK or custom API calls), then analytics queries run automatically. It's code-centric: *your product* generates the events, and analytics discovers patterns.

---

## Part 3: When Each Platform Is the Right Choice

### Choose GoHighLevel If:

✅ You manage clients (one-to-one or one-to-many relationships).
✅ You send campaigns (email, SMS, or push notifications) to groups.
✅ You need landing pages or opt-in forms.
✅ You want to automate client follow-up based on their actions.
✅ You resell services and need white-label capabilities.
✅ Your budget is $40–$170/month.
✅ You value simplicity and ease of use over advanced analytics.

**Example clients**: Agencies, coaches, membership businesses, e-commerce, consultants, fitness trainers, beauty salons.

---

### Choose Mixpanel If:

✅ You build a software product (app, SaaS, web platform).
✅ You need to measure user behavior and engagement.
✅ You need cohort retention tracking.
✅ You need funnel analysis to find drop-off points.
✅ You run A/B tests and need statistical reporting.
✅ You have a technical team to implement event tracking (engineer or analytics engineer).
✅ Your budget is $1,000+/month.
✅ You value deep behavioral analytics over contact management.

**Example clients**: SaaS companies, mobile app studios, content platforms, marketplaces, product teams at enterprises.

---

### When You Might Use Both (Rare)

If you run a SaaS company with an agency or support consulting arm:

- **Mixpanel** tracks user engagement inside your SaaS product.
- **GHL** manages your agency clients: client info, proposals, onboarding automations, invoicing.

These don't overlap. Mixpanel doesn't touch your agency clients; GHL doesn't instrument your product. They'd integrate via Zapier only if you wanted to send high-value user cohorts (identified in Mixpanel) to an email campaign in GHL—an uncommon workflow.

---

## Part 4: Feature Comparison (Detailed)

![Part 4: Feature Comparison (Detailed)](/images/2026-10-07-gohighlevel-vs-mixpanel-s1.jpg)


### Contact & Data Management

| Feature | GHL | Mixpanel |
|---------|-----|----------|
| Store contact name/email/phone | ✅ Yes | ❌ No (user IDs only) |
| Custom fields (unlimited) | ✅ Yes | ⚠️ Limited (event properties) |
| Tags/segmentation | ✅ Yes, unlimited | ⚠️ Yes, via cohorts (more limited) |
| Import contacts from CSV | ✅ Yes | ⚠️ Yes, but for user properties via API |
| Manual contact entry | ✅ Yes, easy UI | ❌ No, requires API/SDK |

**Winner for client management: GHL.** GHL is built for manual contact entry and CRM use cases. Mixpanel requires instrumentation (code).

---

### Campaign & Communication

| Feature | GHL | Mixpanel |
|---------|-----|----------|
| Email campaigns | ✅ Yes, built-in | ❌ No (integration only) |
| SMS campaigns | ✅ Yes, built-in | ❌ No (integration only) |
| Push notifications | ⚠️ Limited | ⚠️ Via integrations only |
| Automations/workflows | ✅ Yes, if/then rules | ⚠️ Limited (rules-based, not full automation) |
| A/B testing (email variants) | ⚠️ Manual setup via automations | ✅ Yes, built-in statistical testing |
| Drip campaigns | ✅ Yes, with wait steps | ⚠️ Not designed for this |

**Winner for outbound communication: GHL.** Mixpanel can integrate with email tools but doesn't send campaigns itself.

---

### Analytics & Insights

| Feature | GHL | Mixpanel |
|---------|-----|----------|
| User engagement tracking | ⚠️ Basic (opens, clicks) | ✅ Yes, comprehensive |
| Funnel analysis | ❌ No | ✅ Yes, primary feature |
| Cohort retention | ❌ No | ✅ Yes, primary feature |
| User property segmentation | ✅ Tags | ✅ Custom properties |
| Dashboard creation | ⚠️ Basic reports | ✅ Advanced, custom |
| A/B testing with statistics | ❌ No | ✅ Yes |
| Real-time dashboards | ❌ No | ✅ Yes |
| User session replay | ❌ No | ❌ No (different tool: Hotjar, Fullstory) |

**Winner for analytics: Mixpanel.** GHL is not an analytics platform.

---

### Pricing & Scalability

| Factor | GHL | Mixpanel |
|--------|-----|----------|
| Startup cost | $40/month | $999/month (annual) |
| Scaling cost | Linear per plan tier | Per event + monthly tracked user volume |
| Cheapest tier | $40 (Starter) | $999 (entry-level) |
| Typical SMB cost | $100–$170/month | $1,500–$3,000/month |
| Free tier | ✅ Limited | ⚠️ Very limited (for learning) |
| Overage fees | Rare (fixed-tier model) | Yes (event volume overage) |

**Winner for budget-conscious: GHL.** Mixpanel is 5–10× more expensive.

---

### Integrations

| Integration | GHL | Mixpanel |
|-----------|-----|----------|
| Zapier | ✅ Yes | ✅ Yes |
| Stripe (payments) | ✅ Direct | ✅ Via webhook |
| Email tools (Mailchimp, etc.) | ⚠️ Via Zapier only | ✅ Via Segment/mParticle |
| SMS (Twilio) | ✅ Direct | ❌ No |
| Slack | ✅ Yes | ✅ Yes |
| Salesforce | ❌ No | ✅ Via Segment |
| Data warehouse (BigQuery, etc.) | ❌ No | ✅ Yes |
| Segment CDP | ✅ Via Zapier | ✅ Native |

**Winner for flexibility: Mixpanel** has more enterprise integrations. **Winner for simplicity: GHL** has fewer moving parts.

---

## Part 5: Detailed Use Case Comparison

### Use Case 1: Service Agency Managing Clients

**Scenario**: You run an SEO agency with 20 client accounts. You need to send monthly reports, track client engagement, and automate onboarding.

| Platform | Fit | Why |
|----------|-----|-----|
| **GHL** | ✅ Perfect | Store 20 client contacts, send monthly email reports via automation, onboard new clients with SMS sequence, track which clients opened your monthly report |
| **Mixpanel** | ❌ Wrong tool | Mixpanel doesn't store client contacts and doesn't send campaigns. It only tracks events inside *your* product. Your clients aren't using your product; you're managing them as contacts. |

**Recommendation**: Use GHL.

---

### Use Case 2: SaaS Product with User Retention Problem

**Scenario**: You built a project management SaaS. Users sign up, but 60% churn by day 30. You need to identify *why* and which features increase retention.

| Platform | Fit | Why |
|----------|-----|-----|
| **GHL** | ❌ Wrong tool | GHL can't track inside your product. It's for managing *external* clients, not *internal* user behavior. |
| **Mixpanel** | ✅ Perfect | Instrument your SaaS with Mixpanel SDK. Track feature usage, build cohorts ("Users who used Team Collab in week 1 → 45% 30-day retention; users who didn't → 22%"). Identify the problem and validate feature impact via A/B testing. |

**Recommendation**: Use Mixpanel.

---

### Use Case 3: Ecommerce Store with High Cart Abandonment

**Scenario**: You sell online. 70% of users add items to cart but don't check out. You want to recover those sales.

| Platform | Fit | Why |
|----------|-----|-----|
| **GHL** | ✅ Strong | Store customer contacts, trigger SMS/email when cart is abandoned, send recovery discount code. Automate follow-ups. But you'll need Zapier to connect GHL to your ecommerce platform (Shopify, WooCommerce, etc.). |
| **Mixpanel** | ⚠️ Partial | Mixpanel can tell you *that* 70% abandon; it can show cohort behavior (e.g., "Users from email channel have 50% abandonment; SMS channel 40%"). But it can't *send* the recovery campaign. You'd need a separate email/SMS tool or Mixpanel → Segment → email tool integration chain. |

**Recommendation**: Use GHL (simpler, direct SMS/email) OR use both: Mixpanel for understanding the problem, GHL for recovery campaigns.

---

### Use Case 4: Coaching Business with Scaling Ambitions

**Scenario**: You're a coach with 30 active clients. You want to scale to 100+ clients without increasing admin overhead. You need to automate onboarding, track client progress, and measure which coaching packages retain best.

| Platform | Fit | Why |
|----------|-----|-----|
| **GHL** | ✅ Strong | Manage client database, automate onboarding (welcome SMS, day 1 email, day 3 follow-up), track engagement (which clients opened materials, engaged with resources), segment by package (tag "package_premium" vs. "package_standard"). |
| **Mixpanel** | ⚠️ Partial | Mixpanel could track which coaching "features" (modules, workbooks, cohort calls) clients engage with—but only if your coaching content is *inside* a software product with Mixpanel instrumentation. If coaching is email-based, Mixpanel adds no value. |

**Recommendation**: Use GHL as primary (client management + automations). Skip Mixpanel unless you build a coaching app with Mixpanel inside it.

---

## Part 6: Integration Scenarios (When Both Tools Work Together)

### Scenario: SaaS Company with Client Management Arm

You build a SaaS product and also offer agency/consulting services to help clients implement it.

- **Mixpanel** tracks your *end users'* behavior inside the SaaS product (feature adoption, retention, churn risk).
- **GHL** manages your *client/agency* relationships (onboarding, progress reports, invoicing, upsells).

These tools don't compete; they serve different entities:
```
Your end users (tracked by Mixpanel)
  ↓ purchase/use
Your SaaS product
  ↓ (your agency sells implementation)
Your client companies (managed in GHL)
```

**Integration**: You could send high-engagement user cohorts from Mixpanel to GHL for follow-up ("This user activated Feature X—send them an upsell for Premium"). Rare but possible via Zapier.

---

### Scenario: Mixpanel + Email Tool Stack

You use Mixpanel to identify high-value user cohorts and a separate email tool (Mailchimp, Klaviyo, etc.) to send campaigns. GHL is not involved.

- **Mixpanel** identifies: "Users in cohort X have 60% 30-day retention; users in cohort Y have 20%."
- **Export cohort** from Mixpanel → Segment (or manual CSV) → Email tool.
- **Email tool** sends re-engagement campaign to cohort Y users.

GHL doesn't fit here unless the email tool is GHL. If you choose GHL as your email/SMS tool, you'd replace the separate email tool:
- **Mixpanel** identifies cohort
- **Zapier** exports cohort to GHL
- **GHL** sends re-engagement campaign

This workflow is less common because Mixpanel → Segment → enterprise email tool is the standard SaaS analytics stack.

---

## Part 7: Making Your Decision

![Part 7: Making Your Decision](/images/2026-10-07-gohighlevel-vs-mixpanel-s2.jpg)


### If You're Still Unsure, Ask These Questions:

1. **Do I manage clients, or do I build a product?**
   - Manage clients → GHL
   - Build a product → Mixpanel

2. **Do I need to send campaigns (email/SMS) to groups?**
   - Yes → GHL (it's built-in)
   - No → Not a priority for either tool (GHL still might be useful for contact management)

3. **Do I need to understand user behavior inside my product?**
   - Yes → Mixpanel
   - No → GHL

4. **What's my budget?**
   - $100–$500/month → GHL
   - $1,000+/month → Mixpanel or combined stack

5. **How technical is my team?**
   - Non-technical, prefer UI → GHL
   - Technical, comfortable with APIs and instrumentation → Mixpanel

---

### Decision Matrix

| Situation | GHL | Mixpanel | Recommendation |
|-----------|-----|----------|-----------------|
| Agency managing clients | ✅ | ❌ | **GHL** |
| SaaS measuring product engagement | ❌ | ✅ | **Mixpanel** |
| Ecommerce with email/SMS campaigns | ✅ | ⚠️ | **GHL** (+ Mixpanel if you need behavior analytics) |
| Coaching/consulting scaling | ✅ | ❌ | **GHL** |
| Mobile app team | ❌ | ✅ | **Mixpanel** |
| Small business with tight budget | ✅ | ❌ | **GHL** |
| Enterprise with multiple use cases | ✅ | ✅ | **Both** (separate roles) |

---

## Part 8: Implementation & Next Steps

### If You Choose GoHighLevel

1. **Sign up** at gohighlevel.com (or through a white-label partner like Mallo Digital).
2. **Select a plan**: Professional ($70/month) for most service businesses; Starter ($40/month) if you're testing.
3. **Add your SMS add-on** ($30–$50/month; critical for SMS campaigns).
4. **Import or manually add contacts** (clients, customers, or leads).
5. **Build your first automation** (e.g., welcome email → 2-day follow-up SMS).
6. **Set integrations**: Connect Zapier for third-party app syncs (booking system, ecommerce platform, etc.).
7. **Train your team** (2–4 hours) on using GHL contact management and viewing automation results.

**Time to productive automation**: 1–2 weeks.

---

### If You Choose Mixpanel

1. **Sign up** at mixpanel.com.
2. **Confirm your event volume** (and annual budget commitment, typically $1,500–$3,000/month).
3. **Instrument your product** with Mixpanel SDK (JavaScript, iOS, Android, Python, etc.) or custom API calls. This requires an engineer or analytics engineer.
4. **Define core funnels and cohorts** (onboarding flow, feature adoption, retention curves).
5. **Build dashboards** for your team to monitor weekly.
6. **Set up A/B test infrastructure** for future feature experiments.
7. **Integrate with downstream tools** (Segment for CDP, email/SMS tool for campaigns) if needed.

**Time to productive analytics**: 2–4 weeks (depending on product complexity and engineering bandwidth).

---

### If You Choose Both

1. Start with **GHL** for client/contact management.
2. Add **Mixpanel** if/when you build a software product that needs behavioral analytics.
3. Connect via **Zapier** (rare) if you want to export high-value cohorts from Mixpanel to GHL campaigns.

---

## Conclusion: Pick Based on What You Actually Do

- **Running a service business or managing clients?** You need GoHighLevel.
- **Building a software product?** You need Mixpanel.
- **Doing both?** You likely need both, in separate roles. They don't replace each other.

The mistake most people make is comparing them as if they're alternatives. They're not. Mixpanel is a lens for understanding *how users interact with your product*. GHL is a tool for *managing and communicating with clients*. Different problems, different solutions.

Choose the one that fits your business model, not the one with more features.

---

## Next Steps

**Ready to implement?**

If you're a service business or agency, [book a demo with Mallo Digital](https://www.gohighlevel.com/?fp_ref=shortnsweet53) to see GHL in action for your specific use case. We'll show you how agencies like yours use GHL to reduce admin overhead and scale client management.

If you're a SaaS product team, start with Mixpanel's [onboarding guide](https://mixpanel.com/get-started) or reach out to their sales team for a walkthrough of cohort retention and funnel analysis.