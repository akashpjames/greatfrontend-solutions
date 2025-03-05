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

    // Recursive
    // if(Array.isArray(value)) {
    //   const result = [];
    //   for(const val of value) {
    //     result.push(...flatten(val));
    //   }
    //   return result;
    // } else {
    //   return [value];
    // }

    // DFS - we have to push elements from right to left
    const result = [];
    const stack = [value];
    while(stack.length) {
        const current = stack.pop();
        if(Array.isArray(current)) {
            for (let i = current.length - 1; i >= 0; i--) {
                stack.push(current[i]);
            }
        } else {
            result.push(current);
        }
    }
    return result;

    // THIS WON'T WORK
    // Iterative BFS takes outer layers first, so we won't get the desired order
    // flatten([[null, [true]], undefined])
    // We will get [undefined, null, true] - BFS considers outer layers first.
    // DFS with reverse pushing is the way to go here then!!!
    // const result = [];
    // const queue = [value];
    // while (queue.length) {
    //   const current = queue.shift(); // take the next element in the queue
    //   if (Array.isArray(current)) {
    //     // enqueue all elements in their natural order
    //     queue.push(...current);
    //   } else {
    //     result.push(current);
    //   }
    // }
    // return result;
  }