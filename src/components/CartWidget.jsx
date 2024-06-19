import { Link } from "react-router-dom";
import carrito from "../assets/carrito.svg";

const CartWidget = () => {
    return (
        <>
            Carrito
            <img src={carrito} alt="icono de carrito" className='icono-carrito' />
            3
        </>
    )
}
export default CartWidget;
