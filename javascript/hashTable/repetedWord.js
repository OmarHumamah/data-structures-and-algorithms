const hashTable = require("./hashTable");

const repeatedWord = (str) => {
  const storeHashTable = new hashTable(1024);
  let count = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      let index = storeHashTable.hash(count);
      if (storeHashTable.map[index]) return count;
      else storeHashTable.add(count, 1);
      count = "";
    } else {
      if (str[i] === "," || str[i] === "." || str[i] === ";" || str[i] === "_")
        continue;
      else count += str[i].toLowerCase();
    }
  }
};

module.exports = repeatedWord;