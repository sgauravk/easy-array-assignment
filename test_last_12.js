lib = require("./array_operations_last_12.js");
assert = require("assert");

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
