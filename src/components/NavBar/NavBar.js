import React, {useState, useEffect} from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

import ButtonLogo from "../ButtonLogo/ButtonLogo";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function NavBar(){
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      
    })

    return(
    <header >
      
      <div className="flex">
        <ButtonLogo/>
        <NavLink to="/"><h1 className='text-5xl text-white mx-2 flex self-center'>Descartables del Mar - Tienda Online</h1></NavLink>
      </div>
        <nav className="flex flex-row">
              <a className= 'text-2xl mx-3' href="">Nosotros<span className="sr-only">(current)</span></a>
              <a className= 'text-2xl mx-3' href="shop">Tienda</a>
              <a className= 'text-2xl mx-3' href="contacto">Contacto</a>
              <CartWidget />
        </nav>
    </header>
    );
}

export default NavBar;