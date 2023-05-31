/*
This question indroduces callbacks.
Callbacks are functions that are passed as arguments to other functions.
They allow you to reuse code without having to rewrite the same function over and over again.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = fn(arr[i], i);
	}
	return arr;
};

function addOne(num) {
	return num + 1;
}

const x = [0, 1, 2, 3, 4];
console.log(map(x, addOne)); // [1,2,3,4,5]
