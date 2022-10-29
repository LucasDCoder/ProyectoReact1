import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
    setQuantity(count => count + 1);
  };

  const decrement = () => {
    setQuantity(count => count - 1);
  };

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <h4 className='Number'>{quantity}</h4>
                <button className='btn btn-danger btn-sm restar' onClick={decrement}>-</button>
                <button className='btn btn-info btn-sm sumar' onClick={increment}>+</button>
            </div>
            <div>
                <button className="btn btn-success" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount



