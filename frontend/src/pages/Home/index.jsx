import React from 'react';
import ButtonMenu from '../../components/ButtonMenu';

import Cadastrar from '../../assets/icons/online-form.svg'
import Calendar from '../../assets/icons/calendar-date.svg'
import Config from '../../assets/icons/config.svg'
import Ponto from '../../assets/icons/realtime.svg'
import Treinamento from '../../assets/icons/online-learning.svg'
import Video from '../../assets/icons/video.svg'

import './style.scss'

export default function Home() {
  return (
    <div className="home-container">
      <h1>Selecione uma opção:</h1>
      <div className="button">
        <ButtonMenu>
          <img src={Calendar} alt="Agenda" />
          <p>Agendamento</p>
        </ButtonMenu>
        <ButtonMenu path="/cadastros">
          <img src={Cadastrar} alt="Cadastrar" />
          <p>Cadastros</p>
        </ButtonMenu>
        <ButtonMenu path="/cadastros">
          <img src={Ponto} alt="Cadastrar" />
          <p>Ponto</p>
        </ButtonMenu>
        <ButtonMenu path="/cadastros">
          <img src={Video} alt="Cadastrar" />
          <p>Videos Reinf</p>
        </ButtonMenu>
        <ButtonMenu path="/cadastros">
          <img src={Treinamento} alt="Cadastrar" />
          <p className="text-center">Cursos e Treinamentos</p>
        </ButtonMenu>
        <ButtonMenu path="/">
          <img src={Config} alt="Configurações" />
          <p>Configurações</p>
        </ButtonMenu>
      </div>
    </div >
  )
}

