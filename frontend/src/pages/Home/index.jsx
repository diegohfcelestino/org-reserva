import React from 'react';
import { Link } from "react-router-dom";

import Servicos from '../../assets/img/icons8-serviços.gif'

export default function Home() {
  return (
    <div className="container" style={{
      minHeight: "81vh"
    }}>
      <div className="d-flex justify-content-center py-5">
        <h1>Em breve novos conteúdos...</h1>
      </div>
      <div style={
        {
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          alignItems: "center",
          justifyContent: "center",
          padding: "25px 25px 50px 0"
        }
      }>
        <img
          src={Servicos}
          alt="Rodando"
        />
        <h4>Enquanto isso visite a página de
          <Link /* className={collapse ? "nav-link text" : "nav-link"} */
            to="/agendamento"
          >
            {' '}  Agendamento
          </Link>
        </h4>
      </div>
    </div>
  )
}

