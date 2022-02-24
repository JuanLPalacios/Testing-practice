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
});

