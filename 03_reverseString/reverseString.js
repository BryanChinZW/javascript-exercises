const reverseString = function(string) {
  if(!string instanceof String){
    string = string.toString()
   }
   var length = string.length
   var stringArr = []
   for(let i = 0;i<length;i++){
    stringArr.push(string[i])
   }
   var finalString = ""
   for(let i = length-1 ;i>-1;i--){
    finalString = finalString + string[i]
   }
   return finalString
};

// Do not edit below this line
module.exports = reverseString;
