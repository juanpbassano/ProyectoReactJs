import ItemQuantitySelector from './ItemQuantitySelector'
import React, { useState } from 'react'

const ItemDetail = ({producto}) => {
    const [cantidad, setCantidad] = useState(1);

    const handleSumar = () => {
        cantidad < producto.stock && setCantidad(cantidad + 1);
    }
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }
    const handleAdd = () =>{
        console.log({...producto, cantidad});
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
                    <ItemQuantitySelector cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} stock={producto.stock} handleAdd={handleAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail