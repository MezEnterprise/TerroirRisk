/* =========================================================================
   resilienza.js  —  VISTA RESILIENZA per la mappa Cartizze (AVI)
   -------------------------------------------------------------------------
   Caricato DOPO app.js (come moon.js). Override globale di stile/ricolora/
   aggLegenda quando la vista è attiva. Nessun fetch: i dati del trigger sono
   embeddati qui sotto come costante, GIA' CALCOLATI dal motore
   parametric_backtest.py (stesse soglie: deficit storico -0.06 / zona -0.04,
   logica OR su NDMI). Una sola fonte di verità: il .py calcola, la mappa mostra.

   DUE SOTTO-VISTE:
   1) FREQUENZA (default) = quante volte ogni vigna è andata in sofferenza
      idrica in 9 anni. È il danno LOCALE / idiosincratico (caso-Gerotto):
      il rischio che nessun prodotto di zona copre.
   2) EVENTO 2022 = lo stato idrico nell'anno-evento sistemico: il colle
      quasi tutto in sofferenza insieme (95% delle vigne in trigger).
   ========================================================================= */

/* --- DATI TRIGGER (vid -> {n: volte in trigger 2017-25, v2022: NDMI 2022}) --- */
const RESIL = {"V001":{"n":3,"v2022":0.0936},"V002":{"n":1,"v2022":0.1303},"V003":{"n":1,"v2022":0.1086},"V004":{"n":1,"v2022":0.1571},"V005":{"n":1,"v2022":0.1708},"V006":{"n":2,"v2022":0.1769},"V007":{"n":2,"v2022":0.1369},"V008":{"n":1,"v2022":0.0948},"V009":{"n":1,"v2022":0.1435},"V010":{"n":1,"v2022":0.1538},"V011":{"n":1,"v2022":0.1405},"V012":{"n":1,"v2022":0.0376},"V013":{"n":1,"v2022":0.0412},"V014":{"n":1,"v2022":0.0871},"V015":{"n":2,"v2022":0.1735},"V016":{"n":1,"v2022":0.1001},"V017":{"n":1,"v2022":0.0745},"V018":{"n":1,"v2022":0.072},"V019":{"n":1,"v2022":0.0751},"V020":{"n":1,"v2022":0.119},"V021":{"n":2,"v2022":0.0688},"V022":{"n":1,"v2022":0.1064},"V023":{"n":1,"v2022":0.1265},"V024":{"n":1,"v2022":0.108},"V025":{"n":1,"v2022":0.0851},"V026":{"n":1,"v2022":0.0772},"V027":{"n":3,"v2022":0.0894},"V028":{"n":1,"v2022":0.1769},"V029":{"n":2,"v2022":0.104},"V030":{"n":2,"v2022":0.0895},"V031":{"n":2,"v2022":0.0837},"V032":{"n":2,"v2022":0.0495},"V033":{"n":1,"v2022":0.0595},"V034":{"n":5,"v2022":0.105},"V035":{"n":2,"v2022":0.1383},"V036":{"n":1,"v2022":0.0779},"V037":{"n":2,"v2022":0.1186},"V038":{"n":1,"v2022":0.1046},"V039":{"n":4,"v2022":0.088},"V040":{"n":3,"v2022":0.0383},"V041":{"n":4,"v2022":0.0484},"V042":{"n":6,"v2022":0.1112},"V043":{"n":1,"v2022":0.1029},"V044":{"n":2,"v2022":0.0157},"V045":{"n":1,"v2022":0.1213},"V046":{"n":1,"v2022":0.0669},"V047":{"n":1,"v2022":0.0982},"V048":{"n":1,"v2022":0.1245},"V049":{"n":2,"v2022":0.1676},"V050":{"n":4,"v2022":0.0534},"V051":{"n":3,"v2022":0.1182},"V052":{"n":7,"v2022":0.0817},"V053":{"n":3,"v2022":0.0784},"V054":{"n":1,"v2022":0.0434},"V055":{"n":3,"v2022":0.0749},"V056":{"n":1,"v2022":0.1233},"V057":{"n":3,"v2022":0.1341},"V058":{"n":2,"v2022":0.1697},"V059":{"n":1,"v2022":0.1721},"V060":{"n":3,"v2022":0.069},"V061":{"n":6,"v2022":0.0766},"V062":{"n":1,"v2022":0.0764},"V063":{"n":5,"v2022":0.0991},"V064":{"n":3,"v2022":0.1127},"V065":{"n":1,"v2022":0.1446},"V066":{"n":8,"v2022":0.0405},"V067":{"n":1,"v2022":0.1131},"V068":{"n":1,"v2022":0.149},"V069":{"n":2,"v2022":0.1261},"V070":{"n":1,"v2022":0.1841},"V071":{"n":2,"v2022":0.1124},"V072":{"n":2,"v2022":0.0356},"V073":{"n":3,"v2022":0.0801},"V074":{"n":1,"v2022":0.0394},"V075":{"n":1,"v2022":0.1023},"V076":{"n":2,"v2022":0.1081},"V077":{"n":4,"v2022":0.0572},"V078":{"n":2,"v2022":0.1304},"V079":{"n":2,"v2022":0.1407},"V080":{"n":2,"v2022":0.1111},"V081":{"n":2,"v2022":0.1048},"V082":{"n":1,"v2022":0.1468},"V083":{"n":2,"v2022":0.1456}};

/* range fisso NDMI 2022 (per la sotto-vista evento), da app.js */
const RESIL_NDMI = {min:0.016, max:0.184};

/* stato vista: false=off, 'freq'=danno locale, 'evento'=2022 */
let resilMode = false;

/* ----- override delle funzioni globali, RISPETTANDO la luna -----
   Catena di caricamento: app.js -> moon.js -> resilienza.js.
   Quindi qui _stile_base/_ricolora_base/_aggLegenda_base sono GIA' gli override
   della luna. La regola: se la luna è attiva (notturnoMode), NON tocco nulla e
   lascio fare a lei; se la resilienza è attiva, comando io; altrimenti base. */
const _stile_base = stile;
const _ricolora_base = ricolora;
const _aggLegenda_base = aggLegenda;

/* gradienti per la barra-legenda (percentuali esplicite: riempiono tutta la barra) */
const _GRD_FREQ   = 'linear-gradient(to right,rgb(70,150,90) 0%,rgb(150,180,90) 25%,rgb(220,190,90) 50%,rgb(210,120,55) 75%,rgb(170,45,40) 100%)';
const _GRD_EVENTO = 'linear-gradient(to right,rgb(150,35,32) 0%,rgb(195,110,60) 30%,rgb(214,182,112) 55%,rgb(120,170,95) 80%,rgb(55,140,150) 100%)';

/* colore frequenza: 0 volte = verde calmo -> molte volte = rosso allarme */
function coloreFreq(n){
  if(n==null) return '#333';
  const t = Math.max(0, Math.min(1, n/8));
  const stops=[[0,[70,150,90]],[.25,[150,180,90]],[.5,[220,190,90]],[.75,[210,120,55]],[1,[170,45,40]]];
  for(let i=0;i<stops.length-1;i++){const[t0,c0]=stops[i],[t1,c1]=stops[i+1];
    if(t>=t0&&t<=t1){const f=(t-t0)/(t1-t0);
      return`rgb(${Math.round(c0[0]+f*(c1[0]-c0[0]))},${Math.round(c0[1]+f*(c1[1]-c0[1]))},${Math.round(c0[2]+f*(c1[2]-c0[2]))})`;}}
  return '#888';
}
/* colore 2022: NDMI basso = rosso (sofferenza), alto = verde */
function coloreEvento(val){
  if(val==null) return '#333';
  const r=RESIL_NDMI;
  let t=Math.max(0,Math.min(1,(val-r.min)/(r.max-r.min||1)));
  const stops=[[0,[150,35,32]],[.3,[195,110,60]],[.55,[214,182,112]],[.8,[120,170,95]],[1,[55,140,150]]];
  for(let i=0;i<stops.length-1;i++){const[t0,c0]=stops[i],[t1,c1]=stops[i+1];
    if(t>=t0&&t<=t1){const f=(t-t0)/(t1-t0);
      return`rgb(${Math.round(c0[0]+f*(c1[0]-c0[0]))},${Math.round(c0[1]+f*(c1[1]-c0[1]))},${Math.round(c0[2]+f*(c1[2]-c0[2]))})`;}}
  return '#888';
}

/* override stile: luna ha priorità, poi resilienza, poi base */
stile = function(vid){
  if(typeof notturnoMode!=='undefined' && notturnoMode) return _stile_base(vid);
  if(!resilMode) return _stile_base(vid);
  const sel = vid===vidSel;
  const r = RESIL[vid];
  let fill = (resilMode==='freq') ? coloreFreq(r?r.n:null) : coloreEvento(r?r.v2022:null);
  return {fillColor:fill,
    fillOpacity: vidSel&&!sel ? 0.4 : 0.78,
    color: sel ? '#f0d878' : '#1a1a1a',
    weight: sel ? 3 : 0.7};
};

/* override ricolora: luna ha priorità; se resilienza attiva, ricoloro + tooltip + legenda */
ricolora = function(){
  if(typeof notturnoMode!=='undefined' && notturnoMode) return _ricolora_base();
  for(const vid in layers){
    layers[vid].setStyle(stile(vid));
    if(resilMode){
      const r = RESIL[vid], v = DATI[vid];
      const nome = (v && v.c ? v.c : 'Cartizze') + (v && v.q ? ' \u2014 '+v.q+' m' : '');
      let txt = (resilMode==='freq')
        ? nome+' \u00b7 '+(r?r.n:0)+' anni in sofferenza su 9'
        : nome+' \u00b7 stato idrico 2022: '+(r&&r.v2022!=null?r.v2022.toFixed(3):'n.d.');
      if(layers[vid].getTooltip()) layers[vid].setTooltipContent(txt);
    }
  }
  aggLegenda();
};

/* override legenda: luna ha priorità; se resilienza attiva, ridisegno barra+testo */
aggLegenda = function(){
  if(typeof notturnoMode!=='undefined' && notturnoMode) return _aggLegenda_base();
  if(!resilMode){
    // ripristino la larghezza fissa della barra (la resilienza l'allarga a 100%)
    const b = document.querySelector('#legend .leg-bar');
    if(b) b.style.width = '';
    return _aggLegenda_base();
  }
  const t = document.getElementById('leg-title');
  const lo = document.getElementById('leg-lo');
  const hi = document.getElementById('leg-hi');
  const bar = document.querySelector('#legend .leg-bar');
  const note = document.getElementById('leg-note');
  if(resilMode==='freq'){
    if(t) t.textContent = 'Anni in sofferenza idrica (2017\u20132025)';
    if(lo) lo.textContent = 'mai (0)';
    if(hi) hi.textContent = 'spesso (8)';
    if(bar){ bar.style.background = _GRD_FREQ; bar.style.backgroundSize = '100% 100%'; bar.style.width = '100%'; }
    if(note) note.textContent = 'pi\u00f9 rosso = ha sofferto pi\u00f9 spesso';
  } else {
    if(t) t.textContent = 'Stato idrico nel 2022 (anno-evento)';
    if(lo) lo.textContent = 'sofferto';
    if(hi) hi.textContent = 'tenuto';
    if(bar){ bar.style.background = _GRD_EVENTO; bar.style.backgroundSize = '100% 100%'; bar.style.width = '100%'; }
    if(note) note.textContent = 'l\u2019anno della siccit\u00e0: quasi tutto il colle in rosso';
  }
};

/* ---- UI: bottone Resilienza accanto agli altri controlli + sotto-barra ---- */
function buildResilienzaUI(){
  // bottone principale, inserito nell'area anno (come la luna)
  const host = document.getElementById('year-area') || document.body;
  const btn = document.createElement('button');
  btn.id = 'resil-btn';
  btn.title = 'Vista resilienza';
  btn.textContent = '\u26A1'; // ⚡
  host.appendChild(btn);

  // sotto-barra con le due viste + riga esplicativa sotto (tutto fermo, niente banner)
  const bar = document.createElement('div');
  bar.id = 'resil-bar';
  bar.style.display = 'none';
  bar.innerHTML =
    '<div class="resil-row">'+
      '<button class="resil-sub active" data-mode="freq">Danno locale \u00b7 9 anni</button>'+
      '<button class="resil-sub" data-mode="evento">Evento 2022</button>'+
    '</div>'+
    '<div id="resil-desc"></div>';
  host.appendChild(bar);

  const desc = bar.querySelector('#resil-desc');

  function setBanner(){
    if(resilMode==='freq')
      desc.textContent = 'Quante volte ogni vigna \u00e8 andata in sofferenza idrica in 9 anni';
    else
      desc.textContent = 'Nel 2022 il 95% del colle \u00e8 andato in sofferenza insieme';
  }

  function enterResil(mode){
    // se la luna è accesa, la spengo prima (i due stati non coesistono)
    if(typeof notturnoMode!=='undefined' && notturnoMode){
      const mb=document.getElementById('moon-btn'); if(mb) mb.click();
    }
    resilMode = mode;
    const yb=document.getElementById('year-bar'); if(yb) yb.style.display='none';
    const dt=document.getElementById('drawer-tabs'); if(dt) dt.style.display='none';
    bar.style.display='flex';
    btn.classList.add('active');
    setBanner();
    ricolora();
  }
  function exitResil(){
    resilMode = false;
    const yb=document.getElementById('year-bar'); if(yb) yb.style.display='';
    const dt=document.getElementById('drawer-tabs'); if(dt) dt.style.display='';
    bar.style.display='none';
    btn.classList.remove('active');
    // ripristino esplicito della barra-legenda alla rampa giorno
    aggLegenda();
    ricolora();
  }

  btn.onclick = ()=>{ resilMode ? exitResil() : enterResil('freq'); };

  // se l'utente accende la LUNA mentre la resilienza è attiva, spengo la resilienza
  // (intercetto in fase di cattura, prima che moon.js gestisca il suo click)
  const moonBtn = document.getElementById('moon-btn');
  if(moonBtn){
    moonBtn.addEventListener('click', ()=>{ if(resilMode) exitResil(); }, true);
  }

  bar.querySelectorAll('.resil-sub').forEach(b=>{
    b.onclick = ()=>{
      bar.querySelectorAll('.resil-sub').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      resilMode = b.dataset.mode;
      setBanner();
      ricolora();
    };
  });
}

/* avvio robusto: aspetta che #year-area esista davvero (moon.js potrebbe non
   aver ancora finito). Ritenta fino a 20 volte ogni 150ms, poi rinuncia. */
function avviaResilienza(tentativi){
  tentativi = tentativi || 0;
  const ya = document.getElementById('year-area');
  if(!ya){
    if(tentativi < 20){ setTimeout(()=>avviaResilienza(tentativi+1), 150); return; }
  }
  if(document.getElementById('resil-btn')) return; // già creato
  try {
    buildResilienzaUI();
  } catch(e){
    console.error('[resilienza] errore in buildResilienzaUI:', e);
  }
}

if(document.readyState!=='loading') avviaResilienza();
else document.addEventListener('DOMContentLoaded', ()=>avviaResilienza());
