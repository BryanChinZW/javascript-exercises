const fibonacci = function(num) {
  if(num==0){
    return 0
  }
  if(num < 0){
    return "OOPS"
  }
  num = num - 1
  var first = 0
  var second = 1
  for(let i = 0; i<num;i++){
    var temp = second
    second = second + first
    first = temp
  }
  return second
};

// Do not edit below this line
module.exports = fibonacci;
