import carrito from "../assets/carrito.svg";
import { Link } from 'react-router-dom';

const NavBar = () => {


    const handlerChange=(e)=>{
        /* console.log(e.target.value);
        recibe(e.target.value) */
    }


    return (
        <header>
            <nav>
                <div className='navContainer'>
                    <h1 className='titulo'>Ecomerce con react</h1>
                    <div>
                        <input className='search' id="submit" type="search" 
                        required placeholder="Buscadar productos" onChange={handlerChange} />
                    </div>
                    <ul className='contButtons'>
                        <Link to={`/`}><li className='navButtons'>Home</li></Link>
                        <Link to={`/itemlistcontainer/frescos`}><li id="frescos" className='navButtons'>Productos Frescos</li></Link>
                        <Link to={`/itemlistcontainer/almacen`}><li id="almacen" className='navButtons' >Productos de Almacen</li></Link>
                        <Link to={`/CartWidget`}><li className='carButtons'>Carrito <img src={carrito} alt="icono de carrito" className='icono-carrito'/>3</li></Link>
                        <Link to={`/Login`}><li className='navButtons'>Login</li></Link>
                        <Link to={`/Contacto`}><li className='navButtons'>Contacto</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;
