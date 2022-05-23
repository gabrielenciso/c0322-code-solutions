import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const imageUrls = [
  'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg',
  'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAwMjkxNzIyNTY5/yosemite-3.jpg',
  'https://ih1.redbubble.net/image.909979035.9762/flat,1000x1000,075,f.jpg',
  'https://i.natgeofe.com/n/6eff514d-9275-49e4-9c97-537877315f7d/01-zion-reference.jpg',
  'https://i.insider.com/5abb9e6a3216741c008b462d?width=700',
  'https://www.visitbigsky.com/sites/default/files/styles/scale_1440/public/2021-04/Yellowstone%20Tours.jpg?itok=LkMy29jF'
];

root.render(<Carousel images={imageUrls}/>);
