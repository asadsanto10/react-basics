// ? function system // redner function er baireo jeno context ta use kora jai se jonno useContext use kora hoy

import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

const Content = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>This is a counter</h1>
      <Counter>
        {(counter, incrementcounter) => (
          <HoverCounter
            theme={theme}
            switchTheme={switchTheme}
            counter={counter}
            incrementcount={incrementcounter}
          />
        )}
      </Counter>
    </div>
  );
};

export default Content;

// ? class system // redner function er baireo jeno context ta use kora jai se jonno class system e evabe emplement korte hoy (Content.contextType = ThemeContext;)

// import React from 'react';
// import ThemeContext from './context/ThemeContext';
// import Counter from './Counter';
// import HoverCounter from './HoverCounter';

// class Content extends React.Component {
//   render() {
//     const { theme, switchTheme } = this.context;
//     return (
//       <div>
//         <h1>This is a counter</h1>
//         <Counter>
//           {(counter, incrementcounter) => (
//             <HoverCounter
//               theme={theme}
//               switchTheme={switchTheme}
//               counter={counter}
//               incrementcount={incrementcounter}
//             />
//           )}
//         </Counter>
//       </div>
//     );
//   }
// }

// export default Content;
// Content.contextType = ThemeContext;
