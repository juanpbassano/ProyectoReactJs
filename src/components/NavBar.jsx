import CartWidget from './CartWidget';

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
                        <a href="#" target='_blank' className='navButtons' >Home</a>
                        <a href="#" target='_blank' className='navButtons'>Shop</a>
                        <CartWidget />
                        <a href="#" target='_blank' className='navButtons'>Login/Signup</a>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;
