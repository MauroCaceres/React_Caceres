import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productos from './Item';

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [items, setItems] = useState([])

    useEffect(() => {
      getItems()
    }, [])
    
    
    const getItems = () => { 
      const getItemsPromise = new Promise( (resolve, reject) =>{
          setTimeout(() => {
              resolve(productos)
          }, 2000);
      })
  
      getItemsPromise.then(
          Data => {
              setItems(Data)
              console.log(Data);
          }
      )
    }

    return (
    <>
        <div>Artículo seleccionado</div>
        <div>ID del Artículo: {id}</div>

    </>
    )
}

export default ItemDetailContainer;

/*DENTRO DE RETURN
        {items.map((item) => 
            <ItemDetail key={item.id} char={item}/>
        )}
*/