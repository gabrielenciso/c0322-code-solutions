import React from 'react';

function Images({ images, index }) {
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

    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleDotScroll = this.handleDotScroll.bind(this);
    this.start = this.start.bind(this);
  }

  handleArrowClick(event) {
    console.log('hello');
    this.stop();
    const arrowDirection = event.target.getAttribute('id');
    const index = this.state.index;
    if (arrowDirection === 'left') {
      if (index === 0) {
        this.setState({ index: (this.props.images.length - 1) });
      } else {
        this.setState({ index: index - 1 });
      }
    } else if (arrowDirection === 'right') {
      if (index === (this.props.images.length - 1)) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: index + 1 });
      }
    }
  }

  handleDotScroll(event) {
    console.log('hello');
    this.stop();
    const dataIndex = event.target.getAttribute('data-index');
    this.setState({ index: parseInt(dataIndex) });
  }

  handleAutoScroll() {
    console.log('hello');
    console.log(this.state.index);
    const index = this.state.index;
    if (index === (this.props.images.length - 1)) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  }

  start() {
    console.log('hello');
    this.intervalID = setInterval(() =>
      this.handleAutoScroll(), 3000
    );
  }

  stop() {
    clearInterval(this.intervalID);
  }

  render() {
    // this.start();
    // this.intervalID = setInterval(() =>
    //   this.handleAutoScroll(), 3000
    // );
    const { images } = this.props;
    const dots = images.map((val, index) => {
      let className;
      if (index === this.state.index) {
        className = 'fa-regular fa-circle fa-lg dot-highlight';
      } else {
        className = 'fa-regular fa-circle fa-lg';
      }
      return (
        <span key={index}>
          <i data-index={index} className={className} onClick={this.handleDotScroll}></i>
        </span>
      );
    }
    );
    return (
      <div className="container">
        <div className='image-scroll'>
          <div className="left">
            <i id="left" className="fa-solid fa-caret-left fa-2xl" onClick={this.handleArrowClick}></i>
          </div>
          <Images images={images} index={this.state.index}/>
          <div className='right'>
            <i id="right" className="fa-solid fa-caret-right fa-2xl" onClick={this.handleArrowClick}></i>
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
