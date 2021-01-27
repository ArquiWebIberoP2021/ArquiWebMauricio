//
//  entrevista.js
//
//
//  Creado por Mauricio de Garay el 27/01/2021.
//

/* Definición de funciones. */

/*
* La función imprimirArreglo se encarga de imprimir un arreglo que es enviado como parámetro, además de una línea "El arreglo se ve así: \n" antes.
*
*
* @params
*   @param array arr: el arreglo a imprimir.
* @returns
*
*/
function imprimirArreglo(arr)
{
  console.log("El arreglo se ve asi: \n");
  console.log(arr)
}
/*
* La función multiplicar se encarga de multiplicar dos números recibidos como argumentos utilizando sumas sucesivas.
*
*
* @params
*   @param numeric num1: el primer operando.
*   @param numeric num2: el segundo operando.
* @returns
*
*/
function multiplicar(num1, num2)
{
  let i=0;
  let result=0;
  //Para multiplicar num1*num2 con sumas, hay que sumar num2 num1 veces. Es decir, si fuera 4x5, hay que sumar 5  4 veces (5+5+5+5). 
  for(i=0; i<num1; i++)
  {
    //Result va guardando el valor de estas sumas sucesivas.
  	result=result+num2;
  }
  //Imprimimos el resultado.
  console.log("El resultado de multiplicar ", num1, "por ", num2, "es: ", result);
}
/*
* La función arrayMayor se encarga de encontrar el valor más grande de un array iterando solamente una vez.
*
*
* @params
*   @param array arr: el arreglo al cual le queremos encontrar su valor mayor.
* @returns
*   max: el valor maximo que hay dentro del arreglo.
*/
function arrayMayor(arr)
{
  //Inicializamos max como el primer indice del arreglo
  let i=0;
  let max=arr[0];
  //Recorremos sobre todo el arreglo apartir del 2do índice.
  for(i=1; i<arr.length; i++)
  {
    //Si el elemento actual del arreglo es mayor que max, max se vuelve este elemento.
    if(arr[i]>max)
    {
      max=arr[i];
    }
  }
  //Imprimimos y retornamos el resultado max.
  console.log("El valor maximo de este arreglo es:", max);
  return max;
}
/*
* La función limpiarArreglo se encarga de eliminar todos los nulls, undefined, 0s y false de un arreglo.
*
*
* @params
*   @param array arr: el arreglo que queremos limpiar.
* @returns
*   array arr: el arreglo limpio.
*/
function limpiarArreglo(arr)
{
  let i=0;
  //iteramos sobre el arreglo.
  for(i=0; i<arr.length; i++)
  {
    //A este if se entrará siempre que arr[i] sea NULL, undefined, 0 o false.
    if(!(arr[i]))
    {
      //Si se entro al if, hay que eliminar el elemento i del arreglo y disminuir i por 1 porque ahorá el arreglo es más chico.
      arr.splice(i,1);
      i--
    }
  }
  //Retornamos el resultado.
  return arr;
}
/*
* La función aplanarArreglo se encarga de eliminar todos los arreglos anidados y retornar un arreglo "plano", donde todos los elementos están al mismo nivel sin anidación.
*
*
* @params
*   @param array arr: el arreglo que deseamos aplanar.
* @returns
*   array arr: el arreglo aplanado.
*/
function aplanarArreglo(arr)
{
  //Para lograr esto, convertiremos al arreglo en un string, eliminaremos los caracteres [ y ] del string,
  //nos aseguraremos que el ultimo elemento no esté vacío (si el ultimo índice era un arreglo anidado vacío, hay que eliminar ese elemento por completo),
  //y luego volveremos a convertir ese string en un arreglo que retornaremos.
  let arrString=JSON.stringify(arr);
  //Primero hay que eliminar los corchetes [ y ]
  arrString=arrString.replace(/\[/g, "");
  arrString=arrString.replace(/\]/g, "");
  //Si la ultima casilla está vacía (era un arreglo anidado vacio),
  //Entonces el string va a acabar en una ',' y no se podrá hacer arreglo.
  // Hay que deshacernos de la coma que sobra sin eliminar las otras. Ejemplo, si ahorita tenemos 1,2,3,4, -->hay que convertirlo en 1,2,3,4 sin la coma al final.
  //Si sí acaba en una coma.
  if(arrString[arrString.length-1]==',')
  {
    //Para no eliminar todas las otras comas: como sabemos que ya no hay ningun ']' en el string, agregaremos uno al final despues de la coma.
    arrString=arrString+"]";
    //Quitamos esa ,] y asi eliminamos la coma del final sin afectar el contenido del arreglo.
    arrString=arrString.replace(",]", "");
  }
  //Volvemos a agregar los corchetes al inicio y al final
  arrString=arrString+"]";
  arrString="["+arrString;
  //Lo volvemos a convertir en array y lo retornamos.
  arr=JSON.parse(arrString);
  return arr;
}
/*
* La función repeticionesPalabras se encarga de contar todas las veces que aparece una palabra recibida como argumento en un arreglo.
*
*
* @params
*   @param array arr: el arreglo en el que vamos a buscar la palabra.
*   @param string palabra: la palabra cuyas repeticiones deseamos conocer.
* @returns
*
*/
function repeticionesPalabras(arr, palabra)
{
  let repeticiones=0;
  //Checamos todos los indices del arreglo, y si ese indice es igual a la palabra, repeticiones aumenta.
  arr.forEach(function(i){
    if(i==palabra)
    repeticiones++;
  })
  //Indicamos cuántas veces se repitió
  console.log("La palabra ", palabra, " aparece ", repeticiones, " veces.\n");
}
/*
* La función esPalindromo se encarga de decir si una cadena recibida como parámetro es un palíndromo.
* Un palíndromo es una cadena que, si se lee al revés, es igual que leerlo en orden.
*
* @params
*   @param string cadena: la cadena que queremos determinar si es un palíndromo o no.
* @returns
*
*/
function esPalindromo(cadena)
{
  //Primero hay que eliminar los espacios. Para esto hare una copia de cadena que sea igual pero sin espacios.
  let cadenaSinEspacios;
  let cadenaVolteada;
  let arrayVolteado;
  cadenaSinEspacios=cadena.replace(/ /g, "");
  //Ahora hare que todos los caracteres sean mayusculas para la comparacion
  cadenaSinEspacios=cadenaSinEspacios.toUpperCase();
  //Ahora cadenaVolteada sera cadenaSinEspacios al reves.
  //Sabemos que split() separa todos los elementos de un string en cierto indice y este resultado se convierte en un arreglo.
  //Ademas, sabemos que reverse() voltea un array y que join() convierte un array en un string.
  //Primero lo separamos en TODOS los indices y eso lo pasamos a un array donde cada indice es un caracter. Despues ese array lo volteamos.
  arrayVolteado=cadenaSinEspacios.split("");
  arrayVolteado=arrayVolteado.reverse();
  //Ahora lo hacemos string. Si la cadena era ANITA, se convierte en array [A,T,I,N,A] y join lo hace un string A,T,I,N,A. Hay que quitar las comas.
  cadenaVolteada=arrayVolteado.join().replace(/,/g,"");
  //Ahora vemos si son iguales para ver si es palindromo.
  if(cadenaVolteada===cadenaSinEspacios)
  {
    console.log("Es palindromo.\n");
  }
  else
  {
    console.log("No es palindromo.\n");
  }
  
    
}
/*
* La función main se encarga de llevar el flujo del programa y mandar a llamar todas las otras funciones en el orden requerida.
*
*
* @params
*
* @returns
*
*/
function main()
{
  //Declaramos las variables/arreglos con los que vamos a trabajar
  //array1 es el arreglo cuyo valor máximo queremos encontrar.
  array1=[34, 55, 9999, 875, 6686];
  //array2 es el arreglo que queremos limpiar.
  array2=[true, 1, 0, false, null, undefined, 45, 55];
  //array3 es el arreglo que queremos aplanar.
  array3=[[1,2], [[3,4]], [1, []]];
  //array4 es el arreglo en el que queremos contar las repeticiones de una palabra.
  array4=["hola", "como", "hola", "adios", "prueba", "no", "hola", "prueba"];
  //cadena es la cadena que queremos determinar si es palíndromo o no.
  cadena="Anita lava la tina";

  //Para la pregunta 1, multiplicaremos 8x9 usando sumas.
  console.log("Pregunta 1.- multiplicar sumando: \n");
  multiplicar(8,9);

  //Para la pregunta 2, buscaremos el valor mayor de array1.
  console.log("Pregunta 2.- mayor de un arreglo: \n");
  //Lo imprimimos.
  imprimirArreglo(array1);
  let max=arrayMayor(array1);

  //Para la pregunta 3, limpiaremos array2
  console.log("Pregunta 3.- limpiar un arreglo de undefined, null, false y 0: \n");
  //Lo imprimimos.
  imprimirArreglo(array2);
  //Lo limpiamos.
  array2=limpiarArreglo(array2);
  console.log("Ahora veamos el array limpio. ")
  //Lo imprimimos limpio.
  imprimirArreglo(array2);

  //Para la pregunta 4, aplanaremos array3.
  console.log("Pregunta 4.- Aplanar arreglos.\n");
  //Lo imprimimos.
  imprimirArreglo(array3);
  //Lo aplanamos.
  array3= aplanarArreglo(array3);
  console.log("Ahora veamos el array aplanado. ")
  //Lo imprimimos aplanado.
  imprimirArreglo(array3);

  //Para la pregunta 5, buscaremos cuántas veces se repite una palabra en array4.
  console.log("Pregunta 5.- Encontrar cuantas veces se repite una palabra en un arreglo.\n");
  //Lo imprimimos.
  imprimirArreglo(array4);
  //Buscamos cuántas veces se repite el 2do argumento en array4.
  repeticionesPalabras(array4, "hola");

  //Para la pregunta 6, determinaremos si cadena es un palíndromo.
  console.log("Pregunta 6.- Determinar si una cadena es palindromo.\n");
  console.log("La cadena que se utilizará es ", cadena, ".\n");
  esPalindromo(cadena);
}

//Invocamos main para que comience el programa.
main();

