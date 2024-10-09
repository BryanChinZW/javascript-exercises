const sumAll = function(num1,num2) {
  if(!Number.isInteger(num1)||!Number.isInteger(num2) ){
    return "ERROR"
  }
  if(Math.sign(num1)==-1||Math.sign(num2)==-1){
    return "ERROR"
  }
  if(num1<num2){
    var temp = num2
    num2 = num1
    num1 = temp
  }else if(num1 == num2){
    return 0
  }
  var total =num1
  for(let i=num2;i<num1;i++){
    total = total + i
  }
  return total
  
};

// Do not edit below this line
module.exports = sumAll;
