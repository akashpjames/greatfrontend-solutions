/*
Implement flatten function
// Single-level arrays are unaffected.
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
*/

export default function flatten(value) {
    const results = [];
    const len = value.length;
    for(let i=0; i<len; i++) {
      if(Array.isArray(value[i])) {
        results.push(...flatten(value[i]));
        //If you use concat, make sure to add it back to the results variable
        //concat doesn't mutate original array, but uses additional array.
        //Performance: push(...flatten(...)) is usually more performant because it doesn’t involve creating a new array.
        //results = results.concat(flatten(value[i]));
      } else {
        results.push(value[i]);
      }
    }
    return results;
  }