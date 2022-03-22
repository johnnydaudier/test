
import { useCartContext } from "../../Context/CartContext";


function Cart() {
    const { cartList, vaciarCart, deleteCart } =  useCartContext()
    return (
        <>
                <div>
                     { cartList.map(producto => <div del-id={producto.id}>
                                                        
                                                    <img src={producto.img} className='cartInsideImg' />
                                                    <span><button className="deleteButton" onClick={deleteCart}>X</button></span>                       
                                                    <h5>{`${producto.name}`}</h5>
                                                    <p>$ {producto.price}</p> 
                                                    <p>{producto.description}</p>                                          
                                                    <h3>Cantidad: { producto.cantidad}   </h3>                                                    
                                                    
                                                </div>
                                                
                                                 ) }
                     
                </div>
                <button onClick={vaciarCart}>Vaciar carrito</button>
                
                
        </>
    )
}

export default Cart;




