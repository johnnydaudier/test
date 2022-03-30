import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import getFetch from "./getFetch";
import { doc, getDoc, getFirestore } from "firebase/firestore";


function ItemDetailContainer () {
    const [oneProduct, setOneProduct] = useState({});
    const { detalleId } = useParams();
    const db = getFirestore();

    //llamada a api
    useEffect(()=> {

        const queryDb = doc(db, 'items', detalleId )
        getDoc(queryDb)
        .then(resp => setOneProduct( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))

        
        // getFetch
        // .then(resp => setOneProduct(resp.find(prod => prod.id===detalleId)))                     
        
    }, [])

    return (        
        <div>
            <ItemDetail product={oneProduct} />       
        </div>
        
    )

}


export default ItemDetailContainer;