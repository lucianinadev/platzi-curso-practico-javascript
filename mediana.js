// MediaAritmetica
let calcularMediaAritmetica = (lista) => {
    const total = lista.reduce((valorAcumulado = 0, nuevoElemento) =>{
        return valorAcumulado + nuevoElemento
    }) 

    let media = total / lista.length;

    return media;
};

// Mediana

const verificarParidad = (numero) => {
    if (numero % 2) {
        return false;
    } else {
        return true;
    }
};

const calcularMediana = (lista) => {
    let listaOrdenada = lista.sort((a, b) => {
        return a - b;
    });

    let mitadLista = listaOrdenada.length/2;
    mitadLista = Math.round(mitadLista)-1

    let esPar = verificarParidad(listaOrdenada.length);

    if (esPar){
        return calcularMediaAritmetica([listaOrdenada[mitadLista],listaOrdenada[mitadLista+1]])
    }else{
        return listaOrdenada[mitadLista]
    } 
};

let sueldos = [10,40,70,80,20];
let mediana = calcularMediana(sueldos);
console.log(mediana)