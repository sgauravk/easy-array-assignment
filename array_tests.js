const lib = require("./array_operations.js");
const assert = require("assert");

let evenNumbers = lib.selectEven;
let oddNumbers = lib.selectOdd;
let sumOfArrayElement = lib.sumOfArrayElement;
let reverseList = lib.reverseList; 
let selectingEvery2ndNo = lib.selectingEvery2ndNo;
let gretestNoInList = lib.gretestNoInList;
let lowestNoInList = lib.lowestNoInList;
let averageOfList = lib.averageOfList;
let mappingLength = lib.mappingLength;
let countOdd = lib.countOdd;
let countEven = lib.countEven;
let countNoAbove = lib.countNoAbove;
let countNoBelow = lib.countNoBelow;
let revOfArrayElement = lib.revOfArrayElement;
let firstOccaranceOfNo = lib.firstOccaranceOfNo;
let isListAscending = lib.isListAscending;
let isListDecending = lib.isListDecending;
let ExtractDigitInArray = lib.ExtractDigitInArray;
let uniqueArray = lib.uniqueArray;
let unianList = lib.unianList;
let intersactionList = lib.intersactionList;
let differanceBwArray = lib.differanceBwArray;
let isProperSubset = lib.isProperSubset;
let createZipArray = lib.createZipArray;
let rotateList = lib.rotateList;
let doPartitian = lib.doPartitian;
let reverseFibonacciList = lib.reverseFibonacciList;


assert.equal(firstOccaranceOfNo([1,2,3,2,3],3),2);
assert.equal(firstOccaranceOfNo([1,1,1,1,1,1],1),0);
assert.equal(firstOccaranceOfNo([1,1,1,1,1,1],2),undefined);
assert.equal(firstOccaranceOfNo([],),undefined);

assert.equal(isListAscending([1,2,3,4,0]),false);
assert.equal(isListAscending([,1,2,-3,4,0]),false);
assert.equal(isListAscending([]),true);

assert.equal(isListDecending([5,4,4,1,1,0,0]),true);
assert.equal(isListDecending([]),true);
assert.equal(isListDecending(["a","b"]),false);

assert.deepEqual(ExtractDigitInArray(123),[1,2,3]);
assert.deepEqual(ExtractDigitInArray(0),[0]);
assert.deepEqual(ExtractDigitInArray(""),[]);
assert.deepEqual(ExtractDigitInArray(-2),["-","2"]);

assert.deepEqual(uniqueArray([1,2,2,3,2]),[1,2,3]);
assert.deepEqual(uniqueArray([2,2,2,2,2,2,2]),[2]);
assert.deepEqual(uniqueArray([]),[undefined]);
assert.deepEqual(uniqueArray(["a","j","a"]),["a","j"]);

assert.deepEqual(unianList([1,2,3],[3,4]),[1,2,3,4]);
assert.deepEqual(unianList([1,2,3,3,4],[3,4]),[1,2,3,3,4]);
assert.deepEqual(unianList([],[]),[]);
assert.deepEqual(unianList([0,0,0,0],[0,0]),[0,0,0,0]);

assert.deepEqual(intersactionList([1,2,3],[3,4]),[3]);
assert.deepEqual(intersactionList([],[]),[]);
assert.deepEqual(intersactionList([],[1,2]),[]);
assert.deepEqual(intersactionList([-1,-2,3],[3,2,1]),[3]);
assert.deepEqual(intersactionList([-2],[2]),[]);

assert.deepEqual(differanceBwArray([1,2,2,7],[0,3,3,7]),[1,2,2]);
assert.deepEqual(differanceBwArray([1,2,2,7],[0,3,3,7]),[1,2,2]);
assert.deepEqual(differanceBwArray([1,2,2,7],[0,3,3,7]),[1,2,2]);
assert.deepEqual(differanceBwArray([1,2,2,7],[0,3,3,7]),[1,2,2]);

assert.equal(isProperSubset([1,2,3,2,4],[2,4]),true);
assert.equal(isProperSubset([1,2,3,2,4],[2,4]),true);
assert.equal(isProperSubset([1,2,3,2,4],[2,4]),true);
assert.equal(isProperSubset([1,2,3,2,4],[2,4]),true);

assert.deepEqual(createZipArray([1,2,3],[3,2]),[[1,3],[2,2]]);
assert.deepEqual(createZipArray([2,4],[1]),[[2,1]]);
assert.deepEqual(createZipArray([1,2,3,,],[3,2]),[[1,3],[2,2]]);
assert.deepEqual(createZipArray([1,2,3],[3,,,]),[[1,3]]);

assert.deepEqual(rotateList([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotateList([1,2,3,4,5],1),[2,3,4,5,1]);
assert.deepEqual(rotateList([1,2,3,4,5],5),[1,2,3,4,5]);
assert.deepEqual(rotateList([-10,-2,-13,4,5],3),[4,5,-10,-2,-13]);
assert.deepEqual(rotateList([],),[]);
assert.deepEqual(rotateList([],1),[]);
assert.deepEqual(rotateList([1,2,3,4,5],0),[1,2,3,4,5]);

assert.deepEqual(evenNumbers([-2,-3,-4,5]),[-2,-4]);
assert.deepEqual(evenNumbers([]),[]);
assert.deepEqual(evenNumbers([-2,0,2]),[-2,0,2]);
assert.deepEqual(evenNumbers([-3,-1,1]),[]);
assert.deepEqual(evenNumbers(["a"]),[]);

assert.deepEqual(oddNumbers([1,3,5,7]),[1,3,5,7]);
assert.deepEqual(oddNumbers([2,4,6,8]),[]);
assert.deepEqual(oddNumbers(["a"]),[]);
assert.deepEqual(oddNumbers([,,,]),[]);
assert.deepEqual(oddNumbers([-3,-2,-1,0]),[-3,-1]);

assert.equal(sumOfArrayElement([1,2,3]),6);
assert.equal(sumOfArrayElement([]),0);
assert.equal(sumOfArrayElement([1,2,-2,1]),2);
assert.equal(sumOfArrayElement([0,0,0]),0);
assert.equal(sumOfArrayElement([1,2,-3]),0);

assert.deepEqual(reverseList([1,2,3]),[3,2,1]);
assert.deepEqual(reverseList([]),[]);
assert.deepEqual(reverseList([1]),[1]);
assert.deepEqual(reverseList([-1,0,1]),[1,0,-1]);

assert.deepEqual(selectingEvery2ndNo([1,2,3,4,5,6]),[1,3,5]);
assert.deepEqual(selectingEvery2ndNo([1,0,1,0,1,0]),[1,1,1]);
assert.deepEqual(selectingEvery2ndNo([]),[]);
assert.deepEqual(selectingEvery2ndNo([0,0,0,0,0]),[0,0,0]);

assert.deepEqual(reverseFibonacciList(2),[1,0]);
assert.deepEqual(reverseFibonacciList([3]),[1,1,0]);
assert.deepEqual(reverseFibonacciList([8]),[13,8,5,3,2,1,1,0]);

assert.equal(gretestNoInList([1,26,3,5]),26);
assert.equal(gretestNoInList([]),undefined);
assert.equal(gretestNoInList([0,-1,-2,-3]),0);
assert.equal(gretestNoInList([0]),0);

assert.equal(lowestNoInList([1,26,3,5]),1);
assert.equal(lowestNoInList([]),undefined);
assert.equal(lowestNoInList([1,-26,0,-4]),-26);

assert.equal(averageOfList([1,26,3,4,1]),7);
assert.equal(averageOfList([1,1,1,1,1]),1);
assert.equal(averageOfList([1,2]),1.5);
assert.equal(averageOfList([0]),0);

assert.deepEqual(mappingLength(["mary","had","a","little","lamb"]),[4, 3, 1, 6, 4]);
assert.deepEqual(mappingLength(["gaurav","is","a","good","boy"]),[6,2,1,4,3]);
assert.deepEqual(mappingLength(["mary",""]),[4,0]);
assert.deepEqual(mappingLength([]),[]);

assert.equal(countOdd([1,26,3,4,1]),3);
assert.equal(countOdd([]),0);
assert.equal(countOdd([-1,-26,3,4,-1]),3);

assert.equal(countEven([1,26,3,4,1]),2);
assert.equal(countEven([]),0);
assert.equal(countEven([1,-26,3,-4,1,-0]),3);

assert.equal(countNoAbove([3,4,5,6,1],4),2);
assert.equal(countNoAbove([],4),0);
assert.equal(countNoAbove([3,4,5,6,1],),0);

assert.equal(countNoBelow([3,4,5,6,1],4),2);
assert.equal(countNoBelow([],4),0);
assert.equal(countNoBelow([3,4,5,6,1],),0);
assert.equal(countNoBelow([0],4),1);

assert.deepEqual(revOfArrayElement([1,2,3]),[3,2,1]);
assert.deepEqual(revOfArrayElement([]),[]);
assert.deepEqual(revOfArrayElement([1]),[1]);
assert.deepEqual(revOfArrayElement([1,1,1]),[1,1,1]);

assert.deepEqual(doPartitian([1,2,3,4,5,6],3),[[1,2,3],[4,5,6]]);
assert.deepEqual(doPartitian([],5),[[],[]]);
assert.deepEqual(doPartitian([1,2,3],),[[],[]]);
assert.deepEqual(doPartitian([5,5,5,5],5),[[5,5,5,5],[]]);
