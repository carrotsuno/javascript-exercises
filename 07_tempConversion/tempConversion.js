const convertToCelsius = function(tempInF) {
    const tempInC = (tempInF - 32) * (5 / 9);
    const rounded = Math.round(tempInC * 10) / 10;

    if (tempInC - Math.floor(tempInC) == 0) {
      return tempInC;
    }
    else{
      return rounded;
    }
};

const convertToFahrenheit = function(tempInC) {
    const tempInF = tempInC * (9 / 5) + 32;
    const rounded = Math.round(tempInF * 10) / 10;
    if (tempInF - Math.floor(tempInF) == 0) {
      return tempInF;
    }
    else{
      return rounded;
    }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
