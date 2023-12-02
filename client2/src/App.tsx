/*import { BrowserRouter, Routes,Route } from "react-router-dom"

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

function App(){
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<h1 className='text-3xl font-bold underline'>ADP Vicente Noble</h1>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />
      </Routes>
    </BrowserRouter>
  )
}*/

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Historia from './pages/Historia';
import MisionVisionValores from './pages/MisionVisionValores';
import Contacto from './pages/Contacto';
import IniciarSesion from './pages/IniciarSesion';

function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="dropdown" onClick={handleDropdownToggle}>
      <Link to="/Nosotros">Nosotros</Link>
      {isDropdownOpen && (
        <ul className="dropdown-content">
          <li>
            <Link to="/Nosotros/Historia">Historia</Link>
          </li>
          <li>
            <Link to="/Nosotros/MisionVisionValores">Mision, Visión y Valores</Link>
          </li>
        </ul>
      )}
    </li>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          {/* Barra de Navegación */}
          <nav>
            <ul>
              <li>
                <Link to="/Inicio">Inicio</Link>
              </li>
              <DropdownMenu />
              <li>
                <Link to="/Contacto">Contacto</Link>
              </li>
              <li className="Li-iniciarsesion">
                <Link to="/IniciarSesion">Iniciar Sesión</Link>
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

          <footer>Copyright © 2023 ADP Vicente Noble | Todos los derechos reservados</footer>
        </header>
        </div>
    </Router>
  );
}

export default App;