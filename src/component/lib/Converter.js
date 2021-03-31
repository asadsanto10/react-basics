/* eslint-disable import/prefer-default-export */
export function toCelsius(fahrenheit) {
  return ((fahrenheit - 30) * 5) / 9;
}

export function tofahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convert(temparature, convertTo) {
  const input = parseFloat(temparature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertTo(input);
  const roundded = Math.round(output * 1000) / 1000;
  return roundded.toString();
}
