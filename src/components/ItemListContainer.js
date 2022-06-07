import { useState, useEffect } from 'react';
import  productos  from '../utils/prodMock';
import CardList from '../components/ItemList';

function Greeting(props) {
  const [products, setProducts] = useState([])


  const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
          resolve(products)
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

  return<>
    <div className='general-container'>
      < CardList title={'Productos Recomendados'} products={productos}/>
    </div>
  </>
};
export default Greeting
  