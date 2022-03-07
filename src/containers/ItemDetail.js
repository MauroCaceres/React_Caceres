

const ItemDetail = ({item:p}) => {


    
    return (
    <>

        <div>Artículo seleccionado</div>
        <div>ID del Artículo: {p.id}</div>

        <div className="m-4 max-w-sm w-full lg:max-w-full lg:flex border-r border-b border-l border-t border-gray-400 rounded-md">
  <img className=" h-60 flex-none bg-cover text-center overflow-hidden rounded-md" alt="" src={require('./'+ p.img+'.jpg')}>
  </img>
  <div className="p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2">{p.presentacion}</div>
      <br/>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div className="flex items-center">
      <div className="text-sm">
        <h1 className="text-gray-900 leading-none font-bold">PRECIO</h1>
        <br/>
        <p className="text-gray-600 font-bold">{p.precio}</p>
      </div>
    </div>
  </div>
</div>
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