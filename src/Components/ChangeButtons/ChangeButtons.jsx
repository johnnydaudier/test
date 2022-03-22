import { useState } from "react";
import { Link } from "react-router-dom"

const CartButton = () => {
    return (
        <Link to='/cart'>        
                    <button className="finishButton" onClick={ ()=> console.log('yendo a cart')} > Ver en el carrito </button>
        </Link>
    )
}

const AddToCartButton = ({changeInput}) => {
    return <button onClick={ changeInput }> Agregar al carrito </button>;
}


const ChangeButtons = () => {
   const [input, setInput] = useState('button');

   const changeInput = () => {
    setInput('input');

   }

   return ( 
       <div>
            {
                input === 'button' ? 
                <AddToCartButton changeInput = { changeInput } />
                : <CartButton />
            }

       </div>
   )

}

export default ChangeButtons;