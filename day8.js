/*
Question: Write a function that accepts another function as it's argument and only allows it to be called once. If the function is called more than once, it should return undefined.
Simple solution : add a flag to check if the function has been called before or not.
We encapsulate the flag in a closure so that it is not accessible from outside.
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
	let allowOnce = true;
	return function (...args) {
		if (allowOnce) {
			allowOnce = false;
			return fn(...args);
		}
	};
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
