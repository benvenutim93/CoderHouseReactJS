
export const  GetProducts = () => {
     return new Promise((response, reject) => {

        fetch('https://fakestoreapi.com/products?limit=10')
                .then(res => res.json())
                .then(data => response(data))
                    
                .catch(err => {
                    alert("Error --> " + err.message);
                    reject(err);
                })
     })
}

export const  GetProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => {
                alert("Error --> " + err.message);
                reject(err);
        }, 2000);
    })
})}



// export const GetCategories = (products) => {
//     return [...new Set(products.map(product => product.category))];
// }
