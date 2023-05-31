/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
	// null
	if (o1 === null || o2 === null) {
		return o1 === o2;
	}

	// types not same
	if (typeof o1 !== typeof o2) {
		return false;
	}

	// primitive
	if (typeof o1 !== "object") {
		return o1 === o2;
	}

	// array
	if (Array.isArray(o1) || Array.isArray(o2)) {
		// using String() to compare arrays
		// eg. a = [undefined] , b = {'a':1}, on looping with === will return true.
		// typeof both is object, but string of array will be different from string of object
		if (String(o1) !== String(o2)) {
			return false;
		}

		// now we confirm that both are arrays

		for (let i = 0; i < o1.length; i++) {
			if (!areDeeplyEqual(o1[i], o2[i])) {
				return false;
			}
		}
	} else {
		// object

		// number of keys not same
		if (Object.keys(o1).length !== Object.keys(o2).length) {
			return false;
		}

		// no need to check if keys are same or not
		for (const key in o1) {
			if (!areDeeplyEqual(o1[key], o2[key])) {
				return false;
			}
		}
	}

	return true;
};

// There are 4 cases to consider:
// 1. either o1 or o2 is null or undefined. so we can return o1 === o2
// 2. either o1 or o2 is primitive. so we can return o1 === o2
// 3. either o1 or o2 is an array. here:
//      a. if length of both arrays is not same, return false
//      b. if length of both arrays is same, then we need to check if all the elements are same or not. for this we can use recursion (since the elements can be of any type)
// 4. either o1 or o2 is an object. here:
//      a. if number of keys in both objects is not same, return false
//      b. if number of keys in both objects is same, then we need to check if all the keys are same or not. for this we can use recursion (since the keys can be of any type)
//      ? why are we not checking if keys are same? because if keys are different, one of the objects will return undefined for that key and other will return some value. so the recursion will return false.
