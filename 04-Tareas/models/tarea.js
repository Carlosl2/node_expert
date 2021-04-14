const  {v4: uuidv4} = require('uuid') // require de v4 que pertenece a uuid 

class Tarea  //clase que contiene los listados de la tarea 
{
    id = ''; 
    desc = ''; 
    completadoEn =  null; 

    constructor ( desc)
    {
        this.id = uuidv4();  //asignado un valor de uuid a id por medio del this 
        this.desc = desc;
        this.completadoEn =  null;
        
    }
}

module.exports = Tarea;  //export de la clase 