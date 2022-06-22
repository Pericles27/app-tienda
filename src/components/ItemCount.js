import { useState } from 'react';
import { Button } from '@mui/material';

const Counter = ({stock,cantidad, setCantidad, setShowButton}) => { 
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
        <Button variant='outlined' onClick={() => setShowButton(true)}>Agregar producto</Button>
        </>
    )
}
export default Counter