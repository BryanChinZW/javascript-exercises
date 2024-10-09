const convertToCelsius = function(temp) {
  result = (temp - 32) * (5/9)
  if(!Number.isInteger(result)){
    return parseFloat(result.toFixed(1))
  }
    return result
};

const convertToFahrenheit = function(temp) {
  result = (temp*(9/5)+32)
  if(!Number.isInteger(result)){
    return parseFloat(result.toFixed(1))
  }
    return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
