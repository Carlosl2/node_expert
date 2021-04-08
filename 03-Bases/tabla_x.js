const { describe } = require('yargs');
const {crearArchivo} = require ('./helpers/tabla_x'); 
const argv = require('yargs')
.option('b', {
    alias:'base', 
    type :'number', 
    demandOption : true,
    describe:'Base denominada numero'
})
.option('h',{
    type:'number', 
    demandOption:true, 
    describe:'Fin del recorrido del ciclo'
})
.argv; 

crearArchivo(argv.b,argv.h)
.then (nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err))