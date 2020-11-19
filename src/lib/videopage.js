import { fetchData } from './data';
import { el, element } from './utils';
import { createVideoEl } from './homepage';

function displayMainVideo(videoData, data) {
  const {
    title, video, description, related,
  } = videoData;
  const sectionEl = document.querySelector('section');
  const titleEl = document.querySelector('h1');
  const videoEl = document.querySelector('video');
  const descriptionEl = document.querySelector('.video-description');
  titleEl.innerText = title;
  videoEl.appendChild(
    element('source', { src: video }, null, title),
  );
  descriptionEl.appendChild(
    el('p', description),
  );
  const relatedEl = createVideoEl(related, data);
  sectionEl.appendChild(relatedEl).appendChild(el('hr'));
}

export async function createVideoPage(videoId) {
  const data = await fetchData();
  displayMainVideo(data.videos[videoId - 1], data);
}

export function tester() {

}
