/**
 * Implement a function that takes one or more values and returns a function that
 * cycles through those values each time it is called.
 */
export default function cycle(...values) {
    const arr = [...values];
    let index = 0;
    return function() {
        if(index === arr.length) {index = 0;}
        return arr[index++];
    }
}