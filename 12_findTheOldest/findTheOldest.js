const findTheOldest = function(arr) {
  var oldest = arr[0]
  var oldestAge =0
  for(let i = 0; i<arr.length;i++){
    if(!arr[i].yearOfDeath){
      var d = new Date();
      yearOfDeath = d.getFullYear();
    }else{
      yearOfDeath = arr[i].yearOfDeath
    }
    var age = yearOfDeath - arr[i].yearOfBirth
    if(age>oldestAge){
      oldestAge = age
      oldest = arr[i]
    }
  }
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
