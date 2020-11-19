import { fetchData } from './data';
import { el, element } from './utils';

function calculateTimeSince(time) {
  const dateCreated = new Date(time);
  const now = new Date();
  const timeSince = now - dateCreated;
  let formattedtime;

  if (timeSince > 3.154e10) {
    const result = Math.floor(timeSince / 3.154e10);
    if (result % 10 === 1) {
      formattedtime = `Fyrir ${result} ári síðan`;
    } else {
      formattedtime = `Fyrir ${result} árum síðan`;
    }
  } else if (timeSince > 2.628e9) {
    const result = Math.floor(timeSince / 2.628e9);
    if (result % 10 === 1) {
      formattedtime = `Fyrir ${result} mánuði síðan`;
    } else {
      formattedtime = `Fyrir ${result} mánuðum síðan`;
    }
  } else if (timeSince > 8.64e7) {
    const result = Math.floor(timeSince / 8.64e7);
    if (result % 10 === 1) {
      formattedtime = `Fyrir ${result} degi síðan`;
    } else {
      formattedtime = `Fyrir ${result} dögum síðan`;
    }
  } else {
    const result = Math.floor(timeSince / 3.6e6);
    if (result % 10 === 1) {
      formattedtime = `Fyrir ${result} klukkustund síðan`;
    } else {
      formattedtime = `Fyrir ${result} klukkustundum síðan`;
    }
  }

  return formattedtime;
}

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
    const vidEl = element('div', { class: 'vid-box col col-4' }, null,
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
  const titleEl = element('div', { class: 'row' }, null, element('h2', { class: 'col' }, null, title));
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
