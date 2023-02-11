import { describe, it, expect } from "vitest";
import sum from "../utils/sum";


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

/// API test.runIf
describe(
  "#API test.runIf", () => {
    const judge = true;
    it.runIf(judge)("runs only when judge equls to true", () => {
      //  judge is now true, so that this methods WILL be excuted
    })
  }
);

/// API test.only
describe(
  "#API test.only", () => {
    // it.only("ONLY this method will be excuted in this file", () => {
    it("ONLY this method will be excuted in this file", () => {
      // all the other tests in this file is skipped
    })
  }
);

