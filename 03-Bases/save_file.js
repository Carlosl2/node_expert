const fs = require('fs'); 

console.clear(); 

console.log('=========================='); 
console.log('     Tabla del 5'); 
console.log('=========================='); 

const numero = 6; 
let salida ='';

for (let i = 1; i <= 10; i++) {
    salida += `${numero} x ${i}=${numero*i}\n`; // el += funciona como un acumulador
    console.log(salida); 
}

fs.writeFileSync(`tabla-${numero}.txt`,salida);  // generacion del archivo  cuando un archivo no tiene un path toma por defector su ubicacion actual 

console.log(`tabla-${numero}.txt creado`); 