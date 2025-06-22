import { createElement } from 'react';
import reactLogo from './assets/react.svg';

const date = new Date();
const curYear = date.getFullYear();

export const App = () => {
  return createElement('div', null, [
    createElement('h1', null, 'Hello world!'),
    createElement('img', { src: reactLogo }, null),
    createElement(
      'a',
      { className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' },
      'Learn React',
    ),
    createElement('h3', null, curYear),
  ]);
};
