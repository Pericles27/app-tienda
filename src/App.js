import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Detalle from './pages/Detalle';
import Contacto from './pages/contacto';
import NotFound from './pages/NotFound';
import ProductList from "./pages/productList";
import Cart from './pages/Cart';
import { CartProvider} from './context/CartContext'


function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/contacto' element={<Contacto />}/>  
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<Detalle />} />
            <Route path='/products/:category' element={<ProductList />}/> 
            <Route path='*' element={<NotFound />}/> 
            <Route path='/' element={<Home />}/>  
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
