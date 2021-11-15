"use strict";

const animalShelter = require("../Index");

describe("Pseudo Stack and Queue", () => {
  it("if animal class enqueuing", () => {
    animalShelter.enqueue({ animal: "cat" });
    animalShelter.enqueue({ animal: "dog" });
    animalShelter.enqueue({ animal: "cow" });

    animalShelter.enqueue({ animal: "cat" });

    expect(animalShelter.storage[3]).toEqual({ animal: "cat" });
  });

  it("if animal class dequeuing while pref is cat or dog", () => {
    animalShelter.dequeue("cat");
    animalShelter.dequeue("dog");

    console.log(animalShelter);
    expect(animalShelter.storage[0]).toEqual({ animal: "cow" });
  });

  it("if animal class dequeuing while pref is not cat or dog", () => {
    expect(animalShelter.dequeue({ animal: "cow" })).toEqual(null);
    expect(animalShelter.storage[0]).toEqual({ animal: "cow" });
  });
});
