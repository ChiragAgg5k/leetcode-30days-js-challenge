/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {

    const res = [];
    const n = arr.length;

    for (let i = 0; i < n; i += size) {
        res.push(arr.slice(i, i + size));
    }

    return res;

};

// slice is same as split in python
// what does slice do? it returns a new array, it doesnt modify the original array
// slice(start,end) end is exclusive, and end can be more than length of array (javascript things)

// tests

console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1,2,3],[4,5]]