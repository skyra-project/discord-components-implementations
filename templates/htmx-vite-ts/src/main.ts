import htmx from 'htmx.org';

import '@skyra/discord-components-core';

const h1Element = document.querySelector('h1');

if (h1Element) {
	htmx.addClass(h1Element, 'logo');
}
