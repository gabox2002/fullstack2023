/* 1.Definir una variable inicial numerica que represente la cantidad de peces. Esta vez tenemos solo  una pecera. Se busca lograr imprimir por consola lo siguiente: "Estos son los peces de la pecera ---> 🐟🐟🐟🐟" variando la cantidad de peces segun el numero que insique la variable*/

// Definir la variable inicial que representa la cantidad de peces
var cantidadPeces = 4;

// Crear una cadena vacía para almacenar los emojis de los peces
var cadenaPeces = "";

// Iterar sobre la cantidad de peces y concatenar el emoji a la cadena
for (var i = 0; i < cantidadPeces; i++) {
    cadenaPeces += "🐟";
}

// Imprimir la cadena con los emojis de peces en la consola
console.log("Estos son los peces de la pecera ---> " + cadenaPeces);

/* 2.Se trata de dibujar un triangulo con asteriscos. Definiremos una variable inicial, el programa escribira con asteriscos tantas lineas como sea definido por la variable. cada linea estara formada por una serie de asteriscos tan larga como diga el npumero de linea en el que esta. Por ejemplo con el valor 5:
*
**
***
****
*****
*/
// Definir la variable inicial que representa el número de líneas
var numeroDeLineas = 5;

// Inicializar una cadena vacía para construir el triángulo
var triangulo = "";

// Iterar sobre el número de líneas
for (var i = 1; i <= numeroDeLineas; i++) {
    // Concatenar asteriscos a la cadena para la línea actual
    triangulo += "*";
     
    // Imprimir la línea de asteriscos en la consola
    console.log(triangulo);
}

/* 3. Crear una variable que contenga un array con un listado de numeros, lograr calcular el promedio de dichos numeros por medio de un ciclo For e imprimirlo por consola*/

var listado = [1, 2, 3, 4, 5];
var suma = 0;

for (var i = 0; i < listado.length; i++) {
    suma += listado[i];
}
 
promedio = suma / listado.length;

console.log("El promedio es: " + promedio);