import React, {createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    function addItemToCart(item, quantity) {
        if(isInCart(item.id)){
            let product = cart.find(p => p.id == item.id);
            product.cantidad += quantity;
            setCart(...cart, product);
        }
        else {
            setCart([...cart, item]);
        }
    }

    function removeItem(id){
        setCart( cart.filter(prod => prod.id !== id ) )
    }

    function clearCart(){
        setCart([]);
    }

    function isInCart(id){
        return cart.some( prod => prod.id === id )
    }


    return (
        <CartContext.Provider value={{
            cart, 
            addItemToCart,
            removeItem,
            clearCart,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


