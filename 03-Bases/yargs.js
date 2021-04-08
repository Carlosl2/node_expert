const argv = require('yargs').argv;  //importacion de yargs

console.log(process.argv); //lectura de valores por el process
console.log(argv);  //lectura de valores por medio de yargs 

console.log(argv.base); 
// el coamndo --version y --help ya estan registradas por defecto en yargs 