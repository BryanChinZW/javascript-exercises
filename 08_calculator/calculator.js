const add = function(num1,num2) {
	return num1 + num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(arr) {
  var total = 0
	for(let i = 0;i<arr.length;i++){
    total = total + arr[i]
  }
  return total
};

const multiply = function(arr) {
  var total = arr[0]
	for(let i = 1;i<arr.length;i++){
    total = total * arr[i]
  }
  return total
};

const power = function(num1,num2) {
	return Math.pow(num1,num2)
};

const factorial = function(num) {
  //DOES NOT WORK FOR NEGATIVE
  if(num < 1){
    return 1
  }
  result = num
	for(let i = 1;i<num;i++){
    result = result*i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
