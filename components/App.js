import { React, html, css } from '/react-context-example/shared.js';

import Counter from '/react-context-example/components/Counter.js';
import { CounterContext } from '/react-context-example/components/Store.js';

const styles = css`
  h1 {
    margin-block-end: 2rem;
    font-size: 1.8rem;
  }
  h2 {
    margin-block-end: 1.6rem;
    font-size: 1.4rem;
  }
`;

function counterStyles(counter) {
  if (counter > 0)
    return css`
      color: royalblue;
    `;
  else if (counter < 0)
    return css`
      color: tomato;
    `;
}

export default function App() {
  const [counter] = React.useContext(CounterContext);

  return html`
    <main className=${styles}>
      <h1>
        React useContext example
      </h1>

      <h2>
        Counter value: ${' '}
        ${html`
          <span className=${counterStyles(counter)}>${counter}</span>
        `}
      </h2>

      <${Counter} />
    </main>
  `;
}
