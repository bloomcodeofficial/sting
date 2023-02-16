"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // src/startup-academy/speakers.ts
  var speaker = document.querySelectorAll(".speakers_item");
  var speakerArr = [...speaker];
  var selSpeakerImg = document.querySelector(".speakers_image");
  var selSpeakerName = document.querySelector(".speakers_selected-name");
  var selSpeakerAbout = document.querySelector(".speakers_selected-about");
  var selSpeakerRole = document.querySelector(".speakers_selected-role");
  var changeSpeaker = function(item) {
    for (const div of speakerArr) {
      div.classList.remove("is-active");
    }
    item.classList.add("is-active");
    selSpeakerName.innerHTML = item.querySelector(".speakers_name")?.innerHTML;
    selSpeakerImg.src = item.querySelector(".img").src;
    selSpeakerAbout.innerHTML = item.querySelector(".speakers_about")?.innerHTML;
    selSpeakerRole.innerHTML = `${item.querySelector(".speakers_role")?.innerHTML} at ${item.querySelector(".speakers_company")?.innerHTML}`;
  };
  var initSpeaker = function() {
    changeSpeaker(speakerArr[0]);
  };
  initSpeaker();
  speakerArr.forEach(function(item) {
    if (window.innerWidth <= 991) {
      item.addEventListener("tap", function() {
        changeSpeaker(item);
      });
    } else {
      item.addEventListener("mouseenter", function() {
        changeSpeaker(item);
      });
    }
  });
})();
//# sourceMappingURL=speakers.js.map
