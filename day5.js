/*
In this question we are given a function called filter, which returns a boolean.
We need to reduce the array accordingly.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) {
			res.push(arr[i]);
		}
	}
	return res;
};

function isEven(num) {
	return num % 2 === 0;
}

const x = [0, 1, 2, 3, 4];
console.log(filter(x, isEven)); // [0,2,4]
