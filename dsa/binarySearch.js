/*
Implement binary search
*/

export default function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1;
    while(start <= end) {
      const mid = Math.floor((start+end)/2)
      // let mid = (start + (end-start))/2;
      const current = arr[mid];
      if(current === target) {
        return mid;
      } else if(current > target) {
        end = mid-1;
      } else {
        start = mid+1;
      }
    }
    return -1;
}
  
  //Recursive approach - here space complexity is log(n)+1 for the recursion stack.
  //In iterative approach, space complexity is O(1)


function binarySearchHelper(arr, target, start, end) {
    if(start > end) return -1;
      
    const mid = Math.floor((start + end)/2);
    const current = arr[mid];
    if(current === target) {
      return mid;
    } else if(current > target) {
      return binarySearchHelper(arr, target, start, mid-1);
    } else {
      return binarySearchHelper(arr, target, mid+1, end)
    }
  }