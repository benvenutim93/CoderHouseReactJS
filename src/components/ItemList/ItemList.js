import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

export default function ItemList({products}) {
    
    return (
        <div className="itemListClass">
            
            {products.map( element => {
                return <Item key ={element.id} product = {element}/>   
            })}
        </div>
    )
}
