import React from 'react';
import ClickCounter from './component/ClickCounter';
import ThemeContext from './component/context/ThemeContext';
import Counter from './component/Counter';
import Section from './component/Section';

class App extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    theme: 'light',
    // eslint-disable-next-line react/no-unused-state
    switchTheme: () => {
      this.setState(({ theme }) => {
        if (theme === 'dark') {
          return {
            theme: 'light',
          };
        }
        return {
          theme: 'dark',
        };
      });
    },
  };

  render() {
    return (
      <div className="App">
        <Counter>
          {(counter, incrementcounter) => (
            <ClickCounter counter={counter} incrementcount={incrementcounter} />
          )}
        </Counter>
        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
