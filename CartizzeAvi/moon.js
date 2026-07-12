/* moon.js — Vista notturna ECOSTRESS per Cartizze (v2: contesto completo) */

const LST_NOTTURNA = {"note":"LST notturna ECOSTRESS per vigna, mediana °C — estate 2022 (scene valide, fill rimossi)","scene_count":6,"scenes":{"2022-06-26 05:45 loc":{"V001":17.87,"V002":17.86,"V003":17.93,"V004":18.11,"V005":17.85,"V006":18.09,"V007":18.09,"V008":18.22,"V009":18.05,"V010":17.67,"V011":17.27,"V012":18.07,"V013":18.46,"V014":18.14,"V015":18.17,"V016":18.45,"V017":17.47,"V018":18.13,"V019":17.29,"V020":18.21,"V021":18.01,"V022":18.08,"V023":17.82,"V024":18.03,"V025":17.93,"V026":18.29,"V027":18.13,"V028":17.79,"V029":18.03,"V030":18.37,"V031":18.11,"V032":18.57,"V033":18.47,"V034":18.31,"V035":18.75,"V036":18.43,"V037":17.71,"V038":17.99,"V040":18.75,"V041":18.0,"V042":18.41,"V043":18.61,"V044":18.57,"V046":18.02,"V048":18.63,"V049":17.83,"V050":17.97,"V051":18.23,"V052":18.39,"V053":18.75,"V054":18.45,"V055":18.03,"V056":18.37,"V057":17.67,"V058":17.85,"V059":17.92,"V060":18.45,"V061":18.37,"V062":18.31,"V063":18.11,"V064":17.19,"V065":18.05,"V067":17.69,"V068":17.73,"V069":18.05,"V070":17.53,"V075":18.47,"V076":18.23,"V077":17.51,"V078":17.53,"V079":18.51,"V080":17.35,"V081":17.43,"V083":18.57},"2022-07-08 05:50 loc":{"V009":15.23,"V012":15.31,"V016":15.28,"V018":15.65,"V020":15.41,"V021":15.57,"V022":15.41,"V027":16.55,"V029":15.41,"V046":15.09,"V050":15.91,"V055":15.51,"V075":15.31},"2022-07-10 00:10 loc":{"V008":18.64,"V009":18.58,"V010":18.15,"V012":18.63,"V013":17.99,"V014":18.45,"V015":18.79,"V016":18.12,"V018":18.59,"V019":18.59,"V020":18.17,"V021":18.51,"V022":18.6,"V024":18.85,"V026":18.24,"V027":18.59,"V029":18.41,"V030":18.55,"V031":18.12,"V032":18.19,"V037":18.55,"V038":18.19,"V040":19.29,"V041":19.26,"V046":18.3,"V048":18.43,"V050":19.43,"V053":18.97,"V054":18.27,"V056":18.19,"V057":18.03,"V062":18.33,"V075":18.53,"V076":18.61,"V077":18.25},"2022-07-19 00:59 loc":{"V001":20.04,"V002":19.92,"V003":20.23,"V004":19.67,"V005":19.77,"V006":19.77,"V007":20.29,"V008":22.67,"V009":22.13,"V010":21.13,"V011":20.61,"V012":22.58,"V013":22.19,"V014":21.99,"V015":22.47,"V016":21.93,"V017":21.25,"V018":22.25,"V019":21.39,"V020":22.17,"V021":22.25,"V022":22.25,"V023":21.3,"V024":21.73,"V025":21.45,"V026":21.65,"V027":22.31,"V028":20.91,"V029":22.19,"V030":21.43,"V031":21.57,"V032":21.75,"V033":21.66,"V034":21.39,"V035":21.65,"V036":21.37,"V037":21.85,"V038":21.73,"V040":21.53,"V041":21.55,"V042":20.61,"V043":20.69,"V044":21.75,"V046":21.62,"V048":21.52,"V049":22.19,"V050":22.19,"V051":20.67,"V052":20.15,"V053":21.62,"V054":22.61,"V055":22.47,"V056":21.75,"V057":21.97,"V058":20.27,"V059":20.27,"V060":19.79,"V061":19.87,"V062":21.97,"V063":19.59,"V064":20.35,"V065":20.73,"V067":20.57,"V068":21.05,"V069":21.41,"V070":21.33,"V075":22.33,"V076":22.73,"V077":20.17,"V078":20.13,"V079":20.03,"V080":20.47,"V081":19.98,"V083":19.37},"2022-09-05 02:18 loc":{"V001":17.61,"V002":17.94,"V003":17.37,"V004":17.71,"V005":17.61,"V006":16.71,"V007":17.81,"V008":18.31,"V009":18.2,"V010":18.67,"V011":18.57,"V012":18.63,"V013":18.37,"V014":18.41,"V015":18.49,"V016":18.13,"V017":18.07,"V018":17.87,"V019":18.37,"V020":18.72,"V021":17.87,"V022":17.89,"V023":18.05,"V024":18.71,"V025":18.11,"V026":18.83,"V027":18.75,"V028":19.45,"V029":17.89,"V030":18.27,"V031":18.15,"V032":17.89,"V033":18.26,"V034":17.93,"V035":18.41,"V036":18.13,"V037":18.13,"V038":18.19,"V040":18.71,"V041":18.69,"V042":17.59,"V043":17.89,"V044":17.89,"V046":18.65,"V048":18.39,"V049":18.29,"V050":18.27,"V051":19.73,"V052":17.93,"V053":18.34,"V054":17.97,"V055":18.7,"V056":18.35,"V057":18.71,"V058":18.89,"V059":18.89,"V060":17.71,"V061":17.77,"V062":18.29,"V063":17.29,"V064":18.65,"V065":18.43,"V067":18.13,"V068":18.3,"V069":18.15,"V070":18.83,"V075":18.45,"V076":17.43,"V077":18.08,"V078":18.65,"V079":17.77,"V080":18.27,"V081":18.27,"V083":17.61},"2022-09-12 23:03 loc":{"V001":16.44,"V002":16.62,"V003":16.97,"V004":17.39,"V005":16.87,"V006":16.29,"V007":16.43,"V008":17.22,"V009":17.58,"V010":16.93,"V011":17.19,"V012":17.29,"V013":17.35,"V014":16.89,"V015":17.28,"V016":17.19,"V017":17.71,"V018":17.37,"V019":16.89,"V020":17.18,"V021":17.25,"V022":17.48,"V023":17.17,"V024":17.29,"V025":17.53,"V026":17.23,"V027":17.39,"V028":16.75,"V029":17.57,"V030":16.89,"V031":16.89,"V032":16.88,"V033":16.81,"V034":17.21,"V035":16.71,"V036":16.59,"V037":17.13,"V038":16.73,"V040":16.59,"V041":17.06,"V042":16.07,"V043":16.39,"V044":16.73,"V046":17.28,"V048":16.94,"V049":16.97,"V050":17.11,"V051":16.57,"V052":16.27,"V053":16.65,"V054":16.98,"V055":16.93,"V056":16.91,"V057":16.71,"V058":16.43,"V059":16.78,"V060":16.37,"V061":16.81,"V062":16.79,"V063":16.91,"V064":16.83,"V065":16.97,"V067":16.39,"V068":16.58,"V069":16.35,"V070":16.7,"V075":17.05,"V076":17.3,"V077":16.49,"V078":16.43,"V079":16.11,"V080":16.65,"V081":16.32,"V083":15.95}}};

let notturnoMode = false;
let dataNotteSel = '2022-07-19 00:59 loc'; // picco ondata 2022

const RANGE_LST = { min: 15, max: 23 };

/* ---- COLORE: blu (fresco/buono) -> rosso (caldo/stress notturno) ---- */
function coloreLST(val) {
  if (val == null) return '#333';
  let t = Math.max(0, Math.min(1, (val - RANGE_LST.min) / (RANGE_LST.max - RANGE_LST.min)));
  const stops = [[0,[38,80,178]],[0.30,[55,130,175]],[0.50,[200,185,110]],[0.75,[195,90,58]],[1,[139,42,42]]];
  for (let i = 0; i < stops.length - 1; i++) {
    const [t0, c0] = stops[i], [t1, c1] = stops[i+1];
    if (t >= t0 && t <= t1) { const f = (t - t0) / (t1 - t0);
      return `rgb(${Math.round(c0[0]+f*(c1[0]-c0[0]))},${Math.round(c0[1]+f*(c1[1]-c0[1]))},${Math.round(c0[2]+f*(c1[2]-c0[2]))})`; }
  }
  return '#888';
}

function lstVal(vid) { const s = LST_NOTTURNA.scenes[dataNotteSel]; return s ? (s[vid] ?? null) : null; }

function stileNotturno(vid) {
  const sel = vid === vidSel, val = lstVal(vid);
  if (val == null) return { fillColor:'#2a2a2a', fillOpacity: sel?0.5:0.25, color: sel?'#c8c8ff':'#444', weight: sel?3:0.5 };
  return { fillColor: coloreLST(val), fillOpacity: vidSel && !sel ? 0.45 : 0.78, color: sel?'#fff':'#0a0a0a', weight: sel?3:0.7 };
}

/* helper di stile coerente con la modalita' (usato anche dall'hover) */
function stileCorrente(vid) { return notturnoMode ? stileNotturno(vid) : stile(vid); }

/* ---- PAROLE ---- */
function parolaLST(val) {
  if (val == null) return '—';
  if (val < 16.5) return 'notte fresca';
  if (val < 18.5) return 'notte tiepida';
  if (val < 20.5) return 'notte calda';
  return 'notte molto calda';
}
const MESI = ['','gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];
const MESI_L = ['','gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
function labelData(k) { const d = k.substring(0,10).split('-'); const b = `${parseInt(d[2])} ${MESI[parseInt(d[1])]}`; return k === '2022-07-19 00:59 loc' ? b+' ★' : b; }
function labelDataLunga(k) { const d = k.substring(0,10).split('-'); const ora = k.substring(11,16); return `${parseInt(d[2])} ${MESI_L[parseInt(d[1])]} ${d[0]}, ore ${ora}`; }

/* ---- mediana Cartizze per una notte ---- */
function medianaNotte(k) {
  const vals = Object.values(LST_NOTTURNA.scenes[k]).filter(x => x != null).sort((a,b)=>a-b);
  if (!vals.length) return null;
  const m = Math.floor(vals.length/2);
  return vals.length % 2 ? vals[m] : (vals[m-1]+vals[m])/2;
}

/* ============ OVERRIDE ricolora ============ */
ricolora = function() {
  for (const vid in layers) layers[vid].setStyle(stileCorrente(vid));
  aggLegenda();
};

/* ============ OVERRIDE aggLegenda ============ */
const _GRD_GIORNO = 'linear-gradient(to right,rgb(105,40,32),rgb(139,58,42),rgb(170,90,58),rgb(195,135,82),rgb(214,182,112),rgb(200,190,116),rgb(165,185,105),rgb(125,172,92),rgb(90,155,82),rgb(65,150,140),rgb(55,130,175),rgb(48,108,190),rgb(38,80,178))';
const _GRD_NOTTE  = 'linear-gradient(to right,rgb(38,80,178),rgb(55,130,175),rgb(200,185,110),rgb(195,90,58),rgb(139,42,42))';

aggLegenda = function() {
  const legBar = document.querySelector('#legend .leg-bar');
  const legNote = document.getElementById('leg-note');
  if (notturnoMode) {
    document.getElementById('leg-title').textContent = 'Temperatura notturna';
    document.getElementById('leg-lo').textContent = 'fresca · ≤15°C';
    document.getElementById('leg-hi').textContent = 'calda · ≥23°C';
    if (legBar) legBar.style.background = _GRD_NOTTE;
    if (legNote) legNote.textContent = 'ECOSTRESS · ' + labelDataLunga(dataNotteSel);
  } else {
    document.getElementById('leg-title').textContent = NOMI_LUNGHI[idxSel];
    const r = RANGE[idxSel];
    document.getElementById('leg-lo').textContent = 'basso (' + r.min.toFixed(2) + ')';
    document.getElementById('leg-hi').textContent = 'alto ('  + r.max.toFixed(2) + ')';
    if (legBar) legBar.style.background = _GRD_GIORNO;
    if (legNote) legNote.textContent = 'colori confrontabili tra tutti gli anni';
  }
};

/* ============ OVERRIDE aggDrawer ============ */
const _aggDrawerGiorno = aggDrawer;

function updateDrawerLeg() {
  const bar = document.querySelector('#drawer-legend .drawer-leg-bar');
  const labs = document.querySelectorAll('#drawer-legend .drawer-leg-labels span');
  if (notturnoMode) { if (bar) bar.style.background = _GRD_NOTTE; if (labs.length>=2){ labs[0].textContent='fresca'; labs[1].textContent='calda'; } }
  else { if (bar) bar.style.background = _GRD_GIORNO; if (labs.length>=2){ labs[0].textContent='basso'; labs[1].textContent='alto'; } }
}

aggDrawer = function() {
  const tabs = document.getElementById('drawer-tabs');
  if (tabs) tabs.style.display = notturnoMode ? 'none' : '';
  updateDrawerLeg();
  if (notturnoMode) aggDrawerNotte();
  else _aggDrawerGiorno();
};

/* ============ OVERRIDE selVigna: di notte niente drawer ============ */
const _selVignaGiorno = selVigna;
selVigna = function(vid) {
  if (notturnoMode) return;   // in modalità notte il click non apre il pannello
  _selVignaGiorno(vid);
};

function aggDrawerNotte() {
  const vid = vidSel, v = DATI[vid];
  document.getElementById('drawer-title').textContent = v.c || 'Cartizze';
  document.getElementById('drawer-subtitle').textContent = (v.q ? `${v.q} m s.l.m. · ` : '') + `${v.a} ha`;

  const val = lstVal(vid);
  document.getElementById('read-label').textContent = 'Temperatura della chioma · ' + labelDataLunga(dataNotteSel);
  document.getElementById('br-value').textContent = val == null ? '—' : val.toFixed(1) + '°';
  document.getElementById('br-word').textContent = parolaLST(val);
  document.getElementById('and-label').textContent = 'Confronto tra le notti disponibili (2022)';

  const badge = document.getElementById('year-badges');
  if (badge) {
    const serie = Object.keys(LST_NOTTURNA.scenes).map(k => ({k, val: LST_NOTTURNA.scenes[k][vid]})).filter(x => x.val != null);
    if (serie.length) {
      const cald = serie.reduce((m,x)=>x.val>m.val?x:m), fres = serie.reduce((m,x)=>x.val<m.val?x:m);
      badge.innerHTML = `<span class="ybadge dn">più calda: ${labelData(cald.k).replace(' ★','')} · ${cald.val.toFixed(1)}°</span>`
                      + `<span class="ybadge up">più fresca: ${labelData(fres.k).replace(' ★','')} · ${fres.val.toFixed(1)}°</span>`;
    } else badge.innerHTML = '';
  }
  morfo(vid);
  graficoNotte(vid);
}

function graficoNotte(vid) {
  const ctx = document.getElementById('chart');
  if (chart) chart.destroy();
  const keys = Object.keys(LST_NOTTURNA.scenes);
  const labels = keys.map(k => labelData(k).replace(' ★',''));
  const serie = keys.map(k => LST_NOTTURNA.scenes[k][vid] ?? null);
  const media = keys.map(k => medianaNotte(k));
  chart = new Chart(ctx, { type:'line',
    data:{ labels, datasets:[
      { label:'questa vigna', data:serie, borderColor:'#c8c8ff', backgroundColor:'rgba(200,200,255,.12)', tension:.3, spanGaps:true, pointRadius:3, pointBackgroundColor:'#c8c8ff' },
      { label:'mediana Cartizze', data:media, borderColor:'#7a7acc', borderDash:[4,4], tension:.3, pointRadius:0 }
    ]},
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{labels:{color:'#8a8478',font:{size:10}}},
        tooltip:{callbacks:{label:c=>`${c.dataset.label}: ${c.parsed.y!=null?c.parsed.y.toFixed(1)+'°C':'—'}`}} },
      scales:{ x:{ticks:{color:'#8a8478',font:{size:9}},grid:{color:'rgba(255,255,255,.04)'}},
               y:{ticks:{color:'#8a8478',font:{size:9},callback:v=>v+'°'},grid:{color:'rgba(255,255,255,.04)'}} } }
  });
}

/* ============ BANNER notturno ============ */
const nightBanner = document.createElement('div');
nightBanner.id = 'night-banner';
document.body.appendChild(nightBanner);
function updateBanner() {
  nightBanner.innerHTML = `<span class="nb-moon">🌙</span> Notte del <strong>${labelDataLunga(dataNotteSel)}</strong> &nbsp;·&nbsp; temperatura della chioma vista dal satellite`;
}

/* ============ NIGHT BAR (date) ============ */
function buildNightBar() {
  const bar = document.getElementById('night-bar');
  if (!bar) return;
  Object.keys(LST_NOTTURNA.scenes).forEach(k => {
    const b = document.createElement('button');
    b.className = 'yr-btn' + (k === dataNotteSel ? ' active' : '');
    b.textContent = labelData(k);
    b.title = labelDataLunga(k);
    b.onclick = () => {
      dataNotteSel = k;
      document.querySelectorAll('#night-bar .yr-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      updateBanner();
      ricolora();
      if (vidSel) aggDrawer();
    };
    bar.appendChild(b);
  });
}

/* ============ HOVER FIX: ribindo mouseout coerente con la modalita' ============ */
function rebindHover() {
  for (const vid in layers) {
    const lyr = layers[vid];
    // NON usare off('mouseout'): cancellerebbe anche l'handler che chiude il tooltip.
    lyr.on('mouseout', () => lyr.setStyle(stileCorrente(vid)));
    // di notte il tooltip mostra la temperatura (visto che il drawer non si apre)
    lyr.on('mouseover', () => {
      if (notturnoMode) {
        const val = lstVal(vid), d = DATI[vid];
        lyr.setTooltipContent(`${d.c} — ${val != null ? val.toFixed(1) + '°C' : 'n/d'}`);
      } else {
        lyr.setTooltipContent(etichetta(vid));
      }
    });
  }
}

/* ============ TOGGLE LUNA ============ */
function initMoonToggle() {
  const btn = document.getElementById('moon-btn');
  if (!btn) return;
  btn.onclick = () => {
    notturnoMode = !notturnoMode;
    btn.classList.toggle('active', notturnoMode);
    document.body.classList.toggle('night', notturnoMode);
    document.getElementById('year-bar').style.display  = notturnoMode ? 'none' : '';
    document.getElementById('night-bar').style.display = notturnoMode ? 'flex' : 'none';
    if (notturnoMode) {
      // entrando in notte: chiudo il pannello e annullo la selezione
      document.getElementById('drawer').classList.remove('open');
      document.getElementById('legend').style.display = '';
      document.querySelectorAll('.mga-item.sel').forEach(it => it.classList.remove('sel'));
      vidSel = null;
    }
    updateBanner();
    ricolora();
  };
}

updateBanner();
buildNightBar();
rebindHover();
initMoonToggle();
