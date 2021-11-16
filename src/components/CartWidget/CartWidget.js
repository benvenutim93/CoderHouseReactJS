import React from 'react'
import logo from '../../img/logoDescartablesDelMar.png'
import './CartWidget.css';

export default function CartWidget() {
    return (
        <div className="flex-div">
            <img src={logo} className="Logo-Nav"/>
            <h1>Descartables del Mar</h1>
        </div>
    )
}
