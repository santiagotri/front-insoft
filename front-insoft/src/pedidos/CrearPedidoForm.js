import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import "./Pedidos.css";
import { useEffect, useState } from "react";

/**
 * 
 * @param {clientes, productos} props 
 * @returns 
 */
function CrearPedidoForm(props) {
  const [tituloBoton, setTituloBoton] = useState(" + Añadir Pedido ");
  const [colorBoton, setColorBoton] = useState("success");
  const [dialogoCrearPedido, setDialogoCrearPedido] = useState(<div></div>);
  const [dialogoCrearPedidoDesplegado, setDialogoCrearPedidoDesplegado] =
    useState(false);

  useEffect(() => {
    //console.log("Renderizado");
  });

  function addButtonPresionado() {
    if (dialogoCrearPedidoDesplegado) {
      setDialogoCrearPedidoDesplegado(false);
      setTituloBoton(" + Añadir Pedido ");
      setColorBoton("success");
      setDialogoCrearPedido(<div></div>);
    } else {
      setDialogoCrearPedidoDesplegado(true);
      setTituloBoton("Cancelar");
      setColorBoton("danger");
      setDialogoCrearPedido(<DialogoCrearPedido clientes={props.clientes} productos={props.productos}></DialogoCrearPedido>);
    }
  }

  return (
    <div className="crear-pedido-card">
      <div style={{ width: "100%", textAlign: "center" }}>
        <Button
          size="lg"
          onClick={addButtonPresionado}
          variant={colorBoton}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          {tituloBoton}
        </Button>
      </div>
      {dialogoCrearPedido}
    </div>
  );
}

/**
 * 
 * @param {clientes, productos} props 
 * @returns 
 */
function DialogoCrearPedido(props) {
  function darSelectClientes() {
    return (
      <Form.Select aria-label="Default select example">
        <option>---</option>
        {
        props.clientes.map(cliente => {
            return <option key={"optionCliente"+cliente.id}>{cliente.nombre + " - " + cliente.nit}</option>
        })
        }
      </Form.Select>
    );
  }
  
  function handleSubmit(e){
    e.preventDefault()
    for(var i=0; i<e.target.length;i++){
        if(e.target[i].value!=="---" && e.target[i].value!=="") console.log(e.target[i].value)
    }
  }

  return (
    <div>
      <Card className="mx-auto" style={{ width: "80%" }}>
        <Card.Title style={{ textAlign: "center" }}>
          Crear nuevo pedido
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formNombre">
              <Form.Label column sm="2">
                Cliente
              </Form.Label>
              <Col sm="10">
              {darSelectClientes()}
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formNit">
              <Form.Label column sm="2">
                Producto
              </Form.Label>
              <Col sm="10">
              <SelectProductos productos={props.productos}></SelectProductos>
              </Col>
            </Form.Group>
            
            <div style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit">
                Crear
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <br></br>
    </div>
  );
}

function SelectProductos(props){

    const [hijoProducto,setHijoProducto] = useState(<div></div>)
    
    function handleChange(e) {
        setHijoProducto(<SelectProductos productos={props.productos}></SelectProductos>)
        }
    return(
            <div>
                <Form.Select aria-label="Default select example" onChange={handleChange}>
                <option>---</option>
                {
                props.productos.map(producto => {
                    return (<option key={"optionProducto"+producto.id}>{producto.nombre + " - $"+producto.valor.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</option>)
                })
                }
                          </Form.Select>
                          {hijoProducto}
            </div>
        );
      
}

export default CrearPedidoForm;
