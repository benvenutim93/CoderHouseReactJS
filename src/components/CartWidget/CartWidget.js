import React from 'react'
import cart from "../../assets/img/carrito-de-compras.png"

import './CartWidget.css';

export default function CartWidget() {
    return (
        <div className="justify-end">
            <img className='cartImg' src={cart} alt="Imagen de Carrito de compras"/> 
        </div>
    )
}

