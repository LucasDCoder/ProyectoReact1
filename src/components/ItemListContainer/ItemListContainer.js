import { useState , useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect (() => {
        setLoading(true)
        getProducts(categoryId).then(products =>{
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId]) 


    if(loading){
        return <h1>Loading...</h1>
    }
    

    return (
    <div>
        <h1>Todos los Productos</h1>
         <ItemList products={products}/>
    </div>
    )
}

export default ItemListContainer