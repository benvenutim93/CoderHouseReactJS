import React, {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'


export default function ItemListContainer() {

    const[products, setProducts] = useState([]);
    console.log(products);

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products?limit=2')
            .then(res => res.json())
            .then(data => resolve(data))
        }, 2000)
    })
    // useEffect(() => {
    //         fetch('https://fakestoreapi.com/products?limit=20')
    //         .then(res => res.json())
    //         .then(data => {
                
    //             setProducts(data)})
                
    //         .catch(err => console.log(err))
    // }, [])

    promise.then(data => setProducts(data));

    return (
        <div className="itemListContainer">
            <ItemList products = {products}/>
        </div>
    )
}

