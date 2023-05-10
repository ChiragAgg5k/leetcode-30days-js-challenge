/*
This question asks you to write a function that performs a reduction transformation based on the output of a callback function. Alongside map and filter, it is one of the most commonly used and important functions in JavaScript.
fn returns a value called "accumulator" 
Array.filter is a built-in function that takes a callback function and returns a new array with only the elements for which the callback function returned true.
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for(let i = 0; i<nums.length; i++){
        val = fn(val,nums[i]);
    }
    return val;
};

// Test cases
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // 10
console.log(reduce([1, 2, 3, 4], (a, b) => a * b, 1)); // 24

// Notice we used anonymous function, or lambda function, in the test cases.