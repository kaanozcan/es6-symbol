"use strict"

require("babel-core/register");

var sym = {
  no: Symbol(),
  more: Symbol(),
  collisions: Symbol()
};

var myObj = {};

myObj[sym.no] = "no";
myObj[sym.more] = "more";
myObj[sym.collisions] = "collisions";

var symList = Object.getOwnPropertySymbols(myObj);

for(let sym of symList){
  console.log(myObj[sym]);
}

