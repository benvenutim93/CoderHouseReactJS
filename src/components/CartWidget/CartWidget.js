import React from 'react'
import logo from '../../assets/img/logoDescartablesDelMar.png';
import './CartWidget.css';

export default function CartWidget() {
    return (
        <div>
            <img src={logo} className="Logo-Nav"/>
            <h1>Descartables del Mar</h1>
        </div>
    )
}

