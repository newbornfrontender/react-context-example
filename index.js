import { React, ReactDOM, html } from '/shared.js';

import Store from '/components/Store.js';
import App from '/components/App.js';

const app = html`
  <${Store}>
    <${App} />
  <//>
`;
const root = document.querySelector('#root');

ReactDOM.render(app, root);
