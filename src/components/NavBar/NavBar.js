import React, { useState, useContext } from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

import ButtonLogo from "../ButtonLogo/ButtonLogo";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {CartContext} from '../../Context/CartContext'



function NavBar(){
  const {cart} = useContext(CartContext);


  return (
      <header>
        <div className="container-fluid">
          <ButtonLogo/>
          <NavLink className="title" to="/">
                    <h1 className="text-light">Descartables del Mar - Tienda Online</h1>
          </NavLink>
        </div>

          <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                  
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"> <NavLink className="nav-link text-light" to={'/category/Todo Suelto'} > Todo Suelto</NavLink></li>
                    <li className="nav-item"> <NavLink className="nav-link text-light" to={'/category/Descartables'} > Descartables</NavLink></li>
                  </ul>

                  {
                    cart.lenght === 0 ? null : <CartWidget quantity={cart.lenght}/>
                  }
                  
              </div>
            </div>
          </nav>
      </header>
    );
}

export default NavBar;