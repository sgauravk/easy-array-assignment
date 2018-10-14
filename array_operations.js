const isEven = function(number){
  condition = (number % 2 == 0);
  return condition;
}

const isOdd = function(number){
  condition = (number % 2 == 1);
  return condition;
}

const selectEven = function(numbers){
  let evenNumbers = [];
  for(let index=0; index<numbers.length; index++){
    if(isEven(numbers[index])){
      evenNumbers.push(numbers[index]);
    }
  }
  return evenNumbers;
}

const selectOdd = function(numbers){
  let oddNumbers = [];
  for(let index=0; index<numbers.length; index++){
    if(isOdd(numbers[index])){
      oddNumbers.push(numbers[index]);
    }
  }
  return oddNumbers;
}

const sumOfArrayElement = function(numbers){
  let sum = 0;
  for(index=0; index<numbers.length; index++){
    sum = sum+numbers[index];
  }
  return sum;
}

const reverseList = function(numbers){
  let revNum = [];
  for(index = numbers.length-1; index>=0; index--){
    revNum[(numbers.length-1) - index] = numbers[index];
  }
  return revNum;
}

const salectingEach2No = function(numbers){
  let each2NoArray = [];
  let count = 0;
  for(index=0; index<numbers.length; index+=2){
    each2NoArray[count] = numbers[index];
    count++;
  }
  return each2NoArray;
}
const gretestNoInList = function(numbers){
  let gretestNo = numbers[0];
  for(index=1; index<numbers.length; index++){
    if(numbers[index] > gretestNo){
      gretestNo = numbers[index]
    }
  }
  return gretestNo;
}

const lowestNoInList = function(numbers){
  let lowestNo = numbers[0];
  for(index=1; index<numbers.length; index++){
    if(numbers[index] < lowestNo){
      lowestNo = numbers[index]
    }
  }
  return lowestNo;
}

const averageOfList = function(numbers){
  let sumOfList = 0;
  for(index=0; index<numbers.length; index++){
    sumOfList = sumOfList + numbers[index];
  }
  return sumOfList/numbers.length;
}


exports.selectEven = selectEven;
exports.selectOdd = selectOdd;
exports.sumOfArrayElement = sumOfArrayElement;
exports.reverseList = reverseList;
exports.salectingEach2No = salectingEach2No;
exports.gretestNoInList = gretestNoInList;
exports.lowestNoInList = lowestNoInList;
exports.averageOfList = averageOfList;
