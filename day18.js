/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {

    if (object === null || object === undefined) {
        return String(object);
    }

    // Arrays
    if (Array.isArray(object)) {
        let res = "[";
        for (let i = 0; i < object.length; i++) {
            res += jsonStringify(object[i]) + ",";
        }

        if (object.length !== 0) { // in case of empty array, no need to remove last ","
            res = res.slice(0, -1); // removing last ","
        }

        res += "]";
        return res
    }

    // Objects
    if (typeof object === 'object') {
        let res = "{";
        for (let key in object) {
            res += jsonStringify(key) + ":" + jsonStringify(object[key]) + ",";
        }

        if (Object.keys(object).length !== 0) { // in case of empty object, no need to remove last ","
            res = res.slice(0, -1); // removing last ","
        }

        res += "}";
        return res;
    }

    // Strings
    if (typeof object === 'string') {
        return `"${String(object)}"`;
    }

    return String(object); // booleans or numbers

};

// Pretty easy and straightforward solution. I think the only tricky part is to remember to use recursion for nested objects and arrays.
// Note it can also be done using .map() and .join() methods, but I think this solution is more readable.

// Tests

console.log(jsonStringify({ x: 5, y: 6 })); // "{"x":5,"y":6}"
console.log(jsonStringify([new Number(3), new String('false'), new Boolean(false)])); // "[3,"false",false]"
console.log(jsonStringify({ x: [10, undefined, function () { }, Symbol('')] })); // "{"x":[10,null,null,null]}"
console.log(jsonStringify({ x: undefined, y: Object(Symbol('')) })); // "{"y":{}}"