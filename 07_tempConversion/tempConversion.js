const convertToCelsius = function(fahrenheit) {
  let celsiusConverted = (fahrenheit - 32) * 5/9;
  return Number(celsiusConverted.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitConverted = (celsius * 9/5) + 32;
  return Number(fahrenheitConverted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
