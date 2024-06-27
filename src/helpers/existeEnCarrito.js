//funcion que filtra los productos que estan en el carrito 
export function existeEnCarrito(carrito, addedProduct ) {
    return carrito.find((producto)=> producto.id === addedProduct.id)
}