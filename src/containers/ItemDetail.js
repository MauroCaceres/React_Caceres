import React, { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom"

function ItemDetail  ({item}){

  const {addItem, clearCart} = useContext(CartContext); //Referencia CONTEXT

  const [isInCart, setIsInCart] = useState(false) //Apendice IF ocultar y mostrar en return

  function addToCart(quantity){               //Apendice de "Agregar carrito" en CONTEXT
    addItem(item, quantity);
    setIsInCart(true);                      //Apendice IF ocultar y mostrar en return
  }

    return (
    <>
        <div>Artículo seleccionado</div>
        <div>ID del Artículo: {item.id}</div>

        <div className="m-4 max-w-sm w-full lg:max-w-full lg:flex border-r border-b border-l border-t border-gray-400 rounded-md">
        <img className=" h-60 flex-none bg-cover text-center overflow-hidden rounded-md" alt="" src={require('./'+ item.img+'.jpg')}></img>
        <div className="p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{item.presentacion}</div>
            <br/>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          <div className="flex items-center">
            <div className="text-sm">
              <h1 className="text-gray-900 leading-none font-bold">PRECIO</h1>
              <br/>
              <p className="text-gray-600 font-bold">$ {item.precio}</p>
              <br/>

              {
                isInCart ?
                <Link to='/cart'>
                <button type="button" className="mb-7 bg-purple-700 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded">Terminar Compra</button>
                </Link>

                :

                <ItemCount addToCart={addToCart} stock={item.stock}/>
              }

              <br/>
              <button onClick={clearCart} type="button" className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">Vaciar carrito</button>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default ItemDetail









/*
  const addHandler = () => {
      addItem( {id:(p.id), name:(p.name), precio:(p.precio), quantity: 1} )
  }
*/

// <button onClick={addHandler}>Agregar al carrito</button> (dentro de return)