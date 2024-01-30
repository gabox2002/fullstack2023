// Funciones
// Aislar una porción de código que sea de mi utilidad y que se repita varias veces

// Sumar varias veces entonces vamos a crear la función Suma

function suma ( a, b)  {
    return a + b;
}

const num1 = 40;
const num2 = 60;

const resultado = suma(num1, num2)

console.log(resultado)


// function f ( x ) {
//     return 2 * x + 1; 
// }

// console.log(f(5))

// "10" -> 10
// "casa" -> NaN

function modulo ( a, b) {
    return a % b;
}

function catConcat (stg, emogi) {
    return stg.concat(emogi)
}

const catsQuantity = window.prompt("Cuántos gatos quiere mostrar?");

function catList(cats) {
    if (isNaN(cats)) {
        return console.warn("Ingresaste un valor incorrecto")
    }
    for (let i = 1; i <= cats; i++) {
        const mod = modulo(i, 3);
        let catNumber = `Gato #${i}`;
        if (mod === 1) 
            catNumber = catConcat(catNumber, "😺");
        else if (mod === 2) 
            catNumber = catConcat(catNumber, "😸");
        else  
            catNumber = catConcat(catNumber, "😹");
        console.log(catNumber);
    }
}

catList(catsQuantity);

// Arrows Functions

const f = (x) => {
    return 2 * x + 1;
}

const f1 = x => {
    return 2 * x + 1;
}

const f2 = x => 2 * x + 1; 

const f3 = (x, y) => 2 * x * y

console.log(f2(5))