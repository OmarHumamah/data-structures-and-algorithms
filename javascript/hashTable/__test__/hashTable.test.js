"use strict";

const HashMap = require("../hashTable");

describe("hashTable test", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    const myHash = new HashMap(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.map).toEqual([
      undefined,
      undefined,
      undefined,
      [{ naser: "759" }, { damen: "153" }],
      [{ samer: "599" }],
      [{ rakan: "4569" }],
      undefined,
      undefined,
      undefined,
      [{ omar: "1" }, { ahmed: "075" }],
    ]);
  });
  it("Retrieving based on a key returns the value stored", () => {
    const myHash = new HashMap(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.get("rakan")).toEqual([{ rakan: "4569" }]);
  });
  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    const myHash = new HashMap(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.contain("mishmish")).toBe(null);
  });
  it("Successfully handle a collision within the hashtable", () => {
    const myHash = new HashMap(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.get("ahmed")).toEqual([{ omar: "1" }, { ahmed: "075" }]);
  });
  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    const myHash = new HashMap(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.get("ahmed")).toEqual([{ omar: "1" }, { ahmed: "075" }]);
  });
  it("Successfully hash a key to an in-range value", () => {
    const myHash = new HashMap(10);
    let hash = myHash.hash("ahmed");
    let range = hash >= 0 && hash <= 10;
    expect(typeof hash).toBe("number");
    expect(range).toBe(true);
  });
});
