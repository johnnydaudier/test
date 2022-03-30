import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Loading from "../Components/Loading/Loading";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'




function ItemListContainer({greeting}) {    
    const [products, setProducts] = useState([]);    
    const [load, setLoad] = useState(false);
    const { categoriaId } =  useParams();

    useEffect(() => {
        const db = getFirestore();
        if(categoriaId){            
            const queryCollection = collection(db,'items')
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map(item => ({ id: item.id, ...item.data()  }  ))))
            .catch(err => console.log(err))
            .finally(() => setLoad(true)) 
        }else{           
            const queryCollection = collection(db, 'items');
            getDocs(queryCollection)
            .then(resp => setProducts(  resp.docs.map(item => ( { id: item.id, ...item.data() } )  ) ))
            .catch(err => console.log(err))
            .finally( () => setLoad(true))
        }
        
    },[categoriaId])
    return (
        <>
            { !load ? <Loading/> 
                    : <ItemList productos={products}  />         
            }  
            <p>{greeting}</p>          
        </>
    )
}
export default  ItemListContainer;