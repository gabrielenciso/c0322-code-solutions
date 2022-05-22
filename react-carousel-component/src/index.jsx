import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const imageUrls = [
  'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg',
  'https://pbs.twimg.com/media/FBuLYgVX0AcIaRX.jpg',
  'https://ih1.redbubble.net/image.909979035.9762/flat,1000x1000,075,f.jpg',
  'https://pbs.twimg.com/media/FImBNISWQAMpJ8v.jpg',
  'https://i.insider.com/5abb9e6a3216741c008b462d?width=700',
  'https://i.kym-cdn.com/entries/icons/original/000/040/002/cover2.jpg'
];

root.render(<Carousel images={imageUrls}/>);
