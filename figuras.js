//Operaciones con cuadrados
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
//Operaciones con triangulos
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
function areaTriangulo(altura,base){
    return (altura * base) /2;
}
function esIsosceles(lado1,lado2){
    return lado1 == lado2 ? true : false;
}
function alturaTriangulo(a,b){
    return (Math.sqrt((a * a) - (b * b)));
}
//Operaciones con circulos
const PI = Math.PI;
function diametroCirculo(radio){
    return radio *2;
} 
function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio);
    return diametro * PI;
} 
function areaCirculo(radio){
    return (radio * radio) * PI;
} 


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");
    const lado1 = Number(inputLado1.value);
    const lado2 = Number(inputLado2.value);
    const base = Number(inputBase.value);
    
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAlturaTriangulo(lado1,lado2,base){

    if (esIsosceles(lado1,lado2)){
        const basePequeña = base/2;
        const altura = alturaTriangulo(lado1,basePequeña);
        return altura;
    }else{
        alert("No es un triangulo isosceles");
    }
}
function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");

    const lado1 = Number(inputLado1.value);
    const lado2 = Number(inputLado2.value);
    const base = Number(inputBase.value);
    
    if (esIsosceles(lado1,lado2)){
        const altura = calcularAlturaTriangulo(lado1,lado2,base);
        const area = areaTriangulo(altura, base);
        alert(area);
    }else{
        alert("no es isosceles");
    }
    
   
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio");
    const radio = inputRadio.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);

}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio");
    const radio = inputRadio.value;

    const area = areaCirculo(radio);
    alert(area);

}