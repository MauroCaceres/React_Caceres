import { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({children}) {

    const [itemsCart, setItemsCart] = useState([]);

    function addItem(item, quantity){               //Agregar carrito

        if(isItemInCart(item.id)){                  //Condición IF ID existe o no en carrito

            let index = itemsCart.findIndex(i => i.id === item.id);
            let copyCart = [...itemsCart];
            copyCart[index].quantity = quantity; //Sustituye el quantity anterior
            setItemsCart(copyCart);
        }
        else{
            const itemToAdd = {...item, quantity};
            setItemsCart([...itemsCart, itemToAdd]); //Agrega un nuevo quantity al array
        }
    }

    function isItemInCart(id){                               //Buscar carrito 
        return itemsCart.some( anyItem => anyItem.id === id);
    }

    function clearCart(){;                               //Limpiar carrito
    setItemsCart([]);
    }

    console.log(itemsCart);                     //PRUEBA de Array CONTEXT
    
    return (
        <CartContext.Provider value={{addItem, itemsCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;





    /*
    useEffect(() => {
        console.log('items', itemsInCart);
    }, [itemsInCart])

    const addToCart = (item) => {
        setItemsInCart( (prevItems) => {
            return prevItems.concat(item)
        })
    }

    const removeFromCart = (itemId) => {
        setItemsInCart( (prevItems) => {
            return prevItems.filter( i => i.id !== itemId )
        })
    }

    const context = {
        items: itemsInCart,
        addItem: addToCart,
        removeItem: removeFromCart
    }
    */