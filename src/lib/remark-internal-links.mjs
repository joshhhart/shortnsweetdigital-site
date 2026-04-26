// Auto-link the first occurrence of known terms to internal blog posts.
// Skips text inside links, code, headings, and blockquotes. Map below grows
// as we publish more comparison posts.
const LINKS = [
  { term: 'GoHighLevel vs HubSpot', href: '/blog/2026-04-26-gohighlevel-vs-hubspot/' },
  { term: 'GoHighLevel vs ActiveCampaign', href: '/blog/2026-04-25-gohighlevel-vs-activecampaign/' },
  { term: 'GoHighLevel vs Lovable', href: '/blog/2026-04-24-gohighlevel-vs-lovable/' },
  { term: 'HubSpot', href: '/blog/2026-04-26-gohighlevel-vs-hubspot/' },
  { term: 'ActiveCampaign', href: '/blog/2026-04-25-gohighlevel-vs-activecampaign/' },
];

export function remarkInternalLinks() {
  return (tree) => {
    const used = new Set();
    const visit = (node, parent) => {
      if (!node) return;
      if (node.type === 'link' || node.type === 'inlineCode' || node.type === 'code' || node.type === 'heading' || node.type === 'blockquote') {
        return; // don't recurse into these
      }
      if (node.type === 'text' && parent && parent.type !== 'link') {
        for (const { term, href } of LINKS) {
          if (used.has(term)) continue;
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
