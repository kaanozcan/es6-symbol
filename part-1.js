"use strict"

require("babel-core/register");

let sym = Symbol("no more collisions");
let sym1 = Symbol("no more collisions");

console.log(sym === sym1); //false

let myObj = {};
myObj[sym] = "no more collisions";
myObj[sym1] = "no more indeed";

console.log(myObj[sym]); //no more collisions
console.log(myObj[sym1]); //no more indeed

let sym2 = Symbol.for("global");
let sym3 = Symbol.for("global");

myObj[sym2] = "what value";
myObj[sym3] = "will we get?";

console.log(myObj[sym2]); //will we get?
console.log(myObj[sym3]); //will we get?

myObj.someOtherKey1 = "some other key 1";
myObj.someOtherKey2 = "some other key 2";
myObj.someOtherKey3 = "some other key 3";

console.log(Object.keys(myObj)); //[ 'someOtherKey1', 'someOtherKey2', 'someOtherKey3' ]
console.log(Object.getOwnPropertyNames(myObj)); //[ 'someOtherKey1', 'someOtherKey2', 'someOtherKey3' ]
console.log(Object.getOwnPropertySymbols(myObj)); //[ Symbol(no more collisions), Symbol(no more collisions), Symbol(global) ]



