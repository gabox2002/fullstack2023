// Hacer que en la consola se imprima las casas que van 
// del nro 0 al 100 (Este valor debe ser variable) y 
// las que sean pares deben terminar con un *

const housesNumber = 100;

// Operador incremento (index++)
// Simplificación que es equivalente a index = index + 1
 
for (let index = 0; index <= housesNumber; index++) {
    const houses = "Casa nro " + index;
    // Matematicamente si un nro dividido por 2 y su resto da 0 es par, sino impar 
    // Operador módulo (%)-> va a devolver el resto de la division de 2 números
    if (index % 2 === 0) {
        console.log(houses + "*")
    } else {
        console.log(houses)
    } 
}

console.log("FIN DE CICLO FOR")

const cantGatos = 10;

for (let i = 1; i <= cantGatos; i++) {
    const modulo = i % 3;
    let catNumber = `Gato #${i}`;
    // if (modulo === 1) {
    //     catNumber = catNumber.concat("😺");
    // } else if (modulo === 2) {
    //     catNumber = catNumber.concat("😸");
    // } else {
    //     catNumber = catNumber.concat("😹");
    // }
    switch (modulo) {
        case 1: // ===
            catNumber = catNumber.concat("😺");
            break;
        case 2:
            catNumber = catNumber.concat("😸");
            break;
        default:
            catNumber = catNumber.concat("😹");
            break;
    }
    console.log(catNumber);
}
