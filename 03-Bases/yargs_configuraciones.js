const { crearArchivo } = require('./helpers/multiplicar')

const argv = require('yargs') // el option permite configurar los comandos 
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        default: false

    })
    .argv;


crearArchivo(argv.b)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));

// por medio de la function option se puede configurar los comandos  
// al ejectuar el comando node yargs_configuraciones -b 5 se envia el parametro de la base con un valor numerico 5 

//console.log(argv); 
