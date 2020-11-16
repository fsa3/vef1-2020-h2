import { createHomepage } from './lib/homepage';
import { el, element } from './lib/utils';

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  const currentUrl = window.location.href;
  if (currentUrl.includes('video')) {
    console.log('video');
  } else {
    createHomepage();
  }
});
