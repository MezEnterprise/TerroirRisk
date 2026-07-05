(function(){
  var DATA={
    sassicaia:{
      ws_y:[2000,2001,2003,2004,2005,2006,2007,2009,2010,2011,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      ws_s:[92,93,90,92,94,92,91,93,92,91,89,88,94,95,93,94,95,93,92,94,93],
      mod_y:[2000,2001,2003,2004,2005,2006,2007,2009,2010,2011,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      mod_s:[91.4,92.6,89.8,91.9,93.4,91.7,90.5,92.8,91.6,90.9,88.7,88.1,93.5,94.2,92.8,93.6,94.3,92.5,91.8,93.7,92.9],
      pred:93.1,bandLo:90.9,bandHi:95.3,
      name:"Sassicaia",sub:"Bolgheri Sassicaia DOC",img:"sassicaia.png"
    },
    ornellaia:{
      ws_y:[2000,2001,2003,2004,2005,2006,2007,2009,2010,2011,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      ws_s:[93,94,91,93,95,94,93,95,94,93,90,89,96,97,95,96,97,95,94,96,95],
      mod_y:[2000,2001,2003,2004,2005,2006,2007,2009,2010,2011,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      mod_s:[92.3,93.5,90.5,92.6,94.5,92.9,92.0,94.1,93.0,92.2,89.9,89.0,95.1,96.0,94.4,95.2,96.1,94.0,93.2,95.4,94.6],
      pred:94.9,bandLo:92.7,bandHi:97.1,
      name:"Ornellaia",sub:"Bolgheri Superiore DOC",img:"ornellaia.png"
    }
  };

  var current='sassicaia';

  function draw(){
    var d=DATA[current];
    var canvas=document.getElementById('chart');
    if(!canvas||!d)return;
    var dpr=window.devicePixelRatio||1;
    var W=canvas.offsetWidth,H=canvas.offsetHeight;
    if(!W||!H)return;
    canvas.width=W*dpr;canvas.height=H*dpr;
    var ctx=canvas.getContext('2d');ctx.scale(dpr,dpr);
    var PAD={top:14,right:96,bottom:28,left:34};
    var cw=W-PAD.left-PAD.right,ch=H-PAD.top-PAD.bottom;
    var minY=1999,maxY=2026,minS=86,maxS=99;
    function xp(yr){return PAD.left+(yr-minY)/(maxY-minY)*cw}
    function yp(s){return PAD.top+(1-(s-minS)/(maxS-minS))*ch}

    [88,91,94,97].forEach(function(s){
      ctx.strokeStyle='rgba(255,255,255,0.05)';ctx.lineWidth=1;ctx.setLineDash([]);
      ctx.beginPath();ctx.moveTo(PAD.left,yp(s));ctx.lineTo(PAD.left+cw,yp(s));ctx.stroke();
      ctx.fillStyle='rgba(106,96,128,0.6)';ctx.font='9px Inter,sans-serif';ctx.textAlign='right';
      ctx.fillText(s,PAD.left-4,yp(s)+3);
    });
    ctx.fillStyle='rgba(106,96,128,0.55)';ctx.font='9px Inter,sans-serif';ctx.textAlign='center';
    [2000,2005,2010,2015,2020,2025].forEach(function(y){
      ctx.fillText(y,xp(y),H-PAD.bottom+12);
    });

    var xDiv=xp(2024.5);
    ctx.strokeStyle='rgba(255,255,255,0.1)';ctx.lineWidth=1;ctx.setLineDash([2,3]);
    ctx.beginPath();ctx.moveTo(xDiv,PAD.top);ctx.lineTo(xDiv,PAD.top+ch);ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle='rgba(106,96,128,0.7)';ctx.font='8px Inter,sans-serif';ctx.textAlign='left';
    ctx.fillText('CRITICS STOP',xDiv+5,PAD.top+10);

    var xb0=xp(2025)-4,xb1=xp(2026);
    var bg=ctx.createLinearGradient(xb0,0,xb1,0);
    bg.addColorStop(0,'rgba(111,143,205,0.05)');
    bg.addColorStop(0.5,'rgba(111,143,205,0.22)');
    bg.addColorStop(1,'rgba(111,143,205,0.05)');
    ctx.fillStyle=bg;ctx.fillRect(xb0,yp(d.bandHi),xb1-xb0,yp(d.bandLo)-yp(d.bandHi));
    ctx.strokeStyle='rgba(111,143,205,0.4)';ctx.lineWidth=1;ctx.setLineDash([4,3]);
    ctx.beginPath();ctx.moveTo(xb0,yp(d.bandHi));ctx.lineTo(xb1,yp(d.bandHi));ctx.stroke();
    ctx.beginPath();ctx.moveTo(xb0,yp(d.bandLo));ctx.lineTo(xb1,yp(d.bandLo));ctx.stroke();
    ctx.setLineDash([]);

    function line(ys,ss,color,w,dash,glow){
      ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=w;ctx.lineJoin='round';
      if(dash)ctx.setLineDash(dash);else ctx.setLineDash([]);
      if(glow){ctx.shadowColor='rgba(111,143,205,0.8)';ctx.shadowBlur=8;}
      ys.forEach(function(y,i){i===0?ctx.moveTo(xp(y),yp(ss[i])):ctx.lineTo(xp(y),yp(ss[i]));});
      ctx.stroke();ctx.shadowBlur=0;ctx.setLineDash([]);
    }
    line(d.ws_y,d.ws_s,'rgba(111,143,205,0.6)',1.3,[5,3]);
    line(d.mod_y,d.mod_s,'#fff',2.4,null,true);

    var lastMod=d.mod_s[d.mod_s.length-1];
    ctx.strokeStyle='rgba(255,255,255,0.5)';ctx.lineWidth=1.5;ctx.setLineDash([2,2]);
    ctx.beginPath();ctx.moveTo(xp(d.mod_y[d.mod_y.length-1]),yp(lastMod));
    ctx.lineTo(xp(2025.5),yp(d.pred));ctx.stroke();ctx.setLineDash([]);
    var xP=xp(2025.5),yP=yp(d.pred);
    ctx.beginPath();ctx.arc(xP,yP,8,0,Math.PI*2);ctx.fillStyle='rgba(111,143,205,0.3)';ctx.fill();
    ctx.beginPath();ctx.arc(xP,yP,4,0,Math.PI*2);ctx.fillStyle='#fff';
    ctx.shadowColor='rgba(111,143,205,1)';ctx.shadowBlur=12;ctx.fill();ctx.shadowBlur=0;
    ctx.fillStyle='#fff';ctx.font='600 12px Inter,sans-serif';ctx.textAlign='center';
    ctx.fillText(d.pred,xP,yP-14);
  }

  function updateUI(){
    var d=DATA[current];
    document.getElementById('p-num').textContent=d.pred;
    document.getElementById('p-band').textContent='range '+d.bandLo+' \u2013 '+d.bandHi;
    document.getElementById('b-name').textContent=d.name;
    document.getElementById('b-sub').textContent=d.sub;
    document.getElementById('s-pred').textContent=d.pred;
    document.getElementById('s-pred-sub').textContent='Sealed July 2026 · bottled score expected 2027';
    var img=document.getElementById('b-img');
    if(d.img){img.src=d.img;img.style.display='block';}
    else{img.style.display='none';}
  }

  document.getElementById('selector').addEventListener('click',function(e){
    var btn=e.target.closest('.sel-btn');
    if(!btn||btn.classList.contains('soon'))return;
    document.querySelectorAll('.sel-btn').forEach(function(b){b.classList.remove('active')});
    btn.classList.add('active');
    current=btn.dataset.ch;
    updateUI();draw();
  });

  function countUp(){
    var targets=[{id:'hero-count',v:93.1},{id:'hero-count-2',v:94.9}];
    targets.forEach(function(t){
      var el=document.getElementById(t.id);
      if(!el)return;
      var start=null,dur=900,done=false;
      function step(ts){
        if(!start)start=ts;
        var p=Math.min((ts-start)/dur,1);
        var eased=1-Math.pow(1-p,3);
        el.textContent=(t.v*eased).toFixed(1);
        if(p<1)requestAnimationFrame(step);else el.textContent=t.v.toFixed(1);
      }
      function trigger(){if(done)return;done=true;requestAnimationFrame(step);}
      if('IntersectionObserver' in window){
        var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)trigger();});},{threshold:0.4});
        io.observe(el);
      }else trigger();
    });
  }

  function init(){updateUI();setTimeout(draw,80);countUp();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  window.addEventListener('resize',draw);
})();
