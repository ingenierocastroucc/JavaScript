/*##STRINGS***************************************************************************************************************************/
//Texto de bienvenida
let textoBienvenida = '!Hola¡ Bienvenido a este tu campus virtual'
console.log(textoBienvenida)

//Texto concatenadao
let textoAccion = `${textoBienvenida} ¿Que accion desea realizar?`
console.log(textoAccion)

//Que accion desea realizar lenght
let textoAccionesCount = '1. Matricula \n' +
                         '2. Consultar Notas \n' +
                         '3. Consultar Horario'
console.log('Cantidad de caracteres del contador:' + textoAccionesCount.length)

//Que accion desea realizar texto
let textoAcciones = '1. Matricula \n' +
                    '2. Consultar Notas \n' +
                    '3. Consultar Horario'
console.log(textoAcciones)
/*##STRINGS***************************************************************************************************************************/
/*##Declaracion de variable***********************************************************************************************************/

/*##Tipos de datos primitivos********************************************************************************************************/

//Number
let valorMatricula = 400000
console.log('Valor de la matricula:' + ' ' + valorMatricula)

//String
let asignatura = 'Calculo'
console.log('Asignatura:' + ' ' +asignatura)

//bollean
let matriculaActiva = true
console.log('Matricula activa:' + ' ' + matriculaActiva)

//null
let nivelacion = null
console.log('Nivelacion:' + ' ' + nivelacion)

//undefined
let matriculaNivelacion = undefined
console.log('Nivelacion:' + ' ' + matriculaNivelacion)

//Symbol
let sexoEstudiante = Symbol('Sexo estudiante: M')
console.log(sexoEstudiante)

//biginit
let materiasPensunt = 2n
console.log('Materias Pensunt:' + ' ' + materiasPensunt)
/*##Tipos de datos primitivos********************************************************************************************************/
/*##Tipos de datos complejos*********************************************************************************************************/

//Object
console.log('Objeto matricula:')
let matricula = 
{
    IdMatricula: 1,
    Asignatrua: 'Calculo',
    ValorMatricula: 400000,
    ProfesorAsignatura: 'Pedro Diaz',
    AsignaturaId: 1
}
console.log(matricula)

//Array
console.log('Arrays:')
let asignaturas = 
[
    'Calculo',
    'C#',
    'SQL'
]
console.log(asignaturas)

//Function
function asignaturasMatriculadas ()
{
    
}
/*##Tipos de datos complejos*********************************************************************************************************/
/*##STRINGS***************************************************************************************************************************/
//toUpperCase
let derechosAutor = 'propiedad intelectual pedro castro'
console.log(derechosAutor.toUpperCase())

//toLowerCase
let reservados = 'TODOS LOS DERECHOS RESERVADOS'
console.log(reservados.toLowerCase())

//substring
let inicial = 'TODOS LOS DERECHOS RESERVADOS'
console.log(inicial.substring(0, 1))
/*##STRINGS***************************************************************************************************************************/
/*##OPERADORES ARITMETICOS************************************************************************************************************/
//Enteros
const edadEstudiante = 25
console.log('Edad estudiante:' + ' ' + edadEstudiante)
//Decimales
const promedioEstudiante = 3.5
console.log('Promedio estudiante:' + ' ' + promedioEstudiante)
//Notacion cientifica
const proyeccionEstudiante = 5e3
console.log('Proyeccion gastos estudiante:' + ' ' + proyeccionEstudiante)
//Numero infinito
const suposicionEstudiante = Infinity
console.log('Proyeccion duracion supuesta, estudiante:' + ' ' + suposicionEstudiante)
//NaN
const nanEstudiante = NaN
console.log('NaN:' + ' ' + nanEstudiante)
//Suma-Resta-Multiplicacion-Division
const sumaPagosEstudiante = (400000 + 250000) * 0.19
console.log('Suma totales de los pagos del estudiante:' + ' ' + sumaPagosEstudiante)
const promedioCalculadoEstudiante = (4.0 + 2.5 + 3.8 + 4.2) / 4
console.log('Promedio Calculado del estudiante:' + ' ' + promedioCalculadoEstudiante)
const valorPagarEstudiante = ((400000 + 250000) * 0.19) - 250000
console.log('Deuda del estudiante:' + ' ' + valorPagarEstudiante)
//Modulo y exponensiacion
const pagoProyectadoEstudiante = (((400000 + 250000) * 0.19) % 0.8) ** 2
console.log('Proyeccion de pagos del estudiante:' + ' ' + pagoProyectadoEstudiante.toFixed(2))
//Raiz cuadrada
const pagoEquivalenteEstudiante = Math.sqrt((((400000 + 250000) * 0.19) % 0.8) ** 2)
console.log('Pago equivalente del estudiante:' + ' ' + pagoEquivalenteEstudiante.toFixed(2))
/*##OPERADORES ARITMETICOS************************************************************************************************************/
/*##OPERADORES DE COMPARACION*********************************************************************************************************/
/*##OPERADORES LOGICOS****************************************************************************************************************/
const valorMatriculaTotal = 4000000
const valorAsignatrurasTotal = 3600000
const valorRestanteTotal = 400000

//Igual
const operadorIgual = valorMatriculaTotal == valorAsignatrurasTotal
console.log('Operador igual:' + ' ' + operadorIgual)
//Mayor
const operadorMayor = valorMatriculaTotal > valorAsignatrurasTotal
console.log('Operador mayor:' + ' ' + operadorMayor)
//Menor
const operadorMenor = valorMatriculaTotal < valorAsignatrurasTotal
console.log('Operador menor:' + ' ' + operadorMenor)
//Mayor igual
const operadorMayorIgual = valorMatriculaTotal >= valorAsignatrurasTotal
console.log('Operador mayor o igual:' + ' ' + operadorMayorIgual)
//Menor Igual
const operadorMenorIgual = valorMatriculaTotal <= valorAsignatrurasTotal
console.log('Operador menor o igual:' + ' ' + operadorMenorIgual)
//Diferente
const operadorDiferente = valorMatriculaTotal != valorAsignatrurasTotal
console.log('Operador diferente:' + ' ' + operadorDiferente)
/*##OPERADORES LOGICOS****************************************************************************************************************/
/*##CONDICIONALES*********************************************************************************************************************/
//if
if (valorPagarEstudiante != null || valorPagarEstudiante != '')
{
    console.log('Tiene una deuda pendiente con la institucion, por un valor de:' + ' ' + valorPagarEstudiante)
}
else if (valorPagarEstudiante < 200000)
{
    console.log('Su deuda es financiable con la institucion')
}
else
{
    console.log('No tiene una deuda pendiente con la institucion')
}

//Generacion de horario aleatorio
const horarioAleatorio = Math.floor(Math.random() * 12 + 1);

const horarioEstudiante = parseInt(prompt ("Ingresa el horario a matricular del 1 al 12:"));

console.log('El horario que escogiste es:' + ' ' +horarioEstudiante);

if (horarioAleatorio == horarioEstudiante)
{
    console.log('Horario seleccionado disponible para matricular.');
}
else if (horarioAleatorio != horarioEstudiante)
{
    console.log('El horario seleccionado no se encuentra disponible para matricular.');
}
else if (horarioEstudiante > 12)
{
    console.log('El horario seleccionado supera la intensidad horaria disponible para la asignatura');
}

//Switch
switch(horarioEstudiante)
{
    case 4:
        console.log('La asignatura estara a cargo del docente Pedro Diaz');
        break;
    case 6:
        console.log('La asignatura estara a cargo del docente Juan Sanabria');    
        break;
    default:
        console.log('El docente para la asignatura con horario:' + ' ' + horarioEstudiante + 'sera asignado con posteriroridad');
}
//for
let listaAsignaturas = ["Calculo","SQL","C#"]

for (let i = 0; i <listaAsignaturas.length ; i++)
{
    console.log('Este es el lsitado de asignaturas:' + listaAsignaturas[i]);

}

//for of arrays-strings
let listaEstudiantes = ["Alfonso Doria","Andres Machado","Daniel Ruiz"]

for (estudiante of listaEstudiantes)
{
    console.log('Este es el lsitado de estduaintes matriculados:' + listaEstudiantes);
}

//for in arrays-strings
const listaMatriculas = {  IdMatricula: 1,
                           Estudiante: 'Fabian Diaz',
                           Estado : 'Activo'
                        }

for (matriculas in listaMatriculas)
{
    console.log(listaMatriculas);
}

//While
let contadorHoras = 0;

while (contadorHoras < 12)
{
      console.log(contadorHoras);
      contadorHoras++;
}

//DoWhile
let contadorIngresosPlataforma = 0;

do
{
    console.log(contadorIngresosPlataforma);
    contadorIngresosPlataforma++;
}
while (contadorIngresosPlataforma < 12)
/*##CONDICIONALES*********************************************************************************************************************/
/*##OPERADORES DE COMPARACION*********************************************************************************************************/
