import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";


function NavBar(){
    return(

    <header>
      <CartWidget />
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h2>Tienda Online</h2>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link" href="index.html">Nosotros<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="tienda.html">Tienda</a>
                <a class="nav-item nav-link" href="contacto.html">Contacto</a>
              </div>
            </div>
        </nav>
        
    </header>
    );
}

export default NavBar;