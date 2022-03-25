import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from "../firebase/firebaseClient";
import { useEffect, useState } from 'react';
import Loading from './Loading';

const ItemListContainer = () => {

    const {category} = useParams()

    const [prod, setProd] = useState([])

    useEffect(() => {
        getProducts().then( data => {       //Llamado a {productos} de firebase
            getProd(data)               //Apendice Condicional
        })
    }, [category])
    
    
    const getProd = (data) => { // Condicional Mostrar categoria
        
        if (category) {             //IF category esta definido, entonces filtrar, sino muestro todo
              setProd( data.filter( p => p.categoria === category ) )
          } else {
              setProd( data )
          }
      }

    return (
    <>
        <Loading></Loading>
        {prod.map( producto => <ItemList key={producto.id} producto={producto} /> )}
    </>
    )
}

export default ItemListContainer;