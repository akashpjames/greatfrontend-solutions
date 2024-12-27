/**
 * Implement a function maxBy(array, iteratee) that finds the element inside array with the maximum value after going through iteratee.
 * The iteratee is invoked with one argument: (value).
 */

export default function maxBy(array, iteratee) {
    let result, maxVal;
    const len = array.length;
    for(const value of array) {
        const currentValue = iteratee(value);
        if(currentValue != null && (maxVal === undefined || currentValue > maxVal)) {
            maxVal = currentValue;
            result = value;
        }
    }
    return result;
}