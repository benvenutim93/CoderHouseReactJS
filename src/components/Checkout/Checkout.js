import React from 'react'
import { CartContext } from './../../Context/CartContext';
import { db } from './../../firebase/config';
import { collection, addDoc, Timestamp, doc, writeBatch, query, documentId } from 'firebase/firestore/lite';
import Loader from '../Loader/Loader';


export default function Checkout() {

    const {cart, totalPrice, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState("");
    const [values, setValues] = useState ({
        nombre:"",
        email:"",
        telefono:""
    })

    const [loading, setLoading] = useState(false);
    

    function handleSubmit(e) {

        //Aca van validaciones de los campos
        e.preventDefault();
        const order = {
            buyer: values,
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db);
        const orderRef = collection(db, "Ordenes");
        const productosRef = collection(db, "Productos");

        const q = query(productosRef, where(documentId(), "in", cart.map(el => el.id)))

        const outOfStock = [];

        getDocs(q)
        .then((res) => {
            res.docs.foreach((doc) => {
                const item = cart.find((prod) => prod.id === doc.id);

                if(doc.data().stock >= item.quantity){
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.quantity
                    })
                }
                else {
                    outOfStock.push(item);
                }
            })
            if(outOfStock.length === 0){

               setLoading(true);
                addDoc(orderRef, order)
                .then((res) => {
                    batch.commit();    
                    setOrderId(res.id);
                    clearCart();
                })
                .finally(() => {
                    setLoading(false);
                })    
            }
            else {
                alert("Hay productos sin stock");
            }
          
        })


    }

    function handleInputChange(e){
        setValues({
            //primero se copia todo el estado
            ...values,
            //luego se modifica especificamente
            //la propiedad que yo quiero modificar
            [e.target.name]: e.target.value
        })
    }

    if(loading){
        return <Loader/>
    }

    return (
        <div className='container my-5'>
            {
                orderId ? 
                <>
                    <h2>Tu compra fue registrada!</h2>
                
                    <p>Tu numero de orden es: {orderId}</p>
                    <Link to="/" className="btn btn-success">Volver</Link>
                </>
               
                 :

                 <>
                    <h2>Checkout</h2>

                    <form onSubmit={handleSubmit}>
                        <input 
                        name="nombre"
                        onChange={handleInputChange}
                        value={values.nombre}
                        className='form-control my-3'
                        type='text'
                        placeholder='Nombre'
                        />

                        <input
                        name="email"
                        onChange={handleInputChange}
                        value={values.email}
                        className='form-control my-3'
                        type='mail'
                        placeholder='Email'
                        />

                        <input
                        name="telefono"
                        onChange={handleInputChange}
                        value={values.telefono}
                        className='form-control my-3'
                        type='tel'
                        placeholder='Telefono'/>
                    </form>
                    <button onClick={handleSend} className='btn btn-success'>Enviar</button>
                 </>
            }


            
        </div>
    )
}


// cart.foreach((prod) => {
//     const docRef = doc(productosRef, prod.id)
    
//     if(doc.data().stock >= prod.quantity){
//         getDoc(docRef)
//         .then(() => {
//             updateDoc(docRef, {
//                 stock: doc.date().stock - prod.quantity
//             })
//         })
//     }
// })
