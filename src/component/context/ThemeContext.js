// *custom context

// import createContext from '../lib/Context';

// const ThemeContext = createContext({
//   theme: 'light',
// });

// *react create contxt

import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light',
});

export default ThemeContext;
