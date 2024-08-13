/*##FUNCIONES***************************************************************************************************************************/
//Funcion costo total
const costoAsignaturaCalculo = 400000;
const costoAsignaturaCsharp = 350000;
const costoTotalFuncion = costoTotal(costoAsignaturaCalculo,costoAsignaturaCsharp);

function costoTotal (costoAsignaturaCalculo, costoAsignaturaCsharp)
{
    const costoTotalCalculo = (costoAsignaturaCalculo + costoAsignaturaCsharp) * 0.19
    return costoTotalCalculo;
}
console.log('Valor matricula, asignatura calculo:' + costoAsignaturaCalculo)
console.log('Valor matricula, asignatura C#:' + costoAsignaturaCsharp)
console.log('El costo total de la matricula con IVA incluido:' + costoTotalFuncion)
/*##FUNCIONES***************************************************************************************************************************/
//Funcion callback
const bonoEstudiante = 100000;
const pagosTotal = pagoMatriculaTotal(costoTotalFuncion,bonoEstudiante);

function pagoMatriculaTotal (bonoEstudiante, costoTotalFuncion)
{
    const pagoMatriculaTotal = (bonoEstudiante - costoTotalFuncion)
    return pagoMatriculaTotal;
}
console.log('Valor bono matricula, estudiante:' + bonoEstudiante)
console.log('El costo total de la matricula con descuento aplicado es:' + pagosTotal)