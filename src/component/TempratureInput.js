import React from 'react';

const scaleNmae = {
  c: 'Celsius',
  f: 'Fahrenheit',
};
const TemparatureInput = ({ scale, temparature, onTemperatureChange }) => (
  <>
    <fieldset>
      <legend>Enter temparature in {scaleNmae[scale]}</legend>
      <input type="text" value={temparature} onChange={(e) => onTemperatureChange(e, scale)} />
    </fieldset>
  </>
);

export default TemparatureInput;
