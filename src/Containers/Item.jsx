import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";
function Item({prod}) {
    return (
        <div key={prod.id}className="col-md-4">
            <div className="card w-100 mt-5">
                <img src={prod.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{`${prod.name}`}</h5>
                    <p>$ {prod.price}</p>
                    <p className="card-text">{prod.description}</p>
                    <NavLink to={`detalle/${prod.id}`}>
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