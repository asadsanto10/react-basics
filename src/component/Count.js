import React, { useState } from 'react';

const count = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [counter, steCounter] = useState(0);
  let i = 0;
  const addfive = () => {
    while (i < 5) {
      steCounter((prev) => prev + 1);
      i += 1;
    }
  };
  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={() => steCounter((prev) => prev + 1)}>
        Add
      </button>
      <br />
      <button type="button" onClick={addfive}>
        Add
      </button>
    </div>
  );
};

export default count;
