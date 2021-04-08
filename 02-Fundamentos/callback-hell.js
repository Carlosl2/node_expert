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

const getEmpleado =  (id,callback ) =>
{ // creamos la funcion de callback enviando id como parametro del empleado que le interesa

    const empleado = empleados.find(e => e.id === id)  // fin busca valores en arreglos  con id== id se retorna el valor de la funcion 

    if (empleado){
         callback(null, empleado); 
    } else {
        callback( `Empleado con ${id} no existe `); 
    }
    

}

getEmpleado(1,(err,empleado)=>{

    if(err)
    {
        console.log('ERROR!'); 
        console.log(err);
    }

    console.log('Empleado existe!'); 
    console.log(empleado.nombre); 
    
}); 

const getSalario =  (id,callback ) =>
{ // creamos la funcion de callback enviando id como parametro del empleado que le interesa

    const salario = salarios.find(e => e.id === id)?.salario  // fin busca valores en arreglos  con id== id se retorna el valor de la funcion 

    if (salario){
         callback(null, salario); 
    } else {
        callback( `Salario con ${id} no existe `); 
    }
    

}


    getSalario(1,(err,salario)=>{
        if(err)
        {
            console.log('ERROR!'); 
            console.log(err);
        }
        console.log('salario  existe!'); 
        console.log(salario.salario); 
        
    });  

    // hay que evitar el encadenamiento de callbacks ya que hacen el codigo muy ilegible y dificl de entender porque no se sabe exactament en donde se
    //generan los objetos o resultados.

    
