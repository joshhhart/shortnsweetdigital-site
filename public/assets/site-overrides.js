// Short n Sweet Digital — runtime overrides for the GHL pages
// Idempotent: tagged with data-snd-overrides so it can be detected later.
(function () {
  if (window.__SND_OVERRIDES__) return;
  window.__SND_OVERRIDES__ = true;

  function darkenWhiteCards() {
    document.querySelectorAll('div.bg.bgCover, div.bg.bgCover.inner').forEach(function (el) {
      var cs = getComputedStyle(el);
      if (cs.backgroundColor !== 'rgb(255, 255, 255)') return;
      el.style.setProperty('background', 'linear-gradient(180deg, rgba(15,23,42,0.92), rgba(10,9,14,0.92))', 'important');
      el.style.setProperty('border', '1px solid rgba(5,100,209,0.28)', 'important');
      el.style.setProperty('box-shadow', '0 8px 32px rgba(0,0,0,0.5)', 'important');
      el.style.setProperty('backdrop-filter', 'blur(6px)', 'important');
      // Recolor dark text inside
      el.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span:not([style*="color"]), strong:not([style*="color"]), em, li, td, a:not([style*="color"])').forEach(function (t) {
        var tcs = getComputedStyle(t);
        var c = tcs.color;
        if (c === 'rgb(0, 0, 0)' || c === 'rgb(15, 23, 42)' || c === 'rgb(17, 24, 39)' || c === 'rgb(31, 41, 55)') {
          t.style.setProperty('color', '#f1f5f9', 'important');
        }
      });
    });
  }

  function fix() {
    try { darkenWhiteCards(); } catch (e) { /* swallow */ }
  }

  if (document.readyState === 'complete') fix();
  else window.addEventListener('load', fix);
  setTimeout(fix, 800);
  setTimeout(fix, 2500);
})();
