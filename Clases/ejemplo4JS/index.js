// Las variables declaradas como "var" van a poder accederse desde cualquier
// lugar del archivo js y podrá cambiar su valor y redeclarar
var cadena = 'Esta es una cadena de caracteres, y la vamos a llamar STRING';
// cadena = 5;

// Las variables declaradas como "let" solo se va a poder acceder dentro de un determinado bloque de código (funciones)
// se van a poder redeclarar y cambiar su valor
let numero = 4;
// numero = false;

// Las variables declaradas como "const" solo se va a poder acceder dentro de un determinado bloque de código (funciones)
// NO se podrán redeclarar aunque podríamos hacer que su valor cambie
const booleano = false; // (or true, para los datos tipo booleano)
// booleano = numero X Error ilegal

console.log("Hello world!");
console.log(cadena);
console.log(numero);
console.log(typeof booleano);

console.log("/--------------------------/")

let number = 2;

// console.log(constant)
number = number + 3;

const constant = number;

console.log(constant);