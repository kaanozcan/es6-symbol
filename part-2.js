"use strict"

require("babel-core/register");

var utils = (function (){
  var inspectSym = Symbol();

  return {
    symbols: {
      inspect: inspectSym
    },
    log(value){
      if(typeof value[this.symbols.inspect] === "function"){
        console.log(value[this.symbols.inspect](value));
      } else {
        console.log(value);
      }
    }
  }
})();

utils.log("sup yo");

var myLogObject = {
  error: 'Uncaught ReferenceError: mySuperCoolObject is not defined',
  line: 27
};

myLogObject[utils.symbols.inspect] = function (log){
  return `I got '${log.error}' at line ${log.line}`
};

utils.log(myLogObject);

