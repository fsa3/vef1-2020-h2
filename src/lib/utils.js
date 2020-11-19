/**
 * Create an element with attributes and events, and append elements or
 * strings to it.
 *
 * Usage:
 *  const el = element(
 *    'button',
 *    { 'class': 'button' },
 *    { click: () => { ... } },
 *    'Takki'
 *   );
 *  returns
 *  <button class="button">Takki</button> with a click handler.
 *
 * @param {string} name Element name
 * @param {object} attributes Object containing attributes to attach to element.
 * @param {object} events Object of events to add to element.
 * @param  {...any} children List of elements or strings to append to element.
 * @returns {object} HTML element.
 */
export function element(name, attributes = null, events = null, ...children) {
  const el1 = document.createElement(name);

  children.forEach((child) => {
    if (!child) {
      return;
    }

    if (attributes) {
      Object.keys(attributes).forEach((attrib) => {
        el1.setAttribute(attrib, attributes[attrib]);
      });
    }

    if (events) {
      Object.keys(events).forEach((event) => {
        el1.addEventListener(event, events[event]);
      });
    }

    if (typeof child === 'string') {
      el1.appendChild(document.createTextNode(child));
    } else {
      el1.appendChild(child);
    }
  });

  return el1;
}

/**
 * Simplified element function.
 * Creates an element and append elements or strings to it.
 *
 * @param {string} name Element name
 * @param  {...any} children List of elements or strings to append to element.
 * @returns {object} HTML element.
 */
export function el(name, ...children) {
  return element(name, null, null, ...children);
}

export function calculateTimeSince(time) {
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
