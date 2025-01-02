/**
 * Implement the curry function which accepts a function as the only argument and returns a
 * function that accepts single arguments and can be repeatedly called until at least the
 * minimum number of arguments have been provided (determined by how many arguments the original function accepts).
 * The initial function argument is then invoked with the provided arguments.
 */
export default function curry(func) {
    return function curried (...args) {
        if(args.length >= func.length) {
            return func.apply(this, args);
        }
        return curried.bind(this, ...args);
        // return (arg) =>
        //   arg === undefined ?
        //   curried.apply(this, args) :
        //   curried.apply(this, [...args, arg]);
    }
}