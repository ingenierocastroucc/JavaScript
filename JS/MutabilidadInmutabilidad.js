/******************************************************************************************************************
 * Propiedad intelectual de Pedro Castro                                                         
 ******************************************************************************************************************
 * Unidad        : <Mutabilidad.js>                                                                      
 * DescripciÓn   : <Contiene constantes, variables y funciones, para la mutabilidad >                                                      
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
     const Estado = "Activo";
     //Arrays
     const Asignaturas = Array('Calculo', 'Esatdistica', 'Fisica');
     const Horarios = ['14:20', '16:00', '18:00'];
     //Mutabilidad
     const ProfesorSuplente = ['Julian Diaz'];
     ProfesorSuplente.push('Adriana Diaz');
     //Inmutabilidad
     const Electivas = ['Electiva uno'];
     //Ciclo for Arrays
     var sum = 0;
 
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
     };
     
     function imprimirProfesores() {
        //Arrays Mixto
        const profesores = ['Listado de profesores', 
                            {
                                ProfesorCalculo: 'Eduardo', 
                                ProfesorEstadistica: 'Emilio', 
                                ProfesorFisica: 'Andres'
                            }
                           ];
    
        // Extraemos el título y el objeto de profesores del array
        const asignaturaProfesor = profesores[0];
        const listadoProfesores = profesores[1];
    
        // Verificamos que listado sea un objeto y no un array
        if (typeof listadoProfesores === 'object' && listadoProfesores !== null) {
            // Convertimos el objeto de profesores a una cadena de texto
            const profesoresTexto = Object.entries(listadoProfesores)
                                           .map(([materia, nombre]) => `${materia}: ${nombre}`)
                                           .join(', ');
    
            // Construimos la cadena final
            const profesorAsignatura = `${asignaturaProfesor}: ${profesoresTexto}`;
            
            // Devolvemos la cadena resultante
            return profesorAsignatura;
        } else {
            // Si el segundo elemento no es un objeto, retornamos un mensaje de error
            return 'Error: El listado de profesores no es un objeto válido.';
        }
    };

     const TotalPago = getvalorMatricula();
     const profesorPorAsignatura = imprimirProfesores();
     //Mutabilidad
     const profesorSuplenteTexto = ProfesorSuplente.join(', ');
     //Inmutabilidad
     const ElectivasTexto = Electivas.concat(['Electiva dos'])
     //Comprobar Array
     const verificacionArray = Array.isArray(ElectivasTexto)
     
     const horasDisponibles = [1,2,3,4]

     for (let i = 0; i <horasDisponibles.length; i ++ )
     {
        sum += horasDisponibles[i];
        //return sum;
     }

     return 'Estudiante:' + Nombre + ' ' +  'Edad:' + Edad + ' ' +  'Su estado es:' + Estado + ' ' 
     + 'Valor a pagar:' + TotalPago + ' ' +'Asignaturas:' + ' ' + Asignaturas + ' ' + 'Horarios:' + Horarios + ' ' + profesorPorAsignatura
     +' '+ 'Profesores suplentes:' + profesorSuplenteTexto + ' ' + 'Electivas:' + ElectivasTexto + ' ' + '¿Es un array?:' + ' ' + verificacionArray
     + ' ' + 'Horas disponibles:' + ' ' + sum
 };
 
 console.log(getEstudiante());