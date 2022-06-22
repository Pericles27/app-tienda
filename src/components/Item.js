import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const enlaces={
    textDecoration:'none',
    color:'white',
}
const orden ={
    padding: 10,
}
const imagen ={
    width : '75%',
    padding: 10,
}

const CardItem = ({ image, title, price, stock, id }) => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(1)

    return(
        <Card sx={{ minWidth: 275, height: 500 }} className="card-item-container">
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box" style={orden}>
                        <img src={`/${image}`} alt={"producto"} style={imagen}/> 
                                                <Button variant={'contained'} className="card-btn-details">
                            <Link to={`/product/${id}`} style={enlaces}>Ver Detalle</Link>
                        </Button>
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data' style={orden}>
                            <p>{title}</p>
                            <span>$ {price}</span>
                        </div>
                        <Button variant={'contained'} className="card-item-button">Comprar</Button>
                    </div>
                    <div style={orden}>
                        <p>Unidades disponibles: {stock}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem