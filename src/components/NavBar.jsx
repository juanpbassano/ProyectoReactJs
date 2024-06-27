import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
    //links de la barra de navegacion con rutas hacia los componentes
    return (
        <header>
            <nav>
                <div className='navContainer'>
                    <Link to={`/`}><h1 className='titulo'>Despensa Atomica</h1></Link>
                    <ul className='contButtons'>
                        <Link to={`/`}><li className='navButtons'>Home</li></Link>
                        <Link to={`/itemlistcontainer/frescos`}><li id="frescos" className='navButtons'>Productos Frescos</li></Link>
                        <Link to={`/itemlistcontainer/almacen`}><li id="almacen" className='navButtons' >Productos de Almacen</li></Link>
                        <Link to={`/Carrito`}><li className='carButtons'><CartWidget /></li></Link>
                        <Link to={`/Contacto`}><li className='navButtons'>Contacto</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;
