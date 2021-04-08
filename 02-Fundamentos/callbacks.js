//setTimeot ejecuta una funcion en el tiempo es un callback recibe dos parametro 1. la funcion 2. el tiempo 
//funcion de fecha es ()=>
// los callbacks son funciones que se mandan como argumento 
setTimeout( ()=>{
    console.log( 'Hola mundo '); 
},1000); 

const getusuarioByID = (id,callback) => { // funcionde fecha con dos parametros entre ellos un callback

    const usuario = {    //declarando un un objeto 
        id,  // esto es igual a decir que tiene este objeto tiene una propiedad llamada id con un valor id  id:id 
        nombre: 'Carlos' //asignmaos el valor una propiedad a un objeto
    }

    setTimeout(()=>{
        callback(usuario)
    },1500)
}

getusuarioByID(10,(usuario)=>{ //se esta enviando el valor en el callback como parametro hacia la otra funcion
    console.log(usuario.id); 
    console.log(usuario.nombre.toUpperCase()); // se procesa la informacion venida del calback 
    
}); 