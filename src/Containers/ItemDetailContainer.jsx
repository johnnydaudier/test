import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "./getFetch";
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
                           
        .catch(err => console.log('error en fetch'))
    }, [])

    return (        
        <div>
            <ItemDetail item={ oneProduct }  />       
        </div>
        
    )

}


export default ItemDetailContainer;