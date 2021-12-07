import React from 'react'
import { NavLink } from 'react-router-dom'
import './BtnFinishBuy.css'

export default function BtnFinishBuy() {
    return (
        <NavLink to={`/Cart`}>
        <button className="btn btn-secondary btnFinishBuy">
            Finalizar compra
        </button>
        </NavLink>

    )
}
