import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.css';

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
const NavBar = () => (
    <nav className="navbar navbar-default" style={{width:'100%'}}>
        <div className="container">
            <div className='navbar-header' style={logo}>
                <a href="../app.js" style={{textDecoration:'none',color:'inherit'}}>Sport Hub</a>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Camisetas Internacionales</a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="#">Camisetas nacionales</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Botines y accesorios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
            </ul>
            <div className='navbar-footer'>
                <CartWidget/>
            </div>
        </div>
    </nav>
);

export default NavBar;