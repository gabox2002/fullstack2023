// Concatenaciones de STRINGS
// Para los STRINGS  podemos declararlos con ", ' ó `(Template string) 
const greeting = "Hola! Bienvenido a nuestra app, ";
const userName = "Marcos";

console.log(greeting + userName)
console.log(greeting.concat(userName))
console.log(`Hola! Bienvenido a nuestra app, ${userName}`)
console.log(`${greeting}${userName}`)

console.log("/-----if & if/else------/")
//Lo utilizaremos cuando queramos que se ejecute un código dependiendo de una operación lógica

const num = 3
const num2 = 5

if (num > num2) {
    console.log(`El ${num} es mayor a (>) ${num2}`)
} else if (num < num2) {
    console.log(`El ${num} es menor a (<) ${num2}`)
} else {
    console.log("num y num2 son iguales")
}

console.log("/----Bucles----/")
// Código repetido
// console.log("Casa nro 1")
// console.log("Casa nro 2")
// console.log("Casa nro 3")
// console.log("Casa nro 4")
// console.log("Casa nro 5")
// console.log("Casa nro 6")
// console.log("Casa nro 7")
// console.log("Casa nro 8")
// console.log("Casa nro 9")

// for (let index = 1; index < 10; index++) {
for (let index = 1; index <= 9; index++) {
    // if (!(index === 5)) {
    //     console.log(`Casa nro ${index}`)
    // }
    if (index !== 5) {
        console.log(`Casa nro ${index}`)
    }
}

console.log("FIN DEL CICLO FOR 😹")

// Ejemplo rapido de de for anidado
// for (let index = 0; index < array.length; index++) {
//     for (let index = 0; index < array.length; index++) {
//            
//     }   
// }