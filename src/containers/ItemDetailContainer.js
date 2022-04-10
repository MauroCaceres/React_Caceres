import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from "../components/ItemDetail";
import { getProducts } from "../firebase/firebaseClient";
import Loading from "../components/Loading";

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [items, setItems] = useState([])

    const [auxIf, setAuxIf] = useState(true)


    useEffect(() => {
        getProducts().then( data => {                                           //Llamado a {productos} de firebase
            getItems(data)                                                      //Apendice Condicional
        })
      }, [id])

    const getItems = (data) => {                                              // Buscar ID dentro de DATA de Firebase

        const findItem = data.some( AnyItem => AnyItem.id === id);                 // Buscar isItem, resultado true/false

        if(findItem === true){                                                              // Condición IF true/false, mostrar ID o no existe
    
            setItems( data.filter( item => item.id === id ) )
        }
        else {
            setAuxIf(false)
        }
    }

    return (
    <>
    <Loading></Loading>
    {auxIf === true ?
    <></>
    :
    <h3>El producto no existe</h3>
    }
     {items.map( item => <ItemDetail key={item.id} item={item} />)}
    </>
    )
}

export default ItemDetailContainer;