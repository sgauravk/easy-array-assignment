//complement of a function

const complement = function(funcToComp){
  return function(argv){
    return !funcToComp(argv);
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

const reverseElements = function(numbers){
  return numbers.reverse();
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

const findListLength = function(array){
  return array.length;
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
const countNumbersAbove = function(array,range){
  let limit = aboveThershold(range);
  return array.filter(limit).length;
}


//Count how many numbers below a certain threshold in an array

const belowThershold = function(limit){
  return function(number){
    return number<limit;
  }
}
const countNumbersBelow = function(numbers,range){
  let limit = belowThershold(range);
  return numbers.filter(limit).length;
}


//Reversing an Array - Given an array, write a function that provides a reversed version of the same array *without* changing the contents of the original array.

const reverseArrayElements = function(array){
  let revArray = array.slice(0);
  return revArray.reverse();
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

const stringToNum = function(num){
  return +num;
}
const extractDigits = function(numbers){
  return (""+numbers).split('').map(stringToNum);
}


//Given a array and number and cheks the number is include in the array elements or not.

const isInclude = function(array,numToChk){
  let result = false;
  if (array.includes(numToChk)){
  result = true;
  }
  return result;
}


//Unique - Given an array, remove duplicate elements and return an array of only unique elements

const filterUnique = function(array,element){
  if(!isInclude(array,element)){
    array.push(element);
  }
  return array;
}

const extractUniqueElements = function(array){
  return array.reduce(filterUnique,[]);
}


//Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.

const createUnion = function(list1,list2){
  let unionArray = list1.concat(list2);
  return extractUniqueElements(unionArray);
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


//Zip - insert elements from two arrays

const zipElements = function(list1,list2){
  range = Math.min(list1.length,list2.length);
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
