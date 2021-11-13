const linkedList = require("../index");

describe("kthFromEnd test", () => {
  it("Where k is greater than the length of the linked list", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    expect(linkedList.kthFromEnd(6)).toBeNull();
  });
  it("Where k and the length of the list are the same", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    expect(linkedList.kthFromEnd(4)).toEqual(linkedList.length - 4 /*from the test before*/);
  });
  it("Where k is not a positive integer", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    expect(linkedList.kthFromEnd(-6)).toBeNull();
  });
  it("Where the linked list is of a size 1", () => {
    linkedList.append(1);
    expect(linkedList.kthFromEnd(0)).toEqual(1);
  });
  it("“Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    linkedList.append(3);
    expect(linkedList.kthFromEnd(3)).toEqual(3);
  });
});