import Item from "./Item";


const ItemList = ({productos}) => {
    return (
        
         productos.map((prod) =>  <Item producto={prod}/>         
        
        )  
     )   
        
}

export default ItemList; 