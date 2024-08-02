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