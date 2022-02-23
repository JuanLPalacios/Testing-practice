export function stringLength(string) {
    if (typeof string !== 'string')
        throw new Error('first parameter should be a a string');
    return string.length;
}