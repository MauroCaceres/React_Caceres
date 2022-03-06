import ItemList from './ItemList';
//PRUEBA
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = (props) => {
    return (
    <>
        <h3>{props.name}</h3>
        <ItemList />
    </>
    )
}

export default ItemListContainer;