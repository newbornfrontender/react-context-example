import { React, html, css } from '/shared.js';

import { CounterContext } from '/components/Store.js';

const styles = css`
  display: inline-flex;
  align-items: center;
  padding: 1rem;
  border: 0.1rem solid black;
  border-radius: 0.3rem;

  button {
    block-size: 2.4rem;
    inline-size: 3.8rem;
    border: 0;
    border-radius: 0.3rem;
    font-size: 1.2rem;
    color: white;
    transition: transform ease-in-out 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      user-select: none;
    }

    &:focus {
      outline: none;
    }
  }

  p {
    margin: 0 1.2rem;
    font-size: 1.2rem;
  }

  .increment {
    background-color: royalblue;
  }

  .decrement {
    background-color: tomato;
  }
`;

export default function Counter() {
  const [counter, setCounter] = React.useContext(CounterContext);

  return html`
    <div className=${styles}>
      <button className="decrement" onClick=${() => setCounter(counter - 1)}>
        -
      </button>

      <p>${counter}</p>

      <button className="increment" onClick=${() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  `;
}
