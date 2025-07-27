import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h4>Job Opportunity</h4>
          <p>Tu plataforma para encontrar empleo y mejorar tu perfil laboral.</p>
        </div>
        <div>
          <h4>Enlaces Importantes</h4>
          <ul>
            <li>Testimonios</li>
            <li>Soporte</li>
            <li>Contacto</li>
            <li>Acerca de</li>
          </ul>
        </div>
        <div>
          <h4>Recursos</h4>
          <ul>
            <li>Agregar Carta</li>
            <li>Últimas Noticias</li>
            <li>Preguntas Frecuentes</li>
          </ul>
        </div>
        <div>
          <h4>Síguenos</h4>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Job Opportunity. Todos los derechos reservados.</p>
        <div>
          <a href="#">Política de Privacidad</a> | <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}
