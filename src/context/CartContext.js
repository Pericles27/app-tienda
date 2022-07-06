import { Title } from "@mui/icons-material";
import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, cantidad ) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + (product.price*cantidad))
            let producto= {
                id: product.id,
                cantidad: cantidad,
                price: product.price,
                title:product.title,
                image: product.image
            }
            localStorage.setItem('products', JSON.stringify([...cartListItems, producto]))
            return setCartListItems(cartListItems => [...cartListItems, producto])
        }
    }

    const deleteProduct = (product) => {
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
        localStorage.clear();
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }