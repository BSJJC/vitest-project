import sum from "../utils/sum";
import { describe, it, expect } from "vitest";

describe(
  "#sum", () => {
    it("returns 6", () => {
      expect(sum(1, 2, 3))
        .toBe(6)
    });
  }
);