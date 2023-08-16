const palindrome = require('./palindrome');

describe('Palindrome', () => {
  it('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });

  it('should return a boolean', () => {
    expect(typeof palindrome('hello')).toEqual('boolean');
  });

  it('should return true if is a plaindrome', () => {
    expect(palindrome('kayak')).toBeTruthy();
    expect(palindrome('dad')).toBeTruthy();
    expect(palindrome('radar')).toBeTruthy();
  });

  it('should return false if is not a plaindrome', () => {
    expect(palindrome('blur')).toBeFalsy();
    expect(palindrome('oasis')).toBeFalsy();
    expect(palindrome('monkey')).toBeFalsy();
  });

  it('should return false if includes spaces', () => {
    expect(palindrome(' blur')).toBeFalsy();
    expect(palindrome('o asis')).toBeFalsy();
    expect(palindrome('monke y')).toBeFalsy();
  });
});
