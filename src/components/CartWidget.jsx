import carrito from '../assets/carrito.svg';
const CartWidget = () => {
    return (
        <a href="#" target='_blank' className='navButtons'>Carrito <img src={carrito} alt="icono de carrito" /> 3</a>
    )
}
export default CartWidget;
