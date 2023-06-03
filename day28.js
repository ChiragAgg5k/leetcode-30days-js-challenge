class EventEmitter {
	eventMap = {}; // event -> Set()

	subscribe(event, cb) {
		// cb -> callback
		if (event in this.eventMap === false) {
			this.eventMap[event] = new Set();
		}

		this.eventMap[event].add(cb);

		return {
			unsubscribe: () => {
				this.eventMap[event].delete(cb);
			}
		};
	}

	emit(event, args = []) {
		const res = [];

		if (this.eventMap[event] === undefined) {
			return res;
		}

		for (let cb of this.eventMap[event]) {
			res.push(cb(...args));
		}

		return res;
	}
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
	return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

emitter.emit("onClick"); // [99]
sub.unsubscribe(); // undefined
emitter.emit("onClick"); // []
