import React from 'react';

class ClickCounter extends React.Component {
  render() {
    const { counter, incrementcount } = this.props;
    return (
      <div>
        <button type="button" onClick={incrementcount}>
          Click {counter} time
        </button>
      </div>
    );
  }
}
export default ClickCounter;
