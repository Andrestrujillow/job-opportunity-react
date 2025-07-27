// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import FormularioCesante from "./pages/FormularioCesante";
import FormularioEmpresa from "./pages/FormularioEmpresa";
import HomeCesante from "./pages/HomeCesante";
import HomeEmpresa from "./pages/HomeEmpresa";

function App() {
  const [userType, setUserType] = useState(null);

  // Determinar si se ocultan navbar/footer
  const hideHeaderFooter = ["/", "/login", "/registro"].includes(window.location.pathname);

  // Función para cerrar sesión
  const logout = () => {
    setUserType(null);
    window.location.href = "/login";
  };

  // Función para redirigir según tipo de usuario
  const handleLogin = (type) => {
    setUserType(type);
    if (type === "cesante") {
      window.location.href = "/home/cesante";
    } else if (type === "empresa") {
      window.location.href = "/home/empresa";
    }
  };

  return (
    <div className="App">
      {!hideHeaderFooter && <Navbar onLogout={logout} />}
      <Routes>
        <Route path="/" element={<Login setUserType={handleLogin} />} />
        <Route path="/login" element={<Login setUserType={handleLogin} />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registro/cesante" element={<FormularioCesante />} />
        <Route path="/registro/empresa" element={<FormularioEmpresa />} />
        <Route path="/home/cesante" element={<HomeCesante />} />
        <Route path="/home/empresa" element={<HomeEmpresa />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
