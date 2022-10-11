import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login/Login";
import NavbarInsoft from "./navbar/Navbar";
import CrearClienteForm from "./clientes/CrearClienteForm";
import Button from "react-bootstrap/esm/Button";
import ListaClientes from "./clientes/ListaClientes";
import CrearPedidoForm from "./pedidos/CrearPedidoForm";
import ListaPedidos from "./pedidos/ListaPedidos";

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
  const clientes=[{
    id:1,
    nombre:"Farmatodo",
    nit:"192383719",
    correo:"contabilidad@farmatodo.com"
  },{
    id:2,
    nombre:"Mc Donalds",
    nit:"7239983833",
    correo:"mcdonalds@mcdonalds.com"
  },{
    id:3,
    nombre:"Carulla",
    nit:"1209419828",
    correo:"carulla@carulla.com"
  },{
    id:4,
    nombre:"La Brasa Roja",
    nit:"1029383471",
    correo:"lbr@lbr.com"
  },]

  const productos=[{
    id:1,
    nombre:"Mouse",
    lote:"a1",
    valor:15000.0
  },{
    id:2,
    nombre:"Teclado",
    lote:"b2",
    valor:25000.0
  },{
    id:3,
    nombre:"Silla",
    lote:"iy7",
    valor:50000.0
  },{
    id:4,
    nombre:"Esfero",
    lote:"a7",
    valor:1000.0
  },]
  
  return (
    <div>
      <NavbarInsoft pedidos nombreUsuario="Nombre Usuario"></NavbarInsoft>
      <CrearPedidoForm clientes={clientes} productos={productos}></CrearPedidoForm>
      <ListaPedidos></ListaPedidos>
    </div>
    );
}

export default App;
