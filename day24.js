/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */

// What is Prototype?
// Every object in JavaScript has a prototype. The prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.

var checkIfInstanceOf = function (obj, classFunction) {
	if (
		obj === null ||
		obj === undefined ||
		typeof classFunction !== "function"
	)
		return false;

	// For objects, prototype attribute is hidden, so we need to use Object.getPrototypeOf
	// Whereas for functions, prototype attribute is visible
	let currentPrototype = Object.getPrototypeOf(obj);
	while (currentPrototype != null) {
		if (currentPrototype === classFunction.prototype) {
			return true;
		}
		currentPrototype = Object.getPrototypeOf(currentPrototype); // in case of inheritance
	}

	return false;
};

// Test cases
console.log(checkIfInstanceOf({}, Object)); // true
console.log(checkIfInstanceOf([], Object)); // true (because Array is a child of Object)
console.log(checkIfInstanceOf([], Array)); // true
console.log(checkIfInstanceOf([], Function)); // false
