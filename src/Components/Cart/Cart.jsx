
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import Peng from "../Peng/Peng";
import  { addDoc, collection, getFirestore } from 'firebase/firestore'

function Cart() {
    const { cartList, vaciarCart, deleteCart, cartTotalMount } =  useCartContext()
    
    const  newOrder = async () => {
        let order = {};
        
        order.total = cartTotalMount();
        order.buyer = { name: 'user', phone: 1234566551, mail: 'user@mail.com'}
        order.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price;
            
            return { id, name, price }
        })
        
       

        const db = getFirestore()
        const queryCollectionSet = collection(db, 'orders')
        addDoc(queryCollectionSet, order)
        .then(resp => alert('Orden generada con exito, guarda este codigo de compra: '+ resp.id))
        .catch(err => console.log(err))
        

    }
    const totalMount = cartTotalMount();
    
    if(cartList.length!==0){
        return (
            <>
                    <div>
                         { cartList.map(producto => <div key={producto.id} del={producto.name}>
                                                            
                                                        <img src={producto.img} className='cartInsideImg' />
                                                        <span><button className="deleteButton" onClick={deleteCart}>X</button></span>                       
                                                        <h5>{`${producto.name}`}</h5>
                                                        <p>$ {producto.price}</p> 
                                                        <p>{producto.description}</p>                                          
                                                        <h4>Cantidad: {producto.cantidad}   </h4>                                                    
                                                        
                                                    </div>
                                                    
                                                     ) }                         
                    </div>
                    <h1>Total: $ {totalMount} </h1>
                    <button onClick={vaciarCart}>Vaciar carrito</button>
                    <button onClick={newOrder}>Finalizar compra</button>
            </>
        )
    }else {
        return (
            <>
                <h2>El carrito esta vacio</h2>
                <Peng/>
                
                <Link to='/'>
                    <button >Ir a comprar</button>                
                </Link>                
            </>
        )
    }
}
export default Cart;




