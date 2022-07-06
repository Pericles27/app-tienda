import CardItem from '../Item/Item';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import productos from '../../utils/prodMock';
import { useParams, useNavigate } from 'react-router-dom'

import db from '../../utils/firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";

const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()




    useEffect( () => {
        setProducts([])
        console.log()
        getProducts()
        .then( (productos) => {
            category ?  filterFirebase() : setProducts(productos)
        })
    }, [category])

    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    const filterFirebase = async () => {
        const productRef = collection(db, 'productos')
        const queryResult = query(productRef, where("category", "==", category));
        const querySnapshot = await getDocs(queryResult);
        const productList = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return setProducts(productList)
    }






    return(
        <>
        <h2>{title}</h2>
        <Grid container spacing={2}>
            {
                products.map( ({title, price, image, id, stock}) => {
                    return(
                        <Grid item md={3} key={id}>
                            <CardItem title={title} price={price} image={image} stock={stock} id={id} />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default CardList