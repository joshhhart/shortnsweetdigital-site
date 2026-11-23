// Exit-intent lead-magnet popup for Short n Sweet Digital
// Triggers when cursor leaves the viewport top edge (desktop) OR after a fast
// scroll-to-top on mobile. Suppressed for 7 days via localStorage.
(function () {
  if (window.__SND_POPUP__) return;
  window.__SND_POPUP__ = true;

  var KEY = 'snd_popup_dismissed_at';
  var SUPPRESS_DAYS = 7;
  var dismissed = +(localStorage.getItem(KEY) || 0);
  if (dismissed && Date.now() - dismissed < SUPPRESS_DAYS * 86400000) return;

  var popup;
  function build() {
    if (popup) return;
    popup = document.createElement('div');
    popup.setAttribute('data-snd-popup', '');
    popup.innerHTML = [
      '<div class="snd-popup-backdrop" data-close></div>',
      '<div class="snd-popup-card" role="dialog" aria-modal="true" aria-labelledby="snd-popup-title">',
      '  <button class="snd-popup-x" aria-label="Close" data-close>&times;</button>',
      '  <div class="snd-popup-eyebrow">Wait — before you go</div>',
      '  <h2 id="snd-popup-title" class="snd-popup-title">Get Your <span>Free Visibility Report</span></h2>',
      '  <p class="snd-popup-body">See exactly where your business shows up online — and where you\'re losing leads to competitors. Free, no commitment.</p>',
      '  <a class="snd-popup-cta" href="https://www.gohighlevel.com/?fp_ref=shortnsweet53&utm_source=site&utm_medium=organic&utm_campaign=exit_popup" rel="noopener" data-cta>Claim My Free Report →</a>',
      '  <button class="snd-popup-decline" data-close>No thanks, I\'m good</button>',
      '</div>'
    ].join('');
    var style = document.createElement('style');
    style.textContent = [
      '[data-snd-popup]{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;animation:snd-fade .25s ease}',
      '[data-snd-popup] .snd-popup-backdrop{position:absolute;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(4px)}',
      '[data-snd-popup] .snd-popup-card{position:relative;max-width:480px;width:calc(100% - 32px);background:linear-gradient(180deg,#0a090e 0%,#0f172a 100%);border:1px solid rgba(5,100,209,0.4);border-radius:18px;padding:36px 28px 28px;box-shadow:0 24px 80px rgba(0,0,0,0.6);color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;animation:snd-pop .3s cubic-bezier(.2,.8,.2,1)}',
      '[data-snd-popup] .snd-popup-x{position:absolute;top:8px;right:8px;width:36px;height:36px;background:transparent;border:0;color:#94a3b8;font-size:24px;cursor:pointer;border-radius:8px}',
      '[data-snd-popup] .snd-popup-x:hover{background:rgba(255,255,255,0.06);color:#f1f5f9}',
      '[data-snd-popup] .snd-popup-eyebrow{color:#5271FF;font-weight:700;font-size:0.82rem;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:10px}',
      '[data-snd-popup] .snd-popup-title{margin:0 0 12px;font-size:1.7rem;line-height:1.2;color:#fff;font-weight:800}',
      '[data-snd-popup] .snd-popup-title span{color:#0564D1;background:linear-gradient(120deg,#0564D1,#5271FF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}',
      '[data-snd-popup] .snd-popup-body{margin:0 0 22px;color:#cbd5e1;font-size:1rem;line-height:1.5}',
      '[data-snd-popup] .snd-popup-cta{display:block;text-align:center;background:linear-gradient(120deg,#0564D1,#5271FF);color:#fff;font-weight:700;padding:14px 24px;border-radius:10px;text-decoration:none;font-size:1.05rem;transition:transform .15s}',
      '[data-snd-popup] .snd-popup-cta:hover{transform:translateY(-1px);box-shadow:0 12px 24px rgba(5,100,209,0.4)}',
      '[data-snd-popup] .snd-popup-decline{display:block;width:100%;background:transparent;border:0;color:#64748b;margin-top:14px;cursor:pointer;font-size:0.88rem;padding:6px}',
      '[data-snd-popup] .snd-popup-decline:hover{color:#94a3b8}',
      '@keyframes snd-fade{from{opacity:0}to{opacity:1}}',
      '@keyframes snd-pop{from{opacity:0;transform:scale(.94) translateY(8px)}to{opacity:1;transform:none}}',
      '@media (max-width:480px){[data-snd-popup] .snd-popup-card{padding:32px 22px 22px}[data-snd-popup] .snd-popup-title{font-size:1.4rem}}'
    ].join('');
    popup.appendChild(style);
    popup.addEventListener('click', function (e) {
      var t = e.target;
      if (t.matches('[data-close]')) close();
      if (t.matches('[data-cta]')) {
        try { if (window.gtag) window.gtag('event', 'exit_popup_click'); } catch (_) {}
        // let the link follow normally
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.contains(popup)) close();
    });
  }

  function show() {
    if (!popup) build();
    if (document.body.contains(popup)) return;
    document.body.appendChild(popup);
    try { if (window.gtag) window.gtag('event', 'exit_popup_view'); } catch (_) {}
  }

  function close() {
    localStorage.setItem(KEY, String(Date.now()));
    if (popup && popup.parentNode) popup.parentNode.removeChild(popup);
  }

  // Desktop: cursor leaves the top of the viewport
  var armed = false;
  setTimeout(function () { armed = true; }, 10000); // give visitor 10s before arming
  document.addEventListener('mouseout', function (e) {
    if (!armed) return;
    if (!e.relatedTarget && (e.clientY === undefined || e.clientY < 50)) show();
  });

  // Mobile: rapid scroll-up gesture after some engagement
  var lastY = window.scrollY, lastT = Date.now(), maxScroll = 0;
  window.addEventListener('scroll', function () {
    if (!armed) return;
    var y = window.scrollY, dt = Date.now() - lastT;
    maxScroll = Math.max(maxScroll, y);
    var dy = lastY - y;
    if (dy > 200 && dt < 600 && maxScroll > 600) show();
    lastY = y; lastT = Date.now();
  }, { passive: true });
})();
