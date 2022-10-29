import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from "../../Service/Firebase"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
        ? query(collection(db, 'products'),where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response);
            
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }

            })

            setProducts(productsAdapted)
        }).finally(() => {
            setLoading(false)
        })
            
    }, [categoryId])

    if(loading){
        return <h1>Loading...</h1>
    }
    

    return (
        <div>
        <h1>{`${greeting} ${categoryId || ''}`}</h1>
        <ItemList products={products} />
    </div>
    )
}

export default ItemListContainer