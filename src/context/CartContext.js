import { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({children}) {

    const [itemsCart, setItemsCart] = useState([]);

    function addItem(item, quantity){                                                                           //Agregar carrito

        if(isItemInCart(item.id)){                                                                              //Condición IF ID existe o no en carrito

            let index = itemsCart.findIndex(i => i.id === item.id);
            let copyCart = [...itemsCart];
            copyCart[index].quantity = quantity;                                                                //Sustituye el quantity anterior
            setItemsCart(copyCart);
        }
        else{
            const itemToAdd = {...item, quantity};
            setItemsCart([...itemsCart, itemToAdd]);                                                         //Agrega un nuevo quantity al array
        }
    }

    function isItemInCart(id){                                                                                 //Buscar carrito 
        return itemsCart.some( anyItem => anyItem.id === id);
    }

    function clearCart(){;                                                                                     //Limpiar carrito
    setItemsCart([]);
    }

    function removeItem(id){                                                                                 //Remover del carrito
        let DeleteCart = [...itemsCart];
        let index = DeleteCart.filter(i => i.id !== id);
        setItemsCart(index)
    }

    const totalPrice = itemsCart.reduce ((accum, item) => accum + (item.precio * item.quantity), 0)          // Suma de (Precio x Quantity) de Array CONTEXT

    const totalQuantity = itemsCart.reduce((accum,item) => accum + item.quantity, 0);                       // Suma de Quantities de Array CONTEXT

    //console.log(totalQuantity)                                                                               //PRUEBA de Suma de Quantities Array CONTEXT

    //console.log(totalPrice)                                                                                  //PRUEBAS de Suma de (Precio x Quantity) de Array CONTEXT

    //console.log(itemsCart);                                                                                  //PRUEBA de Array CONTEXT
    
    return (
        <CartContext.Provider value={{addItem, itemsCart, clearCart, removeItem, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;