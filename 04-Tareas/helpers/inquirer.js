const inquirer = require('inquirer'); //importe de la libreria que hace la funcion de fechas y numeros del menu 
const colors = require('colors');



const preguntas = [ //arreglo que espera el inquirerMenu para ejecutar 
    {
        type: 'list', //tipo de valores que espera 
        name: 'opcion', // nombre de la opcion que va en choinces
        message: 'Que desea hacer ? ', // pregunta que se dispara al inciar 
        choices: // las opciones se puede usar por medio de los numero del teclado o las flechas direccionales 
        [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tareas(s)'
            },
            {
                value: '6',
                name: '5. Borrar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },

        ]  //las opciones pueden enviar como strings o como  objetos

    }
]
const pausa =async()=>{
    const question = [
        {
            type: 'input',
            name: 'opcion', 
            message: `\n Presione ${'Enter'.green} para continuar ... `
        }
    ]

    await inquirer.prompt(question)

}


const inquirerMenu = async () => { //funcion asincrona que pinta el menu
    //  console.clear();
    console.log('============================='.rainbow);
    console.log('      Seleccione Opcion '.rainbow)
    console.log('=============================\n'.rainbow)

    const {opcion} = await inquirer.prompt(preguntas)   //esperamos el valor del await   y se aplica desestructura en el objeto que viene desde inquirer 

    return opcion  //toda promesa debe devolver un valor 
}

const leerInput = async (message) => 

    {
        const question = [
            {
                type: 'input', 
                name:'desc', 
                message         //solo se escribe message porque EMA script asume que es el valor recibido el igual al asignado message:message
            }

        ]
    }    


module.exports = {
    inquirerMenu,
    pausa
}