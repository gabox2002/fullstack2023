console.log("/-----Asignaciones------/")
let data; // Acá estamos solamente declarando la variable y al no tener asignación su valor es undefined

console.log(data);
// La asignación de un valor lo vamos a hacer con un "="
data = "Esta es nuestra primera asignación"

console.log(data);

console.log("/-----Operadores matemáticos y lógicos------/")

// Simbología para operaciones matemáticas
// Suma  --> +
// Resta --> -
// Multiplicación --> *
// División --> /

console.log("Ejemplo de suma", 10 + 2);
console.log("Ejemplo de resta", 10 - 2);
console.log("Ejemplo de multiplicación", 10 * 2);
console.log("Ejemplo de división", 10 / 2);
console.log("Ejemplo de calculo combinado", 10 / 2 + 3);
console.log("Ejemplo de calculo combinado", 10 / (2 + 3));

// Simbología de operadores lógicos
// and (y - Vamos a pedir que ocurra una cosa Y la otra) --> &&
// or (o - Vamos a pedir que ocurra una cosa O la otra) --> ||
// Mayor que --> >
// Menor que --> <
// Mayor o igual que --> >=
// Menor o igual que --> <=
// Not (No es) --> !(Lo que no queremos que sea)
// Simplemente igual (compara valor pero no tipo) -> ==
// Simplemente desigual (compara valor pero no tipo) -> !=
// Estrictamente igual (compara valor y tipo) -> ===
// Estrictamente desigual (compara valor y tipo) -> !==

// Una operación lógica devuelve como resultado SI O SI un valor booleano

const num1 = 7;
const stg = "abc"

console.log("Ejemplo de mayor", num1 > 4); //true
console.log("Ejemplo de mayor", num1 > 7); //false
console.log("Ejemplo de mayor (stg)", stg > "mno"); //false
console.log("Ejemplo de menor", num1 < 4); //false
console.log("Ejemplo de mayor e igual", num1 >= 7); //true
console.log("Ejemplo de mayor (stg)", stg >= "abc"); //true

console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !true) //false
console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !5) //false
console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !0) //true
console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !"") //true
console.log("Not - cambia un bool a su contrario (pero no es necesario que sea bool)", !"0") //false

console.log("Simplemente igual", num1 == "7") //true
console.log("Simplemente desigual", num1 != 3) //true
console.log("Estrictamente igual", num1 === 7) //true 
console.log("Estrictamente igual", num1 === "7") //false
console.log("Estrictamente desigual", num1 !== "7") //true

console.log("AND - Pedir que se cumplan ambas condiciones", num1 > 5 && num1 < 10 ) // true
console.log("AND - Pedir que se cumplan ambas condiciones", num1 < 5 && num1 < 10 ) // false
console.log("OR - Pedir que se cumplan al menos una de las condiciones", num1 < 5 || num1 < 10 ) // true
console.log("OR - Pedir que se cumplan al menos una de las condiciones", num1 < 5 || num1 > 10 ) // false