import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer';
import NoEncontrado from './components/NoEncontrado';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';




const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/Item/:id" element={<ItemDetailContainer/>} />
        <Route path="/Itemlistcontainer/:category" element={<ItemListContainer/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/*" element={<NoEncontrado/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
