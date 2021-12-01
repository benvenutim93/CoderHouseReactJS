import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logoDescartablesDelMar.png';
import './ButtonLogo.css'

export default function ButtonLogo() {
    return (
        <button>
            <NavLink to="/">
                <img className='classLogo' src={logo} alt="Logo de Del Mar"/>
            </NavLink>
        </button>
    )
}
