"use strict";(()=>{var l=document.querySelectorAll(".speakers_item"),n=[...l],u=document.querySelector(".speakers_image"),i=document.querySelector(".speakers_selected-name"),p=document.querySelector(".speakers_selected-about"),d=document.querySelector(".speakers_selected-role"),r=function(e){var s,o,t,c;for(let a of n)a.classList.remove("is-active");e.classList.add("is-active"),i.innerHTML=(s=e.querySelector(".speakers_name"))==null?void 0:s.innerHTML,u.src=e.querySelector(".img").src,p.innerHTML=(o=e.querySelector(".speakers_about"))==null?void 0:o.innerHTML,d.innerHTML=`${(t=e.querySelector(".speakers_role"))==null?void 0:t.innerHTML} ${(c=e.querySelector(".speakers_company"))==null?void 0:c.innerHTML}`},k=function(){r(n[0])};k();n.forEach(function(e){window.innerWidth<=991?e.addEventListener("touchend",function(){r(e)}):e.addEventListener("mouseenter",function(){r(e)})});})();
