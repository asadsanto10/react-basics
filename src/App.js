import React from 'react';
import Count from './component/Count';
import TodoFunction from './component/TodoFunction';

const App = () => {
  return (
    <div>
      <h1>useState hook</h1>
      {/* <TodoClass /> */}
      <TodoFunction />
      <Count />
    </div>
  );
};

export default App;
