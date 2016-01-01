"use strict"

require("babel-core/register");

class mySuperCoolyDoolyCollectionLikeThingy{
  *[Symbol.iterator](){
    var i = 0;

    while(this[i] !== undefined){
      yield this[i];
      ++i;
    }
  }
}

let shorterNamePlease = new mySuperCoolyDoolyCollectionLikeThingy();

shorterNamePlease[0] = 1;
shorterNamePlease[1] = 2;

for(let value of shorterNamePlease) {
  console.log(value); // 1, then 2
}