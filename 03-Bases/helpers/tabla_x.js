const fs = require('fs'); //import del paquete de crear archivos
const colors = require('colors'); //import de  el paquete de colores

const crearArchivo = async (numero = 1, fin =2) =>{ //funcion async 

try {
    console.log('=========================='.rainbow);
    console.log(`     Tabla del ${numero}  `.rainbow);
    console.log('=========================='.rainbow);

    let salida; 

    for (let i = 1; i <= fin; i++) { //ciclo 

        salida += `${numero} x ${i} = ${numero *i}\n`; 
        console.log(salida.rainbow);     

    }
    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);

    return (`tabla-${numero}.txt creada`.rainbow)


} catch (error) {
    throw error; //envio del error a la funcion asyncrona  

}

}


module.exports = {
    crearArchivo  // crearArchivo se cambio por crear_archivo :crearArchivo  porque es redundante 

}