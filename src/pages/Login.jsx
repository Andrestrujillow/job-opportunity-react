// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import your CSS styles

function Login({ setUserType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("cesante"); // por defecto
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí deberías verificar credenciales (ejemplo simple)
    if (email && password.length >= 8) {
      setUserType(tipoUsuario);
      if (tipoUsuario === "cesante") {
        navigate("/home/cesante");
      } else {
        navigate("/home/empresa");
      }
    } else {
      alert("Credenciales inválidas o contraseña muy corta");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Correo Electrónico</label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Tipo de Usuario</label>
        <select
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
        >
          <option value="cesante">Cesante</option>
          <option value="empresa">Empresa</option>
        </select>

        <button type="submit">Ingresar</button>
      </form>

      <p>
        ¿No tienes cuenta?{" "}
        <span className="link" onClick={() => navigate("/registro")}>
          Regístrate
        </span>
      </p>
    </div>
  );
}

export default Login;
