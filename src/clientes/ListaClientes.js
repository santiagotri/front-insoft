import DetalleCliente from "./DetalleCliente";


function ListaClientes(){
    return(
    <div>

        <div className="row">
            <DetalleCliente nombre="Exito" nit="4123451" correocontacto="comercial@exito.com"></DetalleCliente>
            <DetalleCliente nombre="Farmatodo" nit="982890412" correocontacto="compras@farmatodo.com"></DetalleCliente>
            <DetalleCliente nombre="Carulla" nit="234281239" correocontacto="grupocarulla@carulla.com"></DetalleCliente>
            <DetalleCliente nombre="Mc Donalds SAS" nit="9001234180" correocontacto="raulvargas@mcdonalds.com.co"></DetalleCliente>
            <DetalleCliente nombre="La Brasa Roja" nit="756783212" correocontacto="lbr@gmail.com"></DetalleCliente>
            <DetalleCliente nombre="Crepes & Waffles" nit="341234511" correocontacto="compras@crepesywaffles.com"></DetalleCliente>
            <DetalleCliente nombre="Universidad de los Andes" nit="4982018882" correocontacto="contacto@uniandes.edu.co"></DetalleCliente>
            <DetalleCliente nombre="Dascom A&T SAS" nit="900645015" correocontacto="info@dascomayt.com"></DetalleCliente>
        </div>
    </div>
    );
}

export default ListaClientes;
