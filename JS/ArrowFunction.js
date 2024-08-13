
//Funcion
const saludo = function (name)
{
    return 'El nombre del estudiante :' + name;
}

//Array funcion
const saludoArray = (name) =>
{
    return 'El nombre del estudiante :' + name;
}

//Array funcion implicita
const saludoArrayImplicita = (name) => 'El nombre del estudiante :' + name;

//Array funcion implicita parametros
const saludoArrayImplicitaParam = (name, lastname) => 'El nombre del estudiante :' + name + " " + lastname;

const character = {
    name: 'Pedro Castro',
    EstadoEstudianteCharacter : function (message)
    {
     console.log(`${this.name} ${message}`)
    }
};

//WhitArrowFunction
const characterWith = {
    name: 'Pedro Castro',
    EstadoEstudianteArrow : function (message)
    {
     console.log(`${this.name}says:${message}`)
    }
};

character.EstadoEstudianteCharacter("Estado: Activo");