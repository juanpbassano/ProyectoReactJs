import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={App} />
        <Route path="/Shop" element={<ItemListContainer/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
