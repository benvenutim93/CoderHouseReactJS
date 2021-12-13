import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import CartItem from './../CartItem/CartItem';
import './Cart.css'

export default function Cart() {

    const {cart, totalPrice} = useContext(CartContext);
    return (
        <div>
            {
                cart.length === 0 ? 

                <>
                <h3>El carrito de compras está vacio!</h3>
                <NavLink to={'/'}>
                <button className="btn btn-warning"> Volver al inicio </button>
                </NavLink>
                
                </>

                :                
                <>
                <h2>Articulos en Carrito</h2>
                {
                    cart.map((product) => <CartItem product={product} />)
                }

                <h3>Total: $ {totalPrice()}</h3>
                </>
            }
            
        </div>
    )
}
