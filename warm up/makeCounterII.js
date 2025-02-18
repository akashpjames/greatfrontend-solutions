/**
 * Implement a function makeCounter that accepts an optional integer value (defaults to 0) and returns an object that
 * contains the following methods:
 *
 * get(): returns the current value.
 * increment(): increments the current value and returns it.
 * decrement(): decrements the current value and returns it.
 * reset(): resets the current value to the initial value.
 */

export default function makeCounter(initialValue = 0) {
    let value = initialValue;

    function get() {
        return value;
    }
    function increment() {
        return ++value;
    }
    function decrement() {
        return --value;
    }
    function reset() {
        value = initialValue;
        return value;
    }
    return {
        get,
        increment,
        decrement,
        reset
    }
}