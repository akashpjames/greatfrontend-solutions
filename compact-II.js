/*
Implement a function compact(value) that returns a new object with all falsey values removed,
including falsey values that are deeply-nested. You can assume the value only contains JSON-serializable values
(null, boolean, number, string, Array, Object) and will not contain any other objects like Date, Regex, Map or Set.
compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
compact({ foo: true, bar: null }); // => { foo: true }
 */

export default function compact(value) {
    if (Array.isArray(value)) {
        const result = [];
        for (const item of value) {
            if (item) {
                if (typeof item === "object") {
                    result.push(compact(item));
                } else {
                    result.push(item);
                }
            }
        }
        return result;
    } else if (value && typeof value === "object") {
        const result = {};
        for (const key in value) {
            if (Object.hasOwn(value, key)) {
                const item = value[key];
                if (item) {
                    if (typeof item === "object") {
                        result[key] = compact(item);
                    } else {
                        result[key] = item;
                    }
                }
            }
        }
        return result;
    }
    return value;
}

/*
export default function compact(value) {
  if (Array.isArray(value)) {
    return value.reduce((acc, item) => {
      if (!item) return acc;
      acc.push(typeof item === 'object' ? compact(item) : item);
      return acc;
    }, []);
  }

  if (value && typeof value === 'object') {
    return Object.keys(value).reduce((acc, key) => {
      const item = value[key];
      if (!item) return acc;
      acc[key] = typeof item === 'object' ? compact(item) : item;
      return acc;
    }, {});
  }

  // For non-object, non-array types, return the value as is.
  return value;
}*/