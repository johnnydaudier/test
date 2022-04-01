import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";


function ItemDetailContainer () {
    const [oneProduct, setOneProduct] = useState({});
    const { detalleId } = useParams();
    const db = getFirestore();

    useEffect(()=> {
        const queryDb = doc(db, 'items', detalleId )
        getDoc(queryDb)
        .then(resp => setOneProduct( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))        
    }, [])

    return (        
        <div>
            <ItemDetail product={oneProduct} />       
        </div>        
    )
}
export default ItemDetailContainer;