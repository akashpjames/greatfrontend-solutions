/*
Implement a function jsonStringify, similar to JSON.stringify that converts a JavaScript value into a JSON string.
Only JSON-serializable values (i.e. boolean, number, null, array, object) will be present in the input value.
Ignore the second and the third optional parameters in the original API.
Examples

jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar","bar":[1,2,3]}'
jsonStringify({ foo: true, bar: false }); // '{"foo":true,"bar":false}'
Other types
jsonStringify(null); // 'null'
jsonStringify(true); // 'true'
jsonStringify(false); // 'false'
jsonStringify(1); // '1'
jsonStringify('foo'); // '"foo"'
 */
export default function jsonStringify(value) {
    if(value === null) return "null";
    const currentType = typeof value;
    if (currentType === "string") return `"${value}"`;
    if (currentType === "number" || currentType === "boolean") return String(value);

    //handle array
    if(Array.isArray(value)) {
        const arrayItems = value.map(item => jsonStringify(item));
        return `[${arrayItems.join(",")}]`;
    }
    //handle objects
    if (currentType === "object") {
        const keys = Object.keys(value);
        const objectItems = keys.map(key => `"${key}":${jsonStringify(value[key])}`);
        return `{${objectItems.join(",")}}`;
    }
}