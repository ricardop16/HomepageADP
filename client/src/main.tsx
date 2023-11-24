import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import UsuarioList from './components/usuarios/UsuarioList'
import Navbar from './components/navbar/Navbar'
import 'bootswatch/dist/pulse/bootstrap.min.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>

      <Navbar/>

        <Routes>

          <Route path="/" Component={UsuarioList} />

        </Routes>
    </Router>
   
  </React.StrictMode>,
)
