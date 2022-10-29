import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
       
        return (
            <h1>No hay items en el carrito
                <br></br>
                <Link className="btn btn-danger" to='/'>Volver a la tienda</Link>
            </h1>
           
            )
        }
    return (     
        <div>
          <h1>Cart</h1>
          { cart.map(p => <CartItem key={p.id} {...p}/>) }
          <h3>Total: ${total}</h3>
          <button onClick={() => clearCart()} className="btn btn-danger">Limpiar carrito</button>
            <div>
            <br></br>
              <Link to='/checkout' className='btn btn-success'>Checkout</Link>
            </div>
            <br></br>
            <div>
               <Link to='/' className='btn btn-primary'>Seguir Comprando</Link>
            </div>
        </div>
    )
}

export default Cart