
const { red } = require('colors');
const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {

    return new Promise((resolve => {
        console.clear();
        console.log('============================='.rainbow);
        console.log('      Seleccione Opcion '.rainbow)
        console.log('=============================\n'.rainbow)

        console.log(`${'1. '.green} Crear Tarea:`);
        console.log(`${'2. '.green} Editar Tareas:`);
        console.log(`${'3. '.green} Listar Tareas Completadas:`);
        console.log(`${'4. '.green} Listar Tareas Pendientes:`);
        console.log(`${'5. '.green} Completar tarea(s):`);
        console.log(`${'6. '.green} Borrar Tarea:`);
        console.log(`${'7. '.green} Salir \n`);

        const readline = require('readline').createInterface({   //se realiza una funcion para recibir datos del usuario
            input: process.stdin,  // entrada 
            output: process.stdout //salida
        });

        readline.question('Seleccione una upcion: ', (opt) => { // el opt es la respuesta que espera el usuario pero en un callback
            //console.log({opt})
            readline.close();
            resolve(opt);
        })

    }))



}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`\n Presione ${'Enter'.green} para continuar ... `, (opt) => {
            readline.close();
            resolve(opt);
        })

    })


}

module.exports = {
    mostrarMenu,
    pausa
}