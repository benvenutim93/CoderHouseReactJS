import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'
import Loader from '../../components/Loader/Loader'
import { collection,  getDocs, query, where } from 'firebase/firestore/lite';
import { db } from './../../firebase/config';



export default function ItemListContainer() {

    const { category } = useParams();
    
    const [loading, setLoading] = useState(false);
    const[products, setProducts] = useState([]);
    

    useEffect(() => {
        setLoading(true);
        
        const productosRef = collection(db, "Productos");
        const q = category ? query(productosRef, where('category', '==', category)) : productosRef;

        getDocs(q)
        .then((resp) => {
            const items = resp.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data()
            }));
            setProducts(items);
        })
        .finally(() => {
            setLoading(false);
        })

    }, [category])


    return (
        <>
            {
                loading ? 
                <Loader/> : 
                <ItemList products = {products}/>
            }
        </>
    )
}

