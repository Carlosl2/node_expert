const { crearArchivo } = require('./helpers/multiplicar');

//console.clear(); 

//console.log(process.argv);

//desectructurando objetos , solo traemos el tercer argumento de la ejecucion en consola de la linea node informacion_linea-comandos ==base= 10
const [, , arg3 = 'base=5'] = process.argv;

const [, numero = 5] = arg3.split('='); //se crea una constante para desectructurar el valor base = 10 (o el numeo que se envie), de divide en dos objetos del arreglo 
                                        //1. numero y 2. numero  el igual se omite por el split 
console.log(numero); 

crearArchivo(numero) //ejecutar la promesa que existe en el otro archivo
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));