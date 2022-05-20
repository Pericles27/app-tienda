import React from "react";
let carrito={
    height:100,
    marginRight :10,
    display: 'flex',
    alignItems:'center',
}
let png={
    height:'50%',
    display: 'flex',
    alignItems:'center',
}

class CartWidget extends React.Component{
    render(){
        return(
            <div style={carrito}>
                <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="carrito" style={png}/>
            </div>
        )
    }
}
export default CartWidget;