/* eslint-disable no-unused-vars */
import { hoursToMinutes } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
// import { useItems } from './cadastros/ItemsContext'

const AgendamentoContext = React.createContext();

export function useAgendamento() {
  return useContext(AgendamentoContext);
}

export function AgendamentoProvider({ children }) {
  const [selectedTipo, setSelectedTipo] = useState();
  const [selectedItem, setSelectedItem] = useState("");
  const [agendamentos, setAgendamentos] = useState([]);

  function calculaHoras(hr1, hr2) {
    const h1 = hr1.split(':')
    let hora1 = parseInt(hoursToMinutes(h1[0])) + parseInt(h1[1])

    const h2 = hr2.split(':')
    const hora2 = parseInt(hoursToMinutes(h2[0])) + parseInt(h2[1])
    hora1 -= hora2

    return hora1
  }

  function renderHora(hr) {
    var newHr = hr / 60
    const hora = Math.trunc(newHr)
    const minutos = Math.round((newHr - hora) * 60)
    if (minutos < 10) {
      return hora + ":" + 0 + minutos
    } else {
      return hora + ":" + minutos
    }
  }

  const dateMask = (value) => {
    const data = value.toString();
    const day = data.slice(8, 10);
    const month = data.slice(5, 7);
    const year = data.slice(0, 4);
    const dataCompleta = day + "/" + month + "/" + year;
    return dataCompleta;
  };


  function sqlToJsDate(sqlDate) {
    var sqlDateArr1 = sqlDate.split("-");
    var sYear = sqlDateArr1[0];
    var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
    var sDay = sqlDateArr1[2];
    return new Date(sYear, sMonth, sDay);
  }

  const getAgendamentos = async () => {
    const { data: agendamentos, error } = await supabase.from("agendamentos")
      .select(`
        *,
        items(description),
        tipos_item(name),
        profiles(name)
      `);
    setAgendamentos(agendamentos);
  };

  const getAgendamentosByTipo = async (tipo) => {
    const { data: agendamentos, error } = await supabase
      .from("agendamentos")
      .select(
        `
        *,
        items(description),
        tipos_item(name),
        profiles(email, name)
      `
      )
      .filter("id_tipo", "eq", tipo)
      .order("dt_inicio", { ascending: false });
    setAgendamentos(agendamentos);
  };

  const getAgendamentosByTipoData = async (tipo, data) => {
    const { data: agendamentos, error } = await supabase
      .from("agendamentos")
      .select(
        `
        *,
        items(description),
        tipos_item(name),
        profiles(email, name)
      `
      )
      .match({ id_tipo: tipo, dt_inicio: data });
    setAgendamentos(agendamentos);
  };

  async function insertAgendamento(agendamento) {
    const { data, error } = await supabase
      .from("agendamentos")
      .insert([agendamento]);

    if (error) {
      return alert("Erro ao agendar!");
    } else {
      getAgendamentosByTipo(parseInt(selectedTipo));
    }
  }

  async function checkDate(date) {
    const { data, error } = await supabase
      .from("agendamentos")
      .select(
        `
        *,
        items(description),
        tipos_item(name),
        profiles(email, name)
      `
      )
      .filter("id_tipo", "eq", 1)
      .eq("id_item", selectedItem);
    const salas = data.filter((sala) => sala.dt_inicio === date);

    setAgendamentos(salas);
  }



  useEffect(() => {
    getAgendamentos();
  }, []);

  const value = {
    selectedTipo,
    setSelectedTipo,
    selectedItem,
    setSelectedItem,
    insertAgendamento,
    agendamentos,
    getAgendamentos,
    setAgendamentos,
    getAgendamentosByTipo,
    getAgendamentosByTipoData,
    dateMask,
    checkDate,
    sqlToJsDate,
    calculaHoras,
    renderHora
  };
  return (
    <AgendamentoContext.Provider value={value}>
      {children}
    </AgendamentoContext.Provider>
  );
}
