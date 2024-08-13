/******************************************************************************************************************
 * Propiedad intelectual de Pedro Castro                                                         
 ******************************************************************************************************************
 * Unidad        : <Clousers.js>                                                                      
 * DescripciÓn   : <Contiene constantes, variables y funciones, para closure >                                                      
 * Autor         : Pedro Castro
 * Fecha         : 13/08/2024 
 *                                                                                                           
 * Fecha         Autores         	                Modificación                                                                 
 * ===========   ===============================   	=====================
 * 13/08/2024     Pedro Castro                       1. Creacion inicial
 ******************************************************************************************************************/

 function getEstudiante ()
{
    const Nombre = "Daniela Dumas";
    const Edad = 24;
    const Estado = "Activo"

    function getvalorMatricula ()
    {
        const ValorMatricula = 250000;
        const DescuentoAplicado = 1000;

        //Aplicacion de closure
        if (Estado === "Activo")
        {
            var TotalPago = ValorMatricula - DescuentoAplicado;
        }else 
        {
            return ValorMatricula;
        }
        return TotalPago;
    }
    
    const TotalPago = getvalorMatricula();

    return 'Estudiante:' + Nombre + ' ' +  'Edad:' + Edad + ' ' +  'Su estado es:' + Estado + ' ' + 'Valor a pagar:' + TotalPago

};

console.log(getEstudiante());