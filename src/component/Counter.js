import { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { render } = this.props; // ? render charau children diye access kora jai
    const { count } = this.state;

    return render(count, this.incrementCount);
  }
}
