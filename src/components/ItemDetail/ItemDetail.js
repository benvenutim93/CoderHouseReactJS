import React, {useState, useContext} from 'react'
import {CartContext} from '../../Context/CartContext'
import ItemCount from '../../containers/ItemCount/ItemCount'
import {NavLink} from 'react-router-dom'



export default function ItemDetail({item}) {

    const [isAddedToCart, setIsAdded] = useState(false);
    const {addItemToCart, isInCart} = useContext(CartContext);
    
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(10);

    function handleAddToCart(quantity){
        setIsAdded(true);
    }

    function handleBuy(){
        addItemToCart({item, quantity});
    }

    return (
        <div className="itemClass border-4 border-black">
            <img src={item?.image} alt={`Imagen de ${item?.title}`}  />
            <h2 className="font-bold">{item?.title}</h2>
            <h3>Categoria: {item?.category}</h3>
            <p>Descripcion: {item?.description}</p>
            <h4 className="font-bold">Precio: $ {item?.price}</h4>
            {isAddedToCart ? 
                <NavLink to={`/Cart`}>
                <button onClick= {handleBuy} className="btn btn-secondary btnFinishBuy">
                    Finalizar compra
                </button>
                </NavLink> :  
                <ItemCount onAddToCart={handleAddToCart} 
                            quantity={quantity} 
                            setQuantity={setQuantity} 
                            stock={stock}
                            setStock={setStock}/>
            }
            
        </div>
    )
}
