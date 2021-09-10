/* eslint-disable no-unused-vars */
import { func } from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const SalaContext = createContext();

export function SalaProvider({ children }) {
  const [salas, setSalas] = useState([])

  async function buscaSalas() {
    let { data: salas, error } = await supabase
      .from('salas')
      .select("*")

    //console.log(salas)
    setSalas(salas)
  }

  useEffect(() => {
    buscaSalas()
  }, [])

  return (
    <SalaContext.Provider value={{
      salas,
      buscaSalas
    }}>
      {children}
    </SalaContext.Provider>
  )
}

export function useSalaContext() {
  return useContext(SalaContext)
}