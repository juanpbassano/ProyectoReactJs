import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ({ setFiltro }) => {
    const handleClickA = (e) => {
        console.log(e.target.id);
        if (e.target.id === "frescos") {
            setFiltro("frescos")
        } else {
            setFiltro("almacen")
        }
    };


    return (
        <header>
            <nav>
                <div className='navContainer'>
                    <h1 className='titulo'>Ecomerce con react</h1>
                    <div>
                        <input className='search' id="text" type="search" required placeholder="Buscadar productos" />
                    </div>
                    <ul className='contButtons'>
                        <Link to={`/itemlistcontainer/frescos`}><li onClick={handleClickA} id="frescos" className='navButtons'>Productos Frescos</li></Link>
                        <Link to={`/itemlistcontainer/almacen`}><li onClick={handleClickA} id="almacen" className='navButtons' >Productos de Almacen</li></Link>
                        <Link to={`/`}><li className='navButtons'>Home</li></Link>
                        <Link to={'./carrito'}><CartWidget /></Link>
                        <Link to={`/Login`}><li className='navButtons'>Login/Signup</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;
