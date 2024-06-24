import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector'
import React, { useContext, useState } from 'react'



const ItemDetail = ({ producto }) => {
    const {AddItemButton, carrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

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
                    AddItemButton={()=>{AddItemButton(producto, cantidad)}}/>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail