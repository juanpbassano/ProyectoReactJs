export function existeEnCarrito(carrito, addedProduct ) {
    return carrito.find((producto)=> producto.id === addedProduct.id)
}