import { Link } from "react-router-dom"
import './ItemList.css'


const ItemList = ({ products }) => {
    
        
        const listaProductos = products.map((product) =>
        
        <div className="card" key={product.id}>
        <div className="cardImg">
            <img src={product.img} alt=""/>
        </div>
        <div className="cardHead">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <Link to={`/detail/${product.id}`} key={product.id}>{product.name}</Link>
        </div>
    </div>
    
    )
return(
    <div className="items">
        {listaProductos}
    </div>
)
}

export default ItemList