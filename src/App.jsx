import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <NavBar />
        <ItemListContainer />
        <Footer />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
