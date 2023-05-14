// Currying is a powerful technique in functional programming that transforms a function with multiple arguments into a sequence of functions. It allows you to create flexible and reusable code by enabling partial application of function arguments. In this article, we will discuss the concept and implementation of currying in JavaScript.

/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        // return a anonymous function which passes next args to curried
        return (...nextArgs) => curried(...args, ...nextArgs);
    };
};


function sum(a, b, c) { return a + b + c; }
const csum = curry(sum);
console.log(csum(1, 2, 3)) // 6
console.log(csum(1)(2, 3)) // 6
console.log(csum(1, 2)(3)) // 6
console.log(csum(1)(2)(3)) // 6
