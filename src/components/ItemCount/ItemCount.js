import React, {useState} from 'react'
import Counter from '../Counter/Counter'
import CounterDisplay from '../CounterDisplay/CounterDisplay'

export default function ItemCount() {

    const [initial, setInitial] = useState(1);
    const [stock, setStock] = useState(10);

    function onAdd() {
        if(stock > 0){
            setInitial(initial + 1);
            setStock(stock - 1);
        }
    }

    function onSubstract(){
        if(initial > 0){
            setInitial(initial - 1);
            setStock(stock + 1);
        }
    }
    return (
        <div>
            <span className='flex'>Stock Disponible: {stock}</span>
            <CounterDisplay number={initial}/>
            
            <Counter onAdd={onAdd} onSubstract={onSubstract}/>
        </div>
    )
}
