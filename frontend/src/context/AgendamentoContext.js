/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { useItems } from './cadastros/ItemsContext'

const AgendamentoContext = React.createContext()

export function useAgendamento() {
  return useContext(AgendamentoContext)
}

export function AgendamentoProvider({ children }) {
  const [tiposAg, setTiposAg] = useState([])
  const [selectedTipo, setSelectedTipo] = useState([])
  const [selectedItem, setSelectedItem] = useState({})

  const { items } = useItems()

  const searchTiposAg = async () => {
    const { data: tipos_item, error } = await supabase
      .from('tipos_item')
      .select('*')

    setTiposAg(tipos_item)
  }


  /* function filterItemsByTipo() {
    const newItems = items.filter(el => el.id_tipo === selectedTipo.id)
    setFilteredItems(newItems)
  } */

  /*  useEffect(() => {
     function filterItemsByTipo() {
       const newItems = items.filter(el => el.id_tipo === selectedTipo.id)
       setFilteredItems(newItems)
     }
     filterItemsByTipo()
   }, [selectedTipo, items]) */

  useEffect(() => {
    searchTiposAg()
  }, [])
  const value = {
    tiposAg,
    selectedTipo,
    setSelectedTipo,
    selectedItem,
    setSelectedItem
  }
  return (
    <AgendamentoContext.Provider value={value}>
      {children}
    </AgendamentoContext.Provider>
  )
}