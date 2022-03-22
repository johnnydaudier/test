import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getFetch from "./getFetch";
import Loading from "../Components/Loading/Loading";
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}) {
   
    
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const { categoriaId } =  useParams();

    useEffect(() => {

        if(categoriaId){
            getFetch
            .then((resp)=>{
                return resp
            })
            .then(resp => setProducts(resp.filter(pro => pro.categoria===categoriaId) ))
            
            .catch(err => console.log('Error cargando productos'))
            .finally(() => setLoad(true))

        }else{

            getFetch
            .then((response)=> {                
                return response;
            })
            .then((response) => setProducts(response))
            .catch(err => console.log('Error cargando productos'))
            .finally( () => setLoad(true))

        }
        
    },  [categoriaId]) 
    
    return (
        <>
            { !load ? <Loading/> //yes
                    : 
                    <ItemList productos={products}  /> // no            
            }  
            <p>{greeting}</p>          
        </>
    )

}


export default  ItemListContainer;






