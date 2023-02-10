const sum = (...numbers: number[]): number => {
  return numbers.reduce((totle, number) => totle + number, 0);
};

export default sum;