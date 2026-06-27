// Pomerol — track record grid + inverse vigour bars (dati reali §18.1 / §19.2)
(function () {
  // §18.1 — anno, SM, Petrus WS, predetto, direzione predetta, direzione reale, hit
  // mean storica = 94.88
  var rows = [
    [1987,89,91.9,'below','below'],[1988,92,94.4,'below','below'],
    [1989,97,94.9,'above','above'],[1990,97,94.9,'above','above'],
    [1992,90,90.3,'below','below'],[1993,91,90.4,'below','below'],
    [1994,92,91.8,'below','below'],[1995,95,92.8,'below','above'],
    [1996,92,92.3,'below','below'],[1997,92,93.2,'below','below'],
    [1998,97,92.7,'below','above'],[1999,93,91.0,'below','below'],
    [2000,97,95.5,'above','above'],[2001,95,95.7,'above','above'],
    [2003,94,96.5,'above','below'],[2004,94,96.3,'above','below'],
    [2005,97,96.6,'above','above'],[2006,94,95.1,'above','below'],
    [2007,93,95.6,'above','below'],[2009,98,96.9,'above','above'],
    [2010,97,96.6,'above','above'],[2011,94,96.7,'above','below'],
    [2013,93,95.6,'above','below'],[2014,95,96.3,'above','above'],
    [2015,97,95.6,'above','above'],[2016,98,96.9,'above','above'],
    [2017,96,96.4,'above','above'],[2018,97,97.0,'above','above'],
    [2019,97,96.3,'above','above'],[2020,97,95.2,'above','above'],
    [2021,96,96.7,'above','above'],[2022,98,96.8,'above','above'],
    [2023,97,96.0,'above','above']
  ];

  var rec = document.getElementById('rec');
  if (rec) {
    rows.forEach(function (r) {
      var yr = r[0], real = r[1], predDir = r[3], realDir = r[4];
      var hit = predDir === realDir;
      var cls = hit ? (realDir === 'above' ? 'up' : 'dn') : 'miss';
      var c = document.createElement('div');
      c.className = 'cell ' + cls;
      c.innerHTML = '<span class="yr">' + yr + '</span><span class="sc">' + real + '</span>';
      c.title = yr + ' · real ' + real + ' · model ' + r[2].toFixed(1) +
                ' · ' + (hit ? 'hit' : 'direction miss');
      rec.appendChild(c);
    });
    // sealed 2025
    var s = document.createElement('div');
    s.className = 'cell sealed';
    s.innerHTML = '<span class="yr">2025</span><span class="sc">95.7</span>';
    s.title = '2025 · sealed prediction 95.7 · critics score ~2027';
    rec.appendChild(s);
  }

  // §19.2 — château, voto WA, NDRE (più alto = più verde = peggiore)
  var vig = [
    ['Pétrus',        97.5, 0.222, false],
    ['Lafleur',       98.1, 0.239, false],
    ['VCC',           97.0, 0.258, false],
    ['L\u2019\u00C9vangile', 94.9, 0.255, true],
    ['Trotanoy',      95.1, 0.260, false],
    ['Le Pin',        95.6, 0.282, false],
    ['\u00C9glise-Clinet', 95.9, 0.317, true],
    ['Clinet',        93.9, 0.322, true]
  ];
  // ordina per NDRE crescente (meno verde in alto = vini migliori in alto)
  vig.sort(function (a, b) { return a[2] - b[2]; });

  var vc = document.getElementById('vig');
  if (vc) {
    var ndreMin = 0.20, ndreMax = 0.34;
    vig.forEach(function (v) {
      var name = v[0], wa = v[1], ndre = v[2], weak = v[3];
      var pct = ((ndre - ndreMin) / (ndreMax - ndreMin)) * 100;
      var row = document.createElement('div');
      row.className = 'vrow' + (weak ? ' weak' : '');
      row.innerHTML =
        '<div class="vname">' + name + '</div>' +
        '<div class="vtrack"><div class="vbar" data-w="' + pct.toFixed(1) + '"></div></div>' +
        '<div class="vscore">' + wa.toFixed(1) + '</div>';
      vc.appendChild(row);
    });
    var axis = document.createElement('div');
    axis.className = 'vaxis';
    axis.innerHTML = '<div class="vlab"><span>less green · noble suffering</span><span>more green</span></div>';
    vc.appendChild(axis);

    // anima le barre quando entra in viewport
    var animate = function () {
      vc.querySelectorAll('.vbar').forEach(function (b) {
        b.style.width = b.getAttribute('data-w') + '%';
      });
    };
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { animate(); io.disconnect(); } });
      }, { threshold: 0.3 });
      io.observe(vc);
    } else { animate(); }
  }
})();
