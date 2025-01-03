/**
 * Implement a function unionBy(array) that creates an array of unique values, in order, from all given arrays and
 * accepts iteratee which is invoked for each element of each arrays to generate the criterion by which uniqueness is computed.
 */
export default function unionBy(iteratee, ...arrays) {
    const seen = new Set();
    const results = [];
    for(let arr of arrays) {
        for(let el of arr) {
            const val = iteratee.call(this, el);
            if(!seen.has(val)) {
                seen.add(val);
                results.push(el);
            }
        }
    }
    return results;
}