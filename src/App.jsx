import './App.css';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer'
import Carrito from './components/Carrito';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Shop" element={<ItemListContainer/>} />
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
