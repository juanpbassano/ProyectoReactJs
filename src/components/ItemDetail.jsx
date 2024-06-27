import { CartContext } from '../context/CartContext';
import { getStockFromFirebase } from '../firebaseConfig';
import ItemQuantitySelector from './ItemQuantitySelector'
import React, { useContext, useEffect, useState } from 'react'
import Swal from "sweetalert2";

//recibe producto como prop
const ItemDetail = ({ producto }) => {
    //traigo del contexto la funcion para agrergar al carrito y el array carrito
    const { AddItemButton, carrito } = useContext(CartContext);
    //estado para modificar el estado de cantidad de productos
    const [cantidad, setCantidad] = useState(1);
    //estado que cambia si esta agodado el stock
    const [agotado, setAgotado] = useState(false);

    //verifica el stock disponible y actualiza el estado de agotado
    useEffect(() => {
        const checkStock = async () => {
            //obtiene el stock disponible desde Firebase por id y cambia el estado de agotado.
            const stockDisponible = await getStockFromFirebase(producto.id);
            const productoEnCarrito = carrito.find(item => item.id === producto.id);
            const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;
            if (cantidadEnCarrito >= stockDisponible) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Se agrego todo el stock disponible en el carrito",
                    showConfirmButton: false,
                    timer: 800
                });
                setAgotado(true);
            } else {
                setAgotado(false);
            }
        };
        //llamado a la funcion para que se ejecute
        checkStock();
    }, [carrito, producto.id]);


    //funciones para los botones de + y -
    const handleSumar = () => {
        cantidad < producto.stock && setCantidad(cantidad + 1);
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    return (
        <div>
            <div className='descr-conteiner'>
                <div className='descr-cont-img'>
                    <img className='descr-img-producto' src={producto.imagen} alt={'foto de ' + producto.nombre} />
                </div>
                <div className='descr-detalle'>
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <p className='precio'>Precio:${producto.precio}</p>
                </div>
                <div>
                    <ItemQuantitySelector
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        stock={producto.stock}
                        AddItemButton={() => { AddItemButton(producto, cantidad) }} agotado={agotado} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail