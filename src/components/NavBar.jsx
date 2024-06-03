import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header>
            <nav>
                <div className='navContainer'>
                    <h1 className='titulo'>Ecomerce con react</h1>
                    <div>
                        <input className='search' id="search" type="search" required placeholder="Buscador" />
                    </div>
                    <ul className='contButtons'>
                        <li className='navButtons'><Link to={`/`}>Home</Link></li>
                        <Link to={'./carrito'}><CartWidget/></Link>
                        <li className='navButtons'><Link to={`/Login`}>Login/Signup</Link></li>
                    </ul>
                </div>
            </nav>
        </header> 
    )
}
export default NavBar;
