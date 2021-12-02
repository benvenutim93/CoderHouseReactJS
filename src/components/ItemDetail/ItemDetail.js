import React from 'react'
import ItemCount from '../../containers/ItemCount/ItemCount'


export default function ItemDetail({item}) {
    return (
        <div className="itemClass border-4 border-black">
            <img src={item?.image} alt={`Imagen de ${item?.title}`}  />
            <h2 className="font-bold">{item?.title}</h2>
            <h3>Categoria: {item?.category}</h3>
            <p>Descripcion: {item?.description}</p>
            <h4 className="font-bold">Precio: $ {item?.price}</h4>
            <ItemCount/>
        </div>
    )
}
