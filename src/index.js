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
