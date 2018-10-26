//complement of a function

const complement = function(Function){
  return function(argv){
    return !Function(argv);
  }
}


//decide a number is even or not - return the answer in true false

const isEven = function(number){
  return number % 2 == 0;
}


//decide a number is odd or not - return the answer in true false

const isOdd = complement(isEven);


//Selecting even numbers - Given a list of numbers, select the ones that are even

const selectEvenNumbers = function(numbers){
  return numbers.filter(isEven); 
}


//Selecting odd numbers - Given a list of numbers, select the ones that are odd

const selectOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}


//Sum of a list of numbers - Given a list of numbers, find the sum of all these numbers

const sum = function(num1,num2){
  return num1+num2;
}
const sumOfNumbers = function(numbers){
  return numbers.reduce(sum);
}


//Printing reverse - Given a list of numbers, PRINT the list in reverse order

const reverse = function(list){
  for(let index=0; index<list.length/2; index++){
    let storeValue = list[index];
    list[index] = list[list.length - index - 1];
    list[list.length - index - 1] = storeValue;
  }
  return list;
}

const reverseElements = function(numbers){
  return reverse(numbers);
}


//Selecting every second element - Given a list of numbers, select every second one
const selectEach2ndElement = function(numbers){
  let filteredList = [];
  let count = 0;
  for(let index=0; index<numbers.length; index+=2){
    filteredList[count] = numbers[index];
    count++;
  }
  return filteredList;
}


//Reverse Fibonacci - Generate a fibonacci sequence of length n in reverse order

const reverseFibonacci = function(limit){
  let startingTerm = 0; 
  let nextTerm = 1;
  let fibonacciList = [];
  for(let count=0; count<limit; count++){
    let sumOfTerms = startingTerm + nextTerm;
    fibonacciList.unshift(startingTerm);
    startingTerm = nextTerm;
    nextTerm = sumOfTerms;
  }
  return fibonacciList;
}


//Greatest number in a list - Given a list of numbers, find the greatest number in that sequence

const gretestNumber = function(num1,num2){
  return Math.max(num1,num2);
}

const findGreatestNumber = function(numbers){
  return numbers.reduce(gretestNumber);
}


//Lowest number in a list - Given a list of numbers, find the lowest number in that sequence

const lowestNumber = function(num1,num2){
  return Math.min(num1,num2);
}

const findLowestNumber = function(numbers){
  return numbers.reduce(lowestNumber);
}

//Average of a list - Given a list of numbers, find the findAverage of that list

const calculateAverage = function(numbers){
  return numbers.reduce(sum)/numbers.length;
}


//Mapping lengths - Given a list of names, generate another array that contains the length of each of the names

const findListLength = function(list){
  return list.length;
}

const mapElementsLength = function(list){
  return list.map(findListLength);
}

//Counting odd numbers - Write a function to count how many odd numbers are present in an array

const countOddNumbers = function(numbers){
  return numbers.filter(isOdd).length;
}


//Counting even numbers - Write a function to count how many even numbers are present in an array

const countEvenNumbers = function(numbers){
  return numbers.filter(isEven).length; 
}


//Count how many numbers above a certain threshold in an array

const aboveThershold = function(limit){
  return function(number){
    return number>limit;
  }
}

const countNumbersAbove = function(list,limit){
  return list.filter(aboveThershold(limit)).length;
}


//Count how many numbers below a certain threshold in an array

const belowThershold = function(limit){
  return function(number){
    return number<limit;
  }
}

const countNumbersBelow = function(numbers,limit){
  return numbers.filter(belowThershold(limit)).length;
}


//Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array.

const reverseList = function(list){
  let revList = list.slice(0);
  return revList.reverse();
}


//Index Of a Numberber - Given an array of numbers find the first position of a specified number

const findFirstOccurrence = function(numbers,numToCheck){
  for(let index=0; index<numbers.length; index++){
    if(numbers[index] == numToCheck){
      return index;
    }
  }
}


//Ascending order - Given an array of numbers, check if the array is in ascending order

const isNumAscending = function(previousVal,currentVal){
  if(previousVal.num <= currentVal){
    previousVal.num = currentVal;
    return previousVal;
  }
  previousVal.result = false;
  return previousVal;
}

const isAscending = function(list){
  let initializer = {num:list[0], result:true};
  return list.reduce(isNumAscending,initializer).result;
}


//Descending order - Given an array of numbers, check if the array is in descending order

const isOrderDescending = function(previousVal,currentVal){
  if(previousVal.number >= currentVal){
    previousVal.number = currentVal;
    return previousVal;
  }
  previousVal.result = false;
  return previousVal;
}

const isDescending = function(list){
  let initializer = {number:list[0], result:true};
  return list.reduce(isOrderDescending,initializer).result;
}


//Extract digits - Given a number, extract the digits of a number into an array:

const extractDigits = function(numbers){
  return numbers.toString().split('').map(number => +number);
}


//Unique - Given an array, remove duplicate elements and return an array of only unique elements

const filterUnique = function(list,element){
  if(!list.includes(element)){
    list.push(element);
  }
  return list;
}

const extractUniqueElements = function(list){
  return list.reduce(filterUnique,[]);
}


//Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.

const createUnion = function(list1,list2){
  let unionArray = list1.concat(list2);
  return extractUniqueElements(unionArray);
}


//Intersection - Given two arrays, generate a new array consisting of unique elements that are contained in both arrays.

const checkIntersection = function(list){
  return function(element){
    return list.includes(element);
  }
}
const findIntersection = function(list1,list2){
  let intersectionArray = checkIntersection(list2);
  return extractUniqueElements(list1.filter(intersectionArray));
}


//Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.

const checkDiffrence = function(list){
  return function(element){
    return !list.includes(element);
  }
}
const differenceBetweenArray = function(list1,list2){
  let filteredArray = checkDiffrence(list2);
  return extractUniqueElements(list1.filter(filteredArray));
}


//isSubset - Given two arrays, check if the second is a proper subset of the first.

const isSubset = function(list,subList){
  let isSubset = true;
  for(let count=0; count < subList.length; count++){
    if(!list.includes(subList[count])){
      isSubset = false;
    }
  }
  return isSubset;
}


//Zip - insert elements from two arrays

const zipElements = function(list1,list2){
  let range = Math.min(list1.length,list2.length);
  let zipArray = [];
  for(let index=0; index < range; index++){
    zipArray[index] = [list1[index],list2[index]];
  }
  return zipArray;
}


//Rotate - creates a new array by rotating elements from the given array.

const rotateElements = function(list,numberToRotate){
  let part1 = list.slice(numberToRotate);
  let part2 = list.slice(0,numberToRotate);
  return part1.concat(part2);
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
exports.reverseList = reverseList;
exports.isDescending = isDescending;
exports.sumOfNumbers = sumOfNumbers;
exports.extractDigits = extractDigits;
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
exports.selectEach2ndElement = selectEach2ndElement;
exports.extractUniqueElements = extractUniqueElements;
exports.differenceBetweenArray = differenceBetweenArray;
