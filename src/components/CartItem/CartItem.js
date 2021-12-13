import React, {useContext} from 'react'
import { CartContext } from './../../Context/CartContext';



export default function CartItem({product}) {

    const {removeItem} = useContext(CartContext);
    return (
        <div>
            <h3>{product.title}</h3>
            <h3>Precio: $ {product.price}</h3>
            <h3>Cantidad: {product.quantity}</h3>
            <button onClick={() => removeItem(product.id)}>Eliminar</button>
        </div>
    )
}
