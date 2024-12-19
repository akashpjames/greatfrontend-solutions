/**
 * Implement a function minBy(array, iteratee) that finds the element inside array
 * with the minimum value after going through iteratee.
 */
export default function minBy(array, iteratee) {
    let minimum, result;
    for(const value of array) {
        const current = iteratee(value);
        if(current != null && (minimum === undefined || current < minimum)) {
            minimum = current;
            result = value;
        }
    }
    return result;
}