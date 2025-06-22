import ReactLogo from './assets/react.svg?react';

const date = new Date();
const curYear = date.getFullYear();

export const App = () => (
  <div>
    <h1>Hello world!</h1>
    <ReactLogo />
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </a>
    <h3>{curYear}</h3>
  </div>
);
