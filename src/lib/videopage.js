import { fetchData } from './data';
import { el, element } from './utils';

function displayMainVideo(videoData) {
  const { title, video, description } = videoData;
  const videoSectionEl = element('section', { class: 'grid' }, null,
    element('div', { class: 'row' }, null,
      element('h1', { class: 'col ' }, null, title)),
    element('div', { class: 'row' }, null,
      element('div', { class: 'col col-12' }, null,
        element('video', { controls: null }, null,
          element('source', { src: video }, null, title)))),
    element('div', { class: 'row controls' }, null,
      element('img', { src: './img/back.svg' }, null, ' '),
      element('img', { src: './img/play.svg' }, null, ' '),
      element('img', { src: './img/mute.svg' }, null, ' '),
      element('img', { src: './img/unmute.svg' }, null, ' '),
      element('img', { src: './img/fullscreen.svg' }, null, ' '),
      element('img', { src: './img/next.svg' }, null, ' ')),
    element('div', { class: 'row' }, null,
      element('p', { class: 'col' }, null, description)));
  const mainEl = document.querySelector('main');
  mainEl.appendChild(videoSectionEl);
}

export async function createVideoPage(videoId) {
  const data = await fetchData();
  displayMainVideo(data.videos[videoId - 1]);
}

export function tester() {

}
