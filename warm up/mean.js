/*
Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.
mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667
*/

/**
 Note: When array is very large and if the sum becomes larger than Number.MAX_VALUE, then we Infinity.
 To avoid that, we can make the array into chunks and find individual chunks mean and calculate mean from the means.
 */
export default function mean(array) {
  const len = array.length;
  if(!len) return NaN;
  const sum = array.reduce((prev, curr) => prev+curr , 0);
  return sum/len;
}
