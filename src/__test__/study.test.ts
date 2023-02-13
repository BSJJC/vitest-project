import { describe, it, expect } from "vitest";
import sum from "../utils/sum";
import { asyncFun, resoledFun } from "../utils/testFunctions";


/// API    test()
describe(
  "#API test", () => {
    it("should return 6", () => {
      expect(sum(1, 2, 3, 4, 5))
        .toBe(15)
    })
  }
);

/// API    test.skip()
describe(
  "#API test.skip", () => {
    it.skip("shouldn't be executed", () => {
      throw new Error("this test should not be excuted!")
    })
  }
);

/// API    test.skipIf
describe(
  "#API test.skipIf", () => {
    const judge = true;
    it.skipIf(judge)("runs only when judge equals to true", () => {
      //  judge is now true, so that this method WILL NOT be excuted
    })
  }
);

/// API    test.runIf
describe(
  "#API test.runIf", () => {
    const judge = true;
    it.runIf(judge)("runs only when judge equls to true", () => {
      //  judge is now true, so that this methods WILL be excuted
    })
  }
);

/// API    test.only
describe(
  "#API test.only", () => {
    // it.only("ONLY this method will be excuted in this file", () => {
    it("ONLY this method will be excuted in this file", () => {
      // all the other tests in this file is skipped
    })
  }
);
/*** 
 * 有时候只执行一个特定文件中的 only 测试用例是很有用的
 * 这可以忽略整个测试套件中的所有其他测试用例，避免污染输出
 * 为了做到这一点，运行 vitest 命令并带上包含有问题的测试的特定文件
 * example 
 * vitest oneTestFile.test.ts
*/


/// API    concurrent
describe(
  "#API concurrent", () => {
    it(
      "serial test", async () => {
        await asyncFun(3)
          .then(data => {
            expect(data)
              .toEqual({ msg: 'OK' })
          })
      }
    );

    it.concurrent(
      "concurerent test 1", async () => {
        await asyncFun(5)
          .then(data => {
            expect(data)
              .toEqual({ "msg": "OK" })
          })
      }
    )

    it.concurrent(
      "concurrent test 3", async () => {
        await asyncFun(10)
          .then(data => {
            expect(data)
              .toEqual({ "msg": "OK" })
          })
      }
    )
  }
);


/// API    todo
it.todo("here left something to do!!");


/// API    test.fails
describe(
  "#API it.fails", () => {
    it.fails("fail test", async () => {
      await expect(resoledFun())
        .rejects
        .toBe(1)
    })
  }
);

/// API test.each
describe(
  "#API test.each", () => {
    // array
    it.each(
      [
        [1, 5, 6],
        [1, 8, 9],
        [4, 10, 14]
      ]
    )
      (`add($i + $i)  -> $i`, (a, b, expected) => {
        expect(a + b)
          .toBe(expected)
      });

    // object 1
    it.each(
      [
        { a: 1, b: 2, expected: 3 },
        { a: 3, b: 9, expected: 12 },
        { a: -5, b: 100, expected: 95 },
      ]
    )
      (`add($a, $b) -> $expected`, ({ a, b, expected }) => {
        expect(a + b)
          .toBe(expected)
      })

    // object 2
    it.each
      `
    a                     | b           | expected
    ${{ val: 1 }}  | ${"a"} | ${"1a"}
    ${{ val: 2 }} | ${"b"} | ${"2b"}
    ${{ val: 3 }} | ${"c"} | ${"3c"}
    `
      (`add($a + $b) -> $expected`, ({ a, b, expected }) => {
        expect(a.val + b)
          .toBe(expected)
      })

    // object 3
    it.each
      `
      a                                      | b                       | expected
      ${1}                                | ${100}              | ${101}
      ${"hello "}                    | ${"there"}       | ${"hello there"}
      ${[]}                              | ${"test"}          | ${"test"}
      ${{}}                             | ${"temple"}    | ${"[object Object]temple"}
      ${{ number: 1 }}         | ${"pass"}         | ${"[object Object]pass"}
      `
      (`expected $expected when $a can be added to $b`, ({ a, b, expected }) => {
        expect(a + b)
          .toBe(expected)
      })
  }
);