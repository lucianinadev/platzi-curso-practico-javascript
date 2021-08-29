
/**Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones. */


const cupones = [
    {
        clave: 'DESC20',
        porcentaje: 20
    },
    {
        clave: 'DESC30',
        porcentaje: 30
    },
    {
        clave: 'DESC10',
        porcentaje: 10
    },
]

/**
 * Extrae el porcenje de descuento a partir de la clave del cupon de descuento
 * @param {*} clave 
 * @returns porcentaje
 */
function extraerDescuentoDeCupon(clave){
    const cupon = cupones.find(cupon => cupon.clave === clave)
    return cupon.porcentaje
}

/**
 * Calcula el precio con el descuento
 * @param {*} precio 
 * @param {*} descuento 
 * @returns precioConDescuento
 */
function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100    
    return precioConDescuento;
}
/**
 * Obtiene el porcentaje de descuento
 * @returns discount
 */
function obtenerDescuento(){
    const existeCupon = document.getElementById("InputCupon").value;
    if(existeCupon){
        const InputCupon = document.getElementById("InputCupon")
        const cupon = InputCupon.value
        return extraerDescuentoDeCupon(cupon);
    }else{
        const InputDiscount = document.getElementById("InputDiscount")
        return InputDiscount.value

    }    
}

/**
 * Muestra el precio con descuento
 */
function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice")
    const price = inputPrice.value

    const discount = obtenerDescuento();
    const precioConDescuento = calcularPrecioConDescuento(price,discount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de $" + precioConDescuento;
}




