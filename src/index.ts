import { IDictionary } from "./models";

/**
 * Finds the common elements of two arrays.
 * @param {any[]} a
 * @param {any[]} b
 * @example
 * const x = intersect([1, 2, 3], [1, 2]);
 * console.log(x); // [1, 2]
 */
export const intersect = (a: any[], b: any[]) => {
  const setB = new Set(b);
  return [...new Set(a)].filter((x) => setB.has(x));
};

/**
 * Chunks an array into a new array consisting of smaller arrays of a specified size.
 * @param {any[]} arr
 * @param {number} chunkSize
 * @example
 * const x = chunk([1, 2, 3, 4, 5, 6], 2);
 * console.log(x); // [[1, 2], [3, 4], [5, 6]]
 */
export const chunk = (arr: any[], chunkSize: number): any[][] => {
  const result = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize)
    result.push(arr.slice(i, i + chunkSize));
  return result;
};

/**
 * Creates an array of numbers from a specified range.
 * @param {number} start
 * @param {number} end
 */
export const range = (start: number, end: number): number[] => {
  return Array(end - start + 1)
    .fill(0)
    .map((_, idx) => start + idx);
};

/**
 * Splits and clumps together an array of elements by using a separator.
 * @param {any[]} arr
 * @param {any} separator
 * @example
 * const x = splitByValue([1, 2, 3, 4, "x", 5, 6, 7, 8], "x");
 * console.log(x); // [[1, 2, 3, 4], [1, 2, 3, 4]]
 */
export const splitByValue = (arr: any[], separator: any): any[][] => {
  const result = [[]];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == separator) result.push([]);
    else result[result.length - 1].push(arr[i]);
  return result;
};

/**
 * Sums an unspecified amount of inputs.
 * @param {...number} args
 */
export const sum = (...args: number[]) => args.reduce((a, b) => a + b);

/**
 * Multiplies an unspecified amount of inputs.
 * @param {...number} args
 */
export const product = (...args: number[]): number =>
  args.reduce((a, b) => a * b);

/**
 * Performs a modulo operation akin to that of Python.
 * @see {@link https://docs.python.org/3.3/reference/expressions.html#binary-arithmetic-operations}
 * @param {number} a
 * @param {number} b
 */
export const mod = (a: number, b: number): number => ((a % b) + b) % b;

/**
 * Groups values in an array of objects by the provided property.
 * @param {T[]} array
 * @param {string} property
 * @return {IDictionary<T[]>} A dictionary with the key being the property and the value being the objects grouped by the provided property.
 */
export const groupBy = <T>(array: T[], property: string): IDictionary<T[]> => {
  return array.reduce((memo, x) => {
    if (!memo[x[property]]) memo[x[property]] = [];
    memo[x[property]].push(x);
    return memo;
  }, {});
};

/**
 * Repeats a function a set amount of times.
 * @param {number} n
 * @param {function} fn
 */
export const repeat = (n: number, fn: () => void): void => {
  Array(n).forEach(() => fn());
};

/**
 * Creates an array of a certain length filled with a specified value.
 * @param {number} length
 * @param {any} value
 */
export const generateArray = (length: number, value: any): any[] => {
  return structuredClone(Array.from({ length }, () => value));
};
