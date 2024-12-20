/**
 * Array.prototype.at takes an integer value and returns the item at that index, allowing for positive and negative integers.
 * Negative integers count back from the last item in the array.
 * Implement Array.prototype.at. To avoid overwriting the actual Array.prototype.at, we shall instead implement it as Array.prototype.myAt.
 */
Array.prototype.myAt = function (index) {
    const len = this.length;
    let relativeIndex = Number(index);
    if(relativeIndex < 0) {
        relativeIndex = len + index;
    }
    if(Math.abs(relativeIndex) > len) {
        return undefined;
    }
    return this[relativeIndex];
};