"use strict";(()=>{document.addEventListener("DOMContentLoaded",()=>{let n=Plyr.setup("#player",{controls:["mute"],clickToPlay:!1});window.player=player;let t=document.querySelectorAll(".plyr");function s(l,o,r){document.querySelector(l).addEventListener(o,r,!1)}});$(".slider-main_component").each(function(n){let t=!1;$(this).attr("loop-mode")==="true"&&(t=!0);let s=300;$(this).attr("slider-duration")!==void 0&&(s=+$(this).attr("slider-duration"));let l=new Swiper($(this).find(".swiper")[0],{speed:s,loop:t,autoHeight:!1,centeredSlides:t,followFinger:!0,freeMode:!1,slideToClickedSlide:!1,slidesPerView:1,spaceBetween:"4%",rewind:!1,mousewheel:{forceToAxis:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:1,spaceBetween:"4%"},768:{slidesPerView:2,spaceBetween:"4%"},992:{slidesPerView:3,spaceBetween:"2%"}},pagination:{el:$(this).find(".swiper-bullet-wrapper")[0],bulletActiveClass:"is-disabled",bulletClass:"swiper-bullet",bulletElement:"button",clickable:!0},navigation:{nextEl:$(this).find(".swiper-next")[0],prevEl:$(this).find(".swiper-prev")[0],disabledClass:"is-disabled"},scrollbar:{el:$(this).find(".swiper-drag-wrapper")[0],draggable:!0,dragClass:"swiper-drag",snapOnRelease:!0},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})});var e=document.querySelector(".signup_component"),i=document.getElementById("open-signup"),a=document.querySelector(".signup_close"),u=document.querySelector(".signup_content"),d=function(){e==null||e.classList.toggle("is-init"),setTimeout(()=>{e==null||e.classList.toggle("is-active")},100)},c=function(){e==null||e.classList.toggle("is-active"),setTimeout(()=>{e==null||e.classList.toggle("is-init")},200)};i==null||i.addEventListener("click",d);a.addEventListener("click",c);})();
