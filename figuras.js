
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado+ " cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado+ " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + " cm");
console.groupEnd()

//Codigo triangulo

// console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("Los lados del Triangulo miden: " + ladoTriangulo1+ " cm, " + ladoTriangulo2+ " cm y "+ baseTriangulo+ " cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del Triangulo es: " + perimetroTriangulo+ " cm");

function areaTriangulo(altura,base){
    return (altura * base) /2;
}

// console.log("El area del Triangulo es: " + areaTriangulo + " cm");

console.groupEnd()

//Codigo triangulo

// console.group("Circulos")
// const radioCiruculo = 4;
// console.log("El radio del circulo es: " + radioCiruculo)
 const PI = Math.PI;
// console.log("PI es: " + PI )

function diametroCirculo(radio){
    return radio *2;
} 


function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio);
    return diametro * PI;
} 
// console.log("El perimetro del Circulo es: " + perimetroCirculo+ " cm");

function areaCirculo(radio){
    return (radio * radio) * PI;
} 
// console.log("El area del Circulo es: " + areaCirculo + " cm");

console.groupEnd()