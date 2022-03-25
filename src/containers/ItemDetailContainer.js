import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { getProducts } from "../firebase/firebaseClient";
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts().then( data => {       //Llamado a {productos} de firebase
            getItems(data)              //Apendice Condicional
        })
      }, [id])
      
      const getItems = (data) => { // Condicional Mostrar ID

             if (id) {              //IF ID esta definido, entonces filtrar, sino muestro todo
                setItems( data.filter( item => item.id === id ) )
            } else {
                setItems( data )
            }
      }
    
    return (
    <>
    <Loading></Loading>
     {items.map( item => <ItemDetail key={item.id} item={item} />)}
    </>
    )
}

export default ItemDetailContainer;

/*DENTRO DE RETURN
        {items.map((item) => 
            <ItemDetail key={item.id} char={item}/>
        )}
*/