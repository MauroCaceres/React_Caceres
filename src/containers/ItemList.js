import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productos from './Item';
import Loading from './Loading';



const ItemList = ({category}) => {

    const [prod, setProd] = useState([])

    useEffect(() => {
      getProd()
    }, [category])
    
    
    const getProd = () => { 
      const getProdPromise = new Promise( (resolve, reject) =>{
          setTimeout(() => {
              resolve(productos)
          }, 1000);
      })
  
      getProdPromise.then(
          data => {
            if (category) {
                setProd( data.filter( p => p.categoria === category ) )
            } else {
                setProd( data )
            }
        })
    }

    return (
    <>
    <Loading></Loading>

        {prod.map( producto => 
                    
            <div key={producto.id} item={producto} className="mx-6 my-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4"></div>
                <Link to={`/item/${producto.id}`} className="flex flex-col items-center bg-white border hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-60" src={require('./'+ producto.img+'.jpg')} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{producto.name}</h5>
                    </div>
                </Link>
            </div>
        )}
         
    </>
    )
}

export default ItemList;