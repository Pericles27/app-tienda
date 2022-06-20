import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Counter from './ItemCount';
const enlaces={
    textDecoration:'none',
    color:'white',
}

const CardItem = ({ image, title, price, stock, id }) => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(1)

    const handleClose = () => {
        setOpen(false)
    }
    const addCount = () => {
        console.log("stock: ", stock)
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }


    return(
        <Card sx={{ minWidth: 275, height: 550 }} className="card-item-container">
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box">
                        <img src={`/${image}`} alt={"producto"} style={{width:'75%'}}/> 
                                                <Button variant={'contained'} className="card-btn-details">
                            <Link to={`/product/${id}`} style={enlaces}>Ver Detalle</Link>
                        </Button>
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data'>
                            <p>{title}</p>
                            <span>$ {price}</span>
                        </div>
                        <Counter stock={stock}/>
                        <Button variant={'contained'} className="card-item-button">Comprar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem