"use strict";(()=>{document.addEventListener("DOMContentLoaded",()=>{let s=Plyr.setup("#player",{controls:["mute","fullscreen"],clickToPlay:!1});window.player=player;let e=document.querySelectorAll(".plyr");function i(l,t,r){document.querySelector(l).addEventListener(t,r,!1)}});$(".slider-main_component").each(function(s){let e=!1;$(this).attr("loop-mode")==="true"&&(e=!0);let i=300;$(this).attr("slider-duration")!==void 0&&(i=+$(this).attr("slider-duration"));let l=new Swiper($(this).find(".swiper")[0],{speed:i,loop:e,autoHeight:!1,centeredSlides:e,followFinger:!0,freeMode:!1,slideToClickedSlide:!1,slidesPerView:1,spaceBetween:"4%",rewind:!1,mousewheel:{forceToAxis:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:1,spaceBetween:"4%"},768:{slidesPerView:2,spaceBetween:"4%"},992:{slidesPerView:3,spaceBetween:"2%"}},pagination:{el:$(this).find(".swiper-bullet-wrapper")[0],bulletActiveClass:"is-disabled",bulletClass:"swiper-bullet",bulletElement:"button",clickable:!0},navigation:{nextEl:$(this).find(".swiper-next")[0],prevEl:$(this).find(".swiper-prev")[0],disabledClass:"is-disabled"},scrollbar:{el:$(this).find(".swiper-drag-wrapper")[0],draggable:!0,dragClass:"swiper-drag",snapOnRelease:!0},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})});})();
