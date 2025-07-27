// src/pages/HomeEmpresa.jsx

import "./HomeEmpresa.css"; // Import your CSS styles

const HomeEmpresa = () => {
  return (
    <div className="home-empresa">
      <header className="home-empresa-header">
        <h1>Panel de Empresa</h1>
        <p>Administra tus vacantes y gestiona postulantes</p>
      </header>

      <section className="home-empresa-content">
        <div className="card">
          <h2>Publicar Vacante</h2>
          <p>Crea nuevas oportunidades de empleo.</p>
          <button>Publicar</button>
        </div>

        <div className="card">
          <h2>Ver Postulantes</h2>
          <p>Revisa candidatos que aplicaron a tus vacantes.</p>
          <button>Ver</button>
        </div>

        <div className="card">
          <h2>Editar Perfil</h2>
          <p>Modifica la información de tu empresa.</p>
          <button>Editar</button>
        </div>
      </section>
    </div>
  );
};

export default HomeEmpresa;
