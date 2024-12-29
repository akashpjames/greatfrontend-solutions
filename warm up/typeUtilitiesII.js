/**
 * Implement the following
 * isArray(value): Return true if value is an array, false otherwise.
 * isFunction(value): Return true if value is a function, false otherwise.
 * isObject(value): Return true if value is an object (e.g. arrays, functions, objects, etc, but not including null and undefined), false otherwise.
 * isPlainObject(value): Return true if value is a plain object, false otherwise (for arrays, functions, etc).
 * A plain object, or what is commonly known as a Plain Old JavaScript Object (POJO) is any object whose prototype is Object.prototype or an object created via Object.create(null).
 */
export function isArray(value) {
    return Array.isArray(value);
    // For null and undefined.
    // if (value == null) return false;
    // return value.constructor === Array;
}

export function isFunction(value) {
    return typeof value === 'function';
    // return value.constructor.name === 'Function';
}

export function isObject(value) {
    // For null and undefined.
    if (value == null) return false;
    const type = typeof value;
    return type === 'object' || type === 'function';
}

export function isPlainObject(value) {
    // For null and undefined.
    if (value == null) return false
    const prototype = Object.getPrototypeOf(value);
    //We have to check for null as we can create objects like const obj = Object.create(null) - this is an object without prototype
    return prototype === null || prototype === Object.prototype;
}