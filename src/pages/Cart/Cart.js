import "./Cart.css"
import { useContext, useState } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../../context/CartContext"

import Modal from '../../components/Modal/Modal'
import TextField from '@mui/material/TextField';
import { addDoc, collection } from 'firebase/firestore'
import db from "../../utils/firebaseConfig"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const { cartListItems, totalPrice, cleanCartProducts, deleteProduct} = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                cantidad:item.cantidad,
            }
        } ),
        total: totalPrice
    })
    const [success, setSuccess] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    //DRY = Dont Repeat Yourself
    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const finishOrder = () => {
        navigate('/')
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
        cleanCartProducts()
    }

    return(
        <Container> 
        <div className="contenedor">
            {cartListItems.map( (item) => {
                const {id, title, image, price, cantidad} = item 

                return(
                    <div className="producto" key={id}>
                        <div>
                            <img src={`/${image}`} alt='producto'/>
                        </div>
                        <div>
                            <p>{title}</p>
                        </div>
                        <div>
                            <p>$ {price}</p>
                        </div>
                        <div>
                            <p>{cantidad}</p>
                        </div>
                        <div>
                            <p>Precio total {title}: ${cantidad*price}</p>
                        </div>
                        <div>
                            <button className='btn-delete' onClick={() => deleteProduct(item)}>
                                <Delete />
                            </button>
                        </div>
                    </div>
                )})
            }
            <div className='cart-footer'>
                <Button>Continuar comprando</Button>
                <div>
                    <div>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button onClick={() => setShowModal(true)}>Completar Compra</Button>
                </div>
            </div>
        </div>
        <Modal title={success ? 'Compra exitosa' : 'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
            {success ? (
                <div>
                    La order se genero con exito!
                    Numero de orden: {success}
                    <button onClick={finishOrder}>Aceptar</button>
                </div>
            ) : (
                <form className="form-contact" onSubmit={handleSubmit}>
                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido" 
                        variant="outlined" 
                        value={formValue.name}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="phone"
                        label="Telefono" 
                        variant="outlined" 
                        value={formValue.phone}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Mail" 
                        value={formValue.email}
                        variant="outlined" 
                        onChange={handleChange}
                    />
                    <button type="submit">Enviar</button>
                </form>
            )}
            
        </Modal>
    </Container>
    )
}

export default Cart