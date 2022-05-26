
import './App.css';
import Greeting from './components/ItemListContainer';
import CardList from './components/ItemList';
import Modal from './components/Modal';
import NavBar from "./components/NavBar";
import { useState, useEffect } from 'react';
import  productos  from './utils/prodMock';


function App() {
  const [products, setProducts] = useState([])


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
      console.log("Then : Respuesta Promesa: ", response)
      setProducts(response)
    })
    .catch( (err) => {
      console.log("Catch: Fallo la llamada.", err)
    })
    .finally( () => {
      console.log("Finally: termino la promesa")
    })
  }, [])


  return <>
  <body style={{backgroundColor: '#D4F1F4'}}>
    <NavBar/>
    <Greeting/>

    <div className='general-container'>
      <CardList title={'Productos Recomendados'} products={productos}/>
    </div>
  </body>
</>;
}

export default App;
