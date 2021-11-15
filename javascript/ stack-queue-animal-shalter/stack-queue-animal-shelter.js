'use strict';

class AnimalShelter {

  constructor() {
    this.storage = new Array();
  }
  
  enqueue(animal) {
    this.storage.push(animal);
  }
  
  dequeue(pref) {
   if(pref === 'dog' || pref === 'cat'){
     
     return  this.storage.shift();
   }
   return null
  }

}


module.exports = AnimalShelter;