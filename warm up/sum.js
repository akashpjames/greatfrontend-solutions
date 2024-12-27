/**
 * Implement a sum function that accepts a number and allows for repeated calling with more numbers.
 * Calling the function without an argument will sum up all the arguments thus far and return the total.
 */
export default function sum(value) {
    return function(newValue) {
        // if(newValue === undefined) {
        //   return value;
        // } else {
        //   return sum(value+newValue);
        // }
        return newValue === undefined ? value : sum(value+newValue);
    }
}