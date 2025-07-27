// src/pages/FormularioCesante.jsx
import { useNavigate } from "react-router-dom";
import "./Formulario.css";

function FormularioCesante() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes guardar los datos del formulario si usas una base de datos
    console.log("Formulario Cesante enviado");

    // Redirigir al Home de Cesante
    navigate("/home/cesante");
  };

  return (
    <div className="formulario-container">
      <h2>Formulario para Cesantes</h2>
      <form onSubmit={handleSubmit}>
        <label>Área de Interés</label>
        <input type="text" placeholder="Ej. Administración" required />

        <label>Último Empleo</label>
        <input type="text" placeholder="Nombre del puesto" required />

        <label>Resumen Profesional</label>
        <textarea placeholder="Cuéntanos sobre ti" required></textarea>

        <button type="submit">Finalizar Registro</button>
      </form>
    </div>
  );
}

export default FormularioCesante;
