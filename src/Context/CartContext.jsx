import { createContext, useState, useContext } from "react";
import IconBadge from "../Components/Cart/IconBadge";


const CartContext = createContext([]);  //creando el contexto

export const useCartContext = () => useContext(CartContext)



function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const [cartCount, setCartCount] =  useState(0)
    const cartTotalMount = () => cartList.reduce((total, item)=> item.price*item.cantidad + total,0);
    
    
   
    
    const agregarCart = (item) => {
        const found = cartList.find(i => i.id===item.id)
        if(found){
          cartList.forEach(prod => {
                if(prod.id===item.id){
                    prod.cantidad += item.cantidad
                    return prod
                }
               
                cartTotalMount();
                
                
            })

        }else{
            setCartList([...cartList, item])
            cartTotalMount();
            
            
                 
        }         
       
    }
    const deleteCart = (e) => {
            let parent =  e.target.parentElement;
            let parentToSearch = parent.parentElement;
            let deleteId = parentToSearch.getAttribute("del-id");
           
            
            const found = cartList.find(prod => prod.id === deleteId)
        if(found) {
            let newCart = cartList.filter(prod => prod.id !== deleteId)

            setCartList(newCart)
            cartTotalMount();
            
            
        }
                
    }
   
    const vaciarCart = () => {
        setCartList([])
        
    }

    return (
        <CartContext.Provider value={{
            cartList,
            cartCount,
            agregarCart,
            vaciarCart,
            deleteCart,
            cartTotalMount,
            
            
        }}> 
            {children}
        
            
        </CartContext.Provider>
    )
}
export default CartContextProvider;