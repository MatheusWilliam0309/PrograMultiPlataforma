// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importe as novas páginas
import Dashboard from './pages/Dashboard';
import Veiculos from './pages/Veiculos';
import Motoristas from './pages/Motoristas';
import Rotas from './pages/Rotas';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">🚚 Sistema de Frota</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/veiculos">Veículos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/motoristas">Motoristas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rotas">Rotas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/veiculos" element={<Veiculos />} />
          <Route path="/motoristas" element={<Motoristas />} />
          <Route path="/rotas" element={<Rotas />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;