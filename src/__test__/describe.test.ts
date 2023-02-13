import { describe, it, expect } from "vitest";

describe.each(
  [
    { a: 1, b: 1, expected: 2 },
    { a: 0, b: 3, expected: 3 },
    { a: 2, b: 1, expected: 3 }
  ]
)
  (`describe object add($a, $b)`, ({ a, b, expected }) => {
    it(`it returns ${expected}`, () => {
      expect(a + b)
        .toBe(expected)
    });

    it(`returned value not be greater  than ${expected}`, () => {
      expect(a + b)
        .not.toBeGreaterThan(expected)
    });

    it(`returned value not be less than ${expected}`, () => {
      expect(a + b)
        .not
        .toBeLessThan(expected)
    });
  });


describe.each
  `
  a                                |  b                              |  expected
  ${1}                          |  ${1}                         |  ${2}
  ${"a"}                     |  ${"b"}                     |  ${"ab"}
  ${[]}                        |  ${"test"}                |  ${"test"}
  ${{}}                       |  ${"temp"}              |  ${"[object Object]temp"}
  ${{ msg: "OK" }}  |  ${{ msg: "NO" }}  |  ${'[object Object][object Object]'}
  `
  (`describe object string add($a, $b)`, ({ a, b, expected }) => {
    it(`returns ${expected}`, () => {
      expect(a + b)
        .toBe(expected)
    })
  })