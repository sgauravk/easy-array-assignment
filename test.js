const lib = require("./array_operations.js");
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

assert.deepEqual(evenNumbers([2]),[2]);
assert.deepEqual(oddNumbers([1]),[1]);
assert.deepEqual(oddNumbers([1,2,3,4]),[1,3]);
assert.equal(sumOfArrayElement([1,2,3]),6);
assert.deepEqual(reverseList([1,2,3]),[3,2,1]);
assert.deepEqual(salectingEach2No([1,2,3,4,5,6]),[1,3,5]);
assert.equal(gretestNoInList([1,26,3,5]),26);
assert.equal(lowestNoInList([1,26,3,5]),1);
assert.equal(averageOfList([1,26,3,4,1]),7);
assert.deepEqual(mappingLength(["mary","had","a","little","lamb"]),[4, 3, 1, 6, 4]);
