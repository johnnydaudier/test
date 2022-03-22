import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

import { useCartContext } from "../Context/CartContext";
import { useState } from "react";


function ItemDetail({product})  {
   
    const [count, setCount] = useState(null)
    const {agregarCart} = useCartContext();

    const onAdd = cant => {
        setCount(cant)
        agregarCart({...product, cantidad: cant})
    }

    return (
        
        <div className="col-md-4">
            
            <div className="card w-100 mt-5">
                <img src={product.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p>$ {product.price}</p>
                    <p className="card-text">{product.detail}</p>
                    <br/>
                    
                </div>
                { count ? <Link to='/cart'>
                                <button className="finishButton"> Ver en el carrito </button>
                          </Link>
                        : <ItemCount initial={1} stock={10} onAdd={onAdd} />    
                }
                    
            </div>
        </div>
    )
}


export default ItemDetail;