/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const SalaContext = createContext();

export function SalaProvider({ children }) {
  const [salas, setSalas] = useState([])

  async function buscaSalas() {
    const { data: salas, error } = await supabase
      .from('salas')
      .select("*")
      .order('id', { ascending: true })

    // console.log(salas)
    setSalas(salas)
  }

  async function insertSala(room) {
    const { data, error } = await supabase
      .from('salas')
      .insert([
        { name_sala: room }
      ])

    if (error) {
      return alert(error)
    } else {
      buscaSalas()
    }
  }

  async function deleteSala(id) {
    const { data, error } = await supabase
      .from('salas')
      .delete()
      .match({ id: id })

    if (error) {
      return alert(error)
    } else {
      buscaSalas()
    }
  }

  async function updateSala(room) {
    const { data, error } = await supabase
      .from('salas')
      .update(room)
      .match({ id: room.id })

    if (error) {
      console.log(data)
      return alert('Error updating room')
    } else {
      buscaSalas()
      return data
    }
  }

  useEffect(() => {
    buscaSalas()
  }, [])

  return (
    <SalaContext.Provider value={{
      salas,
      buscaSalas,
      insertSala,
      deleteSala,
      updateSala
    }}>
      {children}
    </SalaContext.Provider>
  )
}

export function useSalaContext() {
  return useContext(SalaContext)
}