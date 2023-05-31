/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(o1, o2) {

    // if both is primitive and diff, then diff
    // if one is obj and other isnt, then diff
    // if one is array, other is obj, then diff
    // if both are arr or obj, then recursion

    // both are primitive
    if (!isObject(o1) && !isObject(o2)) {
        return o1 === o2 ? {} : [o1, o2];
    }

    // one is primitive
    if (!isObject(o1) || !isObject(o2)) {
        return [o1, o2];
    }

    // one is arr, one is obj
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return [o1, o2];
    }

    const diff = {};

    for (const key in o1) {
        if (key in o2) {
            const res = objDiff(o1[key], o2[key]);
            if (Object.keys(res).length > 0) { // works for arrays too
                diff[key] = res;
            }
        }
    }

    return diff;

    function isObject(obj) {
        return (typeof (obj) === 'object' && obj !== null);
    }

};

// tests

const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            g: 5,
            h: 6
        }
    }
};

const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            g: 5,
            h: 7 // <-- diff
        }
    }
};

const res = objDiff(obj1, obj2);
for (const key in res) {
    console.log(key, res[key]); // c { f: { h: [6, 7] } }
}