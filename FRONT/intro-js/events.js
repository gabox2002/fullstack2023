
const colors = [
    "red",
    "yellow",
    "green",
    "#AAAAAA",
    "blue"
]

function changeBtnColor() {
    const btnDinamic = document.getElementById("btn-dinamic");
    const number = Math.floor(Math.random() * colors.length);
    btnDinamic.style=`background-color: ${colors[number]}`
}