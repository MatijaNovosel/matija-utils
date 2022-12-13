import { IDictionary } from "./models";

/**
 * Finds the common elements of two arrays.
 * @param {any[]} a
 * @param {any[]} b
 * @example
 * const x = intersect([1, 2, 3], [1, 2]);
 * console.log(x); // [1, 2]
 */
export const intersect = (a: any[], b: any[]) =>
  [...new Set(a)].filter((x) => new Set(b).has(x));

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
  Array(n)
    .fill(undefined)
    .forEach(() => fn());
};

/**
 * Makes a deep clone of an object.
 * @param {any} obj
 */
export const cloneObject = (obj: any) => {
  var clone = {};
  for (var i in obj) {
    if (obj[i] != null && typeof obj[i] == "object")
      clone[i] = cloneObject(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
};

/**
 * Creates an array of a certain length filled with a specified value.
 * @param {number} length
 * @param {any} value
 */
export const generateArray = (length: number, value: any): any[] => {
  return JSON.parse(JSON.stringify(Array.from({ length }, () => value)));
};

/**
 * Returns the last N elements of an array.
 * @param {any[]} arr
 * @param {number} n
 */
export const end = (arr: any[], n: number) => arr.slice(arr.length - n);

/**
 * Returns the month of a provided date in the long format.
 * @param {Date | null} date
 */
export const getMonth = (date: Date | null) => {
  if (date) return date.toLocaleString("en", { month: "long" });
  return new Date().toLocaleString("en", { month: "long" });
};

/**
 * Calculates the difference in months between two dates.
 * @param {Date} from
 * @param {Date} to
 */
export const monthDiff = (from: Date, to: Date) => {
  return (
    to.getMonth() -
    from.getMonth() +
    12 * (to.getFullYear() - from.getFullYear())
  );
};

/**
 * Creates a string that describes the difference between two dates.
 * @param {Date} from
 * @param {Date} to
 */
export const dateDiffReadable = (from: Date, to: Date): string => {
  const monthDifference = monthDiff(from, to);
  const years = Math.floor(monthDifference / 12);
  const months = monthDifference % 12;
  return `${years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""}${
    months > 0
      ? `${years > 0 ? " " : ""}${months} month${months > 1 ? "s" : ""}`
      : ""
  }`;
};

/**
 * Gets a random integer between an inclusive range.
 * @param {number} min
 * @param {number} max
 */
export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Gets a random element of an array.
 * @param {any[]} arr
 */
export const sample = (arr: any[]): any => {
  return arr[randInt(0, arr.length - 1)];
};

/**
 * Generates a string composed of N random characters.
 * @param {number} n
 */
export const generateRandomString = (n: number): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let res = "";
  while (n--) res += sample(characters.split(""));
  return res;
};
