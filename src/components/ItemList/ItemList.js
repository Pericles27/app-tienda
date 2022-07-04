import CardItem from '../Item/Item';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import productos from '../../utils/prodMock';
import { useParams, useNavigate } from 'react-router-dom'

const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProducts([])
//         getProducts()
        // .then( (response) => {
            category ? filterByCategory(productos, category) : setProducts(productos)
        // })
    }, [category])

    
    // const getProducts = () => {
    //     return new Promise( (resolve, reject) => {
    //             resolve(productos)
    //     })
    // }  

    const filterByCategory = (array, category) => {
        return array.map( (item) => {
            if(item.category === category) {
                return setProducts(products => [...products, item])
            }
        })
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