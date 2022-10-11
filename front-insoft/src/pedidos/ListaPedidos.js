import DetallePedido from "./DetallePedido";


function ListaPedidos(){
    return(
    <div>

        <div className="row">
            <DetallePedido id="1232" cliente="Mc Donalds" productos="1 Mouse, 2 Teclados"></DetallePedido>
            <DetallePedido id="42" cliente="Farmatodo" productos="1 Mouse, 2 Sillas, 1 Audifonos"></DetallePedido>
            <DetallePedido id="312" cliente="Mc Donalds" productos="1 Silla, 2 Teclados"></DetallePedido>
            <DetallePedido id="141" cliente="Carulla" productos="1 Mouse, 2 Escritorios"></DetallePedido>
            <DetallePedido id="76" cliente="Carulla" productos="1 Audiofonos, 2 Teclados"></DetallePedido>
            <DetallePedido id="7255" cliente="Mc Donalds" productos="1 Mouse"></DetallePedido>
            <DetallePedido id="3" cliente="Farmatodo" productos="1 Silla, 2 Teclados"></DetallePedido>
            <DetallePedido id="345" cliente="Exito" productos="1 Teclado"></DetallePedido>
        </div>
    </div>
    );
}

export default ListaPedidos;
