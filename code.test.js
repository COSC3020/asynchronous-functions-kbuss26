// Adapted from Dynamic Euler exercise

// Requirements
const fs = require('fs');
const jsc = require('jsverify');
const async = require('async')
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

// Original function
function iterative_count(array, key) {
    if (array === undefined) return 0;
    let accum = 0;
    for (var i = 0; i < array.length; i++) {
        accum += (array[i] === key);
    }
    return accum;
}

// Tests
const countTest = jsc.forall("array nat", "nat", function(arr, n) {
    return (async_count(arr, n) === iterative_count(arr, n))
});

const guarTest = jsc.forall("array nat", function(arr) {
    let n = arr[Math.floor(Math.random() * arr.length)]
    return (async_count(arr, n) === iterative_count(arr, n))
});


// Asserts
jsc.assert(countTest);
jsc.assert(guarTest);