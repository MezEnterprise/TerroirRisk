(function(){
  var DATA={
    sassicaia:{
      ws_y:[1982,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      ws_s:[92,91,100,93,86,87,79,93,81,91,87,88,91,92,85,91,89,87,87,88,92,90,93,96,94,97,97,91,95,91,97,93,97,98,94,97,97,94,100,96,100],
      mod_y:[1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      mod_s:[92.79,94.63,94.1,93.89,93.97,93.46,93.41,93.3,93.67,92.67,92.4,93.01,92.97,94.39,92.83,93.22,93.97,93.59,93.0,93.7,93.68,93.11,93.59,93.33,93.54,93.43,93.43,93.84,92.95,93.23,93.14,92.87,93.71,94.62,96.15,95.83,96.33,96.19,95.48,96.69],
      pred:93.1,bandLo:90.9,bandHi:95.3,
      name:"Sassicaia",sub:"Bolgheri Sassicaia DOC",img:"sassicaia.png"
    },
    ornellaia:{
      ws_y:[1988,1989,1990,1993,1995,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      ws_s:[93,76,92,88,92,94,93,94,91,96,92,93,95,93,97,93,97,97,97,94,94,96,94,93,98,96,95,97,95,96,97,98],
      mod_y:[1988,1989,1990,1993,1995,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      mod_s:[93.97,93.46,93.41,92.67,93.01,94.39,92.83,93.22,93.97,93.59,93.0,93.7,93.68,93.11,93.59,93.33,93.54,93.43,93.43,93.84,92.95,93.23,93.14,92.87,93.71,94.62,96.15,95.83,96.33,96.19,95.48,96.69],
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
    var PAD={top:14,right:36,bottom:28,left:34};
    var cw=W-PAD.left-PAD.right,ch=H-PAD.top-PAD.bottom;
    var minY=Math.min.apply(null,d.ws_y)-1, maxY=2026;
    var minS=Math.floor(Math.min.apply(null,d.ws_s)/5)*5-2, maxS=Math.ceil(Math.max.apply(null,d.ws_s)/5)*5+1;
    function xp(yr){return PAD.left+(yr-minY)/(maxY-minY)*cw}
    function yp(s){return PAD.top+(1-(s-minS)/(maxS-minS))*ch}

    var gridStep = (maxS-minS>20)?5:3;
    for(var s=Math.ceil(minS/gridStep)*gridStep; s<=maxS; s+=gridStep){
      ctx.strokeStyle='rgba(255,255,255,0.05)';ctx.lineWidth=1;ctx.setLineDash([]);
      ctx.beginPath();ctx.moveTo(PAD.left,yp(s));ctx.lineTo(PAD.left+cw,yp(s));ctx.stroke();
      ctx.fillStyle='rgba(106,96,128,0.6)';ctx.font='9px Inter,sans-serif';ctx.textAlign='right';
      ctx.fillText(s,PAD.left-4,yp(s)+3);
    }
    ctx.fillStyle='rgba(106,96,128,0.55)';ctx.font='9px Inter,sans-serif';ctx.textAlign='center';
    var yearStep = (maxY-minY>30)?10:5;
    for(var y=Math.ceil(minY/yearStep)*yearStep; y<=maxY; y+=yearStep){
      ctx.fillText(y,xp(y),H-PAD.bottom+12);
    }

    if(d.pred && d.bandLo && d.bandHi){
      var xb0=xp(2024.5),xb1=xp(2026);
      var bg=ctx.createLinearGradient(xb0,0,xb1,0);
      bg.addColorStop(0,'rgba(111,143,205,0.05)');
      bg.addColorStop(0.5,'rgba(111,143,205,0.22)');
      bg.addColorStop(1,'rgba(111,143,205,0.05)');
      ctx.fillStyle=bg;ctx.fillRect(xb0,yp(d.bandHi),xb1-xb0,yp(d.bandLo)-yp(d.bandHi));
      ctx.strokeStyle='rgba(111,143,205,0.4)';ctx.lineWidth=1;ctx.setLineDash([4,3]);
      ctx.beginPath();ctx.moveTo(xb0,yp(d.bandHi));ctx.lineTo(xb1,yp(d.bandHi));ctx.stroke();
      ctx.beginPath();ctx.moveTo(xb0,yp(d.bandLo));ctx.lineTo(xb1,yp(d.bandLo));ctx.stroke();
      ctx.setLineDash([]);
    }

    function line(ys,ss,color,w,dash,glow){
      if(!ys.length)return;
      ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=w;ctx.lineJoin='round';
      if(dash)ctx.setLineDash(dash);else ctx.setLineDash([]);
      if(glow){ctx.shadowColor=color;ctx.shadowBlur=6;}
      ys.forEach(function(y,i){i===0?ctx.moveTo(xp(y),yp(ss[i])):ctx.lineTo(xp(y),yp(ss[i]));});
      ctx.stroke();ctx.shadowBlur=0;ctx.setLineDash([]);
    }
    line(d.ws_y,d.ws_s,'rgba(111,143,205,0.6)',1.3,[5,3]);
    line(d.mod_y,d.mod_s,'#fff',2,null,true);

    if(d.mod_y.length && d.pred){
      var lastMod=d.mod_s[d.mod_s.length-1];
      var lastYr=d.mod_y[d.mod_y.length-1];
      ctx.strokeStyle='rgba(255,255,255,0.5)';ctx.lineWidth=1.5;ctx.setLineDash([2,2]);
      ctx.beginPath();ctx.moveTo(xp(lastYr),yp(lastMod));
      ctx.lineTo(xp(2025),yp(d.pred));ctx.stroke();ctx.setLineDash([]);
      var xP=xp(2025),yP=yp(d.pred);
      ctx.beginPath();ctx.arc(xP,yP,7,0,Math.PI*2);ctx.fillStyle='rgba(111,143,205,0.3)';ctx.fill();
      ctx.beginPath();ctx.arc(xP,yP,3.5,0,Math.PI*2);ctx.fillStyle='#fff';
      ctx.shadowColor='rgba(111,143,205,1)';ctx.shadowBlur=10;ctx.fill();ctx.shadowBlur=0;
      ctx.fillStyle='#fff';ctx.font='600 11px Inter,sans-serif';ctx.textAlign='center';
      ctx.fillText(d.pred,xP,yP-12);
    }
  }

  function updateUI(){
    var d=DATA[current];
    document.getElementById('b-name').textContent=d.name;
    document.getElementById('b-sub').textContent=d.sub;
    var img=document.getElementById('b-img');
    if(d.img){img.src=d.img;img.style.display='block';}
    else{img.style.display='none';}
    var pNum=document.getElementById('p-num');
    if(pNum) pNum.textContent=d.pred;
    var pBand=document.getElementById('p-band');
    if(pBand) pBand.textContent='range '+d.bandLo+' \u2013 '+d.bandHi;
    var sealLink=document.getElementById('seal-link');
    if(sealLink) sealLink.href='https://github.com/MezEnterprise/TerroirRisk/blob/main/Sealed/bolgheri_2025_prediction.ots';
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
