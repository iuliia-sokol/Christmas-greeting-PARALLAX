window.addEventListener("load",(function(){document.documentElement.classList.add("loaded");const e=document.querySelector(".page"),t=document.querySelectorAll('[class*="__inset"]');let n=0,o=0;e.addEventListener("mousemove",(function(e){!function(e){[.7,.9,.8,.5,.25,.6,.4,.3,.2].forEach((function(t){const n=20*(1-t),o=document.createElement("div"),s=30,a=Math.floor(Math.random()*(10*s-1*s)+1*s)/(1*s),r=a/20,c=a/120;o.style.position="fixed",o.classList.add("star-five"),o.style.zIndex=1e7,o.style.transform=`rotate(35deg) scale(${c})`,o.style.top=e.pageY-window.scrollY+Math.round(Math.random()*n-n/2)-100+"px",o.style.left=e.pageX+Math.round(Math.random()*n-n/2)-100+"px",o.style.opacity=r,o.style.pointerEvents="none",document.body.appendChild(o);let l=window.setTimeout((function(){document.body.removeChild(o),clearTimeout(l)}),Math.round(Math.random()*t*1500))}))}(e);const t=window.innerWidth,n=e.pageX-t/2;o=n/t*100})),function e(s){n+=.05*(o-n),t.forEach((e=>{const t=e.dataset.prxValue?+e.dataset.prxValue:1;e.style.cssText=`transform: translateX(${n/t}%)`})),requestAnimationFrame(e)}();const s=document.querySelector(".moon"),a=document.querySelectorAll(".building"),r=document.querySelector(".tree"),c=document.querySelector(".stairs"),l=document.querySelector(".train"),d=document.querySelectorAll(".santa>*"),i=document.querySelector(".arrow-container--main");function u(){const e=document.querySelector(".content__container"),t=window.innerHeight,n=scrollY/(e.offsetTop-t)*100;m(n<100?n:100)}function m(e){const t=.7*e,n=1+.02*e;i.style.cssText=`transform: translate(0, ${t}%) \n    scale(${n}) rotate(180deg)`;const o=.5*e,u=1+.02*e;s.style.cssText=`transform: translate(0, ${o}%) \n    scale(${u})`;const m=.7*e,y=1+.02*e;c.style.cssText=`transform: translate(0, ${m}%) \n    scale(${y})`;const f=.7*e,h=1+.015*e;r.style.cssText=`transform: translate(0, ${f}%) \n    scale(${h})`,a.forEach(((t,n)=>{const o=30*(a.length-n)/100*e,s=1+.02*e;t.style.cssText=`transform: translate(0,${o}%) \n    scale(${s})`}));const p=1*e;l.style.cssText=`transform: translate(-${p}%, ${p}%)`,d.forEach(((t,n)=>{const o=(100+10*n)/100*e;t.style.left=`${o}%`}))}window.addEventListener("scroll",u),u()}));const e=document.getElementById("audio"),t=document.querySelector(".audio-btn"),n=document.querySelector(".audio-btn-off");t.addEventListener("click",(t=>{e.play(),t.target.classList.add("visually-hidden"),n.classList.remove("visually-hidden")})),n.addEventListener("click",(o=>{e.pause(),e.currentTime=0,t.classList.remove("visually-hidden"),n.classList.add("visually-hidden")}));
//# sourceMappingURL=index.ff79118d.js.map
