
const {crearArchivo} =require('./helpers/multiplicar') //aqui estamos recibiendo el nombre del objeto crear_archivo desde el archivo de helpers 


console.clear(); 

let numero=15; 

crearArchivo (numero)
.then(nombreArchivo=> console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err)); 