import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { carrito, totalPagar, limpiarCarrito, borrarProducto } = useContext(CartContext);
  const vaciarCarrito = () => {
    limpiarCarrito();
  }

  return (
    <div className='cont-carrito'>
      <h1 className='tit-carrito'>Productos en el carrito</h1>
      {carrito && carrito.map((producto) => (
        <div key={producto.id} className='card-carrito'>
          <h3 className='tit-product'>{producto.nombre}</h3>
          <p>Precio unitario: ${producto.precio}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Precio total: ${producto.precio * producto.cantidad}</p>
          <div className='cont-btn-borrar'>
            <button className='btn-borrar' onClick={() => borrarProducto(producto.id)}>Borrar</button>          </div>
        </div>
      ))
      }
      <h3>Precio a pagar: ${totalPagar()}</h3>
      <div className='cont-btn-compra'>
        <button className='btn-vaciar' onClick={vaciarCarrito} disabled={carrito.length < 1}>Vaciar</button>
        <Link to={`/checkout`}><button className='btn-pagar' disabled={carrito.length < 1}>Confirmar compra</button></Link>
      </div>
    </div>
  )
}

export default Carrito