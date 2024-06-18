import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget';
import Login from './components/Login';
import ItemDetailContainer from './components/ItemDetailContainer';
import NoEncontrado from './components/NoEncontrado';
import Contacto from './components/Contacto';



const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/Itemlistcontainer/:category" element={<ItemListContainer/>}/>
        <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer/>} />
        <Route path="/CartWidget" element={<CartWidget/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/*" element={<NoEncontrado/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
