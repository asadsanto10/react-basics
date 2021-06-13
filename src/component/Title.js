import React, { memo } from 'react';

const Title = () => {
  console.log('render title');
  return (
    <div>
      <h2>useCallback() and useMemo()</h2>
    </div>
  );
};

export default memo(Title);
