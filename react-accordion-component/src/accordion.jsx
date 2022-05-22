import React from 'react';

function Topics({ headers, open, state }) {
  return (
    <ul className="accordion-items">
      {
          headers.map((heading, index) => {
            let detailsClass;
            if (state.isOpen && state.selectIndex === index.toString()) {
              detailsClass = 'accordion-details';
            } else {
              detailsClass = 'accordion-details hidden';
            }
            return (
              <React.Fragment key={index}>
                <li data-id={index} className="accordion-item" onClick={open}>
                  {heading.topic}
                </li>
                <div data-id={index} className={detailsClass}>
                  {heading.details}
                </div>
              </React.Fragment>
            );
          })
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
    const { isOpen, selectIndex } = this.state;
    const dataId = event.target.getAttribute('data-id');
    if (selectIndex === null) {
      this.setState({
        isOpen: !isOpen,
        selectIndex: dataId
      });
      return;
    }

    if (isOpen && selectIndex === dataId) {
      this.setState({
        isOpen: !isOpen,
        selectIndex: dataId
      });
      return;
    }

    if (!isOpen) {
      this.setState({
        isOpen: !isOpen,
        selectIndex: dataId
      });
    }

    if (isOpen) {
      this.setState({
        selectIndex: dataId
      });
    }
  }

  render() {
    const { toggleOpen } = this;
    const { headers } = this.props;
    return (
      <Topics headers={headers} open={toggleOpen} state={this.state}/>
    );
  }
}

export default Accordion;
