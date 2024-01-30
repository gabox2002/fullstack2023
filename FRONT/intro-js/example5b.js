// Ciclos for anidados

const carsQuantity = 50;
const peopleByCar = 5;

var variable = "Global" //la voy a poder sobre escribir en caulaquier espacio del codigo
 
for (let i = 1; i <= carsQuantity; i++) {
    const car = "Auto #"; // Tipo local 
    const carWithNumber = car.concat(i);
    let carWithPeope = carWithNumber; //2 round: Auto #2
    for (let y = 0; y < peopleByCar; y++) {
        carWithPeope = carWithPeope.concat("👨‍🦱"); //1 round: Auto #1👨‍🦱
    }
    console.log(carWithPeope);
}
 
// for (let i = 1; i <= carsQuantity; i++) {
//     const car = "Auto #";
//     const carWithNumber = car.concat(i);
//     let people = "";
//     for (let y = 0; y < peopleByCar; y++) {
//         people = people.concat("👨‍🦱"); //1 round: Auto #1👨‍🦱
//     }
//     console.log(carWithNumber+people);
// }