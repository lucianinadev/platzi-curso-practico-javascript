let lista1 = [2,18];

const mediaGeometrica = (lista) => {
    exponente = 1/lista.length;
    base = lista.reduce((vAnterior, vActual) => {
        return vAnterior * vActual;// dfgdf
    });
    console.log(exponente,base)
    return Math.pow(base, exponente);
};

console.log(mediaGeometrica(lista1))