import React from 'react';
import Layout from './component/Layout';
import LayoutTwo from './component/LayoutTow';

const REACT_VERSION = React.version;
const App = () => {
  return (
    <div>
      <h1>{REACT_VERSION}</h1>
      <Layout />
      <LayoutTwo />
    </div>
  );
};

export default App;
