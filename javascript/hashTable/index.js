'use strict';

const hashMap = require('./hashTable.js');

const myHash = new hashMap(10);

myHash.add('omar', '1');
myHash.add('ahmed', '075');
myHash.add('samer', '599');
myHash.add('naser', '759');
myHash.add('rakan', '4569');
myHash.add('damen', '153');

console.log(JSON.stringify(myHash));

myHash.map.forEach(ll => {
   console.log(ll);
});


console.log(myHash.get('ahmed'));
console.log(myHash.contain('mishmish'));
console.log(myHash.contain('omar'));
