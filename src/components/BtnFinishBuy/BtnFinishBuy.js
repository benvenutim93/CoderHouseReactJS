import React from 'react'
import { NavLink } from 'react-router-dom'
import './BtnFinishBuy.css'

export default function BtnFinishBuy({handleBuy}) {
    return (
        <NavLink to={`/Cart`}>
        <button onClick= {handleBuy}className="btn btn-secondary btnFinishBuy">
            Finalizar compra
        </button>
        </NavLink>

    )
}
