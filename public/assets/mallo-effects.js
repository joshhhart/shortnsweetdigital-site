// Mallo playful effects: sprinkle bursts, card tilt, pop-in on scroll,
// blog reading progress, and a peeking mascot. All skip reduced motion.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var COLORS = ['#ff5c99', '#ffd23f', '#5ef2c0', '#3b9bff', '#a67cff'];

  // Sprinkle burst on button / CTA clicks
  function burst(x, y) {
    for (var i = 0; i < 14; i++) {
      var s = document.createElement('i');
      s.className = 'mallo-burst';
      var a = (Math.PI * 2 * i) / 14 + Math.random() * 0.4;
      var d = 40 + Math.random() * 50;
      s.style.cssText = 'left:' + x + 'px;top:' + y + 'px;background:' + COLORS[i % 5] +
        ';--tx:' + Math.cos(a) * d + 'px;--ty:' + Math.sin(a) * d + 'px;--rot:' + Math.random() * 360 + 'deg';
      document.body.appendChild(s);
      setTimeout(s.remove.bind(s), 700);
    }
  }
  if (!reduce) {
    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest('.btn-primary, .btn-secondary, a.cta, button[type="submit"], .topic-chip, a.primary');
      if (el) burst(e.clientX, e.clientY);
    });
  }

  // Pop-in on scroll with a little stagger
  var popSel = '.stat-card, .service-card, .blog-card, .testimonial-card, .result-card, .tier, .post-grid li, .related-card, .mascot, .svc-row';
  function setupPop() {
    if (reduce || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('mallo-in');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll(popSel).forEach(function (el) {
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--pop-delay', (sib % 6) * 70 + 'ms');
      el.classList.add('mallo-pop');
      io.observe(el);
    });
  }

  // Tilt cards toward the pointer (desktop only)
  function setupTilt() {
    if (reduce || !fine) return;
    document.querySelectorAll('.stat-card, .service-card, .post-grid li, .tier, .testimonial-card').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--tilt-x', (-py * 8).toFixed(2) + 'deg');
        el.style.setProperty('--tilt-y', (px * 10).toFixed(2) + 'deg');
      });
      el.addEventListener('pointerleave', function () {
        el.style.setProperty('--tilt-x', '0deg');
        el.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  // Reading progress on blog posts
  function setupProgress() {
    var body = document.querySelector('.post-body');
    if (!body) return;
    var bar = document.createElement('div');
    bar.className = 'mallo-progress';
    document.body.appendChild(bar);
    function update() {
      var r = body.getBoundingClientRect();
      var total = r.height - window.innerHeight;
      var p = Math.min(1, Math.max(0, -r.top / (total > 0 ? total : 1)));
      bar.style.transform = 'scaleX(' + p + ')';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // A mascot that peeks up from the corner once you scroll (desktop only)
  function setupPeek() {
    if (reduce || !fine || window.innerWidth < 900) return;
    var crew = ['puff', 'bun', 'jelli', 'toasty', 'blip'];
    var name = crew[Math.floor(Math.random() * crew.length)];
    var peek = document.createElement('button');
    peek.type = 'button';
    peek.className = 'mallo-peek';
    peek.setAttribute('aria-label', 'Say hi to the Mallo crew');
    peek.innerHTML = '<img src="/assets/mascots/' + name + '.webp" alt="" width="110" loading="lazy"><span class="mallo-peek-bubble">hi! 👋</span>';
    document.body.appendChild(peek);
    peek.addEventListener('click', function (e) {
      burst(e.clientX, e.clientY);
      peek.classList.add('mallo-peek-hide');
    });
    window.addEventListener('scroll', function () {
      peek.classList.toggle('mallo-peek-up', window.scrollY > 600);
    }, { passive: true });
  }

  function init() { setupPop(); setupTilt(); setupProgress(); setupPeek(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
