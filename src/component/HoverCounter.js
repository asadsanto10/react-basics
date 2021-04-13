import React from 'react';

class HoverCounter extends React.Component {
  render() {
    const { counter, incrementcount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementcount} onFocus={incrementcount}>
          Hover {counter} time
        </h1>
      </div>
    );
  }
}
export default HoverCounter;
