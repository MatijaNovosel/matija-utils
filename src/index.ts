export const intersect = (a: any[], b: any[]) => {
  const setB = new Set(b);
  return [...new Set(a)].filter((x) => setB.has(x));
};

export const chunk = (arr: any[], chunkSize: number) => {
  const result = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize)
    result.push(arr.slice(i, i + chunkSize));
  return result;
};

export const range = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(0)
    .map((_, idx) => start + idx);
};

export const splitByValue = (arr: any[], val: any) => {
  const result = [[]];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == val) result.push([]);
    else result[result.length - 1].push(arr[i]);
  return result;
};

export const sum = (...args: number[]) => args.reduce((a, b) => a + b);

export const product = (...args: number[]) => args.reduce((a, b) => a * b);

export const mod = (a: number, b: number) => ((a % b) + b) % b;
