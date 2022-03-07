// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer.js';
import ItemDetailContainer from './containers/ItemDetailContainer';


function App() {
  return <>

    <BrowserRouter>
      <NavBar></NavBar>
      
      <Routes>

        <Route index element={<ItemListContainer/>}></Route>

        <Route path='categoria' element={<ItemListContainer/>}>
          <Route path=':category' element={<ItemListContainer/>}></Route>
        </Route>

        <Route path='item' element={<ItemDetailContainer/>}>
          <Route path=':id' element={<ItemDetailContainer/>}></Route>
        </Route>

      </Routes>

    </BrowserRouter>
  </>;
}

export default App