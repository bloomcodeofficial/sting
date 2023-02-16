"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // src/startup-academy/index.ts
  document.addEventListener("DOMContentLoaded", () => {
    const players = Plyr.setup("#player", {
      controls: [
        "play-large",
        // The large play button in the center
        // 'restart', // Restart playback
        // 'rewind', // Rewind by the seek time (default 10 seconds)
        "play",
        // Play/pause playback
        // "fast-forward", // Fast forward by the seek time (default 10 seconds)
        "progress",
        // The progress bar and scrubber for playback and buffering
        // "current-time", // The current time of playback
        // "duration", // The full duration of the media
        "mute",
        // Toggle mute
        "volume",
        // Volume control
        // "captions", // Toggle captions
        // "settings", // Settings menu
        // "pip", // Picture-in-picture (currently Safari only)
        //'airplay', // Airplay (currently Safari only)
        // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
        "fullscreen"
        // Toggle fullscreen
      ],
      clickToPlay: true,
      autoplay: true,
      muted: true,
      fullscreen: {
        iosNative: true
      }
    });
    const players2 = Plyr.setup("#player2", {
      controls: [
        "play-large",
        // The large play button in the center
        // 'restart', // Restart playback
        // 'rewind', // Rewind by the seek time (default 10 seconds)
        "play",
        // Play/pause playback
        // "fast-forward", // Fast forward by the seek time (default 10 seconds)
        "progress",
        // The progress bar and scrubber for playback and buffering
        // "current-time", // The current time of playback
        // "duration", // The full duration of the media
        "mute",
        // Toggle mute
        "volume",
        // Volume control
        //'captions', // Toggle captions
        // 'settings', // Settings menu
        // "pip", // Picture-in-picture (currently Safari only)
        //'airplay', // Airplay (currently Safari only)
        // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
        "fullscreen"
        // Toggle fullscreen
      ],
      clickToPlay: true,
      autoplay: false,
      muted: false,
      fullscreen: {
        iosNative: true
      }
    });
    window.player = player;
    function on(selector, type, callback) {
      document.querySelector(selector).addEventListener(type, callback, false);
    }
  });
  $(".slider-main_component").each(function(index) {
    let loopMode = false;
    if ($(this).attr("loop-mode") === "true") {
      loopMode = true;
    }
    let sliderDuration = 300;
    if ($(this).attr("slider-duration") !== void 0) {
      sliderDuration = +$(this).attr("slider-duration");
    }
    const swiper = new Swiper($(this).find(".swiper")[0], {
      speed: sliderDuration,
      loop: loopMode,
      autoHeight: false,
      centeredSlides: loopMode,
      followFinger: true,
      freeMode: false,
      slideToClickedSlide: false,
      slidesPerView: 1,
      spaceBetween: "4%",
      rewind: false,
      mousewheel: {
        forceToAxis: true
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 1,
          spaceBetween: "4%"
        },
        // tablet
        768: {
          slidesPerView: 2,
          spaceBetween: "4%"
        },
        // desktop
        992: {
          slidesPerView: 3,
          spaceBetween: "2%"
        }
      },
      pagination: {
        el: $(this).find(".swiper-bullet-wrapper")[0],
        bulletActiveClass: "is-disabled",
        bulletClass: "swiper-bullet",
        bulletElement: "button",
        clickable: true
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled"
      },
      scrollbar: {
        el: $(this).find(".swiper-drag-wrapper")[0],
        draggable: true,
        dragClass: "swiper-drag",
        snapOnRelease: true
      },
      slideActiveClass: "is-active",
      slideDuplicateActiveClass: "is-active"
    });
  });
  var signup = document.querySelector(".signup_component");
  var openBtn = document.getElementById("open-signup");
  var closeBtn = document.querySelector(".signup_close");
  var signupContent = document.querySelector(".signup_content");
  var openSignup = function() {
    signup?.classList.toggle("is-init");
    setTimeout(() => {
      signup?.classList.toggle("is-active");
    }, 100);
  };
  var closeSignup = function() {
    signup?.classList.toggle("is-active");
    setTimeout(() => {
      signup?.classList.toggle("is-init");
    }, 200);
  };
  openBtn?.addEventListener("click", openSignup);
  closeBtn.addEventListener("click", closeSignup);
})();
//# sourceMappingURL=index.js.map
