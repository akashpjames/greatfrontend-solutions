/*
Given a list of strings, implement a function listFormat that returns the items concatenated into a single string. A common use case would be in summarizing the reactions for social media posts.
The function should support a few options as the second parameter:
sorted: Sorts the items by alphabetical order.
length: Show only the first length items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc).
unique: Remove duplicate items.
listFormat([]); // ''

listFormat(['Bob']); // 'Bob'
listFormat(['Bob', 'Alice']); // 'Bob and Alice'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']);
// 'Bob, Ben, Tim, Jane and John'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 4,
}); // 'Bob, Ben, Tim, Jane and 1 other'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  sorted: true,
}); // 'Ben, Bob, Jane and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'

listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'
 */

export default function listFormat(items, options) {
    // 1. Filter out empty or whitespace-only strings
    const filteredItems = items.filter(item => item.trim() !== '');

    if (!filteredItems.length) return '';
    if (filteredItems.length === 1) return filteredItems[0];

    let newItems = [...filteredItems];

    // 2. Remove duplicates if requested (preserving first occurrences)
    if (options?.unique) {
        newItems = Array.from(new Set(newItems));
    }

    // 3. Sort alphabetically if requested
    if (options?.sorted) {
        newItems.sort((a, b) => a.localeCompare(b));
    }

    // 4. Truncate list if valid length option is provided
    if (typeof options?.length === 'number' && options.length > 0) {
        const requiredLen = options.length;
        const currentLen = newItems.length;
        if (requiredLen < currentLen) {
            const firstPart = newItems.slice(0, requiredLen).join(', ');
            const remaining = currentLen - requiredLen;
            return `${firstPart} and ${remaining} ${remaining === 1 ? 'other' : 'others'}`;
        }
    }

    // 5. Join the full list using natural language rules
    if (newItems.length === 1) {
        return newItems[0];
    } else if (newItems.length === 2) {
        return `${newItems[0]} and ${newItems[1]}`;
    } else {
        return `${newItems.slice(0, -1).join(', ')} and ${newItems[newItems.length - 1]}`;
    }

}