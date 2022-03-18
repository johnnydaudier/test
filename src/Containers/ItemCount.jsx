import { useState } from "react";
import ChangeButtons from "../Components/ChangeButtons/ChangeButtons";

function ItemCount({stock, initial}) {
    const  [count, setCount] = useState(initial);
    const stockToRender = stock>count;    
    const print = () => console.log('Cantidad actual: '+count)
    
    
    const plusOne = () => {
        setCount(count+1)
    }
    const minusOne = () => {
        setCount(count-1)
    } 
     if(stockToRender){
        return (
            <>         
                <div>
                     <button  onClick={ minusOne }>-</button><span>{count}</span><button  onClick={ plusOne }>+</button> 
                </div>                         
                <br/>

                <ChangeButtons/>
    
            </>
        )
     }else {
        return (
            <>         
                <div>
                    <button  onClick={ minusOne }>-</button><span>{count}</span>
                </div>          
    
                <ChangeButtons/>
            </>
        )
    }    
}
export default ItemCount;

