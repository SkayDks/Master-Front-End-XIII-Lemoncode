import { isLowerThanFive, isLowerThanFive2, max } from './business';

export const add = (a, b) => {
  const result = a + b;
  if (result < 5) {
    isLowerThanFive(result);
  }
  return result;
};
export const add2max = (a, b) => {
  const result = a + b;
  if (result < max) {
    isLowerThanFive2(result, max);
  }
  return result;
};

export const add2 = (a, b, isLowerThanFive) => {
  const result = a + b;
  if (result < 5) {
    isLowerThanFive(result);
  }
  return result;
};
