import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import "./Clientes.css";
import { useEffect, useState } from "react";

function EditarClienteForm(props) {
  const [tituloBoton, setTituloBoton] = useState("Editar");
  const [colorBoton, setColorBoton] = useState("secondary");
  const [dialogoEditarCliente, setDialogoEditarCliente] = useState(<div></div>);
  const [dialogoEditarClienteDesplegado, setDialogoEditarClienteDesplegado] =
    useState(false);

  useEffect(() => {
    //console.log("Renderizado");
  });

  function addButtonPresionado() {
    if (dialogoEditarClienteDesplegado) {
      setDialogoEditarClienteDesplegado(false);
      setTituloBoton("Editar");
      setColorBoton("secondary");
      setDialogoEditarCliente(<div></div>);
    } else {
      setDialogoEditarClienteDesplegado(true);
      setTituloBoton("Cancelar");
      setColorBoton("danger");
      setDialogoEditarCliente(<DialogoEditarCliente nombre={props.nombre} nit={props.nit} correocontacto={props.correocontacto}></DialogoEditarCliente>);
    }
  }

  return (
    <div className="editar-cliente-card">
      <div style={{ width: "100%", textAlign: "center" }}>
        <Button
          onClick={addButtonPresionado}
          variant={colorBoton}
          style={{ marginTop: "1rem", width:"100%" }}
        >
          {tituloBoton}
        </Button>
      </div>
      {dialogoEditarCliente}
    </div>
  );
}

function DialogoEditarCliente(props) {
  return (
    <div>
      <Form style={{textAlign:"center"}}>
        <Form.Group as={Row} className="mb-3" controlId="formNombre">
          <Form.Label column sm="12">
            Nombre
          </Form.Label>
          <Col sm="12">
            <Form.Control type="text" placeholder="Nombre cliente" defaultValue={props.nombre}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formNit">
          <Form.Label column sm="12">
            Nit
          </Form.Label>
          <Col sm="12">
            <Form.Control type="text" placeholder="Nit" defaultValue={props.nit}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formCorreoContacto">
          <Form.Label column sm="12">
            Correo Contacto
          </Form.Label>
          <Col sm="12">
            <Form.Control type="text" placeholder="contacto@cliente.com" defaultValue={props.correocontacto}/>
          </Col>
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            Editar
          </Button>
        </div>
      </Form>
      <br></br>
    </div>
  );
}

export default EditarClienteForm;
