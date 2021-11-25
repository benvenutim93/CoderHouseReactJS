import React, {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css'


export default function ItemListContainer() {

    const[products, setProducts] = useState([]);
    // console.log(products);
    useEffect(() => {
            fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(data => {
                
                setProducts(data)})
                
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="itemListContainer">
            <ItemList products = {products}/>
        </div>
    )
}

