import carrito from '../assets/carrito.svg';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <li className='navButtons'><Link to={`/carrito`}>Carrito <img src={carrito} alt="icono de carrito" className='icono-carrito'/> 3</Link></li>
    )
}
export default CartWidget;
