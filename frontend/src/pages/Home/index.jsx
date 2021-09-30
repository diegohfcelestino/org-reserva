import React, { useEffect } from "react";
import Calendar from "../../assets/icons/calendar-date.svg";
import Config from "../../assets/icons/config.svg";
import Cadastrar from "../../assets/icons/online-form.svg";
import Treinamento from "../../assets/icons/online-learning.svg";
import Ponto from "../../assets/icons/realtime.svg";
import Video from "../../assets/icons/video.svg";
import ButtonMenu from "../../components/ButtonMenu";
import { useAuth } from "../../context/Auth";
import { useNavbarContext } from "../../context/NavBarContext";
import "./style.scss";

export default function Home() {
  const { handleIsHome } = useNavbarContext();
  const { user } = useAuth()
  const isAdmin = user.user_metadata.isAdmin

  useEffect(() => {
    handleIsHome(true);
  }, [handleIsHome]);

  return (
    <div className="home-container">
      <h1>Selecione uma opção:</h1>
      <div className="button">
        <ButtonMenu path="/agendamento">
          <img src={Calendar} alt="Agenda" />
          <p>Agendamento</p>
        </ButtonMenu>
        {isAdmin && (
          <ButtonMenu path="/cadastros">
            <img src={Cadastrar} alt="Cadastrar" />
            <p>Cadastros</p>
          </ButtonMenu>
        )}
        <ButtonMenu path="/ponto">
          <img src={Ponto} alt="Ponto" />
          <p>Ponto</p>
        </ButtonMenu>
        <ButtonMenu path="/videos">
          <img src={Video} alt="Reinf" />
          <p>Videos Reinf</p>
        </ButtonMenu>
        <ButtonMenu path="/home">
          <img src={Treinamento} alt="Treinamentos" />
          <p className="text-center">Cursos e Treinamentos</p>
        </ButtonMenu>
        <ButtonMenu path="/home">
          <img src={Config} alt="Configurações" />
          <p>Configurações</p>
        </ButtonMenu>
      </div>
    </div>
  );
}
