import React from 'react';
// ? class component use for without withCounter.js file
// class HoverCounter extends React.Component {
//   state = {
//     count: 0,
//   };
//   incrementCount = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1 onMouseOver={this.incrementCount} onFocus={this.incrementCount}>
//           Click {count} time
//         </h1>
//       </div>
//     );
//   }
// }
// export default HoverCounter;
import withCounter from './HOC/WithCounter';

const HoverCounter = (props) => {
  const { count, incrementCount } = props;

  return (
    <div>
      <h1 onMouseOver={incrementCount} onFocus={incrementCount}>
        Click {count} time
      </h1>
    </div>
  );
};

export default withCounter(HoverCounter);
