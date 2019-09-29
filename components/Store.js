import { React, html } from '/react-context-example/shared.js';

export const CounterContext = React.createContext(0);

export default function Store({ children }) {
  const [counter, setCounter] = React.useState(0);

  return html`
    <${CounterContext.Provider} value=${[counter, setCounter]}>
      ${children}
    <//>
  `;
}
