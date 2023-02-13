import { bench } from 'vitest';

bench(
  'normal sorting',
  () => {
    const x = [1, 5, 4, 2, 3]
    x.sort((a, b) => a - b)
  },
  { time: 1000 }
);

bench.skip(
  "skipp this test", () => {
    const x = [2, 5, 4, 1, 3,];
    x.sort((a, b,) => b - a)
  }
)