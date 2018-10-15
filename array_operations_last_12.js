//Index Of a Number - Given an array of numbers find the first position of a specified number

const firstOccaranceOfNo = function(numbers,noToChk){
  let firstOccarance = undefined;
  for(let index=numbers.length-1; index>=0; index--){
    if(numbers[index] == noToChk){
      firstOccarance = index;
    }
  }
  return firstOccarance;
}

//Ascending order - Given an array of numbers, check if the array is in ascending order

const isListAscending = function(numbers){
  let isAscending = true;
  for(let index=0; index < numbers.length; index++){
    if(numbers[index]>numbers[index+1]){
      isAscending = false;
      break;
    }
  }
  return isAscending;
}

//Descending order - Given an array of numbers, check if the array is in descending order

const isListDecending = function(numbers){
  let isDecending = true;
  for(let index=0; index < numbers.length; index++){
    if(numbers[index]<numbers[index+1]){
      isDecending = false;
      break;
    }
  }
  return isDecending;
}

//Extract digits - Given a number, extract the digits of a number into an array:

const ExtractDigitInArray = function(number){
  let array = [];
  for(let count=0; count<(""+number).length; count++){
    array[count] = (""+number)[count];
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

const uniqueArray = function(array){
  let newArray = [];
  newArray[0] = array[0];
  for (let index=1; index < array.length; index++){
    if(!isInclude(newArray,array[index])){
      newArray.push(array[index]);
    }
  }
  return newArray;
}

//Union - Given two arrays, generate a new array consisting of unique elements across both those arrays.

const unianList = function(list1,list2){
  let unianArray = list1;
  let list1Length = list1.length;
  for(let index=0; index<list2.length; index++){
    if(!isInclude(unianArray,list2[index])){
      unianArray[list1Length] = list2[index];
      list1Length++;
    }
  }
  return unianArray;
}

//Intersection - Given two arrays, generate a new array consisting of unique elements that are contained in both arrays.

const intersactionList = function(list1,list2){
  let intersectionArray = [];
  let countArrayIndex = 0;
  for(let index=0; index < list1.length; index++){
    if(isInclude(list2,list1[index])){
      intersectionArray[countArrayIndex] = list1[index];
      countArrayIndex++;
    }
  }
  return intersectionArray;
}

//Difference - Given two arrays, generate a new array that consists of unique elements that are present in the first array, but not in the second.

const differanceBwArray = function(list1,list2){
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

const isProperSubset = function(list,subList){
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

const actualLength = function(array){
  let length = 0;
  for(let index=0; index<array.length; index++){
    if(array[index] != undefined){
      length++;
    }
  }
  return length;
}

//Zip - insert elements from two arrays

const createZipArray = function(list1,list2){
  let range = actualLength(list1);
  if(actualLength(list1) > actualLength(list2)){
    range = actualLength(list2);
  }
  let zipArray = [];
  for(let index=0; index < range; index++){
    zipArray[index] = [list1[index],list2[index]];
  }
  return zipArray;
}

//Rotate - creates a new array by rotating elements from the given array.

const rotateList = function(list,numberToRotate){
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


exports.firstOccaranceOfNo = firstOccaranceOfNo;
exports.isListAscending = isListAscending;
exports.isListDecending = isListDecending;
exports.ExtractDigitInArray = ExtractDigitInArray;
exports.uniqueArray = uniqueArray;
exports.unianList = unianList;
exports.intersactionList = intersactionList;
exports.differanceBwArray = differanceBwArray;
exports.isProperSubset = isProperSubset;
exports.createZipArray = createZipArray;
exports.rotateList = rotateList;
