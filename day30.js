/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
	for (const e of arr) {
		if (Array.isArray(e)) {
			yield* inorderTraversal(e); // this will return a array of elements, *yield will only yield one element of it at a time
		} else {
			yield e;
		}
	}
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
