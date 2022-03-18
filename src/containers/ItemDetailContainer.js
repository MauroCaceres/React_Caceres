import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import productos from './Item';
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
      }, [id])
      
      const getItems = () => { 
        const prodPromise = new Promise( (res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 1000);
        })
        prodPromise.then( Data => {
            if (id) {
                setItems( Data.filter( item => item.id === id ) )
            } else {
                setItems( Data )
            }
        })
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