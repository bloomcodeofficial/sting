// Plyr.js
document.addEventListener('DOMContentLoaded', () => {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.

  const players = Plyr.setup('#player', {
    controls: [
      'play-large', // The large play button in the center
      // 'restart', // Restart playback
      // 'rewind', // Rewind by the seek time (default 10 seconds)
      'play', // Play/pause playback
      // "fast-forward", // Fast forward by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      // "current-time", // The current time of playback
      // "duration", // The full duration of the media
      'mute', // Toggle mute
      'volume', // Volume control
      // "captions", // Toggle captions
      // "settings", // Settings menu
      // "pip", // Picture-in-picture (currently Safari only)
      //'airplay', // Airplay (currently Safari only)
      // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
      'fullscreen', // Toggle fullscreen
    ],
    clickToPlay: true,
    autoplay: true,
    muted: true,
    fullscreen: {
      iosNative: true,
    },
  });

  const players2 = Plyr.setup('#player2', {
    controls: [
      'play-large', // The large play button in the center
      // 'restart', // Restart playback
      // 'rewind', // Rewind by the seek time (default 10 seconds)
      'play', // Play/pause playback
      // "fast-forward", // Fast forward by the seek time (default 10 seconds)
      'progress', // The progress bar and scrubber for playback and buffering
      // "current-time", // The current time of playback
      // "duration", // The full duration of the media
      'mute', // Toggle mute
      'volume', // Volume control
      //'captions', // Toggle captions
      // 'settings', // Settings menu
      // "pip", // Picture-in-picture (currently Safari only)
      //'airplay', // Airplay (currently Safari only)
      // "download", // Show a download button with a link to either the current source or a custom URL you specify in your options
      'fullscreen', // Toggle fullscreen
    ],
    clickToPlay: true,
    autoplay: false,
    muted: false,
    fullscreen: {
      iosNative: true,
    },
  });

  // Expose
  window.player = player;

  // Play on hover:

  // const videoPlayer = document.querySelectorAll('.plyr');

  // videoPlayer.forEach((player, index) => {
  //   player.addEventListener('mouseover', () => {
  //     players[index].play();
  //   });

  //   player.addEventListener('mouseleave', () => {
  //     players[index].pause();
  //   });
  // });

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});

// Slider
$('.slider-main_component').each(function (index) {
  let loopMode = false;
  if ($(this).attr('loop-mode') === 'true') {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr('slider-duration') !== undefined) {
    sliderDuration = +$(this).attr('slider-duration');
  }
  const swiper = new Swiper($(this).find('.swiper')[0], {
    speed: sliderDuration,
    // loop: loopMode,
    autoHeight: false,
    // centeredSlides: loopMode,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: true,
    slidesPerView: 1,
    spaceBetween: '4%',
    rewind: false,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: '2%',
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: '2%',
      },
      // desktop
      992: {
        slidesPerView: 4,
        spaceBetween: '1%',
      },
    },
    pagination: {
      el: $(this).find('.swiper-bullet-wrapper')[0],
      bulletActiveClass: 'is-disabled',
      bulletClass: 'swiper-bullet',
      bulletElement: 'button',
      clickable: true,
    },
    navigation: {
      nextEl: $(this).find('.swiper-next')[0],
      prevEl: $(this).find('.swiper-prev')[0],
      disabledClass: 'is-disabled',
    },
    scrollbar: {
      el: $(this).find('.swiper-drag-wrapper')[0],
      draggable: true,
      dragClass: 'swiper-drag',
      snapOnRelease: true,
    },
    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
  });
});

// ----------- //

const signup = document.querySelector('.signup_component');
const openBtn = document.querySelectorAll('.open-signup');
const openBtnArr = [...openBtn];
const closeBtn = document.querySelector('.signup_close');
const signupContent = document.querySelector('.signup_content');

const openSignup = function () {
  signup?.classList.toggle('is-init');
  setTimeout(() => {
    signup?.classList.toggle('is-active');
  }, 100);
};

const closeSignup = function () {
  signup?.classList.toggle('is-active');
  setTimeout(() => {
    signup?.classList.toggle('is-init');
  }, 200);
};

openBtnArr.forEach(function (item) {
  item.addEventListener('click', openSignup);
});

closeBtn.addEventListener('click', closeSignup);

// ----------- //

const answers = [...document.querySelectorAll('.faq_answer')];
const triggers = [...document.querySelectorAll('.faq_question')];

const initAccord = function () {
  for (const answer of answers) answer.classList.add('is-active');
};

for (const trigger of triggers) {
  trigger.addEventListener('click', function () {
    trigger.classList.toggle('is-active');
    trigger.nextElementSibling?.classList.toggle('is-active');
    trigger.lastElementChild?.classList.toggle('is-active');
  });
}

initAccord();

// console.log(triggers[0].nextElementSibling?.classList.toggle('is-init'));
