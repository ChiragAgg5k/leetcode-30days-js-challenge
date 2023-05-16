/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {

        return new Promise((resolve, reject) => {

            // set time out accepts a method, while reject returns a value.
            // so we create a anonymous function

            const id = setTimeout(() => reject("Time Limit Exceeded"), t); // here timer starts, if the code after this takes longer than t, we reject the promise
            fn(...args)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
                .finally(() => clearTimeout(id)); // if the promise is resolved or rejected before the timer expires, we clear the timer
        });

    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// console.log(limited(150).catch(console.log)); // "Time Limit Exceeded" at t=100ms, and a pending promise at t=150ms
console.log(limited(50).then(() => console.log("Done"))); // logs a pending promise, and then "Done" after 50ms
