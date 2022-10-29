import './CartWidget.css'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return (
    <Link to='/cart' className= 'CartWidget'>
        <div className='cartNumber'>{totalQuantity}</div>
        <i alt='cart' class="fa-solid fa-cart-shopping"></i>
        
    </Link>
 )
}

export default CartWidget