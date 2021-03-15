import React from 'react';
import Button from './Button';

class Clock extends React.Component {
  // constructor(props){
  // 	super(props);
  // 	this.state = {date: new Date()};
  // }

  state = { date: new Date(), locale: 'bn-Bd' };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleclick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date, locale } = this.state;
    // let button;
    // if (locale === 'bn-Bd') {
    //   button = <Button change={this.handleclick} locale="en-US" />;
    // } else {
    //   button = <Button change={this.handleclick} locale="bn-Bd" />;
    // }
    return (
      <div>
        <h1 className="heading">
          <span>{date.toLocaleString(locale)}</span>
        </h1>
        {locale === 'bn-Bd' ? (
          <Button change={this.handleclick} locale="en-US" show={false} />
        ) : (
          <Button change={this.handleclick} locale="bn-Bd" show />
        )}
      </div>
    );
  }
}

export default Clock;
