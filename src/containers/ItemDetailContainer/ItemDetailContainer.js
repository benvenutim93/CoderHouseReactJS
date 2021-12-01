import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { GetProductById } from '../../services/ApiCall';
import ItemDetail from '../../components/ItemDetail/ItemDetail'


export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState();

    console.log(id);
    useEffect(() => {
        const promise = GetProductById(id);
        promise.then(product => setItem(product));
    }, [id])
    
    console.log(item)
    return (
        <div className = "divClass">
            <ItemDetail item = { item }/>
        </div>
    )
}
