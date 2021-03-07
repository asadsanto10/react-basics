import React from 'react';

class Clock extends React.Component {
  // constructor(props){
  // 	super(props);
  // 	this.state = {date: new Date()};
  // }

  state = { date: new Date() };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleclick() {
    console.log('This is click');
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span>{date.toLocaleString('bn-BD')}</span>
        </h1>
        <button type="button" onClick={this.handleclick}>
          Click
        </button>
      </div>
    );
  }
}

export default Clock;
