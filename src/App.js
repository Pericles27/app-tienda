
import './App.css';
import Greeting from './components/ItemListContainer';
import NavBar from "./components/NavBar";
function App() {
  return <>
  <body style={{backgroundColor: '#D4F1F4'}}>
    <NavBar />
    <h2>Las ofertas de la semana</h2>
    <Greeting />
  </body>
</>;
}

export default App;
