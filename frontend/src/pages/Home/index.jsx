import React, { useContext } from "react";

import ButtonMenu from "../../components/ButtonMenu";

import Cadastrar from "../../assets/icons/online-form.svg";
import Calendar from "../../assets/icons/calendar-date.svg";
import Config from "../../assets/icons/config.svg";
import Ponto from "../../assets/icons/realtime.svg";
import Treinamento from "../../assets/icons/online-learning.svg";
import Video from "../../assets/icons/video.svg";

import "./style.scss";
import { NavBarContext } from "../../context/NavBarContext";

export default function Home() {
  const { hanldeIsHome } = useContext(NavBarContext);

  return (
    <div className="home-container">
      <h1>Selecione uma opção:</h1>
      <div className="button">
        <ButtonMenu onClick={hanldeIsHome} path="/agendamento">
          <img src={Calendar} alt="Agenda" />
          <p>Agendamento</p>
        </ButtonMenu>
        <ButtonMenu onClick={hanldeIsHome} path="/cadastros">
          <img src={Cadastrar} alt="Cadastrar" />
          <p>Cadastros</p>
        </ButtonMenu>
        <ButtonMenu onClick={hanldeIsHome} path="/home">
          <img src={Ponto} alt="Ponto" />
          <p>Ponto</p>
        </ButtonMenu>
        <ButtonMenu path="/videos">
          <img src={Video} alt="Reinf" />
          <p>Videos Reinf</p>
        </ButtonMenu>
        <ButtonMenu onClick={hanldeIsHome} path="/home">
          <img src={Treinamento} alt="Treinamentos" />
          <p className="text-center">Cursos e Treinamentos</p>
        </ButtonMenu>
        <ButtonMenu onClick={hanldeIsHome} path="/home">
          <img src={Config} alt="Configurações" />
          <p>Configurações</p>
        </ButtonMenu>
      </div>
    </div>
  );
}
