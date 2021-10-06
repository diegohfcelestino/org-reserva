/* eslint-disable no-unused-vars */
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import React, { useContext, useState, useEffect, useCallback } from 'react'
import { supabase } from '../supabaseClient'
// import { useItems } from './cadastros/ItemsContext'

const AgendamentoContext = React.createContext()

export function useAgendamento() {
  return useContext(AgendamentoContext)
}

export function AgendamentoProvider({ children }) {
  const [selectedTipo, setSelectedTipo] = useState()
  const [selectedItem, setSelectedItem] = useState('')
  const [agendamentos, setAgendamentos] = useState([])

  const dateMask = value => {
    const data = value.toString()
    const day = data.slice(8, 10)
    const month = data.slice(5, 7)
    const year = data.slice(0, 4)
    const dataCompleta = day + '/' + month + '/' + year
    return dataCompleta
  }

  /* function jsToSqlDate(jsDate) {
    
  }
 */
  function sqlToJsDate(sqlDate) {
    //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
    var sqlDateArr1 = sqlDate.split("-");
    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
    var sYear = sqlDateArr1[0];
    var sMonth = (Number(sqlDateArr1[1]) - 1).toString();
    //var sqlDateArr2 = sqlDateArr1[2].split(" ");
    //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
    //var sDay = sqlDateArr2[0];
    var sDay = sqlDateArr1[2];
    //var sqlDateArr3 = sqlDateArr2[1].split(":");
    //format of sqlDateArr3[] = ['hh','mm','ss.ms']
    // var sHour = sqlDateArr3[0];
    // var sMinute = sqlDateArr3[1];
    // var sqlDateArr4 = sqlDateArr3[2].split(".");
    //format of sqlDateArr4[] = ['ss','ms']
    // var sSecond = sqlDateArr4[0];
    // var sMillisecond = sqlDateArr4[1];

    return new Date(sYear, sMonth, sDay);
  }

  const getAgendamentos = async () => {
    const { data: agendamentos, error } = await supabase
      .from('agendamentos')
      .select(`
        *,
        items(description),
        tipos_item(name),
        profiles(name)
      `)
    setAgendamentos(agendamentos)
    console.log(agendamentos)
  }

  const getAgendamentosByTipo = async (tipo) => {
    const { data: agendamentos, error } = await supabase
      .from('agendamentos')
      .select(`
        *,
        items(description),
        tipos_item(name),
        profiles(email, name)
      `)
      .filter('id_tipo', 'eq', tipo)
    setAgendamentos(agendamentos)
  }

  const getAgendamentosByTipoData = async (tipo, data) => {
    const { data: agendamentos, error } = await supabase
      .from('agendamentos')
      .select(`
        *,
        items(description),
        tipos_item(name),
        profiles(email, name)
      `)
      .match({ id_tipo: tipo, dt_inicio: data })
    setAgendamentos(agendamentos)
    console.log(agendamentos)
  }

  async function insertAgendamento(agendamento) {
    const { data, error } = await supabase
      .from('agendamentos')
      .insert([agendamento])

    if (error) {
      return alert('Erro ao agendar!')
    } else {
      getAgendamentosByTipo(parseInt(selectedTipo))
    }
  }

  async function checkDate(date) {
    const { data, error } = await supabase
      .from('agendamentos')
      .select(`
        *,
        items(description),
        tipos_item(name),
        profiles(email, name)
      `)
      .filter('id_tipo', 'eq', 1)
      .eq('id_item', selectedItem)
    const salas = data.filter(sala => sala.dt_inicio === date)

    setAgendamentos(salas)
  }

  useEffect(() => {
    getAgendamentos()
  }, [])

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
    sqlToJsDate
  }
  return (
    <AgendamentoContext.Provider value={value}>
      {children}
    </AgendamentoContext.Provider>
  )
}