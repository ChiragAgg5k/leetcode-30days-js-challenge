/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */

// we are defining callPolyfill on Function which is parent of all functions
// therefore it can be called on ANY function

Function.prototype.callPolyfill = function (context, ...args) {
	return this.apply(context, args);
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
