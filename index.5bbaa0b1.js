window.addEventListener("load",(function(){document.documentElement.classList.add("loaded");var t=document.querySelector(".page"),e=document.querySelectorAll('[class*="__inset"]'),a=0,n=0;t.addEventListener("mousemove",(function(t){!function(t){[.7,.9,.8,.5,.25,.6,.4,.3,.2].forEach((function(e){var a=20*(1-e),n=document.createElement("div"),r=30,o=Math.floor(Math.random()*(10*r-1*r)+1*r)/(1*r),c=o/20,s=o/120;n.style.position="fixed",n.classList.add("star-five"),n.style.zIndex=1e7,n.style.transform="rotate(35deg) scale(".concat(s,")"),n.style.top=t.pageY-window.scrollY+Math.round(Math.random()*a-a/2)-100+"px",n.style.left=t.pageX+Math.round(Math.random()*a-a/2)-100+"px",n.style.opacity=c,n.style.pointerEvents="none",document.body.appendChild(n);var l=window.setTimeout((function(){document.body.removeChild(n),clearTimeout(l)}),Math.round(Math.random()*e*1500))}))}(t);var e=window.innerWidth,a=t.pageX-e/2;n=a/e*100})),function t(r){a+=.05*(n-a),e.forEach((function(t){var e=t.dataset.prxValue?+t.dataset.prxValue:1;t.style.cssText="transform: translateX(".concat(a/e,"%)")})),requestAnimationFrame(t)}();var r=document.querySelector(".moon"),o=document.querySelectorAll(".building"),c=document.querySelector(".tree"),s=document.querySelector(".stairs"),l=document.querySelector(".train"),d=document.querySelectorAll(".santa>*"),i=document.querySelector(".arrow-container--main");function u(){var t=document.querySelector(".content__container"),e=window.innerHeight,a=scrollY/(t.offsetTop-e)*100;m(a<100?a:100)}function m(t){var e={translate:.7*t,scale:1+.02*t};i.style.cssText="transform: translate(0, ".concat(e.translate,"%) \n    scale(").concat(e.scale,") rotate(180deg)");var a={translate:.5*t,scale:1+.02*t};r.style.cssText="transform: translate(0, ".concat(a.translate,"%) \n    scale(").concat(a.scale,")");var n={translate:.7*t,scale:1+.02*t};s.style.cssText="transform: translate(0, ".concat(n.translate,"%) \n    scale(").concat(n.scale,")");var u={translate:.7*t,scale:1+.015*t};c.style.cssText="transform: translate(0, ".concat(u.translate,"%) \n    scale(").concat(u.scale,")"),o.forEach((function(e,a){var n={translate:30*(o.length-a)/100*t,scale:1+.02*t};e.style.cssText="transform: translate(0,".concat(n.translate,"%) \n    scale(").concat(n.scale,")")}));var m={translate:1*t};l.style.cssText="transform: translate(-".concat(m.translate,"%, ").concat(m.translate,"%)"),d.forEach((function(e,a){var n={left:(100+10*a)/100*t};e.style.left="".concat(n.left,"%")}))}window.addEventListener("scroll",u),u()}));
//# sourceMappingURL=index.5bbaa0b1.js.map
