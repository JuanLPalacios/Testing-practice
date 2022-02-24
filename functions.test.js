import { Calculator, reverseString, stringLength } from './functions';

describe('stringLength(string)', ()=>{
  it ('should accept only strings', ()=>{
    expect(()=>stringLength({})).toThrow(Error);
    expect(()=>stringLength(2)).toThrow(Error);
    expect(()=>stringLength(true)).toThrow(Error);
    expect(()=>stringLength(/d/g)).toThrow(Error);
    expect(()=>stringLength([])).toThrow(Error);
  });
  it ('should return the string length', ()=>{
    expect(stringLength('a')).toBe(1);
    expect(stringLength('aaa')).toBe(3);
    expect(stringLength('aaaaa')).toBe(5);
  });
  it ('should reject strings shorter than 1 character', ()=>{
    expect(()=>stringLength('')).toThrow(Error);
  });
  it ('should reject strings longer than 10 characters', ()=>{
    expect(()=>stringLength('dsfgsdfgsdfgsdfgsdfgsdg')).toThrow(Error);
    expect(()=>stringLength('this is too long')).toThrow(Error);
    expect(()=>stringLength('just right')).not.toThrow(Error);
  });
});

describe('reverseString(string)', ()=>{
  it ('should accept only strings', ()=>{
    expect(()=>reverseString({})).toThrow(Error);
    expect(()=>reverseString(2)).toThrow(Error);
    expect(()=>reverseString(true)).toThrow(Error);
    expect(()=>reverseString(/d/g)).toThrow(Error);
    expect(()=>reverseString([])).toThrow(Error);
  });
  it ('should return the reversed string', ()=>{
    expect(reverseString('abc')).toBe('cba');
    expect(reverseString('lost to me')).toBe('em ot tsol');
    expect(reverseString('aaaaa')).toBe('aaaaa');
  });
});

describe('Calculator', ()=>{
  const calc = new Calculator();
  it ('should add', ()=>{
    expect(calc.add(1,0)).toBe(1);
    expect(calc.add(1,2)).toBe(3);
    expect(calc.add(3,2)).toBe(5);
  });
  it ('should subtract', ()=>{
    expect(calc.subtract(2,3)).toBe(1);
    expect(calc.subtract(5,8)).toBe(3);
    expect(calc.subtract(5,10)).toBe(5);
  });
  it ('should divide', ()=>{
    expect(calc.divide(2,2)).toBe(1);
    expect(calc.divide(9,3)).toBe(3);
    expect(calc.divide(15,3)).toBe(5);
  });
  it ('should multiply', ()=>{
    expect(calc.multiply(3,2)).toBe(6);
    expect(calc.multiply(3,3)).toBe(9);
    expect(calc.multiply(5,3)).toBe(15);
  });
});

