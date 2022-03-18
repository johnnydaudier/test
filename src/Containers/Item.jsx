import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item({producto}) {
    return (
        <div key={producto.id}className="col-md-4">
            <div className="card w-100 mt-5">
                <img src={producto.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{`${producto.name}`}</h5>
                    <p>$ {producto.price}</p>
                    <p className="card-text">{producto.description}</p>
                    <NavLink to={`detalle/${producto.id}`}>
                       <button>Detalles</button> <br/>
                    </NavLink>
                    <br/>
            <ItemCount initial={1} stock={7}/>
            
                </div>
            </div>
        </div>

    )
}

export default  Item;