import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import Card from './components/Card';
import Footer from './components/Footer';


const App = ()=> {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <Card/>
    <Footer/>
    </>
  )
}

export default App;
