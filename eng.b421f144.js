!function(){window.addEventListener("load",(function(){document.documentElement.classList.add("loaded");var e=document.querySelector(".page"),t=document.querySelectorAll('[class*="__inset"]'),n=0,a=0;e.addEventListener("mousemove",(function(e){!function(e){[.7,.9,.8,.5,.25,.6,.4,.3,.2].forEach((function(t){var n=20*(1-t),a=document.createElement("div"),o=30,r=Math.floor(Math.random()*(10*o-1*o)+1*o)/(1*o),c=r/20,l=r/120;a.style.position="fixed",a.classList.add("star-five"),a.style.zIndex=1e7,a.style.transform="rotate(35deg) scale(".concat(l,")"),a.style.top=e.pageY-window.scrollY+Math.round(Math.random()*n-n/2)-100+"px",a.style.left=e.pageX+Math.round(Math.random()*n-n/2)-100+"px",a.style.opacity=c,a.style.pointerEvents="none",document.body.appendChild(a);var s=window.setTimeout((function(){document.body.removeChild(a),clearTimeout(s)}),Math.round(Math.random()*t*1500))}))}(e);var t=window.innerWidth,n=e.pageX-t/2;a=n/t*100})),function e(o){n+=.05*(a-n),t.forEach((function(e){var t=e.dataset.prxValue?+e.dataset.prxValue:1;e.style.cssText="transform: translateX(".concat(n/t,"%)")})),requestAnimationFrame(e)}();var o=document.querySelector(".moon"),r=document.querySelectorAll(".building"),c=document.querySelector(".tree"),l=document.querySelector(".stairs"),s=document.querySelector(".train"),i=document.querySelectorAll(".santa>*"),d=document.querySelector(".arrow-container--main");function u(){var e=document.getElementById("audio-bells");function t(t){e.play()}var n=document.querySelector(".content__container"),a=window.innerHeight,o=scrollY/(n.offsetTop-a)*100;o>=100?(m(100),n.addEventListener("mouseover",t),n.addEventListener("touchstart",t)):(m(o),n.removeEventListener("mouseover",t),n.removeEventListener("touchstart",t))}function m(e){var t={translate:.7*e,scale:1+.02*e};d.style.cssText="transform: translate(0, ".concat(t.translate,"%) \n    scale(").concat(t.scale,") rotate(180deg)");var n={translate:.5*e,scale:1+.02*e};o.style.cssText="transform: translate(0, ".concat(n.translate,"%) \n    scale(").concat(n.scale,")");var a={translate:.7*e,scale:1+.02*e};l.style.cssText="transform: translate(0, ".concat(a.translate,"%) \n    scale(").concat(a.scale,")");var u={translate:.7*e,scale:1+.015*e};c.style.cssText="transform: translate(0, ".concat(u.translate,"%) \n    scale(").concat(u.scale,")"),r.forEach((function(t,n){var a={translate:30*(r.length-n)/100*e,scale:1+.02*e};t.style.cssText="transform: translate(0,".concat(a.translate,"%) \n    scale(").concat(a.scale,")")}));var m={translate:1*e};s.style.cssText="transform: translate(-".concat(m.translate,"%, ").concat(m.translate,"%)"),i.forEach((function(t,n){var a={left:(100+10*n)/100*e};t.style.left="".concat(a.left,"%")}))}window.addEventListener("scroll",u),u()}));var e=document.getElementById("audio"),t=document.querySelector(".audio-btn"),n=document.querySelector(".audio-btn-off");t.addEventListener("click",(function(t){e.play(),t.target.classList.add("visually-hidden"),n.classList.remove("visually-hidden")})),n.addEventListener("click",(function(a){e.pause(),e.currentTime=0,t.classList.remove("visually-hidden"),n.classList.add("visually-hidden")}));var a={text1:document.getElementById("text1"),text2:document.getElementById("text2")},o=["Merry Christmas!"," Веселого Різдва! "," !عيد ميلاد مجيد ","圣诞快乐! "," Čestit Božić! "," Veselé Vánoce! ","Glædelig Jul!"," Prettige Kerstdagen! ","Häid jõule!","Hauskaa joulua!","Joyeux Noël!","Frohe Weihnachten!","Χαρούμενα Χριστούγεννα!","Buon Natale!","メリークリスマス!","메리 크리스마스! ","Priecīgus Ziemassvētkus!","Linksmų šv. Kalėdų!","Среќен Божиќ!","God jul! ","Wesołych Świąt!","Feliz Natal!","Crăciun fericit!","Srećan Božić!","Kirismas Wanaagsan!","Feliz Navidad!","Heri ya krismas!","З Калядамі!","Счастливого Рождества!"],r=o.length-1,c=new Date,l=0,s=.5;function i(){l-=s,s=0;var e=l/.7;e>1&&(s=.5,e=1),function(e){a.text2.style.filter="blur(".concat(Math.min(8/e-8,20),"px)"),a.text2.style.opacity="".concat(100*Math.pow(e,.4),"%"),e=1-e,a.text1.style.filter="blur(".concat(Math.min(8/e-8,20),"px)"),a.text1.style.opacity="".concat(100*Math.pow(e,.4),"%"),a.text1.textContent=o[r%o.length],a.text2.textContent=o[(r+1)%o.length]}(e)}a.text1.textContent=o[r%o.length],a.text2.textContent=o[(r+1)%o.length],function e(){requestAnimationFrame(e);var t=new Date,n=s>0,o=(t-c)/2e3;c=t,(s-=o)<=0?(n&&r++,i()):(l=0,a.text2.style.opacity="100%",a.text1.style.opacity="0%")}(),document.querySelector(".envelope").addEventListener("click",(function(){document.querySelector(".letter").classList.contains("letter--open")?(document.querySelector(".letter").classList.remove("letter--open"),document.querySelector(".letter").classList.add("letter--close"),setTimeout((function(){document.querySelector(".letter").classList.remove("letter--close")}),600)):(document.querySelector(".letter").classList.remove("letter--close"),document.querySelector(".letter").classList.add("letter--open"))})),document.querySelector(".paper-close").addEventListener("click",(function(){document.querySelector(".letter").classList.remove("letter--open"),document.querySelector(".letter").classList.add("letter--close"),setTimeout((function(){document.querySelector(".letter").classList.remove("letter--close")}),600)}))}();
//# sourceMappingURL=eng.b421f144.js.map
