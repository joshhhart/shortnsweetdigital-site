// Short n Sweet Digital — runtime overrides for the GHL pages
// Idempotent: tagged with data-snd-overrides so it can be detected later.
(function () {
  if (window.__SND_OVERRIDES__) return;
  window.__SND_OVERRIDES__ = true;

  // -- Inject brand-wide animations + polish CSS once --
  function injectGlobalCss() {
    if (document.getElementById('snd-global-css')) return;
    var css = [
      'html{scroll-behavior:smooth}',
      // Lock darkened-card hover state so GHL\'s default white-on-hover
      // doesn\'t make the recolored text unreadable.
      '.snd-darkened,.snd-darkened *:hover,.snd-darkened:hover{background:linear-gradient(180deg,rgba(15,23,42,0.92),rgba(10,9,14,0.92))!important;background-color:rgba(15,23,42,0.92)!important}',
      '.snd-darkened:hover{border-color:rgba(82,113,255,0.55)!important;box-shadow:0 16px 44px rgba(5,100,209,0.35)!important;transform:translateY(-3px)!important;transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease}',
      '.snd-darkened-text,.snd-darkened-text:hover,.snd-darkened *:hover{color:#f1f5f9!important}',
      '.snd-darkened a,.snd-darkened a:hover{color:#7c95ff!important}',
      '.snd-darkened svg,.snd-darkened i,.snd-darkened [class*="icon"]{color:#7c95ff!important;fill:#7c95ff!important}',
      // scroll-reveal base
      '[data-snd-reveal]{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.8,.2,1),transform .8s cubic-bezier(.2,.8,.2,1)}',
      '[data-snd-reveal].is-visible{opacity:1;transform:none}',
      '@media (prefers-reduced-motion:reduce){[data-snd-reveal]{opacity:1;transform:none;transition:none}}',
      // brand button polish across GHL pages
      'a.button,button.c-button,.button[role="button"]{transition:transform .18s ease,box-shadow .18s ease,filter .18s ease!important}',
      'a.button:hover,button.c-button:hover,.button[role="button"]:hover{transform:translateY(-2px)!important;box-shadow:0 12px 32px rgba(5,100,209,0.35)!important;filter:brightness(1.06)!important}',
      // links in nav: subtle underline reveal
      'li.nav-menu-item > a{position:relative;transition:color .15s ease}',
      'li.nav-menu-item > a:not([style*="background"])::after{content:"";position:absolute;left:12px;right:12px;bottom:2px;height:2px;background:linear-gradient(90deg,#0564D1,#5271FF);transform:scaleX(0);transform-origin:left;transition:transform .25s ease}',
      'li.nav-menu-item > a:hover::after{transform:scaleX(1)}',
      // image cards fade-in on load
      'img[loading="lazy"]{opacity:0;transition:opacity .5s ease}',
      'img[loading="lazy"].is-loaded,img[loading="lazy"][src=""]{opacity:1}',
      // gradient text utility
      '.snd-gradient-text{background:linear-gradient(120deg,#5271FF,#0564D1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}',
      // subtle aurora behind hero text
      '@keyframes snd-aurora{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(20px,-10px) scale(1.05)}}',
      '@keyframes snd-fade-in-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}',
      '.snd-blog-card{animation:snd-fade-in-up .6s cubic-bezier(.2,.8,.2,1) both}',
      // counter pop
      '@keyframes snd-pop{0%{transform:scale(.85);opacity:0}60%{transform:scale(1.05);opacity:1}100%{transform:scale(1)}}'
    ].join('\n');
    var style = document.createElement('style');
    style.id = 'snd-global-css';
    style.textContent = css;
    document.head.appendChild(style);
  }
  injectGlobalCss();

  // Scroll-reveal observer for any [data-snd-reveal] elements
  function observeReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-snd-reveal]').forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('[data-snd-reveal]').forEach(function (el) { io.observe(el); });
  }

  // Auto-tag major sections for reveal
  function autoTagReveal() {
    document.querySelectorAll('section, .c-section').forEach(function (el, i) {
      if (i === 0) return; // skip hero
      if (!el.hasAttribute('data-snd-reveal')) el.setAttribute('data-snd-reveal', '');
    });
  }

  // Lazy image fade-in
  function tagLoadedImages() {
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      if (img.complete) img.classList.add('is-loaded');
      else img.addEventListener('load', function () { img.classList.add('is-loaded'); }, { once: true });
    });
  }

  // Canonical nav — single source of truth. The runtime guardian wipes any
  // GHL/Nuxt-rendered items and re-renders this list every time Nuxt
  // rehydrates the header.
  var NAV_ITEMS = [
    { label: 'Home',         href: 'https://shortnsweetdigital.com/',                              external: false },
    { label: 'Services',     href: 'https://shortnsweetdigital.com/#section-ZTF8dMXlhU',           external: false },
    { label: 'Blog',         href: 'https://shortnsweetdigital.com/blog/',                         external: false },
    { label: 'Book a Call',  href: 'https://shortnsweetdigital.com/book-a-call/',                  external: false },
    { label: 'Login',        href: 'https://app.shortnsweetdigital.com',                           external: true  },
    { label: 'LEARN',        href: 'https://learn.shortnsweetdigital.com',                         external: true  },
    { label: 'Start free trial', href: 'https://www.gohighlevel.com/?fp_ref=shortnsweet53&utm_source=site_nav&utm_medium=organic&utm_campaign=global_nav', external: true, cta: true }
  ];

  function darkenWhiteCards() {
    document.querySelectorAll('div.bg.bgCover, div.bg.bgCover.inner').forEach(function (el) {
      if (el.classList.contains('snd-darkened')) return; // already done
      var cs = getComputedStyle(el);
      if (cs.backgroundColor !== 'rgb(255, 255, 255)') return;
      el.classList.add('snd-darkened');
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
        t.classList.add('snd-darkened-text');
      });
    });
  }

  function findNavList() {
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
    if (item.cta) {
      a.style.cssText = 'background:linear-gradient(120deg,#0564D1,#5271FF);color:#fff!important;padding:8px 18px;border-radius:999px;font-weight:700;text-decoration:none;display:inline-block';
    }
    li.appendChild(a);
    return li;
  }

  // Replace the entire nav UL contents with our canonical list. Nuxt-rendered
  // items get wiped on every pass.
  function rebuildNav() {
    var ul = findNavList();
    if (!ul) return;
    // Already correct? cheap guard to avoid layout thrash
    var existing = ul.querySelectorAll('li.nav-menu-item');
    var sndCount = ul.querySelectorAll('li[data-snd-nav]').length;
    if (existing.length === NAV_ITEMS.length && sndCount === NAV_ITEMS.length) return;

    // Clear all nav items (drop GHL's, drop our prior renders)
    Array.prototype.slice.call(existing).forEach(function (li) { li.remove(); });

    NAV_ITEMS.forEach(function (item) {
      ul.appendChild(buildNavLi(item));
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
      '  <span style="display:inline-flex;align-items:center;gap:6px"><span style="color:#facc15;font-weight:700">★★★★★</span> Trusted by 100,000+ agencies on GoHighLevel</span>',
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
    a.target = '_blank';
    a.textContent = 'Start free trial →';
    a.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;text-align:center;background:linear-gradient(120deg,#0564D1,#5271FF);color:#fff;font-weight:700;padding:14px 18px;border-radius:999px;text-decoration:none;box-shadow:0 12px 32px rgba(5,100,209,0.4);font-family:Open Sans,sans-serif;font-size:0.98rem';
    document.body.appendChild(a);
  }

  // Inject the leadconnector reviews widget on the homepage, just before the
  // blog carousel section.
  function ensureReviewsWidget() {
    if (document.querySelector('[data-snd-reviews]')) return;
    if (location.pathname !== '/' && location.pathname !== '/index.html') return;
    var carousel = document.querySelector('[data-snd-blog-section]');
    if (!carousel) return;
    var section = document.createElement('section');
    section.setAttribute('data-snd-reviews', '');
    section.style.cssText = 'background:linear-gradient(180deg,#0a090e 0%,#0f172a 100%);padding:72px 20px;border-top:1px solid rgba(5,100,209,0.2)';
    section.innerHTML = [
      '<div style="max-width:1100px;margin:0 auto">',
      '  <div style="text-align:center;margin-bottom:36px">',
      '    <p style="color:#5271FF;font-weight:700;font-size:0.85rem;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 8px">What clients say</p>',
      '    <h2 style="color:#fff;font-size:2rem;line-height:1.2;margin:0;font-family:Open Sans,sans-serif;font-weight:800">Real reviews from real businesses</h2>',
      '  </div>',
      '  <div style="background:rgba(15,23,42,0.6);border:1px solid rgba(5,100,209,0.25);border-radius:18px;padding:24px;backdrop-filter:blur(6px)">',
      '    <iframe src="https://reputationhub.site/reputation/widgets/review_widget/LHvDkOgXpZdUYdjFzBff" frameborder="0" scrolling="no" style="width:100%;min-height:520px;border:0;background:transparent" loading="lazy"></iframe>',
      '  </div>',
      '</div>'
    ].join('');
    carousel.parentNode.insertBefore(section, carousel.nextSibling);
    // load the widget helper script
    if (!document.querySelector('script[data-snd-reviews-helper]')) {
      var s = document.createElement('script');
      s.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
      s.setAttribute('data-snd-reviews-helper', '');
      s.async = true;
      document.body.appendChild(s);
    }
  }

  function fix() {
    try { darkenWhiteCards(); } catch (e) {}
    try { rebuildNav(); } catch (e) {}
    try { ensureTrustStrip(); } catch (e) {}
    try { ensureMobileCta(); } catch (e) {}
    try { ensureReviewsWidget(); } catch (e) {}
    try { autoTagReveal(); } catch (e) {}
    try { observeReveal(); } catch (e) {}
    try { tagLoadedImages(); } catch (e) {}
  }

  if (document.readyState === 'complete') fix();
  else window.addEventListener('load', fix);
  setTimeout(fix, 400);
  setTimeout(fix, 1200);
  setTimeout(fix, 3000);

  // MutationObserver — re-apply whenever Nuxt rehydrates anything we manage
  function observe() {
    var target = document.body;
    var mo = new MutationObserver(function () {
      if (window.__SND_NAV_TICK__) return;
      window.__SND_NAV_TICK__ = true;
      requestAnimationFrame(function () {
        window.__SND_NAV_TICK__ = false;
        try { rebuildNav(); } catch (e) {}
        try { ensureTrustStrip(); } catch (e) {}
        try { ensureReviewsWidget(); } catch (e) {}
      });
    });
    try { mo.observe(target, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observe);
  else observe();
})();
