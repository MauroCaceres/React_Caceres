import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
//PRUEBA

const ItemListContainer = (props) => {

    const {category} = useParams()

    return (
    <>
        <ItemList category={category}/>
    </>
    )
}

export default ItemListContainer;