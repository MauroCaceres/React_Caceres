import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer.js';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './containers/Cart';

import { CartContextProvider } from "./context/CartContext";


function App() {
  return <>
    <CartContextProvider>
    <BrowserRouter>

      <NavBar></NavBar>
      
      <Routes>
        <Route index element={<ItemListContainer/>}></Route>

        <Route path='cart' element={<Cart/>}></Route>

        <Route path='categoria' element={<ItemListContainer/>}>
          <Route path=':category' element={<ItemListContainer/>}></Route>
        </Route>

        <Route path='item' element={<ItemDetailContainer/>}>
          <Route path=':id' element={<ItemDetailContainer/>}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
    </CartContextProvider>
  </>;
}

export default App