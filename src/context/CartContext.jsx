import { createContext, useEffect, useState } from "react";
import { existeEnCarrito } from '../helpers/existeEnCarrito'
import { getStockFromFirebase } from "../firebaseConfig";
import Swal from "sweetalert2";


export const CartContext = createContext();

const carritoEnLocal = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoEnLocal)

    const AddItemButton = async (producto, cantidad) => {
        const stockDisponible = await getStockFromFirebase(producto.id);
        const productoEnCarrito = carrito.find(item => item.id === producto.id);
        const cantidadTotal = productoEnCarrito ? productoEnCarrito.cantidad + cantidad : cantidad;

        if (cantidadTotal > stockDisponible) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "No hay suficiente Stock",
                showConfirmButton: false,
                timer: 800
            });
            return;
        }

        const addedProduct = { ...producto, cantidad };
        const carritoCopia = [...carrito];
        const enElCarrito = existeEnCarrito(carritoCopia, addedProduct);

        if (enElCarrito) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto agregado",
                showConfirmButton: false,
                timer: 800
            });
            enElCarrito.cantidad += cantidad;
        } else {
            carritoCopia.push(addedProduct);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Producto agregado",
                showConfirmButton: false,
                timer: 800
            });
        }
        setCarrito(carritoCopia)
    }

    const borrarProducto = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto Borrado",
            showConfirmButton: false,
            timer: 800
        });
    };

    const elementosDelCarrito = () => {
        return carrito.reduce((acu, producto) => acu + producto.cantidad, 0);
    }

    const totalPagar = () => {
        return carrito.reduce((acu, producto) => acu + producto.precio * producto.cantidad, 0);
    }
    const limpiarCarrito = () => {
        setCarrito([]);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Carrito Vacio",
            showConfirmButton: false,
            timer: 800
        });
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
