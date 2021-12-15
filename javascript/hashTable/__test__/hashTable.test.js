"use strict";

const { HashedTable } = require("../hashTable");

describe("hashTable test", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    const myHash = new HashedTable(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.map).toEqual([
      ,
      ,
      ,
      {
        head: {
          next: { next: null, value: { damen: "153" } },
          value: { naser: "759" },
        },
      },
      { head: { next: null, value: { samer: "599" } } },
      { head: { next: null, value: { rakan: "4569" } } },
      ,
      ,
      ,
      {
        head: {
          next: { next: null, value: { ahmed: "075" } },
          value: { omar: "1" },
        },
      },
    ]);
  });
  it("Retrieving based on a key returns the value stored", () => {
    const myHash = new HashedTable(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.get("rakan")).toEqual("4569");
  });
  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    const myHash = new HashedTable(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.contains("mishmish")).toBe(undefined);
  });
  it("Successfully handle a collision within the hashtable", () => {
    const myHash = new HashedTable(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.get("omar")).toEqual("1");
  });
  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    const myHash = new HashedTable(10);

    myHash.add("omar", "1");
    myHash.add("ahmed", "075");
    myHash.add("samer", "599");
    myHash.add("naser", "759");
    myHash.add("rakan", "4569");
    myHash.add("damen", "153");

    expect(myHash.get("omar")).toEqual("1");
  });
  it("Successfully hash a key to an in-range value", () => {
    const myHash = new HashedTable(10);
    let hash = myHash.hash("ahmed");
    let range = hash >= 0 && hash <= 10;
    expect(typeof hash).toBe("number");
    expect(range).toBe(true);
  });
});
