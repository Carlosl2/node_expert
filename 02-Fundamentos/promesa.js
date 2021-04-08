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
    const empleado = empleados.find(s => s.id ===id)?.nombre
        return  new Promise((resolve,reject )=>{   // la promesa recibe dos parametros es un callback cuando se hace correctamente y el rejeact cuando existe un erros 
        (empleado)
        ?resolve(empleado)  //operado ternario ? es igual al if y : es equivalente a else 
        : reject(`No existe empleado con id ${id}`); 
    }); 
}

const id = 3; 

getEmpleado(id)  // ejecucion de la promesa 
    .then (empleado=>console.log(empleado))
    .catch(err =>console.log(err));  //una promesa debe tener un catch  para controlar la excepcion 


    const getSalario = (id) => {

        const salario = salarios.find(s=> s.id ===id)?.salario  // el atributo .nombre sirve para jalar solo el nombre de arreglo que estamos consultando 

        //promesa 
        return new Promise ((resolve,reject) =>{ // se usa asi para retornar de una vez el valor de la promesa sin hacer mas largo el codigo  
            (salario)
            ?resolve(salario)
            :reject(`No existe un salario para el ID ${id}`); 

        }); 
    }
    /*

    getSalario(id)
        .then (salario => console.log(salario))
        .catch (err=> console.log(err)); 
    */

     //funcion empleado buscar primero id empleado y luego el salario que le corresponde
     
     getEmpleado (id)
        .then(empleado => {

            getSalario (id) 
            .then(salario => {  
                console.log('El empleado:', empleado, 'El salario es: ',salario )

            })
            .catch(err=> console.log(err)); 
        })
        .catch(err=> console.log(err)); 