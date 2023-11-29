
function onChangeName() {
    const input = document.getElementById("name");
    const errorElem = document.getElementById("name-error")
    const value = input.value;
    const reg = new RegExp("^[A-Za-z ]+$")

    if (!reg.test(value)) {
        errorElem.innerText = `El valor ${value} no es valido.`;
        // errorElem.innerText = `Este campo solamente admite caracteres alfanumericos`;
        // errorElem.style = "display: block"
        // errorElem.style = "visibility: visible"
        if (!input.className.includes("input-error")) {
            input.className = input.className.concat("input-error")
        }
    } else if (errorElem.innerText) {
    // } else {
        errorElem.innerText = "";
        // errorElem.style = "visibility: hidden"
        input.className = input.className.replace("input-error", "")
    }
}

function onChangeTyC () {
    const check = document.getElementById("conditions");
    const submitBtn = document.getElementById("submitBtn")

    if (check.checked) { //Le estamos preguntando?? // check.checked === true  => check.checked == true
        submitBtn.disabled = false
    } else { // check.checked == false
        submitBtn.disabled = true
    }
}

function onSubmitContact() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const msg = document.getElementById("msg").value;

    alert(`Hola ${name}! Enviastes desde ${email} un mensaje con el asunto ${subject}, con el siguiente contenido: ${msg}`)
}