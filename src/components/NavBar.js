import CartWidget from './CartWidget';

let estilos={
    marginTop:0,
    fontSize: 40,
    backgroundColor:'#189AB4',
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    marginLeft: 5,
    marginRight: 5,
}

let alineados={
    display: 'inline',
    color:'#05445E',
}
let logo ={
    display:'inline',
    fontFamily:'fantasy',
    color:'black',
    fontSize:50,
}
const NavBar = () => (
    <nav>
        <ul style={estilos}>
            <li style={logo}>
                <a href="../app.js" style={{textDecoration:'none',color:'inherit'}}>NH Finance</a>
            </li>
            <li style={alineados}>
                Home
            </li>
            <li style={alineados}>
                Crypto
            </li>
            <li style={alineados}>
                Stocks
            </li>
            <li style={alineados}>
                NFT's
            </li>
            <li style={alineados}>
                About Us
            </li>
            <li style={alineados}>
                <CartWidget/>
            </li>
        </ul>
    </nav>
);

export default NavBar;