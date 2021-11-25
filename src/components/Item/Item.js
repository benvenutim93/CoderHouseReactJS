import React from 'react'
import './Item.css';

export default function Item({product}) {
    return (
        <div className="itemClass border-4 border-black">
            <img src={product.image} alt={`Imagen de ${product.title}`}  />
            <h2 className="font-bold">{product.title}</h2>
            <h4>Descripcion: </h4> <p>{product.description}</p>
            <h4 className="font-bold">Precio: ${product.price}</h4>
        </div>
    )
}