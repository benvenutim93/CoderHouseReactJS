import React from 'react'

export default function ItemListContainer(props) {
    return (
        <div>
            <h3>Estamos trabajando para vos...</h3>
            <p>
                Proximamente encontrarás {props.products}
            </p>
        </div>
    )
}

