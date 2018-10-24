const lib = require("./array_assignment_library.js");
const assert = require("assert");

let findFirstOccurrence = lib.findFirstOccurrence;
assert.equal(findFirstOccurrence([3],3),0);
assert.equal(findFirstOccurrence([0,2],2),1);
assert.equal(findFirstOccurrence([2,3],3),1);
assert.equal(findFirstOccurrence([1,2,3,2,3],3),2);
assert.equal(findFirstOccurrence([1,1,1,1,1,1],1),0);

let isAscending = lib.isAscending;
assert.equal(isAscending([1]),true);
assert.equal(isAscending([2,1]),false);
assert.equal(isAscending([1,2,1,2]),false);
assert.equal(isAscending([1,2,3,4,5]),true);
assert.equal(isAscending([1,2,3,4,0]),false);
assert.equal(isAscending([1,2,-3,4,20]),false);

let isDescending = lib.isDescending;
assert.equal(isDescending([]),true);
assert.equal(isDescending([1]),true);
assert.equal(isDescending([1,2]),false);
assert.equal(isDescending(["a","b"]),false);
assert.equal(isDescending([5,4,4,1,1,0,0]),true);

let extractDigits = lib.extractDigits;
assert.deepEqual(extractDigits(0),[0]);
assert.deepEqual(extractDigits(""),[]);
assert.deepEqual(extractDigits(123),[1,2,3]);
assert.deepEqual(extractDigits(420),[4,2,0]);

let extractUniqueElements = lib.extractUniqueElements;
assert.deepEqual(extractUniqueElements([1]),[1]);
assert.deepEqual(extractUniqueElements([2,2]),[2]);
assert.deepEqual(extractUniqueElements([1,2,2,3,2]),[1,2,3]);
assert.deepEqual(extractUniqueElements([2,2,2,2,2,2,2]),[2]);
assert.deepEqual(extractUniqueElements(["a","j","a"]),["a","j"]);

let createUnion = lib.createUnion;
assert.deepEqual(createUnion([1],[1]),[1]);
assert.deepEqual(createUnion([1],[3]),[1,3]);
assert.deepEqual(createUnion([0,0,0,0],[0,0]),[0]);
assert.deepEqual(createUnion([1,2,3],[3,4]),[1,2,3,4]);
assert.deepEqual(createUnion([1,2,3,3,4],[3,4]),[1,2,3,4]);

let findIntersection = lib.findIntersection;
assert.deepEqual(findIntersection([],[]),[]);
assert.deepEqual(findIntersection([2],[2]),[2]);
assert.deepEqual(findIntersection([-2],[2]),[]);
assert.deepEqual(findIntersection([1,2,3],[3,4]),[3]);
assert.deepEqual(findIntersection([-1,-2,3],[3,2,1]),[3]);

let differenceBetweenArray = lib.differenceBetweenArray;
assert.deepEqual(differenceBetweenArray([],[]),[]);
assert.deepEqual(differenceBetweenArray([1],[2]),[1]);
assert.deepEqual(differenceBetweenArray([1,2,2,2],[2]),[1]);
assert.deepEqual(differenceBetweenArray([1,2,2,7],[1,2,2,7]),[]);
assert.deepEqual(differenceBetweenArray([1,0,2,4,0],[0,1,2,4]),[]);
assert.deepEqual(differenceBetweenArray([1,2,2,7],[0,3,3,7]),[1,2]);

let isSubset = lib.isSubset;
assert.equal(isSubset([1],[1]),true);
assert.equal(isSubset([],[2,4]),false);
assert.equal(isSubset([1,2,3,2,4],[]),true);
assert.equal(isSubset([1,2,3,2,4],[2,4]),true);

let zipElements = lib.zipElements;
assert.deepEqual(zipElements([2,4],[1]),[[2,1]]);
assert.deepEqual(zipElements([1,2,3],[3]),[[1,3]]);
assert.deepEqual(zipElements([1,2,3],[3,2]),[[1,3],[2,2]]);
assert.deepEqual(zipElements([1,2,3,,],[3,2]),[[1,3],[2,2]]);

let rotateElements = lib.rotateElements;
assert.deepEqual(rotateElements([],),[]);
assert.deepEqual(rotateElements([],1),[]);
assert.deepEqual(rotateElements([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotateElements([1,2,3,4,5],1),[2,3,4,5,1]);
assert.deepEqual(rotateElements([1,2,3,4,5],5),[1,2,3,4,5]);
assert.deepEqual(rotateElements([1,2,3,4,5],0),[1,2,3,4,5]);
assert.deepEqual(rotateElements([-10,-2,-13,4,5],3),[4,5,-10,-2,-13]);

let selectEvenNumbers = lib.selectEvenNumbers;
assert.deepEqual(selectEvenNumbers([]),[]);
assert.deepEqual(selectEvenNumbers([-3,-1,1]),[]);
assert.deepEqual(selectEvenNumbers([-2,0,2]),[-2,0,2]);
assert.deepEqual(selectEvenNumbers([-2,-3,-4,5]),[-2,-4]);

let selectOddNumbers = lib.selectOddNumbers;
assert.deepEqual(selectOddNumbers([,,,]),[]);
assert.deepEqual(selectOddNumbers([2,4,6,8]),[]);
assert.deepEqual(selectOddNumbers([1,3,5,7]),[1,3,5,7]);
assert.deepEqual(selectOddNumbers([-3,-2,-1,0]),[-3,-1]);

let sumOfNumbers = lib.sumOfNumbers;
assert.equal(sumOfNumbers([1]),1);
assert.equal(sumOfNumbers([0,0,0]),0);
assert.equal(sumOfNumbers([1,2,3]),6);
assert.equal(sumOfNumbers([1,2,-3]),0);
assert.equal(sumOfNumbers([1,2,-2,1]),2);

let reverseElements = lib.reverseElements; 
assert.deepEqual(reverseElements([]),[]);
assert.deepEqual(reverseElements([1]),[1]);
assert.deepEqual(reverseElements([1,2,3]),[3,2,1]);
assert.deepEqual(reverseElements([-1,0,1]),[1,0,-1]);

let selectEach2ndElement = lib.selectEach2ndElement;
assert.deepEqual(selectEach2ndElement([]),[]);
assert.deepEqual(selectEach2ndElement([0,0,0,0,0]),[0,0,0]);
assert.deepEqual(selectEach2ndElement([1,2,3,4,5,6]),[1,3,5]);
assert.deepEqual(selectEach2ndElement([1,0,1,0,1,0]),[1,1,1]);

let reverseFibonacci = lib.reverseFibonacci;
assert.deepEqual(reverseFibonacci(),[]);
assert.deepEqual(reverseFibonacci(1),[0]);
assert.deepEqual(reverseFibonacci("a"),[]);
assert.deepEqual(reverseFibonacci(2),[1,0]);
assert.deepEqual(reverseFibonacci([3]),[1,1,0]);
assert.deepEqual(reverseFibonacci([8]),[13,8,5,3,2,1,1,0]);

let findGreatestNumber = lib.findGreatestNumber;
assert.equal(findGreatestNumber([0]),0);
assert.equal(findGreatestNumber([-2,-1]),-1);
assert.equal(findGreatestNumber([1,26,3,5]),26);
assert.equal(findGreatestNumber([0,-1,-2,-3]),0);

let findLowestNumber = lib.findLowestNumber;
assert.equal(findLowestNumber([1]),1);
assert.equal(findLowestNumber([1,26,3,5]),1);
assert.equal(findLowestNumber([1,-26,0,-4]),-26);
assert.equal(findLowestNumber([-1,-2,-3,-4,-6]),-6);

let calculateAverage = lib.calculateAverage;
assert.equal(calculateAverage([0]),0);
assert.equal(calculateAverage([1,2]),1.5);
assert.equal(calculateAverage([1,1,1,1,1]),1);
assert.equal(calculateAverage([1,26,3,4,1]),7);

let mapElementsLength = lib.mapElementsLength;
assert.deepEqual(mapElementsLength([]),[]);
assert.deepEqual(mapElementsLength(["mary",""]),[4,0]);
assert.deepEqual(mapElementsLength(["gaurav","is","a","good","boy"]),[6,2,1,4,3]);
assert.deepEqual(mapElementsLength(["mary","had","a","little","lamb"]),[4, 3, 1, 6, 4]);

let countOddNumbers = lib.countOddNumbers;
assert.equal(countOddNumbers([]),0);
assert.equal(countOddNumbers([1]),1);
assert.equal(countOddNumbers([1,26,3,4,1]),3);
assert.equal(countOddNumbers([-1,-26,3,4,-1]),3);

let countEvenNumbers = lib.countEvenNumbers;
assert.equal(countEvenNumbers([]),0);
assert.equal(countEvenNumbers([2]),1);
assert.equal(countEvenNumbers([1,26,3,4,1]),2);
assert.equal(countEvenNumbers([1,-26,3,-4,1,-0]),3);

let countNumbersAbove = lib.countNumbersAbove;
assert.equal(countNumbersAbove([],4),0);
assert.equal(countNumbersAbove([5],4),1);
assert.equal(countNumbersAbove([3,4,5,6,1],),0);
assert.equal(countNumbersAbove([3,4,5,6,1],),0);
assert.equal(countNumbersAbove([3,4,5,6,1],4),2);

let countNumbersBelow = lib.countNumbersBelow;
assert.equal(countNumbersBelow([],4),0);
assert.equal(countNumbersBelow([0],4),1);
assert.equal(countNumbersBelow([3,4,5,6,1],),0);
assert.equal(countNumbersBelow([3,4,5,6,1],4),2);

let reverseList = lib.reverseList;
assert.deepEqual(reverseList([]),[]);
assert.deepEqual(reverseList([1]),[1]);
assert.deepEqual(reverseList([1,1,1]),[1,1,1]);
assert.deepEqual(reverseList([1,2,3]),[3,2,1]);

let elementsPartition = lib.elementsPartition;
assert.deepEqual(elementsPartition([],5),[[],[]]);
assert.deepEqual(elementsPartition([1,2,3],),[[],[]]);
assert.deepEqual(elementsPartition([5,5,5,5],5),[[5,5,5,5],[]]);
assert.deepEqual(elementsPartition([1,2,3,4,5,6],3),[[1,2,3],[4,5,6]]);


console.log("\n----------congratulations test passed----------\n")
