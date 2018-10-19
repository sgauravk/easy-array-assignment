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
  for(let number of numbers){
    if(isEven(number)){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}


//Selecting odd numbers - Given a list of numbers, select the ones that are odd

const selectOddNumbers = function(numbers){
  let oddNumbers = [];
  for(let number of numbers){
    if(isOdd(number)){
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}


//Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers

const sumOfNumbers = function(numbers){
  let sum = 0;
  for(let number of numbers ){
    sum = sum+number;
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
  for(let number of numbers){
    if(number > greatestNumber){
      greatestNumber = number;
    }
  }
  return greatestNumber;
}


//Lowest number in a list - Given a list of numbers, find the lowest number in that sequence

const findLowestNumber = function(numbers){
  let LowestNumber = numbers[0];
  for(let number of numbers){
    if(number < LowestNumber){
      LowestNumber = number;
    }
  }
  return LowestNumber;
}


//Average of a list - Given a list of numbers, find the findAverage of that list

const calculateAverage = function(numbers){
  let sumOfList = 0;
  for(let number of numbers){
    sumOfList = sumOfList + number;
  }
  return sumOfList/numbers.length;
}


//Mapping lengths - Given a list of names, generate another array that contains the length of each of the names

const mapElementsLength = function(list){
  let mapElements = [];
  for(let element of list){
    mapElements.push(element.length);
  }
  return mapElements;
}


//Counting odd numbers - Write a function to count how many odd numbers are present in an array

const countOddNumbers = function(numbers){
  let count = 0;
  for(let number of numbers){
    if(isOdd(number)){
      count++;
    }
  }
  return count;
}


//Counting even numbers - Write a function to count how many even numbers are present in an array

const countEvenNumbers = function(numbers){
  let count = 0;
  for(let number of numbers){
    if(isEven(number)){
      count++;
    }
  }
  return count;
}


//Count how many numbers above a certain threshold in an array

const countNumbersAbove = function(numbers,range){
  let count = 0;
  for(let number of numbers){
    if(number > range){
      count++;
    }
  }
  return count;
}


//Count how many numbers below a certain threshold in an array

const countNumbersBelow = function(numbers,range){
  let count = 0;
  for(let number of numbers){
    if(number < range){
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

const findFirstOccurrence = function(numbers,numToChk){
  let firstOccurrence = undefined;
  for(let index=numbers.length-1; index>=0; index--){
    if(numbers[index] == numToChk){
      firstOccurrence = index;
    }
  }
  return firstOccurrence;
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

const extractDigits = function(numbers){
  let array = [];
  for(let count=0; count<(""+numbers).length; count++){
    array[count] = (""+numbers)[count];
  }
  return array;
}


//Given a array and number and cheks the number is include in the array elements or not.

const isInclude = function(array,numToChk){
  let result = false;
  for(let element of array){
    if(element == numToChk){
      result = true;
    }
  }
  return result;
}


//Unique - Given an array, remove duplicate elements and return an array of only unique elements

const extractUniqueElements = function(array){
  let uniqueArray = [];
  uniqueArray[0] = array[0];
  for (let element of array){
    if(!isInclude(uniqueArray,element)){
      uniqueArray.push(element);
    }
  }
  return uniqueArray;
}


//Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.

const createUnion = function(list1,list2){
  let unionArray = [];
  unionArray[0] = list1[0];
  for(let number of list1){
    if(!isInclude(unionArray,number)){
      unionArray.push(number);
    }
  }
  for(let number of list2){
     if(!isInclude(unionArray,number)){
      unionArray.push(number);
    }
  }
  return unionArray;
}


//Intersection - Given two arrays, generate a new array consisting of unique elements that are contained in both arrays.

const findIntersection = function(list1,list2){
  let intersectionArray = [];
  for(let number of list2){
    if(isInclude(list1,number)){
      intersectionArray.push(number);
    }
  }
  return intersectionArray;
}


//Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.

const differenceBetweenArray = function(list1,list2){
  let uniqInFirst = [];
  for(let number of list1){
    if(!isInclude(list2,number)){
      uniqInFirst.push(number);
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
    }
  }
  return isSubset;
}


//actul length of a array it can not count the empty element

const findActualLength = function(array){
  let length = 0;
  for(let element of array){
    if(element != undefined){
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
  for(let number of numbers){
    if(number <= range){
      partitianArray[0].push(number);
    }
    if(number > range){
      partitianArray[1].push(number);
    }
  }
  return partitianArray;
}


exports.isSubset = isSubset;
exports.isAscending = isAscending;
exports.zipElements = zipElements;
exports.createUnion = createUnion;
exports.isDescending = isDescending;
exports.extractDigits = extractDigits;
exports.sumOfNumbers = sumOfNumbers;
exports.rotateElements = rotateElements;
exports.countOddNumbers = countOddNumbers;
exports.reverseElements = reverseElements;
exports.reverseFibonacci = reverseFibonacci;
exports.findLowestNumber = findLowestNumber;
exports.countEvenNumbers = countEvenNumbers;
exports.findIntersection = findIntersection;
exports.selectOddNumbers = selectOddNumbers;
exports.calculateAverage = calculateAverage;
exports.countNumbersAbove = countNumbersAbove;
exports.countNumbersBelow = countNumbersBelow;
exports.mapElementsLength = mapElementsLength;
exports.selectEvenNumbers = selectEvenNumbers;
exports.elementsPartition = elementsPartition;
exports.findGreatestNumber = findGreatestNumber;
exports.findFirstOccurrence = findFirstOccurrence;
exports.reverseArrayElements = reverseArrayElements;
exports.selectEach2ndElement = selectEach2ndElement;
exports.extractUniqueElements = extractUniqueElements;
exports.differenceBetweenArray = differenceBetweenArray;
