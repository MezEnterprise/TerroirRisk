// TerroiRisk — particelle '+' che salgono come punti dati

(function () {
  const canvas = document.getElementById('cv');
  if (!canvas) { console.error('canvas #cv non trovato'); return; }
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.reset = function (initial) {
      this.x     = Math.random() * W;
      this.y     = initial ? Math.random() * H : H + 20;
      this.speed = 0.3 + Math.random() * 0.6;
      this.size  = 9 + Math.random() * 7;
      this.alpha = 0.25 + Math.random() * 0.45;
      this.drift = (Math.random() - 0.5) * 0.4;
    };
    this.reset(true);

    this.update = function () {
      this.y -= this.speed;
      this.x += this.drift;
      if (this.y < -20) this.reset(false);
    };

    this.draw = function () {
      ctx.save();
      ctx.globalAlpha  = this.alpha;
      ctx.fillStyle    = '#C9A96E';
      ctx.font         = this.size + 'px Inter, sans-serif';
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('+', this.x, this.y);
      ctx.restore();
    };
  }

  function init() {
    resize();
    const N = Math.min(Math.floor((W * H) / 12000), 90);
    particles = [];
    for (let i = 0; i < N; i++) particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) { p.update(); p.draw(); }
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  init();
  loop();
})();
