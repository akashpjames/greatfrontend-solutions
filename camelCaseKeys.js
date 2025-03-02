/*
Implement a function camelCaseKeys, that takes an object and returns a new object with all its keys converted to camel case.
For simplicity, we only need to consider the 4 string formats above, there will not be keys containing spaces, hyphens, or PascalCase.
camelCaseKeys({ foo_bar: true });
// { fooBar: true }

camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: '1' } });
// { fooBar: true, barBaz: { bazQux: '1' } }

camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: 'hello' }] }]);
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]
 */
export default function camelCaseKeys(object) {
    const type = typeof object;

    //handle arrays
    if(Array.isArray(object)) {
        return object.map(item => camelCaseKeys(item));
    }

    //handle objects
    if(type === 'object' && object !== null) {
        const newObject = {};
        for(const key in object) {
            if(Object.hasOwn(object, key)) {
                newObject[convertToCamelCase(key)] = camelCaseKeys(object[key]);
            }
        }
        return newObject;
    }

    // //handle objects using reduce
    // if (type === "object") {
    //     const keys = Object.keys(object);
    //     return keys.reduce((newObject, key) => {
    //         newObject[convertToCamelCase(key)] = camelCaseKeys(object[key]);
    //         return newObject;
    //     }, {});
    // }

    return object;
}

function convertToCamelCase(word) {
    if (!word.length) return '';
    const newWord = [word[0].toLowerCase()];
    let nextLetterUpperCase = false;
    for (let index = 1; index < word.length; index++) {
        const ch = word[index];
        if (ch === '_') {
            nextLetterUpperCase = true;
            continue;
        }
        nextLetterUpperCase ? newWord.push(ch.toUpperCase()) : newWord.push(ch.toLowerCase())
        nextLetterUpperCase = false;
    }

    return newWord.join('');
}
