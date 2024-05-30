import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Carrito from './components/Carrito';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<ItemListContainer/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
