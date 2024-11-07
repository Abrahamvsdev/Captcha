let r1= document.getElementById("range1");
let r2= document.getElementById("range2");
let r3= document.getElementById("range3");
let r4= document.getElementById("range4");
let boton = document.getElementById("boton");
const miCheck = document.getElementById("miCheckbox");
let nombre = document.getElementById("name");
let mail = document.getElementById("mail");


let divForm= document.getElementById("divForm");
let rangeForm= document.getElementById("rangeForm");
let divrangepadres= document.getElementById("divrangepadres");




[r1,r2,r3,r4].forEach(input => input.addEventListener("input",function(){
    console.log(r1.value);
    console.log(r2.value);
    console.log(r3.value);
    console.log(r4.value);
}))


if(nombre.value != "" && mail.value != "" && miCheck.checked){
    boton.disabled = false;
}else{ 
    boton.disabled = true;
}






