//funcion tradicional 

function sumar (a,b)
{
    return a+b; 
}
console.log(sumar(5,2)); 

//funcion con un parametro no obligatorio 

function suma(a,b=10){
    return a+b; 
}
console.log(suma(1));


// funcion de flecha cuando solo retorna un valor 

const suma_ = (a,b) => a+b; 

console.log(suma_(12,1)); 

//funcion de flecha sin parametros retornando un valor 

const saludar =() => 'Hola mundo'; 
console.log(saludar()); 









