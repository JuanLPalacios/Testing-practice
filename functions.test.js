import { stringLength } from './functions';

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

