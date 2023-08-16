const reverseString = require('./reversestring');

describe('Reverse String', () => {
    it('should be a function', () => {
        expect(typeof reverseString).toEqual('function')
    })

    it('should return a string', () => {
        expect(typeof reverseString('hello')).toEqual('string')
    })

    it('should return a reverseString', () => {
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('bye')).toEqual('eyb');
        expect(reverseString('lol')).toEqual('lol');
        expect(reverseString('hello world')).toEqual('dlrow olleh');
    });
} )