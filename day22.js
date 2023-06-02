/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
	const res = [];

	function helper(arr, depth) {
		for (const val of arr) {
			if (Array.isArray(val) && depth < n) {
				helper(val, depth + 1);
			} else {
				res.push(val);
			}
		}

		return res;
	}

	return helper(arr, 0);
};

// Tests

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(flat(arr, 1)); // [1, 2, 3, 4, [5, 6]]
console.log(flat(arr, 2)); // [1, 2, 3, 4, 5, 6]
