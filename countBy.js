/**
 * Implement a function countBy(array, iteratee) that creates an object composed of keys generated from the results of
 * running each element of array through iteratee. The corresponding value of each key is the number of times the key
 * was returned by iteratee.
 */

export default function countBy(array, iteratee) {
    if(!array.length) return {};
    const countMap = new Map();
    for(const value of array) {
        const key = iteratee(value);
        if(!countMap.has(key)) {
            countMap.set(key, 0);
        }
        countMap.set(key, countMap.get(key) + 1);
    }
    return Object.fromEntries(countMap);
}


// Here Object.create(null) is used, otherwise, there is a potential risk of accessing
// inherited properties.
// For eg if the key is something like 'toString' and if we had created result like const result = {};
// The answer will fail as result is created from Object prototype and has inherited toString property by default.
// export default function countBy(array, iteratee) {
//   const result = Object.create(null);

//   for (const element of array) {
//     const key = String(iteratee(element));
//     result[key] ??= 0;
//     result[key]++;
//   }

//   return result;
// }