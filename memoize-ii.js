/*
Implement a function memoize(func) that takes in a function parameter func and
returns a memoized version of the function.
You may assume that func only accepts strings or numbers as arguments.
 */
export default function memoize(func) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache.has(key)) {
            return cache.get(key);
        }
        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

/*
Another implementation without JSON.stringify
Caveats of this approach:
1. Reference equality, if args are arrays or objects with same content, it will be
considered as different keys because of reference equality.
2. Memory consumption: Nested map can grow large if the arguments list is very large.
We have to implement cache eviction strategies in that case.
a. LRU cache method where least recently used cache data is removed.
b. TTL - time based expiration where each entry has a timestamp and a background process
will clean up the entries based on when those entires were added.
 */
export default function memoize(func) {
    const cache = new Map();
    return function(...args) {
        let currentMap = cache;
        for (const arg of args) {
            if (!currentMap.has(arg)) {
                currentMap.set(arg, new Map());
            }
            currentMap = currentMap.get(arg);
        }
        if (currentMap.has('result')) {
            return currentMap.get('result');
        }
        const result = func.apply(this, args);
        currentMap.set('result', result);
        return result;
    }
}
