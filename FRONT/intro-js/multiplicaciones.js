// Desarrollar un algoritmo donde se loguee las tablas de multiplicación
// Con variables para cantidad de tablas y cantidad de multipl. por tabla. .

const quantityTables = 20;
const multiplicationsByTable = 15;

for (let m = 1; m <= quantityTables; m++) {
    console.log(`TABLA DEL #${m}`);
    for (let n = 0; n <= multiplicationsByTable; n++) {
        console.log(`${m} x ${n} = ${m * n}`)
    } 
}