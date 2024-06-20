import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector'
import React, { useContext, useState } from 'react'
import {existeEnCarrito} from "../helpers/existeEnCarrito"


const ItemDetail = ({ producto }) => {
    const { carrito, setCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleSumar = () => {
        cantidad < producto.stock && setCantidad(cantidad + 1);
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const AddItemButton = () => {
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


    return (
        <div>
            <div className='descr-conteiner'>
                <div className='descr-cont-img'>
                    <img className='descr-img-producto' src={producto.imagen} alt={'foto de ' + producto.nombre} />
                </div>
                <div className='descr-detalle'>
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <p>Precio:${producto.precio}</p>
                </div>
                <div>
                    <ItemQuantitySelector 
                    cantidad={cantidad} 
                    handleSumar={handleSumar} 
                    handleRestar={handleRestar} 
                    stock={producto.stock} 
                    AddItemButton={()=>{AddItemButton(producto, cantidad)}}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail