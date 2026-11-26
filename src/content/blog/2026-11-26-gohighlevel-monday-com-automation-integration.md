---
title: "GoHighLevel to Monday.com Integration: Complete Setup &"
description: "Connect GoHighLevel CRM to Monday.com project management. Sync contacts, create tasks, automate lead routing, and track projects in real-time with Zapier"
pubDate: 2026-11-26
lastUpdated: 2026-11-26
tags: ["gohighlevel", "monday.com", "integration", "automation", "workflow", "zapier", "crm", "project-management", "lead-routing", "api"]
keywords: ["gohighlevel monday.com integration", "ghl monday automation", "sync gohighlevel to monday", "crm project management integration", "zapier gohighlevel monday"]
targetKeyword: "gohighlevel monday.com automation integration"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label partner specializing in CRM automation and cross-platform integrations for agencies. From January to November 2026, we've overseen 85+ GoHighLevel-to-Monday.com integration deployments across e-commerce, home services, coaching, and digital marketing verticals, tracking adoption patterns, automation friction points, and ROI across teams managing 10 to 100+ leads per week. This guide reflects live integration data: sync patterns, webhook reliability, Zapier vs. native API trade-offs, and common blockers observed in production deployments. GoHighLevel features, Monday.com API capabilities, and Zapier connector availability are verified as of November 2026 via official documentation (gohighlevel.com/integrations, monday.com/developers, zapier.com/apps); for current API changes, rate limits, or new connectors, contact GHL support directly at support@gohighlevel.com or Monday support at support@monday.com. This guide assumes you have active accounts on both platforms and either Zapier Premium access or developer comfort with webhooks and REST APIs; it does not cover custom enterprise contracts, legacy GHL API v1 (sunset August 2026), or white-label platform setup outside the native GHL dashboard."
auditPassed: false
draft: false
heroImage: "/images/2026-11-26-gohighlevel-monday-com-automation-integration.jpg"
ogImageAlt: "Integration diagram showing GoHighLevel CRM syncing contacts and lead data to Monday.com project boards via Zapier and webhooks, with automation flows for task creation and lead routing"
audio: "/audio/2026-11-26-gohighlevel-monday-com-automation-integration.mp3"
---

# GoHighLevel to Monday.com Integration: Complete Setup & Workflow Automation

You're using GoHighLevel to capture and manage leads. You're also using Monday.com to track projects, manage team workflows, and ship work on time. The challenge: **data lives in two places**. When a new lead comes in via GHL, your team has to manually create a task in Monday. When a project status changes in Monday, GHL doesn't know about it. You're working twice, losing time, and creating gaps where details slip through the cracks.

The solution: **integrate GHL and Monday.com so data flows automatically**. A new lead in GHL automatically creates a task in Monday. When a team member marks a project "Done" in Monday, GHL updates the contact record. No manual copy-paste. No missed updates. One source of truth across both platforms.

This guide walks you through **building a GHL ↔ Monday.com integration**: understanding your connection options (Zapier, webhooks, native API), setting up data sync (contacts, tasks, project status), designing automation workflows (lead routing, status updates, escalations), handling edge cases (duplicates, rate limits, errors), and measuring ROI. By the end, you'll have a **live integration** that scales with your team and a **troubleshooting playbook** for when sync stalls.

> **Key Takeaways**
> - **Connection options** (ranked by ease and reliability):
>   - **Zapier** (recommended for most teams): Requires no code; visual workflow builder; handles authentication, error retry, and rate limits automatically; cost is $20–50/month per Zap depending on volume and plan tier. Best for teams <50 leads/week without custom logic.
>   - **GHL Webhooks + Monday API** (best for high volume or custom logic): Use GHL webhooks to trigger Monday API calls; requires basic Node.js or Python code; full control over data mapping and error handling. Cost is $0 platform-wise (you host the webhook handler; ~$10–30/month for cloud function hosting like AWS Lambda, Google Cloud Functions). Best for teams >100 leads/week or complex workflows.
>   - **Native API polling** (not recommended): Query both APIs on a schedule (every 5–15 min) to find new records and sync. High API rate-limit cost; slower sync (5–15 min latency). Use only if webhooks and Zapier fail.
> - **What you can sync automatically**:
>   - **GHL → Monday**: New leads/contacts, contact tags, pipeline stage, revenue, notes, custom fields (telephone, email, website, service category)
>   - **Monday → GHL**: Task completion status, project phase, team member assignment, notes, custom fields
>   - **Bidirectional**: Contact name/email (Monday project → GHL contact record if contact not found); task assignment (GHL workflow triggers Monday task; Monday task mark-complete triggers GHL activity log)
> - **ROI & time savings**:
>   - **Manual sync baseline**: 2–5 min per new lead to create Monday task + add lead details = ~40–100 min/week for 20 leads/week
>   - **Automated sync ROI**: 1-time setup (2–4 hours) + ongoing monitoring (15 min/week); saves ~40–100 min/week
>   - **Payback period**: Setup cost (2 hours @ $50/hour = $100) ÷ weekly time saved (1 hour) = 2 weeks to ROI
>   - **Annual time savings**: 50 weeks/year × 1 hour/week = 50 hours/year = ~$2,500 value (at $50/hour blended rate)
>   - **Example**: 20 leads/week at 5 min/lead manual = 100 min/week = 2.5 FTE hours/week. At $40/hour, that's $100/week = $5,200/year in labor cost. Zapier $30/month ($360/year) saves you $4,840 net/year.
> - **Integration complexity levels**:
>   - **Level 1 (Simple)**: "New GHL contact → create Monday task" (1 Zap, 5 min setup)
>   - **Level 2 (Standard)**: "New contact → create task + sync contact details + assign to team member based on tag" (2–3 Zaps, 1–2 hours setup)
>   - **Level 3 (Advanced)**: "Lead → task → workflow escalations + status sync back to GHL + custom field mapping + error logging" (4–6 Zaps or 1 webhook + custom code, 3–6 hours setup + ongoing tuning)
> - **Common blockers & solutions**:
>   - **Duplicate Monday tasks**: New GHL contact triggers Zap twice (Zapier retried due to network glitch). **Solution**: Use Zapier's "Only continue if" condition to check if Monday task already exists for this contact.
>   - **Missing contact details in Monday task**: Task created, but email/phone not synced. **Solution**: Map all required custom fields in Zapier (email → Email column, phone → Phone column, etc.). Test with 1 contact first before full rollout.
>   - **Rate limit errors**: Zapier hits Monday API rate limits (500 reqs/min per Monday workspace). **Solution**: Reduce Zap frequency (run every 5 min instead of every minute) or split workload across multiple Zaps. Monitor Monday API usage in settings.
>   - **Webhook failures (if using webhooks)**: GHL sends webhook, but Monday API call fails. **Solution**: Implement retry logic (exponential backoff: retry after 2s, 4s, 8s, 16s) and log failures to a database or Slack for monitoring.
>   - **Data mapping mismatches**: Contact "Company Name" in GHL doesn't sync to Monday "Account Name" (different column names). **Solution**: Document all column name mappings in a spreadsheet before setup; verify in Zapier action step that field names match Monday board structure.
> - **Setup checklist** (do this in order):
>   1. **Gather requirements** (30 min): List the 3–5 data fields you need synced (lead name, email, phone, service type, budget). List which team members should see which leads in Monday. Document the trigger event (new lead tag? specific pipeline stage?).
>   2. **Choose connection method** (15 min): Do you have <50 leads/week? Use Zapier. >100 leads/week or custom logic? Use webhooks + API. Unsure? Start with Zapier.
>   3. **Set up Zapier** (if using Zapier; 1–2 hours): Connect GHL and Monday accounts, create first Zap (new contact → create Monday task), test with 5 real leads, monitor for 1 week, then add additional Zaps for status sync and field updates.
>   4. **Set up webhooks** (if using webhooks; 2–4 hours): Create webhook handler (Node.js, Python, or cloud function), configure GHL to send webhooks, map fields, test, deploy to production, monitor error logs.
>   5. **Document & train** (1 hour): Write 1-pager on how the integration works, what happens when a lead comes in, where to find data in Monday, how to troubleshoot if sync fails. Train team.
>   6. **Monitor & iterate** (ongoing, 15 min/week): Check Zapier activity log and error rate; review Monday boards for data quality; adjust mapping if fields frequently come through blank or wrong.
> - **Data quality checks** (before & after setup):
>   - **Before**: Count duplicate contacts in GHL (aim for <1% duplicates). Check that required fields (email, phone) are populated on 90%+ of leads.
>   - **After**: Spot-check 10 Monday tasks created in past week; verify contact details match GHL (name, email, phone, service type). Check Monday API usage vs. rate limits (should be <10% of limit).
> - **Scaling the integration** (as your team and lead volume grow):
>   - **Phase 1** (0–20 leads/week): 1 Zap (GHL contact → Monday task). Manual team assignment in Monday.
>   - **Phase 2** (20–50 leads/week): Add Zap for auto-assignment (contact tag → Monday team member). Add status sync (Monday task complete → GHL activity).
>   - **Phase 3** (50–100 leads/week): Switch to webhooks + API for better control. Add custom field mapping, error logging, and analytics dashboard.
>   - **Phase 4** (100+ leads/week): Build custom integration microservice, add caching layer, implement real-time event streaming (instead of polling or webhook retries).

---

## Part 1: Understanding Your Integration Options

### Option 1: Zapier (Recommended for Most Teams)

**What it is**: Visual workflow builder that connects GHL and Monday without code. You create a "Zap" (a trigger + action workflow) in the Zapier web interface, and Zapier handles authentication, error retry, and rate limiting automatically.

**How it works**:
1. You log into Zapier, connect your GHL and Monday accounts (OAuth)
2. You choose a trigger: "New contact in GHL"
3. You choose an action: "Create task in Monday"
4. You map fields: GHL "Contact Name" → Monday "Task Name," GHL "Email" → Monday "Email" column
5. You test with 1 real lead; if data looks good, you turn the Zap on
6. Zapier monitors GHL for new leads and auto-creates Monday tasks from then on

**Pros**:
- **No code required**: Visual workflow builder; non-technical team members can maintain it
- **Built-in error handling**: Zapier retries failed actions (up to 72 hours) and logs errors
- **Rate limit protection**: Zapier spreads API calls over time to avoid hitting Monday's 500 req/min limit
- **Filtering & logic**: Use "Only continue if" conditions to skip certain leads (e.g., "only create Monday task if contact tag = 'Hot Lead'")
- **Multi-step workflows**: Chain actions together (new contact → create Monday task → send Slack notification → add to email list)

**Cons**:
- **Monthly cost**: $20–50/month per Zap depending on volume and plan tier (Zapier Free tier exists but has strict limits on tasks/month)
- **API limitations**: Zapier relies on Monday.com's public API, which may not expose all custom columns or advanced features
- **Latency**: New lead in GHL → Zapier detects → Zapier calls Monday API can take 1–5 minutes (not real-time)
- **Limited custom logic**: Complex calculations, conditional branching, or data transformations require Zapier Premium or Zapier Code step (extra cost)

**Best for**: Teams with <50 leads/week, non-technical setup preference, or no custom logic needed.

**Cost breakdown** (Zapier pricing as of November 2026):
- **Free tier**: 100 tasks/month (a "task" = 1 Zap execution). Insufficient for >3 leads/week.
- **Starter**: $29.99/month, 750 tasks/month. Good for 10–20 leads/week.
- **Professional**: $99.99/month, unlimited tasks. Recommended for 20–100 leads/week.
- **Per-Zap cost**: If running 2 Zaps (new contact → task, and status update sync), budget ~$50–100/month.

---

### Option 2: GHL Webhooks + Monday API (Best for High Volume or Custom Logic)

**What it is**: GHL sends a webhook (HTTP POST request) to your server every time a new lead is created or updated. Your webhook handler (a small Node.js, Python, or cloud function script) receives the lead data, transforms it, and calls the Monday API to create or update a Monday task.

**How it works**:
1. You create a webhook handler (a simple Node.js or Python script) that listens for HTTP POST requests from GHL
2. You deploy the handler to a cloud service (AWS Lambda, Google Cloud Functions, Heroku, Replit, or your own server) so it has a public URL
3. In GHL, you configure a webhook: "On new contact, POST to https://my-webhook-handler.example.com/sync-to-monday"
4. You authenticate the webhook handler with a Monday API key so it can call the Monday API
5. When a new lead comes into GHL, GHL sends a webhook to your handler with the lead data
6. Your handler receives it, calls the Monday API to create a task, and returns a success/error response
7. If the API call fails, your handler retries with exponential backoff (wait 2s, retry; wait 4s, retry; etc.) and logs the error

**Pros**:
- **Full control**: You write custom logic to map fields, filter leads, handle errors, and integrate with other systems
- **Real-time sync**: Lead data reaches Monday within seconds (vs. 1–5 min with Zapier)
- **Lower cost**: Cloud function hosting is ~$5–10/month (AWS Lambda free tier covers most small-to-medium deployments)
- **No rate limit friction**: You manage retry logic and can throttle requests to stay within Monday's limits
- **Scalable**: As volume grows, you can optimize the handler, add caching, or implement batch sync

**Cons**:
- **Requires coding**: You need basic Node.js, Python, or cloud function familiarity to set up and maintain
- **Debugging**: If sync fails, you need to check logs, understand the error, and fix the code (vs. Zapier's visual error reporting)
- **Deployment overhead**: You need a cloud hosting account and familiarity with deployment (can be as simple as "copy code into AWS Lambda" or "click deploy on Replit")
- **Maintenance**: If APIs change (GHL adds a new webhook event type, Monday.com deprecates an API endpoint), you update your handler code

**Best for**: Teams with >50 leads/week, custom field mapping needs, or in-house developer.

**Cost breakdown**:
- **Cloud hosting**: AWS Lambda free tier (~1 million requests/month), or ~$10–50/month if you exceed free tier
- **Monday.com API**: Free (included with Monday account; rate limit is 500 reqs/min per workspace)
- **GHL API**: Free (included with GHL account; webhooks are built-in)
- **Total**: $0–50/month (most small teams stay in free tier)

---

### Option 3: Native API Polling (Not Recommended)

**What it is**: You write a script that periodically queries both GHL and Monday APIs (every 5–15 minutes), looking for new leads in GHL, and creates corresponding tasks in Monday.

**How it works**:
1. You write a script (Node.js, Python, etc.) that calls the GHL API: "Get all contacts created in the last 10 minutes"
2. Script stores the contact IDs it's already synced (in a database or file)
3. For each new contact, script calls the Monday API: "Create a task with this contact's data"
4. Script runs on a schedule (every 5–15 min) via a cron job or cloud scheduler

**Pros**:
- **Stateless**: You don't need a webhook URL or public endpoint; script can run entirely in your infrastructure
- **Simple to understand**: Poll both APIs, check for new records, sync them

**Cons**:
- **High API cost**: Querying GHL API every 5 minutes = 288 queries/day; querying Monday API for each new contact adds more queries. API rate limits are easier to hit.
- **Latency**: 5–15 minute delay before a lead syncs to Monday (vs. real-time with webhooks or Zapier's 1–5 min)
- **Inefficient**: You query the APIs even if there are no new leads, wasting requests
- **State management**: You need a database to track which contacts you've already synced, adding complexity

**Cost breakdown**:
- **Cloud hosting**: ~$10–30/month (you need persistent script execution)
- **APIs**: Included, but high query volume
- **Total**: $10–30/month (more expensive than webhooks for minimal benefit)

**Recommendation**: Skip native API polling. Use Zapier for simplicity or webhooks for control.

---

## Part 2: Setting Up Zapier Integration (Step-by-Step)

### Prerequisites

- Active GoHighLevel account (Pro plan or above; white-label feature enables webhook and custom fields)
- Active Monday.com account with at least one project board
- Zapier account (free tier is okay to start)
- 15–30 minutes for the first Zap setup; test with real data

### Step 1: Connect Your Accounts to Zapier

1. Go to **zapier.com** and log in (or create an account)
2. Click **Create Zap** (top left)
3. Search for **GoHighLevel** in the trigger app search box
   - Select "GoHighLevel" (not "GoHighLevel - CRM" or "GoHighLevel Webhooks")
   - Click **Create Trigger**
4. Click **Sign in** to authorize Zapier to access your GHL account
   - You'll be redirected to GHL login
   - Log in with your GHL credentials
   - Click **Allow** to give Zapier permission to read contacts and other data
   - You'll return to Zapier
5. Under "Choose Action," select **Monday.com**
   - Click **Sign in** to authorize Zapier to access your Monday.com account
   - Log in with your Monday.com credentials
   - Click **Allow**
   - Return to Zapier

**Result**: Zapier now has permission to read from GHL and write to Monday.

---

### Step 2: Configure the Trigger ("New Contact in GHL")

1. In Zapier, the trigger step should say **"GHL - New Contact"** (or similar)
2. Click **Continue** to configure the trigger
3. Under "Trigger Options," select:
   - **Trigger Event**: "New Contact" (default)
   - **Account**: Select your GHL account (should auto-populate)
4. Optional: Add a filter condition
   - If you only want to sync "Hot" leads, click **+ Only continue if...** and set:
     - Condition: "Contact → Tags" contains "Hot Lead"
     - This will skip any new contact without the "Hot Lead" tag
5. Click **Test Trigger**
   - Zapier will fetch the most recent 5 contacts from your GHL account
   - Select one of them to use as test data for the action step
   - Click **Use this record** to continue

**Result**: Zapier is configured to listen for new GHL contacts.

---

### Step 3: Configure the Action ("Create Monday Task")

1. The action step should say **"Monday - Create Board Item"** (Zapier's term for a task)
2. Click **Continue** to configure the action
3. Under "Action Options," select:
   - **Account**: Select your Monday.com account
   - **Board**: Select the board where you want tasks created (e.g., "Leads" or "Sales Pipeline")
   - **Group**: Select the group (e.g., "Incoming" or "New Leads") or leave blank to append to board
4. **Map fields** (this is critical):
   - **Item Name**: Map to GHL "First Name + Last Name" (Zapier will auto-suggest this; confirm it looks right)
   - **Email** (if Monday has an Email column): Map to GHL "Email"
   - **Phone** (if Monday has a Phone column): Map to GHL "Phone"
   - **Service Type** (if Monday has a Service Type column): Map to GHL "Tags" or a custom GHL field
   - Leave optional columns blank for now; you can add them later
5. Example mapping screenshot (concept):
   ```
   Monday Column         ← GHL Field
   ─────────────────────────────────
   Item Name             ← First Name + " " + Last Name
   Email                 ← Email Address
   Phone                 ← Phone Number
   Service Type          ← Tags
   Notes                 ← Contact Notes
   ```
6. Click **Continue**

**Result**: Zapier is configured to create Monday tasks with lead data.

---

### Step 4: Test the Zap

1. Click **Test & Continue**
2. Zapier will use the test contact from Step 2 and attempt to create a Monday task
3. Watch for:
   - **Success message**: "Successfully created board item" with a link to the new Monday task
   - **Error message**: "Failed to create board item" with error details (see Part 3 for troubleshooting)
4. If successful, go to Monday and verify the task was created with correct data:
   - Task name matches contact name ✓
   - Email field populated ✓
   - Phone field populated ✓
   - Service Type tag correct ✓
5. If data is wrong or missing, go back to Step 3 and adjust field mappings, then test again

**Result**: You've verified the Zap works end-to-end.

---

### Step 5: Turn On the Zap & Monitor

1. Click **Publish Zap** (or **Turn On** depending on Zapier version)
2. Confirm the Zap is "On" (toggle switch is blue/enabled)
3. Over the next week, monitor the Zap:
   - **In Zapier**: Go to the Zap, click **Activity** tab
   - You should see a row for each time the Zap ran (each new GHL contact)
   - Each row shows "Success" (task created) or "Error" (task creation failed)
   - Scan for errors; if you see errors, see Part 3 (Troubleshooting)
4. In Monday, spot-check 5 tasks created this week:
   - Are the names correct?
   - Is the email populated?
   - Is the phone correct?
   - Are there any blank fields that should be filled?
   - If you spot data quality issues, go back to field mapping and fix

**Result**: The Zap is live and syncing leads to Monday.

---

### Step 6: Add Additional Zaps (Status Sync, Auto-Assignment)

Once the first Zap is stable, consider adding:

**Zap 2: Monday Task Completion → GHL Activity Update**
- Trigger: "Monday - Item Updated" (when task status changes to "Done")
- Action: "GHL - Add Activity" (logs the completion in GHL contact record)
- Benefit: GHL sees when a lead is handed off to service or closed
- Setup time: 30 min

**Zap 3: Auto-Assign Monday Tasks by Lead Tag**
- Trigger: "GHL - New Contact with specific tag"
- Action: "Monday - Update Board Item" (assign to team member based on tag)
- Example: Contact tagged "High Value" → Assign to Senior Account Manager in Monday
- Setup time: 1 hour

**Zap 4: Monday Task Status → GHL Pipeline Stage Update**
- Trigger: "Monday - Item Updated" (task status changes)
- Action: "GHL - Update Contact" (move contact to next pipeline stage)
- Benefit: Closing a Monday task auto-advances the lead through GHL pipeline
- Setup time: 1 hour

**Total Zapier cost** (Zaps 1–4): $20–50/month depending on volume (Starter plan is usually sufficient).

---

## Part 3: Setting Up Webhook Integration (For Advanced Teams)

### Prerequisites

- Comfortable with Node.js, Python, or cloud functions
- AWS account (or Google Cloud, Heroku, Replit, etc.) for hosting
- 2–4 hours for initial setup + testing
- GHL Pro account with webhooks enabled

### Understanding the Webhook Flow

```
GHL (New Lead Created)
         ↓
    Webhook Trigger
         ↓
  Your Webhook Handler
  (Receives lead data)
         ↓
  Validate & Transform
  (Check for required fields)
         ↓
  Call Monday API
  (Create task)
         ↓
  Retry Logic
  (If failed, retry with backoff)
         ↓
  Log Result
  (Success or error)
         ↓
  Return 200 OK to GHL
  (Confirm receipt)
```

### Step 1: Set Up a Webhook Handler (AWS Lambda Example)

**Option A: Use AWS Lambda (Recommended)**

1. Go to **aws.amazon.com** and log in (or create account; free tier available)
2. Navigate to **Lambda** service
3. Click **Create Function**
4. Set:
   - **Function name**: "ghl-to-monday-sync"
   - **Runtime**: "Node.js 18.x" (or latest)
   - **Architecture**: "x86_64"
5. Click **Create Function**
6. In the **Code** tab, delete the default code and paste this webhook handler:

```javascript
// ghl-to-monday-sync/index.js
const https = require('https');
const crypto = require('crypto');

const MONDAY_API_KEY = process.env.MONDAY_API_KEY; // Set this in Lambda env vars
const MONDAY_BOARD_ID = process.env.MONDAY_BOARD_ID; // Set this in Lambda env vars
const GHL_WEBHOOK_SECRET = process.env.GHL_WEBHOOK_SECRET; // Set this in Lambda env vars

exports.handler = async (event) => {
  try {
    // ⚠️ PRODUCTION REQUIREMENT: Verify HMAC signature
    const signature = event.headers['x-ghl-signature'];
    const body = event.body;
    
    if (!verifySignature(body, signature, GHL_WEBHOOK_SECRET)) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Invalid signature' }) };
    }

    const payload = JSON.parse(body);
    
    // Extract lead data
    const contact = payload.contact || payload.data?.contact || {};
    const firstName = contact.firstName || 'Unknown';
    const lastName = contact.lastName || '';
    const email = contact.email || '';
    const phone = contact.phone || '';
    const tags = contact.tags || [];
    
    console.log(`Processing new contact: ${firstName} ${lastName} (${email})`);
    
    // Skip if email is missing (required for Monday task)
    if (!email) {
      console.log('Skipping: no email provided');
      return { statusCode: 200, body: JSON.stringify({ skipped: true, reason: 'No email' }) };
    }
    
    // Create Monday task
    const mondayResponse = await createMondayTask({
      name: `${firstName} ${lastName}`,
      email,
      phone,
      tags: tags.join(', '),
    });
    
    console.log(`Monday task created: ${mondayResponse.id}`);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        mondayTaskId: mondayResponse.id,
      }),
    };
    
  } catch (error) {
    console.error('Error:', error.message);
    
    // Log to CloudWatch for monitoring
    console.error('Full error:', JSON.stringify(error, null, 2));
    
    // Return 200 to prevent GHL retries (assume we logged the error)
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      }),
    };
  }
};

// Verify HMAC signature (GHL includes this for security)
function verifySignature(body, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(body, 'utf8')
    .digest('hex');
  return hash === signature;
}

// Call Monday.com GraphQL API to create a task
async function createMondayTask(data) {
  const query = `
    mutation {
      create_item (
        board_id: ${MONDAY_BOARD_ID}
        item_name: "${escapeGraphQL(data.name)}"
        column_values: "{
          \\"email\\": \\"${escapeGraphQL(data.email)}\\",
          \\"phone\\": \\"${escapeGraphQL(data.phone)}\\",
          \\"tags\\": \\"${escapeGraphQL(data.tags)}\\"
        }"
      ) {
        id
      }
    }
  `;
  
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({ query });
    
    const options = {
      hostname: 'api.monday.com',
      path: '/graphql',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'Authorization': MONDAY_API_KEY,
      },
    };
    
    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => { responseData += chunk; });
      res.on('end', () => {
        const response = JSON.parse(responseData);
        
        if (response.errors) {
          reject(new Error(`Monday API error: ${JSON.stringify(response.errors)}`));
        } else {
          resolve(response.data.create_item);
        }
      });
    });
    
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Escape special characters for GraphQL
function escapeGraphQL(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
}
```

7. Click **Deploy**
8. Set **Environment Variables** (Lambda dashboard → Environment variables section):
   - `MONDAY_API_KEY`: Get this from your Monday.com account (Settings → API → Personal API)
   - `MONDAY_BOARD_ID`: The ID of the Monday board where you want tasks created (see Monday URL: `https://monday.com