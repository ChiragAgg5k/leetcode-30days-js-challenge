/*
Introduction to asynchronous programming
Promises - a way to handle asynchronous operations. All asynchronous operations will return a promise object.
states of a promise: pending, resolved, rejected    

function callback(resolve, reject) {
    do network request or any other operations that take time

    eg.
    setTimeout(() => {
        resolve('success');
    }, 2000);
}

const promise = new Promise(callback);
promise.then((result) => {
    now we can use the result
    console.log(result);
}).catch((error) => {
    console.log(error);
});
*/

/**
 * @param {number} millis
 */
async function sleep(millis) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, millis);
	});
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
