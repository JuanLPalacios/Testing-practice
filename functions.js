export function stringLength(string) {
    if (typeof string !== 'string')
        throw new Error('first parameter should be a a string');
    if (string.length==0)
        throw new Error('string cannot be shorter than 1 character');
    if (string.length>10)
        throw new Error('string cannot be longer than 10 characters');
    return string.length;
}