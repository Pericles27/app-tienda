import './NavBar.css'
import  { Link }  from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { AppBar, Toolbar } from '@mui/material';



let logo ={
    fontFamily:'fantasy',
    color:'black',
    fontSize: 40,
}
const NavBar = () => {
    const categories = ["camisetas internacionales", "camisetas nacionales", "botines"];

    return(
        <AppBar position="static" className='header-primary'>
            <Toolbar>
                <div className='navbar-header'>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <h1 style={logo}>SportsHub</h1>
                    </Link>
                </div>
                <ul className="navbar" >
                    {categories.map( (cat) => {
                        return(                 
                            <li className="nav-item">
                                <Button 
                                    disableRipple
                                    variant='text' 
                                    className='navbar__btn'
                                >
                                    <Link to={`/products/${cat}`}>{cat}</Link>
                                </Button>    
                            </li>)
                    })}
                    <li className="nav-item">
                        <Button 
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            <Link to="/contacto">About Us</Link>
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