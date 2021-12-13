
import ProductList from './ProductList';

export const  GetProducts = () => {
     return new Promise((response, reject) => {
         setTimeout(() => {
            response(ProductList)
         },1000)
     })
}

export const  GetProductById = (id) => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ProductList.find( product => product.id === id))
            },2000)
    
})}
export const GetProductsByCategory = (category) =>{
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(ProductList.find(product => product.category === category))
            },1000)
        
})}
