import React from 'react';
import ReactDOM from 'react-dom/client';
import StopWatch from './stopwatch.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<StopWatch/>);
