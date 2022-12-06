export const intersect = (a, b) => {
  const setB = new Set(b);
  return [...new Set(a)].filter((x) => setB.has(x));
};
