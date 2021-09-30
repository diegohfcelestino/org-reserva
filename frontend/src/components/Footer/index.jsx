/* import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-secondary" >
            <div className="container-fluid">
                <p className="text-black">App desenvolvido pelo time <a href="https://github.com/diegohfcelestino/org-reserva" target="_blank" rel="noreferrer">DevPadawan</a></p>
                <p>
                    <a href="https://www.orgsystem.com.br/" target="_blank" rel="noreferrer">Orgsystem Software</a>
                </p>
            </div>
        </footer >
    );
}

export default Footer;
 */

import React, { useCallback } from "react";
import { useAuth } from "../../context/Auth";

export default function Footer() {
  const { user } = useAuth()
  const data = user.user_metadata
  const date = useCallback(() => {
    const dayList = [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
    ];
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date();
    const dateFull = date.toLocaleDateString("pt-br", options);
    const dayWeek = date.getDay();
    const day = dayList[dayWeek];
    return `${day}, ${dateFull}`;
  }, []);

  return (
    <div className="footerContainer">
      <p className="footerText  text-muted">
        App desenvolvido pelo time{" "}
        <a
          href="https://github.com/diegohfcelestino/org-reserva"
          target="_blank"
          rel="noreferrer"
        >
          DevPadawan
        </a>
      </p>
      <p className="footerText">Usuário: {data.name}</p>
      <div className="footerText text-muted" title={date()}>
        {date()}
      </div>
    </div>
  );
}
