import "./Login.css";
import logo from "./logo-insoft.png";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
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
          <div class="form-group">
            <label for="exampleInputEmail1">
              Correo{" "}

            </label> <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                />

            <small id="emailHelp" class="form-text text-muted">
              El correo debe coincidir con el correo registrado en nuestro sistema.
            </small>
          </div>

          <br></br>
          <div class="form-group">
            <label for="exampleInputPassword1">
              Contraseña{" "}
              
            </label>
            <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                />
          </div>
          <br></br>
          <button type="submit" class="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
