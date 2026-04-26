// Short n Sweet Digital — runtime overrides for the GHL pages
// Idempotent: tagged with data-snd-overrides so it can be detected later.
(function () {
  if (window.__SND_OVERRIDES__) return;
  window.__SND_OVERRIDES__ = true;

  // Canonical nav — single source of truth, also rendered into static HTML
  // by scripts/snd-nav-inject.py. The runtime guardian re-applies these if
  // Nuxt rehydration wipes them.
  var NAV_ITEMS = [
    { label: 'Home', href: 'https://shortnsweetdigital.com/', external: false },
    { label: 'Services', href: 'https://shortnsweetdigital.com/#section-ZTF8dMXlhU', external: false },
    { label: 'Pricing', href: 'https://shortnsweetdigital.com/pricing', external: false },
    { label: 'Blog', href: 'https://shortnsweetdigital.com/blog', external: false },
    { label: 'Login', href: 'https://app.shortnsweetdigital.com', external: true },
    { label: 'LEARN', href: 'https://learn.shortnsweetdigital.com', external: true }
  ];

  function darkenWhiteCards() {
    document.querySelectorAll('div.bg.bgCover, div.bg.bgCover.inner').forEach(function (el) {
      var cs = getComputedStyle(el);
      if (cs.backgroundColor !== 'rgb(255, 255, 255)') return;
      el.style.setProperty('background', 'linear-gradient(180deg, rgba(15,23,42,0.92), rgba(10,9,14,0.92))', 'important');
      el.style.setProperty('border', '1px solid rgba(5,100,209,0.28)', 'important');
      el.style.setProperty('box-shadow', '0 8px 32px rgba(0,0,0,0.5)', 'important');
      el.style.setProperty('backdrop-filter', 'blur(6px)', 'important');
      el.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span:not([style*="color"]), strong:not([style*="color"]), em, li, td, a:not([style*="color"])').forEach(function (t) {
        var tcs = getComputedStyle(t);
        var c = tcs.color;
        if (c === 'rgb(0, 0, 0)' || c === 'rgb(15, 23, 42)' || c === 'rgb(17, 24, 39)' || c === 'rgb(31, 41, 55)') {
          t.style.setProperty('color', '#f1f5f9', 'important');
        }
      });
    });
  }

  function findNavList() {
    // GHL renders nav menu items as <li class="nav-menu-item"> inside a <ul>.
    var any = document.querySelector('li.nav-menu-item');
    return any ? any.parentElement : null;
  }

  function buildNavLi(item) {
    var li = document.createElement('li');
    li.className = 'nav-menu-item';
    li.setAttribute('data-snd-nav', item.label);
    var a = document.createElement('a');
    a.href = item.href;
    a.setAttribute('aria-label', item.label);
    if (item.external) { a.target = '_blank'; a.rel = 'noreferrer noopener'; }
    a.textContent = item.label;
    li.appendChild(a);
    return li;
  }

  function ensureNavItems() {
    var ul = findNavList();
    if (!ul) return;
    // Build a map of existing labels → li, so we can preserve dropdowns
    var existing = {};
    ul.querySelectorAll('li.nav-menu-item > a').forEach(function (a) {
      var label = (a.getAttribute('aria-label') || a.textContent || '').trim();
      if (label) existing[label.toLowerCase()] = a.parentElement;
    });

    // Find a reference node — the trial CTA (button) usually sits at end. We
    // insert our items before it so the CTA stays last.
    var ctaLi = ul.querySelector('li.nav-menu-item:has(a[href*="gohighlevel.com"])') ||
                ul.querySelector('li.nav-menu-item:last-child');

    NAV_ITEMS.forEach(function (item) {
      var key = item.label.toLowerCase();
      if (existing[key]) {
        // Patch href if Nuxt rewrote it
        var a = existing[key].querySelector('a');
        if (a && a.getAttribute('href') !== item.href && (key === 'login' || key === 'learn' || key === 'blog')) {
          a.setAttribute('href', item.href);
          if (item.external) { a.target = '_blank'; a.rel = 'noreferrer noopener'; }
        }
        return;
      }
      var li = buildNavLi(item);
      if (ctaLi && ctaLi.parentElement === ul) ul.insertBefore(li, ctaLi);
      else ul.appendChild(li);
    });
  }

  function ensureTrustStrip() {
    if (document.querySelector('[data-snd-trust]')) return;
    var header = document.querySelector('header, .hl_header, nav');
    if (!header || !header.parentElement) return;
    var strip = document.createElement('div');
    strip.setAttribute('data-snd-trust', '');
    strip.innerHTML = [
      '<div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:1.5rem;padding:8px 16px;background:linear-gradient(90deg,rgba(5,100,209,0.12),rgba(82,113,255,0.12));border-bottom:1px solid rgba(5,100,209,0.25);font-family:Open Sans,-apple-system,sans-serif;font-size:0.82rem;color:#cbd5e1;text-align:center">',
      '  <span style="display:inline-flex;align-items:center;gap:6px"><span style="color:#5271FF;font-weight:700">★★★★★</span> Trusted by 100,000+ agencies on GoHighLevel</span>',
      '  <span style="opacity:0.4">·</span>',
      '  <span>14-day free trial</span>',
      '  <span style="opacity:0.4">·</span>',
      '  <span>No credit card required</span>',
      '</div>'
    ].join('');
    header.parentElement.insertBefore(strip, header);
  }

  function ensureMobileCta() {
    if (document.querySelector('[data-snd-mobile-cta]')) return;
    if (window.innerWidth > 720) return;
    var a = document.createElement('a');
    a.setAttribute('data-snd-mobile-cta', '');
    a.href = 'https://www.gohighlevel.com/?fp_ref=shortnsweet53&utm_source=site&utm_medium=organic&utm_campaign=mobile_sticky';
    a.rel = 'noopener';
    a.textContent = 'Start free trial →';
    a.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;text-align:center;background:linear-gradient(120deg,#0564D1,#5271FF);color:#fff;font-weight:700;padding:14px 18px;border-radius:999px;text-decoration:none;box-shadow:0 12px 32px rgba(5,100,209,0.4);font-family:Open Sans,sans-serif;font-size:0.98rem';
    document.body.appendChild(a);
  }

  function fix() {
    try { darkenWhiteCards(); } catch (e) {}
    try { ensureNavItems(); } catch (e) {}
    try { ensureTrustStrip(); } catch (e) {}
    try { ensureMobileCta(); } catch (e) {}
  }

  if (document.readyState === 'complete') fix();
  else window.addEventListener('load', fix);
  setTimeout(fix, 400);
  setTimeout(fix, 1200);
  setTimeout(fix, 3000);

  // MutationObserver — re-apply whenever Nuxt rehydrates the header
  function observe() {
    var header = document.querySelector('header, nav, .nav-menu, .hl_header') || document.body;
    var mo = new MutationObserver(function (muts) {
      // Cheap throttle
      if (window.__SND_NAV_TICK__) return;
      window.__SND_NAV_TICK__ = true;
      requestAnimationFrame(function () {
        window.__SND_NAV_TICK__ = false;
        try { ensureNavItems(); } catch (e) {}
      });
    });
    try { mo.observe(header, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observe);
  } else {
    observe();
  }
})();
