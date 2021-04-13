import React from 'react';
// ? class component use for without withCounter.js file
// class ClickCounter extends React.Component {
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
//         <button type="button" onClick={this.incrementCount}>
//           Click {count} time
//         </button>
//       </div>
//     );
//   }
// }
// export default ClickCounter;
import withCounter from './HOC/WithCounter';

const ClickCounter = (props) => {
  const { count, incrementCount } = props;

  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Click {count} time
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
