const palindromes = function (string) {
  string = string.replace(/[^a-zA-Z0-9]/g, '');
  string = string.toLowerCase()
  var stringArr = []
  var reverseString = ""
  for(let i = 0; i<string.length; i++){
    stringArr.push(string[i])
  }
  var stringArrLen = stringArr.length
  for(let i = 0; i<stringArrLen; i++){
    reverseString = reverseString + stringArr.pop()
  }
  if(string == reverseString){
    return true
  }
  return false
  
};

// Do not edit below this line
module.exports = palindromes;
