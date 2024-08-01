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



