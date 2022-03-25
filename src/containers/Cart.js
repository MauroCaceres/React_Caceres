import CartContext from '../context/CartContext';
import React, { useContext } from 'react';
import Logo from '../components/Logo';
import { Link } from "react-router-dom"

const Cart = () => {

  const {itemsCart, removeItem, totalPrice} = useContext(CartContext);

    function removeHandler (id) {                     //Apéndice Remover del Carrito
    removeItem(id)
  }

  return (
    <>
    { itemsCart.length!==0?

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Producto
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Categoria
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Precio
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Cantidad
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Precio Total
                      </th>
                  </tr>
              </thead>
              {itemsCart.map( producto => 
              <tbody key={producto.id} item={producto}>
                  <tr className=" odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" className=" px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {producto.name}
                        </th>
                        <td className="px-10 py-4">
                            {producto.categoria}
                        </td>
                        <td className="px-8 py-4">
                            $ {producto.precio}
                        </td>
                        <td className="px-12 py-4">
                            {producto.quantity}
                        </td>
                        <td className="px-4 py-4 text-right">
                            <button onClick={()=>removeHandler(producto.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">ELIMINAR</button>
                        </td>
                    </tr>
                </tbody>
                  )}
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-8 py-3">

                      </th>
                      <th scope="col" className="px-8 py-3">

                      </th>
                      <th scope="col" className="px-8 py-3">

                      </th>
                      <th scope="col" className="px-8 py-3">

                      </th>
                      <th scope="col" className="px-12 py-3 ">
                        $ {totalPrice}
                      </th>
                  </tr>
              </thead>
            </table>            
        </div>
        :
        <div className="flex items-center justify-center h-screen content-center">
    
            <div className="bg-green-100 font-bold rounded-lg border shadow-lg p-5">
                ¡No hay compras en el carrito!
                <div>Haz click en el logo para volver</div>
                <Link to='/'>
                   <Logo/>
                </Link>

            </div>

        
        </div>
        }
    </>
  )
}

export default Cart