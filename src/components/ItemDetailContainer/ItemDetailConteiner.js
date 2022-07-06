import './itemDetailContainer.css'
import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams, useNavigate } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore'
import db from "../../utils/firebaseConfig"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})

    useEffect(() => {
        
        getProduct()
        .then( (prod) => {
            console.log("Respuesta getProduct: ", prod)
            setProduct(prod)
        })
    }, [id])


    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnaptshop = await getDoc(docRef)
        console.log("docSnaptshop: ", docSnaptshop)
        let product = docSnaptshop.data()
        product.id = docSnaptshop.id
        console.log("producto unico: ", product)
        return product
    }

    return(
        <>
            <ItemDetail className='div' data={product}/>
        </>
    )
}

export default ItemDetailContainer