import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Orgsystem from '../../assets/img/logo-org-tsplus.png'
import { FaCalendarAlt, FaDatabase, FaHome, FaSignOutAlt } from 'react-icons/fa'

const classes = {
  open: "animated-icon1 open",
  closed: "animated-icon1"
}
const NavBar = props => {
  const showButton = props.showButton
  const [toggle, setToggle] = useState(false)
  const [toggleText, setToggleText] = useState(classes.closed)

  function handleToggle() {
    setToggle(!toggle)
  }

  useEffect(() => {
    if (!toggle) {
      setToggleText(classes.closed)
    }
    if (toggle) {
      setToggleText(classes.open)
    }
  }, [toggle])

  return (
    <div className={`mynav ${toggle && "openNav"}`}>
      <nav className="navbar navbar-light amber lighten-4">
        <img className="navbar-brand" src={Orgsystem} alt="Orgsystem" width="120" />

        {showButton && (
          <button
            className="navbar-toggler first-button"
            type="button"
            onClick={handleToggle}
          >
            <div className={toggleText}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}

      </nav>


      {toggle && (
        <div className="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" href="/home">Home</a> */}
              <Link to="/home" className="link">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/home">Features</a> */}
              <Link to="/cadastros/salas" className="link">
                <FaDatabase /> Cadastros
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/home">Pricing</a> */}
              <Link to="/" className="link">
                <FaCalendarAlt /> Agendamento
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/home">Pricing</a> */}
              <Link to="/" className="nav-link link">
                <FaSignOutAlt /> Sair
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavBar;
