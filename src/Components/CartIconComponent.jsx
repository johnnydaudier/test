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
    )
}
export default CartIconComponent;