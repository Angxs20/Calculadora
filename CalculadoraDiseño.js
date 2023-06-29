var botones = document.getElementsByClassName("numero");
console.log(botones);

let accion = document.querySelector("#V");

let primervalor = 0;
let simbolo = "";


botones[1].addEventListener("click",function Operadora() {
    
    accion.value += botones[1].value;
    
});


botones[0].addEventListener("click",function Operadora() {
    
    accion.value += botones[0].value;
    
});


botones[2].addEventListener("click",function Operadora() {
    
    accion.value += botones[2].value;
    
});


botones[3].addEventListener("click",function Operadora() {
    
    accion.value += botones[3].value;
    
});


botones[4].addEventListener("click",function Operadora() {
    
    accion.value += botones[4].value;
    
});


botones[5].addEventListener("click",function Operadora() {
    
    accion.value += botones[5].value;
    
});

botones[6].addEventListener("click",function Operadora() {
    
    accion.value += botones[6].value;
    
});

botones[7].addEventListener("click",function Operadora() {
    
    accion.value += botones[7].value;
    
});

botones[8].addEventListener("click",function Operadora() {
    
    accion.value += botones[8].value;
    
});

botones[9].addEventListener("click",function Operadora() {
    
    accion.value += botones[9].value;
    
});

let punto = document.getElementById('punt');
punto.addEventListener('click', () => {
    if(accion.value.includes("."));
    else{
      accion.value+=".";
    }
  
})

const Borrar = document.getElementById("CE");
Borrar.addEventListener("click", function Borrar() {
    accion.value = null;
})


const Sumar = document.getElementById("mas");
Sumar.addEventListener("click",function (){
    console.log("summmmkkkkkkkkkkk");
    primervalor = accion.value;
    console.log(primervalor);
    simbolo = "+";
    accion.value = null;
}) 

const Restar = document.getElementById("menos");
Restar.addEventListener("click",function (){
    console.log("Mensos");
    primervalor = accion.value;
    console.log(primervalor);
    simbolo = "-";
    accion.value = null;
}) 

const Multipli = document.getElementById("mul");
Multipli.addEventListener("click",function (){
    console.log("Muuuh"); 
    primervalor = accion.value;
    console.log(primervalor);
    simbolo = "*";
    accion.value = null;
}) 

const Dividi = document.getElementById("div");
Dividi.addEventListener("click",function (){
    console.log("Divergenteesss");
    primervalor = accion.value;
    console.log(primervalor);
    simbolo = "/";
    accion.value = null;
}) 




const Igual1 = document.getElementById("IGUAL");
Igual1.addEventListener("click",function Igual(){
    primervalor = parseFloat(primervalor);
    if (simbolo == "+") {
        accion.value = primervalor + parseFloat(accion.value);
    }
})

const Igual2 = document.getElementById("IGUAL");
Igual2.addEventListener("click",function Igual(){
    primervalor = parseFloat(primervalor);
    if (simbolo == "-") {
        accion.value = primervalor - parseFloat(accion.value);
    }
})

const Igual3 = document.getElementById("IGUAL");
Igual3.addEventListener("click",function Igual(){
    primervalor = parseFloat(primervalor);
    if (simbolo == "*") {
        accion.value = primervalor * parseFloat(accion.value);
    }
})

const Igual4 = document.getElementById("IGUAL");
Igual4.addEventListener("click",function Igual(){
    primervalor = parseFloat(primervalor);
    if (simbolo == "/") {
        accion.value = primervalor / parseFloat(accion.value);
    }
})