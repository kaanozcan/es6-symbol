"use strict"

require("babel-core/register");

let sym = Symbol("no more collisions");
let sym1 = Symbol.for("global");
let sym2 = Symbol.for("global");

let myObj = {};

myObj[sym] = "no more collisions";
myObj[sym1] = "what value";
myObj[sym2] = "will we get?";

myObj.someOtherKey1 = "some other key 1";
myObj.someOtherKey2 = "some other key 2";
myObj.someOtherKey3 = "some other key 3";

console.log("\n\n");
console.log("myObj[sym1]: ", myObj[sym1]); //will we get?
console.log("myObj[sym2]: ", myObj[sym2]); //will we get?

console.log("Object.keys: ", Object.keys(myObj)); //[ 'someOtherKey1', 'someOtherKey2', 'someOtherKey3' ]
console.log("Object.getOwnPropertyNames: ", Object.getOwnPropertyNames(myObj)); //[ 'someOtherKey1', 'someOtherKey2', 'someOtherKey3' ]
console.log("Object.getOwnPropertySymbols: ", Object.getOwnPropertySymbols(myObj)); //[ Symbol(no more collisions), Symbol(global) ]



