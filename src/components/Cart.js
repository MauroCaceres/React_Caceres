import CartContext from '../context/CartContext';
import React, { useContext, useState } from 'react';
import Logo from '../components/Logo';
import { Link } from "react-router-dom"
import { addOrder } from "../firebase/firebaseClient";

const Cart = () => {

    const [showId, setShowId] = useState();                 //para mostrar el ID en el modal

    const [showModal, setShowModal] = useState(false);              //para mostrar el modal

    const [ifBuy, setIfBuy] = useState(false)               //useState del condicional de compra hecha

    const [ifEmail, setIfEmail] = useState(false)               //useState del condicional de email

    const {itemsCart, removeItem, totalPrice, clearCart} = useContext(CartContext);

    const initialFormData = Object.freeze({             //Data del Formulario
        name:"",
        lastname:"",
        email:"",
        email2:"",
        phone:"",
        country:"", 
        totalprice:totalPrice,
        purchase:itemsCart,
    });

    const [formData, updateFormData] = useState(initialFormData);
  
    const handleChange = (e) => {                           // referencia a cada INPUT
        updateFormData({...formData,

        [e.target.name]: e.target.value.trim()                  //Corta los espacios en blanco de sobra del Form
        });
    };
  
    const handleSubmit = (e) => {                   // Envia datos a Firebase con Submit del Formulario
        
        e.preventDefault()
        
        if((formData.email === formData.email2) && (formData.email !== "") && (formData.name !== "") && (formData.lastname !== "")&& (formData.country !== "")&& (formData.phone !== "")){                 //IF email 1 es igual a email 2

            setIfEmail(true)

            const formDataArr = Object.entries(formData);               //Convierte formData en Array, quita email2 y vuelve a convertirlo en Objeto
            const filteredArr = formDataArr.filter(function ([key, value]) {return key !== "email2";});
            const order = Object.fromEntries(filteredArr);              //Convierte array de vuelta a objeto
            //console.log(order);

            addOrder(order).then( data => {                             // Envia los datos de order a orders de Firebase
                //console.log(data);
                setIfBuy(true)                               //Condicional IF hecha la compra
                setShowId(data)                              //Muestra ID en el modal
                setShowModal(true)                           //Muestra modal

            })
        }
        else{
            setIfEmail(false)                                               // Muestra en DOM que los mails no coinciden
            //console.log("son Emails diferentes");
        }
    };

    function removeHandler (id) {                                                      //Apéndice Remover del Carrito
        removeItem(id)
    }

  return (
    <>
    { itemsCart.length!==0?
        <div className="mx-10 my-5">
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
                                <Link className='text-lg hover:text-blue-500' to={'/item/' + producto.id}>
                                    {producto.name}
                                </Link>
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
                            <button onClick={clearCart} type="button" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Vaciar carrito</button>
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

            { 
            ifBuy === true ?

                <>
                    {showModal ? (
                        <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl text-green-700 font-semibold">
                                    ¡La compra fue un éxito!
                                </h3>

                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <h3 className="text-4xl font-bold text-center text-red-900 ">
                                        ID =   {showId}
                                    </h3>
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Recomendamos que copies y guardes esta ID por si surgen futuros inconvenientes o dudas de tu pedido y así poder corroborar tu identidad en la entrega.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => { setShowModal(false); clearCart() }}
                                >
                                    Cerrar ventana
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </>

                :

            <div className="mx-10 my-10">

                {
                    ifEmail === true ?
                    <></>
                :
                    <h3 className='text-red-600 my-2'>¡El email no coincide o no completaste todos los campos!</h3>
                }

                <form id="dataForm">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="email2" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange}/>
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirmar Email</label>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="lastname" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} />
                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono (111-2222-3333)</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="country" id="floating_country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} />
                            <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">País (Ej. Argentina)</label>
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit} >Terminar Compra</button>
                </form>
            </div>
            }

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