import  { Link }  from 'react-router-dom';
import CartWidget from './CartWidget';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { AppBar, Toolbar } from '@mui/material';

let estilos={
    color:'white',
    backgroundColor:'#189AB4',
    textDecoration: 'none',
}

let alineados={
    display: 'inline',
    color:'#05445E',
}
let logo ={
    fontFamily:'fantasy',
    color:'black',
    fontSize: 40,
}
const NavBar = () => {

    const categories = ["musculosas", "remeras", "pantalones"];

    return(
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='navbar-header' style={logo}>
                    <h1>SportsHub</h1>
                </div>
                <ul className="navbar" >
                    <li className="nav-item">
                        <Button 
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            <Link to="/" style={estilos}>Camisetas Internacionales</Link>
                        </Button>    
                    </li>
                    <li className="nav-item">
                        <Button 
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            <Link to="/" style={estilos}>Camisetas Nacionales</Link>
                        </Button>    
                    </li>
                    <li className="nav-item">
                        <Button 
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            <Link to="/" style={estilos}>Botines y Accesorios</Link>
                        </Button>
                    </li>
                    <li className="nav-item">
                        <Button 
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            <Link to="/contacto" style={estilos}>About Us</Link>
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