console.log('Inicio'); //1       1

setTimeout(()=>{
    console.log('primero'); //5
},300); 

setTimeout(()=>{
    console.log('segundo'); //2   //3
},0); 

setTimeout(()=>{
    console.log('tercero');//3      //4
},0); 
console.log('Fin'); //4           2
// es el orden que todos pensamos. 

//pero por el non-blocking y el asincrono de js se ejectan en el orden

//el orden del motor de ejecucion en node es el siguiente
// primero: pila de procesos (call stack)
//segundo:  se utiliza si existe una funcion que espere un valor asincrono  y esta seccion se llama Node apis 
//tecero: cola de callbacks se utiliza cuando las peticiones en Node apis ha finalizado y se envia a la pila de procesos para ejectutarse.