// Short n Sweet Digital — runtime overrides + React Bits ports (vanilla JS)
// Idempotent: tagged with data-snd-overrides so it can be detected later.
(function () {
  if (window.__SND_OVERRIDES__) return;
  window.__SND_OVERRIDES__ = true;

  // ============================================================
  // CONFIG
  // ============================================================
  var NAV_ITEMS = [
    { label: 'Home',         href: 'https://shortnsweetdigital.com/',                              external: false },
    { label: 'Services',     href: 'https://shortnsweetdigital.com/#section-ZTF8dMXlhU',           external: false },
    { label: 'Blog',         href: 'https://shortnsweetdigital.com/blog/',                         external: false },
    { label: 'Book a Call',  href: 'https://shortnsweetdigital.com/book-a-call/',                  external: false },
    { label: 'About',        href: 'https://shortnsweetdigital.com/about/',                        external: false },
    { label: 'Login',        href: 'https://app.shortnsweetdigital.com',                           external: true  },
    { label: 'LEARN',        href: 'https://www.skool.com/llmacademy/about?ref=7ec545cf11f44d1e9ebe40b09419916e', external: true  },
    { label: 'Start free trial', href: 'https://www.gohighlevel.com/?fp_ref=shortnsweet53&utm_source=site_nav&utm_medium=organic&utm_campaign=global_nav', external: true, cta: true }
  ];

  var SOCIAL_ITEMS = [
    { label: 'Facebook',  href: 'https://www.facebook.com/shortnsweetmarketing' },
    { label: 'Instagram', href: 'https://www.instagram.com/shortnsweetdigital' },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/shortnsweet-marketing/' }
  ];

  var BRAND_LOGO = 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/LHvDkOgXpZdUYdjFzBff/media/67188f8028f9aa4e4a87fa1e.webp';

  // ============================================================
  // GLOBAL CSS (animations, hover lock, BorderGlow, StaggeredMenu)
  // ============================================================
  function injectGlobalCss() {
    if (document.getElementById('snd-global-css')) return;
    var css = `
      html{scroll-behavior:smooth}

      /* ---- Hover lock for darkened cards (services etc.) ---- */
      .snd-darkened,
      .snd-darkened:hover,
      .snd-darkened:focus-within{
        background:linear-gradient(180deg,rgba(15,23,42,0.96),rgba(10,9,14,0.96))!important;
        background-color:rgba(15,23,42,0.96)!important;
        background-image:linear-gradient(180deg,rgba(15,23,42,0.96),rgba(10,9,14,0.96))!important;
      }
      .snd-darkened *,.snd-darkened *:hover,.snd-darkened:hover *{
        background:transparent!important;background-color:transparent!important;background-image:none!important;
      }
      .snd-darkened p,.snd-darkened span,.snd-darkened li,.snd-darkened td,.snd-darkened strong,.snd-darkened em,.snd-darkened div,.snd-darkened label{color:#e2e8f0!important}
      .snd-darkened h1,.snd-darkened h2,.snd-darkened h3,.snd-darkened h4,.snd-darkened h5,.snd-darkened h6{color:#ffffff!important}
      .snd-darkened:hover p,.snd-darkened:hover span,.snd-darkened:hover li,.snd-darkened:hover td,.snd-darkened:hover strong,.snd-darkened:hover em,.snd-darkened:hover div,.snd-darkened:hover label{color:#e2e8f0!important}
      .snd-darkened:hover h1,.snd-darkened:hover h2,.snd-darkened:hover h3,.snd-darkened:hover h4,.snd-darkened:hover h5,.snd-darkened:hover h6{color:#ffffff!important}
      .snd-darkened a,.snd-darkened a:hover,.snd-darkened a:visited{color:#7c95ff!important}
      .snd-darkened svg,.snd-darkened svg *,.snd-darkened i,.snd-darkened [class*="icon"]{color:#7c95ff!important;fill:#7c95ff!important;stroke:#7c95ff!important}

      /* ---- Image fade-in ---- */
      img[loading="lazy"]{opacity:0;transition:opacity .5s ease}
      img[loading="lazy"].is-loaded,img[loading="lazy"][src=""]{opacity:1}

      /* ---- Reduced motion ---- */
      @media (prefers-reduced-motion:reduce){
        html{scroll-behavior:auto}
        .snd-bg-card,.snd-bg-card *,.snd-staggered-menu *{transition:none!important;animation:none!important}
      }

      /* ============================================================
         BORDERGLOW (vanilla port)
         Apply class .snd-bg-card to any element to get the edge-glow effect.
         Cursor angle + edge proximity tracked via JS, used as CSS vars.
         ============================================================ */
      .snd-bg-card{
        --bg-edge-proximity: 0;
        --bg-cursor-angle: 45deg;
        --bg-edge-sensitivity: 30;
        --bg-glow-padding: 32px;
        --bg-glow-color: 213deg 95% 65%;
        position: relative;
      }
      .snd-bg-card > .snd-bg-edge{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        transition: opacity .25s ease-out;
        pointer-events: none;
        z-index: 1;
      }
      .snd-bg-card:not(:hover) > .snd-bg-edge{ opacity: 0; transition: opacity .6s ease-in-out; }
      /* outer edge glow only — no inner fill */
      .snd-bg-card > .snd-bg-edge{
        inset: calc(var(--bg-glow-padding) * -1);
        z-index: 1;
        -webkit-mask-image:
          conic-gradient(from var(--bg-cursor-angle) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%);
                mask-image:
          conic-gradient(from var(--bg-cursor-angle) at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%);
        opacity: calc((var(--bg-edge-proximity) - var(--bg-edge-sensitivity)) / (100 - var(--bg-edge-sensitivity)));
        mix-blend-mode: plus-lighter;
      }
      .snd-bg-card > .snd-bg-edge::before{
        content: "";
        position: absolute;
        inset: var(--bg-glow-padding);
        border-radius: inherit;
        box-shadow:
          inset 0 0 0  1px hsl(var(--bg-glow-color) / 100%),
          inset 0 0 1px 0 hsl(var(--bg-glow-color) / 60%),
          inset 0 0 3px 0 hsl(var(--bg-glow-color) / 50%),
          inset 0 0 6px 0 hsl(var(--bg-glow-color) / 40%),
          inset 0 0 15px 0 hsl(var(--bg-glow-color) / 30%),
          inset 0 0 25px 2px hsl(var(--bg-glow-color) / 20%),
          inset 0 0 50px 2px hsl(var(--bg-glow-color) / 10%),
          0 0 1px 0 hsl(var(--bg-glow-color) / 60%),
          0 0 3px 0 hsl(var(--bg-glow-color) / 50%),
          0 0 6px 0 hsl(var(--bg-glow-color) / 40%),
          0 0 15px 0 hsl(var(--bg-glow-color) / 30%),
          0 0 25px 2px hsl(var(--bg-glow-color) / 20%),
          0 0 50px 2px hsl(var(--bg-glow-color) / 10%);
      }

      /* ============================================================
         STAGGERED MENU (vanilla port)
         ============================================================ */
      .snd-staggered-menu{
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 9990; pointer-events: none;
      }
      .snd-staggered-menu *{ box-sizing: border-box; }
      .snd-sm-header{
        position: absolute; top: 0; left: 0; width: 100%;
        display: flex; align-items: center; justify-content: flex-end;
        padding: 1.1em 1.6em;
        z-index: 20;
      }
      .snd-sm-header > *{ pointer-events: auto; }
      .snd-sm-toggle{
        position: relative; display: inline-flex; align-items: center; gap: 0.5rem;
        background: rgba(10,9,14,0.55);
        backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(82,113,255,0.35);
        cursor: pointer; color: #f1f5f9;
        font-weight: 700; font-family: 'Open Sans',sans-serif;
        letter-spacing: 0.04em; text-transform: uppercase; font-size: 0.82rem;
        padding: 10px 16px; border-radius: 999px;
        transition: background .25s ease, border-color .25s ease, transform .2s ease;
      }
      .snd-sm-toggle:hover{
        background: rgba(82,113,255,0.18); border-color: rgba(82,113,255,0.6);
        transform: translateY(-1px);
      }
      .snd-sm-toggle-text{
        position: relative; display: inline-block; height: 1em; overflow: hidden; min-width: 3.6em;
      }
      .snd-sm-toggle-text-inner{
        display: flex; flex-direction: column; line-height: 1;
        transition: transform .5s cubic-bezier(.2,.8,.2,1);
      }
      .snd-sm-toggle-line{ display: block; height: 1em; line-height: 1; }
      .snd-sm-icon{
        position: relative; width: 14px; height: 14px;
        display: inline-flex; align-items: center; justify-content: center;
        transition: transform .35s cubic-bezier(.2,.8,.2,1);
      }
      .snd-sm-icon-line{
        position: absolute; left: 50%; top: 50%;
        width: 100%; height: 2px;
        background: currentColor; border-radius: 2px;
        transform: translate(-50%,-50%);
      }
      .snd-sm-icon-line-v{ transform: translate(-50%,-50%) rotate(90deg); }
      .snd-staggered-menu[data-open="true"] .snd-sm-icon{ transform: rotate(225deg); }

      .snd-sm-prelayers{
        position: absolute; top: 0; right: 0; bottom: 0;
        width: clamp(280px, 38vw, 460px);
        pointer-events: none; z-index: 5;
      }
      .snd-sm-prelayer{
        position: absolute; top: 0; right: 0; height: 100%; width: 100%;
        transform: translateX(100%);
        transition: transform .45s cubic-bezier(.2,.8,.2,1);
      }
      .snd-staggered-menu[data-open="true"] .snd-sm-prelayer:nth-child(1){ transform: translateX(0); transition-delay: 0s; }
      .snd-staggered-menu[data-open="true"] .snd-sm-prelayer:nth-child(2){ transform: translateX(0); transition-delay: 0.07s; }

      .snd-sm-panel{
        position: absolute; top: 0; right: 0;
        width: clamp(280px, 38vw, 460px); height: 100%;
        background: linear-gradient(180deg,#0a090e 0%,#0f172a 100%);
        backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
        border-left: 1px solid rgba(82,113,255,0.25);
        display: flex; flex-direction: column;
        padding: 5.5em 2.2em 2em;
        overflow-y: auto; z-index: 10;
        pointer-events: auto;
        transform: translateX(100%);
        transition: transform .55s cubic-bezier(.2,.8,.2,1);
      }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel{ transform: translateX(0); transition-delay: 0.18s; }
      .snd-sm-panel-list{
        list-style: none; margin: 0; padding: 0;
        display: flex; flex-direction: column; gap: 0.5rem;
        counter-reset: smItem;
      }
      .snd-sm-panel-item-wrap{
        position: relative; overflow: hidden; line-height: 1;
      }
      .snd-sm-panel-item{
        position: relative; display: inline-block;
        color: #f1f5f9; font-weight: 700; font-size: 2.6rem; line-height: 1.05;
        font-family: 'Open Sans',sans-serif;
        letter-spacing: -0.02em; text-transform: uppercase;
        text-decoration: none; padding-right: 1.4em;
        transition: color .25s ease;
      }
      .snd-sm-panel-item:hover{ color: #5271FF; }
      .snd-sm-panel-item-label{
        display: inline-block; will-change: transform;
        transform: translateY(140%) rotate(10deg); transform-origin: 50% 100%;
        transition: transform .8s cubic-bezier(.2,.8,.2,1);
      }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-label{ transform: translateY(0) rotate(0); }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-wrap:nth-child(1) .snd-sm-panel-item-label{ transition-delay: 0.30s; }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-wrap:nth-child(2) .snd-sm-panel-item-label{ transition-delay: 0.38s; }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-wrap:nth-child(3) .snd-sm-panel-item-label{ transition-delay: 0.46s; }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-wrap:nth-child(4) .snd-sm-panel-item-label{ transition-delay: 0.54s; }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-wrap:nth-child(5) .snd-sm-panel-item-label{ transition-delay: 0.62s; }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-wrap:nth-child(6) .snd-sm-panel-item-label{ transition-delay: 0.70s; }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-wrap:nth-child(7) .snd-sm-panel-item-label{ transition-delay: 0.78s; }
      .snd-staggered-menu[data-open="true"] .snd-sm-panel-item-wrap:nth-child(8) .snd-sm-panel-item-label{ transition-delay: 0.86s; }
      .snd-sm-panel-item.cta{
        color: #fff; font-size: 1.1rem; padding: 12px 22px; border-radius: 999px;
        background: linear-gradient(120deg,#0564D1,#5271FF);
        text-transform: uppercase; letter-spacing: 0.06em;
        margin-top: 0.5rem; align-self: flex-start;
        box-shadow: 0 12px 36px rgba(5,100,209,0.4);
      }
      .snd-sm-panel-item.cta:hover{ filter: brightness(1.08); transform: translateY(-2px); }
      .snd-sm-panel-item.cta .snd-sm-panel-item-label{ transform: none; }

      .snd-sm-socials{ margin-top: auto; padding-top: 2rem; }
      .snd-sm-socials-title{
        margin: 0 0 0.75rem; font-size: 0.78rem; font-weight: 700;
        color: #5271FF; text-transform: uppercase; letter-spacing: 0.12em;
        opacity: 0; transition: opacity .4s ease;
      }
      .snd-sm-socials-list{
        list-style: none; margin: 0; padding: 0;
        display: flex; gap: 1.2rem; flex-wrap: wrap;
      }
      .snd-sm-socials-link{
        font-size: 0.95rem; font-weight: 600; color: #cbd5e1;
        text-decoration: none; transition: color .2s ease, opacity .2s ease;
        opacity: 0; transform: translateY(20px);
      }
      .snd-sm-socials-link:hover{ color: #5271FF; }
      .snd-staggered-menu[data-open="true"] .snd-sm-socials-title{ opacity: 1; }
      .snd-staggered-menu[data-open="true"] .snd-sm-socials-link{ opacity: 1; transform: none; transition: color .2s ease, opacity .4s ease, transform .5s cubic-bezier(.2,.8,.2,1); }

      /* hide existing GHL/Astro nav once StaggeredMenu mounts */
      .snd-staggered-menu-active li.nav-menu-item,
      .snd-staggered-menu-active .nav-menu,
      .snd-staggered-menu-active .site-header nav{ display: none !important; }

      /* compact site-header (Astro) so logo stays visible */
      .snd-staggered-menu-active .site-header{ padding-right: 6.5rem; }
    `;
    var style = document.createElement('style');
    style.id = 'snd-global-css';
    style.textContent = css;
    document.head.appendChild(style);
  }
  injectGlobalCss();

  // ============================================================
  // DARKEN WHITE CARDS (existing)
  // ============================================================
  function darkenWhiteCards() {
    document.querySelectorAll('div.bg.bgCover, div.bg.bgCover.inner').forEach(function (el) {
      if (el.classList.contains('snd-darkened')) return;
      var cs = getComputedStyle(el);
      if (cs.backgroundColor !== 'rgb(255, 255, 255)') return;
      el.classList.add('snd-darkened');
      el.style.setProperty('background', 'linear-gradient(180deg, rgba(15,23,42,0.96), rgba(10,9,14,0.96))', 'important');
      el.style.setProperty('border', '1px solid rgba(5,100,209,0.28)', 'important');
      el.style.setProperty('box-shadow', '0 8px 32px rgba(0,0,0,0.5)', 'important');
      el.style.setProperty('backdrop-filter', 'blur(6px)', 'important');
      el.querySelectorAll('p,h1,h2,h3,h4,h5,h6,span,strong,em,li,td,a').forEach(function (t) { t.classList.add('snd-darkened-text'); });
    });
  }

  // ============================================================
  // BORDERGLOW: pointer tracking + auto-apply
  // ============================================================
  function attachBorderGlow(el) {
    if (el.__sndBg) return;
    el.__sndBg = true;
    el.classList.add('snd-bg-card');
    if (!el.querySelector(':scope > .snd-bg-edge')) {
      var edge = document.createElement('span');
      edge.className = 'snd-bg-edge';
      el.insertBefore(edge, el.firstChild);
    }
    el.addEventListener('pointermove', function (e) {
      var rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var cx = rect.width / 2;
      var cy = rect.height / 2;
      var dx = x - cx;
      var dy = y - cy;
      var kx = dx === 0 ? Infinity : cx / Math.abs(dx);
      var ky = dy === 0 ? Infinity : cy / Math.abs(dy);
      var edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
      var radians = Math.atan2(dy, dx);
      var degrees = radians * (180 / Math.PI) + 90;
      if (degrees < 0) degrees += 360;
      el.style.setProperty('--bg-edge-proximity', (edge * 100).toFixed(2));
      el.style.setProperty('--bg-cursor-angle', degrees.toFixed(2) + 'deg');
    });
    el.addEventListener('pointerleave', function () {
      el.style.setProperty('--bg-edge-proximity', '0');
    });
  }

  function applyBorderGlow() {
    // service / GHL darkened cards
    document.querySelectorAll('.snd-darkened').forEach(attachBorderGlow);
    // homepage blog cards
    document.querySelectorAll('.snd-blog-card').forEach(attachBorderGlow);
    // CTAs across both Astro and GHL surfaces
    document.querySelectorAll('a.cta, a.snd-bg-cta, button.snd-bg-cta, .button[role="button"], a.button, button.c-button, .snd-popup-cta, .snd-mobile-cta').forEach(attachBorderGlow);
  }

  // ============================================================
  // STAGGEREDMENU
  // ============================================================
  function buildStaggeredMenu() {
    if (document.querySelector('.snd-staggered-menu')) return;
    document.documentElement.classList.add('snd-staggered-menu-active');

    var wrap = document.createElement('div');
    wrap.className = 'snd-staggered-menu';
    wrap.setAttribute('data-position', 'right');
    wrap.setAttribute('data-open', 'false');

    // pre-layers (animated panels behind the main panel)
    var pre = document.createElement('div');
    pre.className = 'snd-sm-prelayers';
    ['#1551C5', '#5271FF'].forEach(function (c) {
      var l = document.createElement('div');
      l.className = 'snd-sm-prelayer';
      l.style.background = c;
      pre.appendChild(l);
    });
    wrap.appendChild(pre);

    // header w/ toggle
    var header = document.createElement('div');
    header.className = 'snd-sm-header';

    var btn = document.createElement('button');
    btn.className = 'snd-sm-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Open menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'snd-sm-panel');
    btn.innerHTML = `
      <span class="snd-sm-toggle-text" aria-hidden="true">
        <span class="snd-sm-toggle-text-inner">
          <span class="snd-sm-toggle-line">Menu</span>
          <span class="snd-sm-toggle-line">Close</span>
        </span>
      </span>
      <span class="snd-sm-icon" aria-hidden="true">
        <span class="snd-sm-icon-line"></span>
        <span class="snd-sm-icon-line snd-sm-icon-line-v"></span>
      </span>
    `;
    header.appendChild(btn);
    wrap.appendChild(header);

    // main panel
    var panel = document.createElement('aside');
    panel.id = 'snd-sm-panel';
    panel.className = 'snd-sm-panel';
    panel.setAttribute('aria-hidden', 'true');

    var ul = document.createElement('ul');
    ul.className = 'snd-sm-panel-list';
    ul.setAttribute('role', 'list');

    NAV_ITEMS.forEach(function (item) {
      var li = document.createElement('li');
      li.className = 'snd-sm-panel-item-wrap';
      var a = document.createElement('a');
      a.className = 'snd-sm-panel-item' + (item.cta ? ' cta' : '');
      a.href = item.href;
      a.setAttribute('aria-label', item.label);
      if (item.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      var span = document.createElement('span');
      span.className = 'snd-sm-panel-item-label';
      span.textContent = item.label;
      a.appendChild(span);
      li.appendChild(a);
      ul.appendChild(li);
    });

    panel.appendChild(ul);

    // socials
    var socials = document.createElement('div');
    socials.className = 'snd-sm-socials';
    var stitle = document.createElement('h3');
    stitle.className = 'snd-sm-socials-title';
    stitle.textContent = 'Follow';
    socials.appendChild(stitle);
    var sul = document.createElement('ul');
    sul.className = 'snd-sm-socials-list';
    SOCIAL_ITEMS.forEach(function (s) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.className = 'snd-sm-socials-link';
      a.href = s.href; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.textContent = s.label;
      li.appendChild(a);
      sul.appendChild(li);
    });
    socials.appendChild(sul);
    panel.appendChild(socials);

    wrap.appendChild(panel);
    document.body.appendChild(wrap);

    // Pure CSS class toggle — all transitions live in CSS via [data-open="true"]
    var open = false;
    var textInner = btn.querySelector('.snd-sm-toggle-text-inner');

    function setOpen(state) {
      open = state;
      wrap.setAttribute('data-open', String(state));
      btn.setAttribute('aria-expanded', String(state));
      btn.setAttribute('aria-label', state ? 'Close menu' : 'Open menu');
      panel.setAttribute('aria-hidden', String(!state));
      // swap "Menu" / "Close" by sliding the text-inner
      textInner.style.transform = state ? 'translateY(-50%)' : 'translateY(0)';
      document.body.style.overflow = state ? 'hidden' : '';
    }

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(!open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) setOpen(false);
    });
    document.addEventListener('mousedown', function (e) {
      if (!open) return;
      if (panel.contains(e.target) || btn.contains(e.target)) return;
      setOpen(false);
    });
  }

  // ============================================================
  // CHAT WIDGET (ensure it loads on Astro pages too)
  // ============================================================
  function ensureChatWidget() {
    if (document.querySelector('script[data-widget-id="67f85eaae996faa38e8f9d4a"]')) return;
    var s = document.createElement('script');
    s.src = 'https://beta.leadconnectorhq.com/loader.js';
    s.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
    s.setAttribute('data-widget-id', '67f85eaae996faa38e8f9d4a');
    s.async = true;
    document.body.appendChild(s);
  }

  // ============================================================
  // EXISTING: trust strip, mobile CTA, reviews widget, image fade-in
  // ============================================================
  function ensureTrustStrip() {
    if (document.querySelector('[data-snd-trust]')) return;
    var header = document.querySelector('header, .hl_header, nav');
    if (!header || !header.parentElement) return;
    var strip = document.createElement('div');
    strip.setAttribute('data-snd-trust', '');
    strip.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:1.5rem;padding:8px 16px;background:linear-gradient(90deg,rgba(5,100,209,0.12),rgba(82,113,255,0.12));border-bottom:1px solid rgba(5,100,209,0.25);font-family:Open Sans,-apple-system,sans-serif;font-size:0.82rem;color:#cbd5e1;text-align:center;position:relative;z-index:9991">
        <span style="display:inline-flex;align-items:center;gap:6px"><span style="color:#facc15;font-weight:700">★★★★★</span> Trusted by 100,000+ agencies on GoHighLevel</span>
        <span style="opacity:0.4">·</span>
        <span>14-day free trial</span>
        <span style="opacity:0.4">·</span>
        <span>No credit card required</span>
      </div>
    `;
    header.parentElement.insertBefore(strip, header);
  }

  function ensureMobileCta() {
    if (document.querySelector('[data-snd-mobile-cta]')) return;
    if (window.innerWidth > 720) return;
    var a = document.createElement('a');
    a.setAttribute('data-snd-mobile-cta', '');
    a.href = 'https://www.gohighlevel.com/?fp_ref=shortnsweet53&utm_source=site&utm_medium=organic&utm_campaign=mobile_sticky';
    a.rel = 'noopener'; a.target = '_blank';
    a.textContent = 'Start free trial →';
    a.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9989;text-align:center;background:linear-gradient(120deg,#0564D1,#5271FF);color:#fff;font-weight:700;padding:14px 18px;border-radius:999px;text-decoration:none;box-shadow:0 12px 32px rgba(5,100,209,0.4);font-family:Open Sans,sans-serif;font-size:0.98rem';
    document.body.appendChild(a);
  }

  function ensureReviewsWidget() {
    if (document.querySelector('[data-snd-reviews]')) return;
    if (location.pathname !== '/' && location.pathname !== '/index.html') return;
    var carousel = document.querySelector('[data-snd-blog-section]');
    if (!carousel) return;
    var section = document.createElement('section');
    section.setAttribute('data-snd-reviews', '');
    section.style.cssText = 'background:linear-gradient(180deg,#0a090e 0%,#0f172a 100%);padding:72px 20px;border-top:1px solid rgba(5,100,209,0.2)';
    section.innerHTML = `
      <div style="max-width:1100px;margin:0 auto">
        <div style="text-align:center;margin-bottom:36px">
          <p style="color:#5271FF;font-weight:700;font-size:0.85rem;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 8px">What clients say</p>
          <h2 style="color:#fff;font-size:2rem;line-height:1.2;margin:0;font-family:Open Sans,sans-serif;font-weight:800">Real reviews from real businesses</h2>
        </div>
        <div style="background:rgba(15,23,42,0.6);border:1px solid rgba(5,100,209,0.25);border-radius:18px;padding:24px;backdrop-filter:blur(6px)">
          <iframe src="https://reputationhub.site/reputation/widgets/review_widget/LHvDkOgXpZdUYdjFzBff" frameborder="0" scrolling="no" style="width:100%;min-height:520px;border:0;background:transparent" loading="lazy"></iframe>
        </div>
      </div>
    `;
    carousel.parentNode.insertBefore(section, carousel.nextSibling);
    if (!document.querySelector('script[data-snd-reviews-helper]')) {
      var s = document.createElement('script');
      s.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
      s.setAttribute('data-snd-reviews-helper', ''); s.async = true;
      document.body.appendChild(s);
    }
  }

  function tagLoadedImages() {
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      if (img.complete) img.classList.add('is-loaded');
      else img.addEventListener('load', function () { img.classList.add('is-loaded'); }, { once: true });
    });
  }

  // ============================================================
  // ORCHESTRATION
  // ============================================================
  function fix() {
    try { darkenWhiteCards(); } catch (e) {}
    try { buildStaggeredMenu(); } catch (e) {}
    try { ensureTrustStrip(); } catch (e) {}
    try { ensureMobileCta(); } catch (e) {}
    try { ensureReviewsWidget(); } catch (e) {}
    try { applyBorderGlow(); } catch (e) {}
    try { tagLoadedImages(); } catch (e) {}
    try { ensureChatWidget(); } catch (e) {}
  }

  if (document.readyState === 'complete') fix();
  else window.addEventListener('load', fix);
  setTimeout(fix, 400);
  setTimeout(fix, 1200);
  setTimeout(fix, 3000);

  // MutationObserver — narrowly scoped to header/nav so we don't fight Nuxt's
  // body-wide rehydration churn (which was causing GHL animations to misfire).
  function observe() {
    var target = document.querySelector('header, .hl_header, nav') || null;
    if (!target) return;
    var mo = new MutationObserver(function () {
      if (window.__SND_TICK__) return;
      window.__SND_TICK__ = true;
      requestAnimationFrame(function () {
        window.__SND_TICK__ = false;
        try { ensureTrustStrip(); } catch (e) {}
      });
    });
    try { mo.observe(target, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observe);
  else observe();
})();
