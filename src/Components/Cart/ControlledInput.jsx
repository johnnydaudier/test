import { useState } from "react";
import  { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from "../../Context/CartContext";
import swal from "sweetalert";


export const ControlledInput = () => {
   
    const [user, setUser] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('') 
    const {cartTotalMount, cartList} = useCartContext();

    const validate = (str) => {
        let exp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let valid =  exp.test(str)
        if(valid){return true}
        return false;
    }
    const validMail = validate(mail)
    
    const  newOrder = async () => {
        let order = {};
        
        order.total = cartTotalMount();
        order.buyer = { name: user, phone: phone, mail: mail}
        order.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price;
            
            return { id, name, price }
        })      

        const db = getFirestore()
        const queryCollectionSet = collection(db, 'orders')
        addDoc(queryCollectionSet, order)
        .then(resp => swal({
            title: "MUCHAS GRACIAS POR TU COMPRA!",
            text: "Conserva tu numero de transaccion: "+resp.id,
            icon: "success",
            button: "Aceptar",
          }))
        
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h4>Ingresa tus datos para confirmar pedido.</h4><br/>
            <label>Ingresa nombre y apellido</label>
            <input 
            type="text"
            name="user"
            value={user}
            onChange={ev=> setUser(ev.target.value)} 
            
            /><br/><br/>
            <label>Ingresa numero de contacto</label>
            <input 
            type="text"
            name="phone"
            value={phone}
            onChange={ev => setPhone(ev.target.value)}            
            /> <br/><br/>
            <label>Ingresa tu e-mail</label>
            <input 
            type="email"
            name="mail"
            value={mail}
            onChange={ev => setMail(ev.target.value)}
                       
            />
            <br/>
            

            <button onClick={newOrder} disabled={!validMail} >Confirmar pedido</button>
            
        </div>
    )
}
export default ControlledInput;