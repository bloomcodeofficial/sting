"use strict";(()=>{var L=document.querySelectorAll(".speakers_item"),u=[...L],p=document.querySelector(".speakers_image"),m=document.querySelector(".speakers_selected-name"),S=document.querySelector(".speakers_selected-about"),k=document.querySelector(".speakers_selected-role"),d=function(){var r,s,n,o;let e=u[0];e.classList.add("is-active");let c=e.querySelector(".img").src,t=(r=e.querySelector(".speakers_about"))==null?void 0:r.innerHTML,a=(s=e.querySelector(".speakers_company"))==null?void 0:s.innerHTML,i=(n=e.querySelector(".speakers_role"))==null?void 0:n.innerHTML,l=(o=e.querySelector(".speakers_name"))==null?void 0:o.innerHTML;m.innerHTML=l,p.src=c,S.innerHTML=t,k.innerHTML=`${i} at ${a}`};d();u.forEach(function(e){e.addEventListener("mouseenter",function(){var r,s,n,o;for(let y of u)y.classList.remove("is-active");e.classList.add("is-active");let c=e.querySelector(".img").src,t=(r=e.querySelector(".speakers_about"))==null?void 0:r.innerHTML,a=(s=e.querySelector(".speakers_company"))==null?void 0:s.innerHTML,i=(n=e.querySelector(".speakers_role"))==null?void 0:n.innerHTML,l=(o=e.querySelector(".speakers_name"))==null?void 0:o.innerHTML;m.innerHTML=l,p.src=c,S.innerHTML=t,k.innerHTML=`${i} at ${a}`})});})();