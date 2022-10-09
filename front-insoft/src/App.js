import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route exact path="/home" element={<p>home</p>}></Route>
        <Route exact path="/clientes" element={<p>clientes</p>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
