"use strict";(()=>{document.addEventListener("DOMContentLoaded",()=>{let s=Plyr.setup("#player",{controls:["play-large","play","progress","mute","volume","fullscreen"],clickToPlay:!0,autoplay:!0,muted:!0,fullscreen:{iosNative:!0}}),t=Plyr.setup("#player2",{controls:["play-large","play","progress","mute","volume","fullscreen"],clickToPlay:!0,autoplay:!1,muted:!1,fullscreen:{iosNative:!0}});window.player=player;function l(i,n,r){document.querySelector(i).addEventListener(n,r,!1)}});$(".slider-main_component").each(function(s){let t=!1;$(this).attr("loop-mode")==="true"&&(t=!0);let l=300;$(this).attr("slider-duration")!==void 0&&(l=+$(this).attr("slider-duration"));let i=new Swiper($(this).find(".swiper")[0],{speed:l,loop:t,autoHeight:!1,centeredSlides:t,followFinger:!0,freeMode:!1,slideToClickedSlide:!1,slidesPerView:1,spaceBetween:"4%",rewind:!1,mousewheel:{forceToAxis:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:1,spaceBetween:"4%"},768:{slidesPerView:2,spaceBetween:"4%"},992:{slidesPerView:3,spaceBetween:"2%"}},pagination:{el:$(this).find(".swiper-bullet-wrapper")[0],bulletActiveClass:"is-disabled",bulletClass:"swiper-bullet",bulletElement:"button",clickable:!0},navigation:{nextEl:$(this).find(".swiper-next")[0],prevEl:$(this).find(".swiper-prev")[0],disabledClass:"is-disabled"},scrollbar:{el:$(this).find(".swiper-drag-wrapper")[0],draggable:!0,dragClass:"swiper-drag",snapOnRelease:!0},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})});var e=document.querySelector(".signup_component"),o=document.querySelectorAll(".open-signup"),a=[...o],c=document.querySelector(".signup_close"),p=document.querySelector(".signup_content"),d=function(){e==null||e.classList.toggle("is-init"),setTimeout(()=>{e==null||e.classList.toggle("is-active")},100)},u=function(){e==null||e.classList.toggle("is-active"),setTimeout(()=>{e==null||e.classList.toggle("is-init")},200)};a.forEach(function(s){s.addEventListener("click",d)});c.addEventListener("click",u);})();
