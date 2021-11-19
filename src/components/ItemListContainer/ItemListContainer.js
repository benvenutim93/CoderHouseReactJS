import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer(props) {

    

    return (
        <div>
            <h3 className= 'font-black'>Estamos trabajando para vos...</h3>
            <p>
                Proximamente encontrarás {props.products}
            </p>
            <ItemCount />
        </div>
    )
}

