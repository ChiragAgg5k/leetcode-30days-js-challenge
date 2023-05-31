/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
	let id;
	return function (...args) {
		clearTimeout(id); // we can pass undefined here with no error
		id = setTimeout(() => {
			fn(...args);
		}, t);
	};
};

// Here the solution is very simple such that we clear all the timeout ids, but in actual scenario only those will be cleared whose setTimeout is not executed yet.
// Clearning ids of those setTimeouts which are already executed will not have any effect.

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelledlog('Hello'); // Logged at t=100ms
