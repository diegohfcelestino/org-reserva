/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect, useCallback } from 'react'
import { supabase } from '../supabaseClient'
// import { useItems } from './cadastros/ItemsContext'

const AgendamentoContext = React.createContext()

export function useAgendamento() {
  return useContext(AgendamentoContext)
}

export function AgendamentoProvider({ children }) {
  const [tiposAg, setTiposAg] = useState([])
  const [selectedTipo, setSelectedTipo] = useState()
  const [selectedItem, setSelectedItem] = useState('')
  const [agendamentos, setAgendamentos] = useState([])

  // const { items } = useItems()

  const dataMask = value => {
    const data = value.toString()
    const dia = data.slice(8, 10)
    const mes = data.slice(5, 7)
    const ano = data.slice(0, 4)
    const dataCompleta = dia + '/' + mes + '/' + ano
    return dataCompleta
  }

  const searchTiposAg = async () => {
    const { data: tipos_item, error } = await supabase
      .from('tipos_item')
      .select('*')

    setTiposAg(tipos_item)
  }

  const getAgendamentos = async () => {
    const { data: agendamentos, error } = await supabase
      .from('agendamentos')
      .select(`
        *,
        items(description),
        tipos_item(name),
        profiles(email)
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
        profiles(email)
      `)
      .filter('id_tipo', 'eq', tipo)
    console.log(agendamentos)
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

  useEffect(() => {
    searchTiposAg()
    getAgendamentos()
  }, [])

  const value = {
    tiposAg,
    selectedTipo,
    setSelectedTipo,
    selectedItem,
    setSelectedItem,
    insertAgendamento,
    agendamentos,
    getAgendamentos,
    setAgendamentos,
    getAgendamentosByTipo,
    dataMask
  }
  return (
    <AgendamentoContext.Provider value={value}>
      {children}
    </AgendamentoContext.Provider>
  )
}