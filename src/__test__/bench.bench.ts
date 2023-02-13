import { bench } from 'vitest';



/// API bench
bench(
  'normal sorting',
  () => {
    const x = [1, 5, 4, 2, 3]
    x.sort((a, b) => a - b)
  },
  { time: 1000 }
);


/// API bench.skip
bench.skip(
  "skipp this test", () => {
    const x = [2, 5, 4, 1, 3,];
    x.sort((a, b,) => b - a)
  }
);


/// API bench.only
// bench.only(
  bench(
  "only this bench test will be excuted", () => {
    const x = [1, 5, 4, 2, 3];
    x.sort((a, b) => a - b);
  }
);


/// API bench.todo
bench.todo("unimplemented  test");