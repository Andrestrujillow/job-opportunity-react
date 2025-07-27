// src/pages/FormularioEmpresa.jsx
import { useNavigate } from "react-router-dom";
import "./Formulario.css";

function FormularioEmpresa() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar datos si es necesario
    console.log("Formulario Empresa enviado");

    // Redirigir al Home de Empresa
    navigate("/home/empresa");
  };

  return (
    <div className="formulario-container">
      <h2>Formulario para Empresas</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre de la Empresa</label>
        <input type="text" placeholder="Ej. Soluciones S.A." required />

        <label>Rubro</label>
        <input type="text" placeholder="Tecnología, Construcción, etc." required />

        <label>Descripción de la Empresa</label>
        <textarea placeholder="¿Qué hace tu empresa?" required></textarea>

        <button type="submit">Finalizar Registro</button>
      </form>
    </div>
  );
}

export default FormularioEmpresa;
