import React from 'react';
import ReactDOM from 'react-dom/client';
// import HotButton from './hot-button';
import HotButton from './hot-button-hook';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<HotButton/>);
