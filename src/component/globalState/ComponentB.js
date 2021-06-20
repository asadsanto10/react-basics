import React, { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { counterContext } from '../../Apppjs';

const ComponentB = () => {
  const countContext = useContext(counterContext);

  return (
    <div>
      <button type="button" onClick={() => countContext.dispatch('increment')}>
        Increment
      </button>
      <button type="button" onClick={() => countContext.dispatch('decrement')}>
        Decrement
      </button>
    </div>
  );
};

export default ComponentB;
