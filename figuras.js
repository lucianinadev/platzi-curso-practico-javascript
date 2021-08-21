
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado+ " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado+ " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm");
console.groupEnd()

//Codigo triangulo

console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del Triangulo miden: " + ladoTriangulo1+ " cm, " + ladoTriangulo2+ " cm y "+ baseTriangulo+ " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo+ " cm");

const areaTriangulo = (alturaTriangulo * baseTriangulo) /2;
console.log("El area del Triangulo es: " + areaTriangulo + " cm");

console.groupEnd()

//Codigo triangulo

console.group("Circulos")
const radioCiruculo = 4;
console.log("El radio del circulo es: " + radioCiruculo)
const diametroCirculo = radioCiruculo *2;

const PI = Math.PI;
console.log("PI es: " + PI )
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es: " + perimetroCirculo+ " cm");

const areaCirculo = (radioCiruculo * radioCiruculo) * PI
console.log("El area del Circulo es: " + areaCirculo + " cm");

console.groupEnd()