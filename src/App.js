import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Detalle from './pages/Detalle';
import Contacto from './pages/contacto';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/contacto' element={<Contacto />}/>  
          <Route path='/product/:id' element={<Detalle />} />
          <Route path='*' element={<NotFound />}/> 
          <Route path='/' element={<Home />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
