const leapYears = function(year) {
  if(!Number.isInteger(year)){
    return "ERROR"
  }
  var divisible4 = year/4
  var divisible100 = year/100
  var divisible400 = year/400
  if(Number.isInteger(divisible4)&&Number.isInteger(divisible100)){
    if(Number.isInteger(divisible400)){
      return true
    }else{
      return false
    }
  }else if(Number.isInteger(divisible4)){
    return true
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
