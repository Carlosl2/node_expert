const empleados = [
    {
        id: 1,
        nombre: 'Carlos'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }

];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500

    }
];

const id = 3;

const getEmpleado = (id) =>  //funcion de flecha que recibe un parametro 
{

    const empleado = empleados.find(s => s.id === id)?.nombre

    //creo la promesa \

    return new Promise((resolve, recject) => {
        (empleado) //es similar al if y con esta frase (empleado) pregunta si existe 
            ? resolve(empleado) // si existe lo retorna en el resolve 
            : recject(`Empleado con ${id} no existe `) // si no existe lanza el error 
    })
}

const getSalario = (id) => {
    const salario = salarios.find(s=> s.id ===id)?.salario

    return new Promise ((resolve, reject)=>{

    (salario)
    ?resolve(salario)
    :reject(`Salario con ${id} no existe`)

    }); 
}

//encadenamiento de promesas 
 let nombre; 

getEmpleado(id)
    .then(empleado => {
        nombre = empleado; 

        return getSalario (id)})

    .then(salario => console.log('El empleado', nombre,'tiene el salario de', salario))

    .catch(err=>console.log(err)); 