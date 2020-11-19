import { createHomepage } from './lib/homepage';
import createVideoPage from './lib/videopage';

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  const currentUrl = window.location.href;
  if (currentUrl.includes('video')) {
    const videoId = currentUrl.substring(currentUrl.indexOf('id=') + 3, currentUrl.indexOf('id=') + 4);
    createVideoPage(videoId);
  } else {
    createHomepage();
  }
});
