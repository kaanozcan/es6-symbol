"use strict"

require("babel-core/register");

class mySuperCoolyDoolyCollectionLikeThingy{
  *[Symbol.iterator](){
    var i = 0;

    while(this[i] !== undefined){
      yield this[i] * 2;
      ++i;
    }
  }
}

let shorterNamePlease = new mySuperCoolyDoolyCollectionLikeThingy();

shorterNamePlease[0] = 1;
shorterNamePlease[1] = 2;

for(let value of shorterNamePlease) {
  console.log(value); // 2, then 4
}