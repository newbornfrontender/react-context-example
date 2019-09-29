import { React, ReactDOM, html } from '/react-context-example/shared.js';

import Store from '/react-context-example/components/Store.js';
import App from '/react-context-example/components/App.js';

const app = html`
  <${Store}>
    <${App} />
  <//>
`;
const root = document.querySelector('#root');

ReactDOM.render(app, root);
