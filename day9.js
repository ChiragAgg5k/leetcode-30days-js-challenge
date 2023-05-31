/*
Memoization is a type of optimization technique where we store the results of expensive function calls and return the cached result when the same inputs occur again.

Question: Write a function memoize that takes a function as input and returns a memoized function.
Solution: create a map called "cache" to store the results of the function calls. If the same input occurs again, return the cached result.
*/

/**
 * @param {Function} fn
 */
function memoize(fn) {
	let cache = new Map();
	return function (...args) {
		const key = JSON.stringify(args); // convert the arguments to a string to use as a key
		if (cache.has(key)) {
			return cache.get(key);
		}
		const result = fn(...args);
		cache.set(key, result);
		return result;
	};
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
	callCount += 1;
	return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
