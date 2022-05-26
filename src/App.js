
import './App.css';
import Greeting from './components/ItemListContainer';
import CardList from './components/CardList';
import Modal from './components/Modal';
import NavBar from "./components/NavBar";
import { useState, useEffect } from 'react';


function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const [products, setProducts] = useState([])
  const productos = [
    {
      title : 'Camiseta Boca Titular',
      price : 17500,
      image : 'boca.jpg',
      description: 'Camiseta titular de club atletico Boca Juniors tamaño adulto',
      stock: 4,
      id: 1
    },
    {
      title : 'Camiseta Argentina Visitante',
      price : 20000,
      image : 'arg.jpg',
      description: '',
      stock: 5,
      id: 2
    },
    {
      title : 'Camiseta River Titular',
      price : 15000,
      image : 'river.jpg',
      description: '',
      stock: 10,
      id: 3
    },
    {
      title : 'Camiseta Alemania Titular',
      price : 12000,
      image : 'ger.jpg',
      description: '',
      stock: 10,
      id: 4
    },
  ]

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve(productos)
        }, 4000)
    })
  }  

  useEffect( () => {
    getProducts()
    .then( (response) => {
      // console.log("Then : Respuesta Promesa: ", response)
      setProducts(response)
    })
    .catch( (err) => {
      // console.log("Catch: Fallo la llamada.", err)
    })
    .finally( () => {
      // console.log("Finally: termino la promesa")
    })
  }, [])


  return <>
  <body style={{backgroundColor: '#D4F1F4'}}>
    <NavBar/>
    <h2>Las ofertas de la semana</h2>
    <Greeting/>

    <div className='general-container'>
      <CardList title={'Productos Recomendados'} products={productos}/>
    </div>
  </body>
</>;
}

export default App;
