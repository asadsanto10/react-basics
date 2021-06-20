import React from 'react';
import useWindowWidth from './hooks/useWindowWidth';

const Layout = () => {
  const onSmall = useWindowWidth(767);
  return (
    <div>
      <h1>You are browsing on {onSmall ? 'small' : 'large'} device</h1>
    </div>
  );
};

export default Layout;
