import React from 'react';

class HoverCounter extends React.Component {
  render() {
    const { counter, incrementcount, theme, switchTheme } = this.props;
    const style =
      theme === 'dark'
        ? {
            backgroundColor: '#000',
            color: '#fff',
          }
        : null;
    return (
      <div>
        <h1 style={style} onMouseOver={incrementcount} onFocus={incrementcount}>
          Hover {counter} time
        </h1>
        <button type="button" onClick={switchTheme}>
          Change theme
        </button>
      </div>
    );
  }
}
export default HoverCounter;
