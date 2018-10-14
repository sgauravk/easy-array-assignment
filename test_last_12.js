lib = require("./array_operations_last_12.js");
assert = require("assert");

let firstOccaranceOfNo = lib.firstOccaranceOfNo;
let isListAscending = lib.isListAscending;
let isListDecending = lib.isListDecending;
let ExtractDigitInArray = lib.ExtractDigitInArray;
let uniqueArray = lib.uniqueArray;
let unianList = lib.unianList;
let intersactionList = lib.intersactionList;

assert.equal(firstOccaranceOfNo([1,2,3,2,3],3),2);
assert.equal(isListAscending([1,2,3,4,0]),false);
assert.equal(isListDecending([5,4,4,1,1,0,0]),true);
assert.deepEqual(ExtractDigitInArray(123),[1,2,3]);
assert.deepEqual(uniqueArray([1,2,2,3,2]),[1,2,3]);
assert.deepEqual(unianList([1,2,3],[3,4]),[1,2,3,4]);
assert.deepEqual(intersactionList([1,2,3],[3,4]),[3]);
