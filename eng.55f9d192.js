!function(){window.addEventListener("load",(function(){document.documentElement.classList.add("loaded");var e=document.querySelector(".page"),t=document.querySelectorAll('[class*="__inset"]'),a=0,n=0;e.addEventListener("mousemove",(function(e){!function(e){[.7,.9,.8,.5,.25,.6,.4,.3,.2].forEach((function(t){var a=20*(1-t),n=document.createElement("div"),o=30,r=Math.floor(Math.random()*(10*o-1*o)+1*o)/(1*o),c=r/20,s=r/120;n.style.position="fixed",n.classList.add("star-five"),n.style.zIndex=1e7,n.style.transform="rotate(35deg) scale(".concat(s,")"),n.style.top=e.pageY-window.scrollY+Math.round(Math.random()*a-a/2)-100+"px",n.style.left=e.pageX+Math.round(Math.random()*a-a/2)-100+"px",n.style.opacity=c,n.style.pointerEvents="none",document.body.appendChild(n);var l=window.setTimeout((function(){document.body.removeChild(n),clearTimeout(l)}),Math.round(Math.random()*t*1500))}))}(e);var t=window.innerWidth,a=e.pageX-t/2;n=a/t*100})),function e(o){a+=.05*(n-a),t.forEach((function(e){var t=e.dataset.prxValue?+e.dataset.prxValue:1;e.style.cssText="transform: translateX(".concat(a/t,"%)")})),requestAnimationFrame(e)}();var o=document.querySelector(".moon"),r=document.querySelectorAll(".building"),c=document.querySelector(".tree"),s=document.querySelector(".stairs"),l=document.querySelector(".train"),d=document.querySelectorAll(".santa>*"),i=document.querySelector(".arrow-container--main");function u(){var e=document.getElementById("audio-bells"),t=document.querySelector(".content__container"),a=window.innerHeight;function n(t){e.play()}var o=scrollY/(t.offsetTop-a)*100;o>=100?(m(100),t.addEventListener("mouseenter",n)):(m(o),t.removeEventListener("mouseenter",n))}function m(e){var t={translate:.7*e,scale:1+.02*e};i.style.cssText="transform: translate(0, ".concat(t.translate,"%) \n    scale(").concat(t.scale,") rotate(180deg)");var a={translate:.5*e,scale:1+.02*e};o.style.cssText="transform: translate(0, ".concat(a.translate,"%) \n    scale(").concat(a.scale,")");var n={translate:.7*e,scale:1+.02*e};s.style.cssText="transform: translate(0, ".concat(n.translate,"%) \n    scale(").concat(n.scale,")");var u={translate:.7*e,scale:1+.015*e};c.style.cssText="transform: translate(0, ".concat(u.translate,"%) \n    scale(").concat(u.scale,")"),r.forEach((function(t,a){var n={translate:30*(r.length-a)/100*e,scale:1+.02*e};t.style.cssText="transform: translate(0,".concat(n.translate,"%) \n    scale(").concat(n.scale,")")}));var m={translate:1*e};l.style.cssText="transform: translate(-".concat(m.translate,"%, ").concat(m.translate,"%)"),d.forEach((function(t,a){var n={left:(100+10*a)/100*e};t.style.left="".concat(n.left,"%")}))}window.addEventListener("scroll",u),u()}));var e=document.getElementById("audio"),t=document.querySelector(".audio-btn"),a=document.querySelector(".audio-btn-off");t.addEventListener("click",(function(t){e.play(),t.target.classList.add("visually-hidden"),a.classList.remove("visually-hidden")})),a.addEventListener("click",(function(n){e.pause(),e.currentTime=0,t.classList.remove("visually-hidden"),a.classList.add("visually-hidden")}))}();
//# sourceMappingURL=eng.55f9d192.js.map
