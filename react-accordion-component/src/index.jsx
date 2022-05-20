import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

// const headers = [
//   'HyperText Markup Language',
//   'Cascading Styles Sheets',
//   'JavaScript'
// ];

const headers = [
  {
    topic: 'HyperText Markup Language',
    details: 'HTML blah blah blah blah blah'
  },
  {
    topic: 'Cascading Styles Sheets',
    details: 'CSS blah blah blah blah blhabl blah'
  },
  {
    topic: 'JavaScript',
    details: 'JavaSCiptr blah blah blah blah blah blah'
  }
];

root.render(<Accordion headers={headers}/>);
