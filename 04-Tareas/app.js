require('colors');

//const {mostrarMenu, pausa} = require('./helpers/mensajes')
const { inquirerMenu,pausa } = require('./helpers/inquirer')


const main = async () =>  //funcion asincronica que desplegara la plicacion al ejecutarla 
{
    let opt =''; 
    do{
        opt = await inquirerMenu();   //resultado de la promesa que se envia desde la funcion en el archivo inquirer 
       
        console.log({opt});  // ver el resultado del await en la consola

        if(opt !=='0')
        {
            await pausa();
        }
       

    }while (opt !== '0')
    

}

main();
