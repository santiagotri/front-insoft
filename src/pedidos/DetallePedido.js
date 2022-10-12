import Card from "react-bootstrap/Card";
import "./Pedidos.css";
import { useEffect, useState } from "react";
import EditarPedidoForm from "./EditarPedidoForm";

function DetallePedido(props) {
  function editarPedido() {
    if (props.estado !== "Cancelado" && props.estado !== "Finalizado")
      return <EditarPedidoForm id={props.id}></EditarPedidoForm>;
  }
  return (
    <div className="col">
      <Card className="mx-auto" style={{ marginTop: "2rem", width: "17rem" }}>
        <Card.Title
          style={{ textAlign: "center", marginTop: "1rem", color: "#e2322c" }}
        >
          Pedido #{props.id}
        </Card.Title>
        <Card.Body>
          <h6>Cliente</h6>
          <p>{props.cliente}</p>
          <h6>Productos</h6>
          <p>{props.productos}</p>
          <h6>Estado</h6>
          <p>{props.estado}</p>
        </Card.Body>
        {editarPedido()}
      </Card>
    </div>
  );
}

export default DetallePedido;
