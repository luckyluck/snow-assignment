import { Functions } from './functions';

describe('Functions Class', () => {
  const classInstance = new Functions();

  describe('reverse a string', () => {
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
});
