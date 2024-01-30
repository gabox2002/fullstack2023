// Document Object Model

// console.log(document.getElementById("mainTitle"))
const title = document.getElementById("mainTitle");
console.log(title.innerHTML)

title.innerHTML = "Hola Mundo!"
title.className = title.className+" segunda-clase"

console.log(document.getElementById("myDiv").innerHTML)
console.log(document.getElementById("myDiv").innerText)
 
const element = {
    id: "string",
    className: "css",
    name: "name",
    style: "string",
    innerHTML: "Contenido de HTML",
    innerText: "Contenido de Texto"
} 