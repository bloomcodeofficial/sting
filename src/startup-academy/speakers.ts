import { isNotEmpty } from '@finsweet/ts-utils';

const speaker = document.querySelectorAll('.speakers_item');
const speakerArr = [...speaker];
const selSpeakerImg = document.querySelector('.speakers_image');
const selSpeakerName = document.querySelector('.speakers_selected-name');
const selSpeakerAbout = document.querySelector('.speakers_selected-about');
const selSpeakerRole = document.querySelector('.speakers_selected-role');

const initSpeaker = function () {
  const item = speakerArr[0];
  item.classList.add('is-active');
  const imgSrc = item.querySelector('.img').src;
  const about = item.querySelector('.speakers_about')?.innerHTML;
  const company = item.querySelector('.speakers_company')?.innerHTML;
  const role = item.querySelector('.speakers_role')?.innerHTML;
  const name = item.querySelector('.speakers_name')?.innerHTML;

  selSpeakerName.innerHTML = name;
  selSpeakerImg.src = imgSrc;
  selSpeakerAbout.innerHTML = about;
  selSpeakerRole.innerHTML = `${role} at ${company}`;
};
initSpeaker();

// Add "is-active" class when hovering a collection list item
speakerArr.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    // For loop that removes "is-active" from all items
    for (const div of speakerArr) {
      div.classList.remove('is-active');
    }

    // Adds "is-active" to current item
    item.classList.add('is-active');

    const imgSrc = item.querySelector('.img').src;
    const about = item.querySelector('.speakers_about')?.innerHTML;
    const company = item.querySelector('.speakers_company')?.innerHTML;
    const role = item.querySelector('.speakers_role')?.innerHTML;
    const name = item.querySelector('.speakers_name')?.innerHTML;

    // Sets meta and image for hovered item
    selSpeakerName.innerHTML = name;
    selSpeakerImg.src = imgSrc;
    selSpeakerAbout.innerHTML = about;
    selSpeakerRole.innerHTML = `${role} at ${company}`;
  });
});
