/*
Introduction to closures and higher-order functions.
Closures are functions that have access to variables from another function's scope.
Higher-order functions are functions that take another function as an argument or return a function as a result.
*/

/** 
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

var helloWorld = createHelloWorld();
console.log(helloWorld()); // "Hello World"