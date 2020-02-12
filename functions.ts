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
    if (n < 0) {
      throw new Error('n should be greater or equal to 0');
    }

    // 2 first numbers are special cases - to calculate a next one we need 2 previous
    if (n < 2) return n;
    // 2 closest numbers that we have at the beginning
    const numbers = [0, 1];
    // 1st element before calculation
    let nthNumber = 0;

    // We can also use recursion here
    for (let i = 2; i <= n; i++) {
      nthNumber = numbers[i - 1] + numbers[i - 2];
      numbers.push(nthNumber);
    }

    return nthNumber;
  }

  /**
   * Pads a number with up to four zeroes.
   * Can only pad unsigned numbers up to 99999.
   *
   * @param n Number to pad.
   * @returns Zero-padded number.
   */
  public PadNumberWithZeroes(n: number): string {
    if (n < 0) {
      throw new Error('n should be positive');
    }
    if (n > 99999) {
      throw new Error('n cannot be bigger then 99999');
    }
    // This is how I would implement the method without built-in functionality
    // (new Array(5).fill(0).join('') + n.toString()).slice(-5);
    return n.toString().padStart(5, '0');
  }

  /**
   * Determines if a year is a leap year.
   *
   * @param year Year to determine.
   * @returns True if leap year, false if not.
   */
  public IsLeapYear(year: number): boolean {
    // https://en.wikipedia.org/wiki/Leap_year#Algorithm
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Find the N:th largest number in a range of numbers.
   *
   * @param numbers List of integers.
   * @param n Largest number to return
   * @returns The N:th largest number in list.
   */
  public FindNthLargestNumber(numbers: number[], n: number): number {
    if (n > numbers.length) {
      throw new Error('Invalid index');
    }

    // Using another sort algorithm can be an improvement
    // The solution could be even more complex if we would try not to tske into account duplicates
    return numbers.sort((a: number, b: number): number => b - a)[n - 1];
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
    // Let's think about only positive numbers here
    // Also, is one symbol a palindrome?
    return value.toString() === this.ReverseString(value.toString());
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
