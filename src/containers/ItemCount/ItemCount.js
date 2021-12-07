import React, {useState, useEffect} from 'react'
import Counter from '../../components/Counter/Counter'
import CounterDisplay from '../../components/CounterDisplay/CounterDisplay'

export default function ItemCount({onAddToCart}) {

    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(10);
    

    useEffect(() => {
        setStock(stock - quantity);
    }, [])

    function onAdd() {
        if(stock > 0){
            setQuantity(quantity + 1);
            setStock(stock - 1);
        }
    }

    function onSubstract(){
        if(quantity > 0){
            setQuantity(quantity - 1);
            setStock(stock + 1);
        }
    }


    

    return (
        <div className="flex divClass">
            <div>
                <span>Stock Disponible: {stock}</span>
                <CounterDisplay number={quantity}/>
                <Counter onAdd={onAdd} onSubstract={onSubstract}/>
                <button className="btn addCartButton" onClick={() => onAddToCart(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )
}
