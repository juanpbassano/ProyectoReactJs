
import carrito from "../assets/carrito.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    //Traigo los productos acumulados en el carrito desde cartContext
    const { elementosDelCarrito } = useContext(CartContext)
    return (
        <>
            Carrito
            <img className='svg-carrito' src={carrito} alt="icono de carrito"/>
            <p className="element-carrito">{ elementosDelCarrito()}</p>
        </>
    )
}
export default CartWidget;
