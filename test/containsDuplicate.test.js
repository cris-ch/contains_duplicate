const containsDuplicate = require("../src/containsDuplicate");

describe("containsDuplicate", () => {
  it("should return true if the array contains duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("should return false if the array does not contain duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it("should return true if the array contains duplicate", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it("should return false if the array is empty", () => {
    expect(containsDuplicate([])).toBe(false);
  });
});
