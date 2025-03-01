/*
Implement a function deepMap(value, fn) to return a new value containing the results of calling a provided function on
every non-Array and non-Object element in the value input, including elements within nested Arrays and Objects.
The function fn is called with a single argument, the element that is being mapped/transformed.
const double = (x) => x * 2;
deepMap(2, double); // 4
deepMap([1, 2, 3], double); // [4, 5, 6]
deepMap({ a: 1, b: 2, c: 3 }, double); // { a: 2, b: 4, c: 6 }
deepMap(
  {
    foo: 1,
    bar: [2, 3, 4],
    qux: { a: 5, b: 6 },
  },
  double,
); // => { foo: 2, bar: [4, 6, 8], qux: { a: 10, b: 12 } }
 */

export default function deepMap(value, fn) {
    //handle arrays
    if(Array.isArray(value)) {
        return value.map(item => deepMap.call(value, item, fn));
    }

    //handle objects
    if(isPlainObject(value)) {
        const result = {};
        for(const key of Object.keys(value)) {
            result[key] = deepMap.call(value, value[key], fn);
        }
        return result;
    }

    //all other cases
    return fn.call(this, value);
}

function isPlainObject(obj) {
    if(obj === null) return false;
    const proto = Object.getPrototypeOf(obj);
    return proto === null || proto === Object.prototype;
}