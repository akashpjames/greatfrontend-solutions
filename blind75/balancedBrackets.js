/**
 * Given a string str consisting of characters such as '(', ')', '{', '}', '[' and ']',
 * determine if the input string is properly balanced.
 */
export default function isBalancedBrackets(str) {
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    const stack = [];
    for(const bracket of str) {
        //open bracket
        if(Object.hasOwn(map, bracket)) {
            stack.push(map[bracket]);
        }
        //closing bracket
        else {
            if(stack.pop() !== bracket) {
                return false;
            }
        }
    }
    return stack.length === 0;
}