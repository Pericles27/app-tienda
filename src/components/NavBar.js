import { useState } from 'react'
import  { Link }  from 'react-router-dom';
import CartWidget from './CartWidget';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar, Toolbar } from '@mui/material';

let estilos={
    color:'white',
    backgroundColor:'#189AB4',
}

let alineados={
    display: 'inline',
    color:'#05445E',
}
let logo ={
    display:'inline',
    fontFamily:'fantasy',
    color:'black',
    fontSize: 40,
}
const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const categories = ["musculosas", "remeras", "pantalones"]


    return(
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                    <div className='navbar-header' style={logo}>
                        <Button 
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            <Link to="/">Sport Hub</Link>
                        </Button>
                    </div>
                    <ul className="navbar">
                        <li className="nav-item">
                            <Button 
                                disableRipple
                                style={{ backgroundColor: 'transparent' }} 
                                variant='text' 
                                className='navbar__btn'
                            >
                                <Link to="/">Camisetas Internacionales</Link>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                {categories.map( (cat) => {
                                    return <MenuItem onClick={handleClose}><Link to={`/products/${cat}`}>{cat}</Link></MenuItem>
                                })}
                            </Menu>
                        </li>
                        <li className="nav-item">
                            <Button 
                                disableRipple
                                style={{ backgroundColor: 'transparent' }} 
                                variant='text' 
                                className='navbar__btn'
                            >
                                <Link to="/">Camisetas Nacionales</Link>
                            </Button>    
                        </li>
                        <li className="nav-item">
                            <Button 
                                disableRipple
                                style={{ backgroundColor: 'transparent' }} 
                                variant='text' 
                                className='navbar__btn'
                            >
                                <Link to="/">Botines y Accesorios</Link>
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button 
                                disableRipple
                                style={{ backgroundColor: 'transparent' }} 
                                variant='text' 
                                className='navbar__btn'
                            >
                                <Link to="/">About Us</Link>
                            </Button>
                        </li>
                    </ul>
                    <div className='navbar-footer'>
                        <CartWidget/>
                    </div>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;