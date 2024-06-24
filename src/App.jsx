import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import NoEncontrado from './components/NoEncontrado';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import CheckOut from './components/CheckOut';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Item/:id" element={<ItemDetailContainer />} />
            <Route path="/Itemlistcontainer/:category" element={<ItemListContainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/*" element={<NoEncontrado />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/CheckOut" element={<CheckOut/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App;
