import { fetchData } from './data';
import { el, element, calculateTimeSince } from './utils';

function formatDuration(duration) {
  const min = Math.floor(duration / 60);
  const sec = duration % 60;
  return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

export function createVideoEl(videos, data) {
  const rowEl = element('div', { class: 'row' }, null, ' ');
  videos.forEach((vidNum) => {
    const video = data.videos[vidNum - 1];
    const {
      title, poster, duration, id, created,
    } = video;
    const timeSince = calculateTimeSince(created).toString();
    const click = () => {
      window.location.href = `video.html?id=${id}`;
    };
    const formattedDuration = formatDuration(duration);
    const vidEl = element('div', { class: 'vid-box col col-4 col-md-6 col-sm-12' }, null,
      element('div', { class: 'thumbnail' }, { click },
        element('img', { src: poster, alt: title }, null, title),
        element('p', { class: 'duration' }, null, formattedDuration)),
      el('h3',
        element('a', { href: `video.html?id=${id}` }, null, title)),
      el('p', timeSince));
    rowEl.appendChild(vidEl);
  });
  return rowEl;
}

function displayCatagory(catagory, data) {
  const { title, videos } = catagory;
  const titleEl = element('div', { class: 'row' }, null, element('h2', { class: 'col offset-col-sm-1' }, null, title));
  const sectionEl = element('section', { class: 'grid' }, null, titleEl);
  const lineEl = el('hr');
  sectionEl.appendChild(createVideoEl(videos, data));
  sectionEl.appendChild(lineEl);
  document.querySelector('main').appendChild(sectionEl);
}

export async function createHomepage() {
  const data = await fetchData();
  const { categories } = data;
  categories.forEach((catagory) => displayCatagory(catagory, data));
}
