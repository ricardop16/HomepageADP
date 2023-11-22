import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UsuarioList from './components/usuarios/UsuarioList'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" Component={UsuarioList} />
    </Routes>
    </Router>
    
  </React.StrictMode>,
)
