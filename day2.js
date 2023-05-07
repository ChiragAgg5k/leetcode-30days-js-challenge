/*
Still covering closers and scope
Lexical environment is where the function has access to variables from another function's scope (outer scope).
Here the function returned has access to the variable n from the outer scope.
*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

counter = createCounter(10) // Initialize counter to 10
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12