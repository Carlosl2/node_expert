require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');


const main = async () =>  //funcion asincronica que desplegara la plicacion al ejecutarla 
{
    let opt = '';

    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();   //resultado de la promesa que se envia desde la funcion en el archivo inquirer 
        switch (opt) {
            case '1':

                //code

            break;

            case '2':

                console.log(tareas._listado); 

            break;
            case '3':

                //code

            break;
            case '4':

                //code

            break;
            case '5':

                //code

            break;
            case '6':

                //code

            break;

            case '0':

                //code

            break;

        }

        if (opt !== '0') {
            await pausa();
        }


    } while (opt !== '0')


}

main();
