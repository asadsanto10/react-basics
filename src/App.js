import React, { useCallback, useMemo, useState } from 'react';
import Button from './component/Button';
import ShowCount from './component/ShowCount';
import Title from './component/Title';

// useMemo and useHook performance optimze hisebe kaj kore

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prev) => prev + 5);
  }, []);

  const evenOdd = useMemo(() => {
    let i = 0;
    while (i < 1000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);
  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Couner one" />
      <span>{evenOdd ? 'Even' : 'Odd'}</span>
      <Button handelClick={incrementByOne}>increment By One</Button>
      <hr />
      <ShowCount count={count2} title="Couner five" />
      <Button handelClick={incrementByFive}>increment By five</Button>
    </div>
  );
};

export default App;
