import Card from "react-bootstrap/Card";
import "./Clientes.css";
import { useEffect, useState } from "react";
import EditarClienteForm from "./EditarClienteForm";

function DetalleCliente(props){
    
    return (
        <div className="col">
            <Card className="mx-auto" style={{marginTop:"2rem", width:"17rem"}}>
              <Card.Title style={{ textAlign: "center" , marginTop:"1rem", color:"#e2322c"}}>
                {props.nombre}
              </Card.Title>
              <Card.Body>
                <h6>
                    Nit
                </h6>
                <p>{props.nit}</p>
                <h6>
                    Correo contacto
                </h6>
                <p>{props.correocontacto}</p>
              </Card.Body>
              <EditarClienteForm nombre={props.nombre} correocontacto={props.correocontacto} nit={props.nit}></EditarClienteForm>
            </Card>
        </div>
      );
}

export default DetalleCliente;