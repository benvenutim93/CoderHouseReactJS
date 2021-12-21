import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import CartItem from './../CartItem/CartItem';
import './Cart.css'

export default function Cart() {

    const {cart, totalPrice, clearCart} = useContext(CartContext);
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
                <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar carrito</button>
                <NavLink to='/checkout' className="btn btn-success mx-2">Finalizar compra</NavLink>
                </>
            }
            
        </div>
    )
}
