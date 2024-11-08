let r1 = document.getElementById("range1");
let r2 = document.getElementById("range2");
let r3 = document.getElementById("range3");
let r4 = document.getElementById("range4");
let boton = document.getElementById("boton");
const miCheck = document.getElementById("miCheckbox");
let nombre = document.getElementById("name");
let mail = document.getElementById("mail");
let divFormInput = document.querySelectorAll("#divForm .input");
let captcha = document.getElementById("captcha");

let form1 = document.getElementById("form1");
let rangeForm = document.getElementById("rangeForm");
let divrangepadres = document.getElementById("divrangepadres");


boton.style.display = "none";


let randomNum = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
let numcolector = `${randomNum[0]}${randomNum[1]}${randomNum[2]}${randomNum[3]}`;


captcha.innerHTML = numcolector;


let rvalues = "";


[r1, r2, r3, r4].forEach(input => input.addEventListener("input", function () {
    rvalues = `${r1.value}${r2.value}${r3.value}${r4.value}`;
    showButton();
}));


function showButton() {
    if (rvalues === numcolector) {
        console.log("Captcha correcto");
        boton.style.display = "block";
        alert("¡Enhorabuena, has superado el captcha!");
    } else {
        console.log("Captcha incorrecto");
        boton.style.display = "none";
    }
}
