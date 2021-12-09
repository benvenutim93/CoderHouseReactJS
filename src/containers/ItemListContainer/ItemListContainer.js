import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'
import { GetProducts, GetProductsByCategory } from '../../services/ApiCall';
import Loader from '../../components/Loader/Loader'



export default function ItemListContainer() {

    const { categoryId } = useParams();
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
            if(categoryId === undefined){

                const promise =  GetProducts();
                promise.then(data => setProducts(data));
            }
            else {
                const promise =  GetProductsByCategory();
                promise.then(data => setProducts(data));
            }
        

    }, [categoryId])


    return (
        <>
            {
                products.length === 0 ? 
                <Loader/> : 
                <ItemList products = {products}/>
            }
        </>
        // <div className="itemListContainer">
        //     <ItemList products = {products}/>
            
        // </div>
    )
}

