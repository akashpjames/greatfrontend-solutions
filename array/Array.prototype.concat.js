/**
 * Implement Array.prototype.concat
 */
Array.prototype.myConcat = function (...items) {
    const newArray = Array.from(this);// This would maintain sparseness
    for(const item of items) {
        if(Array.isArray(item)) {
            for(let i=0; i<item.length; i++) {
                if(i in item) {
                    newArray.push(item[i])
                } else {
                    newArray.length++;//Add an empty slot
                }
            }
        } else {
            newArray.push(item);
        }
    }
    return newArray;
};

// Solution without handling sparseness

// Array.prototype.myConcat = function (...items) {
//   const newArray = [...this];
//   for(const item of items) {
//     if(Array.isArray(item)) {
//       newArray.push(...item);
//     } else {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// };