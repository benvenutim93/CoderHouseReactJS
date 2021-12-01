import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'
import { GetProducts } from '../../services/ApiCall';


export default function ItemListContainer() {

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
            const promise = GetProducts();
            promise.then(data => setProducts(data));
    }, [])


    return (
        <div className="itemListContainer">
            <ItemList products = {products}/>
        </div>
    )
}

