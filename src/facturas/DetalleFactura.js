import Card from "react-bootstrap/Card";
import "./Facturas.css";
import { useEffect, useState } from "react";

function DetalleFactura(props){
    
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
            </Card>
        </div>
      );
}

export default DetalleFactura;