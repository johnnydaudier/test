import Item from "./Item";
import { products } from "./getFetch";

function ItemList({prod}){
    return  products.map( (produ) => 
    <div>
        <Item prod={produ}/>         
    </div>
    );   
    
}

export default ItemList; 