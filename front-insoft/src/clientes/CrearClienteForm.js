import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import "./Clientes.css";
import { useEffect, useState } from "react";

function CrearClienteForm(props) {
  const [tituloBoton, setTituloBoton] = useState(" + Añadir Cliente ");
  const [colorBoton, setColorBoton] = useState("success");
  const [dialogoCrearCliente, setDialogoCrearCliente] = useState(<div></div>);
  const [dialogoCrearClienteDesplegado, setDialogoCrearClienteDesplegado] =
    useState(false);

    if(props.actualizar){

    }
  useEffect(() => {
    //console.log("Renderizado");
  });

  function addButtonPresionado() {
    if (dialogoCrearClienteDesplegado) {
      setDialogoCrearClienteDesplegado(false);
      setTituloBoton(" + Añadir Cliente ");
      setColorBoton("success");
      setDialogoCrearCliente(<div></div>);
    } else {
      setDialogoCrearClienteDesplegado(true);
      setTituloBoton("Cancelar");
      setColorBoton("danger");
      setDialogoCrearCliente(<DialogoCrearCliente></DialogoCrearCliente>);
    }
  }

  return (
    <div className="crear-cliente-card">
      <div style={{ width: "100%" , textAlign:"center"}}>
          <Button size="lg" onClick={addButtonPresionado} variant={colorBoton} style={{marginTop:"1rem", marginBottom:"1rem"}}>
            {tituloBoton}
          </Button>
      </div>
      {dialogoCrearCliente}
    </div>
  );
}

function DialogoCrearCliente() {
  return (
    <div>
        <Card className="mx-auto" style={{ width: "80%"}}>
          <Card.Title style={{ textAlign: "center" }}>
            Crear nuevo cliente
          </Card.Title>
          <Card.Body>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formNombre">
                <Form.Label column sm="2">
                  Nombre
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Nombre cliente" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formNit">
                <Form.Label column sm="2">
                  Nit
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="900645016" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formCorreoContacto">
                <Form.Label column sm="2">
                  Correo Contacto
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="contacto@cliente.com" />
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

export default CrearClienteForm;
