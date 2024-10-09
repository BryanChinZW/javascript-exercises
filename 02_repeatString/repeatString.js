const repeatString = function(string,num) {
 if(num < 0){
  return "ERROR"
 }
 if(!string instanceof String){
  return "ERROR"
 }
 var final = ""
 for(let i=0;i<num;i++){
  final = final + string
 }
 return final
};

// Do not edit below this line
module.exports = repeatString;
