import React, {useState, useEffect} from 'react'
import { GetProductById } from '../../services/ApiCall';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetailContainer({idItem}) {

    const [item, setItem] = useState();

    useEffect(() => {
        ( async() =>{
            const product = await GetProductById(idItem);
            console.log(product);
            setItem(product);
        })()
    }, [])
    
    return (
        <div className = "divClass">
            <ItemDetail item = { item }/>
        </div>
    )
}
