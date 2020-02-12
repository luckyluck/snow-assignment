export class Functions {

  /**
   * Reverses a string.
   *
   * @param value String to reverse.
   * @returns Reversed string.
   */
  public ReverseString(value: string): string {
    // It's debatable if I should check the type and validate on null|undefined or not
    // On the one hand, TypeScript should do it during development
    // On the other hand, if the method gets an invalid value during its work, it will crash
    if (typeof value !== 'string') return value; // I can throw and Exception also
    if (value.length < 2) return value;

    return value.split('').reverse().join('');
  }

  /**
   * Calculates the Nth fibonacci number.
   *
   * @param n Fibonacci number to calculate.
   * @returns The nth fibonacci number.
   */
  public CalculateNthFibonacciNumber(n: number): number {
    throw new Error();
  }

  /**
   * Pads a number with up to four zeroes.
   * Can only pad unsigned numbers up to 99999.
   *
   * @param n Number to pad.
   * @returns Zero-padded number.
   */
  public PadNumberWithZeroes(n: number): string {
    throw new Error();
  }

  /**
   * Determines if a year is a leap year.
   *
   * @param year Year to determine.
   * @returns True if leap year, false if not.
   */
  public IsLeapYear(year: number): boolean {
    throw new Error();
  }

  /**
   * Find the N:th largest number in a range of numbers.
   *
   * @param numbers List of integers.
   * @param n Largest number to return
   * @returns The N:th largest number in list.
   */
  public FindNthLargestNumber(numbers: number[], n: number): number {
    throw new Error();
  }

  /**
   * Selects the prime numbers from a enumerable with numbers.
   *
   * @param numbers Array of numbers.
   * @returns Array with only prime numbers.
   */
  public SelectPrimeNumbers(numbers: number[]): number[] {
    throw new Error();
  }

  /**
   * Determines if the bit pattern of value the same if you reverse it.
   *
   * @param value Value to inspect.
   * @returns True if the bit value is a palindrome otherwise false.
   */
  public IsPalindrome(value: number): boolean {
    throw new Error();
  }

  /**
   * Counts all bits in an int value.
   *
   * @param value Integer value to count bits in.
   * @returns Number of bits in integer value.
   */
  public CountSetBits(value: number): number {
    throw new Error();
  }
}
