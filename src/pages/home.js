import CardList from "../components/ItemList/ItemList"
import { useEffect, useState } from "react"
import productos from "../utils/prodMock"

const Home = () => {
    const [products, setProducts] = useState([])
        
    useEffect( () => {
        console.log("asdas")
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
    }, [])
    
    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            // setTimeout(() => {
                resolve(productos)
            // }, 4000)
        })
    }  

    return(
        <div className='general-container'>
            <CardList title={'Productos Recomendados'} products={products}/>
        </div>
    )
}

export default Home