import { FaShoppingCart } from 'react-icons/fa'
import { useCartContext } from '../Context/CartContext';




function CartIconComponent() {
    const { cartList } = useCartContext();
    let number = cartList.reduce((total, item) => item.cantidad + total,0)
    return (
        <div>
            <FaShoppingCart/>
            <h6 className='icon-bagde'>{number}</h6>

        </div>
    
        // <img className={'cartImg'} src="https://cdn-icons-png.flaticon.com/512/1250/1250320.png?w=740" alt="" />
    )

}


export default CartIconComponent;