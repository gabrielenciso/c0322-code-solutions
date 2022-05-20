import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidatedInput from './validated-input.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<ValidatedInput/>);
