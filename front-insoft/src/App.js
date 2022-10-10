import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login/Login";
import NavbarInsoft from "./navbar/Navbar";
import CrearClienteForm from "./clientes/CrearClienteForm";
import Button from "react-bootstrap/esm/Button";
import ListaClientes from "./clientes/ListaClientes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route exact path="/clientes" element={<Clientes></Clientes>}></Route>
        <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
      </Routes>
    </Router>
  );
}

function Clientes(){
  return (
    <div>
      <NavbarInsoft clientes nombreUsuario="Nombre Usuario"></NavbarInsoft>
      <CrearClienteForm></CrearClienteForm>
      <ListaClientes></ListaClientes>
    </div>
    );
}

function Pedidos(){
  return (
    <NavbarInsoft pedidos nombreUsuario="Nombre Usuario"></NavbarInsoft>
    );
}

export default App;
