/* eslint-disable no-unused-vars */
import { func } from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const CarroContext = createContext();

export function CarroProvider({ children }) {
  const [carros, setCarros] = useState([])

  async function buscaCarros() {
    let { data: carros, error } = await supabase
      .from('carros')
      .select("*")
      .order('id', { ascending: true })

    // console.log(carros)
    setCarros(carros)
  }

  async function insertCarro(car) {
    const { data, error } = await supabase
      .from('carros')
      .insert([
        { name_carro: car }
      ])

    if (error) {
      return alert(error)
    } else {
      buscaCarros()
    }
  }

  useEffect(() => {
    buscaCarros()
  }, [])

  return (
    <CarroContext.Provider value={{
      carros,
      buscaCarros,
      insertCarro,
    }}>
      {children}
    </CarroContext.Provider>
  )
}

export function useCarroContext() {
  return useContext(CarroContext)
}