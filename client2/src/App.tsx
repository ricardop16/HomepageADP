
/*import { BrowserRouter, Routes,Route } from "react-router-dom"
=======
import { BrowserRouter, Routes,Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
>>>>>>> ab1a07df23d902f3ee6b4da9528841a5fcdd427b

import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"

function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<h1 className='text-3xl font-bold underline'>ADP Vicente Noble</h1>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      <Route path="/register" element={<RegisterPage></RegisterPage>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    

        <footer>Copyright © 2023 ADP Vicente Noble | Todos los derechos reservados</footer>


  )
}*/

import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Historia from './components/Historia';
import MisionVisionValores from './components/MisionVisionValores';
import Contacto from './components/Contacto';
import IniciarSesion from './components/IniciarSesion';

import FooterHomepage from './components/Footer';


function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="dropdown-hp" onClick={handleDropdownToggle}>
      <Link to="/Nosotros">Nosotros</Link>
      {isDropdownOpen && (
        <ul className="dropdown-contenido-hp">
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
      <div className="App bg-gray-300 text-black flex flex-col min-h-screen">
        <header className="App-header">
          
          {/* Barra de Navegación */}
          <nav className='barranavegacionhp'>
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

          {/* Esto incluye el FooterHomepage */}
          <FooterHomepage />

        </header>
        </div>
    </Router>
  );
}

export default App;