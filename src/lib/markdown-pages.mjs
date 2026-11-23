// GEO/AIO: hand-authored markdown versions of the static pages, served at
// /<page>.md and folded into /llms.txt + /llms-full.txt. Keep these in sync
// with the corresponding .astro pages when content changes.

export const SITE_URL = 'https://shortnsweetdigital.com';
export const SITE_NAME = 'Short n Sweet Digital';
export const SITE_SUMMARY =
  'Short n Sweet Digital is a white-label GoHighLevel partner that helps small businesses and agencies replace 8–12 marketing SaaS tools with one AI-powered all-in-one platform — CRM, email, SMS, web chat, scheduling, pipelines, reviews, and automation under a single login.';

const AFFILIATE = 'https://www.gohighlevel.com/?fp_ref=shortnsweet53';

export const staticPages = [
  {
    slug: 'index',
    path: '/',
    title: 'Short n Sweet Digital — One AI-Powered Platform for Your Whole Business',
    description:
      'Replace 8–12 marketing tools with one AI-powered platform: CRM, SMS, email, web chat, scheduling, pipelines, reviews, and automation under a single login.',
    markdown: `# Short n Sweet Digital

**One AI-powered platform for your whole business.**

${SITE_SUMMARY}

## What the platform includes

- **Online Reviews** — automate review requests and respond to reviews from one place.
- **Messaging** — a single inbox for SMS, Facebook Messenger, Google Business messages, and more.
- **Webchat** — a website chat widget that keeps converting after business hours.
- **CRM** — track every lead and know exactly where new business comes from.
- **Scheduling & calendars** — online booking that syncs with your calendar.
- **Pipelines & automation** — follow up on every lead automatically, 24/7, with AI assistants that book appointments and answer FAQs.

## Pricing at a glance

- **Starter — $97/mo**: one account, every core tool.
- **Unlimited — $297/mo**: unlimited client sub-accounts for agencies.
- **SaaS Pro — $497/mo**: full white-label reseller mode with Stripe billing.

All plans start with a **14-day free trial**. Month-to-month billing, no long-term contracts.

## Frequently asked questions

**What does Short n Sweet Digital do?**
We replace the 8–12 marketing SaaS tools you are juggling with one AI-powered all-in-one platform — CRM, SMS, email, web chat, scheduling, pipelines, reviews, and automation under a single login.

**How much does it cost?**
Plans start at $97/mo for one account, $297/mo for unlimited client sub-accounts, and $497/mo for SaaS reseller mode with Stripe billing. Every plan starts with a 14-day free trial.

**Is there a contract?**
No long-term contracts. Month-to-month billing, cancel anytime.

## Get started

- [Start a 14-day free trial](${AFFILIATE})
- [Book a free strategy call](${SITE_URL}/book-a-call/)
- [Compare GoHighLevel to other tools](${SITE_URL}/compare/)
`,
  },
  {
    slug: 'about',
    path: '/about/',
    title: 'About — Short n Sweet Digital',
    description:
      'Short n Sweet Digital helps small businesses replace 8–12 marketing tools with one AI-powered platform. Built by Josh Hart on GoHighLevel.',
    markdown: `# About Short n Sweet Digital

**One platform. Done right. Built for small businesses.**

Short n Sweet Digital is a white-label partner of GoHighLevel — the all-in-one CRM, marketing, and automation platform powering 100,000+ agencies worldwide. We package it for solo operators, contractors, and local service businesses who don't have time to glue together eight different SaaS tools. Founded by Josh Hart.

## What you get

- **One login** for CRM, email, SMS, web chat, scheduling, pipelines, and reviews.
- **AI assistants** that book appointments, answer FAQs, and follow up on leads 24/7.
- **White-glove setup** — we configure the workflows, you focus on the business.
- **Transparent pricing** with a 14-day free trial. No long-term contracts.

## Why we exist

Most small businesses pay for 8–12 separate tools — and still lose leads because none of them talk to each other. We replace the stack with a single platform, configured to your industry, so every lead gets a fast, consistent response.

## Who we help

Home services, real estate, fitness, coaches, and local agencies. If you live and die by inbound leads and follow-up, we built this for you.

- [Start a free trial](${AFFILIATE})
- [Book a call](${SITE_URL}/book-a-call/)
`,
  },
  {
    slug: 'pricing',
    path: '/pricing/',
    title: 'Pricing — Short n Sweet Digital',
    description:
      'Simple pricing: Starter $97/mo, Unlimited $297/mo, SaaS Pro $497/mo. Every plan starts with a 14-day free trial. No contracts.',
    markdown: `# Pricing

Every plan starts with a **14-day free trial**. Month-to-month billing, no long-term contracts.

| Plan | Price | Best for |
|---|---|---|
| Starter | $97/mo | A single business that wants every tool in one place |
| Unlimited | $297/mo | Agencies running multiple clients — unlimited sub-accounts, one bill |
| SaaS Pro | $497/mo | Reselling GoHighLevel as your own software with Stripe billing |

## Starter — $97/mo

One account for a single business that wants every tool in one place.

- Unlimited contacts & users
- CRM, pipelines & opportunities
- Email + 2-way SMS marketing
- Funnels, websites & forms
- Calendars & online booking
- Reputation & reviews

## Unlimited — $297/mo

For agencies running multiple clients — unlimited sub-accounts, one bill.

- Everything in Starter
- Unlimited client sub-accounts
- API access & webhooks
- Branded desktop app
- Advanced automations & workflows
- AI employee add-ons

## SaaS Pro — $497/mo

Resell GoHighLevel as your own software with Stripe billing built in.

- Everything in Unlimited
- Full white-label / SaaS mode
- Resell with your own pricing
- Stripe billing & rebilling
- Split testing & advanced API
- Priority support

[Start your 14-day free trial](${AFFILIATE})
`,
  },
  {
    slug: 'compare',
    path: '/compare/',
    title: 'GoHighLevel Comparisons & Guides — Compare Hub',
    description:
      'Every GoHighLevel comparison and guide in one place. See how GHL stacks up against HubSpot, Kajabi, Salesforce, Pipedrive, and more.',
    markdown: `# GoHighLevel, compared to everything

Honest, agency-tested breakdowns of how GoHighLevel stacks up against the tools you're already paying for — plus the pricing math, white-label playbooks, and automation guides that actually move revenue.

The full, always-current list of comparisons and guides lives in the blog index below and in [llms.txt](${SITE_URL}/llms.txt).

- [Book a free strategy call](${SITE_URL}/book-a-call/)
`,
  },
  {
    slug: 'book-a-call',
    path: '/book-a-call/',
    title: 'Book a Free Strategy Call — Short n Sweet Digital',
    description:
      'Book a free 30-minute strategy call. We map your current stack and show you exactly which tools we can replace with one platform.',
    markdown: `# Book a Free Strategy Call

Book a **free 30-minute strategy call** to scope your CRM, automation, and AI setup. We map your current marketing stack and show you exactly which of your 8–12 tools we can replace with one platform.

**Price:** Free
**Length:** 30 minutes
**Who it's for:** Small businesses, local service companies, and agencies that run on inbound leads and follow-up.

[Book your call](${SITE_URL}/book-a-call/)
`,
  },
];

/** Serialize a blog collection entry to clean markdown with a metadata header. */
export function postToMarkdown(post) {
  const d = post.data;
  const lines = [
    `# ${d.title}`,
    '',
    `> ${d.description}`,
    '',
    `- Published: ${d.pubDate.toISOString().slice(0, 10)}`,
  ];
  if (d.updatedDate) lines.push(`- Updated: ${d.updatedDate.toISOString().slice(0, 10)}`);
  if (d.tags?.length) lines.push(`- Tags: ${d.tags.join(', ')}`);
  lines.push(`- Canonical: ${SITE_URL}/blog/${post.id}/`, '', '---', '', (post.body || '').trim(), '');
  return lines.join('\n');
}

export const mdResponse = (body) =>
  new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
