const lib = require("./array_operations_first_15.js");
const assert = require("assert");

let evenNumbers = lib.selectEven;
let oddNumbers = lib.selectOdd;
let sumOfArrayElement = lib.sumOfArrayElement;
let reverseList = lib.reverseList; 
let salectingEach2No = lib.salectingEach2No;
let gretestNoInList = lib.gretestNoInList;
let lowestNoInList = lib.lowestNoInList;
let averageOfList = lib.averageOfList;
let mappingLength = lib.mappingLength;
let countOdd = lib.countOdd;
let countEven = lib.countEven;
let countNoAbove = lib.countNoAbove;
let countNoBelow = lib.countNoBelow;
let revOfArrayElement = lib.revOfArrayElement;

assert.deepEqual(evenNumbers([2,3,4,5]),[2,4]);
assert.deepEqual(evenNumbers([]),[]);
assert.deepEqual(evenNumbers([-2,0,2]),[-2,0,2]);
assert.deepEqual(evenNumbers([-3,-1,1]),[]);

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

assert.deepEqual(salectingEach2No([1,2,3,4,5,6]),[1,3,5]);
assert.deepEqual(salectingEach2No([1,0,1,0,1,0]),[1,1,1]);
assert.deepEqual(salectingEach2No([]),[]);
assert.deepEqual(salectingEach2No([0,0,0,0,0]),[0,0,0]);

assert.equal(gretestNoInList([1,26,3,5]),26);
assert.equal(gretestNoInList([]),undefined);
assert.equal(gretestNoInList([0,-1,-2,-3]),0);

assert.equal(lowestNoInList([1,26,3,5]),1);
assert.equal(lowestNoInList([]),undefined);
assert.equal(lowestNoInList([1,-26,0,-4]),-26);

assert.equal(averageOfList([1,26,3,4,1]),7);
assert.equal(averageOfList([1,1,1,1,1]),1);
assert.equal(averageOfList([1,2]),1.5);
assert.equal(averageOfList([0]),0);

assert.deepEqual(mappingLength(["mary","had","a","little","lamb"]),[4, 3, 1, 6, 4]);
assert.deepEqual(mappingLength(["gaurav","is","a","good","boy"]),[6,2,1,4,3]);
assert.deepEqual(mappingLength(["mary"]),[4]);
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
