/**
 * Given an array of integers numbers, write a function that returns the indices of two integers within the numbers
 * array that sum up to a target integer. The smaller index should appear first.
 */

// TC O(n) SC O(n)
export default function pairSum(numbers, target) {
    const map = new Map();
    for(let i=0; i<numbers.length; i++) {
        const required = target - numbers[i];
        if(map.has(required)) {
            return [map.get(required), i];
        }
        map.set(numbers[i], i);
    }
}