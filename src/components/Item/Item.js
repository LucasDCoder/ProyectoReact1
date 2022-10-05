import { Link } from "react-router-dom"
import products from "../../asyncMock"
import './Item.css'

const Item = () => {
    
    const listaProductos = products.map((prod) => 
        <div className="card" key={prod.id}>
            <div className="cardImg">
                <img src={prod.img} alt=""/>
            </div>
            <div className="cardHead">
                <h2>{prod.name}</h2>
                <p>{prod.description}</p>
                <p className="price">${prod.price}</p>
                <Link to={`/detail/${prod.id}`}>Ver Detalle</Link>
            </div>
        </div>
    )
    return (
        <div className="items">
            
           {listaProductos}
                    
        </div>
    )
}

export default Item