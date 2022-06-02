import { useState, useEffect } from 'react';

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
};
export default Greeting
  