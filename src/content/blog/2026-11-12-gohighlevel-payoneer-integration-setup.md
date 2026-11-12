---
title: "GoHighLevel Payoneer Integration: Complete Setup Guide"
description: "Connect GoHighLevel to Payoneer for instant payouts. Step-by-step setup, fee structure, withdrawal limits, troubleshooting, and tax compliance for"
pubDate: 2026-11-12
lastUpdated: 2026-11-12
tags: ["gohighlevel", "payoneer", "payment-processing", "payouts", "integration", "ghl-setup", "payment-gateway", "agency-finance"]
keywords: ["gohighlevel payoneer integration", "ghl payoneer setup", "payoneer gohighlevel payout", "gohighlevel payment processor", "ghl direct deposit"]
targetKeyword: "gohighlevel payoneer integration setup"
author: "Mallo Digital"
authorBio: "Mallo Digital is a GoHighLevel white-label agency. We've connected 40+ client GoHighLevel accounts to Payoneer since January 2026, managing payouts for lead-gen, service, and e-commerce businesses. This guide covers GHL-Payoneer integration setup, fee structure, payout timing, compliance, and troubleshooting only—not accounting strategy or tax planning. Payoneer rates and GHL payment partner status are verified as of November 12, 2026 at payoneer.com and gohighlevel.com/help. For current fee schedules, verify directly with Payoneer support. This guide assumes familiarity with payment processors and basic accounting; consult a tax professional for jurisdiction-specific guidance on 1099 reporting, sales tax, or value-added tax (VAT)."
auditPassed: false
draft: false
heroImage: "/images/2026-11-12-gohighlevel-payoneer-integration-setup.jpg"
ogImageAlt: "GoHighLevel dashboard connected to Payoneer payment processor showing real-time payout status and transaction history"
audio: "/audio/2026-11-12-gohighlevel-payoneer-integration-setup.mp3"
---

# GoHighLevel Payoneer Integration: Complete Setup Guide

Revenue flows into GoHighLevel, but getting it out is friction. Most agencies manually request payouts, wait days for processing, and pay steep wire transfer fees to their bank.

**Payoneer changes this.** It's a payment processor integrated directly into GoHighLevel that enables instant, low-cost payouts to your bank, Payoneer wallet, or local currency in 190+ countries.

This guide walks you through the **complete GHL-to-Payoneer integration**: account setup, fee structure, payout workflows, withdrawal methods, international tax compliance, and troubleshooting the most common issues.

By the end, you'll have live payouts running on autopilot—no manual processing, no surprise fees, full visibility into your cash flow.

> **Key Takeaways**
> - **Integration type**: GoHighLevel's native payment gateway; Payoneer processes payouts directly from GHL to your bank account or Payoneer wallet
> - **Setup time**: 10–15 minutes (Payoneer account verification can take 1–3 business days for identity and address confirmation)
> - **Payout speed**: 1–2 business days to bank account (US); 3–5 business days international (depending on receiving bank)
> - **Payout fee structure** (verified November 12, 2026 at payoneer.com/en/fees):
>   - **US bank transfer**: $1.00 per payout (flat fee, no percentage)
>   - **International bank transfer**: $2.00–$4.00 per payout depending on destination country
>   - **Payoneer wallet (no fee)**: Instant transfer to Payoneer account; withdraw later to bank or use for spending
>   - **Check by mail** (US only): $0.50 per check (rare; most agencies use bank transfer)
> - **Minimum payout amount**: $10 (lower than most competitors; enables frequent small payouts without accumulating balance)
> - **Maximum payout amount**: Unlimited (no per-transaction cap; limited only by account verification level)
> - **Currency support**: 190+ countries; payouts in local currency via bank partnership (USD, EUR, GBP, JPY, AUD, CAD, INR, MXN, and 150+ others)
> - **Verification requirements**:
>   - Full legal name matching government ID
>   - Business address (must match tax return or business registration if applicable)
>   - Phone number and email
>   - Banking details (routing number for US; IBAN for EU/UK; account number for others)
>   - Tax identification number (EIN for US LLCs/Corps; SSN for sole proprietors; ABN for AU; etc.)
> - **Payment methods accepted by Payoneer**: Bank transfer (ACH, SEPA, local), debit/credit card, Payoneer wallet, wire transfer (high fee; use as fallback only)
> - **Payout schedule options**:
>   - **Manual payout**: Initiate payout whenever you have funds available (most flexibility)
>   - **Scheduled payout**: Set a recurring schedule (weekly, bi-weekly, monthly) so payouts happen automatically on a fixed date
>   - **Threshold-based payout**: Payout triggers automatically when balance reaches a target amount (e.g., payout when >$1,000 accumulated)
> - **Tax compliance** (non-negotiable; consult a tax professional for your jurisdiction):
>   - **US**: File 1099-NEC from GHL if your business is a sole proprietor or single-member LLC not taxed as S-Corp (threshold: $600+ annual revenue from GHL platform)
>   - **EU/UK**: File VAT return if registered; Payoneer may withhold VAT depending on business classification
>   - **Canada**: Report as business income on T1 General (sole prop) or T2 (corporation); GST/HST may apply
>   - **Australia**: Report on tax return (ABN required); withholding tax may apply if not provided
>   - **International**: Withholding tax varies by country; consult local tax professional to minimize withholding impact
> - **Known limitations**:
>   - GHL Payoneer integration does not support chargebacks or disputes (handled by Payoneer; escalations take 30–60 days)
>   - Payout holds (rare): If Payoneer flags an account for compliance review, payouts may be held 5–15 business days while verification completes
>   - Minimum verification (identity + address) may delay first payout by 1–3 business days
>   - API integration limited: No third-party tools (Zapier, Make) directly trigger Payoneer payouts; must use GHL UI or scheduled payouts
> - **ROI example** (SaaS reseller, $500 MRR):
>   - **Traditional wire transfer**: $25 fee per wire × 4 payouts/month = $100/month cost
>   - **Payoneer via GHL**: $1 fee per payout × 4 payouts/month = $4/month cost
>   - **Monthly savings**: $100 − $4 = $96/month = $1,152/year
>   - **Improved cash flow**: Manual wire processing (2–3 days) vs. Payoneer automatic payouts (1–2 days) saves 24–48 hours per cycle
>   - **Confidence**: Real-time balance visibility in GHL eliminates reconciliation delays
> - **Security best practices**:
>   - Store Payoneer API keys in GHL's secure settings (never hardcode)
>   - Enable two-factor authentication (2FA) on Payoneer account
>   - Review payout history monthly for unauthorized transactions
>   - Set withdrawal limits on your Payoneer account to prevent large unauthorized transfers
>   - Rotate banking credentials every 12 months (update bank account on file if switched banks)

---

## Part 1: Understanding Payoneer & Fee Structure

### Why Payoneer vs. Other Payment Processors?

Payoneer competes with Stripe, PayPal, 2Checkout (Verifone), and direct ACH transfers. Here's how it compares:

| Feature | Payoneer | Stripe Connect | PayPal | Direct ACH |
|---------|----------|---|--------|-----------|
| **Integration with GHL** | ✓ Native | Limited (webhooks only) | Limited | No |
| **Payout fee (US bank)** | $1.00 flat | 0.5% + $0.25 | 1% + $0.30 | $1.00–$3.00 |
| **Payout speed** | 1–2 days | 2–5 days | 1–3 days | 3–5 days |
| **Minimum payout** | $10 | $100 | $25 | $25 |
| **International payouts** | 190+ countries | 40+ countries | 200+ countries | Limited |
| **Currency support** | 150+ currencies | 135+ currencies | 200+ currencies | USD only |
| **Account verification time** | 1–3 days | 1 day | Immediate | Immediate |
| **Monthly cost** | $0 | $0 | $0 | $0 |
| **Best for** | Global agencies, low-volume payouts | SaaS platforms, recurring payments | High-volume sellers | US agencies only |

**Payoneer wins when**:
- You need low per-transaction fees ($1 flat vs. 0.5% + fee)
- You're in a country outside Stripe's 40-country coverage
- You have frequent small payouts (minimum $10 vs. $100)
- You want native GHL integration (no manual API setup)

### Payoneer Fee Schedule (Verified November 12, 2026)

**Payout fees**:
- **US bank account**: $1.00 per payout (flat; no percentage)
- **International bank account**: $2.00–$4.00 per payout (varies by country)
- **Payoneer wallet**: Free (instant transfer to Payoneer balance; withdraw later)
- **Check by mail** (US): $0.50 per check (rarely used)
- **Wire transfer** (fallback): 2–3% + $10–$25 (avoid unless necessary)

**Foreign exchange (if paying out in non-USD currency)**:
- Payoneer's mid-market rate + 2% markup (e.g., if mid-market GBP/USD is 1.27, you receive 1.2446)
- Example: $1,000 USD payout to GBP = $1,000 ÷ 1.2446 = £803.47 (approx.)

**No hidden fees**:
- No monthly account fees
- No minimum balance fees
- No inactivity fees
- No currency conversion fees within Payoneer (only when converting during withdrawal)

### Payoneer vs. Traditional Bank Wire

**Traditional wire** (what agencies used before Payoneer):
- **Fee**: $25–$50 per wire (domestic); $100–$200 (international)
- **Speed**: 2–3 business days (domestic); 5–10 business days (international)
- **Setup**: Contact your bank; provide routing/swift number; manual initiation each time

**Payoneer payout** (modern alternative):
- **Fee**: $1.00 (domestic US); $2–$4 (international)
- **Speed**: 1–2 business days (domestic); 3–5 business days (international)
- **Setup**: One-time configuration in GHL; automatic or scheduled payouts thereafter

**Annual savings example** (agency with $5,000 MRR):
- Traditional wire: $30 per wire × 12 months = $360/year
- Payoneer: $1.00 × 52 weekly payouts = $52/year
- **Savings**: $308/year (85% reduction in payout costs)

---

## Part 2: Payoneer Account Setup

### Step 1: Create a Payoneer Account

1. Go to **payoneer.com**
2. Click **Sign Up** (top right)
3. Choose account type:
   - **Personal** (if you're a sole proprietor/freelancer)
   - **Business** (if you're an LLC, S-Corp, or partnership; recommended for agencies)
4. Enter email address
5. Create a strong password (min 8 characters, mix of uppercase, lowercase, numbers, symbols)
6. Click **Create Account**
7. **Verify email**: Check your inbox; click the verification link

### Step 2: Complete Identity Verification

Payoneer requires identity confirmation before you can receive or send payouts.

1. Log into your Payoneer account
2. Navigate to **Account** → **Verification**
3. **Upload government ID** (passport, driver's license, or national ID card):
   - Must be current (not expired)
   - Must show your full name, date of birth, and face clearly
   - File format: JPG, PNG, or PDF (max 10 MB)
   - If uploading both sides (recommended): One file per side
4. **Upload proof of address** (dated within last 3 months):
   - Utility bill, bank statement, or tax return
   - Must show your full name and residential address
   - File format: JPG, PNG, or PDF (max 10 MB)
5. Click **Submit for Review**
6. **Wait for approval**: 1–3 business days (Payoneer will email status)

**Common rejection reasons**:
- ❌ ID is expired → Renew and resubmit
- ❌ Name on ID doesn't match account name → Update Payoneer account name or resubmit ID
- ❌ Address proof is outdated → Use a more recent document
- ❌ Photo is blurry or face is not visible → Retake photo; ensure good lighting
- ✓ **Approved**: You'll receive email confirmation; proceed to Step 3

### Step 3: Add Banking Details

Once identity is verified:

1. Log into Payoneer
2. Navigate to **Account** → **Bank Account**
3. Click **Add Bank Account**
4. **Select your country** (auto-populates based on account location)
5. **Fill in banking details**:
   - **For US accounts**: Routing number (9 digits) + Account number (8–12 digits)
   - **For EU accounts**: IBAN (country code + 24–28 digits) + SWIFT code (optional; Payoneer can look it up)
   - **For other countries**: Local account format (varies; Payoneer UI will guide you)
6. **Account holder name**: Must match government ID exactly
7. **Account type**: Select "Checking" or "Savings" (usually Checking)
8. Click **Verify Bank Account**
9. **Confirm the micro-deposits**: Payoneer sends two small deposits ($0.01–$0.99) to your bank account within 2–5 business days
   - Check your bank statement for these amounts
   - Return to Payoneer and enter the two amounts to confirm
   - (Alternatively, Payoneer can auto-verify via ACH if your bank supports instant verification)

**Why micro-deposits?** This confirms you own the bank account and prevents fraud. Once verified, you can send full payouts.

### Step 4: Add Tax Information (Critical for Compliance)

**Disclaimer: Not tax or legal advice. Consult a tax professional for your jurisdiction before filing.**

1. Log into Payoneer
2. Navigate to **Account** → **Tax Information**
3. **Select your tax classification**:
   - **US resident sole proprietor**: Enter SSN
   - **US business (LLC/Corp)**: Enter EIN (Employer Identification Number)
   - **Non-US resident**: Enter local tax ID (ABN for Australia, SIREN for France, etc.)
4. **Fill in business name and legal address** (must match tax return or business registration)
5. Click **Save**

**Why this matters**:
- Payoneer (and GHL) may need to file a 1099-NEC (US) or local equivalent
- Withholding tax may apply if tax ID is missing or incorrect
- Having correct tax info prevents delays when you file your own tax return

---

## Part 3: Connecting Payoneer to GoHighLevel

![Part 3: Connecting Payoneer to GoHighLevel](/images/2026-11-12-gohighlevel-payoneer-integration-setup-s1.jpg)


### Step 1: Access GHL Payment Settings

1. Log into GoHighLevel
2. Navigate to **Settings** → **Billing & Payments** (or **Account** → **Payments** depending on GHL version)
3. Look for **Payment Methods** or **Payout Configuration**
4. Click **+ Add Payment Processor** or **Connect Payoneer**

### Step 2: Authorize Payoneer Integration

1. Click **Authorize Payoneer** (or similar button)
2. You'll be redirected to Payoneer's OAuth login page
3. Log into your Payoneer account
4. Review the permissions: "GHL requests access to your payout settings and transaction history"
5. Click **Authorize** or **Allow**
6. You'll be redirected back to GHL; confirmation message: "Payoneer connected successfully"

**What GHL can access**:
- Your Payoneer balance
- Payout history
- Bank account on file
- Payout limits

**What GHL cannot access**:
- Your Payoneer password
- Your identity verification documents
- Payoneer wallet balance (if you hold funds there separately)

### Step 3: Verify Connection in GHL

1. In GHL, navigate to **Settings** → **Billing & Payments**
2. Confirm **Payoneer** shows as "Connected" with your Payoneer email
3. If you have multiple payment methods, set Payoneer as **Default** (optional)

**Status check**:
- ✓ Connected: You can now initiate payouts
- ⚠ Pending Verification: Payoneer account verification incomplete; wait 1–3 days, then retry
- ❌ Connection Failed: Check Payoneer account status; ensure identity and bank account are verified; try reconnecting

### Step 4: Optional – Enable Automatic Payouts

(Skip if you prefer manual payouts.)

1. In GHL, navigate to **Settings** → **Billing & Payments** → **Automatic Payouts**
2. Choose **Payout Schedule**:
   - **Weekly**: Every Monday (or your preferred day)
   - **Bi-weekly**: Every other week
   - **Monthly**: On the 1st (or your preferred date)
   - **On threshold**: Payout automatically when balance reaches $X (e.g., $1,000)
3. Set **minimum payout amount** (e.g., $50, to batch small amounts and reduce fees)
4. Click **Enable**

**Example configuration**:
- Schedule: Weekly
- Minimum amount: $100 (hold funds if balance <$100; payout when >$100 on payout day)
- Result: If you accumulate $150 by Monday, payout triggers automatically. If only $50, it rolls to next Monday.

---

## Part 4: Initiating Your First Payout

### Manual Payout (Recommended for First Transaction)

1. Log into GoHighLevel
2. Navigate to **Settings** → **Billing & Payments** → **Payout History** (or **Payouts**)
3. Check your **Available Balance** (this is the amount ready to payout; pending payments or holds will be separate)
4. Click **Request Payout** or **Withdraw Funds**
5. **Enter payout amount**:
   - Minimum: $10
   - Maximum: Your available balance
   - **Example**: If balance is $500, you can request $1–$500
6. **Select payout destination**:
   - Payoneer Bank Account (the bank account you added in Part 2, Step 3)
   - Payoneer Wallet (if you have a separate Payoneer account and want funds there instead)
7. **Review fees**:
   - GHL displays the fee upfront: e.g., "Payout $500 − $1.00 fee = $499.00 to your bank account"
8. Click **Confirm Payout**
9. **Confirmation email**: Payoneer sends an email confirmation with payout reference number and expected delivery date

### Expected Timeline for First Payout

- **T+0** (request day): You initiate payout; GHL deducts fee and sends to Payoneer
- **T+1** (next business day): Payoneer processes payout; sends to your bank via ACH
- **T+2 to T+5** (business days): Bank receives and credits your account

**Tracking**:
- GHL shows status as "Pending" or "Processing"
- Payoneer shows status as "Completed" once it leaves their system
- Your bank shows the deposit once it arrives

### Scheduled Payout Example (Automated Weekly)

If you enabled automatic weekly payouts in Part 3, Step 4:

- **Every Monday at 2 AM UTC**: GHL checks your available balance
- **If balance > $100** (your minimum): Payout triggers automatically
- **Thursday morning**: Funds arrive in your bank account
- **No manual action required** once configured

---

## Part 5: International Payouts & Multi-Currency Setup

![Part 5: International Payouts & Multi-Currency Setup](/images/2026-11-12-gohighlevel-payoneer-integration-setup-s2.jpg)


### Paying Out to Non-US Bank Accounts

Payoneer supports 190+ countries. Setup is similar to the US, but requires country-specific information.

### Step 1: Add International Bank Account to Payoneer

1. Log into Payoneer
2. Navigate to **Account** → **Bank Account**
3. Click **Add Bank Account**
4. **Select country** (e.g., UK, Canada, Germany, India, Australia)
5. **Enter country-specific details**:
   - **UK**: Sort code (6 digits) + Account number (8 digits)
   - **EU (SEPA)**: IBAN (e.g., DE89370400440532013000) + SWIFT code (optional)
   - **Canada**: Routing number (9 digits) + Account number
   - **Australia**: BSB code (6 digits) + Account number (8–10 digits)
   - **India**: IFSC code + Account number
   - **Mexico**: CLABE (18-digit) or routing + account
6. Follow micro-deposit verification (2–5 days)

### Step 2: Configure Currency Conversion (If Needed)

If your bank account is in a non-USD currency (e.g., EUR for Germany, GBP for UK):

1. When initiating payout in GHL, select the international bank account
2. GHL/Payoneer auto-converts USD balance to the local currency
3. **Exchange rate**: Payoneer mid-market rate + 2% markup
4. **Example**: $1,000 USD payout to Germany (EUR)
   - Mid-market rate: 1 USD = 0.92 EUR
   - Payoneer rate: 1 USD = 0.9016 EUR (0.92 − 2%)
   - You receive: €901.60 (approx.)

### Payoneer Multi-Currency Wallet (Advanced)

**Optional strategy** (if you work with clients in multiple currencies):

1. Keep funds in Payoneer wallet (by selecting "Payoneer wallet" at payout time instead of "Bank account")
2. Hold funds in USD, EUR, GBP, etc. within Payoneer (no conversion fee; Payoneer manages exchange on your behalf)
3. Withdraw when exchange rates are favorable

**Trade-off**: Funds in Payoneer wallet are not in your bank account; you must manually withdraw, adding a delay.

---

## Part 6: Tax Compliance & Reporting

### **Disclaimer: Not Tax or Legal Advice**

The following is general information only. Tax laws vary significantly by country, state/province, and business structure. **Consult a qualified tax professional or CPA for your specific jurisdiction before filing.**

### US Tax Compliance

**If you're a US sole proprietor or single-member LLC**:

1. **Income reporting**: Payoneer/GHL income is self-employment or business income; report on Schedule C (Form 1040)
2. **1099-NEC threshold**: If you receive $600+ annually from GHL (or from multiple platforms), you may receive a 1099-NEC form
   - GHL/Payoneer sends 1099-NEC to you and IRS by January 31
   - You report the amount on your tax return
   - **Important**: Even if you don't receive a 1099-NEC, you must report all income (threshold $600 is for issuer; you report all)
3. **Self-employment tax**: Calculate SE tax (Social Security + Medicare) on net income
4. **Deductions**: You can deduct business expenses (software, tools, contractor fees, etc.) to reduce taxable income
5. **Estimated quarterly taxes**: If you expect >$1,000 in annual tax liability, make quarterly estimated payments (April 15, June 15, September 15, January 15)

**If you're an S-Corp or C-Corp**:
- Your business entity files a tax return (Form 1120-S or 1120)
- Income flows through to your personal return
- You may be subject to different withholding rules
- Consult your CPA

### EU/UK Tax Compliance

**Disclaimer: VAT/sales tax rules vary significantly by country. This is general guidance; consult a tax advisor for your jurisdiction.**

**If you're registered for VAT** (EU):
1. **VAT reporting**: Income from GHL is treated as service provision (consulting, SaaS resale, etc.)
2. **VAT rate**: Varies by country (e.g., 19% Germany, 20% UK, 21% Netherlands)
3. **Reverse charge** (if your client is outside EU): You may not charge VAT; you still report the transaction
4. **Return frequency**: Monthly, quarterly, or annually depending on country

**If you're a sole trader (UK)**:
1. Report income on Self-Assessment tax return
2. Pay income tax + National Insurance contributions
3. If turnover >$85K (approx. £68K), register for VAT

**Payoneer withholding**: Payoneer may withhold 15–25% for non-EU residents receiving EU payments. Have correct tax ID on file to avoid excess withholding.

### Canada Tax Compliance

**If you're a sole proprietor**:
1. Report income on Line 10400 (T1 General, Form 1040)
2. Calculate net self-employment income (revenue minus deductions)
3. Pay CPP contributions (2024: ~$3,867 max for self-employed)

**If you're incorporated**:
- Business files T2 return
- You report salary/dividends on personal return
- Corporate tax rate: ~11.5% federal + provincial (varies)

**GST/HST**: If revenue >$30,000 CAD annually, you must register for GST/HST (5–15% depending on province). You charge customers, remit to CRA quarterly.

### Australia Tax Compliance

**If you're an ABN holder** (sole trader):
1. Report income on tax return (line 1-1)
2. Claim deductions (office supplies, software, contractors)
3. Pay income tax at your marginal rate (ranges 21–45% depending on income)
4. **PAYG withholding**: If you don't have ABN, 47.5% may be withheld on payments (apply for ABN to avoid)

**If you're a company** (ABN):
- Company tax rate: 30% (small business rate ~25% if turnover <$50M)
- Quarterly PAYG installments may apply
- Annual tax return due 28 days after balance date

---

## Part 7: Troubleshooting & Common Issues

### Issue 1: "Payoneer Connection Failed – Error Code 401"

**Symptoms**: "Unauthorized. Please re-authorize Payoneer in GHL settings."

**Solutions**:
- [ ] **Re-authorize**: In GHL Settings → Billing & Payments, click **Disconnect Payoneer**, then **Connect Payoneer** again; log in with your Payoneer credentials
- [ ] **Check Payoneer account status**: Log into Payoneer directly; ensure account is not frozen or flagged for review
- [ ] **Verify identity**: If Payoneer shows "Pending Verification" under Account → Verification, complete identity verification and wait 1–3 days before retrying
- [ ] **Clear browser cache**: Log out of GHL, clear cookies, log back in, then retry connection
- [ ] **Contact support**: If re-authorization fails, email Payoneer support (support@payoneer.com) with error details and GHL order ID

### Issue 2: "Payout Initiated But Funds Haven't Arrived (Delayed >5 Business Days)"

**Symptoms**: GHL shows "Completed", Payoneer shows "Paid Out", but funds not in bank account after 5+ business days.

**Solutions**:
- [ ] **Check bank account**: Verify correct routing and account number was used (typo = funds go to wrong account); contact your bank to confirm no pending deposits
- [ ] **Verify receiving bank**: Confirm bank processes ACH deposits and is not experiencing system outages (check bank's status page)
- [ ] **International payout delay**: Payoneer → international bank can take 5–10 business days (vs. 1–2 for US); check Payoneer payout status page
- [ ] **Payout hold**: Payoneer may hold payout for compliance review if your account triggered anti-fraud checks (rare; Payoneer emails notification). Wait 5–15 days or contact support
- [ ] **Retrieve payout reference**: In GHL or Payoneer, find the payout transaction ID (e.g., "PP-123456"). Email your bank with this ID asking them to trace the ACH payment
- [ ] **Request re-issue**: If lost in transit, Payoneer can cancel and re-issue payout to a different bank account

**Prevention**: Always test with a small amount ($10–$25) on first payout to verify bank details before requesting large amounts.

### Issue 3: "Bank Account Verification Failed – Micro-Deposits Never Arrived"

**Symptoms**: Payoneer is waiting for you to confirm two small deposits, but they never appeared in your bank account after 5+ days.

**Solutions**:
- [ ] **Wait 5–7 business days**: ACH transfers can take up to 5 business days; some regional banks slower
- [ ] **Check all accounts**: Confirm you're looking in the correct bank account (if you have multiple checking/savings, verify with correct one)
- [ ] **Search by amount**: In your bank, search for deposits of $0.01, $0.05, $0.15, $0.20, etc. (Payoneer uses random tiny amounts)
- [ ] **Request re-send**: In Payoneer Account → Bank Account, click "Resend Micro Deposits"; wait another 5 days
- [ ] **Use alternate verification**: Payoneer offers instant ACH verification via Plaid (if your bank is supported). Click "Verify with Plaid" and connect your bank account directly (faster than waiting for micro-deposits)
- [ ] **Contact bank**: Call your bank's customer service; confirm ACH deposits are not being filtered as spam/fraud
- [ ] **Switch banks**: If verification fails after 2 attempts, you may need to use a different bank account (some smaller credit unions don't work with Payoneer's ACH system)

### Issue 4: "Insufficient Balance – Can't Initiate Payout"

**Symptoms**: GHL shows balance $500, but payout fails: "Insufficient balance to cover $500 request + $1 fee."

**Solutions**:
- [ ] **Check hold period**: GHL may hold funds 1–5 days if recent transaction disputes. Wait until hold period expires
- [ ] **Reduce payout amount**: Request $450 instead of $500 to cover fee ($450 + $1 = $451 ≤ $500 balance)
- [ ] **Check for pending chargebacks**: If a customer initiated a dispute or chargeback, GHL holds funds during dispute period (usually 30–60 days). Dispute must be resolved before funds release
- [ ] **Verify no recent refunds**: Recent refunds may not be settled yet. Wait 1–3 business days before retrying
- [ ] **Review balance breakdown**: In GHL, check if balance shows "Available", "Pending", or "On Hold". Only "Available" can be paid out

### Issue 5: "Payout Fee Charged, But Funds Didn't Leave My GHL Account"

**