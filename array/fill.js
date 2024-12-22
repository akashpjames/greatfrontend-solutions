/**
 * Implement a function fill(array, value, [start=0], [end=array.length]) that fills an array
 * with values from start up to, but not including, end.
 * This method mutates array.
 */
export default function fill(array, value, start = 0, end = array.length) {
    const len = array.length;
    if(start<0) start = Math.max(len+start, 0);
    if(end<0) end = Math.max(len+end, 0);
    end = Math.min(end, len);

    for(let i=start; i<end; i++) {
        array[i] = value;
    }

    return array;
}