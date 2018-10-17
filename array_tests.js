const lib = require("./array_functions_library.js");
const assert = require("assert");

let unionList = lib.unionList;
let selectOdd = lib.selectOdd;
let selectEven = lib.selectEven;
let rotateList = lib.rotateList;
let doPartitian = lib.doPartitian;
let reverseList = lib.reverseList; 
let uniqueArray = lib.uniqueArray;
let averageOfList = lib.averageOfList;
let mappingLength = lib.mappingLength;
let isProperSubset = lib.isProperSubset;
let createZipArray = lib.createZipArray;
let isListAscending = lib.isListAscending;
let isListDescending = lib.isListDescending;
let countNumberAbove = lib.countNumberAbove;
let countNumberBelow = lib.countNumberBelow;
let intersectionList = lib.intersectionList;
let sumOfArrayElements = lib.sumOfArrayElements;
let lowestNumberInList = lib.lowestNumberInList;
let countOddNumberbers = lib.countOddNumberbers;
let countEvenNumberbers = lib.countEvenNumberbers;
let reverseFibonacciList = lib.reverseFibonacciList;
let selectEvery2ndNumber = lib.selectEvery2ndNumber;
let greatestNumberInList = lib.greatestNumberInList;
let reverseOfArrayElements = lib.reverseOfArrayElements;
let firstOccuranceOfNumber = lib.firstOccuranceOfNumber;
let differenceBetweenArray = lib.differenceBetweenArray;
let extractNumberbersInArray = lib.extractNumberbersInArray;


assert.equal(firstOccuranceOfNumber([],),undefined);
assert.equal(firstOccuranceOfNumber([1,2,3,2,3],3),2);
assert.equal(firstOccuranceOfNumber([1,1,1,1,1,1],1),0);
assert.equal(firstOccuranceOfNumber([1,1,1,1,1,1],2),undefined);

assert.equal(isListAscending([]),true);
assert.equal(isListAscending([1,2,3,4,0]),false);
assert.equal(isListAscending([,1,2,-3,4,0]),false);

assert.equal(isListDescending([]),true);
assert.equal(isListDescending(["a","b"]),false);
assert.equal(isListDescending([5,4,4,1,1,0,0]),true);

assert.deepEqual(extractNumberbersInArray(0),[0]);
assert.deepEqual(extractNumberbersInArray(""),[]);
assert.deepEqual(extractNumberbersInArray(123),[1,2,3]);
assert.deepEqual(extractNumberbersInArray(-2),["-","2"]);

assert.deepEqual(uniqueArray([]),[undefined]);
assert.deepEqual(uniqueArray([1,2,2,3,2]),[1,2,3]);
assert.deepEqual(uniqueArray([2,2,2,2,2,2,2]),[2]);
assert.deepEqual(uniqueArray(["a","j","a"]),["a","j"]);

assert.deepEqual(unionList([],[]),[]);
assert.deepEqual(unionList([1,2,3],[3,4]),[1,2,3,4]);
assert.deepEqual(unionList([0,0,0,0],[0,0]),[0,0,0,0]);
assert.deepEqual(unionList([1,2,3,3,4],[3,4]),[1,2,3,3,4]);

assert.deepEqual(intersectionList([],[]),[]);
assert.deepEqual(intersectionList([],[1,2]),[]);
assert.deepEqual(intersectionList([-2],[2]),[]);
assert.deepEqual(intersectionList([1,2,3],[3,4]),[3]);
assert.deepEqual(intersectionList([-1,-2,3],[3,2,1]),[3]);

assert.deepEqual(differenceBetweenArray([],[]),[]);
assert.deepEqual(differenceBetweenArray([1,2,2,7],[1,2,2,7]),[]);
assert.deepEqual(differenceBetweenArray([1,0,2,4,0],[0,1,2,4]),[]);
assert.deepEqual(differenceBetweenArray([1,2,2,7],[0,3,3,7]),[1,2,2]);

assert.equal(isProperSubset([1],[1,]),true);
assert.equal(isProperSubset([],[2,4]),false);
assert.equal(isProperSubset([1,2,3,2,4],[]),true);
assert.equal(isProperSubset([1,2,3,2,4],[2,4]),true);

assert.deepEqual(createZipArray([2,4],[1]),[[2,1]]);
assert.deepEqual(createZipArray([1,2,3],[3,,,]),[[1,3]]);
assert.deepEqual(createZipArray([1,2,3],[3,2]),[[1,3],[2,2]]);
assert.deepEqual(createZipArray([1,2,3,,],[3,2]),[[1,3],[2,2]]);

assert.deepEqual(rotateList([],),[]);
assert.deepEqual(rotateList([],1),[]);
assert.deepEqual(rotateList([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotateList([1,2,3,4,5],1),[2,3,4,5,1]);
assert.deepEqual(rotateList([1,2,3,4,5],5),[1,2,3,4,5]);
assert.deepEqual(rotateList([1,2,3,4,5],0),[1,2,3,4,5]);
assert.deepEqual(rotateList([-10,-2,-13,4,5],3),[4,5,-10,-2,-13]);

assert.deepEqual(selectEven([]),[]);
assert.deepEqual(selectEven(["a"]),[]);
assert.deepEqual(selectEven([-3,-1,1]),[]);
assert.deepEqual(selectEven([-2,0,2]),[-2,0,2]);
assert.deepEqual(selectEven([-2,-3,-4,5]),[-2,-4]);

assert.deepEqual(selectOdd(["a"]),[]);
assert.deepEqual(selectOdd([,,,]),[]);
assert.deepEqual(selectOdd([2,4,6,8]),[]);
assert.deepEqual(selectOdd([1,3,5,7]),[1,3,5,7]);
assert.deepEqual(selectOdd([-3,-2,-1,0]),[-3,-1]);

assert.equal(sumOfArrayElements([]),0);
assert.equal(sumOfArrayElements([0,0,0]),0);
assert.equal(sumOfArrayElements([1,2,3]),6);
assert.equal(sumOfArrayElements([1,2,-3]),0);
assert.equal(sumOfArrayElements([1,2,-2,1]),2);

assert.deepEqual(reverseList([]),[]);
assert.deepEqual(reverseList([1]),[1]);
assert.deepEqual(reverseList([1,2,3]),[3,2,1]);
assert.deepEqual(reverseList([-1,0,1]),[1,0,-1]);

assert.deepEqual(selectEvery2ndNumber([]),[]);
assert.deepEqual(selectEvery2ndNumber([0,0,0,0,0]),[0,0,0]);
assert.deepEqual(selectEvery2ndNumber([1,2,3,4,5,6]),[1,3,5]);
assert.deepEqual(selectEvery2ndNumber([1,0,1,0,1,0]),[1,1,1]);

assert.deepEqual(reverseFibonacciList(),[]);
assert.deepEqual(reverseFibonacciList(1),[0]);
assert.deepEqual(reverseFibonacciList("a"),[]);
assert.deepEqual(reverseFibonacciList(2),[1,0]);
assert.deepEqual(reverseFibonacciList([3]),[1,1,0]);
assert.deepEqual(reverseFibonacciList([8]),[13,8,5,3,2,1,1,0]);

assert.equal(greatestNumberInList([0]),0);
assert.equal(greatestNumberInList([]),undefined);
assert.equal(greatestNumberInList([1,26,3,5]),26);
assert.equal(greatestNumberInList([0,-1,-2,-3]),0);

assert.equal(lowestNumberInList([]),undefined);
assert.equal(lowestNumberInList([1,26,3,5]),1);
assert.equal(lowestNumberInList([1,-26,0,-4]),-26);

assert.equal(averageOfList([0]),0);
assert.equal(averageOfList([1,2]),1.5);
assert.equal(averageOfList([1,1,1,1,1]),1);
assert.equal(averageOfList([1,26,3,4,1]),7);

assert.deepEqual(mappingLength([]),[]);
assert.deepEqual(mappingLength(["mary",""]),[4,0]);
assert.deepEqual(mappingLength(["gaurav","is","a","good","boy"]),[6,2,1,4,3]);
assert.deepEqual(mappingLength(["mary","had","a","little","lamb"]),[4, 3, 1, 6, 4]);

assert.equal(countOddNumberbers([]),0);
assert.equal(countOddNumberbers([1,26,3,4,1]),3);
assert.equal(countOddNumberbers([-1,-26,3,4,-1]),3);

assert.equal(countEvenNumberbers([]),0);
assert.equal(countEvenNumberbers([1,26,3,4,1]),2);
assert.equal(countEvenNumberbers([1,-26,3,-4,1,-0]),3);

assert.equal(countNumberAbove([],4),0);
assert.equal(countNumberAbove([3,4,5,6,1],),0);
assert.equal(countNumberAbove([3,4,5,6,1],),0);
assert.equal(countNumberAbove([3,4,5,6,1],4),2);

assert.equal(countNumberBelow([],4),0);
assert.equal(countNumberBelow([0],4),1);
assert.equal(countNumberBelow([3,4,5,6,1],),0);
assert.equal(countNumberBelow([3,4,5,6,1],4),2);

assert.deepEqual(reverseOfArrayElements([]),[]);
assert.deepEqual(reverseOfArrayElements([1]),[1]);
assert.deepEqual(reverseOfArrayElements([1,1,1]),[1,1,1]);
assert.deepEqual(reverseOfArrayElements([1,2,3]),[3,2,1]);

assert.deepEqual(doPartitian([],5),[[],[]]);
assert.deepEqual(doPartitian([1,2,3],),[[],[]]);
assert.deepEqual(doPartitian([5,5,5,5],5),[[5,5,5,5],[]]);
assert.deepEqual(doPartitian([1,2,3,4,5,6],3),[[1,2,3],[4,5,6]]);
