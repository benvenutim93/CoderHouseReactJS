import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../assets/img/logoDescartablesDelMar.png';


function NavBar(){
    return(

    <header >
      <div className="flex">
        <img className='classLogo' src={logo} alt="Logo de Del Mar"/>
        <h1 className='text-5xl text-white mx-2 flex self-center'>Descartables del Mar - Tienda Online</h1>
      </div>
        <nav className="flex flex-row">
              <a className= 'text-2xl mx-3' href="">Nosotros<span class="sr-only">(current)</span></a>
              <a className= 'text-2xl mx-3' href="shop">Tienda</a>
              <a className= 'text-2xl mx-3' href="contacto">Contacto</a>
              <CartWidget />
        </nav>
    </header>
    );
}

export default NavBar;