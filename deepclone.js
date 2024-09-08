/*
Implement a deepClone function that performs a deep clone operation on JavaScript objects.
You can assume the input only contains JSON-serializable values (null, boolean, number, string, Array, Object) 
and will not contain any other objects like Date, Regex, Map or Set.
*/


/*
- Here property descriptors are not copied to cloned object.
- If object has circular reference, the current solution will break and cause a stack overflow
by recursing into infinite loop.
- Prototypes are not copied.
- Non-enumerable and symbol-keyed properties are ignored here.

There is a new API - structuredClone(obj).
So you can do const clonedObj = structuredClone(obj);

Another oneliner: return JSON.parse(JSON.stringify(value)) ->it has its flaws when it comes to NaN, Infinity etc.
*/

export default function deepClone(value) {
  if(typeof value !== 'object' || value === null) {
    return value;
  }

  if(Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  let result = {}
  for(let key in value) {
    // We don't want inherited enumerable keys in our answer
    // Only process non-inherited keys.
    if(Object.hasOwn(value, key)) {
      result[key] = deepClone(value[key]);
    }
  }

  return result;
}