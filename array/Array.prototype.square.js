/**
 * Implement a custom Array function, Array.prototype.square()
 * which creates a new array with the results of squaring every element within the array the .square() method is called on.
 * 
 * [-2].square(); // [4]
 * [1, 2, 3, 4].square(); // [1, 4, 9, 16]
*/

/*
Questions to ask
1. Can we modify the original array?
2. Would array contain anything other than numbers?
3. Should we handle sparse elements?
*/
Array.prototype.square = function () {
  return this.map(val => val*val)
};