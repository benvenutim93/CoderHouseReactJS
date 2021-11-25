import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

export default function ItemList({products}) {
    console.log(products);
    return (
        <div className="itemListClass">
            
            {products.map( element => {
                console.log({element})
                return <Item product = {element}/>   
            })}
        </div>
    )
}
