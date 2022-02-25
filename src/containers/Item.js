import { useEffect, useState } from 'react';

const Item = () => {
    const productos = [
        {id: '1', name: 'Pandemonium', img: '14'},
        {id: '2', name: 'Set Armadra Runa', img: '15'},
        {id: '3', name: 'Expansión Definitiva', img: '16'},
        {id: '4', name: 'Accesorios Premium', img: '17'}
    ]

    useEffect(() => {
        promesa()
        console.log('se ejectó el efecto');
    return () => {
        console.log('Limpieza de unmont');
    }
    }, [] ) 

    const promesa = () => {
        const miPromesa = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (productos)
            }, 2000);
    })

    miPromesa.then(response => {
        console.log(response);
    })
}
return(
    <>
        {productos.map( producto => 
         
        <div key={producto.id} className="mx-6 my-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4"></div>
            <a href="#" className="flex flex-col items-center bg-white border hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-60" src={require('./'+ producto.img+'.jpg')} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{producto.name}</h5>
                </div>
            </a>
        </div>

        )}   
    </>
    )
}
export default Item;