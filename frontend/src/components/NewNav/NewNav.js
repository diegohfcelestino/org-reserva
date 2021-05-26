import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Orgsystem from '../../assets/img/logo-org-tsplus.png'
import { FaSignOutAlt } from 'react-icons/fa'

import './navstyle.css'

const NewNav = () => {
  const [collapse, setCollapse] = useState(false)

  const handleCollapse = () => {
    setCollapse(!collapse)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#b9aeae" }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler navbar-toggler-right dropdown"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => handleCollapse()}
        >
          <div className={collapse ? "hamburguer open" : "hamburguer"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <img className="navbar-brand" src={Orgsystem} alt="Orgsystem" width="120" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={collapse ? "nav-link text" : "nav-link"} aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={collapse ? "nav-link text" : "nav-link"} to="/home">Agendamento</Link>
            </li>
            <li className="nav-item">
              <Link className={collapse ? "nav-link text" : "nav-link"} to="/cadastros/salas">Cadastros</Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={collapse ? "nav-link text" : "nav-link"} to="/"><FaSignOutAlt /> Sair</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NewNav;
