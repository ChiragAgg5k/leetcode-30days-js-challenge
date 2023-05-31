/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
	return new Promise((resolve, reject) => {
		let i = 0;
		let inProgress = 0;

		function callback() {
			if (i === functions.length) {
				resolve();
			}

			while (i < functions.length && i < n) {
				functions[i++]().then(callback());
				inProgress++;
			}

			inProgress--;
			if (i < functions.length && inProgress === 0) {
				functions[i++]().then(callback());
				inProgress++;
			} else if (inProgress === 0) {
				resolve();
			}
		}
	});
};

const sleep = (t) => new Promise((res) => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1).then(console.log); // After 900ms
