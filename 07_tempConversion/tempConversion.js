const convertToCelsius = function(temp) {
  let celTemp = Math.round(((temp - 32) * 5 / 9) * 10) / 10
  return celTemp;
};

const convertToFahrenheit = function(temp) {
  let fahTemp = Math.round(((temp * 9 / 5) + 32) * 10) / 10;
  return fahTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
