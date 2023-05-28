/**
* @param {Array} arr
* @return {Matrix}
*/
var jsonToMatrix = function (arr) {

    const keySet = new Set();
    // getKeys(arr,"") we cant directly do this as that will add 0.a, 0.b etc.

    // why of? becuz in iterates keys, while of iterates values, and arrays are just objects
    for (const obj of arr) {
        getKeys(obj, "");
    }

    const keys = Array.from(keySet).sort();
    const res = [keys]; // first row is keys

    console.log(keys);

    for (const obj of arr) {
        const keysToVal = {} // each row's key will map to one UNIQUE val
        getValues(obj, "", keysToVal);
        let row = []
        for (const key of keys) {
            if (key in keysToVal) {
                row.push(keysToVal[key]);
            } else {
                row.push("");
            }
        }
        res.push(row);
    }


    function getKeys(obj, path) {

        // works even if obj is array
        for (const key in obj) {

            // if path="", then no need for "."
            const newPath = path ? `${path}.${key}` : key;

            // is object
            if (isObject(obj[key])) {

                getKeys(obj[key], newPath);

            } else { // not an object, therefore no more keys
                keySet.add(newPath);
            }
        }
    }

    function getValues(obj, path, keyToVal) {
        for (const key in obj) {
            const newPath = path ? `${path}.${key}` : key;
            if (isObject(obj[key])) {
                getValues(obj[key], newPath, keyToVal);
            } else {
                // newPath is the key for this row, , obj[key] is the value
                keyToVal[newPath] = obj[key];
            }
        }
    }

    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    return res;

};

// test

const arr = [
    { "a": 1, "b": { "c": 3, "d": 4 } },
    { "a": 2, "b": { "c": 5, "d": 6 } },
    { "a": 3, "b": { "c": 7, "d": 8 } },
    { "a": 4, "b": { "c": 9, "d": 10 } }
];

console.log(jsonToMatrix(arr));

// output
// [
//     ["a", "b.c", "b.d"],
//     [1, 3, 4],
//     [2, 5, 6],
//     [3, 7, 8],
//     [4, 9, 10]
// ]