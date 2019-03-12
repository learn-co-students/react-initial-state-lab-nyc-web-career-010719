import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    <ImageSlider />
    <Bomb
    initialCount={120}
    // countDown={props.countDown}
    />
    <Bomb
    initialCount={130}
    // countDown={props.countDown}
    />
  </div>,
  document.getElementById('root')
);
