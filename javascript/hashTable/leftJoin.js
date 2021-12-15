"use strict";

function leftJoin(hash1, hash2) {
  let leftJoinArr = [];
  let output = [];
  for (let i = 0; i < hash1.map.length; i++) {
    output = [];
    if (hash1.map[i]) {
      const leftKey = Object.keys(hash1.map[i].head.value);
      const leftVal = Object.values(hash1.map[i].head.value);
      output = output.concat(leftKey);
      output = output.concat(leftVal);
      if (hash2.map[i]) {
        const rightKey = Object.keys(hash2.map[i].head.value);
        const rightVal = Object.values(hash2.map[i].head.value);
        if (rightKey[0] === leftKey[0]) {
          output = output.concat(rightVal);
        }
      } else {
        output.push("empty");
      }

      leftJoinArr.push(output);
    }
  }
  return leftJoinArr;
}

module.exports = leftJoin;
