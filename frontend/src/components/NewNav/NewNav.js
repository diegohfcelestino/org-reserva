import React from 'react'
import { Link } from 'react-router-dom';
import Orgsystem from '../../assets/img/logo-org-tsplus.png'
import { FaSignOutAlt } from 'react-icons/fa'

import './style.css'

const NewNav = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#b9aeae" }}>
      <div className="container-fluid">
        <img className="navbar-brand" src={Orgsystem} alt="Orgsystem" width="120" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">Agendamento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastros/salas">Cadastros</Link>
            </li>
          </ul>
          <Link className="nav-link text-dark" to="/"><FaSignOutAlt /> Sair</Link>
        </div>
      </div>
    </nav>
  )
}

export default NewNav;
