// Auto-link the first occurrence of known terms to internal blog posts.
// Skips text inside links, code, headings, and blockquotes.
//
// Order matters: longer/more-specific terms go FIRST so we don't accidentally
// match "HubSpot" inside "GoHighLevel vs HubSpot" before the comparison phrase
// gets a chance to be the link.
const LINKS = [
  // ----- Comparison phrases (most specific) -----
  { term: 'GoHighLevel vs ActiveCampaign', href: '/blog/2026-04-25-gohighlevel-vs-activecampaign/' },
  { term: 'GoHighLevel vs ClickFunnels',  href: '/blog/2026-04-29-gohighlevel-vs-clickfunnels/' },
  { term: 'GoHighLevel vs ConvertKit',    href: '/blog/2026-05-09-gohighlevel-vs-convertkit/' },
  { term: 'GoHighLevel vs Builderall',    href: '/blog/2026-05-12-gohighlevel-vs-builderall/' },
  { term: 'GoHighLevel vs Infusionsoft',  href: '/blog/2026-05-14-gohighlevel-vs-infusionsoft/' },
  { term: 'GoHighLevel vs Leadpages',     href: '/blog/2026-05-09-gohighlevel-vs-leadpages/' },
  { term: 'GoHighLevel vs Mailchimp',     href: '/blog/2026-05-03-gohighlevel-vs-mailchimp/' },
  { term: 'GoHighLevel vs Monday.com',    href: '/blog/2026-05-05-gohighlevel-vs-monday-com/' },
  { term: 'GoHighLevel vs Pipedrive',     href: '/blog/2026-05-07-gohighlevel-vs-pipedrive/' },
  { term: 'GoHighLevel vs Salesforce',    href: '/blog/2026-05-08-gohighlevel-vs-salesforce/' },
  { term: 'GoHighLevel vs Systeme.io',    href: '/blog/2026-05-04-gohighlevel-vs-systeme-io/' },
  { term: 'GoHighLevel vs Systeme io',    href: '/blog/2026-05-04-gohighlevel-vs-systeme-io/' },
  { term: 'GoHighLevel vs Zoho CRM',      href: '/blog/2026-05-06-gohighlevel-vs-zoho-crm/' },
  { term: 'GoHighLevel vs HubSpot',       href: '/blog/2026-04-26-gohighlevel-vs-hubspot/' },
  { term: 'GoHighLevel vs Kajabi',        href: '/blog/2026-05-04-gohighlevel-vs-kajabi/' },
  { term: 'GoHighLevel vs Kartra',        href: '/blog/2026-05-09-gohighlevel-vs-kartra/' },
  { term: 'GoHighLevel vs Lovable',       href: '/blog/2026-04-24-gohighlevel-vs-lovable/' },
  { term: 'GoHighLevel vs Keap',          href: '/blog/2026-04-27-gohighlevel-vs-keap/' },

  // ----- Topical guides -----
  { term: 'GoHighLevel pricing',              href: '/blog/2026-05-29-gohighlevel-pricing-2026-compared-to-competitors/' },
  { term: 'GoHighLevel Pro vs Unlimited',     href: '/blog/2026-05-28-gohighlevel-pro-vs-unlimited-pricing/' },
  { term: 'GoHighLevel agency pricing',       href: '/blog/2026-05-14-gohighlevel-agency-pricing-strategy-guide/' },
  { term: 'GoHighLevel white label',          href: '/blog/2026-05-15-gohighlevel-white-label-reseller-program-setup/' },
  { term: 'white-label reseller',             href: '/blog/2026-05-15-gohighlevel-white-label-reseller-program-setup/' },
  { term: 'client onboarding checklist',      href: '/blog/2026-05-25-gohighlevel-white-label-client-onboarding-checklist/' },
  { term: 'GoHighLevel automation workflows', href: '/blog/2026-05-21-gohighlevel-automation-workflows-complete-guide/' },
  { term: 'GoHighLevel Stripe integration',   href: '/blog/2026-05-22-gohighlevel-stripe-payment-integration-setup/' },
  { term: 'GoHighLevel Zapier integration',   href: '/blog/2026-05-26-gohighlevel-zapier-integration-automation-setup/' },
  { term: 'GoHighLevel Make.com',             href: '/blog/2026-05-27-gohighlevel-make-com-integration-guide/' },
  { term: 'migrate from Infusionsoft',        href: '/blog/2026-05-20-migrate-from-infusionsoft-to-gohighlevel/' },
  { term: 'GoHighLevel for personal trainers',href: '/blog/2026-05-18-gohighlevel-for-personal-trainers/' },

  // ----- Conversion targets: push readers to the booking + comparison hub -----
  { term: 'free strategy call',  href: '/book-a-call/' },
  { term: 'book a strategy call',href: '/book-a-call/' },
  { term: 'book a call',         href: '/book-a-call/' },
  { term: 'compare GoHighLevel', href: '/compare/' },

  // ----- Single-brand fallbacks (link to the relevant comparison) -----
  { term: 'ActiveCampaign', href: '/blog/2026-04-25-gohighlevel-vs-activecampaign/' },
  { term: 'ClickFunnels',   href: '/blog/2026-04-29-gohighlevel-vs-clickfunnels/' },
  { term: 'ConvertKit',     href: '/blog/2026-05-09-gohighlevel-vs-convertkit/' },
  { term: 'Builderall',     href: '/blog/2026-05-12-gohighlevel-vs-builderall/' },
  { term: 'Infusionsoft',   href: '/blog/2026-05-14-gohighlevel-vs-infusionsoft/' },
  { term: 'Leadpages',      href: '/blog/2026-05-09-gohighlevel-vs-leadpages/' },
  { term: 'Mailchimp',      href: '/blog/2026-05-03-gohighlevel-vs-mailchimp/' },
  { term: 'Monday.com',     href: '/blog/2026-05-05-gohighlevel-vs-monday-com/' },
  { term: 'Pipedrive',      href: '/blog/2026-05-07-gohighlevel-vs-pipedrive/' },
  { term: 'Salesforce',     href: '/blog/2026-05-08-gohighlevel-vs-salesforce/' },
  { term: 'Systeme.io',     href: '/blog/2026-05-04-gohighlevel-vs-systeme-io/' },
  { term: 'Zoho CRM',       href: '/blog/2026-05-06-gohighlevel-vs-zoho-crm/' },
  { term: 'HubSpot',        href: '/blog/2026-04-26-gohighlevel-vs-hubspot/' },
  { term: 'Kajabi',         href: '/blog/2026-05-04-gohighlevel-vs-kajabi/' },
  { term: 'Kartra',         href: '/blog/2026-05-09-gohighlevel-vs-kartra/' },
  { term: 'Keap',           href: '/blog/2026-04-27-gohighlevel-vs-keap/' },
];

export function remarkInternalLinks() {
  return (tree, file) => {
    // Resolve the file's own slug so we don't self-link a post to itself.
    const selfPath = (file && file.path) || '';
    const selfSlug = selfPath.match(/([^/]+)\.md$/)?.[1] || '';

    const used = new Set();
    const visit = (node, parent) => {
      if (!node) return;
      if (node.type === 'link' || node.type === 'inlineCode' || node.type === 'code' || node.type === 'heading' || node.type === 'blockquote') {
        return; // don't recurse into these
      }
      if (node.type === 'text' && parent && parent.type !== 'link') {
        for (const { term, href } of LINKS) {
          if (used.has(term)) continue;
          // Skip if the target IS this post (would self-link).
          if (selfSlug && href.includes(selfSlug)) { used.add(term); continue; }
          const idx = node.value.indexOf(term);
          if (idx === -1) continue;
          used.add(term);
          const before = node.value.slice(0, idx);
          const after = node.value.slice(idx + term.length);
          const linkNode = { type: 'link', url: href, children: [{ type: 'text', value: term }] };
          const newNodes = [];
          if (before) newNodes.push({ type: 'text', value: before });
          newNodes.push(linkNode);
          if (after) newNodes.push({ type: 'text', value: after });
          const i = parent.children.indexOf(node);
          parent.children.splice(i, 1, ...newNodes);
          return;
        }
      }
      if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
          visit(node.children[i], node);
        }
      }
    };
    visit(tree, null);
  };
}
