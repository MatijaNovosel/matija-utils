import { SI_SYMBOL } from "./constants";
import { IDictionary } from "./models";

/**
 * Finds the common elements of two arrays.
 * @param {any[]} a
 * @param {any[]} b
 * @example
 * intersect([1, 2, 3], [1, 2]); // [1, 2]
 */
export const intersect = (a: any[], b: any[]) =>
  [...new Set(a)].filter((x) => new Set(b).has(x));

/**
 * Chunks an array into a new array consisting of smaller arrays of a specified size.
 * @param {any[]} arr
 * @param {number} chunkSize
 * @example
 * chunk([1, 2, 3, 4, 5, 6], 2); // [[1, 2], [3, 4], [5, 6]]
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
 * @example
 * range(0, 5); // [0, 1, 2, 3, 4, 5]
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
 * splitByValue([1, 2, 3, 4, "x", 5, 6, 7, 8], "x"); // [[1, 2, 3, 4], [5, 6, 7, 8]]
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
 * @example
 * sum(1, 2, 3); // 6
 */
export const sum = (...args: number[]) => args.reduce((a, b) => a + b);

/**
 * Multiplies an unspecified amount of inputs.
 * @param {...number} args
 * @example
 * product(1, 2, 3); // 6
 */
export const product = (...args: number[]): number =>
  args.reduce((a, b) => a * b);

/**
 * Performs a modulo operation akin to that of Python.
 * @see {@link https://docs.python.org/3.3/reference/expressions.html#binary-arithmetic-operations}
 * @param {number} a
 * @param {number} b
 * @example
 * mod(-2, 20); // 18
 */
export const mod = (a: number, b: number): number => ((a % b) + b) % b;

/**
 * Groups values in an array of objects by the provided property.
 * @param {T[]} array
 * @param {string} property
 * @return {IDictionary<T[]>} A dictionary with the key being the property and the value being the objects grouped by the provided property.
 * @example
 * const x = [{
 *   name: "Ivan",
 *   company: "Google"
 * },
 * {
 *   name: "Kenny",
 *   company: "Google"
 * },
 * {
 *   name: "Joseph",
 *   company: "Amazon"
 * }];
 *groupBy(x, "company");
 *
 * {
 *   "Google": [{
 *     "name": "Ivan",
 *     "company": "Google"
 *   },
 *   {
 *     "name": "Kenny",
 *     "company": "Google"
 *   }],
 *   "Amazon": [{
 *     "name": "Joseph",
 *     "company": "Amazon"
 *   }]
 * }
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
 * @example
 * repeat(3, () => console.log("x")); // xxx
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
 * @example
 * generateArray(3, []); // [[], [], []]
 */
export const generateArray = (length: number, value: any): any[] => {
  return JSON.parse(JSON.stringify(Array.from({ length }, () => value)));
};

/**
 * Returns the last `N` elements of an array. If 1 is specified, it returns only the last element.
 * @param {any[]} arr
 * @param {number} n
 * @example
 * end(2, [1, 2, 3]); // [2, 3]
 */
export const end = (arr: any[], n: number): any | any[] => {
  const slice = arr.slice(arr.length - n);
  if (n === 1) return slice[0];
  return slice;
};

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
 * @example
 * randInt(1, 20); // 18
 */
export const randInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Gets a random element of an array.
 * @param {any[]} arr
 * @example
 * sample([1, 2, 3]); // 2
 */
export const sample = (arr: any[]): any => arr[randInt(0, arr.length - 1)];

/**
 * Generates a string composed of `n` random characters.
 * @param {number} n
 * @example
 * generateRandomString(5); // "AXRF0"
 */
export const generateRandomString = (n: number): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let res = "";
  while (n--) res += sample(characters.split(""));
  return res;
};

/**
 * Combines two arrays into one, similar to the Python `zip` function.
 * @see https://docs.python.org/3.3/library/functions.html#zip
 * @param {any[]} a
 * @param {any[]} b
 * @example
 * const a = [1, 2, 3];
 * const b = ["a", "b", "c"];
 * zip(a, b); // [[1, "a"], [2, "b"], [3, "c"]]
 */
export const zip = (a: any[], b: any[]): any[][] => {
  const res = [];
  a.forEach((e, i) => {
    if (b[i]) res.push([e, b[i]]);
  });
  return res;
};

/**
 * Gets an array that contains the elements that are present in the array `a`, but not in the array `b`.
 * @param {any[]} a
 * @param {any[]} b
 * @example
 * difference([1, 2, 3], [2, 3, 4]); // [1]
 */
export const difference = (a: any[], b: any[]): any[] =>
  [...a].filter((x) => [...b].indexOf(x) < 0);

/**
 * Gets the number of elements in an array that conform to the given condition.
 * @param {any[]} arr
 * @param {Function} condition
 * @example
 * count([1, 2, 3], (x) => x > 2); // 1
 */
export const count = (arr: any[], condition: (e: any) => boolean) =>
  arr.filter(condition).length;

/**
 * Abbreviates large numbers with SI symbols.
 * @param {number} val
 * @example
 * abbreviateNumber(14568); // "14.6k"
 */
export const abbreviateNumber = (val: number): string => {
  const tier = (Math.log10(Math.abs(val)) / 3) | 0;
  if (tier === 0) return val.toString();
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = val / scale;
  return scaled.toFixed(1) + suffix;
};

/**
 * Creates an acronym of a given string.
 * @param {string} txt
 * @example
 * acronym("Sir Isaac Newton"); // "SIN"
 */
export const acronym = (txt: string) =>
  txt
    .split(" ")
    .map((item) => item[0])
    .join("");

/**
 * Finds the common elements of two arrays.
 * @param {any[]} a
 * @param {any[]} b
 * @example
 * common([1, 2, 3], [2, 3, 4]); // [2, 3]
 */
export const common = (a: any[], b: any[]) => a.filter((e) => b.includes(e));

/*
 * Creates a random hex color value.
 * @example
 * randomColorHex(); // "#2a30fd"
 */
export const randomColorHex = (): string =>
  "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));

/**
 * Cuts a text off at a certain length, ending it with three dots.
 * @param {string} text
 * @param {number} length
 * @example
 * textEllipsis("hello", 3); // "hel..."
 */
export const textEllipsis = (
  text: string | null | undefined,
  length: number
): string => {
  if (text) {
    if (text.length <= length) return text;
    return `${text.substring(0, length)}...`;
  }
  return "";
};

/**
 * Lightens or darkens a hex color value by a certain percentage, negatives values for darker and positive ones for lighter tones.
 * @param {string} color
 * @param {number} percent
 * @example
 * shadeColor("#c72c2c", -40); // "#771a1a"
 * shadeColor("#c72c2c", 40); // "#ff3d3d"
 */
export function shadeColor(color: string | undefined, percent: number): string {
  if (color) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);
    R = parseInt(((R * (100 + percent)) / 100).toString());
    G = parseInt(((G * (100 + percent)) / 100).toString());
    B = parseInt(((B * (100 + percent)) / 100).toString());
    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;
    const RR =
      R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
    const GG =
      G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
    const BB =
      B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
    return "#" + RR + GG + BB;
  }
  return "#000000";
}

/**
 * Purges the provided array of falsy values.
 * @param {any[]} arr
 * @example
 * onlyTruthy([1, 2, 3, false, undefined, 4]); // [1, 2, 3, 4]
 */
export const onlyTruthy = (arr: any[]) => arr.filter((e) => !!e);

/**
 * Purges the provided array of truthy values.
 * @param {any[]} arr
 * @example
 * onlyFalsy([1, 2, 3, false, undefined, 4]); // [false, undefined]
 */
export const onlyFalsy = (arr: any[]) => arr.filter((e) => !!!e);

/**
 * Calculates the difference of an unspecified amount of inputs.
 * @param {...number} args
 * @example
 * diff(1, 2, 3); // -4
 */
export const diff = (...args: number[]) => args.reduce((a, b) => a - b);

/**
 * Divides an unspecified amount of inputs.
 * @param {...number} args
 * @example
 * div(1, 2, 3); // 0.1666666666666667
 */
export const div = (...args: number[]) => args.reduce((a, b) => a / b);
