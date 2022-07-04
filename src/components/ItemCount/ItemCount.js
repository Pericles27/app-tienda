import { useState, useContext } from 'react'
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import CartProvider from '../../context/CartContext';

const Counter = ({stock,cantidad, setCantidad, setShowButton,data}) => { 
    const { addProductToCart } = useContext(CartContext)
    const click = ()=>{
        setShowButton(true);
        addProductToCart (data)
    }
    
    const addCount = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }
    const removeCount = () => {
        if(cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }
    return (
        <>
        <div className='count-item'>
            <Button onClick={removeCount}>-</Button>
            <p>{cantidad}</p>
            <Button onClick={addCount}>+</Button>
        </div>
        <Button variant='outlined' onClick={() => click()}>Agregar producto</Button>
        </>
    )
}
export default Counter