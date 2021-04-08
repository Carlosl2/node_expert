const argv = require('yargs').argv; 

console.clear(); 

console.log('=========================='); 
console.log('     Tabla del 5'); 
console.log('=========================='); 

const numero = 10; 
let valor =''; 

for (let i = 1; i <= 10; i++) {
    valor = `${numero} x ${i}=${numero*i}`; 
    console.log(valor); 
}