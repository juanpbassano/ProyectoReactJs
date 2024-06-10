import './App.css';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'
import Carrito from './components/Carrito';
import Login from './components/Login';
import Descripcion from './components/Descripcion';
import NoEncontrado from './components/NoEncontrado';
import { useState } from 'react';


const App = () => {
  const [filtro, setFiltro] = useState('');
  return (
    <BrowserRouter>
      <NavBar setFiltro={setFiltro} />
      <Routes>
        <Route path="/" element={<ItemListContainer filtro={filtro} />}/>
        <Route path="/itemlistcontainer/:category" element={<ItemListContainer filtro={filtro} />}/>
        <Route path="/descripcion/:id" element={<Descripcion/>} />
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<NoEncontrado/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
