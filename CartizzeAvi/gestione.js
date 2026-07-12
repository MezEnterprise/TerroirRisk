/* =========================================================================
   gestione.js  —  VISTA GESTIONE (modello "kcal della vigna") per Cartizze
   -------------------------------------------------------------------------
   Caricato DOPO app.js, moon.js, resilienza.js. Stesso pattern di override:
   la luna ha priorita', poi la resilienza, poi la gestione, poi base.
   Nessun fetch: dati embeddati, gia' calcolati dal modello kcal.

   MODELLO (validato con agronomo, vocale dell'11/06):
   due assi -> DOTAZIONE (vigore medio 9 anni: quanto il terreno nutre da se')
   x TENUTA IDRICA (quanto regge nelle annate secche, da NDVI 2022 vs media).
   Quattro stati. CORREZIONE AGRONOMO: il calo nelle secche e' SETE, non fame.
   In asciutta su Glera la pianta l'azoto se lo procura; quindi l'azione sulle
   vigne vigorose-ma-instabili e' ACQUA, non concime. Il concime resta solo
   come piccola restituzione di cio' che la vendemmia asporta (nota trasversale).
   ========================================================================= */

/* vid -> [dotaz_rel, tenuta_2022, stato]  (R=rigogliosa D=discontinua S=sobria X=sofferenza) */
const GEST = {"V001":[-0.004,-0.098,"S"],"V002":[0.035,-0.107,"D"],"V003":[0.015,-0.121,"D"],"V004":[0.033,-0.065,"R"],"V005":[0.018,-0.044,"R"],"V006":[0.013,-0.054,"R"],"V007":[0.039,-0.105,"D"],"V008":[-0.021,-0.116,"X"],"V009":[-0.004,-0.062,"S"],"V010":[0.035,-0.096,"R"],"V011":[0.028,-0.096,"R"],"V012":[-0.026,-0.139,"X"],"V013":[0.01,-0.157,"D"],"V014":[-0.016,-0.114,"X"],"V015":[0.016,-0.058,"R"],"V016":[0.019,-0.095,"R"],"V017":[0.013,-0.152,"D"],"V018":[0.012,-0.132,"D"],"V019":[0.013,-0.134,"D"],"V020":[0.003,-0.09,"R"],"V021":[-0.02,-0.127,"X"],"V022":[0.027,-0.11,"D"],"V023":[0.021,-0.112,"D"],"V024":[0.018,-0.108,"D"],"V025":[0.008,-0.126,"D"],"V026":[0.005,-0.125,"D"],"V027":[-0.012,-0.084,"S"],"V028":[0.026,-0.063,"R"],"V029":[0.022,-0.098,"R"],"V030":[-0.001,-0.081,"S"],"V031":[-0.015,-0.106,"X"],"V032":[-0.007,-0.134,"X"],"V033":[-0.008,-0.144,"X"],"V034":[-0.026,-0.042,"S"],"V035":[-0.003,-0.035,"S"],"V036":[0.0,-0.088,"R"],"V037":[0.023,-0.092,"R"],"V038":[-0.022,-0.076,"S"],"V039":[-0.02,-0.071,"S"],"V040":[-0.019,-0.117,"X"],"V041":[-0.046,-0.139,"X"],"V042":[-0.008,-0.044,"S"],"V043":[0.027,-0.081,"R"],"V044":[-0.001,-0.21,"X"],"V045":[0.024,-0.103,"D"],"V046":[-0.023,-0.142,"X"],"V047":[-0.039,-0.12,"X"],"V048":[0.006,-0.103,"D"],"V049":[0.008,-0.075,"R"],"V050":[-0.051,-0.137,"X"],"V051":[-0.005,-0.057,"S"],"V052":[-0.033,-0.076,"S"],"V053":[-0.02,-0.106,"X"],"V054":[-0.005,-0.141,"X"],"V055":[-0.022,-0.105,"X"],"V056":[0.024,-0.098,"R"],"V057":[-0.014,-0.087,"S"],"V058":[0.075,-0.109,"D"],"V059":[0.05,-0.078,"R"],"V060":[-0.04,-0.107,"X"],"V061":[-0.048,-0.086,"S"],"V062":[-0.008,-0.123,"X"],"V063":[-0.014,-0.117,"X"],"V064":[-0.015,-0.073,"S"],"V065":[0.037,-0.076,"R"],"V066":[-0.029,-0.094,"S"],"V067":[0.02,-0.094,"R"],"V068":[0.018,-0.065,"R"],"V069":[-0.005,-0.062,"S"],"V070":[0.025,-0.023,"R"],"V071":[-0.033,-0.081,"S"],"V072":[-0.025,-0.148,"X"],"V073":[-0.049,-0.121,"X"],"V074":[-0.001,-0.161,"X"],"V075":[0.01,-0.11,"D"],"V076":[0.005,-0.105,"D"],"V077":[-0.035,-0.173,"X"],"V078":[-0.005,-0.066,"S"],"V079":[0.028,-0.085,"R"],"V080":[-0.003,-0.092,"S"],"V081":[-0.009,-0.105,"X"],"V082":[-0.012,-0.072,"S"],"V083":[0.01,-0.058,"R"]};

/* definizione dei 4 stati: colore-foglia, nome, azione, testi drawer */
const GEST_STATI = {
  R: { col:'#1D9E75', nome:'Rigogliosa', azione:'mantieni', colAz:'#1D9E75',
       vede:'vigore alto e costante, regge anche le annate secche',
       cosa:'il terreno la nutre da se\u2019: suolo profondo, riserve idriche proprie',
       vigna:'non forzare \u2014 solo piccola restituzione di cio\u2019 che la vendemmia asporta',
       cantina:'base solida e regolare; raramente d\u00e0 le punte di concentrazione delle pi\u00f9 magre' },
  D: { col:'#EF9F27', nome:'Discontinua', azione:'acqua', colAz:'#BA7517',
       vede:'vigorosa nelle buone annate, cala quando manca la pioggia',
       cosa:'il limite \u00e8 l\u2019acqua, non il nutrimento: nelle secche ha sete, non fame',
       vigna:'gestione idrica (soccorso, bacino, pacciamatura); concime solo di restituzione',
       cantina:'lo stress idrico lieve pu\u00f2 concentrare zuccheri e aromi \u2014 spesso un pregio, da leggere col palato' },
  S: { col:'#B4B2A9', nome:'Sobria', azione:'gestisci', colAz:'#8a8478',
       vede:'vigore contenuto ma stabile negli anni',
       cosa:'pianta in equilibrio su suolo magro, resa naturalmente bassa',
       vigna:'non spingere la crescita; controlla solo il drenaggio',
       cantina:'la magrezza \u00e8 spesso qualit\u00e0 nel Cartizze: bassa resa, pi\u00f9 concentrazione' },
  X: { col:'#993C1D', nome:'In sofferenza', azione:'investi', colAz:'#993C1D',
       vede:'vigore basso e instabile ogni anno',
       cosa:'limite strutturale: la pianta non trova acqua a sufficienza',
       vigna:'qui un bacino o l\u2019irrigazione di soccorso si ripagano nel tempo',
       cantina:'difficile cavarne costanza; da valutare se vale l\u2019investimento idrico' }
};

let gestMode = false;

const _stile_g = stile;
const _ricolora_g = ricolora;
const _aggLegenda_g = aggLegenda;

function _gActive(){ return typeof notturnoMode!=='undefined' && notturnoMode; }
function _gResil(){ return typeof resilMode!=='undefined' && resilMode; }

/* override stile: luna > resilienza > gestione > base */
stile = function(vid){
  if(_gActive() || _gResil() || !gestMode) return _stile_g(vid);
  const sel = vid===vidSel;
  const g = GEST[vid];
  const col = g ? GEST_STATI[g[2]].col : '#333';
  return { fillColor:col,
    fillOpacity: vidSel&&!sel ? 0.4 : 0.72,
    color: sel ? '#f0d878' : '#1a1a1a',
    weight: sel ? 3 : 0.7 };
};

ricolora = function(){
  if(_gActive() || _gResil() || !gestMode) return _ricolora_g();
  for(const vid in layers){
    layers[vid].setStyle(stile(vid));
    const g = GEST[vid], v = DATI[vid];
    if(g){
      const st = GEST_STATI[g[2]];
      const nome = (v&&v.c?v.c:'Cartizze') + (v&&v.q?' \u2014 '+v.q+' m':'');
      if(layers[vid].getTooltip())
        layers[vid].setTooltipContent(nome+' \u00b7 '+st.nome+' \u2192 '+st.azione);
    }
  }
  aggLegenda();
};

/* legenda: 4 pastiglie-foglia invece della rampa continua */
aggLegenda = function(){
  if(_gActive() || _gResil() || !gestMode){
    const b=document.querySelector('#legend .leg-bar');
    if(b){ b.style.display=''; }
    const ex=document.getElementById('gest-legend'); if(ex) ex.style.display='none';
    return _aggLegenda_g();
  }
  const t=document.getElementById('leg-title');
  const bar=document.querySelector('#legend .leg-bar');
  const labs=document.querySelector('#legend .leg-labels');
  const note=document.getElementById('leg-note');
  if(t) t.textContent='Come si comporta la vigna';
  if(bar) bar.style.display='none';
  if(labs) labs.style.display='none';
  if(note) note.textContent='non quanto \u00e8 verde, ma come gestisce le risorse nel tempo';
  let leg=document.getElementById('gest-legend');
  if(!leg){
    leg=document.createElement('div'); leg.id='gest-legend';
    note.parentNode.insertBefore(leg, note);
  }
  leg.style.display='block';
  leg.innerHTML = ['R','D','S','X'].map(k=>{
    const s=GEST_STATI[k];
    return '<div class="gl-row"><span class="gl-leaf" style="background:'+s.col+'"></span>'+
      '<span class="gl-name">'+s.nome+'</span>'+
      '<span class="gl-az" style="color:'+s.colAz+'">'+s.azione+'</span></div>';
  }).join('');
};

/* drawer: quando gestMode e' attivo, inietta la scheda stato al posto degli indici */
function gestDrawer(vid){
  const g=GEST[vid]; if(!g) return;
  const st=GEST_STATI[g[2]];
  let box=document.getElementById('gest-card');
  const body=document.getElementById('drawer-body');
  if(!box){
    box=document.createElement('div'); box.id='gest-card';
    body.insertBefore(box, body.firstChild);
  }
  box.style.display='block';
  box.innerHTML =
    '<div class="gc-head"><span class="gc-leaf" style="background:'+st.col+'"></span>'+
      '<span class="gc-name">'+st.nome+'</span>'+
      '<span class="gc-az" style="color:'+st.colAz+';border-color:'+st.colAz+'">'+st.azione+'</span></div>'+
    '<div class="gc-row"><span class="gc-lbl">Cosa vede AVI</span><span class="gc-txt">'+st.vede+'</span></div>'+
    '<div class="gc-row"><span class="gc-lbl">Significato</span><span class="gc-txt">'+st.cosa+'</span></div>'+
    '<div class="gc-row"><span class="gc-lbl">In vigna</span><span class="gc-txt">'+st.vigna+'</span></div>'+
    '<div class="gc-row"><span class="gc-lbl">In cantina</span><span class="gc-txt">'+st.cantina+'</span></div>'+
    '<div class="gc-data">dotazione '+(g[0]>=0?'+':'')+g[0]+' vs media \u00b7 tenuta 2022 '+g[1]+'</div>';
}
function gestDrawerHide(){
  const box=document.getElementById('gest-card'); if(box) box.style.display='none';
}

/* aggancio al click vigna: estendo aggDrawer per mostrare/nascondere la scheda */
if(typeof aggDrawer==='function'){
  const _aggDrawer_g = aggDrawer;
  aggDrawer = function(){
    _aggDrawer_g.apply(this, arguments);
    if(gestMode && vidSel){ gestDrawer(vidSel); }
    else { gestDrawerHide(); }
  };
}

/* ---- UI: bottone foglia accanto a luna e fulmine ---- */
function buildGestioneUI(){
  const host=document.getElementById('year-area')||document.body;
  if(document.getElementById('gest-btn')) return;
  const btn=document.createElement('button');
  btn.id='gest-btn'; btn.title='Vista gestione \u00b7 come si comporta la vigna';
  btn.textContent='\uD83C\uDF43'; // 🍃
  host.appendChild(btn);

  const desc=document.createElement('div');
  desc.id='gest-desc'; desc.style.display='none';
  desc.textContent='Non quanto \u00e8 verde una vigna, ma come gestisce acqua e nutrienti nel tempo. Clicca una parcella per il dettaglio.';
  host.appendChild(desc);

  function enter(){
    if(_gActive()){ const mb=document.getElementById('moon-btn'); if(mb) mb.click(); }
    if(_gResil()){ const rb=document.getElementById('resil-btn'); if(rb) rb.click(); }
    gestMode=true;
    const yb=document.getElementById('year-bar'); if(yb) yb.style.display='none';
    const dt=document.getElementById('drawer-tabs'); if(dt) dt.style.display='none';
    desc.style.display='block'; btn.classList.add('active');
    ricolora(); if(vidSel) gestDrawer(vidSel);
  }
  function exit(){
    gestMode=false;
    const yb=document.getElementById('year-bar'); if(yb) yb.style.display='';
    const dt=document.getElementById('drawer-tabs'); if(dt) dt.style.display='';
    desc.style.display='none'; btn.classList.remove('active');
    gestDrawerHide(); aggLegenda(); ricolora();
    if(vidSel && typeof aggDrawer==='function') aggDrawer();
  }
  btn.onclick=()=> gestMode ? exit() : enter();

  /* se accendo luna o fulmine mentre gestione e' attiva, spengo gestione */
  ['moon-btn','resil-btn'].forEach(id=>{
    const b=document.getElementById(id);
    if(b) b.addEventListener('click', ()=>{ if(gestMode) exit(); }, true);
  });
}

function avviaGestione(t){
  t=t||0;
  const ya=document.getElementById('year-area');
  if(!ya){ if(t<25){ setTimeout(()=>avviaGestione(t+1),150); return; } }
  try{ buildGestioneUI(); }catch(e){ console.error('[gestione]',e); }
}
if(document.readyState!=='loading') avviaGestione();
else document.addEventListener('DOMContentLoaded',()=>avviaGestione());
