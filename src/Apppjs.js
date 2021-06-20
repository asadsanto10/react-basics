import React, { createContext, useReducer } from 'react';
// eslint-disable-next-line import/no-cycle
import ComponentA from './component/globalState/ComponentA';

export const counterContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;

    case 'decrement':
      return state - 1;

    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count - {count}</div>
      <counterContext.Provider value={{ dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
};

export default App;
