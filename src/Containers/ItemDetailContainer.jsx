import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import getFetch from "./getFetch";


function ItemDetailContainer () {
    const [oneProduct, setOneProduct] = useState({});
    const { detalleId } = useParams();
    

    //llamada a api
    useEffect(()=> {
        
        getFetch
        .then(resp => setOneProduct(resp.find(prod => prod.id===detalleId))
        )
        
                           
        .catch(err => console.log(err))
    }, [])

    return (        
        <div>
            <ItemDetail product={oneProduct} />       
        </div>
        
    )

}


export default ItemDetailContainer;