/**
 * @return {Generator<number>}
 */

// function* denotes its a generator
var fibGenerator = function* () {
	let a = 0,
		b = 1;

	while (true) {
		yield a; // function pauses here until next is called
		[a, b] = [b, a + b]; // similar to python
	}
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
