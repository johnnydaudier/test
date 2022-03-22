import { createContext, useState, useContext } from "react";


const CartContext = createContext([]);  //creando el contexto

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const agregarCart = (item) => {


        const found = cartList.find(i => i.id===item.id)


        if(found){

           const newCart = cartList.map(prod => {
                if(prod.id===item.id){
                    prod.cantidad += item.cantidad
                    return prod
                }
                setCartList(newCart)
            })

        }else{
            setCartList([...cartList, item])        
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
        }
                
    }
    const vaciarCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCart,
            vaciarCart,
            deleteCart
        }}> 
            {children}
        
            
        </CartContext.Provider>
    )
}
export default CartContextProvider;