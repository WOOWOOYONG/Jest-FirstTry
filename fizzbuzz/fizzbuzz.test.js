const fizzBuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('should be a function', () => {
        expect(typeof fizzBuzz).toEqual('function')
    })
    it('should return a number if not divisible by 3 or 5', () => {
          expect(fizzBuzz(1)).toEqual(1);
          expect(fizzBuzz(13)).toEqual(13);
          expect(fizzBuzz(23)).toEqual(23);
    });
    it('should return Fizz if divisible by 3', () => {
          expect(fizzBuzz(3)).toEqual('Fizz');
          expect(fizzBuzz(9)).toEqual('Fizz');
          expect(fizzBuzz(18)).toEqual('Fizz');
    });
    it('should return Buzz if divisible by 5', () => {
          expect(fizzBuzz(5)).toEqual('Buzz');
          expect(fizzBuzz(10)).toEqual('Buzz');
          expect(fizzBuzz(20)).toEqual('Buzz');
    });
    it('should return FizzBuzz if divisible by 3 & 5', () => {
          expect(fizzBuzz(15)).toEqual('FizzBuzz');
          expect(fizzBuzz(30)).toEqual('FizzBuzz');
          expect(fizzBuzz(45)).toEqual('FizzBuzz');
    });
})