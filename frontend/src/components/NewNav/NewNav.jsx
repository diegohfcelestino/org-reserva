import React from 'react'
import { Link } from 'react-router-dom';
import Orgsystem from '../../assets/img/logo-org-tsplus.png'
import { FaSignOutAlt } from 'react-icons/fa'

import './navstyle.css'

const NewNav = () => {
  return (

    <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: "#b9aeae" }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler navbar-toggler-right collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>


        </button>
        <img className="navbar-brand" src={Orgsystem} alt="Orgsystem" width="120" />
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown me-auto mb-2 mb-lg-0" data-app-modern-menu="true">
            <li className="nav-item">
              <Link className="nav-link text" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text" to="/home">Agendamento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text" to="/cadastros/salas">Cadastros</Link>
            </li>
          </ul>
          <Link className="nav-link text" to="/"><FaSignOutAlt /> Sair</Link>
        </div>
      </div>
    </nav>

  )
}

export default NewNav;
