import React, { useState } from "react";

export default function ItemCount({stock, addToCart}){
    const [count, setCount] = useState(1);              //COUNTER STATE

function suma(){                                //COUNTER MIN MAX 
    if (count < stock) setCount(count + 1);
}
function resta(){
    if (count > 1) setCount(count - 1);
}

return <>
    <div className="container">
        <div className="border-primary container mt-5">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button onClick={resta} type="button" className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">-</button>
                <span className="mx-3">{count}</span>
                <button onClick={suma} type="button" className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">+</button>
            </div>
        </div>
        <div className="container">
            <div className="text-center d-flex flex-column">
                <button onClick={()=>addToCart(count)} type="button" className="my-4 mr-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button>
                <small className="text-muted mt-2">Stock disponible: {stock}</small>
            </div>
        </div>
    </div>
    </>;
}