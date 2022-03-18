import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import Item from "./Item";


function ItemDetail({item})  {
   

    return (
        
        <div className="col-md-4">
            
            <div className="card w-100 mt-5">
                <img src={item.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>$ {item.price}</p>
                    <p className="card-text">{item.detail}</p>
                    <br/>
                    <NavLink to={`detalle/${item.id}`}>
                       <button>Detalles</button> <br/>
                    </NavLink>
                </div>
                    <ItemCount initial={1} stock={10} />
                    
            </div>
        </div>
    )
}


export default ItemDetail;