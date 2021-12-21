import React, {createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    function addItemToCart(item, quantity) {
            setCart([...cart, {quantity: quantity, ...item}]);
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

    function totalPrice(){
        return cart.reduce((acum, product) => acum + product.price * product.quantity, 0);
    }

    function totalQuantity(){
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
    }


    


    return (
        <CartContext.Provider value={{
            cart, 
            addItemToCart,
            removeItem,
            clearCart,
            isInCart, 
            totalPrice,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}


