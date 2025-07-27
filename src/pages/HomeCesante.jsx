// pages/HomeCesante.jsx

import "./HomeCesante.css"; // Import your CSS styles

const HomeCesante = () => {
  return (
    <div className="home-cesante">
      <header className="home-cesante-header">
        <h1>Bienvenido/a Cesante</h1>
        <p>Encuentra oportunidades laborales a tu medida</p>
      </header>

      <section className="home-cesante-content">
        <div className="card">
          <h2>Ofertas Disponibles</h2>
          <p>Explora empleos según tu perfil profesional.</p>
          <button>Ver Ofertas</button>
        </div>

        <div className="card">
          <h2>Actualizar CV</h2>
          <p>Sube o modifica tu currículum vitae.</p>
          <button>Actualizar</button>
        </div>

        <div className="card">
          <h2>Postulaciones</h2>
          <p>Revisa el estado de tus postulaciones.</p>
          <button>Ver Postulaciones</button>
        </div>
      </section>
    </div>
  );
};

export default HomeCesante;
