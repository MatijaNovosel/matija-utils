export const intersect = (a, b) => {
  const setB = new Set(b);
  return [...new Set(a)].filter((x) => setB.has(x));
};

export const chunk = (arr, chunkSize) => {
  const result = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize)
    result.push(arr.slice(i, i + chunkSize));
  return result;
};

export const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

export const splitByValue = (arr, val) => {
  const result = [[]];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == val) result.push([]);
    else result[result.length - 1].push(arr[i]);
  return result;
};

export const sum = (...args) => args.reduce((a, b) => a + b);
