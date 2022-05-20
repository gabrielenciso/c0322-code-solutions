import React from 'react';

function Topics({ headers, open }) {
  return (
    <ul className="accordion-items">
      {
          headers.map((heading, index) => (
          <React.Fragment key={index}>
            <li data-id={index} className="accordion-item" onClick={open}>
              {heading.topic}
            </li>
            <div data-id={index} className="accordion-details">
              {heading.details}
            </div>
          </React.Fragment>
          ))
      }
    </ul>
  );
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectIndex: null
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(event) {
    console.log(event.target.getAttribute('data-id'));
    const selectIndex = event.target.getAttribute('data-id');
    this.setState({
      isOpen: !this.state.isOpen,
      selectIndex: selectIndex
    });
  }

  render() {
    const { toggleOpen } = this;
    const { headers } = this.props;
    return (
      <Topics headers={headers} open={toggleOpen}/>
    );
  }
}

export default Accordion;
