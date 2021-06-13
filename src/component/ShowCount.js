import React, { memo } from 'react';

const ShowCount = ({ title, count }) => {
  console.log(`rendering${title}...`);
  return (
    <p>
      {title} is {count}
    </p>
  );
};

export default memo(ShowCount);
