import React, { memo } from 'react';

const Button = ({ handelClick, children }) => {
  console.log(`rendering button${children}`);
  return (
    <div>
      <button type="button" onClick={handelClick}>
        {children}
      </button>
    </div>
  );
};

export default memo(Button);
