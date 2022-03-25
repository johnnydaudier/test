import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

const { cartCount } =  useCartContext;


const IconBadge = () => {
    
        return (
                    <Link>                    
                         <h5 className="icon-badge">{cartCount}</h5>
                    </Link>
        )
   

    }


export default IconBadge