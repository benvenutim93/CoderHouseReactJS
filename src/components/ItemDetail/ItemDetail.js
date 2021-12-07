import React, {useState} from 'react'
import ItemCount from '../../containers/ItemCount/ItemCount'
import BtnFinishBuy from '../BtnFinishBuy/BtnFinishBuy';


export default function ItemDetail({item}) {
    const [isAddedToCart, setIsAdded] = useState(false);

    function handleBuy(quantity){
        setIsAdded(true);
    }


    return (
        <div className="itemClass border-4 border-black">
            <img src={item?.image} alt={`Imagen de ${item?.title}`}  />
            <h2 className="font-bold">{item?.title}</h2>
            <h3>Categoria: {item?.category}</h3>
            <p>Descripcion: {item?.description}</p>
            <h4 className="font-bold">Precio: $ {item?.price}</h4>
            {isAddedToCart ? 
                <BtnFinishBuy /> :  
                <ItemCount onAddToCart={handleBuy}/>
            }
            
        </div>
    )
}
