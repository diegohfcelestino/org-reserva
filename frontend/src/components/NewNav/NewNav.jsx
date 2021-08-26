import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Orgsystem from "../../assets/img/logo-org-tsplus.png";
import { FaSignOutAlt } from "react-icons/fa";

import "./navstyle.scss";
import { NavBarContext } from "../../context/NavBarContext";

const NewNav = () => {
  const { isHome, handleIsHome } = useContext(NavBarContext);
  const [collapse, setCollapse] = useState(false);

  let history = useHistory()

  function handleClick(path) {
    handleIsHome(true)
    history.push(path)

  }

  const handleCollapse = () => {
    setCollapse(!collapse);
  };
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-light"
      style={{ backgroundColor: "rgb(231, 230, 230)" }}
    >
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
        <img
          className="navbar-brand"
          src={Orgsystem}
          alt="Orgsystem"
          width="100"
        />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!isHome && (
              <>
                <li className="nav-item">
                  <button
                    className={collapse ? "nav-button text" : "nav-link"}
                    aria-current="page"
                    onClick={() => handleClick("/home")}
                    style={{
                      border: "none",
                      background: "transparent"
                    }}
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <Link
                    className={collapse ? "nav-link text" : "nav-link"}
                    to="/agendamento"
                  >
                    Agendamento
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={collapse ? "nav-link text" : "nav-link"}
                    to="/cadastros/salas"
                  >
                    Cadastros
                  </Link>
                </li></>
            )}
          </ul>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={collapse ? "nav-link text" : "nav-link"} to="/">
                <FaSignOutAlt /> Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNav;
