import { expect, test } from "vitest";
import { compareVersions } from "../src/utils/compare";

test("Compare versions", () => {
  expect(compareVersions("v1.2.3", "v1.2.4")).toBe(-1);
  expect(compareVersions("1.2.3", "1.2.3")).toBe(0);
  expect(compareVersions("1.2.4", "1.2.3")).toBe(1);
});