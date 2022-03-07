import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import productos from './Item';

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [items, setItems] = useState([])
/*
    useEffect(() => {
      getItems()
    }, [category])
    
    
    const getItems = () => { 
      const getItemsPromise = new Promise( (resolve, reject) =>{
          setTimeout(() => {
              resolve(productos)
          }, 2000);
      })
  
      getItemsPromise.then(
          Data => {
            if (category) {
                setItems( Data.filter( p => p.categoria === category ) )
            } else {
                setItems( Data )
            }
        })
    }*/


    useEffect(() => {
        getItems()
      }, [id])
      
      const getItems = () => { 
        const prodPromise = new Promise( (res, rej) => {
            setTimeout(() => {
                res(productos)
            }, 2000);
        })
        prodPromise.then( Data => {
            if (id) {
                setItems( Data.filter( p => p.id === id ) )
            } else {
                setItems( Data )
            }
        })
      }
    





    return (
    <>
     {items.map( p => <ItemDetail key={p.id} item={p} />)}
    </>
    )
}

export default ItemDetailContainer;

/*DENTRO DE RETURN
        {items.map((item) => 
            <ItemDetail key={item.id} char={item}/>
        )}
*/