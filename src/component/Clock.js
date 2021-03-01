/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-constructor */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable prettier/prettier */
import React from 'react';

class Clock extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {date: new Date()};
	// }

	state = {date: new Date()};

	componentDidMount(){
		this.clockTimer = 	setInterval(() =>
			this.tick()
		, 1000)
	}

	componentWillUnmount(){
		clearInterval(this.clockTimer);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

  render() {
    return (
      <h1 className="heading">
        <span>{this.state.date.toLocaleString(this.props.locle)}</span>
      </h1>
    );
    
  }
}

export default Clock;
