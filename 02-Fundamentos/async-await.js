const empleados = [
    {
        id:1,
        nombre:'Carlos'
    }, 
    {
        id:2,
        nombre:'Linda'
    }, 
    {
        id:3,
        nombre:'Karen'
    }

]; 

const salarios= [
    {
        id:1, 
        salario: 1000
    }, 
    {
        id:2, 
        salario:1500

    }
]; 

const getEmpleado = (id)=>
{
    const empleado = empleados.find(s=> s.id === id)?.nombre

    return new Promise ((resolve, reject )=>{
        (empleado)
        ?resolve(empleado)
        :reject (`Empleado con ${id} no existe`); 
    })
}

const getSalario = (id)=>{

    const salario = salarios.find(s=> s.id===id)?.salario

    return new Promise ((resolve,reject)=>{
        (salario)
        ?resolve(salario)
        :reject(`Empleado con salario ${id} no existe`); 
    }); 
}

// El await tiene que estar dentro de una funcion asincrona si no no funciona

const getInfoUsuario = async(id) =>
{  // la funcion se vuelve asincrona usando el metodo async() y devuelve una promesa con un .then y un .catch
   try{
    const empleado = await getEmpleado(id); 

    const salario = await getSalario(id);   //puedo retornar varios await en una misma funcion async

    
    return `El empleado ${empleado} tiene un salario de ${salario}`; 


    }catch(error) // en los async await el return es el resolve y el catch es el reject en la promesa 
    {
      /*return*/  throw error;   // el return llama al final de la funcion pero no llama al catch del async para llamar el async es utiliza throw
    }
}

 const id =1; 
getInfoUsuario(id)

.then(msg => console.log(msg))  // retorna el valor de la promesa y se almacena en msg 
.catch(err=> console.log(err)); 

