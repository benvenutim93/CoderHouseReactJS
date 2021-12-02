
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
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => {
                alert("Error --> " + err.message);
                reject(err);
    })
})}

export const GetCategories = () => {
    return new Promise((resolve,reject)=>{
        fetch(`https://fakestoreapi.com/products/categories`)
        .then((response) => response.json())
        .then( data => resolve(data))
        .catch(err => {
            alert("Error --> " + err.message);
            reject(err.message)
        })
})}

export const GetProductsByCategory = (category) =>{
    console.log(category);
    return new Promise((resolve,reject)=>{
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then( data => resolve(data))
        .catch(err => {
            alert("Error --> " + err.message);
            reject(err.message)
        })
})}
