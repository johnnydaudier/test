import { useState } from "react";


function ItemCount({stock, initial, onAdd}) {
    const  [count, setCount] = useState(initial);    
    const add = () => {
        onAdd (count)
    }
    const plusOne = () => {
        if(count<stock){            
            setCount(count + 1)
        }
    }
    const minusOne = () => {
        if(count>initial){
            setCount(count - 1)
        }
    }     
    return (
            <>         
                <div>
                    <button onClick={ minusOne }>-</button><span>{count}</span><button onClick={ plusOne }>+</button> 
                </div>                         
                <br/>
                <button onClick={ add }> Agregar al carrito </button>
                      
            </>
            )        
}
export default ItemCount;

