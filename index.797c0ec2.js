window.addEventListener("load",(function(){document.documentElement.classList.add("loaded");const e=document.querySelector(".page"),t=document.querySelectorAll('[class*="__inset"]');let n=0,a=0;e.addEventListener("mousemove",(function(e){const t=window.innerWidth,n=e.pageX-t/2;a=n/t*100})),function e(o){n+=.05*(a-n),t.forEach((e=>{const t=e.dataset.prxValue?+e.dataset.prxValue:1;e.style.cssText=`transform: translateX(${n/t}%)`})),requestAnimationFrame(e)}()}));
//# sourceMappingURL=index.797c0ec2.js.map
