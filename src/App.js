// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer.js';

function App() {
  return <>
    <NavBar />
    <ItemListContainer name='Mi sitio E-Commerce!' />
  </>;
}

export default App