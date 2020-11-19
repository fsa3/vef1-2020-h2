import { fetchData } from './data';
import { el, element } from './utils';
import { createVideoEl } from './homepage';

function displayMainVideo(videoData, data) {
  const {
    title, video, description, related,
  } = videoData;
  const sectionEl = document.querySelector('section');
  const titleEl = document.querySelector('.video-title');
  const videoEl = document.querySelector('video');
  const descriptionEl = document.querySelector('.video-description');
  titleEl.appendChild(
    el('h1', title),
  );
  videoEl.appendChild(
    element('source', { src: video }, null, title),
  );
  descriptionEl.appendChild(
    el('p', description),
  );
  if (related.length > 0) {
    const relatedEl = createVideoEl(related, data);
    sectionEl.appendChild(relatedEl);
  } else {
    document.querySelector('.related-title').classList.toggle('hidden');
  }
}

function buttonEvents() {
  const vid = document.querySelector('video');
  const videoDiv = document.querySelector('.video');
  const back = document.querySelector('.back');
  const next = document.querySelector('.next');
  const play = document.querySelector('.play');
  const pause = document.querySelector('.pause');
  const mute = document.querySelector('.mute');
  const unmute = document.querySelector('.unmute');
  const fullSc = document.querySelector('.fullscreen');

  const playPause = () => {
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
    videoDiv.classList.toggle('video-paused');
    play.classList.toggle('hidden');
    pause.classList.toggle('hidden');
  };

  const muteUnmute = () => {
    if (vid.muted) {
      vid.muted = false;
    } else {
      vid.muted = true;
    }
    mute.classList.toggle('hidden');
    unmute.classList.toggle('hidden');
  };

  const skip = (seconds) => {
    vid.currentTime += seconds;
  };

  fullSc.addEventListener('click', () => {
    if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if (vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen();
    } else if (vid.msRequestFullscreen) {
      vid.msRequestFullscreen();
    } else if (vid.mozRequestFullscreen) {
      vid.mozRequestFullscreen();
    }
  });

  back.addEventListener('click', () => { skip(-3); });
  next.addEventListener('click', () => { skip(3); });
  videoDiv.addEventListener('click', playPause);
  play.addEventListener('click', playPause);
  pause.addEventListener('click', playPause);
  mute.addEventListener('click', muteUnmute);
  unmute.addEventListener('click', muteUnmute);
}

function errorWarning() {
  const elements = document.querySelectorAll('main *');
  elements.forEach((elem) => {
    const elem1 = elem;
    elem1.style.display = 'none';
  });
  const main = document.querySelector('main');
  main.appendChild(
    element('h1', { class: 'no-vid-error' }, null,
      'Úps, myndbandið sem þú baðst um finnst ekki 😕'),
  );
}

export async function createVideoPage(videoId) {
  const data = await fetchData();
  try {
    displayMainVideo(data.videos[videoId - 1], data);
  } catch {
    errorWarning();
  }
  buttonEvents();
}

export function tester() {

}
