import { Functions } from './functions';

describe('Functions Class', () => {
  const classInstance = new Functions();

  describe('ReverseString', () => {
    it('should not reverse invalid value', () => {
      expect(classInstance.ReverseString(123)).toBe(123);
      expect(classInstance.ReverseString(null)).toBeNull();
      expect(classInstance.ReverseString(undefined)).toBeUndefined();
    });

    it('should reverse any valid string', () => {
      expect(classInstance.ReverseString('')).toBe('');
      expect(classInstance.ReverseString('a')).toBe('a');
      expect(classInstance.ReverseString('abc')).toBe('cba');
      expect(classInstance.ReverseString('123')).toBe('321');
      expect(classInstance.ReverseString('null')).toBe('llun');
      expect(classInstance.ReverseString('undefined')).toBe('denifednu');
      expect(classInstance.ReverseString('abcdefghijklmnopqrstuvwxyz')).toBe('zyxwvutsrqponmlkjihgfedcba');
    });
  });

  describe('CalculateNthFibonacciNumber', () => {
    it('should throw and exception if n is negative', () => {
      try {
        classInstance.CalculateNthFibonacciNumber(-15);
      } catch (e) {
        expect(e.message).toBe('n should be greater or equal to 0')
      }
    });

    it('should return Nth Fibonacci number with a valid input', () => {
      expect(classInstance.CalculateNthFibonacciNumber(0)).toBe(0);
      expect(classInstance.CalculateNthFibonacciNumber(1)).toBe(1);
      expect(classInstance.CalculateNthFibonacciNumber(2)).toBe(1);
      expect(classInstance.CalculateNthFibonacciNumber(3)).toBe(2);
      expect(classInstance.CalculateNthFibonacciNumber(4)).toBe(3);
      expect(classInstance.CalculateNthFibonacciNumber(5)).toBe(5);
      expect(classInstance.CalculateNthFibonacciNumber(10)).toBe(55);
      expect(classInstance.CalculateNthFibonacciNumber(15)).toBe(610);
      expect(classInstance.CalculateNthFibonacciNumber(20)).toBe(6765);
      expect(classInstance.CalculateNthFibonacciNumber(100)).toBe(354224848179262000000);
    });
  });

  describe('PadNumberWithZeros', () => {
    it('should throw an exception if n is negative', () => {
      try {
        classInstance.PadNumberWithZeroes(-1);
      } catch (e) {
        expect(e.message).toBe('n should be positive');
      }
    });

    it('should throw an exception if n is bigger then 99999', () => {
      try {
        classInstance.PadNumberWithZeroes(199999);
      } catch (e) {
        expect(e.message).toBe('n cannot be bigger then 99999');
      }
    });

    it('should pad n properly if n contains less then 5 digits', () => {
      expect(classInstance.PadNumberWithZeroes(1)).toBe('00001');
      expect(classInstance.PadNumberWithZeroes(12)).toBe('00012');
      expect(classInstance.PadNumberWithZeroes(123)).toBe('00123');
      expect(classInstance.PadNumberWithZeroes(1234)).toBe('01234');
    });

    it('should not pad n at all if n contains 5 digits', () => {
      expect(classInstance.PadNumberWithZeroes(12345)).toBe('12345');
      expect(classInstance.PadNumberWithZeroes(99999)).toBe('99999');
      expect(classInstance.PadNumberWithZeroes(10000)).toBe('10000');
    });
  });
});
