const { HashedTable } = require("../hashTable");
let leftJoin = require("../leftJoin");

describe("Left Join test", () => {
  it("Return left join between two hashTables", () => {
    let table1 = new HashedTable(50);
    table1.add("fond", "enamored");
    table1.add("warth", "anger");
    table1.add("diligent", "employed");
    table1.add("outfit", "garb");
    table1.add("guide", "usher");

    let table2 = new HashedTable(50);
    table2.add("fond", "averse");
    table2.add("warth", "delight");
    table2.add("diligent", "idle");
    table2.add("guide", "follow");
    table2.add("flow", "jam");

    let expected = [
      ["warth", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["guide", "usher", "follow"],
      ["fond", "enamored", "averse"],
      ["outfit", "garb", "empty"],
    ];

    expect(leftJoin(table1, table2)).toEqual(expected);
  });
});
