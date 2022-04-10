import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom"

function ItemDetail  ({item}){

  const {itemsCart, addItem, removeItem} = useContext(CartContext);                //Referencia CONTEXT

  const [isInCart, setIsInCart] = useState(false)                                   //Apendice IF ocultar y mostrar en return


  useEffect(() => {                                                                 //Pre-render condicional
    conditionIf(item)
  })

  function conditionIf (){                                                          //Segunda Condición IF useEffect
    
    let isItem = itemsCart.some( AnyItem => AnyItem.id === item.id);                 //Buscar isItem, resultado true/false

    if(isItem === true){                                                              //Condición IF ID existe o no en carrito

      setIsInCart(true)
    }
  }

  function addToCart(quantity){                                                       //Apendice de "Agregar carrito" en CONTEXT
    addItem(item, quantity);
  }

  function removeHandler (id) {                                                        //Apéndice Remover del Carrito
    removeItem(id)
    setIsInCart(false)                                                                  //Llamador a re-render
  }

    return (
    <>
        <div className="m-4 max-w-sm w-full lg:max-w-full lg:flex border-r border-b border-l border-t border-gray-400 rounded-md">
        <img className=" h-60 flex-none bg-cover text-center overflow-hidden rounded-md" alt="" src={require('../img/'+ item.img+'.jpg')}></img>
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

                    <>
                    <Link to='/cart'>
                    <button type="button" className="mb-7 bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">Terminar Compra</button>
                    </Link>
                    <button onClick={()=>removeHandler(item.id)} type="button" className="mb-7 ml-4 bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded">Remover del Carrito</button>
                    </>

                  :
                      
                    <ItemCount addToCart={addToCart} stock={item.stock}/>
                  }
              
              <br/>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default ItemDetail