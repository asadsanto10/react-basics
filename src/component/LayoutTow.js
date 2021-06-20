import React from 'react';
import useWindowWidth from './hooks/useWindowWidth';

const LayoutTwo = () => {
  const onSmall = useWindowWidth(600);
  return (
    <div className={onSmall ? 'small' : 'large'}>
      <h1>This is anothe component</h1>
    </div>
  );
};

export default LayoutTwo;
