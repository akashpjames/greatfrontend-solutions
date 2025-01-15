/**
 * Implement a function that returns a new object after squashing
 * the input object into a single level of depth where nested keys are "squashed" together with a period delimiter (.).
 */
export default function squashObject(obj, parentKey = '', result = {}) {
    for (const [key, value] of Object.entries(obj)) {
        // If key is empty string, ignore it in the path
        const newKey = key ? (parentKey ? `${parentKey}.${key}` : key) : parentKey;

        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
            squashObject(value, newKey, result);
        } else if (Array.isArray(value)) {
            value.forEach((item, index) => {
                squashObject({ [index]: item }, newKey, result);
            });
        } else {
            // Base case
            result[newKey] = value;
        }
    }
    return result;
}