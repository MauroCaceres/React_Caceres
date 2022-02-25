import ItemList from './ItemList';

const ItemListContainer = (props) => {
    return (
    <>
        <h3>{props.name}</h3>
        <ItemList />
    </>
    )
}

export default ItemListContainer;