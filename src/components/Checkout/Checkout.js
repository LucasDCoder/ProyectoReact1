import React, { useContext, useState} from "react";
import { CartContext } from '../../context/CartContext'
import {addDoc, collection , getFirestore} from "firebase/firestore";
import './Checkout.css'

const Checkout =() => {
    const {total , cart , clearCart} = useContext(CartContext)
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [orderId , setOrderId] = useState("");
    
    function validateForm(){
      const order = {
        buyer : {name , phone ,email},
        total,
        cart,
      };
      const db = getFirestore();
      const orders = collection(db , "orders");
      addDoc(orders , order).then(({id}) =>{setOrderId(id);
       clearCart();})
    }

return(
     <>
      {orderId ? (
        "Compra confirmada.El id de tu compra es :" + orderId
      ):(
     <form className="formulario">
        <h1 className="titulo"> Ingrese sus datos</h1>
        <input className="checkForm" type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input className="checkForm" type="tel" placeholder="Phone"  onChange={(e)=>setPhone(e.target.value)}/>
        <input className="checkForm" type="email" placeholder="Email"  onChange={(e)=>setEmail(e.target.value)}/>
        <button  className="checkForm2" onClick={validateForm}>GENERAR ORDEN</button>
      </form>)}
      </>
      )
}

export default Checkout;