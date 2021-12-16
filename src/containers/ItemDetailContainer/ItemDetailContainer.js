import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loader from '../../components/Loader/Loader';
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from './../../firebase/config';


export default function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        setLoading(true);

        const docRef = doc( db, "Productos", id);
        
        getDoc(docRef)
        .then((doc) => {
            const product = {
                id: doc.id,
                ...doc.data()
            }
            setItem(product);
        })
        .finally(() => {
            setLoading(false);
        })

    }, [id])
    
    console.log(item)
    return (
        <div className = "divClass">
            {
                loading ?
                <Loader/> : 
                <ItemDetail item = { item }/>
            }

        </div>
    )
}
