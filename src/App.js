
import './App.css';
import Greeting from './components/ItemListContainer';
import CardList from './components/ItemList';
import NavBar from "./components/NavBar";
import  productos  from './utils/prodMock';


function App() {
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
