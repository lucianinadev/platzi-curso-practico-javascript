export let calcularMediaAritmetica = (lista) => {

    // for (item of lista) {
    //     total = total + item;
    // }
    const total = lista.reduce((valorAcumulado = 0, nuevoElemento) =>{
        return valorAcumulado + nuevoElemento
    }) 
    let media = total / lista.length;
    return media;
};

let sueldos = [400, 500, 546, 2533, 434, 35, 665, 1234, 654, 345];
const media = calcularMediaAritmetica(sueldos);

console.log(media);
