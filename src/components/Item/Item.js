import React from 'react'
import { NavLink } from 'react-router-dom';
import ItemCount from '../../containers/ItemCount/ItemCount';
import Counter from '../Counter/Counter';
import './Item.css';

export default function Item({product}) {
    return (
        <div className="itemClass">
            <NavLink to={`/item/${product.id}`}>
                <img src={product.image} alt={`Imagen de ${product.title}`}  />
            </NavLink>
            <h2 className="font-bold">{product.title}</h2>
            <h4 className="font-bold">Precio: ${product.price}</h4>
            <button className= "buttonClass">Ver Detalle</button>
            <ItemCount />
        </div>
    )
}