
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

import Peng from "../Peng/Peng";


function Cart() {
    const { cartList, vaciarCart, deleteCart, cartTotalMount } =  useCartContext()
    
    
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
                    <NavLink to='/finalize'>
                        <button>Finalizar compra</button><br/>
                    </NavLink>
                    
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




