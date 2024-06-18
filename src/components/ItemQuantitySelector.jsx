import React from 'react'

const ItemQuantitySelector = ( {cantidad, handleRestar, handleSumar, stock, handleAdd}) => {

    return (
        <div className='descr-botones'>
            <span className="tit-cant">Seleccione la cantidad</span>
            <div className="botones-stock">
                <button onClick={handleRestar} disabled={cantidad <= 1} className="btn-restar">-</button>
                <span className="cantidad">{cantidad}</span>
                <button onClick={handleSumar} disabled={cantidad >= stock} className="btn-sumar">+</button>
            </div>
            <div className="cont-btn-add">
                <button className="btn-add-cart" onClick={handleAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemQuantitySelector;