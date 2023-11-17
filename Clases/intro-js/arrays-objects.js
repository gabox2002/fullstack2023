// Arrays (o arreglo) & Objects (objetos)

const superList = [ "Banana", "Pescado", "Queso", "Gaseosa" ]; // Nuestro primer array
//       index  = [    0    ,     1     ,    2   ,   3      ] Posición de cada valor en el array
//       length =  4       Largo del array

// Cómo acceder a un valor de un array
console.log(superList);
console.log(superList[2]);

// Objetos

const carObj = {
    brand: "Romeo",
    model: 2009,
    automatic: true,
    color: "Azul",
    drivers: [{
        name: "Guadalupe",
        nacinality: "Argentina"
    }, {
        name: "Aldo",
        nacinality: "Chile"
    }, {
        name: "Facu",
        nacinality: "Uruguay"
    }]
} 

console.log(carObj)
console.log(carObj.drivers) // Dot notation
console.log(carObj["color"]) // 

console.log(carObj.drivers[1].name) 