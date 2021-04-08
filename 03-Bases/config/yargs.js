const argv = require('yargs')
                .option ('b', {
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe:'es la base de la tabla'

                 })
                 .option('l',{
                     alias:'listar', 
                     type:'boolean', 
                     demandOption: true, 
                     default: false,
                     describe:'Es la lista'

                 })
                 .check((argv,options)=>{
                     if(isNaN(argv.b)){
                         throw 'Error la base tiene que ser numerica'
                     }
                     return true; 
                 })
                 .argv; 

module.exports=argv;  