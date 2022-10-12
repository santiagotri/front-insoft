import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import "./Pedidos.css";
import { useEffect, useState } from "react";

function EditarPedidoForm(props) {
  const [tituloBoton, setTituloBoton] = useState("Cancelar");
  const [colorBoton, setColorBoton] = useState("secondary");
  const [dialogoEditarPedido, setDialogoEditarPedido] = useState(<div></div>);
  const [dialogoEditarPedidoDesplegado, setDialogoEditarPedidoDesplegado] =
    useState(false);

  useEffect(() => {
    //console.log("Renderizado");
  });

  function addButtonPresionado() {
    if (dialogoEditarPedidoDesplegado) {
      setDialogoEditarPedidoDesplegado(false);
      setTituloBoton("Cancelar");
      setColorBoton("secondary");
      setDialogoEditarPedido(<div></div>);
    } else {
      setDialogoEditarPedidoDesplegado(true);
      setTituloBoton("Volver");
      setColorBoton("secondary");
      setDialogoEditarPedido(
        <DialogoEditarPedido
        id={props.id}
        ></DialogoEditarPedido>
      );
    }
  }

  return (
    <div className="editar-pedido-card">
      <div style={{ width: "100%", textAlign: "center" }}>
        <Button
          onClick={addButtonPresionado}
          variant={colorBoton}
          style={{ marginTop: "1rem", width: "100%" }}
        >
          {tituloBoton}
        </Button>
      </div>
      {dialogoEditarPedido}
    </div>
  );
}

function DialogoEditarPedido(props) {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <br></br>
        <h5>
          ¿Está seguro que desea cancelar el pedido #{props.id}? Esta acción es irreversible
        </h5>
        <br></br>
      </div>
      <Form style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Button variant="danger" type="submit">
            Cancelar pedido
          </Button>
        </div>
      </Form>
      <br></br>
    </div>
  );
}

export default EditarPedidoForm;
