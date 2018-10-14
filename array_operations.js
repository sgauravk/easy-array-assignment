//decide a number is even or not - return the answer in true false

const isEven = function(number){
  condition = (number % 2 == 0);
  return condition;
}

//Mapping lengths - Given a list of names, generate another array that contains the length of each of the names:

const isOdd = function(number){
  condition = (number % 2 == 1);
  return condition;
}

//Selecting even numbers - Given a list of numbers, select the ones that are even

const selectEven = function(numbers){
  let evenNumbers = [];
  for(let index=0; index<numbers.length; index++){
    if(isEven(numbers[index])){
      evenNumbers.push(numbers[index]);
    }
  }
  return evenNumbers;
}

//Selecting odd numbers - Given a list of numbers, select the ones that are odd

const selectOdd = function(numbers){
  let oddNumbers = [];
  for(let index=0; index<numbers.length; index++){
    if(isOdd(numbers[index])){
      oddNumbers.push(numbers[index]);
    }
  }
  return oddNumbers;
}

//Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers

const sumOfArrayElement = function(numbers){
  let sum = 0;
  for(index=0; index<numbers.length; index++){
    sum = sum+numbers[index];
  }
  return sum;
}

//Printing reverse - Given a list of numbers, PRINT the list in reverse order

const reverseList = function(numbers){
  let revNum = [];
  for(index = numbers.length-1; index>=0; index--){
    revNum[(numbers.length-1) - index] = numbers[index];
  }
  return revNum;
}

//Selecting every second element - Given a list of numbers, select every second one

const salectingEach2No = function(numbers){
  let each2NoArray = [];
  let count = 0;
  for(index=0; index<numbers.length; index+=2){
    each2NoArray[count] = numbers[index];
    count++;
  }
  return each2NoArray;
}

//Greatest number in a list - Given a list of numbers, find the greatest number in that sequence

const gretestNoInList = function(numbers){
  let gretestNo = numbers[0];
  for(index=1; index<numbers.length; index++){
    if(numbers[index] > gretestNo){
      gretestNo = numbers[index]
    }
  }
  return gretestNo;
}

//Lowest number in a list - Given a list of numbers, find the lowest number in that sequence

const lowestNoInList = function(numbers){
  let lowestNo = numbers[0];
  for(index=1; index<numbers.length; index++){
    if(numbers[index] < lowestNo){
      lowestNo = numbers[index]
    }
  }
  return lowestNo;
}

//Average of a list - Given a list of numbers, find the average of that list

const averageOfList = function(numbers){
  let sumOfList = 0;
  for(index=0; index<numbers.length; index++){
    sumOfList = sumOfList + numbers[index];
  }
  return sumOfList/numbers.length;
}

//Mapping lengths - Given a list of names, generate another array that contains the length of each of the names

const mappingLength = function(numbers){
  let mappingLengthArray = [];
  for(index=0; index<numbers.length; index++){
    mappingLengthArray[index] = numbers[index].length;
  }
  return mappingLengthArray;
}

//Counting odd numbers - Write a function to count how many odd numbers are present in an array

const countOdd = function(numbers){
  let count = 0;
  for(index=0; index<numbers.length; index++){
    if(isOdd(numbers[index])){
      count++;
    }
  }
  return count;
}

//Counting even numbers - Write a function to count how many even numbers are present in an array

const countEven = function(numbers){
  let count = 0;
  for(index=0; index<numbers.length; index++){
    if(isEven(numbers[index])){
      count++;
    }
  }
  return count;
}

//Count how many numbers above a certain threshold in an array

const countNoAbove = function(numbers,range){
  let count = 0;
  for(index=0; index<numbers.length; index++){
    if(numbers[index] > range){
      count++;
    }
  }
  return count;
}

exports.selectEven = selectEven;
exports.selectOdd = selectOdd;
exports.sumOfArrayElement = sumOfArrayElement;
exports.reverseList = reverseList;
exports.salectingEach2No = salectingEach2No;
exports.gretestNoInList = gretestNoInList;
exports.lowestNoInList = lowestNoInList;
exports.averageOfList = averageOfList;
exports.mappingLength = mappingLength;
exports.countOdd = countOdd;
exports.countEven = countEven;
exports.countNoAbove = countNoAbove;
