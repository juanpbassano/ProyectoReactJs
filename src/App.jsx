import './App.css';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'
import Carrito from './components/Carrito';
import Login from './components/Login';
import Descripcion from './components/Descripcion';
import NoEncontrado from './components/NoEncontrado';



const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/itemlistcontainer/:category" element={<ItemListContainer/>}/>
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
