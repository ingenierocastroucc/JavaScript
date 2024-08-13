/******************************************************************************************************************
 * Propiedad intelectual de Pedro Castro                                                         
 ******************************************************************************************************************
 * Unidad        : <Scope.js>                                                                      
 * DescripciÓn   : <Contiene constantes, variables y funciones, de contextos de ejecucion y Scope >                                                      
 * Autor         : Pedro Castro
 * Fecha         : 13/08/2024 
 *                                                                                                           
 * Fecha         Autores         	                Modificación                                                                 
 * ===========   ===============================   	=====================
 * 13/08/2024     Pedro Castro                       1. Creacion inicial
 ******************************************************************************************************************/
const Nombre = "Pedro Castro";
const Edad = 27;
const Estado = "Activo";

function getEstudiante ()
{
    const Nombre = "Daniela Dumas";
    const Edad = 24;

    function getvalorMatricula ()
    {
        const ValorMatricula = 250000;
        const DescuentoAplicado = 1000;

        var TotalPago = ValorMatricula - DescuentoAplicado;
        
        return TotalPago;
    }
    
    const TotalPago = getvalorMatricula();

    return 'Estudiante:' + Nombre + ' ' +  'Edad:' + Edad + ' ' +  'Su estado es:' + Estado + ' ' + 'Valor a pagar:' + TotalPago

};

console.log(getEstudiante());