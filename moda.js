let lista1 = [1, 2, 3, 1, 2, 5, 4, 4, 3, 2, 4, 5,7];

let listaCount = {};

let calcularModa = (lista) => {
    lista.map((elemento) => {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        }else{

            listaCount[elemento] = 1;
        }
    });
    const listaArray = Object.entries(listaCount).sort((valorAcumulado,nuevoElemento)=>{
        return nuevoElemento[1] - valorAcumulado[1];
    })
    return listaArray[0]
};


let moda = calcularModa(lista1)
console.log(moda)