import { isNotEmpty } from '@finsweet/ts-utils';

const speaker = document.querySelectorAll('.speakers_item');
const speakerArr = [...speaker];
const selSpeakerImg = document.querySelector('.speakers_image');
const selSpeakerName = document.querySelector('.speakers_selected-name');
const selSpeakerAbout = document.querySelector('.speakers_selected-about');
const selSpeakerRole = document.querySelector('.speakers_selected-role');

const changeSpeaker = function (item) {
  // For loop that removes "is-active" from all items
  for (const div of speakerArr) {
    div.classList.remove('is-active');
  }
  // Add "is-active" class to current item in collection list
  item.classList.add('is-active');

  // Make current item the selected speaker
  selSpeakerName.innerHTML = item.querySelector('.speakers_name')?.innerHTML;
  selSpeakerImg.src = item.querySelector('.img').src;
  selSpeakerAbout.innerHTML = item.querySelector('.speakers_about')?.innerHTML;
  selSpeakerRole.innerHTML = `${item.querySelector('.speakers_role')?.innerHTML} ${
    item.querySelector('.speakers_company')?.innerHTML
  }`;
};

// Initial speaker (nr 1. in collection list)
const initSpeaker = function () {
  changeSpeaker(speakerArr[0]);
};

// Call initial speaker function on page load
initSpeaker();

// Call changeSpeaker function for each item hover
speakerArr.forEach(function (item) {
  if (window.innerWidth <= 991) {
    item.addEventListener('tap', function () {
      changeSpeaker(item);
    });
  } else {
    item.addEventListener('mouseenter', function () {
      changeSpeaker(item);
    });
  }
});
