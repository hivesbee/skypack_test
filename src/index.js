import { h, Component, render } from 'https://cdn.skypack.dev/preact';
import htm from 'https://cdn.skypack.dev/htm';
const html = htm.bind(h);

const app = html`<h1>Hello World!</h1>`;
render(app, document.body);