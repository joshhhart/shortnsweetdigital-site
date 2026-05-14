// Build-time guard: ensure every link to gohighlevel.com carries our affiliate
// param. Catches any link the LLM (or a human) added without `fp_ref`. Also
// applies to HTML `<a>` nodes since rehype processes them as `html` nodes here.

const AFFILIATE = 'shortnsweet53';
const HOSTS = /^(?:www\.|app\.)?gohighlevel\.com$/i;

function withAffiliate(href) {
  try {
    const u = new URL(href);
    if (!HOSTS.test(u.hostname)) return href;
    if (u.searchParams.get('fp_ref')) return href;
    u.searchParams.set('fp_ref', AFFILIATE);
    return u.toString();
  } catch {
    return href;
  }
}

export function remarkAffiliateLinks() {
  return (tree) => {
    const visit = (node) => {
      if (!node) return;
      if (node.type === 'link' && typeof node.url === 'string') {
        node.url = withAffiliate(node.url);
      }
      // Catch raw HTML anchors too (markdown allows them).
      if (node.type === 'html' && typeof node.value === 'string') {
        node.value = node.value.replace(/href=("|')([^"']+)\1/gi, (_, q, href) => {
          return `href=${q}${withAffiliate(href)}${q}`;
        });
      }
      if (node.children) for (const c of node.children) visit(c);
    };
    visit(tree);
  };
}
