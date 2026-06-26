// TerroiRisk — particelle dati che salgono
(function () {
  function start() {
    const canvas = document.getElementById('cv');
    if (!canvas) { console.error('TerroiRisk: canvas #cv non trovato'); return; }
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, particles = [];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function makeParticle(initial) {
      const p = {};
      p.reset = function (atBottom) {
        p.x = Math.random() * W;
        p.y = atBottom ? H + Math.random() * 40 : Math.random() * H;
        p.speed = 0.3 + Math.random() * 0.6;
        p.size  = 9 + Math.random() * 7;
        p.alpha = 0.25 + Math.random() * 0.45;
        p.drift = (Math.random() - 0.5) * 0.4;
      };
      p.reset(!initial);
      return p;
    }

    function init() {
      resize();
      const N = Math.max(40, Math.min(90, Math.floor((W * H) / 16000)));
      particles = [];
      for (let i = 0; i < N; i++) particles.push(makeParticle(true));
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -30) p.reset(true);
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#C9A96E';
        ctx.font = p.size + 'px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('+', p.x, p.y);
        ctx.restore();
      }
      requestAnimationFrame(frame);
    }

    window.addEventListener('resize', init);
    init();
    frame();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
