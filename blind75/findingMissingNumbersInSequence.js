/**
 * Given an array numbers of size n storing n different integers which fall within the range [0, n],
 * implement a function to identify the missing element in the array. All numbers except one are present in the array.
 * Find the missing number.
 */
// This implementation has SC O(n) and TC O(n)
export default function findMissingNumberInSequence(numbers) {
    const nums = new Set(numbers);
    const len = numbers.length;
    for(let i=0; i<=len; i++) {
        if(!nums.has(i)) return i;
    }
    return -1;
}

// With sorting and checking for boundary cases (first element and last element), you can solve this problem
// in SC O(1) and TC O(n log n)

// With simple maths concept like expected sum - actual sum, you can solve this problem
// in SC O(1) and TC O(n)