const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (numero = 5) => {

    try {
        console.log('=========================='.rainbow);
        console.log(`     Tabla del ${numero}  `.rainbow);
        console.log('=========================='.rainbow);

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${numero} x ${i}=${numero * i}\n`; // el += funciona como un acumulador
            console.log(salida.rainbow);

        }

        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);  // generacion del archivo  cuando un archivo no tiene un path toma por defector su ubicacion actual 

        return (`tabla-${numero}.txt creado`.rainbow);



    } catch (err) {

        throw err;

    }


}

module.exports = {
    crearArchivo  // crearArchivo se cambio por crear_archivo :crearArchivo  porque es redundante 

}