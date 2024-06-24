import { createContext, useEffect, useState } from "react";
import { existeEnCarrito } from '../helpers/existeEnCarrito'

export const CartContext = createContext();

const carritoEnLocal = JSON.parse(localStorage.getItem("carrito")) || [];
export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoEnLocal)

    const AddItemButton = (producto, cantidad) => {
        const addedProduct = { ...producto, cantidad };
        const carritoCopia = [...carrito];
        const enElCarrito = existeEnCarrito(carritoCopia, addedProduct);
        if (enElCarrito) {
            enElCarrito.cantidad += cantidad;
        } else {
            carritoCopia.push(addedProduct);
        }
        setCarrito(carritoCopia)
    }
    const borrarProducto = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
    };

    const elementosDelCarrito = () => {
        return carrito.reduce((acu, producto) => acu + producto.cantidad, 0);
    }

    const totalPagar = () => {
        return carrito.reduce((acu, producto) => acu + producto.precio * producto.cantidad, 0);
    }
    const limpiarCarrito = () => {
        setCarrito([]);
    }
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])


    return (
        <CartContext.Provider value={{ carrito, AddItemButton, elementosDelCarrito, totalPagar, limpiarCarrito, borrarProducto }}>
            {children}
        </CartContext.Provider>
    )
}
