import React, { useState, useEffect } from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

import ButtonLogo from "../ButtonLogo/ButtonLogo";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetCategories } from "../../services/ApiCall";



function NavBar(){
  const [categories, setCategories] = useState();

  useEffect(() => {
  
    const promise = GetCategories();
    promise.then(data => setCategories(data));
  
  },[]);

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
                    {
                      
                      categories !== undefined ? 
                        categories.map(cat => <li className="nav-item" key={cat} > 
                        <NavLink className="nav-link text-light" to={`/category/${cat}`}> 
                        {cat}
                        </NavLink>
                        </li>) : null
                    }
                    {/* <li className="nav-item"> <NavLink className="nav-link text-light" to={'/category/electronics'} > Electrónica</NavLink></li>
                    <li className="nav-item"> <NavLink className="nav-link text-light" to={'/category/jewelery'} >    Joyas</NavLink></li>
                    <li className="nav-item"> <NavLink className="nav-link text-light" to={"/category/men's clothing"}> Ropa Hombres </NavLink></li>
                    <li className="nav-item"> <NavLink className="nav-link text-light" to={"/category/women's clothing"}  >Ropa Mujeres </NavLink></li> */}
                  </ul>

                  
                  <CartWidget/>
              </div>
            </div>
          </nav>
      </header>
    );
}

export default NavBar;