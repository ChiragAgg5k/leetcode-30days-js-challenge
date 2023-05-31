/*
Function composition is a concept in functional programming where the output of one function is used as the input of another function. 
In other words, it's the process of chaining two or more functions together so that the result of one function becomes the input to the next
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
	return function (x) {
		let res = x;
		let n = functions.length;
		for (let i = n - 1; i >= 0; i--) {
			res = functions[i](res);
		}
		return res;
	};
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9
