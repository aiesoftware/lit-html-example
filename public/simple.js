import {html, render} from '/scripts/lit-html.js';

const helloTemplate = (name) => html`<h1>Hello ${name}!</h1>`;
const question = () => html`<h2>Are you grumpy or happy?</h2>`;

// render is a function that takes a function that will return HTML, and a DOM element on which to place the HTML.

render(helloTemplate('Jude'), document.getElementById('section1'));
render(question(), document.getElementById('section2'));
