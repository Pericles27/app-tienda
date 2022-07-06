import { useState, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () =>  {
    const { cartListItems, deleteProduct, clearCartProducts } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-container-icon'>
            <div>
                <ShoppingCartIcon 
                    color={'Black'} 
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
                <p style={{color: 'white'}}>{cartListItems.length}</p>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Link to="/" >Empezar a comprar</Link>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`/${item.image}`} alt="prod carrito" style={{width:75}} />
                            </div>
                            <div className='cart-prod__info'>
                                <p>{item.title}</p>
                                <p>cantidad: {item.cantidad}</p>
                                <span>$ {item.price}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button onClick={() => deleteProduct(item)}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                        )
                    })}
                    <div className='cart-checkout-details'>
                        <Link to="/cart">
                            <button style={{cursor: 'pointer'}} onClick={handleClose}>Terminar compra</button>
                        </Link>
                    </div>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget