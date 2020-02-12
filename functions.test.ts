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

  describe('IsLeapYear', () => {
    it('should return false if a given year is not a leap year', () => {
      expect(classInstance.IsLeapYear(2019)).toBeFalsy();
      expect(classInstance.IsLeapYear(2018)).toBeFalsy();
      expect(classInstance.IsLeapYear(2001)).toBeFalsy();
      expect(classInstance.IsLeapYear(1987)).toBeFalsy();
      expect(classInstance.IsLeapYear(1901)).toBeFalsy();
      expect(classInstance.IsLeapYear(1581)).toBeFalsy();
      expect(classInstance.IsLeapYear(101)).toBeFalsy();
    });

    it('should return true if a given year is a leap year', () => {
      expect(classInstance.IsLeapYear(2020)).toBeTruthy();
      expect(classInstance.IsLeapYear(2016)).toBeTruthy();
      expect(classInstance.IsLeapYear(1980)).toBeTruthy();
      expect(classInstance.IsLeapYear(400)).toBeTruthy();
      expect(classInstance.IsLeapYear(1600)).toBeTruthy();
      expect(classInstance.IsLeapYear(204)).toBeTruthy();
      expect(classInstance.IsLeapYear(196)).toBeTruthy();
    });
  });

  describe('FindNthLargestNumber', () => {
    it('should throw an exception if a searching index is bigger then array size', () => {
      try {
        classInstance.FindNthLargestNumber([1, 3, 2, 5], 9);
      } catch (e) {
        expect(e.message).toBe('Invalid index');
      }
    });

    it('should return a Nth largest number', () => {
      const numbers = [17, 1, 15, 29, 40, 55, 100, 11, 3, 44, 18, 12, 42];

      expect(classInstance.FindNthLargestNumber(numbers, 1)).toBe(100);
      expect(classInstance.FindNthLargestNumber(numbers, 13)).toBe(1);
      expect(classInstance.FindNthLargestNumber(numbers, 3)).toBe(44);
      expect(classInstance.FindNthLargestNumber(numbers, 4)).toBe(42);
      expect(classInstance.FindNthLargestNumber(numbers, 7)).toBe(18);
    });
  });
});
