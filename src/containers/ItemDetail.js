import { useParams } from "react-router-dom";

const ItemDetail = ({char: item}) => {

    const {id} = useParams();
    
    return (
    <>

        <div>Artículo seleccionado</div>
        <div>ID del Artículo: {id}</div>

    </>
    )
}

export default ItemDetail;

/*DENTRO DE RETURN        
<div key={item.id} className="mx-6 my-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
<div className="flex justify-end px-4 pt-4"></div>
<div className="flex flex-col items-center bg-white border hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full h-60" src={require('./'+ item.img+'.jpg')} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
    </div>
</div>
</div>
*/