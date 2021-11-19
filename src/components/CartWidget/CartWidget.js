import React from 'react'
import cart from "../../assets/img/carrito-de-compras.png"

import './CartWidget.css';

export default function CartWidget() {
    return (
        <div clasName="justify-end">
            <img className='cartImg' src={cart}/> 
        </div>
    )
}

