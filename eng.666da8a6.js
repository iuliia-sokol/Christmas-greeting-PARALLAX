!function(){window.addEventListener("load",(function(){document.documentElement.classList.add("loaded");var e=document.querySelector(".page"),t=document.querySelectorAll('[class*="__inset"]'),n=0,a=0;e.addEventListener("mousemove",(function(e){!function(e){[.7,.9,.8,.5,.25,.6,.4,.3,.2].forEach((function(t){var n=20*(1-t),a=document.createElement("div"),o=30,r=Math.floor(Math.random()*(10*o-1*o)+1*o)/(1*o),s=r/20,c=r/120;a.style.position="fixed",a.classList.add("star-five"),a.style.zIndex=1e7,a.style.transform="rotate(35deg) scale(".concat(c,")"),a.style.top=e.pageY-window.scrollY+Math.round(Math.random()*n-n/2)-100+"px",a.style.left=e.pageX+Math.round(Math.random()*n-n/2)-100+"px",a.style.opacity=s,a.style.pointerEvents="none",document.body.appendChild(a);var l=window.setTimeout((function(){document.body.removeChild(a),clearTimeout(l)}),Math.round(Math.random()*t*1500))}))}(e);var t=window.innerWidth,n=e.pageX-t/2;a=n/t*100})),function e(o){n+=.05*(a-n),t.forEach((function(e){var t=e.dataset.prxValue?+e.dataset.prxValue:1;e.style.cssText="transform: translateX(".concat(n/t,"%)")})),requestAnimationFrame(e)}();var o=document.querySelector(".moon"),r=document.querySelectorAll(".building"),s=document.querySelector(".tree"),c=document.querySelector(".stairs"),l=document.querySelector(".train"),d=document.querySelectorAll(".santa>*"),i=document.querySelector(".arrow-container--main");function u(){var e=document.querySelector(".content__container"),t=window.innerHeight,n=scrollY/(e.offsetTop-t)*100;f(n<100?n:100)}function f(e){var t={translate:.7*e,scale:1+.02*e};i.style.cssText="transform: translate(0, ".concat(t.translate,"%) \n    scale(").concat(t.scale,") rotate(180deg)");var n={translate:.5*e,scale:1+.02*e};o.style.cssText="transform: translate(0, ".concat(n.translate,"%) \n    scale(").concat(n.scale,")");var a={translate:.7*e,scale:1+.02*e};c.style.cssText="transform: translate(0, ".concat(a.translate,"%) \n    scale(").concat(a.scale,")");var u={translate:.7*e,scale:1+.015*e};s.style.cssText="transform: translate(0, ".concat(u.translate,"%) \n    scale(").concat(u.scale,")"),r.forEach((function(t,n){var a={translate:30*(r.length-n)/100*e,scale:1+.02*e};t.style.cssText="transform: translate(0,".concat(a.translate,"%) \n    scale(").concat(a.scale,")")}));var f={translate:1*e};l.style.cssText="transform: translate(-".concat(f.translate,"%, ").concat(f.translate,"%)"),d.forEach((function(t,n){var a={left:(100+10*n)/100*e};t.style.left="".concat(a.left,"%")}))}window.addEventListener("scroll",u),u()}));var e=document.getElementById("audio"),t=document.querySelector(".audio-btn"),n=document.querySelector(".audio-btn-off");t.addEventListener("click",(function(t){e.play(),t.target.classList.add("visually-hidden"),n.classList.remove("visually-hidden")})),n.addEventListener("click",(function(a){e.pause(),e.currentTime=0,t.classList.remove("visually-hidden"),n.classList.add("visually-hidden")}));var a=document.querySelector(".content__container"),o=document.getElementById("audio-bells");window.addEventListener("scroll",(function(e){(function(e){for(var t=e.offsetTop,n=e.offsetLeft,a=e.offsetWidth,o=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,n+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&n<window.pageXOffset+window.innerWidth&&t+o>window.pageYOffset&&n+a>window.pageXOffset})(a)&&o.play()}))}();
//# sourceMappingURL=eng.666da8a6.js.map
