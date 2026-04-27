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
      .snd-darkened a,.snd-darkened a:hover,.snd-darkened a:visited{color:#3b9bff!important}
      .snd-darkened svg,.snd-darkened svg *,.snd-darkened i,.snd-darkened [class*="icon"]{color:#3b9bff!important;fill:#3b9bff!important;stroke:#3b9bff!important}

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
        border: 1px solid rgba(24,139,246,0.35);
        cursor: pointer; color: #f1f5f9;
        font-weight: 700; font-family: 'Open Sans',sans-serif;
        letter-spacing: 0.04em; text-transform: uppercase; font-size: 0.82rem;
        padding: 10px 16px; border-radius: 999px;
        transition: background .25s ease, border-color .25s ease, transform .2s ease;
      }
      .snd-sm-toggle:hover{
        background: rgba(24,139,246,0.18); border-color: rgba(24,139,246,0.6);
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
        border-left: 1px solid rgba(24,139,246,0.25);
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
      .snd-sm-panel-item:hover{ color: #188bf6; }
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
        background: linear-gradient(120deg,#0564D1,#188bf6);
        text-transform: uppercase; letter-spacing: 0.06em;
        margin-top: 0.5rem; align-self: flex-start;
        box-shadow: 0 12px 36px rgba(5,100,209,0.4);
      }
      .snd-sm-panel-item.cta:hover{ filter: brightness(1.08); transform: translateY(-2px); }
      .snd-sm-panel-item.cta .snd-sm-panel-item-label{ transform: none; }

      .snd-sm-socials{ margin-top: auto; padding-top: 2rem; }
      .snd-sm-socials-title{
        margin: 0 0 0.75rem; font-size: 0.78rem; font-weight: 700;
        color: #188bf6; text-transform: uppercase; letter-spacing: 0.12em;
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
      .snd-sm-socials-link:hover{ color: #188bf6; }
      .snd-staggered-menu[data-open="true"] .snd-sm-socials-title{ opacity: 1; }
      .snd-staggered-menu[data-open="true"] .snd-sm-socials-link{ opacity: 1; transform: none; transition: color .2s ease, opacity .4s ease, transform .5s cubic-bezier(.2,.8,.2,1); }

      /* hide existing GHL/Astro nav once StaggeredMenu mounts */
      .snd-staggered-menu-active li.nav-menu-item,
      .snd-staggered-menu-active .nav-menu,
      .snd-staggered-menu-active .site-header nav{ display: none !important; }

      /* compact site-header (Astro) so logo stays visible */
      .snd-staggered-menu-active .site-header{ padding-right: 6.5rem; }

      /* Hide GHL footer / broken sections so our JS-injected replacements take over.
         Targets the container + section IDs we replaced; Nuxt may re-render them
         after rehydration so display:none ensures they stay invisible. */
      footer.snd-replaced-hidden,
      [data-snd-replaced="tirwP9DkOq"],
      #section-tirwP9DkOq,
      .section-tirwP9DkOq,
      /* Second leftover GHL footer (copyright col + empty col + GHL social icons col) */
      #section-glojOv1U,
      .section-glojOv1U,
      #row-OeWezQhjC,
      #col-tzRGTq4su,
      #col-HPlTzlIQ,
      #col-oMse1FNzAF,
      /* Old GHL "WATCH DEMO + FREE VISIBILITY REPORT" buttons section (duplicate
         of our replacement CTA section). ROI Calculator + reviews + blog
         carousel are intentionally LEFT VISIBLE per user request. */
      #section-OV7erCqiVF,
      .section-OV7erCqiVF{ display: none !important; }

      /* Kill GHL\'s native glow-gradient-child rotating effect on service
         cards (the blue rotating fill that was overriding our dark theme).
         The gradient stays available for opt-in CTAs via .snd-rotating-glow. */
      .glow-gradient-child::before,
      .glow-gradient-child::after,
      .snd-darkened.glow-gradient-child::before,
      .snd-darkened.glow-gradient-child::after,
      .snd-darkened .glow-gradient-child::before,
      .snd-darkened .glow-gradient-child::after{ display: none !important; content: none !important; }

      /* Force-hide every GHL popup (logo click, exit popup, etc.) so the
         "old popup" the user reported never appears. */
      .hl_main_popup,
      [class*="hl_main_popup"],
      #hl_main_popup,
      [id*="hl_main_popup"],
      #overlay,
      .popup-body{ display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }

      /* Star Border (vanilla port of React Bits <StarBorder/>). Two
         glowing orbs sweep horizontally across the perimeter — one along
         the bottom edge, one along the top — creating an animated border
         shimmer. Applied to service cards and CTAs (NOT menu items). */
      .snd-star-border{
        position: relative;
        overflow: hidden;
        isolation: isolate;
      }
      .snd-star-border > .snd-sb-bottom,
      .snd-star-border > .snd-sb-top{
        position: absolute;
        width: 300%;
        height: 50%;
        background: radial-gradient(circle, rgba(24,139,246,0.95) 0%, rgba(82,113,255,0.35) 8%, rgba(24,139,246,0) 14%);
        pointer-events: none;
        z-index: 0;
        opacity: 0.9;
      }
      .snd-star-border > .snd-sb-bottom{
        bottom: -12px; right: -250%;
        border-radius: 50%;
        animation: snd-sb-bottom 6s linear infinite alternate;
      }
      .snd-star-border > .snd-sb-top{
        top: -12px; left: -250%;
        border-radius: 50%;
        animation: snd-sb-top 6s linear infinite alternate;
      }
      .snd-star-border > *:not(.snd-sb-top):not(.snd-sb-bottom){ position: relative; z-index: 1; }
      @keyframes snd-sb-bottom { to { transform: translateX(-66.66%); } }
      @keyframes snd-sb-top { to { transform: translateX(66.66%); } }
      @media (prefers-reduced-motion: reduce){
        .snd-star-border > .snd-sb-bottom,
        .snd-star-border > .snd-sb-top{ animation: none; opacity: 0; }
      }

      /* JS-injected enterprise SaaS footer (lives outside #__nuxt so Nuxt can\'t wipe it) */
      footer[data-snd-footer]{ position: relative; z-index: 50; }

      /* Scroll-reveal — opt-in only via [data-snd-reveal] attribute */
      [data-snd-reveal]{ opacity: 0; transform: translateY(20px); transition: opacity .7s cubic-bezier(.2,.8,.2,1), transform .7s cubic-bezier(.2,.8,.2,1); }
      [data-snd-reveal].is-visible{ opacity: 1; transform: none; }
      @media (prefers-reduced-motion: reduce){ [data-snd-reveal]{ opacity: 1; transform: none; transition: none; } }
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
  function isWhiteBg(cs) {
    var c = cs.backgroundColor;
    if (c === 'rgb(255, 255, 255)') return true;
    if (c === 'rgba(255, 255, 255, 1)') return true;
    // also catch near-whites GHL uses (e.g. #fafafa, #f5f5f5)
    var m = c.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return false;
    return +m[1] >= 245 && +m[2] >= 245 && +m[3] >= 245;
  }
  function darken(el) {
    if (!el || el.classList.contains('snd-darkened')) return;
    el.classList.add('snd-darkened');
    el.style.setProperty('background', 'linear-gradient(180deg, rgba(15,23,42,0.96), rgba(10,9,14,0.96))', 'important');
    el.style.setProperty('border', '1px solid rgba(5,100,209,0.28)', 'important');
    el.style.setProperty('box-shadow', '0 8px 32px rgba(0,0,0,0.5)', 'important');
    el.style.setProperty('backdrop-filter', 'blur(6px)', 'important');
    el.querySelectorAll('p,h1,h2,h3,h4,h5,h6,span,strong,em,li,td,a').forEach(function (t) { t.classList.add('snd-darkened-text'); });
  }
  function darkenWhiteCards() {
    // Original GHL card pattern
    document.querySelectorAll('div.bg.bgCover, div.bg.bgCover.inner').forEach(function (el) {
      var cs = getComputedStyle(el);
      if (isWhiteBg(cs)) darken(el);
    });
    // Broader GHL column pattern: every .col-*  >  .inner with a white bg
    document.querySelectorAll('[class*="col-"] > .inner').forEach(function (el) {
      var cs = getComputedStyle(el);
      if (isWhiteBg(cs)) darken(el);
    });
    // Sometimes the white bg is on the column root itself (col-*) not .inner
    document.querySelectorAll('[class*="col-"]').forEach(function (el) {
      var cs = getComputedStyle(el);
      if (isWhiteBg(cs)) darken(el);
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

  function attachStarBorder(el) {
    if (!el || el.__sndSb) return;
    // Exclude all menu items / hamburger / nav-related elements.
    if (el.closest('.snd-staggered-menu')) return;
    if (el.closest('.site-header nav')) return;
    if (el.classList.contains('snd-sm-panel-item')) return;
    if (el.classList.contains('snd-sm-toggle')) return;
    if (el.tagName === 'A' && el.closest('nav')) return;
    el.__sndSb = true;
    el.classList.add('snd-star-border');
    if (!el.querySelector(':scope > .snd-sb-top')) {
      var t = document.createElement('span'); t.className = 'snd-sb-top';
      var b = document.createElement('span'); b.className = 'snd-sb-bottom';
      el.insertBefore(b, el.firstChild);
      el.insertBefore(t, el.firstChild);
    }
  }

  function applyBorderGlow() {
    // Star Border ONLY on service cards (not CTAs / buttons / menu items)
    document.querySelectorAll('.snd-darkened').forEach(attachStarBorder);
    // Strip BorderGlow / Star Border / legacy rotating class from every CTA
    var ctaSelector = 'a.cta, a.snd-bg-cta, button.snd-bg-cta, .button[role="button"], a.button, button.c-button, .snd-popup-cta, .snd-mobile-cta, .cbutton-_GnMb7NzQR, [aria-label*="VISIBILITY REPORT"], [aria-label*="WATCH DEMO"], [aria-label*="Watch Demo"], [aria-label*="Free Visibility"], a[href*="gohighlevel.com"], a[href*="book-a-call"], .btn-primary, .btn-secondary';
    document.querySelectorAll(ctaSelector).forEach(function (el) {
      el.classList.remove('snd-bg-card', 'snd-rotating-glow', 'snd-star-border');
      el.__sndBg = false; el.__sndSb = false;
      el.querySelectorAll(':scope > .snd-bg-edge, :scope > .snd-sb-top, :scope > .snd-sb-bottom').forEach(function (s) { s.remove(); });
    });
    // Strip Star Border from anything that isn't a service card
    document.querySelectorAll('.snd-star-border').forEach(function (el) {
      if (!el.classList.contains('snd-darkened')) {
        el.classList.remove('snd-star-border');
        el.__sndSb = false;
        el.querySelectorAll(':scope > .snd-sb-top, :scope > .snd-sb-bottom').forEach(function (s) { s.remove(); });
      }
    });
    // Drop any leftover legacy rotating class anywhere
    document.querySelectorAll('.snd-rotating-glow').forEach(function (el) {
      el.classList.remove('snd-rotating-glow');
    });
  }

  // Strip BorderGlow from any element that had it but shouldn\'t (e.g. .snd-darkened cards)
  function stripBorderGlow() {
    document.querySelectorAll('.snd-darkened.snd-bg-card, .snd-blog-card.snd-bg-card').forEach(function (el) {
      el.classList.remove('snd-bg-card');
      var edge = el.querySelector(':scope > .snd-bg-edge');
      if (edge) edge.remove();
      el.__sndBg = false;
    });
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
    ['#1551C5', '#188bf6'].forEach(function (c) {
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
  // LOGO CLICK OVERRIDE — kill the old popup that fires on brand click
  // ============================================================
  function ensureLogoOverride() {
    if (window.__SND_LOGO_OVERRIDE__) return;
    window.__SND_LOGO_OVERRIDE__ = true;
    document.addEventListener('click', function (e) {
      // Walk up to find a brand/logo anchor or image
      var node = e.target;
      while (node && node !== document.body) {
        var isLogo =
          (node.matches && node.matches('a.brand, .nav-menu-wrapper .branding a, .nav-menu-wrapper .branding img, .sm-logo, .sm-logo img, header img.logo, header .logo a, header [class*="logo"] a, header [class*="logo"] img')) ||
          (node.getAttribute && (
            (node.getAttribute('aria-label') || '').toLowerCase().indexOf('short n sweet') !== -1 ||
            (node.getAttribute('alt') || '').toLowerCase().indexOf('shortnsweet') !== -1
          ));
        if (isLogo) {
          e.preventDefault();
          e.stopImmediatePropagation();
          if (location.pathname !== '/' && location.pathname !== '/index.html') {
            window.location.href = '/';
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return;
        }
        node = node.parentElement;
      }
    }, true); // capture so we win over GHL handlers
  }

  // ============================================================
  // FREE VISIBILITY REPORT — popup with the GHL form
  // ============================================================
  function ensureVisibilityForm() {
    if (window.__SND_VIS_FORM__) return;
    window.__SND_VIS_FORM__ = true;

    var FORM_URL = 'https://seo.shortnsweetdigital.com/widget/form/TZ4OcFkYoLidVNPKL33A';
    var FORM_HELPER = 'https://seo.shortnsweetdigital.com/js/form_embed.js';

    // Inject modal CSS
    if (!document.getElementById('snd-vis-form-css')) {
      var style = document.createElement('style');
      style.id = 'snd-vis-form-css';
      style.textContent = `
        [data-snd-vis-modal]{position:fixed;inset:0;z-index:2147483646;display:none;align-items:center;justify-content:center;animation:snd-vis-fade .25s ease}
        [data-snd-vis-modal][data-open="true"]{display:flex}
        [data-snd-vis-modal] .snd-vis-backdrop{position:absolute;inset:0;background:rgba(0,0,0,0.78);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
        [data-snd-vis-modal] .snd-vis-card{position:relative;width:min(640px,calc(100% - 32px));max-height:calc(100vh - 64px);background:linear-gradient(180deg,#0a090e 0%,#0f172a 100%);border:1px solid rgba(24,139,246,0.35);border-radius:18px;box-shadow:0 32px 80px rgba(0,0,0,0.6);overflow:hidden;display:flex;flex-direction:column;animation:snd-vis-pop .3s cubic-bezier(.2,.8,.2,1);font-family:'Open Sans',-apple-system,sans-serif}
        [data-snd-vis-modal] .snd-vis-header{display:flex;align-items:center;justify-content:space-between;padding:18px 22px;border-bottom:1px solid rgba(24,139,246,0.18);background:linear-gradient(180deg,rgba(5,100,209,0.12),rgba(24,139,246,0.06))}
        [data-snd-vis-modal] .snd-vis-title{margin:0;color:#fff;font-size:1.1rem;font-weight:800;letter-spacing:-0.01em}
        [data-snd-vis-modal] .snd-vis-eyebrow{display:block;color:#3b9bff;font-size:0.72rem;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:4px}
        [data-snd-vis-modal] .snd-vis-close{appearance:none;background:rgba(24,139,246,0.12);border:1px solid rgba(24,139,246,0.3);color:#cbd5e1;width:36px;height:36px;border-radius:10px;font-size:18px;cursor:pointer;line-height:1;transition:background .15s ease,color .15s ease,transform .15s ease;display:inline-flex;align-items:center;justify-content:center}
        [data-snd-vis-modal] .snd-vis-close:hover{background:rgba(24,139,246,0.25);color:#fff;transform:translateY(-1px)}
        [data-snd-vis-modal] .snd-vis-body{flex:1;min-height:600px;overflow:hidden}
        [data-snd-vis-modal] iframe{display:block;width:100%;height:100%;min-height:600px;border:0;background:transparent}
        @keyframes snd-vis-fade{from{opacity:0}to{opacity:1}}
        @keyframes snd-vis-pop{from{opacity:0;transform:scale(.95) translateY(10px)}to{opacity:1;transform:none}}
        @media (max-width:640px){[data-snd-vis-modal] .snd-vis-card{width:calc(100% - 16px);max-height:calc(100vh - 32px)}}
      `;
      document.head.appendChild(style);
    }

    // Build modal once
    var modal = document.createElement('div');
    modal.setAttribute('data-snd-vis-modal', '');
    modal.setAttribute('data-open', 'false');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'snd-vis-title');
    modal.innerHTML = `
      <div class="snd-vis-backdrop" data-snd-vis-close></div>
      <div class="snd-vis-card">
        <div class="snd-vis-header">
          <div>
            <span class="snd-vis-eyebrow">Free · No commitment</span>
            <h2 class="snd-vis-title" id="snd-vis-title">Get Your Free Visibility Report</h2>
          </div>
          <button class="snd-vis-close" type="button" data-snd-vis-close aria-label="Close">×</button>
        </div>
        <div class="snd-vis-body">
          <iframe src=""
            data-snd-vis-iframe
            id="inline-TZ4OcFkYoLidVNPKL33A"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Main Website Contact Form"
            data-height="887"
            data-layout-iframe-id="inline-TZ4OcFkYoLidVNPKL33A"
            data-form-id="TZ4OcFkYoLidVNPKL33A"
            title="Main Website Contact Form"
            loading="lazy"></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    var iframe = modal.querySelector('[data-snd-vis-iframe]');
    var loaded = false;

    function open() {
      if (!loaded) {
        iframe.src = FORM_URL;
        loaded = true;
        // Load GHL's form helper script once
        if (!document.querySelector('script[data-snd-vis-helper]')) {
          var s = document.createElement('script');
          s.src = FORM_HELPER;
          s.async = true;
          s.setAttribute('data-snd-vis-helper', '');
          document.body.appendChild(s);
        }
      }
      modal.setAttribute('data-open', 'true');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      try { if (window.gtag) window.gtag('event', 'visibility_form_open'); } catch (e) {}
    }
    function close() {
      modal.setAttribute('data-open', 'false');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-snd-vis-close]')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.getAttribute('data-open') === 'true') close();
    });

    // Detect "Free Visibility Report" buttons by text or known id, anywhere in the DOM.
    function isVisibilityTrigger(el) {
      if (!el) return false;
      if (el.id === 'button-_GnMb7NzQR_btn') return true;
      // Anchors/buttons whose visible text contains the phrase
      var txt = (el.textContent || '').trim().toLowerCase();
      if (!txt) return false;
      return txt.indexOf('free visibility report') !== -1 || txt.indexOf('visibility report') === 0;
    }

    document.addEventListener('click', function (e) {
      // Walk up the tree to find a clickable button/anchor
      var node = e.target;
      while (node && node !== document.body) {
        if (node.matches && (node.matches('a, button, [role="button"]'))) {
          if (isVisibilityTrigger(node)) {
            e.preventDefault();
            e.stopPropagation();
            open();
            return;
          }
        }
        node = node.parentElement;
      }
    }, true); // capture phase so we win over GHL's own handlers
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
    // Homepage only — user wants the announcement banner off subpages.
    var p = location.pathname.replace(/\/$/, '') || '/';
    if (p !== '/' && p !== '/index.html' && p !== '/home' && p !== '/home/index.html') return;
    if (document.querySelector('[data-snd-trust]')) return;
    var header = document.querySelector('header, .hl_header, nav');
    if (!header || !header.parentElement) return;
    var strip = document.createElement('div');
    strip.setAttribute('data-snd-trust', '');
    strip.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:1.5rem;padding:8px 16px;background:linear-gradient(90deg,rgba(5,100,209,0.12),rgba(24,139,246,0.12));border-bottom:1px solid rgba(5,100,209,0.25);font-family:Open Sans,-apple-system,sans-serif;font-size:0.82rem;color:#cbd5e1;text-align:center;position:relative;z-index:9991">
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
    a.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9989;text-align:center;background:linear-gradient(120deg,#0564D1,#188bf6);color:#fff;font-weight:700;padding:14px 18px;border-radius:999px;text-decoration:none;box-shadow:0 12px 32px rgba(5,100,209,0.4);font-family:Open Sans,sans-serif;font-size:0.98rem';
    document.body.appendChild(a);
  }

  // ============================================================
  // AUTOMATION ROI CALCULATOR (homepage only, anchored under
  // section-_WT3PHacUo — the "Today's Consumer Prefers" stats grid)
  // ============================================================
  function ensureRoiCalculator() {
    if (document.querySelector('[data-snd-roi]')) return;
    if (location.pathname !== '/' && location.pathname !== '/index.html') return;
    var anchor = document.getElementById('section-_WT3PHacUo');
    if (!anchor) return;
    var section = document.createElement('section');
    section.setAttribute('data-snd-roi', '');
    section.style.cssText = 'background:linear-gradient(180deg,#0f172a 0%,#0a090e 100%);padding:72px 20px;border-top:1px solid rgba(5,100,209,0.2);border-bottom:1px solid rgba(5,100,209,0.2)';
    section.innerHTML = `
      <div style="max-width:1100px;margin:0 auto;color:#f8fafc;font-family:Open Sans,sans-serif">
        <div style="text-align:center;margin-bottom:36px">
          <p style="color:#188bf6;font-weight:700;font-size:0.85rem;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 8px">Automation ROI Calculator</p>
          <h2 style="color:#fff;font-size:2rem;line-height:1.2;margin:0;font-weight:800">See What Automating Your Follow-Up Is Worth</h2>
          <p style="color:#cbd5e1;margin:12px auto 0;max-width:640px">Drag the sliders to your real numbers. We'll show how much revenue you're leaving on the table without automated SMS + email follow-up.</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;background:rgba(15,23,42,0.7);border:1px solid rgba(5,100,209,0.3);border-radius:18px;padding:32px;backdrop-filter:blur(8px)">
          <div data-roi-inputs style="display:flex;flex-direction:column;gap:20px">
            <label style="display:flex;flex-direction:column;gap:6px">
              <span style="display:flex;justify-content:space-between;font-weight:600"><span>Leads per month</span><span data-roi-leads-out style="color:#188bf6">200</span></span>
              <input type="range" min="20" max="2000" step="10" value="200" data-roi-leads style="width:100%;accent-color:#188bf6">
            </label>
            <label style="display:flex;flex-direction:column;gap:6px">
              <span style="display:flex;justify-content:space-between;font-weight:600"><span>Current close rate</span><span data-roi-rate-out style="color:#188bf6">5%</span></span>
              <input type="range" min="1" max="40" step="1" value="5" data-roi-rate style="width:100%;accent-color:#188bf6">
            </label>
            <label style="display:flex;flex-direction:column;gap:6px">
              <span style="display:flex;justify-content:space-between;font-weight:600"><span>Average customer value</span><span data-roi-aov-out style="color:#188bf6">$1,200</span></span>
              <input type="range" min="100" max="20000" step="100" value="1200" data-roi-aov style="width:100%;accent-color:#188bf6">
            </label>
            <p style="color:#94a3b8;font-size:0.85rem;margin:0;line-height:1.5">Industry benchmarks: automated SMS + email follow-up lifts close rates 2–3× by reaching leads in the first 5 minutes (the window where 78% of buyers pick the first responder).</p>
          </div>
          <div style="display:flex;flex-direction:column;justify-content:center;gap:18px">
            <div style="background:rgba(5,100,209,0.12);border:1px solid rgba(5,100,209,0.35);border-radius:14px;padding:20px">
              <p style="margin:0 0 4px;color:#cbd5e1;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700">Today's Revenue</p>
              <p data-roi-current style="margin:0;font-size:2rem;font-weight:800;color:#fff">$12,000<span style="font-size:0.95rem;color:#94a3b8;font-weight:600">/mo</span></p>
            </div>
            <div style="background:linear-gradient(135deg,rgba(5,100,209,0.25),rgba(82,113,255,0.18));border:1px solid rgba(24,139,246,0.55);border-radius:14px;padding:20px">
              <p style="margin:0 0 4px;color:#188bf6;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700">With Automation (2.4× lift)</p>
              <p data-roi-future style="margin:0;font-size:2rem;font-weight:800;color:#fff">$28,800<span style="font-size:0.95rem;color:#cbd5e1;font-weight:600">/mo</span></p>
            </div>
            <div style="background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.4);border-radius:14px;padding:20px">
              <p style="margin:0 0 4px;color:#86efac;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;font-weight:700">You're Leaving On The Table</p>
              <p data-roi-gap style="margin:0;font-size:2rem;font-weight:800;color:#fff">$16,800<span style="font-size:0.95rem;color:#cbd5e1;font-weight:600">/mo</span></p>
            </div>
            <a href="https://www.gohighlevel.com/?fp_ref=shortnsweet53&utm_source=site&utm_medium=organic&utm_campaign=roi_calc" rel="noopener" class="cta" style="display:inline-block;text-align:center;padding:14px 18px;background:linear-gradient(120deg,#0564D1,#188bf6);color:#fff;border-radius:999px;text-decoration:none;font-weight:700;box-shadow:0 12px 32px rgba(5,100,209,0.4)">Capture this revenue → Start free trial</a>
          </div>
        </div>
      </div>
    `;
    anchor.parentNode.insertBefore(section, anchor.nextSibling);
    var leads = section.querySelector('[data-roi-leads]');
    var rate = section.querySelector('[data-roi-rate]');
    var aov = section.querySelector('[data-roi-aov]');
    var leadsOut = section.querySelector('[data-roi-leads-out]');
    var rateOut = section.querySelector('[data-roi-rate-out]');
    var aovOut = section.querySelector('[data-roi-aov-out]');
    var current = section.querySelector('[data-roi-current]');
    var future = section.querySelector('[data-roi-future]');
    var gap = section.querySelector('[data-roi-gap]');
    function fmt(n) { return '$' + Math.round(n).toLocaleString(); }
    function recalc() {
      var L = +leads.value, R = +rate.value / 100, A = +aov.value;
      var cur = L * R * A;
      var fut = cur * 2.4;
      leadsOut.textContent = L.toLocaleString();
      rateOut.textContent = (+rate.value) + '%';
      aovOut.textContent = fmt(A);
      current.innerHTML = fmt(cur) + '<span style="font-size:0.95rem;color:#94a3b8;font-weight:600">/mo</span>';
      future.innerHTML = fmt(fut) + '<span style="font-size:0.95rem;color:#cbd5e1;font-weight:600">/mo</span>';
      gap.innerHTML = fmt(fut - cur) + '<span style="font-size:0.95rem;color:#cbd5e1;font-weight:600">/mo</span>';
    }
    [leads, rate, aov].forEach(function (i) { i.addEventListener('input', recalc); });
    recalc();
  }

  function ensureReviewsWidget() {
    if (document.querySelector('[data-snd-reviews]')) return;
    if (location.pathname !== '/' && location.pathname !== '/index.html') return;
    // Anchor: prefer placing reviews AFTER the demo-video section (per user
    // request — "after the demo section i selected"). Fall back to original
    // GHL demo section, then to the blog carousel.
    var anchor =
      document.querySelector('[data-snd-replaced="w2tQlxc9xd"]') ||
      document.getElementById('section-w2tQlxc9xd') ||
      document.querySelector('[data-snd-blog-section]');
    if (!anchor) return;
    var section = document.createElement('section');
    section.setAttribute('data-snd-reviews', '');
    section.style.cssText = 'background:linear-gradient(180deg,#0a090e 0%,#0f172a 100%);padding:72px 20px;border-top:1px solid rgba(5,100,209,0.2)';
    section.innerHTML = `
      <div style="max-width:1100px;margin:0 auto">
        <div style="text-align:center;margin-bottom:36px">
          <p style="color:#188bf6;font-weight:700;font-size:0.85rem;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 8px">What clients say</p>
          <h2 style="color:#fff;font-size:2rem;line-height:1.2;margin:0;font-family:Open Sans,sans-serif;font-weight:800">Real reviews from real businesses</h2>
        </div>
        <div style="background:rgba(15,23,42,0.6);border:1px solid rgba(5,100,209,0.25);border-radius:18px;padding:24px;backdrop-filter:blur(6px)">
          <iframe src="https://reputationhub.site/reputation/widgets/review_widget/LHvDkOgXpZdUYdjFzBff" frameborder="0" scrolling="no" style="width:100%;min-height:520px;border:0;background:transparent" loading="lazy"></iframe>
        </div>
      </div>
    `;
    anchor.parentNode.insertBefore(section, anchor.nextSibling);
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
  // ENTERPRISE SAAS FOOTER (JS-injected, lives outside #__nuxt so Nuxt
  // rehydration can\'t wipe it). The static-HTML approach was getting
  // clobbered when Nuxt restored its own component tree.
  // ============================================================
  function ensureSaasFooter() {
    if (document.querySelector('footer[data-snd-footer]')) return;
    var f = document.createElement('footer');
    f.setAttribute('data-snd-footer', '');
    f.style.cssText = 'background:#06050a;padding:80px 24px 32px;color:#cbd5e1;border-top:1px solid rgba(24,139,246,0.2);font-family:Open Sans,sans-serif';
    f.innerHTML = `
      <div style="max-width:1240px;margin:0 auto">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:48px;margin-bottom:56px;padding-bottom:48px;border-bottom:1px solid rgba(24,139,246,0.15)">
          <div>
            <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/LHvDkOgXpZdUYdjFzBff/media/67188f8028f9aa4e4a87fa1e.webp" alt="ShortNSweet Digital" style="height:52px;width:auto;margin-bottom:18px">
            <p style="margin:0 0 18px;color:#e2e8f0;font-size:0.98rem;line-height:1.6;max-width:320px">The all-in-one CRM, marketing, and AI automation platform built for small businesses that need to move fast.</p>
            <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.35);border-radius:999px;font-size:0.78rem;color:#86efac;font-weight:600">
              <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 8px rgba(34,197,94,0.6)"></span>
              All systems operational
            </div>
          </div>
          <div>
            <h4 style="margin:0 0 10px;font-size:1.1rem;color:#fff;font-weight:700">Get the weekly playbook</h4>
            <p style="margin:0 0 18px;color:#94a3b8;font-size:0.92rem;line-height:1.55">One actionable AI + automation tactic, every Tuesday. No fluff, no spam.</p>
            <form data-snd-newsletter style="display:flex;gap:8px;flex-wrap:wrap">
              <input type="email" name="email" placeholder="you@company.com" required style="flex:1;min-width:200px;padding:13px 16px;background:rgba(15,23,42,0.7);border:1px solid rgba(24,139,246,0.3);border-radius:10px;color:#f1f5f9;font-family:Open Sans,sans-serif;font-size:0.95rem;outline:none">
              <button type="submit" data-snd-newsletter-btn style="padding:13px 22px;background:linear-gradient(120deg,#0564D1,#188bf6);color:#fff;border:none;border-radius:10px;font-weight:700;font-family:Open Sans,sans-serif;font-size:0.95rem;cursor:pointer;box-shadow:0 8px 20px rgba(5,100,209,0.35);transition:transform .18s ease">Subscribe</button>
              <p data-snd-newsletter-msg style="margin:10px 0 0;color:#86efac;font-size:0.85rem;flex-basis:100%;display:none"></p>
            </form>
            <p style="margin:10px 0 0;color:#64748b;font-size:0.78rem">By subscribing you agree to our <a href="/privacy/" style="color:#3b9bff;text-decoration:none">Privacy Policy</a>.</p>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:36px;margin-bottom:56px">
          <div>
            <h4 style="margin:0 0 16px;font-size:0.78rem;color:#3b9bff;letter-spacing:0.12em;text-transform:uppercase;font-weight:700">Product</h4>
            <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px">
              <li><a href="https://shortnsweetdigital.com/#section-ZTF8dMXlhU" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">CRM &amp; Pipelines</a></li>
              <li><a href="https://shortnsweetdigital.com/#section-ZTF8dMXlhU" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Email &amp; SMS</a></li>
              <li><a href="https://shortnsweetdigital.com/#section-ZTF8dMXlhU" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Web Chat &amp; AI</a></li>
              <li><a href="https://shortnsweetdigital.com/#section-ZTF8dMXlhU" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Reputation</a></li>
              <li><a href="https://shortnsweetdigital.com/#section-ZTF8dMXlhU" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Funnels &amp; Sites</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin:0 0 16px;font-size:0.78rem;color:#3b9bff;letter-spacing:0.12em;text-transform:uppercase;font-weight:700">Solutions</h4>
            <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px">
              <li><a href="/blog/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Home Services</a></li>
              <li><a href="/blog/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Real Estate</a></li>
              <li><a href="/blog/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Fitness &amp; Coaching</a></li>
              <li><a href="/blog/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Local Agencies</a></li>
              <li><a href="/book-a-call/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Talk to sales</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin:0 0 16px;font-size:0.78rem;color:#3b9bff;letter-spacing:0.12em;text-transform:uppercase;font-weight:700">Resources</h4>
            <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px">
              <li><a href="/blog/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Blog</a></li>
              <li><a href="https://www.skool.com/llmacademy/about?ref=7ec545cf11f44d1e9ebe40b09419916e" target="_blank" rel="noopener" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">LLM Academy ↗</a></li>
              <li><a href="/rss.xml" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">RSS feed</a></li>
              <li><a href="/sitemap-index.xml" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin:0 0 16px;font-size:0.78rem;color:#3b9bff;letter-spacing:0.12em;text-transform:uppercase;font-weight:700">Company</h4>
            <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px">
              <li><a href="/about/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">About</a></li>
              <li><a href="/book-a-call/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Book a call</a></li>
              <li><a href="https://app.shortnsweetdigital.com" rel="noopener" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Login</a></li>
              <li><a href="https://www.gohighlevel.com/?fp_ref=shortnsweet53&utm_source=site&utm_medium=organic&utm_campaign=footer" rel="noopener" target="_blank" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Start free trial ↗</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin:0 0 16px;font-size:0.78rem;color:#3b9bff;letter-spacing:0.12em;text-transform:uppercase;font-weight:700">Legal</h4>
            <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px">
              <li><a href="/privacy/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Privacy Policy</a></li>
              <li><a href="/termsconditions/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Terms of Service</a></li>
              <li><a href="/privacy/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">Cookie Policy</a></li>
              <li><a href="/privacy/" style="color:#cbd5e1;text-decoration:none;font-size:0.94rem">DPA / GDPR</a></li>
            </ul>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:center;margin-bottom:36px;padding:20px;background:rgba(15,23,42,0.5);border:1px solid rgba(24,139,246,0.18);border-radius:14px">
          <div style="display:inline-flex;align-items:center;gap:8px;color:#cbd5e1;font-size:0.85rem;font-weight:600"><span style="color:#22c55e">✓</span> SOC 2 Type II</div>
          <span style="color:#334155">·</span>
          <div style="display:inline-flex;align-items:center;gap:8px;color:#cbd5e1;font-size:0.85rem;font-weight:600"><span style="color:#22c55e">✓</span> GDPR compliant</div>
          <span style="color:#334155">·</span>
          <div style="display:inline-flex;align-items:center;gap:8px;color:#cbd5e1;font-size:0.85rem;font-weight:600"><span style="color:#22c55e">✓</span> CCPA compliant</div>
          <span style="color:#334155">·</span>
          <div style="display:inline-flex;align-items:center;gap:8px;color:#cbd5e1;font-size:0.85rem;font-weight:600"><span style="color:#facc15">★★★★★</span> 4.9/5 · 127 reviews</div>
        </div>
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;padding-top:24px;border-top:1px solid rgba(24,139,246,0.15)">
          <p style="margin:0;color:#64748b;font-size:0.86rem">© 2026 Short n Sweet Digital — Joshua A. Hart. All rights reserved. · Built with care in the USA.</p>
          <div style="display:inline-flex;align-items:center;gap:14px">
            <a href="https://www.facebook.com/shortnsweetmarketing" target="_blank" rel="noopener" aria-label="Facebook" style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:rgba(24,139,246,0.1);border:1px solid rgba(24,139,246,0.25);color:#cbd5e1;text-decoration:none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            <a href="https://www.instagram.com/shortnsweetdigital" target="_blank" rel="noopener" aria-label="Instagram" style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:rgba(24,139,246,0.1);border:1px solid rgba(24,139,246,0.25);color:#cbd5e1;text-decoration:none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.81 3.81 0 0 1-1.38-.9 3.81 3.81 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.97 5.97 0 0 0-2.16 1.4A5.97 5.97 0 0 0 .58 4.2c-.3.76-.5 1.64-.56 2.91C.01 8.39 0 8.8 0 12.06c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.4 2.13.67.67 1.34 1.09 2.13 1.4.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.97 5.97 0 0 0 2.13-1.4 5.97 5.97 0 0 0 1.4-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.06-1.27-.26-2.15-.56-2.91a5.97 5.97 0 0 0-1.4-2.13A5.97 5.97 0 0 0 19.86.58c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z"/><path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.17 6.17 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/><circle cx="18.41" cy="5.59" r="1.44"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/shortnsweet-marketing/" target="_blank" rel="noopener" aria-label="LinkedIn" style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:rgba(24,139,246,0.1);border:1px solid rgba(24,139,246,0.25);color:#cbd5e1;text-decoration:none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(f);
  }

  // ============================================================
  // NEWSLETTER FORM — POST email + session/UTM data to GHL webhook to
  // start the campaign, then redirect to the GHL affiliate trial link.
  // ============================================================
  var SND_NEWSLETTER_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/LHvDkOgXpZdUYdjFzBff/webhook-trigger/180d4d4e-bc84-48ba-a684-73c32ad72b7f';
  var SND_NEWSLETTER_REDIRECT = 'https://www.gohighlevel.com/?fp_ref=shortnsweet53&utm_source=site&utm_medium=organic&utm_campaign=footer_newsletter';

  function sndCollectSession() {
    var qs = new URLSearchParams(location.search);
    var utm = {};
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'].forEach(function (k) {
      var v = qs.get(k) || sessionStorage.getItem('snd_' + k);
      if (v) {
        utm[k] = v;
        try { sessionStorage.setItem('snd_' + k, v); } catch (e) {}
      }
    });
    return {
      page_url: location.href,
      page_path: location.pathname,
      page_title: document.title,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
      language: navigator.language,
      screen: { w: window.screen.width, h: window.screen.height, dpr: window.devicePixelRatio || 1 },
      viewport: { w: window.innerWidth, h: window.innerHeight },
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
      timestamp: new Date().toISOString(),
      utm: utm,
    };
  }

  function attachNewsletterForm() {
    var forms = document.querySelectorAll('form[data-snd-newsletter]:not([data-snd-newsletter-bound])');
    forms.forEach(function (form) {
      form.setAttribute('data-snd-newsletter-bound', '1');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailEl = form.querySelector('input[name="email"]');
        var btn = form.querySelector('[data-snd-newsletter-btn]');
        var msg = form.querySelector('[data-snd-newsletter-msg]');
        if (!emailEl || !emailEl.value) return;
        var email = emailEl.value.trim();
        if (btn) { btn.disabled = true; btn.textContent = 'Subscribing…'; }
        var payload = Object.assign({
          email: email,
          source: 'weekly_playbook_newsletter',
          campaign_trigger: 'newsletter_signup',
        }, sndCollectSession());
        // Fire-and-forget POST. Try sendBeacon first (purpose-built for
        // analytics/webhooks; bypasses CORS preflight, survives navigation).
        // Fall back to fetch with proper CORS so GHL parses JSON correctly.
        var body = JSON.stringify(payload);
        var sent = false;
        try {
          if (navigator.sendBeacon) {
            sent = navigator.sendBeacon(
              SND_NEWSLETTER_WEBHOOK,
              new Blob([body], { type: 'application/json' })
            );
          }
        } catch (err) {}
        if (!sent) {
          try {
            fetch(SND_NEWSLETTER_WEBHOOK, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: body,
              keepalive: true,
            }).catch(function () {});
          } catch (err) {}
        }
        if (msg) {
          msg.style.display = 'block';
          msg.textContent = 'Thanks — opening your free trial in a new tab…';
        }
        // Brief delay so the user sees the confirmation before redirect.
        setTimeout(function () {
          var redirect = SND_NEWSLETTER_REDIRECT + '&email=' + encodeURIComponent(email);
          window.open(redirect, '_blank', 'noopener');
          if (btn) { btn.disabled = false; btn.textContent = 'Subscribed'; }
        }, 600);
      });
    });
  }

  // ============================================================
  // OPT-IN SCROLL REVEAL — only animates elements with [data-snd-reveal]
  // ============================================================
  function observeReveal() {
    var els = document.querySelectorAll('[data-snd-reveal]:not(.is-visible):not(.snd-reveal-observed)');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { el.classList.add('snd-reveal-observed'); io.observe(el); });
  }

  // ============================================================
  // ORCHESTRATION
  // ============================================================
  function fix() {
    try { darkenWhiteCards(); } catch (e) {}
    try { stripBorderGlow(); } catch (e) {}
    try { buildStaggeredMenu(); } catch (e) {}
    try { ensureTrustStrip(); } catch (e) {}
    try { ensureMobileCta(); } catch (e) {}
    try { ensureRoiCalculator(); } catch (e) {}
    try { ensureReviewsWidget(); } catch (e) {}
    try { applyBorderGlow(); } catch (e) {}
    try { tagLoadedImages(); } catch (e) {}
    try { ensureChatWidget(); } catch (e) {}
    try { ensureVisibilityForm(); } catch (e) {}
    try { ensureSaasFooter(); } catch (e) {}
    try { attachNewsletterForm(); } catch (e) {}
    try { observeReveal(); } catch (e) {}
    try { ensureLogoOverride(); } catch (e) {}
  }

  if (document.readyState === 'complete') fix();
  else window.addEventListener('load', fix);
  setTimeout(fix, 400);
  setTimeout(fix, 1200);
  setTimeout(fix, 3000);

  // MutationObserver — watch <body> at low frequency so we can re-mount
  // critical elements (StaggeredMenu + footer) if Nuxt rehydration wipes them.
  function observe() {
    var mo = new MutationObserver(function () {
      if (window.__SND_TICK__) return;
      window.__SND_TICK__ = true;
      requestAnimationFrame(function () {
        window.__SND_TICK__ = false;
        try { ensureTrustStrip(); } catch (e) {}
        // Re-mount if Nuxt clobbered them
        if (!document.querySelector('.snd-staggered-menu')) {
          try { buildStaggeredMenu(); } catch (e) {}
        }
        if (!document.querySelector('footer[data-snd-footer]')) {
          try { ensureSaasFooter(); } catch (e) {}
        }
      });
    });
    try { mo.observe(document.body, { childList: true, subtree: false }); } catch (e) {}
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observe);
  else observe();
})();
