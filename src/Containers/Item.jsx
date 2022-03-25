import {  Link } from "react-router-dom";


function Item({producto}) {
    return (
        <div 
        
        className="col-md-4">

            <div className="card w-100 mt-5">
                <img src={producto.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{`${producto.name}`}</h5>
                    <p>$ {producto.price}</p>
                    <p className="card-text">{producto.description}</p>
                    <Link to={`/detalle/${producto.id}`}>
                       <button>Detalles</button> <br/>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default  Item;