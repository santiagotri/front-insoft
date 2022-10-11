import DetallePedido from "./DetallePedido";


function ListaPedidos(){
    return(
    <div>

        <div className="row">
            <DetallePedido id="1232" cliente="Mc Donalds" productos="1 Mouse, 2 Teclados" estado="En proceso"></DetallePedido>
            <DetallePedido id="42" cliente="Farmatodo" productos="1 Mouse, 2 Sillas, 1 Audifonos" estado="Esperando pago"></DetallePedido>
            <DetallePedido id="312" cliente="Mc Donalds" productos="1 Silla, 2 Teclados" estado="En proceso"></DetallePedido>
            <DetallePedido id="141" cliente="Carulla" productos="1 Mouse, 2 Escritorios" estado="En proceso"></DetallePedido>
            <DetallePedido id="76" cliente="Carulla" productos="1 Audiofonos, 2 Teclados" estado="Cancelado"></DetallePedido>
            <DetallePedido id="7255" cliente="Mc Donalds" productos="1 Mouse" estado="Finalizado"></DetallePedido>
            <DetallePedido id="3" cliente="Farmatodo" productos="1 Silla, 2 Teclados" estado="Cancelado"></DetallePedido>
            <DetallePedido id="345" cliente="Exito" productos="1 Teclado" estado="En proceso"></DetallePedido>
        </div>
    </div>
    );
}

export default ListaPedidos;
