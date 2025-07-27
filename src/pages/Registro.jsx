// src/pages/Registro.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registro.css"; // Import your CSS styles

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("cesante");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // Simular creación de usuario
    console.log("Registrado:", { nombre, correo, password, tipoUsuario });

    // Redirigir al formulario específico
    if (tipoUsuario === "cesante") {
      navigate("/registro/cesante");
    } else {
      navigate("/registro/empresa");
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo</label>
        <input
          type="text"
          placeholder="Tu nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Correo Electrónico</label>
        <input
          type="email"
          placeholder="ejemplo@correo.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Mínimo 8 caracteres"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <small>Mínimo 8 caracteres</small>

        <label>Tipo de Usuario</label>
        <select
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
        >
          <option value="cesante">Cesante</option>
          <option value="empresa">Empresa</option>
        </select>

        <button type="submit">Registrarse</button>
      </form>

      <p>
        ¿Ya tienes una cuenta?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Inicia sesión
        </span>
      </p>
    </div>
  );
}

export default Registro;
