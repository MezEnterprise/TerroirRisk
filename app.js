// TerroiRisk — app.js homepage
// Particelle: piccoli '+' che salgono lentamente come punti dati

(function () {
  const canvas = document.getElementById('canvas-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.reset = function () {
      this.x     = Math.random() * W;
      this.y     = H + 20;
      this.speed = 0.25 + Math.random() * 0.45;
      this.size  = 6 + Math.random() * 5;
      this.alpha = 0.08 + Math.random() * 0.18;
      this.drift = (Math.random() - 0.5) * 0.3;
    };
    this.reset();
    this.y = Math.random() * H; // sparse iniziali

    this.update = function () {
      this.y -= this.speed;
      this.x += this.drift;
      if (this.y < -20) this.reset();
    };

    this.draw = function () {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = '#C9A96E';
      ctx.font        = `${this.size}px Inter, sans-serif`;
      ctx.textAlign   = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('+', this.x, this.y);
      ctx.restore();
    };
  }

  function init() {
    resize();
    const N = Math.floor((W * H) / 18000);
    particles = Array.from({ length: Math.min(N, 60) }, () => new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  loop();
})();
