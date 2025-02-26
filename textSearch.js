/*
Given a content string and a query string, implement a function textSearch that finds all case-insensitive matches
with the query string, wrapping the matches in <b>...</b> tags.
textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
textSearch('The hardworking Dog overtakes the lazy dog', 'dog');
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'
textSearch('aaa', 'aa');
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.
textSearch('aaaa', 'aa');
// Correct: '<b>aaaa</b>'
// Wrong: '<b>aa</b><b>aa</b>'
 */
export default function textSearch(text, query) {
    if(!query.length) return text;
    const result = [];
    let inBold = false;
    const textLength = text.length;
    const queryLength = query.length;
    let index = 0;
    while(index < textLength) {
        const wordToCheck = text.slice(index, index+queryLength);
        if(wordToCheck.toLowerCase() === query.toLowerCase()) {
            // If we're not already in a bold section, open one.
            if(!inBold) {
                result.push('<b>');
                inBold = true;
            }
            result.push(wordToCheck);
            index += queryLength;
        } else {
            // If we were in a bold section, close it.
            if(inBold) {
                result.push('</b>');
                inBold = false;
            }
            result.push(text[index]);
            index++;
        }
    }
    // Close any bold tag still open at the end.
    if(inBold) {
        result.push('</b>');
    }
    return result.join('');
}