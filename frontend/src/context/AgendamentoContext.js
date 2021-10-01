/* eslint-disable no-unused-vars */
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
    dateMask,
    checkDate
  }
  return (
    <AgendamentoContext.Provider value={value}>
      {children}
    </AgendamentoContext.Provider>
  )
}