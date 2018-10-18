//decide a number is even or not - return the answer in true false

const isEven = function(number){
  return number % 2 == 0;
}


//decide a number is odd or not - return the answer in true false

const isOdd = function(number){
  return Math.abs(number % 2) == 1;
}


//Selecting even numbers - Given a list of numbers, select the ones that are even

const selectEvenNumbers = function(numbers){
  let evenNumbers = [];
  for(let index=0; index<numbers.length; index++){
    if(isEven(numbers[index])){
      evenNumbers.push(numbers[index]);
    }
  }
  return evenNumbers;
}


//Selecting odd numbers - Given a list of numbers, select the ones that are odd

const selectOddNumbers = function(numbers){
  let oddNumbers = [];
  for(let index=0; index<numbers.length; index++){
    if(isOdd(numbers[index])){
      oddNumbers.push(numbers[index]);
    }
  }
  return oddNumbers;
}


//Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers

const sumOfElements = function(array){
  let sum = 0;
  for(let index=0; index<array.length; index++){
    sum = sum+array[index];
  }
  return sum;
}


//Printing reverse - Given a list of numbers, PRINT the list in reverse order

const reverseElements = function(numbers){
  for(let index = 0; index<=(numbers.length-1)/2; index++){
    storeElement = numbers[index];
    numbers[index] = numbers[numbers.length-1-index]
    numbers[numbers.length-1-index] = storeElement;
  }
  return numbers;
}


//Selecting every second element - Given a list of numbers, select every second one

const selectEach2ndElement = function(numbers){
  let every2ndNumberArray = [];
  let count = 0;
  for(let index=0; index<numbers.length; index+=2){
    every2ndNumberArray[count] = numbers[index];
    count++;
  }
  return every2ndNumberArray;
}


//Reverse Fibonacci - Generate a fibonacci sequence of length n in reverse order

const reverseFibonacci = function(limit){
  let firstTerm = 0;
  let secondTerm = 1;
  let fiboNumberList = [];
  for(let index=0; index<limit; index++){
    let element = firstTerm+secondTerm;
    fiboNumberList.push(firstTerm);
    firstTerm = secondTerm;
    secondTerm = element;
  }
  return reverseElements(fiboNumberList);
}


//Greatest number in a list - Given a list of numbers, find the greatest number in that sequence

const findGreatestNumber = function(numbers){
  let greatestNumber = numbers[0];
  for(let index=1; index<numbers.length; index++){
    if(numbers[index] > greatestNumber){
      greatestNumber = numbers[index]
    }
  }
  return greatestNumber;
}


//Lowest number in a list - Given a list of numbers, find the lowest number in that sequence

const findLowestNumber = function(numbers){
  let LowestNumber = numbers[0];
  for(let index=1; index<numbers.length; index++){
    if(numbers[index] < LowestNumber){
      LowestNumber = numbers[index]
    }
  }
  return LowestNumber;
}


//Average of a list - Given a list of numbers, find the findAverage of that list

const calculateAverage = function(list){
  let sumOfList = 0;
  for(let index=0; index<list.length; index++){
    sumOfList = sumOfList + list[index];
  }
  return sumOfList/list.length;
}


//Mapping lengths - Given a list of names, generate another array that contains the length of each of the names

const mapElementsLength = function(numbers){
  let mapElementsLengthArray = [];
  for(let index=0; index<numbers.length; index++){
    mapElementsLengthArray[index] = numbers[index].length;
  }
  return mapElementsLengthArray;
}


//Counting odd numbers - Write a function to count how many odd numbers are present in an array

const countOddNumbers = function(numbers){
  let count = 0;
  for(let index=0; index<numbers.length; index++){
    if(isOdd(numbers[index])){
      count++;
    }
  }
  return count;
}


//Counting even numbers - Write a function to count how many even numbers are present in an array

const countEvenNumbers = function(numbers){
  let count = 0;
  for(let index=0; index<numbers.length; index++){
    if(isEven(numbers[index])){
      count++;
    }
  }
  return count;
}


//Count how many numbers above a certain threshold in an array

const countAbove = function(numbers,range){
  let count = 0;
  for(let index=0; index<numbers.length; index++){
    if(numbers[index] > range){
      count++;
    }
  }
  return count;
}


//Count how many numbers below a certain threshold in an array

const countBelow = function(numbers,range){
  let count = 0;
  for(let index=0; index<numbers.length; index++){
    if(numbers[index] < range){
      count++;
    }
  }
  return count;
}


//Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array.

const reverseArrayElements = function(array){
  let revArray = [];
  for(let index=array.length-1; index>=0; index--){
    revArray[array.length-1-index] = array[index];
  }
  return revArray
}


//Index Of a Numberber - Given an array of numbers find the first position of a specified number

const findFirstOccurance = function(numbers,numToChk){
  let firstOccurance = undefined;
  for(let index=numbers.length-1; index>=0; index--){
    if(numbers[index] == numToChk){
      firstOccurance = index;
    }
  }
  return firstOccurance;
}


//Ascending order - Given an array of numbers, check if the array is in ascending order

const isAscending = function(list){
  let isAscending = true;
  for(let index=0; index < list.length; index++){
    if(list[index]>list[index+1]){
      isAscending = false;
      break;
    }
  }
  return isAscending;
}


//Descending order - Given an array of numbers, check if the array is in descending order

const isDescending = function(list){
  let isDescending = true;
  for(let index=0; index < list.length; index++){
    if(list[index]<list[index+1]){
      isDescending = false;
      break;
    }
  }
  return isDescending;
}


//Extract digits - Given a number, extract the digits of a number into an array:

const extractDigit = function(numbers){
  let array = [];
  for(let count=0; count<(""+numbers).length; count++){
    array[count] = (""+numbers)[count];
  }
  return array;
}


//Given a array and number and cheks the number is include in the array elements or not.

const isInclude = function(array,noToChk){
  let result = false;
  for(let index=0; index < array.length; index++){
    if(array[index] == noToChk){
      result = true;
    }
  }
  return result;
}


//Unique - Given an array, remove duplicate elements and return an array of only unique elements

const extractUniqueElements = function(array){
  let uniqueArray = [];
  uniqueArray[0] = array[0];
  for (let index=1; index < array.length; index++){
    if(!isInclude(uniqueArray,array[index])){
      uniqueArray.push(array[index]);
    }
  }
  return uniqueArray;
}


//Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.

const createUnion = function(list1,list2){
  let unionArray = list1;
  let list1Length = list1.length;
  for(let index=0; index<list2.length; index++){
    if(!isInclude(unionArray,list2[index])){
      unionArray[list1Length] = list2[index];
      list1Length++;
    }
  }
  return unionArray;
}


//Intersection - Given two arrays, generate a new array consisting of unique elements that are contained in both arrays.

const findIntersection = function(list1,list2){
  let createIntersectionArray = [];
  let countArrayIndex = 0;
  for(let index=0; index < list1.length; index++){
    if(isInclude(list2,list1[index])){
      createIntersectionArray[countArrayIndex] = list1[index];
      countArrayIndex++;
    }
  }
  return createIntersectionArray;
}


//Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.

const differenceBetweenArray = function(list1,list2){
  let uniqInFirst = [];
  let uniqArrayIndex = 0;
  for(let index=0; index<list1.length; index++){
    if(!isInclude(list2,list1[index])){
      uniqInFirst[uniqArrayIndex] = list1[index];
      uniqArrayIndex++;
    }
  }
  return uniqInFirst;
}


//isSubset - Given two arrays, check if the second is a proper subset of the first.

const isSubset = function(list,subList){
  let isSubset = false;
  for(let count=0; count <= (list.length - subList.length); count++){
    if((""+list.slice(count,count + subList.length)) == (""+subList)){
      isSubset = true;
      break;
    }
  }
  return isSubset;
}


//actul length of a array it can not count the empty element

const findActualLength = function(array){
  let length = 0;
  for(let index=0; index<array.length; index++){
    if(array[index] != undefined){
      length++;
    }
  }
  return length;
}


//Zip - insert elements from two arrays

const zipElements = function(list1,list2){
  let range = findActualLength(list1);
  if(findActualLength(list1) > findActualLength(list2)){
    range = findActualLength(list2);
  }
  let zipArray = [];
  for(let index=0; index < range; index++){
    zipArray[index] = [list1[index],list2[index]];
  }
  return zipArray;
}


//Rotate - creates a new array by rotating elements from the given array.

const rotateElements = function(list,numberToRotate){
  let rotateArray = [];
  if(list.length > numberToRotate){
    rotateArray = list.slice(numberToRotate);
  }
  let rotateArrayLength = rotateArray.length;
  for(let index=0; index < list.length-rotateArrayLength; index++){
    rotateArray.push(list[index]);
  }
  return rotateArray;
}


//Partition - Given an array of numbers, it returns a partitioned array consisting of numbers above a certain number and below a certain number

const elementsPartition = function(numbers,range){
  let partitianArray = [[],[]];
  for(let index=0; index<numbers.length; index++){
    if(numbers[index] <= range){
      partitianArray[0].push(numbers[index]);
    }
    if(numbers[index] > range){
      partitianArray[1].push(numbers[index]);
    }
  }
  return partitianArray;
}


exports.isSubset = isSubset;
exports.countAbove = countAbove;
exports.countBelow = countBelow;
exports.isAscending = isAscending;
exports.zipElements = zipElements;
exports.createUnion = createUnion;
exports.isDescending = isDescending;
exports.extractDigit = extractDigit;
exports.sumOfElements = sumOfElements;
exports.rotateElements = rotateElements;
exports.countOddNumbers = countOddNumbers;
exports.reverseElements = reverseElements;
exports.reverseFibonacci = reverseFibonacci;
exports.findLowestNumber = findLowestNumber;
exports.countEvenNumbers = countEvenNumbers;
exports.findIntersection = findIntersection;
exports.selectOddNumbers = selectOddNumbers;
exports.calculateAverage = calculateAverage;
exports.mapElementsLength = mapElementsLength;
exports.selectEvenNumbers = selectEvenNumbers;
exports.elementsPartition = elementsPartition;
exports.findGreatestNumber = findGreatestNumber;
exports.findFirstOccurance = findFirstOccurance;
exports.reverseArrayElements = reverseArrayElements;
exports.selectEach2ndElement = selectEach2ndElement;
exports.extractUniqueElements = extractUniqueElements;
exports.differenceBetweenArray = differenceBetweenArray;
