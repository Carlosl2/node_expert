const {crearArchivo } = require('./helpers/multiplicar');  //ruta al archivo de multiplicacion 

const argv = require('./config/yargs');  // de esta manera se importa desde el archivo config/yargs.js la funcion que se esta exporando 
console.clear(); 

crearArchivo(argv.b) //parametro en la funcion -b 

.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err => console.log(err)); 