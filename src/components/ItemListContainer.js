import ReactDOM from "react-dom";

function UserGreeting(props) {
    return <h1>Bienvenido!</h1>;
}
  
function GuestGreeting(props) {
    return <h1>Inicia Sesión para ver el catálogo</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}
  
  ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);
export default Greeting
  