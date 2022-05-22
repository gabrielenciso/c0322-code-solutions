import React from 'react';

function Images({ images, index }) {
  console.log(images);
  return (
    <div className="image">
      <img src={images[index]}></img>
    </div>
  );
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoScroll: true,
      index: 0
    };
  }

  handleClick() {

  }

  handleScroll() {

  }

  handleAutoScroll() {

  }

  render() {
    const { images } = this.props;
    const dots = images.map((val, index) =>
      <span data-index={index} key={index}>
        <i className="fa-regular fa-circle fa-lg"></i>
      </span>
    );
    return (
      <div className="container">
        <div className='image-scroll'>
          <div className="left">
            <i className="fa-solid fa-caret-left fa-2xl"></i>
          </div>
          <Images images={images} index={this.state.index}/>
          <div className='right'>
            <i className="fa-solid fa-caret-right fa-2xl"></i>
          </div>
        </div>
        <div className="row">
          {dots}
        </div>
      </div>
    );
  }
}

export default Carousel;
