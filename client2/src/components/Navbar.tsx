import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Historia from './Historia';
import MisionVisionValores from './MisionVisionValores';
import Contacto from './Contacto';
import IniciarSesion from './IniciarSesion';

function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="dropdown" onClick={handleDropdownToggle}>
      <NavLink to="/Nosotros">Nosotros</NavLink>
      {isDropdownOpen && (
        <ul className="dropdown-content">
          <li>
            <NavLink to="/Nosotros/Historia">Historia</NavLink>
          </li>
          <li>
            <NavLink to="/Nosotros/MisionVisionValores">Mision, Visión y Valores</NavLink>
          </li>
        </ul>
      )}
    </li>
  );
}

function NavbarComponent() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Barra de Navegación */}
          <nav>
            <ul>
              <li>
                <NavLink to="/Inicio">Inicio</NavLink>
              </li>
              <DropdownMenu />
              <li>
                <NavLink to="/Contacto">Contacto</NavLink>
              </li>
              <li className="Li-iniciarsesion">
                <NavLink to="/IniciarSesion">Iniciar Sesión</NavLink>
              </li>
            </ul>
          </nav>

          {/* Contenido de la Página */}
          <Routes>
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Nosotros/Historia" element={<Historia />} />
            <Route path="/Nosotros/MisionVisionValores" element={<MisionVisionValores />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/IniciarSesion" element={<IniciarSesion />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default NavbarComponent;
