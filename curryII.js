/**
 * Implement the curry function which accepts a function as the only argument and returns a function that accepts any
 * number of arguments (vs only one argument at a time in Curry) and returns a function which can be repeatedly called
 * until at least the minimum number of arguments has been provided
 * (determined by how many arguments the original function accepts).
 */
export default function curry(func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func.apply(this, args);
        }
        // return curried.bind(this, ...args); - this is enough as well
        return (...newArgs) => newArgs === undefined ?
            curried.apply(this, args) :
            curried.apply(this, [...args, ...newArgs]);
    }
}