/*
Implement a function fromPairs(pairs) that transforms a list of key-value pairs into an object.
fromPairs(pairs);
const pairs = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];

fromPairs(pairs); // => { a: 1, b: 2, c: 3 }
*/

export default function fromPairs(pairs) {
    let result = {};
    pairs.forEach(([key, value])=> {
      result[key] = value;
      // result = {...result, ...{[key] : value}}
    })
    return result;
  }