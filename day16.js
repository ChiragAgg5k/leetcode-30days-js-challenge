/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
	// Throttled state - when the current function is in setTimeout.
	let isThrottled = false;

	// undefined when there is no scheduled call.
	let nextArgs;

	return function (...args) {
		if (isThrottled) {
			// function is already in throttle and more calls are scheduled.
			nextArgs = args;
		} else {
			fn(...args);
			isThrottled = true;

			// no more calls are scheduled. handling unscheduled cases.
			setTimeout(recursiveCalling, t);
		}

		function recursiveCalling() {
			if (nextArgs) {
				fn(...nextArgs);
				isThottled = true;
				nextArgs = null;
				setTimeout(recursiveCalling, t);
			} else {
				isThrottled = false;
			}
		}
	};
};

// Unlike debounce, throttle will execute the function at least once in the given time interval.

const throttled = throttle(console.log, 100);
throttled("log"); // logged immediately.
throttled("log"); // logged at t=100ms.
