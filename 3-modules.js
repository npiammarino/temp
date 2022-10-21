// MODULES
// CommonJS, every file is module (by default)
// Modules - Escapulated Code (only share minimum)

const names = require('./4-firstModule');
const greetings = require('./5-secondModule');
const data = require('./6-alternativeExport');
require('./7-mindGrenade');

const sayHi = function(name){
    console.log(`Hello there ${name}`);
}

// console.log(names);
// console.log(greetings);
// console.log(data);

// sayHi(names.john);
// sayHi(names.peter);
// sayHi(names.susan);
// sayHi(data.person.name);
