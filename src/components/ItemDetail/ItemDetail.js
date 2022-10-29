import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)
    

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        
    }

    return (
<article className="card">
<header className="Header">
    <h2 className="cardHead">
        {name}
    </h2>
</header>
<div className="cardImg">
<img src={img} alt=""/>
</div>
<section>
    <p className="Info">
        Categoria: {category}
    </p>
    <p className="Info">
        Descripción: {description}
    </p>
    <p className="Info">
        Precio: {price}
    </p>
</section>           
<footer className='ItemFooter'>
    <Link className="btn btn-primary" to='/'>seguir Comprando</Link>
    {
        quantityToAdd === 0 ? (
            <ItemCount onAdd={handleOnAdd} stock={stock} />
        ) : (
            <Link className="btn btn-danger" to='/cart'>Finalizar compra</Link>
        )
    }
</footer>
</article>
    )
}

export default ItemDetail