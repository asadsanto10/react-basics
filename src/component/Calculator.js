import React from 'react';
import Boiling from './Boiling';
import { convert, toCelsius, tofahrenheit } from './lib/Converter';
import TemparatureInput from './TempratureInput';

class Calculator extends React.PureComponent {
  state = {
    temparature: '',
    scale: 'c',
  };

  haddeChange = (e, scale) => {
    this.setState({
      temparature: e.target.value,
      scale,
    });
  };

  render() {
    const { scale, temparature } = this.state;
    const celsius = scale === 'f' ? convert(temparature, toCelsius) : temparature;
    const fahrenheit = scale === 'c' ? convert(temparature, tofahrenheit) : temparature;
    return (
      <>
        <TemparatureInput scale="c" temparature={celsius} onTemperatureChange={this.haddeChange} />
        <TemparatureInput
          scale="f"
          temparature={fahrenheit}
          onTemperatureChange={this.haddeChange}
        />
        <Boiling celsius={parseFloat(temparature)} />
      </>
    );
  }
}

export default Calculator;
