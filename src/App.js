import React, { useState } from 'react';
import './App.css';

// import { useState, createContext } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import  Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';

function App() {

    return (
        
    <div className='App'> 
      {/* <Context.Provider value={{ value1:'valor a compartir', value2:'otro valor'}}>  */}
      
      <CartContextProvider>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Todos los productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoria: '/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              
            </Routes>     
        </BrowserRouter>
        </CartContextProvider>
        
       {/* </Context.Provider> */}
        </div>
    )
}

export default App