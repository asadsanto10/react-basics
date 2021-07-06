import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/styles/Global.style';
import DarkTheme from './components/styles/theme/Dark.style';
import LightTheme from './components/styles/theme/Light.style';
// import './assets/css/dark.css';
import Tutorial from './components/Tutorial';

const App = () => {
  const [theme, setTheme] = useState('light');

  const ChangeTheme = () => {
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <button type="button" onClick={ChangeTheme}>
          Change Theme
        </button>
        <Tutorial />
      </ThemeProvider>
    </>
  );
};

export default App;
