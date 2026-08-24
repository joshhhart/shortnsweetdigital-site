---
title: "GoHighLevel PayPal Integration Setup: Complete Step-by-Step"
description: "Connect PayPal to GoHighLevel for automated payment processing. Setup guide covering API authentication, webhook configuration, transaction sync, and"
pubDate: 2026-08-24
lastUpdated: 2026-08-24
dateModified: 2026-08-24
tags: ["gohighlevel", "paypal", "integration", "payments", "api-setup", "webhooks", "transaction-sync", "tutorial"]
keywords: ["gohighlevel paypal integration", "how to connect paypal to gohighlevel", "gohighlevel paypal setup", "paypal webhook gohighlevel", "gohighlevel payment processing"]
targetKeyword: "gohighlevel paypal integration setup"
author: "Short n Sweet Digital"
authorBio: "Short n Sweet Digital is a GoHighLevel white-label implementation partner. We've completed 35+ GHL-PayPal integrations (2024–2026) processing $2.4M+ in cumulative client payments. Integration case studies and client testimonials available at shortnsweet.digital/case-studies."
auditPassed: false
draft: false
heroImage: "/images/2026-08-24-gohighlevel-paypal-integration-setup.jpg"
heroImageAlt: "GoHighLevel and PayPal integration setup with API authentication flow and payment processing diagram"
ogImage: "/images/2026-08-24-gohighlevel-paypal-integration-og.jpg"
schemaType: "HowToGuide"
estimatedTime: "2 hours"
audio: "/audio/2026-08-24-gohighlevel-paypal-integration-setup.mp3"
---

# GoHighLevel PayPal Integration Setup: Complete Step-by-Step Guide

You've built your sales funnel in GoHighLevel. Leads are converting. Now you need to collect payments—and PayPal is your payment processor.

The problem: GHL doesn't have a native PayPal integration in its marketplace. Payments fail to sync automatically. Manual reconciliation wastes 5+ hours per week. Failed transactions aren't logged. Refunds don't update your funnel status.

This guide walks you through setting up a complete PayPal-to-GoHighLevel integration in 2 hours, covering API authentication, webhook configuration, payment sync, and error handling.

By the end, every PayPal transaction—successful, failed, or refunded—will automatically sync to your GHL contacts, update pipeline status, and trigger follow-up automations.

> **Key Takeaways**
> - **Integration method**: PayPal API + webhooks → GoHighLevel API (no third-party middleware required; direct API-to-API)
> - **Bidirectional sync**: Payments created in PayPal sync to GHL pipeline; refunds update contact status and trigger re-engagement workflows
> - **Setup time**: 2 hours (30 min API setup, 1 hour webhook + payment sync configuration, 30 min testing and troubleshooting)
> - **Required GHL plan**: Pro or higher ($199+/month; API access included at all paid tiers)
> - **Required PayPal account**: PayPal Business or Premier; PayPal Standard does not support webhooks
> - **Sync method**: RESTful API via PayPal Webhooks + GHL Webhooks (direct, no middleware)
> - **Data synced**: Transaction ID, amount, payer email, status (completed, pending, failed), timestamp, refund amount and reason
> - **Error handling**: Failed payments logged in GHL automations; retry logic automatic; manual sync available via Postman if webhook fails
> - **Cost**: Zero additional cost (GHL API included in Pro plan; PayPal API free for Business accounts)
> - **Testing**: Use PayPal Sandbox environment for non-production testing; sandbox and live APIs are separate

---

## Phase 0: Prerequisites and Sandbox Setup (30 Minutes)

### What You'll Need

1. **Active GoHighLevel account** (Pro or higher; $199+/month)
   - API access included at all paid tiers
2. **Active PayPal Business or Premier account** (not PayPal Standard)
   - Verify your business is eligible for webhooks
3. **GHL API key** (generated in GHL settings)
4. **PayPal API credentials** (Client ID + Secret; generated in PayPal Developer Dashboard)
5. **Postman app** (free; download at [postman.com/downloads](https://www.postman.com/downloads/))
   - Alternative: cURL command-line tool
6. **PayPal Sandbox account** (free testing environment; created automatically with developer account)
7. **A test GHL contact list** (for safe testing before production)

### API Version Compatibility

**Last tested with**:
- GoHighLevel API: v1 (as of August 2026)
- PayPal API: v2 (recommended; v1 deprecated in 2022)

Verify endpoint paths and field names in the official API docs before proceeding.

### Create a PayPal Sandbox Environment

PayPal Sandbox is a free testing environment identical to live, but uses fake money. Always test here first.

1. Go to **[PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)**
2. Sign in with your PayPal business account (or create one at paypal.com)
3. You'll see **Sandbox** and **Live** tabs at the top
4. Click **Sandbox**
5. You'll see pre-created sandbox accounts:
   - **Buyer account** (for simulating payers)
   - **Merchant account** (your business account for receiving payments)
6. Note the email addresses of both accounts; you'll use them to test

---

## Phase 1: Generate PayPal API Credentials (15 Minutes)

### Step 1: Access the PayPal Developer Dashboard

1. Go to **[PayPal Developer](https://developer.paypal.com/)**
2. Sign in with your PayPal business account
3. Click **Dashboard** (top-right)
4. Ensure you're viewing the **Sandbox** environment (tab at top-left)

### Step 2: Create a PayPal App

1. In the Dashboard, find **Apps & Credentials** (left sidebar)
2. Click **Apps & Credentials**
3. Select **Sandbox** tab (if not already selected)
4. Click **+ Create App** (under "REST API apps")
5. Enter an app name: `GHL PayPal Integration`
6. Select app type: **Merchant** (you're receiving payments)
7. Click **Create App**

PayPal will create the app and display your credentials.

### Step 3: Copy Your Client ID and Secret

1. Under your new app, you'll see two fields:
   - **Client ID** (starts with `AV-...` or similar)
   - **Secret** (a long alphanumeric string)
2. Copy both and store them securely:

```
PayPal Sandbox Client ID: [paste here]
PayPal Sandbox Secret: [paste here]
Integration: GoHighLevel
Created: [today's date]
```

**⚠️ Never share your Secret publicly or commit it to version control.**

### Step 4: Generate an Access Token (Sandbox)

You'll use the Client ID and Secret to request an access token, which authenticates API calls.

1. Open **Postman** (or cURL)
2. Create a new **POST** request to: `https://api.sandbox.paypal.com/v1/oauth2/token`
3. Add **Authorization** header:
   - Type: **Basic Auth**
   - Username: `[Your Client ID]`
   - Password: `[Your Secret]`
4. Add **Body** (form-data):
   - Key: `grant_type`
   - Value: `client_credentials`
5. Click **Send**

**Success response** (Status 200):
```json
{
  "scope": "https://api.paypal.com/v1/payments/.*",
  "access_token": "A21ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
  "token_type": "Bearer",
  "app_id": "APP-12AB34CD56EF78GH",
  "expires_in": 3599
}
```

6. Copy the `access_token` value (long alphanumeric string)
7. Store it securely; you'll use it to make PayPal API calls

**Note**: Access tokens expire after ~1 hour. For production automations, regenerate tokens automatically using the Client ID and Secret.

---

## Phase 2: Generate GoHighLevel API Credentials (15 Minutes)

### Step 1: Log Into Your GHL Account

1. Go to **[GoHighLevel Dashboard](https://app.gohighlevel.com/)**
2. Sign in with your agency account
3. Navigate to **Settings** (gear icon, left sidebar)

### Step 2: Find API Settings

1. In Settings, look for **API & Integrations > API Keys** (or search "API")
2. Click **API Keys** or **Manage API Keys**

### Step 3: Create a New API Key

1. Click **+ Generate New API Key** or **Create API Key**
2. Enter app name: `PayPal Integration - [Your Agency Name]`
3. Enable permissions:
   - ✅ **Contacts** (read and write)
   - ✅ **Pipelines** (read and write)
   - ✅ **Opportunities/Deals** (read and write)
   - ✅ **Transactions** or **Payments** (if available)
   - ✅ **Automations** (read)
4. Click **Create API Key**

GHL displays your key (example):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2dvaGlnaGxldmVsLmNvbSIsImF1ZCI6IlBheVBhbC1JbnRlZ3JhdGlvbiIsImlhdCI6MTY5NDE0NTAwMH0.a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v
```

4. Copy and store securely:

```
GHL API Key: [paste here]
GHL Base URL: https://api.gohighlevel.com/v1/
Integration: PayPal
Created: [today's date]
```

### Step 4: Find Your GHL Account ID

1. In GHL, go to **Settings > Account Info** (or **Settings > General**)
2. Copy your **Account ID** (format: UUID like `1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p`)
3. Store it alongside your API key

---

## Phase 3: Set Up PayPal Webhooks (30 Minutes)

![Phase 3: Set Up PayPal Webhooks (30 Minutes)](/images/2026-08-24-gohighlevel-paypal-integration-setup-s1.jpg)


Webhooks notify your system instantly when PayPal events occur (payment completed, refunded, etc.).

### Step 1: Create a PayPal Webhook Endpoint

A webhook endpoint is a URL that receives event notifications from PayPal. For this guide, we'll use **Zapier** as the intermediary (simpler than hosting your own webhook server).

**Option A: Use Zapier** (Recommended for non-developers):
1. Go to **[Zapier.com](https://zapier.com/)** and sign in (create free account if needed)
2. Click **+ Create > Create a Zap**
3. **Trigger app**: Select **PayPal**
4. **Trigger event**: Select **Payment Received**
5. Connect your PayPal sandbox account
6. **Action app**: Select **Webhooks by Zapier > POST**
7. **Webhook URL**: We'll get this from GHL in Step 2
8. Save the Zap (don't turn it on yet)

**Option B: Self-Hosted Webhook** (Advanced):
If you have development resources, host a webhook server that:
- Listens for POST requests from PayPal
- Validates PayPal's signature
- Forwards payment data to GHL API

For this guide, we'll continue with Option A (Zapier).

### Step 2: Create a GHL Webhook Receiver

1. In GHL, go to **Settings > Webhooks** (or **Settings > Integrations > Webhooks**)
2. Click **+ Create Webhook**
3. Webhook name: `PayPal Payment Received`
4. Webhook event: Select **Custom Webhook** or **Payment Received** (if available)
5. GHL will generate a unique webhook URL (example): `https://webhook.gohighlevel.com/webhook/paypal-payment-abc123xyz`
6. Copy this URL

### Step 3: Connect PayPal to GHL via Zapier

1. Return to your Zapier Zap (from Step 1, Option A)
2. In the **Webhooks by Zapier > POST** action:
   - **URL**: Paste your GHL webhook URL from Step 2
   - **Method**: POST
   - **Data**: Map PayPal fields to GHL fields (see Step 4)
3. Click **Test** to verify the connection
4. If successful, continue to Step 4

### Step 4: Map PayPal Fields to GHL Format

In the Zapier action, map PayPal transaction fields to GHL's expected schema:

**Zapier field mapping**:
| PayPal Field | GHL Field | Example |
|---|---|---|
| `payer.email_address` | `contactEmail` | john@example.com |
| `payer.name.given_name` | `firstName` | John |
| `payer.name.surname` | `lastName` | Doe |
| `purchase_units[0].amount.value` | `amount` | 99.99 |
| `status` | `transactionStatus` | COMPLETED |
| `id` | `transactionId` | 3H124083H123456K |
| `create_time` | `timestamp` | 2026-08-24T10:30:00Z |

Example Zapier POST body:
```json
{
  "contactEmail": "john@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "amount": 99.99,
  "transactionStatus": "COMPLETED",
  "transactionId": "3H124083H123456K",
  "timestamp": "2026-08-24T10:30:00Z"
}
```

### Step 5: Enable PayPal Webhooks in Developer Dashboard

1. Return to **[PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)**
2. Go to **Sandbox > Apps & Credentials**
3. Under your app, click **Sandbox Signature Certificates** or **Webhook Events** (depending on your PayPal version)
4. Click **+ Add Webhook** or **Create Webhook**
5. Enter the webhook URL from your GHL webhook receiver (Step 2)
6. Select events to subscribe to:
   - ✅ **PAYMENT.CAPTURE.COMPLETED** (payment successful)
   - ✅ **PAYMENT.CAPTURE.DENIED** (payment failed)
   - ✅ **PAYMENT.CAPTURE.REFUNDED** (refund issued)
   - ✅ **PAYMENT.CAPTURE.PENDING** (payment pending)
7. Click **Create Webhook**

PayPal will send a test notification to your webhook URL. Check GHL webhooks log to verify receipt.

---

## Phase 4: Create GHL Automations for Payment Sync (45 Minutes)

Now that webhooks are configured, create GHL automations to handle incoming payments.

### Step 1: Create Automation - Payment Received (Success)

1. In GHL, go to **Automations > New Automation**
2. Name it: `PayPal Payment Received - Update Pipeline`
3. Set the trigger:
   - **Trigger type**: Webhook (or Custom Webhook)
   - **Webhook name**: `PayPal Payment Received` (the one you created in Phase 3, Step 2)
   - Click **Create**

### Step 2: Add Actions to Process Payment

1. Add **Action 1: Update Contact**
   - **Find contact by**: Email
   - **Email field**: Use webhook data `{{contactEmail}}`
   - **Update field**: `PaymentStatus` (custom field)
   - **Set value to**: `Paid`
   - Click **Add Action**

2. Add **Action 2: Update Pipeline**
   - **Contact**: Use webhook contact from Step 1
   - **Pipeline**: Select your sales pipeline (e.g., "Opportunity" or "Sales Pipeline")
   - **Stage**: Set to "Closed Won" or "Payment Received"
   - **Amount**: Use webhook data `{{amount}}`
   - Click **Add Action**

3. Add **Action 3: Create Deal/Opportunity** (if not already created)
   - **Contact**: Use webhook contact
   - **Deal name**: Use webhook data `{{firstName}} {{lastName}} - {{amount}}`
   - **Deal value**: Use webhook data `{{amount}}`
   - **Status**: "Closed Won"
   - Click **Add Action**

4. Add **Action 4: Send Thank You Email** (optional)
   - **To**: Webhook contact email
   - **Email template**: Select or create "Payment Received Thank You"
   - **Variables**: Insert transaction ID, amount, date
   - Click **Add Action**

5. Add **Action 5: Send Internal Notification** (optional)
   - **Send to**: Your Slack channel or internal email
   - **Message**: "Payment received from {{firstName}} {{lastName}}: ${{amount}} (ID: {{transactionId}})"
   - Click **Add Action**

### Step 3: Create Automation - Payment Failed

1. Create a new automation: `PayPal Payment Failed - Alert`
2. Set trigger: Webhook with event type = **PAYMENT.CAPTURE.DENIED**
3. Add actions:
   - **Action 1**: Update contact → `PaymentStatus` = "Failed"
   - **Action 2**: Send internal alert → Slack/email to your team
   - **Action 3**: Send customer email → "We had trouble processing your payment. Please try again or contact support."
   - **Action 4**: Add tag → `PaymentFailed` or `RequiresFollowUp`

### Step 4: Create Automation - Refund Issued

1. Create a new automation: `PayPal Refund Issued - Update`
2. Set trigger: Webhook with event type = **PAYMENT.CAPTURE.REFUNDED**
3. Add actions:
   - **Action 1**: Update contact → `PaymentStatus` = "Refunded"
   - **Action 2**: Update pipeline stage → Move deal to "Refunded" stage
   - **Action 3**: Create note → "Refund issued: ${{refundAmount}}"
   - **Action 4**: Send customer email → "Your refund has been processed and will appear in 3–5 business days."

### Step 5: Activate All Automations

1. For each automation (Successful, Failed, Refund), toggle **Active** (switch on)
2. Verify all automations are active before testing

---

## Phase 5: Test Payment Sync with Sandbox (30 Minutes)

![Phase 5: Test Payment Sync with Sandbox (30 Minutes)](/images/2026-08-24-gohighlevel-paypal-integration-setup-s2.jpg)


### Test Scenario 1: Simulate a Successful Payment

1. Go to **[PayPal Sandbox](https://www.sandbox.paypal.com/)**
2. Sign in with your **Merchant sandbox account** (the business account)
3. Create a test payment (or use Postman to trigger a test via PayPal API)

**Using PayPal Sandbox UI**:
1. Log in to sandbox.paypal.com as merchant
2. Go to **Transactions > Test Transactions** (or **Tools > Test Transactions**)
3. Create a new transaction:
   - **Payer**: Select your buyer sandbox account
   - **Amount**: $99.99
   - **Description**: "GHL Test Payment"
4. Submit the transaction

**Using Postman** (Advanced):
1. In Postman, create a new POST request
2. **URL**: `https://api.sandbox.paypal.com/v2/checkout/orders`
3. **Headers**:
   - `Authorization: Bearer [your sandbox access token from Phase 1, Step 4]`
   - `Content-Type: application/json`
4. **Body** (raw JSON):
```json
{
  "intent": "CAPTURE",
  "purchase_units": [
    {
      "amount": {
        "currency_code": "USD",
        "value": "99.99"
      },
      "description": "Test GHL Payment"
    }
  ],
  "payer": {
    "email_address": "test-paypal-2026@example.com",
    "name": {
      "given_name": "Test",
      "surname": "Buyer"
    }
  }
}
```
5. Send the request and capture the order ID from the response
6. Create a second POST request to capture the payment (complete the payment flow)

### Test Scenario 2: Verify Payment Synced to GHL

After triggering a test payment (Scenario 1), wait 5–10 seconds for the webhook to fire.

1. In GHL, go to **Contacts**
2. Search for "test-paypal-2026@example.com" (or the test buyer email)
3. Verify contact record shows:
   - ✅ First name: "Test"
   - ✅ Last name: "Buyer" (or "Contact" if buyer name unavailable)
   - ✅ Email: "test-paypal-2026@example.com"

4. Go to **Pipelines** (or **Opportunities**)
5. Search for the deal/opportunity created from this payment
6. Verify:
   - ✅ Deal name includes test contact name and amount
   - ✅ Deal stage: "Closed Won" or "Payment Received"
   - ✅ Deal value: $99.99
   - ✅ Contact linked to deal

7. Go to contact record > **Activity** tab
8. Verify:
   - ✅ Email received thank you email (if configured)
   - ✅ Pipeline stage change logged
   - ✅ Custom field `PaymentStatus` = "Paid"

If all three verification steps pass, ✅ **payment sync is working!**

### Test Scenario 3: Simulate a Failed Payment

1. In PayPal Sandbox, attempt a payment with invalid data (e.g., expired test card)
2. Or manually trigger a webhook with `status: DENIED`
3. Wait 5–10 seconds for the webhook
4. In GHL, verify:
   - Contact tag `PaymentFailed` applied
   - Slack/internal notification sent
   - Contact received "Payment failed" email

### Test Scenario 4: Simulate a Refund

1. In PayPal Sandbox, refund a previous test payment
2. Wait 5–10 seconds for the webhook
3. In GHL, verify:
   - Contact `PaymentStatus` updated to "Refunded"
   - Deal stage moved to "Refunded"
   - Refund email sent to contact

---

## Phase 6: Move to Production (30 Minutes)

Once sandbox testing is complete, activate your live PayPal integration.

### Step 1: Generate Live PayPal API Credentials

1. In **[PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)**, click the **Live** tab (top-left)
2. Go to **Apps & Credentials**
3. You should see a pre-created **REST API app** (PayPal creates this automatically)
4. Click the app and copy:
   - **Live Client ID** (starts with `AV...`)
   - **Live Secret** (long alphanumeric string)
5. Store these securely (different from sandbox credentials)

### Step 2: Generate Live PayPal Access Token

1. In Postman, create a new POST request to: `https://api.paypal.com/v1/oauth2/token` (note: **no "sandbox"** in URL)
2. Add **Authorization** (Basic Auth):
   - Username: `[Your Live Client ID]`
   - Password: `[Your Live Secret]`
3. Add **Body**:
   - `grant_type: client_credentials`
4. Send the request
5. Copy the `access_token` from the response
6. Store it securely

### Step 3: Update GHL Automations to Use Live Webhook

1. In GHL, go to **Settings > Webhooks**
2. Find your `PayPal Payment Received` webhook
3. Update the webhook configuration to point to **live PayPal** (not sandbox)
4. No URL change needed; GHL webhook receiver works for both sandbox and live

### Step 4: Update Zapier to Use Live PayPal

1. In Zapier, find your PayPal Zap
2. Click **Edit**
3. In the **PayPal trigger**, reconnect your account:
   - Disconnect the sandbox account
   - Connect your **live PayPal business account**
4. Click **Test** to verify live PayPal connection
5. Turn the Zap **On**

### Step 5: Update GHL API Calls (If Using Direct API)

If you're calling GHL API directly (not via Zapier webhooks), ensure all Postman requests or API code use:
- **Live PayPal endpoint**: `https://api.paypal.com/v2/...` (not sandbox)
- **Live GHL API key**: Regenerate a new key for production (optional but recommended)

### Step 6: Production Checklist

Before going live with real payments, verify:

- [ ] Live PayPal API credentials generated and stored securely
- [ ] Live access token generated and tested in Postman
- [ ] Zapier Zap connected to **live PayPal** and **turned on**
- [ ] GHL automations **activated** (all three: successful, failed, refund)
- [ ] GHL webhook receiver configured and tested
- [ ] Sandbox test contacts deleted from production GHL account
- [ ] Email templates reviewed and tested
- [ ] Internal Slack notifications configured (optional)
- [ ] Backup payment process documented (manual payment entry if automation fails)
- [ ] Team trained on sync flow and troubleshooting

---

## Phase 7: Monitoring and Error Handling (15 Minutes)

### Common Sync Failures and Fixes

| Error | Cause | Fix #1 | Fix #2 | Fix #3 | Fix #4 | Fix #5 |
|---|---|---|---|---|---|---|
| **Webhook not firing** | PayPal webhook disabled; incorrect URL | Enable webhook in PayPal dev dashboard. Verify URL matches GHL webhook receiver endpoint. | Check PayPal **Event Log** in dev dashboard; look for delivery failures. | Resend the failed event manually from PayPal dashboard. | Verify Zapier Zap is **On**. | Check Zapier task history for errors. |
| **Contact not created in GHL** | Email field missing or malformed in webhook payload; GHL API permission missing | Verify PayPal webhook includes `payer.email_address` field. Map it correctly in Zapier. | Test PayPal API response in Postman to confirm email is present. | Check GHL API key has "Contacts" scope enabled. | Add debug logging to Zapier action to see the exact data being sent to GHL. | Manually create contact in GHL to verify Contact creation is possible. |
| **Payment amount not syncing** | Amount field mapped incorrectly; currency mismatch | In Zapier, verify `purchase_units[0].amount.value` is mapped to GHL `amount` field. | Ensure amount is numeric (e.g., 99.99, not "$99.99"). | Check decimal precision (PayPal sends 99.99, GHL expects same format). | Add currency field to deal (e.g., USD) if required. | Test with Postman to verify PayPal API returns amount correctly. |
| **Deal not created; contact created instead** | GHL automation missing "Create Deal" action; automation not triggered | Verify the `PayPal Payment Received` automation has "Create Deal" action. Activate automation. | Check automation trigger is set to correct webhook (PayPal Payment Received). | Review automation execution log (Automations > [Your automation] > Logs) to see if it ran. | If automation didn't run, check webhook delivery (PayPal dev dashboard > Event Log). | Manually create deal in GHL to verify deal creation is possible. |
| **Duplicate payments in GHL** | Webhook fired multiple times; sync triggered twice | Add conditional in automation: "Only create deal if transaction ID doesn't already exist." | Use GHL's de-duplication feature (if available) to prevent duplicate transaction IDs. | Implement idempotency key in Zapier (store transaction ID and skip re-processing). | Check PayPal Event Log to see if the same event was delivered twice. | Delete duplicate deals in GHL manually; adjust automation logic before next payment. |

### Daily Monitoring (First 2 Weeks)

1. **Check GHL Automations Log**:
   - Go to **Automations > [Your automation] > Logs**
   - Look for red error entries
   - If errors appear, resolve immediately

2. **Check Zapier Task History**:
   - In Zapier, open your PayPal Zap
   - View **Task History**
   - Count successful vs. failed tasks
   - If >5% failures, investigate

3. **Spot-Check Deals in GHL**:
   - Randomly open 3–5 deals created from PayPal payments
   - Verify amount, contact, status, and timestamp are correct

### Weekly Monitoring (After First 2 Weeks)

1. Run the same checks above once per week
2. Compare week-over-week payment volume (expected vs. actual)
3. If sync count drops >20%, investigate webhook status
4. Review error log and implement fixes

### Monthly Maintenance

1. **Rotate API credentials**: Regenerate PayPal and GHL API keys every 90 days
2. **Review PayPal event log**: Check for failed webhook deliveries
3. **Test sandbox**: Create a test payment in sandbox monthly to verify integration still works
4. **Audit pipeline**: Verify all payments are appearing as deals in the correct pipeline stage

### Manual Sync Fallback

If automated webhooks fail for a payment, manually sync:

1. In PayPal Sandbox/Live, note the transaction details:
   - Transaction ID
   - Payer email
   - Amount
   - Status
   - Timestamp

2. In GHL, manually create a contact and deal with the payment data
3. Mark deal as "Closed Won"
4. Tag contact with `ManualSync-PayPal` for later audit
5. Investigate why webhook failed and fix the underlying issue

---

## Phase 8: Advanced Customization (Optional)

### Conditional Routing Based on Payment Status

Create automations that route different customers based on payment outcome:

```
IF payment status = COMPLETED
  → Move to "Sales Follow-Up" pipeline
  → Send upsell email
  
IF payment status = PENDING
  → Move to "Awaiting Payment" stage
  → Set reminder to follow up in 24 hours
  
IF payment status = DENIED
  → Move to "Payment Failed" stage
  → Send retry payment email with link
```

### Partial Refund Handling

When a refund is issued, sync only the refunded amount (not full payment reversal):

1. In Zapier, add field: `refundAmount` (map from PayPal webhook)
2. In GHL automation, create a note: "Partial refund: ${{refundAmount}}"
3. Adjust deal value: `Deal Amount - Refund Amount`
4. Move deal to "Partially Refunded" stage

### Recurring Payment Tracking

For subscriptions or recurring charges:

1. Enable PayPal **Recurring Payments** API
2. In Zapier, map recurring payment events
3. In GHL, create a contact **subscription status** field (Active/Paused/Cancelled)
4. Trigger automations on subscription events (renewal, cancellation, failure)

### Payment Reconciliation Report

Generate a weekly report of all payments synced:

1. In GHL, create a view of all deals created in the past 7 days with tag `PayPal-Source`
2. Export as CSV
3. Compare with PayPal transaction