
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
 * Muestra el precio con descuento
 */
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice")
    const price = inputPrice.value
    
    const InputCupon = document.getElementById("InputCupon")
    const claveCupon = InputCupon.value

    const cuponValido = cupones.find(cupon => cupon.clave === claveCupon)
    const discount = cuponValido.porcentaje

    const precioConDescuento = calcularPrecioConDescuento(price,discount);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de $" + precioConDescuento;
}




