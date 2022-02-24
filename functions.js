export function stringLength(string) {
    if (typeof string !== 'string')
        throw new Error('first parameter should be a a string');
    if (string.length==0)
        throw new Error('string cannot be shorter than 1 character');
    if (string.length>10)
        throw new Error('string cannot be longer than 10 characters');
    return string.length;
}

export function reverseString(string) {
    if (typeof string !== 'string')
        throw new Error('first parameter should be a a string');
    return string.split('').reverse().join('');
}

export class Calculator {
    add(a,b){
        return a+b;
    }
    subtract(b,a){
        return a-b;
    }
    divide(a,b){
        return a/b;
    }
    multiply(a,b){
        return a*b;
    }
}