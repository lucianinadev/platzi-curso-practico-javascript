// Helpers

// //obtiene el total entre todos los salarios
// let total = salariosOrdenados.reduce((salarioA, salarioB) => {
//     return salarioA + salarioB;
// });

function esPar(numero) {
    return numero % 2 === 0;
}

let calcularMediaAritmetica = (lista) => {
    const total = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    });
    let media = total / lista.length;
    return media;
};

let getSalarySorted = (pais) => {
    let salarios = pais.map((persona) => {
        return persona.salary;
    });

    let salariosOrdenados = salarios.sort((salarioA, salarioB) => {
        return salarioA - salarioB;
    });

    return salariosOrdenados;
};

const getSalaryTop10 = (lista) => {
    const spliceStart = (lista.length * 90) / 100;
    const spliceCount = lista.length - spliceStart;

    return lista.splice(spliceStart, spliceCount);
};

const medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const mitad1 = lista[mitad];
        const mitad2 = lista[mitad - 1];
        console.log(mitad1, mitad2);
        const mediana = calcularMediaAritmetica([mitad1, mitad2]);
        return mediana;
    } else {
        const mediana = lista[mitad];
        return mediana;
    }
};

//Mediana general
const salariosCol = getSalarySorted(colombia);
const medianaGeneral = medianaSalarios(salariosCol);
console.log(medianaGeneral);

//Mediana top 10%
const salariosTop10Col = getSalaryTop10(salariosCol);
const medianaTop10 = medianaSalarios(salariosTop10Col);
console.log(medianaTop10);
