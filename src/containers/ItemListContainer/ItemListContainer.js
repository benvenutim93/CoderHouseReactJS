import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'
import { GetProducts, GetProductsByCategory } from '../../services/ApiCall';
import Loader from '../../components/Loader/Loader'



export default function ItemListContainer() {

    const { category } = useParams();
    const [loading, setLoading] = useState(false);
    const[products, setProducts] = useState([]);
    
    // const promise = new Promise((resolve) => {
    //     setTimeout(() => {
    //         fetch('https://fakestoreapi.com/products?limit=10')
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //     }, 2000)
    // })
    // promise.then(data => setProducts(data));

    useEffect(() => {
        setLoading(true);

            if(category === undefined){
                const promise =  GetProducts();
                promise.then(data => setProducts(data));
            }
            else {
                const promise =  GetProductsByCategory();
                promise.then(data => setProducts(data));
            }
            setLoading(false);
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

