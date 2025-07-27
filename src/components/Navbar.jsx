import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/figma.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Job Opportunity" />
        <span><strong>JOB OPPORTUNITY</strong></span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><a href="#">Capacitaciones</a></li>
        <li><a href="#">Clasificados</a></li>
        <li><a href="#">FAQs</a></li>
        <li><Link to="/registro">Registrarse</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </nav>
  );
}
