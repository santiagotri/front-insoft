import "./Login.css";
import logo from "./logo-insoft.png";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
  function submit() {
    window.location.href="clientes"
  }
  return (
    <div>
      <div className="login-wrapper">
        <img src={logo} alt="Logo insoft"></img>
        <h2>Portal de distribuidores</h2>
        <p>
          Bienvenido al portal de distribuidores de InSoft, por favor inicie
          sesión.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo </label>{" "}
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="administrador@insoft.com"
            />
            <small id="emailHelp" className="form-text text-muted">
              El correo debe coincidir con el correo registrado en nuestro
              sistema.
            </small>
          </div>

          <br></br>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Contraseña"
            />
          </div>
          <br></br>
        </form>

        <button onClick={submit} className="btn btn-danger">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}

export default Login;
